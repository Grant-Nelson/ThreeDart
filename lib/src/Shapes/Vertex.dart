part of ThreeDart.Shapes;

class Vertex {
  // TODO: Need to add Shape to check for ownership.
  List<Line> _lines;
  List<Face> _faces;
  int _index;
  Math.Point3 _loc;
  Math.Vector3 _norm;
  Math.Vector3 _binm;
  Math.Point2 _txt;
  Math.Color4 _clr;
  double _weight;

  Vertex({Math.Point3 loc: null, Math.Vector3 norm: null, Math.Vector3 binm: null,
          Math.Point2 txt: null, Math.Color4 clr: null, double weight: 0.0}) {
    this._lines = new List<Line>();
    this._faces = new List<Face>();
    this._index = 0;
    this._loc = loc;
    this._norm = norm;
    this._binm = binm;
    this._txt = txt;
    this._clr = clr;
    this._weight = weight;
  }

  Vertex copy() {
    return new Vertex(
      loc:  (this._loc  == null)? null: this._loc.copy(),
      norm: (this._norm == null)? null: this._norm.copy(),
      binm: (this._binm == null)? null: this._binm.copy(),
      txt:  (this._txt  == null)? null: this._txt.copy(),
      clr:  (this._clr  == null)? null: this._clr.copy(),
      weight: this._weight
    );
  }

  List<Line> get lines => this._lines;
  List<Face> get faces => this._faces;
  int get index => this._index;

  Math.Point3 get location => this._loc;
  set location(Math.Point3 loc) => this._loc = loc;

  Math.Vector3 get normal => this._norm;
  set normal(Math.Vector3 norm) => this._norm = (norm == null)? null: norm.normal();

  Math.Vector3 get binormal => this._binm;
  set binormal(Math.Vector3 binm) => this._binm =  (binm == null)? null: binm.normal();

  Math.Point2 get texture => this._txt;
  set texture(Math.Point2 txt) => this._txt = txt;

  Math.Color4 get color => this._clr;
  set color(Math.Color4 clr) => this._clr = clr;

  double get weight => this._weight;
  set weight(double weight) => this._weight = weight;

  List<double> listFor(Data.VertexType type) {
    if (type == Data.VertexType.Pos) return this._loc.toList();
    else if (type == Data.VertexType.Norm) return this._norm.toList();
    else if (type == Data.VertexType.Binm) return this._binm.toList();
    else if (type == Data.VertexType.Txt) return this._txt.toList();
    else if (type == Data.VertexType.Clr3) return new Math.Color3.fromColor4(this._clr).toList();
    else if (type == Data.VertexType.Clr4) return this._clr.toList();
    else if (type == Data.VertexType.Weight) return new List<double>.from([ this._weight ]);
    else return new List<double>();
  }

  bool calculateNormal() {
    if (this._norm != null) return true;
    Math.Vector3 normSum = new Math.Vector3.zero();
    for (Face face in this._faces) {
      Math.Vector3 norm = (face == null) ? null : face.normal;
      if (norm != null) normSum += norm;
    }
    this._norm = normSum.normal();
    return true;
  }

  bool calculateBinormal() {
    if (this._binm != null) return true;
    Math.Vector3 binmSum = new Math.Vector3.zero();
    for (Face face in this._faces) {
      Math.Vector3 binm = (face == null) ? null : face.binormal;
      if(binm != null) binmSum += binm;
    }
    this._binm = binmSum.normal();
    return true;
  }

  /// @note  Does not compare indices, lines, and faces.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Vertex) return false;
    Vertex ver = other as Vertex;
    if (this._loc != ver._loc) return false;
    if (this._norm != ver._norm) return false;
    if (this._binm != ver._binm) return false;
    if (this._txt != ver._txt) return false;
    if (this._clr != ver._clr) return false;
    if (Math.Comparer.equals(this._weight, ver._weight)) return false;
    return true;
  }

  String toString() {
    String result = Math.formatInt(this._index)+' {';
    if (this._loc != null) {
      result += this._loc.toString()+', ';
    } else {
      result += '-, ';
    }
    if (this._norm != null) {
      result += this._norm.toString()+', ';
    } else {
      result += '-, ';
    }
    if (this._binm != null) {
      result += this._binm.toString()+', ';
    } else {
      result += '-, ';
    }
    if (this._txt != null) {
      result += this._txt.toString()+', ';
    } else {
      result += '-, ';
    }
    if (this._clr != null) {
      result += this._clr.toString()+', ';
    } else {
      result += '-, ';
    }
    result += Math.formatDouble(this._weight)+'}';
    return result;
  }
}
