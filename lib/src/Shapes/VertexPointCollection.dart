part of ThreeDart.Shapes;

// TODO: Comment
class VertexPointCollection {
  final Vertex _vertex;

  VertexPointCollection._(Vertex this._vertex);

  /// The vertex which owns this collection.
  Vertex get vertex => this._vertex;

  /// The shape which owns the vertex which owns this collection.
  Shape get shape => this._vertex._shape;

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

  /// Runs the given function handler for every point in the vertex.
  void forEach(void funcHndl(Point point)) =>
    this._vertex._points.forEach(funcHndl);

  /// Removes the given [point].
  /// Returns true if point was removed, false otherwise.
  bool remove(Point point) {
    if (point == null) return false;
    if (point._ver._shape != this.shape) return false;
    point.dispose();
    return true;
  }

  /// Removes all points which share this vertex.
  /// This will remove all but the first point attached to this vector.
  void removeRepeats() {
    for (int i = this._vertex._points.length-1; i >= 1; --i) {
      this._vertex._points[i].dispose();
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
