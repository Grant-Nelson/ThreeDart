part of ThreeDart.Shapes;

/// A face is a filled triangle defined by three vertices.
class Face {
  Vertex _ver1;
  Vertex _ver2;
  Vertex _ver3;

  Math.Vector3 _norm;
  Math.Vector3 _binm;

  /// Creates a new face with the given vertices.
  Face(Vertex ver1, Vertex ver2, Vertex ver3) {
    if (ver1 == null)
      throw new Exception("May not create a face with a null first vertex.");
    if (ver2 == null)
      throw new Exception("May not create a face with a null second vertex.");
    if (ver3 == null)
      throw new Exception("May not create a face with a null third vertex.");
    if (ver1.shape == null)
      throw new Exception("May not create a face with a first vertex which is not attached to a shape.");
    if ((ver1.shape != ver2.shape) || (ver1.shape != ver3.shape))
      throw new Exception("May not create a face with vertices attached to different shapes.");
    this._norm = null;
    this._binm = null;
    this._setVertex1(ver1);
    this._setVertex2(ver2);
    this._setVertex3(ver3);
    this._ver1.shape?.onFaceAdded(this);
  }

  /// Disposes this face.
  void dispose() {
    if (!this.disposed) {
      this._ver1.shape?.onFaceRemoved(this);
      this._removeVertex1();
      this._removeVertex2();
      this._removeVertex3();
    }
  }

  /// Trims all the faces down have the true values,
  /// everything else is nulled out.
  void trim({bool norm: true, bool binm: true}) {
    if (!norm) this._norm = null;
    if (!binm) this._binm = null;
  }

  /// Sets the first vertex to the given value.
  void _setVertex1(Vertex ver1) {
    this._ver1 = ver1;
    this._ver1._faces1.add(this);
    this._ver1.shape?._data?._addFace(this);
  }

  /// Sets the second vertex to the given value.
  void _setVertex2(Vertex ver2) {
    this._ver2 = ver2;
    this._ver2._faces2.add(this);
  }

  /// Sets the third vertex to the given value.
  void _setVertex3(Vertex ver3) {
    this._ver3 = ver3;
    this._ver3._faces3.add(this);
  }

  /// Removes the first vertex.
  void _removeVertex1() {
    if (this._ver1 != null) {
      this._ver1.shape?._data?._removeFace(this);
      this._ver1._faces1.remove(this);
      this._ver1 = null;
    }
  }

  /// Removes the second vertex.
  void _removeVertex2() {
    if (this._ver2 != null) {
      this._ver2._faces2.remove(this);
      this._ver2 = null;
    }
  }

  /// Removes the third vertex.
  void _removeVertex3() {
    if (this._ver3 != null) {
      this._ver3._faces3.remove(this);
      this._ver3 = null;
    }
  }

  /// Indicates if the face is disposed or not.
  bool get disposed => (this._ver1 == null) || (this._ver2 == null) || (this._ver3 == null);

  /// The first vertex of the face.
  Vertex get vertex1 => this._ver1;

  /// The second vertex of the face.
  Vertex get vertex2 => this._ver2;

  /// The third vertex of the face.
  Vertex get vertex3 => this._ver3;

  /// The normal for this face or null if not specified yet.
  Math.Vector3 get normal => this._norm;
  set normal(Math.Vector3 norm) => this._norm = norm.normal();

  /// The binormal for this face or null if not specified yet.
  Math.Vector3 get binormal => this._binm;
  set binormal(Math.Vector3 binm) => this._binm = binm.normal();

  /// Calculates the normal vector from the average of the vertex normals.
  /// Returns null if not all vertices have normals.
  Math.Vector3 _averageNormal() {
    Math.Vector3 norm1 = this._ver1?.normal;
    Math.Vector3 norm2 = this._ver2?.normal;
    Math.Vector3 norm3 = this._ver3?.normal;
    Math.Vector3 sum = Math.Vector3.zero;
    if (norm1 != null) sum += norm1;
    if (norm2 != null) sum += norm2;
    if (norm3 != null) sum += norm3;
    if (sum.isZero()) return null;
    return sum.normal();
  }

  /// Calculates the normal vector from the cross product of locations.
  /// Returns null if not all vertices have locations.
  Math.Vector3 _calcNormal() {
    Math.Point3 loc1 = this._ver1?.location;
    Math.Point3 loc2 = this._ver2?.location;
    Math.Point3 loc3 = this._ver3?.location;
    if ((loc1 == null) || (loc2 == null) || (loc3 == null)) return null;

    Math.Vector3 vec1 = loc1.vectorTo(loc2).normal();
    Math.Vector3 vec2 = loc1.vectorTo(loc3).normal();
    return vec1.cross(vec2).normal();
  }

  /// Calculates the normal vector if not already set.
  /// This uses the locations of the vertices to determine the normal
  /// of the plane this face lays on.
  bool calculateNormal() {
    if (this._norm != null) return true;
    Math.Vector3 norm = this._averageNormal();
    if (norm == null) {
      norm = this._calcNormal();
      if (norm == null) return false;
    }
    this._norm = norm;
    this._ver1.shape?.onFaceModified(this);
    return true;
  }

  /// Calculates the binormal vector from the average of the vertex binormals.
  /// Returns null if not all vertices have binormals.
  Math.Vector3 _averageBinormal() {
    Math.Vector3 binm1 = this._ver1?.binormal;
    Math.Vector3 binm2 = this._ver2?.binormal;
    Math.Vector3 binm3 = this._ver3?.binormal;
    Math.Vector3 sum = Math.Vector3.zero;
    if (binm1 != null) sum += binm1;
    if (binm2 != null) sum += binm2;
    if (binm3 != null) sum += binm3;
    if (sum.isZero()) return null;
    return sum.normal();
  }

