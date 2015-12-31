part of ThreeDart.Shapes;

class Point {
  Vertex _ver;

  Point(Vertex ver) {
    if (ver == null)
      throw new Exception("May not create a point with a null vertex.");
    if (ver.shape == null)
      throw new Exception("May not create a point with a vertex which is not attached to a shape.");
    this._setVertex(ver);
  }

  void dispose() {
    this._removeVertex();
  }

  void _setVertex(Vertex ver) {
    this._ver = ver;
    this._ver._points._points.add(this);
    this._ver._shape._points._points.add(this);
  }

  void _removeVertex() {
    if (this._ver != null) {
      if (this._ver._shape != null) {
        this._ver._shape._points._points.remove(this);
      }
      this._ver._points._points.remove(this);
      this._ver = null;
    }
  }

  bool get disposed => this._ver == null;

  Vertex get vertex => this._ver;

  bool replaceVertex(Vertex oldVer, Vertex newVer) {
    if (this.disposed)
      throw new Exception("May not replace a point's vertex when the point has been disposed.");
    if (this._ver == oldVer) {
      if (newVer == null)
        throw new Exception("May not replace a point's vertex with a null vertex.");
      if (newVer.shape == null)
        throw new Exception("May not replace a point's vertex with a vertex which is not attached to a shape.");
      this._removeVertex();
      this._setVertex(newVer);
      return true;
    }
    return false;
  }

  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Point) return false;
    Point ver = other as Point;
    if (this._ver != ver._ver) return false;
    return true;
  }

  String toString([String indent = ""]) {
    if (this.disposed) return "${indent}disposed";
    return "${indent}${Math.formatInt(this._ver._index)}";
  }
}
