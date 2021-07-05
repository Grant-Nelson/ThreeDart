part of ThreeDart.Shapes;

/// A Point for a rendering element with a single vertex.
class Point {
  Vertex? _ver;

  /// Creates a new point with the given vertex.
  Point(Vertex? ver) {
    if (ver == null)
      throw new Exception("May not create a point with a null vertex.");
    if (ver.shape == null)
      throw new Exception("May not create a point with a vertex which is not attached to a shape.");
    this._setVertex(ver);
    this._ver?.shape?.points._points.add(this);
    this._ver?.shape?.onPointAdded(this);
  }

  /// Disposes this point.
  void dispose() {
    if (!this.disposed) {
      this._ver?.shape?.points._points.remove(this);
      this._ver?.shape?.onPointRemoved(this);
    }
    this._removeVertex();
  }

  /// Sets the vertex to the given value.
  void _setVertex(Vertex? ver) {
    this._ver = ver;
    this._ver?.points._points.add(this);
  }

  /// Removes the vertex.
  void _removeVertex() {
    this._ver?.points._points.remove(this);
    this._ver = null;
  }

  /// Indicates if the point is disposed or not.
  bool get disposed => this._ver == null;

  /// The vertex for this point.
  Vertex? get vertex => this._ver;

  /// Replaces the given old vertex with the given new vertex if this line contains
  /// the given old vertex. It returns the number of vertices which were replaced.
  int replaceVertex(Vertex? oldVer, Vertex? newVer) {
    if (this.disposed)
      throw new Exception("May not replace a point's vertex when the point has been disposed.");
    int result = 0;
    if (this._ver == oldVer) {
      if (newVer == null)
        throw new Exception("May not replace a point's vertex with a null vertex.");
      if (newVer.shape == null)
        throw new Exception("May not replace a point's vertex with a vertex which is not attached to a shape.");
      this._removeVertex();
      this._setVertex(newVer);
      ++result;
    }
    if (result > 0)
      this._ver?.shape?.onPointModified(this);
    return result;
  }

  /// Determines if the given [other] is a point with the
  /// same vertices as this point.
  bool same(var other) {
    if (identical(this, other)) return true;
    if (other is! Point) return false;
    if (this._ver != other._ver) return false;
    return true;
  }

  /// Determines if this point is the same point as the given [other].
  bool operator ==(var other) => identical(this, other);

  /// Gets the string for this point.
  String toString() => this.format();

  /// Gets the formatted string for this point.
  /// The [indent] is added to the front when provided.
  String format([String indent = ""]) {
    if (this.disposed) return "${indent}disposed";
    return "${indent}${Math.formatInt(this._ver?.index ?? -1)}";
  }
}
