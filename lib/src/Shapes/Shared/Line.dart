part of ThreeDart.Shapes.Shared;

/// A line is an render element between to two vertices.
class Line {
  Vertex _ver1;
  Vertex _ver2;

  /// Creates a new line between the two given vertices.
  Line(Vertex ver1, Vertex ver2) {
    if (ver1 == null)
      throw new Exception("May not create a line with a null start vertex.");
    if (ver2 == null)
      throw new Exception("May not create a line with a null end vertex.");
    if (ver1.shape == null)
      throw new Exception("May not create a line with a start vertex which is not attached to a shape.");
    if (ver1.shape != ver2.shape)
      throw new Exception("May not create a line with vertices attached to different shapes.");
    this._setVertex1(ver1);
    this._setVertex2(ver2);
    this._ver1._shape.internalAddLine(this);
  }

  /// Disposes this line.
  void dispose() {
    if (!this.disposed)
      this._ver1._shape.internalRemoveLine(this);
    this._removeVertex1();
    this._removeVertex2();
  }

  /// Sets the first vertex to the given value.
  void _setVertex1(Vertex ver1) {
    this._ver1 = ver1;
    this._ver1._lines._lines1.add(this);
  }

  /// Sets the second vertex to the given value.
  void _setVertex2(Vertex ver2) {
    this._ver2 = ver2;
    this._ver2._lines._lines2.add(this);
  }

  /// Removes the first vertex.
  void _removeVertex1() {
    if (this._ver1 != null) {
      this._ver1._lines._lines1.remove(this);
      this._ver1 = null;
    }
  }

  /// Removes the second vertex.
  void _removeVertex2() {
    if (this._ver2 != null) {
      this._ver2._lines._lines2.remove(this);
      this._ver2 = null;
    }
  }

  /// Indicates if the line is disposed or not.
  bool get disposed => (this._ver1 == null) || (this._ver2 == null);

  /// The first vertex of the line.
  Vertex get vertex1 => this._ver1;

  /// The second vertex of the line.
  Vertex get vertex2 => this._ver2;

  /// Checks if the given vertex can be replaced by the new given vertex.
  /// If there is any reason it can't and exception is thrown.
  void _checkReplaceVertex(Vertex oldVer, Vertex newVer) {
    if (newVer == null)
      throw new Exception("May not replace a line's vertex with a null vertex.");
    if (newVer.shape == null)
      throw new Exception("May not replace a line's vertex with a vertex which is not attached to a shape.");
    if (oldVer.shape != newVer.shape)
      throw new Exception("May not replace a line's vertex with a vertex attached to a different shape.");
  }

  /// Replaces the given old vertex with the given new vertex if this line contains
  /// the given old vertex. It returns the number of vertices which were replaced.
  int replaceVertex(Vertex oldVer, Vertex newVer) {
    if (this.disposed)
      throw new Exception("May not replace a line's vertex when the point has been disposed.");
    int result = 0;
    if (this._ver1 == oldVer) {
      this._checkReplaceVertex(oldVer, newVer);
      this._removeVertex1();
      this._setVertex1(newVer);
      ++result;
    }
    if (this._ver2 == oldVer) {
      this._checkReplaceVertex(oldVer, newVer);
      this._removeVertex2();
      this._setVertex2(newVer);
      ++result;
    }
    if (result > 0)
      this._ver1._shape.onLineModified(this);
    return result;
  }

  /// Indicates if the line is collapsed meaning the two vertices are the same.
  bool get collapsed => this._ver1 == this._ver2;

  /// Determines if the given [other] is a line with the
  /// same vertices as this line.
  bool same(var other) {
    if (identical(this, other)) return true;
    if (other is! Line) return false;
    Line ver = other as Line;
    if (this._ver1 != ver._ver1) return false;
    if (this._ver2 != ver._ver2) return false;
    return true;
  }

  /// Determines if this line is the same line as the given [other].
  bool operator ==(var other) => identical(this, other);

  /// Gets the string for this line.
  String toString() => this.format();

  /// Gets the formatted string for this line.
  /// The [indent] is added to the front when provided.
  String format([String indent = ""]) {
    if (this.disposed) return "${indent}disposed";
    return indent + Math.formatInt(this._ver1._index) +
             ", " + Math.formatInt(this._ver2._index);
  }
}
