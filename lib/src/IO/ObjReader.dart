part of ThreeDart.IO;

/// An object to store vertices in while loading objects.
class _objVertex {

  /// The location of the vertex.
  Math.Point3 pos;

  /// All the vertices for this location.
  /// Vertices will have unique normal and texture coordinates.
  List<Shapes.Vertex> verts;

  /// Creates a new vertex store for the given location, [pos].
  _objVertex(Math.Point3 this.pos) {
    this.verts = new List<Shapes.Vertex>();
  }
}

/// Entity loader for loading *.obj files.
class _objReader {

  /// The texture loader to load all required images with.
  Textures.TextureLoader _txtLoader;

  /// The list of locations paired with created objects.
  List<_objVertex> _posList;

  /// The list of 2D texture coordinates.
  List<Math.Point2> _texList;

  /// The list of normal vectors.
  List<Math.Vector3> _normList;

  /// The map of material names to loaded material techniques.
  Map<String, Techniques.MaterialLight> _mtls;

  /// The event to fire to update the progress with.
  Events.Event _progress;

  /// The current name of the object part being loaded.
  String _name;

  /// The current material technique for the object being loaded.
  Techniques.MaterialLight _mat;

  /// The current shape being loaded for the current part of the object.
  Shapes.Shape _shape;

  /// The current entity for the shape being loaded.
  Core.Entity _entity;

  /// The root entity for the whole object containing other entities.
  Core.Entity _rootEntity;

  /// Creates a new object loader.
  _objReader(Textures.TextureLoader this._txtLoader,
    {Map<String, Techniques.MaterialLight> mtls: null, Events.Event progress: null}) {
    this._posList = new List<_objVertex>();
    this._texList = new List<Math.Point2>();
    this._normList = new List<Math.Vector3>();
    this._mtls = new Map<String, Techniques.MaterialLight>();
    this._progress = progress;
    this._name = "";
    this._mat = new Techniques.MaterialLight()
      ..ambient.color = new Math.Color3.gray(0.35)
      ..diffuse.color = new Math.Color3.gray(0.65);
    this._shape = null;
    this._entity = null;
    this._rootEntity = new Core.Entity();
    if (mtls != null) this._mtls.addAll(mtls);
    this._startShape();
  }

  /// Gets the entity containing the object which was loaded.
  /// The entity may be on it's own or it may contain many entities.
  Core.Entity get entity {
    if (this._rootEntity.children.length == 1)
      return this._rootEntity.children[0];
    return this._rootEntity;
  }

  /// Processes multiple lines of a *.obj file.
  Future processMultiline(String data, {bool strict: false, String dir: ""}) async {
    await this.processLines(data.split("\n"), strict: strict, dir: dir);
  }

  /// Processes a list of lines of a *.obj file.
  Future processLines(List<String> lines, {bool strict: false, String dir: ""}) async {
    for (int i = 0; i < lines.length; ++i) {
      if ((this._progress != null) && ((i % 1000) == 0))
        this._progress.emit(new ProgressEventArgs(this, i*100.0/lines.length, false));

      try {
        await this.processLine(lines[i], strict: strict, dir: dir);
      } catch(e) {
        throw new Exception("Line ${i+1}: $e");
      }
    }
  }

  /// Processes a single line of a *.obj file.
  Future processLine(String line, {bool strict: false, String dir: ""}) async {
    try {
      // Trim off comments and whitespace.
      int index = line.indexOf("#");
      if (index >= 0) line = line.substring(0, index);
      line = line.trim();
      if (line.length <= 0) return;

      // Strip off first part of line.
      List<String> parts = _stripFront(line);
      if (parts.length < 1) return;

      // Determine line type.
      switch (parts[0]) {
        case "v":      this._processPos(parts[1]);       return;
        case "vt":     this._processTxt(parts[1]);       return;
        case "vn":     this._processNorm(parts[1]);      return;
        case "p":      this._processPoint(parts[1]);     return;
        case "l":      this._processLine(parts[1]);      return;
        case "f":      this._processFace(parts[1]);      return;
        case "mtllib": await this._processLoadMtrl(parts[1], dir, strict); return;
        case "usemtl": this._processUseMtrl(parts[1]);   return;
        case "g":      this._processGroupName(parts[1]); return;
        case "o":      this._processObjName(parts[1]);   return;
        default:
          if (!strict) return;
          throw new Exception("Unknown or unsupported line type \"${parts[0]}\".");
      }
    } catch(e) {
      throw new Exception("Line: \"$line\": $e");
    }
  }

  /// Starts and prepares a new shape and entity if the current one isn't empty.
  void _startShape() {
    if ((this._entity == null) || (!this._shape.vertices.isEmpty)) {
      this._shape = new Shapes.Shape();
      this._entity = new Core.Entity(shape: this._shape);
      this._rootEntity.children.add(this._entity);
      for (_objVertex vec in this._posList) vec.verts.clear();
    }
    this._entity.technique = this._mat;
    this._entity.name = this._name;
  }

  /// Process a new vertex position (v) line.
  void _processPos(String data) {
    List<double> list = _getNumbers(data);
    if (list.length < 3)
      throw new Exception("Positions must have at least 3 numbers.");
    if (list.length > 4)
      throw new Exception("Positions must have at most than 4 numbers.");
    if (list.length == 4) {
      if (!Math.Comparer.equals(list[3], 1.0))
        throw new Exception("Currently, non-one w values in positions are not supported.");
    }
    this._posList.add(new _objVertex(new Math.Point3.fromList([list[0], list[1], list[2]])));
  }