  /// Calculates the binormal vector from the location and texture values.
  /// Returns null if not all vertices have location and texture values.
  Math.Vector3 _calcBinormal() {
    Math.Point3 loc1 = this._ver1?.location;
    Math.Point3 loc2 = this._ver2?.location;
    Math.Point3 loc3 = this._ver3?.location;
    if ((loc1 == null) || (loc2 == null) || (loc3 == null)) return null;

    Math.Point2 txt1 = this._ver1?.texture2D;
    Math.Point2 txt2 = this._ver2?.texture2D;
    Math.Point2 txt3 = this._ver3?.texture2D;
    if ((txt1 == null) || (txt2 == null) || (txt3 == null)) return null;

    Math.Vector3 binm;
    double du = txt2.y - txt3.y;
    if (Math.Comparer.equals(du, 0.0)) {
      binm = loc2.vectorTo(loc3).normal();
      if (txt3.x - txt2.x < 0.0) binm = -binm;
    } else {
      double r = (txt2.y - txt1.y) / du;
      Math.Point3 vD = (loc3 - loc2) * r + loc2;
      binm = loc1.vectorTo(vD).normal();
      double u4 = (txt3.x - txt2.x) * r + txt2.x - txt1.x;
      if (u4 < 0.0) binm = -binm;
    }

    if (this._norm != null) {
      Math.Vector3 norm = this._norm.normal();
      Math.Vector3 trnm = norm.cross(binm).normal();
      binm = trnm.cross(norm).normal();
    }
    return binm;
  }

  /// Calculates the binormal vector if not already set.
  /// This requires the normal and texture location.
  /// See Shapes/README.md for more information.
  bool calculateBinormal() {
    if (this._binm != null) return true;
    Math.Vector3 binm = this._averageBinormal();
    if (binm == null) {
      binm = this._calcBinormal();
      if (binm == null) return false;
    }
    this._binm = binm;
    this._ver1.shape?.onFaceModified(this);
    return true;
  }

  /// Checks if the given vertex can be replaced by the new given vertex.
  /// If there is any reason it can't and exception is thrown.
  void _checkReplaceVertex(Vertex oldVer, Vertex newVer) {
    if (newVer == null)
      throw new Exception("May not replace a face's vertex with a null vertex.");
    if (newVer.shape == null)
      throw new Exception("May not replace a face's vertex with a vertex which is not attached to a shape.");
    if (oldVer.shape != newVer.shape)
      throw new Exception("May not replace a face's vertex with a vertex attached to a different shape.");
  }

  /// Replaces the given old vertex with the given new vertex if this face contains
  /// the given old vertex. It returns the number of vertices which were replaced.
  int replaceVertex(Vertex oldVer, Vertex newVer) {
    if (this.disposed)
      throw new Exception("May not replace a face's vertex when the point has been disposed.");
    int result = 0;
    if (this._ver1 == oldVer) {
      this._checkReplaceVertex(oldVer, newVer);
      this._removeVertex1();
      this._setVertex1(newVer);
      ++result;
    }
    if (this._ver2 == oldVer) {
      this._checkReplaceVertex(oldVer, newVer);
      this._removeVertex2();
      this._setVertex2(newVer);
      ++result;
    }
    if (this._ver3 == oldVer) {
      this._checkReplaceVertex(oldVer, newVer);
      this._removeVertex3();
      this._setVertex3(newVer);
      ++result;
    }
    if (result > 0)
      this._ver1.shape?.onFaceModified(this);
    return result;
  }

  /// Swaps the second and third vertices so the face is wraps the other direction.
  /// Both the normal and binormal vectors are negated if the exist.
  void flip() {
    Vertex verA = this._ver2;
    Vertex verB = this._ver3;
    this._removeVertex2();
    this._removeVertex3();
    this._setVertex2(verB);
    this._setVertex3(verA);
    if (this._norm != null) this._norm = -this._norm;
    if (this._binm != null) this._binm = -this._binm;
    this._ver1.shape?.onFaceModified(this);
  }

  /// Indicates if the face is collapsed meaning two or
  /// more of its vertices are the same.
  bool get collapsed {
    if (this._ver1 == this._ver2) return true;
    if (this._ver2 == this._ver3) return true;
    if (this._ver3 == this._ver1) return true;
    return false;
  }

  /// Determines if the given [other] is a face with the
  /// same vertices and vectors as this face.
  bool same(var other) {
    if (identical(this, other)) return true;
    if (other is! Face) return false;
    Face ver = other as Face;
    if (this._ver1 != ver._ver1) return false;
    if (this._ver2 != ver._ver2) return false;
    if (this._ver3 != ver._ver3) return false;
    if (this._norm != ver._norm) return false;
    if (this._binm != ver._binm) return false;
    return true;
  }

  /// Determines if this face is the same face as the given [other].
  bool operator ==(var other) => identical(this, other);

  /// Gets the string for this face.
  String toString() => this.format();

  /// Gets the formatted string for this face.
  /// The [indent] is added to the front when provided.
  String format([String indent = ""]) {
    if (this.disposed) return "${indent}disposed";
    String result = indent +
        Math.formatInt(this._ver1._index)+', '+
        Math.formatInt(this._ver2._index)+', '+
        Math.formatInt(this._ver3._index)+' {';
    if (this._norm != null) {
      result += this._norm.toString()+', ';
    } else {
      result += '-, ';
    }
    if (this._binm != null) {
      result += this._binm.toString()+'}';
    } else {
      result += '-}';
    }
    return result;
  }
}
