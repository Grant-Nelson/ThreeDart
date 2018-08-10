part of ThreeDart.Shapes;

/// A collection of points for a shape.
class ShapePointCollection {
  Shape _shape;
  List<Point> _points;

  /// Creates a new shape's point collection for the given shape.
  ShapePointCollection._(Shape this._shape){
    this._points = new List<Point>();
  }

  /// The shape which owns this collection.
  Shape get shape => this._shape;

  /// Adds a new point with the given vertex to shape.
  Point add(Vertex vertex) {
    this._shape.vertices.add(vertex);
    return new Point(vertex);
  }

  /// Adds a set of new points with the given vertices to shape.
  List<Point> addList(List<Vertex> vertices) {
    List<Point> points = new List<Point>();
    final int count = vertices.length;
    for (int i = 0; i < count; ++i)
      points.add(this.add(vertices[i]));
    return points;
  }

  /// Determines if the shape contains any points or not.
  bool get isEmpty => this._points.isEmpty;

  /// The number of points in the shape.
  int get length => this._points.length;

  /// Gets the point at the at given [index].
  Point operator[](int index) => this._points[index];

  /// Gets the index of the given [point] or -1 if not found.
  int indexOf(Point point) => this._points.indexOf(point);

  /// Runs the given function handler for every point in the shape.
  void forEach(void funcHndl(Point point)) => this._points.forEach(funcHndl);

  /// Removes the point with at the given [index].
  /// The removed point is disposed and returned or null if none removed.
  Point removeAt(int index) {
    Point pnt = this._points[index];
    if (pnt != null) pnt.dispose();
    return pnt;
  }

  /// Removes the given [point].
  /// Returns true if point was removed, false otherwise.
  bool remove(Point point) {
    if (point == null) return false;
    if (point._ver._shape != this.shape) return false;
    point.dispose();
    return true;
  }

  /// Removes all points which share the same vertex.
  void removeRepeats() {
    for (int i = this._points.length-1; i >= 0; --i) {
      if (this._points[i].vertex.points.length > 1) this.removeAt(i);
    }
  }

  /// Gets to string for all the points.
  String toString() => this.format();

  /// Gets the formatted string for this points with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = new List<String>();
    for (Point pnt in this._points) {
      parts.add(pnt.format(indent));
    }
    return parts.join('\n');
  }
}