  /// Process a new vertex texture (vt) line.
  void _processTxt(String data) {
    List<double> list = _getNumbers(data);
    if (list.length < 2)
      throw new Exception("Textures must have at least 2 numbers.");
    if (list.length > 3)
      throw new Exception("Textures must have at most than 3 numbers.");
    if (list.length == 3) {
      if (!Math.Comparer.equals(list[2], 0.0))
        throw new Exception("Currently, non-zero z values in textures are not supported.");
    }
    this._texList.add(new Math.Point2.fromList([list[0], list[1]]));
  }

  /// Process a new vertex normal (vn) line.
  void _processNorm(String data) {
    List<double> list = _getNumbers(data);
    if (list.length != 3)
      throw new Exception("Normals must have exactly 3 numbers.");
    this._normList.add(new Math.Vector3.fromList(list));
  }

  /// Adds a new vertex to the current shape.
  /// The [vertexStr] is in the vertex index/texture index/normal index form.
  Shapes.Vertex _addVertex(String vertexStr) {
    List<String> vertexParts = vertexStr.split('/');
    int posIndex = int.parse(vertexParts[0]);
    final int count = this._posList.length;
    if ((posIndex < -count) || (posIndex > count) || (posIndex == 0))
      throw new Exception("The position index, $posIndex, was out of range [-$count..$count] or 0.");
    if (posIndex < 0) posIndex = count + posIndex + 1;
    posIndex--;

    Math.Point2 txt2D = null;
    if (vertexParts.length > 1) {
      String value = vertexParts[1];
      if ((value != null) && (value.length > 0)) {
        int txtIndex = int.parse(value);
        final int count = this._texList.length;
        if ((txtIndex < -count) || (txtIndex > count) || (txtIndex == 0))
          throw new Exception("The texture index, $txtIndex, was out of range [-$count..$count] or 0.");
        if (txtIndex < 0) txtIndex = count + txtIndex + 1;
        txt2D = this._texList[txtIndex-1];
      }
    }

    Math.Vector3 norm = null;
    if (vertexParts.length > 2) {
      String value = vertexParts[2];
      if ((value != null) && (value.length > 0)) {
        int normIndex = int.parse(value);
        final int count = this._normList.length;
        if ((normIndex < -count) || (normIndex > count) || (normIndex == 0))
          throw new Exception("The normal index, $normIndex, was out of range [-$count..$count] or 0.");
        if (normIndex < 0) normIndex = count + normIndex + 1;
        norm = this._normList[normIndex-1];
      }
    }

    // TODO: Update once the Oct-tree is implements. Until the Oct-tree is implemented
    //       lookup vertex group by index in the list. This may cause repeat vertices.
    _objVertex vertGroup = this._posList[posIndex];
    for (Shapes.Vertex vertex in vertGroup.verts) {
      if ((vertex.texture2D == txt2D) && (vertex.normal == norm)) {
        return vertex;
      }
    }

    Shapes.Vertex vertex = new Shapes.Vertex();
    vertex.location = vertGroup.pos;
    vertex.texture2D = txt2D;
    vertex.normal = norm;
    this._shape.vertices.add(vertex);
    vertGroup.verts.add(vertex);
    return vertex;
  }

  /// Process a new point list (p) line.
  void _processPoint(String data) {
    List<String> parts = _sliceLine(data);
    List<Shapes.Vertex> vertices = new List<Shapes.Vertex>();
    final int count = parts.length;
    for (int i = 0; i < count; ++i)
      vertices.add(this._addVertex(parts[i]));
    this._shape.points.addList(vertices);
  }

  /// Process a new line list (l) line.
  void _processLine(String data) {
    List<String> parts = _sliceLine(data);
    List<Shapes.Vertex> vertices = new List<Shapes.Vertex>();
    final int count = parts.length;
    for (int i = 0; i < count; ++i)
      vertices.add(this._addVertex(parts[i]));
    this._shape.lines.addLines(vertices);
  }

  /// Process a new face list (f) line.
  void _processFace(String data) {
    List<String> parts = _sliceLine(data);
    List<Shapes.Vertex> vertices = new List<Shapes.Vertex>();
    final int count = parts.length;
    for (int i = 0; i < count; ++i)
      vertices.add(this._addVertex(parts[i]));
    this._shape.faces.addFan(vertices);
  }

  /// Process a new material loading (mtllib) line.
  Future _processLoadMtrl(String data, String dir, bool strict) async {
    String file = joinPath(dir, data);
    Map<String, Techniques.MaterialLight> mtls =
      await MtlType.fromFile(file, this._txtLoader, strict:strict);
    this._mtls.addAll(mtls);
  }

  /// Process a new use material (usemtl) line.
  void _processUseMtrl(String data) {
    this._mat = this._mtls[data];
    this._startShape();
  }

  /// Process a new object name (o) line.
  void _processObjName(String data) {
    this._name = data;
    this._startShape();
  }

  /// Process a new group name (g) line.
  void _processGroupName(String data) {
    this._name = data;
    this._startShape();
  }
}
