part of ThreeDart.Shapes;

class Face {
  Vertex _ver1;
  Vertex _ver2;
  Vertex _ver3;

  Math.Vector3 _norm;
  Math.Vector3 _binm;

  Face(Vertex ver1, Vertex ver2, Vertex ver3) {
    this._ver1 = ver1;
    this._ver2 = ver2;
    this._ver3 = ver3;
    this._norm = null;
    this._binm = null;
    this._ver1._faces.add(this);
    this._ver2._faces.add(this);
    this._ver3._faces.add(this);
  }

  Vertex get vertex1 => this._ver1;
  Vertex get vertex2 => this._ver2;
  Vertex get vertex3 => this._ver3;

  Math.Vector3 get normal => this._norm;
  set normal(Math.Vector3 norm) => this._norm = norm.normal();

  Math.Vector3 get binormal => this._binm;
  set binormal(Math.Vector3 binm) => this._binm = binm.normal();

  void calculateNormal() {
    if(this._norm == null) {
      Math.Point3 loc1 = (this._ver1 == null) ? null : this._ver1.location;
      Math.Point3 loc2 = (this._ver2 == null) ? null : this._ver2.location;
      Math.Point3 loc3 = (this._ver3 == null) ? null : this._ver3.location;
      if ((loc1 == null) || (loc2 == null) || (loc3 == null)) return;
      Math.Vector3 vec1 = new Math.Vector3.fromPoint3(loc2 - loc1).normal();
      Math.Vector3 vec2 = new Math.Vector3.fromPoint3(loc3 - loc1).normal();
      this._norm = -vec1.cross(vec2).normal();
    }
  }

  void _calculateBinormal(Vertex vA, Vertex vB, Vertex vC) {
    if(this._binm == null) {
      double du = vB.texture.x - vA.texture.x;
      if (Math.Comparer.equals(du, 0.0)) return;

      double tu = vB.texture.x - vC.texture.x;
      double scale = tu/du;
      Math.Point3 pnt = vA.location.lerp(vB.location, scale);
      this._binm = new Math.Vector3.fromPoint3(pnt - vC.location);
    }
  }

  void calculateBinormal() {
    this._calculateBinormal(this._ver1, this._ver2, this._ver3);
    this._calculateBinormal(this._ver2, this._ver3, this._ver1);
    this._calculateBinormal(this._ver3, this._ver1, this._ver2);
  }

  bool replaceVertex(Vertex oldVer, Vertex newVer) {
    if (this._ver1 == oldVer) {
      this._ver1._faces.remove(this);
      this._ver1 = newVer;
      this._ver1._faces.add(this);
      return true;
    }
    if (this._ver2 == oldVer) {
      this._ver2._faces.remove(this);
      this._ver2 = newVer;
      this._ver2._faces.add(this);
      return true;
    }
    if (this._ver3 == oldVer) {
      this._ver3._faces.remove(this);
      this._ver3 = newVer;
      this._ver3._faces.add(this);
      return true;
    }
    return false;
  }

  bool get collapsed {
    if (this._ver1 != this._ver2) return true;
    if (this._ver2 != this._ver3) return true;
    if (this._ver3 != this._ver1) return true;
    return false;
  }

  bool operator ==(var other) {
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

  String toString() {
    String result =
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
