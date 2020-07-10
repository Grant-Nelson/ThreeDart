part of ThreeDart.Shapes;

/// A collection of points for a vertex.
class VertexPointCollection {
  final Vertex _vertex;

  /// Creates a new vertex's point collection for the given vertex.
  VertexPointCollection._(Vertex this._vertex);

  /// The vertex which owns this collection.
  Vertex get vertex => this._vertex;

  /// The shape which owns the vertex which owns this collection.
  Shape get shape => this._vertex?.shape;

  /// Adds a point to this vertex.
  Point add() {
    if (this._vertex.shape == null)
      throw new Exception("May not add a point to a vertex which has not been added to a shape.");
    return new Point(this._vertex);
  }

  /// Determines if the vertex contains any points or not.
  bool get isEmpty => this.length <= 0;

  /// The number of points in the vertex.
  int get length => this._vertex._points.length;

  /// Gets the point at the at given [index].
  Point operator[](int index) => this._vertex._points[index];

  /// Gets the index of the given [point] or -1 if not found.
  int indexOf(Point point) => this._vertex._points.indexOf(point);

  /// Gets the iterable for the points in the vertex.
  Iterable<Point> get iterable sync* {
    List<Point> points = this._vertex._points.toList(growable: false);
    for (Point point in points) {
      if (!point.disposed) yield point;
    }
  }

  /// Removes the point with at the given [index].
  /// The removed point is disposed and returned or null if none removed.
  Point removeAt(int index) {
    Point pnt = this._vertex._points[index];
    if (pnt != null) pnt.dispose();
    return pnt;
  }

  /// Removes the given [point].
  /// Returns true if point was removed, false otherwise.
  bool remove(Point point) {
    if (point == null) return false;
    if (point._ver?.shape != this.shape) return false;
    point.dispose();
    return true;
  }

  /// Removes all points which share this vertex.
  /// This will remove all but the first point attached to this vector.
  void removeRepeats() {
    for (int i = this._vertex._points.length-1; i >= 1; --i) {
      this.removeAt(i);
    }
  }

  /// Gets to string for all the points.
  String toString() => this.format();

  /// Gets the formatted string for all the points with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = new List<String>();
    for (Point pnt in this._vertex._points) {
      parts.add(pnt.format(indent));
    }
    return parts.join('\n');
  }
}
