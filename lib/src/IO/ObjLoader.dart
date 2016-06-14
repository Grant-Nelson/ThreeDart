part of ThreeDart.IO;

class _objVertex {
  Math.Point3 pos;
  Map<String, Shapes.Vertex> verts;

  _objVertex(Math.Point3 this.pos) {
    this.verts = new Map<String, Shapes.Vertex>();
  }
}

// TODO: Comment
// Still under-construction
class ObjLoader {

  static Future<Core.Entity> fromFile(String fileName) async {
    try {
      ObjLoader loader = new ObjLoader._();
      String data = await HttpRequest.getString(fileName);
      loader.processMultiline(data);
      print("Done.");
      // print("Vertices: ${loader.shape.vertices.length}");
      // print("Faces: ${loader.shape.faces.length}");
      return loader.entity;
    } catch(e) {
      print("$fileName: $e");
      throw new Exception("$fileName: $e");
    }
  }

  RegExp _commentRegex;
  RegExp _numRegex;
  RegExp _posRegex;
  RegExp _txtRegex;
  RegExp _normRegex;
  RegExp _vecRegex;
  RegExp _pointRegex;
  RegExp _lineRegex;
  RegExp _faceRegex;
  RegExp _mtrlRegex;
  RegExp _useRegex;
  RegExp _objRegex;
  RegExp _groupRegex;
  RegExp _smoothRegex;
  List<_objVertex> _posList;
  List<Math.Point2> _texList;
  List<Math.Vector3> _normList;
  Techniques.MaterialLight _mat;
  Shapes.Shape _shape;
  Core.Entity _entity;
  Core.Entity _rootEntity;

