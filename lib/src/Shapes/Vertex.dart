part of ThreeDart.Shapes;

/// A vertex of a shape with all of the renderable elements it is used.
class Vertex {
  LeafNode _leaf;

  List<Point> _points;

  List<Line> _lines1;
  List<Line> _lines2;

  List<Face> _faces1;
  List<Face> _faces2;
  List<Face> _faces3;

  int _index;
  Math.Point3 _loc;
  Math.Vector3 _norm;
  Math.Vector3 _binm;
  Math.Point2 _txt2D;
  Math.Vector3 _txtCube;
  Math.Color4 _clr;
  double _weight;
  Math.Point4 _bending;

  /// Creates a new vertex with the default values.
  Vertex({Data.VertexType type: null,
          Math.Point3 loc: null, Math.Vector3 norm: null, Math.Vector3 binm: null,
          Math.Point2 txt2D: null, Math.Vector3 txtCube: null, Math.Color4 clr: null,
          double weight: 0.0, Math.Point4 bending: null}) {
    this._leaf   = null;
    this._points = new List<Point>();
    this._lines1 = new List<Line>();
    this._lines2 = new List<Line>();
    this._faces1 = new List<Face>();
    this._faces2 = new List<Face>();
    this._faces3 = new List<Face>();
    type ??= Data.VertexType.All;

    this._index   = 0;
    this._loc     = type.has(Data.VertexType.Pos)?     loc:     null;
    this._norm    = type.has(Data.VertexType.Norm)?    norm:    null;
    this._binm    = type.has(Data.VertexType.Binm)?    binm:    null;
    this._txt2D   = type.has(Data.VertexType.Txt2D)?   txt2D:   null;
    this._txtCube = type.has(Data.VertexType.TxtCube)? txtCube: null;
    this._clr     = type.has(Data.VertexType.Color)?   clr:     null;
    this._weight  = type.has(Data.VertexType.Weight)?  weight:  0.0;
    this._bending = type.has(Data.VertexType.Bending)? bending: null;
  }

  /// Creates a copy of the vertex values.
  Vertex copy([Data.VertexType type = null]) {
    return new Vertex(
      type:    type,
      loc:     this._loc,
      norm:    this._norm,
      binm:    this._binm,
      txt2D:   this._txt2D,
      txtCube: this._txtCube,
      clr:     this._clr,
      weight:  this._weight,
      bending: this._bending);
  }

  /// Trims the vertex to have just the given vertex type,
  /// everything else is nulled out.
  void trim(Data.VertexType type) {
    if (!type.has(Data.VertexType.Pos))     this._loc     = null;
    if (!type.has(Data.VertexType.Norm))    this._norm    = null;
    if (!type.has(Data.VertexType.Binm))    this._binm    = null;
    if (!type.has(Data.VertexType.Txt2D))   this._txt2D   = null;
    if (!type.has(Data.VertexType.TxtCube)) this._txtCube = null;
    if (!type.has(Data.VertexType.Color))   this._clr     = null;
    if (!type.has(Data.VertexType.Weight))  this._weight  = 0.0;
    if (!type.has(Data.VertexType.Bending)) this._bending = null;
  }

  /// The leaf node this vertex belongs to.
  LeafNode get leafNode => this._leaf;

  /// The shape the vertex belongs to.
  Shape get shape => this._leaf?._shape;

  /// The points which use this vertex.
  VertexPointCollection get points => new VertexPointCollection._(this);

  /// The lines which use this vertex.
  VertexLineCollection get lines => new VertexLineCollection._(this);

  /// The faces which use this vertex.
  VertexFaceCollection get faces => new VertexFaceCollection._(this);

  /// The index of this vertex in the shape.
  int get index {
    this.shape?.vertices?._updateIndices();
    return this._index;
  }

  /// Indicates if this vertex has any attached renderable elements, true if not.
  bool get isEmpty => this.points.isEmpty && this.lines.isEmpty && this.faces.isEmpty;

  /// The 3D location of the vertex.
  Math.Point3 get location => this._loc;
  set location(Math.Point3 loc) {
    if (this._loc != loc) {
      this._loc = loc;
      // TODO: MUST UPDATE LOCATION IN OCTREE!!
      this._leaf?._shape?.onVertexModified(this);
    }
  }

  /// The 3D normal vector of the vertex.
  Math.Vector3 get normal => this._norm;
  set normal(Math.Vector3 norm) {
    norm = norm?.normal();
    if (this._norm != norm) {
      this._norm = norm;
      this._leaf?._shape?.onVertexModified(this);
    }
  }

  /// The 3D binormal vector of the vertex.
  Math.Vector3 get binormal => this._binm;
  set binormal(Math.Vector3 binm) {
    binm = binm?.normal();
    if (this._binm != binm) {
      this._binm = binm;
      this._leaf?._shape?.onVertexModified(this);
    }
  }

  /// The 2D texture coordinate of the vertex.
  Math.Point2 get texture2D => this._txt2D;
  set texture2D(Math.Point2 txt2D) {
    if (this._txt2D != txt2D) {
      this._txt2D = txt2D;
      this._leaf?._shape?.onVertexModified(this);
    }
  }

  /// The cube texture coordinate of the vertex.
  Math.Vector3 get textureCube => this._txtCube;
  set textureCube(Math.Vector3 txtCube) {
    if (this._txtCube != txtCube) {
      this._txtCube = txtCube;
      this._leaf?._shape?.onVertexModified(this);
    }
  }

  /// The RGBA color of the vertex.
  Math.Color4 get color => this._clr;
  set color(Math.Color4 clr) {
    if (this._clr != clr) {
      this._clr = clr;
      this._leaf?._shape?.onVertexModified(this);
    }
  }

