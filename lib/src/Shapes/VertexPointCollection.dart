part of ThreeDart.Shapes;

class VertexPointCollection {
  final Vertex _vertex;
  List<Point> _points = [];

  VertexPointCollection._(this._vertex);

  /// The vertex which owns this collection.
  Vertex get vertex => this._vertex;

  /// The shape which owns the vertex which owns this collection.
  Shape? get shape => this._vertex._shape;

  /// Adds a point to this vertex.
  Point add() {
    if (this._vertex.shape == null)
      throw new Exception("May not add a point to a vertex which has not been added to a shape.");
    return new Point(this._vertex);
  }

  /// Determines if the vertex contains any points or not.
  bool get isEmpty => this._points.isEmpty;

  /// The number of points in the vertex.
  int get length => this._points.length;

  /// Gets the point at the at given [index].
  Point operator[](int index) => this._points[index];

  /// Gets the index of the given [point] or -1 if not found.
  int indexOf(Point point) => this._points.indexOf(point);

  /// Runs the given function handler for every point in the vertex.
  void forEach(void funcHndl(Point point)) => this._points.forEach(funcHndl);

  /// Removes the point with at the given [index].
  /// The removed point is disposed and returned or null if none removed.
  Point removeAt(int index) {
    Point pnt = this._points[index];
    pnt.dispose();
    return pnt;
  }

  /// Removes the given [point].
  /// Returns true if point was removed, false otherwise.
  bool remove(Point? point) {
    if (point == null) return false;
    if (point.vertex?.shape != this.shape) return false;
    point.dispose();
    return true;
  }

  /// Removes all points which share this vertex.
  /// This will remove all but the first point attached to this vector.
  void removeRepeats() {
    for (int i = this._points.length-1; i >= 1; --i) {
      this.removeAt(i);
    }
  }

  /// Gets to string for all the points.
  String toString() => this.format();

  /// Gets the formatted string for all the points with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = [];
    for (Point pnt in this._points) {
      parts.add(pnt.format(indent));
    }
    return parts.join('\n');
  }
}
