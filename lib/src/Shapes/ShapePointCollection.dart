part of ThreeDart.Shapes;

class ShapePointCollection {
  Shape _shape;
  List<Point> _points;

  ShapePointCollection._(Shape this._shape){
    this._points = new List<Point>();
  }

  Shape get shape => this._shape;

  Point add(Vertex vertex) {
    this._shape.vertices.add(vertex);
    return new Point(vertex);
  }

  List<Point> addList(List<Vertex> vertices) {
    List<Point> points = new List<Point>();
    final int count = vertices.length;
    for (int i = 0; i < count; ++i)
      points.add(this.add(vertices[i]));
    return points;
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
