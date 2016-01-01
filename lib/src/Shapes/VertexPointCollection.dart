part of ThreeDart.Shapes;

class VertexPointCollection {
  Vertex _vertex;
  List<Point> _points;

  VertexPointCollection._(Vertex this._vertex) {
    this._points = new List<Point>();
  }

  Shape get shape => this._vertex._shape;

  Point add() {
    if (this._vertex.shape == null)
      throw new Exception("May not add a point to a vertex which has not been added to a shape.");
    return new Point(this._vertex);
  }

  bool get isEmpty => this._points.isEmpty;
  int get length => this._points.length;
  Point operator[](int index) => this._points[index];
  int indexOf(Point point) => this._points.indexOf(point);
  void forEach(void funcHndl(Point point)) => this._points.forEach(funcHndl);

  Point removeAt(int index) {
    Point pnt = this._points[index];
    if (pnt != null) pnt.dispose();
    return pnt;
  }

  bool remove(Point pnt) {
    if (pnt == null) return false;
    if (pnt._ver._shape != this.shape) return false;
    pnt.dispose();
    return true;
  }

  void removeRepeats() {
    for (int i = this._points.length-1; i >= 0; --i) {
      if (this._points[i].vertex.points.length > 1) this.removeAt(i);
    }
  }

  String toString([String indent = ""]) {
    List<String> parts = new List<String>();
    for (Point pnt in this._points) {
      parts.add(pnt.toString(indent));
    }
    return parts.join('\n');
  }
}