  ObjLoader._() {
    this._commentRegex = new RegExp(r'^\s*#.*$');
    String d = r'((?:-|\+)?\d+(?:\.\d+)?(?:e(?:-|\+)?\d+)?)';
    this._numRegex = new RegExp(d);
    this._posRegex = new RegExp('^v(?:\\s+$d)*\$');
    this._txtRegex = new RegExp('^vt(?:\\s+$d)*\$');
    this._normRegex = new RegExp('^vn(?:\\s+$d)*\$');
    String v = r'((?:-|\+)?\d+)(?:/((?:-|\+)?\d*)(?:/((?:-|\+)?\d*))?)?';
    this._vecRegex = new RegExp(v);
    this._pointRegex = new RegExp('^p(?:\\s+$v)*\$');
    this._lineRegex = new RegExp('^l(?:\\s+$v)*\$');
    this._faceRegex = new RegExp('^f(?:\\s+$v)*\$');
    this._mtrlRegex = new RegExp(r'^mtllib\s*.*$');
    this._useRegex = new RegExp(r'^usemtl\s*.*$');
    this._groupRegex = new RegExp(r'^g\s*.*$');
    this._objRegex = new RegExp(r'^o\s*.*$');
    this._smoothRegex = new RegExp(r'^s\s*.*$');
    this._posList = new List<_objVertex>();
    this._texList = new List<Math.Point2>();
    this._normList = new List<Math.Vector3>();
    this._mat = null;
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

  void processMultiline(String data) {
    this.processLines(data.split("\n"));
  }

  void processLines(List<String> lines) {
    for (int i = 0; i < lines.length; ++i) {
      if ((i % 100) == 0) print("${i*100.0/lines.length}");
      try {
        this.processLine(lines[i]);
      } catch(e) {
        throw new Exception("Line ${i+1}: $e");
      }
    }
  }

  void processLine(String line) {
    try {
      line = line.trim();
      if (line.length <= 0) return;
      if (this._processComment(line)) return;
      if (this._processPos(line)) return;
      if (this._processTxt(line)) return;
      if (this._processNorm(line)) return;
      if (this._processPoint(line)) return;
      if (this._processLine(line)) return;
      if (this._processFace(line)) return;
      if (this._processMtrl(line)) return;
      if (this._processUse(line)) return;
      if (this._processObjName(line)) return;
      if (this._processGroup(line)) return;
      if (this._processSmooth(line)) return;
      throw new Exception("Unknown or unsupported line.");
    } catch(e) {
      throw new Exception("Line: \"$line\": $e");
    }
  }

  void _startShape() {
    this._mat = new Techniques.MaterialLight();
    this._shape = new Shapes.Shape();
    this._entity = new Core.Entity(shape: this._shape, tech: this._mat);
    this._rootEntity.children.add(this._entity);
  }

  bool _processComment(String line) {
    if (!this._commentRegex.hasMatch(line)) return false;
    return true;
  }

  List<double> _getNumbers(String line) {
    List<double> list = new List<double>();
    for (Match match in this._numRegex.allMatches(line)) {
      list.add(double.parse(match.group(1)));
    }
    return list;
  }

  bool _processPos(String line) {
    if (!this._posRegex.hasMatch(line)) return false;
    List<double> list = this._getNumbers(line);
    if (list.length < 3)
      throw new Exception("Positions must have at least 3 numbers.");
    if (list.length > 4)
      throw new Exception("Positions must have at most than 4 numbers.");
    if (list.length == 4) {
      if (!Math.Comparer.equals(list[3], 1.0))
        throw new Exception("Currently, non-one w values in positions are not supported.");
    }
    this._posList.add(new _objVertex(new Math.Point3.fromList(list)));
    return true;
  }

  bool _processTxt(String line) {
    if (!this._txtRegex.hasMatch(line)) return false;
    List<double> list = this._getNumbers(line);
    if (list.length < 2)
      throw new Exception("Textures must have at least 2 numbers.");
    if (list.length > 3)
      throw new Exception("Textures must have at most than 3 numbers.");
    if (list.length == 3) {
      if (!Math.Comparer.equals(list[2], 0.0))
        throw new Exception("Currently, non-zero z values in textures are not supported.");
    }
    this._texList.add(new Math.Point2.fromList(list));
    return true;
  }

  bool _processNorm(String line) {
    if (!this._normRegex.hasMatch(line)) return false;
    List<double> list = this._getNumbers(line);
    if (list.length != 3)
      throw new Exception("Normals must have exactly 3 numbers.");
    this._normList.add(new Math.Vector3.fromList(list));
    return true;
  }

  Shapes.Vertex _addVertex(Match match) {
    int posIndex = int.parse(match.group(1));
    final int count = this._posList.length;
    if ((posIndex < -count) || (posIndex > count))
      throw new Exception("The position index, $posIndex, was out of range [-$count..$count] or 0.");
    if (posIndex < 0) posIndex = count + posIndex + 1;
    posIndex--;

    int txtIndex = -1;
    if (match.groupCount >= 2) {
      String value = match.group(2);
      if ((value != null) && (value.length > 0)) {
        txtIndex = int.parse(value);
        final int count = this._texList.length;
        if ((txtIndex < -count) || (txtIndex > count))
          throw new Exception("The texture index, $txtIndex, was out of range [-$count..$count] or 0.");
        if (txtIndex < 0) txtIndex = count + txtIndex + 1;
        txtIndex--;
      }
    }

    int normIndex = -1;
    if (match.groupCount >= 3) {
      String value = match.group(3);
      if ((value != null) && (value.length > 0)) {
        normIndex = int.parse(value);
        final int count = this._normList.length;
        if ((normIndex < -count) || (normIndex > count))
          throw new Exception("The normal index, $normIndex, was out of range [-$count..$count] or 0.");
        if (normIndex < 0) normIndex = count + normIndex + 1;
        normIndex--;
      }
    }

    Shapes.Vertex vertex;
    _objVertex vert = this._posList[posIndex];
    // TODO: May have a repeat vertex with different indices.
    //       May want to change how lookup works.
    String key = "$txtIndex:$normIndex";
    if (vert.verts.containsKey(key)) {
      vertex = vert.verts[key];
    } else {
      vertex = new Shapes.Vertex();
      vertex.location = vert.pos;
      if (txtIndex >= 0) vertex.texture2D = this._texList[txtIndex];
      if (normIndex >= 0) vertex.normal = this._normList[normIndex];
      this._shape.vertices.add(vertex);
      vert.verts[key] = vertex;
    }

    return vertex;
  }

  bool _processPoint(String line) {
    if (!this._pointRegex.hasMatch(line)) return false;
    List<Shapes.Vertex> vertices = new List<Shapes.Vertex>();
    for (Match match in this._vecRegex.allMatches(line))
      vertices.add(this._addVertex(match));
    this._shape.points.addList(vertices);
    return true;
  }

  bool _processLine(String line) {
    if (!this._lineRegex.hasMatch(line)) return false;
    List<Shapes.Vertex> vertices = new List<Shapes.Vertex>();
    for (Match match in this._vecRegex.allMatches(line))
      vertices.add(this._addVertex(match));
    this._shape.lines.addLines(vertices);
    return true;
  }

  bool _processFace(String line) {
    if (!this._faceRegex.hasMatch(line)) return false;
    List<Shapes.Vertex> vertices = new List<Shapes.Vertex>();
    for (Match match in this._vecRegex.allMatches(line))
      vertices.add(this._addVertex(match));
    this._shape.faces.addFan(vertices);
    return true;
  }

  bool _processMtrl(String line) {
    if (!this._mtrlRegex.hasMatch(line)) return false;
    //
    // TODO: Implement matrial loading.
    //
    return true;
  }

  bool _processUse(String line) {
    if (!this._useRegex.hasMatch(line)) return false;
    //
    // TODO: Implement matrial loading.
    //
    return true;
  }

  bool _processObjName(String line) {
    if (!this._objRegex.hasMatch(line)) return false;
    // Object names are not used.
    return true;
  }

  bool _processGroup(String line) {
    if (!this._groupRegex.hasMatch(line)) return false;
    // Group names are not used.
    return true;
  }

  bool _processSmooth(String line) {
    if (!this._smoothRegex.hasMatch(line)) return false;
    // Custom smoothing not implemented.
    return true;
  }
}
