part of ThreeDart.Shapes;

/// A collection of lines for a vertex.
class VertexLineCollection {
  final Vertex _vertex;

  /// Creates a new vertex's line collection for the given vertex.
  VertexLineCollection._(Vertex this._vertex);

  /// The vertex which owns this collection.
  Vertex get vertex => this._vertex;

  /// The shape which owns the vertex which owns this collection.
  Shape get shape => this._vertex._shape;

  /// Adds a line from this vertex to the given vertex.
  Line addLineTo(Vertex vertex) {
    if (this._vertex.shape == null)
      throw new Exception("May not add a line to a vertex which has not been added to a shape.");
    this._vertex.shape.vertices.add(vertex);
    return new Line(this._vertex, vertex);
  }

  /// Adds lines from this vertex to the given vertices.
  List<Line> addLinesTo(List<Vertex> vertices) {
    if (this._vertex.shape == null)
      throw new Exception("May not add lines to a vertex which has not been added to a shape.");
    final int count = vertices.length;
    List<Line> lines = new List<Line>(count);
    for (int i = 0; i < count; ++i) {
      Vertex vertex = vertices[i];
      this._vertex.shape.vertices.add(vertex);
      lines.add(new Line(this._vertex, vertex));
    }
    return lines;
  }

  /// Determines if the vertex contains any lines or not.
  bool get isEmpty => this.length <= 0;

  /// The number of lines in the vertex.
  int get length => this.length1 + this.length2;

    /// The number of lines which use this vertex as the lines' first vertex.
  int get length1 => this._vertex._lines1.length;

    /// The number of lines which use this vertex as the lines' second vertex.
  int get length2 => this._vertex._lines2.length;

  /// Runs the given function handler for every line in the vertex.
  void forEach(void funcHndl(Line line)) {
    this._vertex._lines1.forEach(funcHndl);
    this._vertex._lines2.forEach((Line line) {
      if (line.vertex1 != this._vertex) funcHndl(line);
    });
  }

  /// Runs the given function handler for every line in the vertex
  /// which has this vertex as their first vertex.
  void forEach1(void funcHndl(Line line)) =>
    this._vertex._lines1.forEach(funcHndl);

  /// Runs the given function handler for every line in the vertex
  /// which has this vertex as their first vertex.
  void forEach2(void funcHndl(Line line)) =>
    this._vertex._lines2.forEach(funcHndl);

  /// Removes the given [line].
  /// Returns true if line was removed, false otherwise.
  bool remove(Line line) {
    if (line == null) return false;
    if (line._ver1._shape != this.shape) return false;
    line.dispose();
    return true;
  }

  /// Removes all lines which match each other based on the given matcher.
  void removeRepeats(LineMatcher matcher) {
    for (int i = this._vertex._lines1.length-1; i >= 0; --i) {
      Line lineA = this._vertex._lines1[i];
      if (lineA != null) {
        for (int j = i - 1; j >= 0; --j) {
          Line lineB = this._vertex._lines1[j];
          if (lineB != null) {
            if (matcher.matches(lineA, lineB)) {
              lineA.dispose();
              break;
            }
          }
        }
      }
    }
  }

  /// Removes all the collapsed lines.
  void removeCollapsed() {
    for (int i = this._vertex._lines1.length-1; i >= 0; --i) {
      Line line = this._vertex._lines1[i];
      if ((line == null) || line.collapsed) line.dispose();
    }
  }

  /// Gets to string for all the lines.
  String toString() => this.format();

  /// Gets the formatted string for all the lines with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = new List<String>();
    for (Line line in this._vertex._lines1) {
      parts.add(line.format(indent));
    }
    for (Line line in this._vertex._lines2) {
      parts.add(line.format(indent));
    }
    return parts.join('\n');
  }
}
