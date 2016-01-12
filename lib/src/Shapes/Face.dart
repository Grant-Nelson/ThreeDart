part of ThreeDart.Shapes;

class Face {
  Vertex _ver1;
  Vertex _ver2;
  Vertex _ver3;

  Math.Vector3 _norm;
  Math.Vector3 _binm;

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
    this._ver1._shape._faces._faces.add(this);
    this._ver1._shape._onChange(new Core.ChangedEventArgs.added(this));
  }

  void dispose() {
    if (!this.disposed) {
      this._ver1._shape._faces._faces.remove(this);
      this._ver1._shape._onChange(new Core.ChangedEventArgs.removed(this));
    }
    this._removeVertex1();
    this._removeVertex2();
    this._removeVertex3();
  }

  void _setVertex1(Vertex ver1) {
    this._ver1 = ver1;
    this._ver1._faces._faces1.add(this);
  }

  void _setVertex2(Vertex ver2) {
    this._ver2 = ver2;
    this._ver2._faces._faces2.add(this);
  }

  void _setVertex3(Vertex ver3) {
    this._ver3 = ver3;
    this._ver3._faces._faces3.add(this);
  }

  void _removeVertex1() {
    if (this._ver1 != null) {
      this._ver1._faces._faces1.remove(this);
      this._ver1 = null;
    }
  }

  void _removeVertex2() {
    if (this._ver2 != null) {
      this._ver2._faces._faces2.remove(this);
      this._ver2 = null;
    }
  }

  void _removeVertex3() {
    if (this._ver3 != null) {
      this._ver3._faces._faces3.remove(this);
      this._ver3 = null;
    }
  }

  bool get disposed => (this._ver1 == null) || (this._ver2 == null) || (this._ver3 == null);
  Vertex get vertex1 => this._ver1;
  Vertex get vertex2 => this._ver2;
  Vertex get vertex3 => this._ver3;

  Math.Vector3 get normal => this._norm;
  set normal(Math.Vector3 norm) => this._norm = norm.normal();

  Math.Vector3 get binormal => this._binm;
  set binormal(Math.Vector3 binm) => this._binm = binm.normal();

  bool calculateNormal() {
    if(this._norm != null) return true;

    Math.Point3 loc1 = (this._ver1 == null) ? null : this._ver1.location;
    Math.Point3 loc2 = (this._ver2 == null) ? null : this._ver2.location;
    Math.Point3 loc3 = (this._ver3 == null) ? null : this._ver3.location;
    if ((loc1 == null) || (loc2 == null) || (loc3 == null)) return false;

    Math.Vector3 vec1 = new Math.Vector3.fromPoint3(loc2 - loc1).normal();
    Math.Vector3 vec2 = new Math.Vector3.fromPoint3(loc3 - loc1).normal();
    this._norm = -vec1.cross(vec2).normal();
    this._ver1._shape._onChange(new Core.ChangedEventArgs.modified(this));
    return true;
  }

  bool calculateBinormal() {
    if(this._binm != null) return true;

    Math.Point3 loc1 = (this._ver1 == null) ? null : this._ver1.location;
    Math.Point3 loc2 = (this._ver2 == null) ? null : this._ver2.location;
    Math.Point3 loc3 = (this._ver3 == null) ? null : this._ver3.location;
    if ((loc1 == null) || (loc2 == null) || (loc3 == null)) return false;

    Math.Point2 txt1 = this._ver1.texture;
    Math.Point2 txt2 = this._ver2.texture;
    Math.Point2 txt3 = this._ver3.texture;
    if ((txt1 == null) || (txt2 == null) || (txt3 == null)) return false;

    double du = txt2.y - txt3.y;
    if (Math.Comparer.equals(du, 0.0)) {
      this._binm = new Math.Vector3.fromPoint3(loc3 - loc2).normal();
      if (txt3.x - txt2.x < 0.0) this._binm = -this._binm;
    } else {
      double r = (txt2.y - txt1.y) / du;
      Math.Point3 vD = (loc3 - loc2) * r + loc2;
      this._binm = new Math.Vector3.fromPoint3(vD - loc1).normal();
      double u4 = (txt3.x - txt2.x) * r + txt2.x - txt1.x;
      if (u4 < 0.0) this._binm = -this._binm;
    }
    this._ver1._shape._onChange(new Core.ChangedEventArgs.modified(this));
    return true;
  }

  void _checkReplaceVertex(Vertex oldVer, Vertex newVer) {
    if (newVer == null)
      throw new Exception("May not replace a face's vertex with a null vertex.");
    if (newVer.shape == null)
      throw new Exception("May not replace a face's vertex with a vertex which is not attached to a shape.");
    if (oldVer.shape != newVer.shape)
      throw new Exception("May not replace a face's vertex with a vertex attached to a different shape.");
  }

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
      this._ver1._shape._onChange(new Core.ChangedEventArgs.modified(this));
    return result;
  }

  bool get collapsed {
    if (this._ver1 == this._ver2) return true;
    if (this._ver2 == this._ver3) return true;
    if (this._ver3 == this._ver1) return true;
    return false;
  }

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

  bool operator ==(var other) => identical(this, other);

  String toString([String indent = ""]) {
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
