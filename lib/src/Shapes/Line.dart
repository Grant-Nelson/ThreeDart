part of ThreeDart.Shapes;

class Line {
  Vertex _ver1;
  Vertex _ver2;

  Line(Vertex ver1, Vertex ver2) {
    this._ver1 = ver1;
    this._ver2 = ver2;
    this._ver1._lines.add(this);
    this._ver2._lines.add(this);
  }

  Vertex get vertex1 => this._ver1;
  Vertex get vertex2 => this._ver2;

  bool replaceVertex(Vertex oldVer, Vertex newVer) {
    if (this._ver1 == oldVer) {
      this._ver1._lines.remove(this);
      this._ver1 = newVer;
      this._ver1._lines.add(this);
      return true;
    }
    if (this._ver2 == oldVer) {
      this._ver2._lines.remove(this);
      this._ver2 = newVer;
      this._ver2._lines.add(this);
      return true;
    }
    return false;
  }

  bool get collapsed => this._ver1 == this._ver2;

  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Line) return false;
    Line ver = other as Line;
    if (this._ver1 != ver._ver1) return false;
    if (this._ver2 != ver._ver2) return false;
    return true;
  }

  String toString() => Math.formatInt(this._ver1._index)+
      ', '+Math.formatInt(this._ver2._index);
}
