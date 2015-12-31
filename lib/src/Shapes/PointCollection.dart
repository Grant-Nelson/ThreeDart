part of ThreeDart.Shapes;

class ShapePointCollection extends PointCollection {
  Shape _shape;

  ShapePointCollection._(Shape this._shape): super._();

  Shape get shape => this._shape;

  Point add(Vertex vertex) {
    this._shape.vertices.add(vertex);
    return new Point(vertex);
  }

  List<Point> addList(List<Vertex> vertices) {
    final int count = vertices.length;
    List<Point> points = new List<Point>(count);
    for (int i = 0; i < count; ++i)
      points.add(this.add(vertices[i]));
    return points;
  }
}

class VertexPointCollection extends PointCollection {
  Vertex _vertex;

  VertexPointCollection._(Vertex this._vertex): super._();

  Shape get shape => this._vertex._shape;

  Point add() {
    if (this._vertex.shape == null)
      throw new Exception("May not add a point to a vertex which has not been added to a shape.");
    return new Point(this._vertex);
  }
}

abstract class PointCollection {
  List<Point> _points;

  PointCollection._() {
    this._points = new List<Point>();
  }

  Shape get shape;

  bool get empty => this._points.length <= 0;

  int get length => this._points.length;

  Point operator[](int index) => this._points[index];

  int indexOf(Point point) => this._points.indexOf(point);

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
    List<String> parts = new List<String>(this._points.length);
    for (Point pnt in this._points) {
      parts.add(pnt.toString(indent));
    }
    return parts.join('\n');
  }
}
