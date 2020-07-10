part of ThreeDart.Shapes;

/// A collection of points for a shape.
class ShapePointCollection {
  final Shape _shape;

  /// Creates a new shape's point collection for the given shape.
  ShapePointCollection._(Shape this._shape);

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
  bool get isEmpty => this.length <= 0;

  /// The number of points in the shape.
  int get length => this._shape._pointCount;

  /// Gets an iterable which steps through all of the points in the collection.
  Iterable<Point> get iterable sync* {
    for (Vertex vertex in this._shape.vertices.iterable) {
      yield* vertex.points.iterable;
    }
  }

  /// Removes the given [point].
  /// Returns true if point was removed, false otherwise.
  bool remove(Point point) {
    if (point == null) return false;
    if (point._ver.shape != this.shape) return false;
    point.dispose();
    return true;
  }

  /// Removes all points which share the same vertex.
  void removeRepeats() {
    for (Vertex vertex in this._shape.vertices.iterable)
      vertex.points.removeRepeats();
  }
  
  /// Gets a copy of the points as a list.
  List<Point> toList({bool growable = true}) =>
    this.iterable.toList(growable: growable);

  /// Gets to string for all the points.
  String toString() => this.format();

  /// Gets the formatted string for this points with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = new List<String>();
    int index = 0;
    for (Point pnt in this.iterable) {
      parts.add(pnt.format(indent+"$index. "));
      ++index;
    }
    return parts.join('\n');
  }
}
