part of ThreeDart.IO;

class _objVertex {
  Math.Point3 pos;
  List<Shapes.Vertex> verts;

  _objVertex(Math.Point3 this.pos) {
    this.verts = new List<Shapes.Vertex>();
  }
}

// TODO: Comment
// Still under-construction
class ObjLoader {

  // TODO: Comment
  static Future<Core.Entity> fromFile(String fileName, Textures.TextureLoader txtLoader, {bool strict: false}) async {
    try {
      String dir = getPathTo(fileName);
      ObjLoader loader = new ObjLoader._(txtLoader);
      String data = await HttpRequest.getString(fileName);
      await loader.processMultiline(data, strict: strict, dir: dir);
      print("Done.");
      // print("Vertices: ${loader.shape.vertices.length}");
      // print("Faces: ${loader.shape.faces.length}");
      return loader.entity;
    } catch(e) {
      print("$fileName: $e");
      throw new Exception("$fileName: $e");
    }
  }

  Textures.TextureLoader _txtLoader;
  RegExp _slicerRegex;
  List<_objVertex> _posList;
  List<Math.Point2> _texList;
  List<Math.Vector3> _normList;
  Map<String, Techniques.MaterialLight> _mtls;
  String _name;
  Techniques.MaterialLight _mat;
  Shapes.Shape _shape;
  Core.Entity _entity;
  Core.Entity _rootEntity;

  ObjLoader._(Textures.TextureLoader this._txtLoader) {
    this._slicerRegex = new RegExp(r'([^\s]+)');
    this._posList = new List<_objVertex>();
    this._texList = new List<Math.Point2>();
    this._normList = new List<Math.Vector3>();
    this._mtls = new Map<String, Techniques.MaterialLight>();
    this._name = "";
    this._mat = new Techniques.MaterialLight()
      ..ambientColor = new Math.Color3.gray(0.35)
      ..diffuseColor = new Math.Color3.gray(0.65);
    this._shape = null;
    this._entity = null;
    this._rootEntity = new Core.Entity();
    this._startShape();
  }

  Core.Entity get entity {
    if (this._rootEntity.children.length == 1)
      return this._rootEntity.children[0];
    return this._rootEntity;
  }

  Future processMultiline(String data, {bool strict: false, String dir: ""}) async {
    await this.processLines(data.split("\n"), strict: strict, dir: dir);
  }

  Future processLines(List<String> lines, {bool strict: false, String dir: ""}) async {
    for (int i = 0; i < lines.length; ++i) {
      //if ((i % 1000) == 0) print("${i*100.0/lines.length}");
      try {
        await this.processLine(lines[i], strict: strict, dir: dir);
      } catch(e) {
        throw new Exception("Line ${i+1}: $e");
      }
    }
  }

  Future processLine(String line, {bool strict: false, String dir: ""}) async {
    try {
      // Trim off comments and whitespace.
      int index = line.indexOf("#");
      if (index >= 0) line = line.substring(0, index);
      line = line.trim();
      if (line.length <= 0) return;

            // Strip off first part of line.
      List<String> parts = this._stripFront(line);
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

  List<String> _stripFront(String line) {
    Match match = this._slicerRegex.firstMatch(line);
    if (match == null) return [];
    String front = match.group(1);
    String rest = line.substring(front.length).trim();
    return [front, rest];
  }

  List<String> _sliceLine(String data) {
    List<String> list = new List<String>();
    for (Match match in this._slicerRegex.allMatches(data)) {
      list.add(match.group(1));
    }
    return list;
  }

  List<double> _getNumbers(String data) {
    List<String> parts = this._sliceLine(data);
    List<double> values = new List<double>();
    final int count = parts.length;
    for (int i = 0; i < count; ++i)
      values.add(double.parse(parts[i]));
    return values;
  }

  void _processPos(String data) {
    List<double> list = this._getNumbers(data);
    if (list.length < 3)
      throw new Exception("Positions must have at least 3 numbers.");
    if (list.length > 4)
      throw new Exception("Positions must have at most than 4 numbers.");
    if (list.length == 4) {
      if (!Math.Comparer.equals(list[3], 1.0))
        throw new Exception("Currently, non-one w values in positions are not supported.");
    }
    this._posList.add(new _objVertex(new Math.Point3.fromList(list)));
  }

  void _processTxt(String data) {
    List<double> list = this._getNumbers(data);
    if (list.length < 2)
      throw new Exception("Textures must have at least 2 numbers.");
    if (list.length > 3)
      throw new Exception("Textures must have at most than 3 numbers.");
    if (list.length == 3) {
      if (!Math.Comparer.equals(list[2], 0.0))
        throw new Exception("Currently, non-zero z values in textures are not supported.");
    }
    this._texList.add(new Math.Point2.fromList(list));
  }

  void _processNorm(String data) {
    List<double> list = this._getNumbers(data);
    if (list.length != 3)
      throw new Exception("Normals must have exactly 3 numbers.");
    this._normList.add(new Math.Vector3.fromList(list));
  }

  Shapes.Vertex _addVertex(String vertexStr) {
    List<String> vertexParts = vertexStr.split('/');
    int posIndex = int.parse(vertexParts[0]);
    final int count = this._posList.length;
    if ((posIndex < -count) || (posIndex > count))
      throw new Exception("The position index, $posIndex, was out of range [-$count..$count] or 0.");
    if (posIndex < 0) posIndex = count + posIndex + 1;
    posIndex--;

    Math.Point2 txt2D = null;
    if (vertexParts.length > 1) {
      String value = vertexParts[1];
      if ((value != null) && (value.length > 0)) {
        int txtIndex = int.parse(value);
        final int count = this._texList.length;
        if ((txtIndex < -count) || (txtIndex > count))
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
        if ((normIndex < -count) || (normIndex > count))
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

  void _processPoint(String data) {
    List<String> parts = this._sliceLine(data);
    List<Shapes.Vertex> vertices = new List<Shapes.Vertex>();
    final int count = parts.length;
    for (int i = 0; i < count; ++i)
      vertices.add(this._addVertex(parts[i]));
    this._shape.points.addList(vertices);
  }

  void _processLine(String data) {
    List<String> parts = this._sliceLine(data);
    List<Shapes.Vertex> vertices = new List<Shapes.Vertex>();
    final int count = parts.length;
    for (int i = 0; i < count; ++i)
      vertices.add(this._addVertex(parts[i]));
    this._shape.lines.addLines(vertices);
  }

  void _processFace(String data) {
    List<String> parts = this._sliceLine(data);
    List<Shapes.Vertex> vertices = new List<Shapes.Vertex>();
    final int count = parts.length;
    for (int i = 0; i < count; ++i)
      vertices.add(this._addVertex(parts[i]));
    this._shape.faces.addFan(vertices);
  }

  Future _processLoadMtrl(String data, String dir, bool strict) async {
    String file = joinPath(dir, data);
    Map<String, Techniques.MaterialLight> mtls =
      await MtlLoader.fromFile(file, this._txtLoader, strict:strict);
    this._mtls.addAll(mtls);
  }

  void _processUseMtrl(String data) {
    this._mat = this._mtls[data];
    this._startShape();
  }

  void _processObjName(String data) {
    this._name = data;
    this._startShape();
  }

  void _processGroupName(String data) {
    this._name = data;
    this._startShape();
  }
}