  /// The weight value of the vertex.
  double get weight => this._weight;
  set weight(double weight) {
    if (this._weight != weight) {
      this._weight = weight;
      this._leaf?._shape?.onVertexModified(this);
    }
  }

  /// The bending values of the vertex.
  Math.Point4 get bending => this._bending;
  set bending(Math.Point4 bending) {
    if (this._bending != bending) {
      this._bending = bending;
      this._leaf?._shape?.onVertexModified(this);
    }
  }

  /// Gets the list of doubles for the vertex component for the given [type].
  List<double> listFor(Data.VertexType type) {
    if (type == Data.VertexType.Pos) {
      if (this._loc == null) return [0.0, 0.0, 0.0];
      else return this._loc.toList();
    } else if (type == Data.VertexType.Norm) {
      if (this._norm == null) return [0.0, 1.0, 0.0];
      else return this._norm.toList();
    } else if (type == Data.VertexType.Binm) {
      if (this._binm == null) return [0.0, 0.0, 1.0];
      else return this._binm.toList();
    } else if (type == Data.VertexType.Txt2D) {
      if (this._txt2D == null) return [0.0, 0.0];
      else return this._txt2D.toList();
    } else if (type == Data.VertexType.TxtCube) {
      if (this._txtCube == null) return [0.0, 0.0, 0.0];
      else return this._txtCube.toList();
    } else if (type == Data.VertexType.Clr3) {
      if (this._clr == null) return [1.0, 1.0, 1.0];
      else return [this._clr.red, this._clr.green, this._clr.blue];
    } else if (type == Data.VertexType.Clr4) {
      if (this._clr == null) return [1.0, 1.0, 1.0, 1.0];
      else return this._clr.toList();
    } else if (type == Data.VertexType.Weight) {
      return [ this._weight ];
    } else if (type == Data.VertexType.Bending) {
      if (this._bending == null) return [-1.0, -1.0, -1.0, -1.0];
      else return this._bending.toList();
    } else return [];
  }

  /// Calculates the normal vector for this vertex based off of the
  /// faces attached to this vertex. If the normal has already been
  /// set then this will have no effect.
  bool calculateNormal() {
    if (this._norm != null) return true;
    this._leaf?._shape?._changed?.suspend();
    Math.Vector3 normSum = Math.Vector3.zero;
    for (Face face in this.faces.iterable) {
      Math.Vector3 norm = face?.normal;
      if (norm != null) normSum += norm;
    }
    this._norm = normSum.normal();
    this._leaf?._shape?.onVertexModified(this);
    this._leaf?._shape?._changed?.resume();
    return true;
  }

  /// Calculates the binormal vector for this vertex based off of the
  /// faces attached to this vertex. If the binormal has already been
  /// set then this will have no effect.
  bool calculateBinormal() {
    if (this._binm != null) return true;
    this._leaf?._shape?._changed?.suspend();
    Math.Vector3 binmSum = Math.Vector3.zero;
    for (Face face in this.faces.iterable) {
      Math.Vector3 binm = face?.binormal;
      if(binm != null) binmSum += binm;
    }
    this._binm = binmSum.normal();
    this._leaf?._shape?.onVertexModified(this);
    this._leaf?._shape?._changed?.resume();
    return true;
  }

  /// Finds the first line which starts at this vertex
  /// and ends at the given [ver].
  Line firstLineTo(Vertex ver) {
    final int count = this._lines1.length;
    for (int i = 0; i < count; ++i) {
      Line line = this._lines1[i];
      if (line.vertex2.index == ver.index) return line;
    }
    return null;
  }

  /// Finds the first line which goes between this vertex
  /// and the given [ver] in either direction.
  Line firstLineBetween(Vertex ver) {
    Line line = this.firstLineTo(ver);
    if (line != null) return line;
    return ver.firstLineTo(this);
  }

  /// Determines if the given [other] value is a vertex with the
  /// same values as this vertex.
  /// Does not compare the shape, indices, points, lines, or faces.
  bool same(var other) {
    if (identical(this, other)) return true;
    if (other is! Vertex) return false;
    Vertex ver = other as Vertex;
    if (this._loc != ver._loc) return false;
    if (this._norm != ver._norm) return false;
    if (this._binm != ver._binm) return false;
    if (this._txt2D != ver._txt2D) return false;
    if (this._txtCube != ver._txtCube) return false;
    if (this._clr != ver._clr) return false;
    if (Math.Comparer.equals(this._weight, ver._weight)) return false;
    if (this._bending != ver._bending) return false;
    return true;
  }

  /// Determines if the given [other] value is identical to their vertex.
  bool operator ==(var other) => identical(this, other);

  /// Gets the string for this vertex.
  String toString() => this.format();

  /// Gets the formatted string for this vertex with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = new List<String>();
    parts.add(Math.formatInt(this._index));
    if (this._loc != null) parts.add(this._loc.toString());
    else                   parts.add("-");
    if (this._norm != null) parts.add(this._norm.toString());
    else                    parts.add("-");
    if (this._binm != null) parts.add(this._binm.toString());
    else                    parts.add("-");
    if (this._txt2D != null) parts.add(this._txt2D.toString());
    else                     parts.add("-");
    if (this._txtCube != null) parts.add(this._txtCube.toString());
    else                       parts.add("-");
    if (this._clr != null) parts.add(this._clr.toString());
    else                   parts.add("-");
    parts.add(Math.formatDouble(this._weight));
    if (this._bending != null) parts.add(this._bending.toString());
    else                       parts.add("-");
    String result = parts.join(", ");
    return "$indent{$result}";
  }
}
