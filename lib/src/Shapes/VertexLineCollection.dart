part of ThreeDart.Shapes;

/// A collection of lines for a vertex.
class VertexLineCollection {
  final Vertex _vertex;

  /// Creates a new vertex's line collection for the given vertex.
  VertexLineCollection._(Vertex this._vertex);

  /// The vertex which owns this collection.
  Vertex get vertex => this._vertex;

  /// The shape which owns the vertex which owns this collection.
  Shape get shape => this._vertex?.shape;

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

  /// Gets the line at the at given index.
  Line operator[](int index) {
    final int len1 = this._vertex._lines1.length;
    if (index >= len1) return this._vertex._lines2[index-len1];
    else return this._vertex._lines1[index];
  }

  /// Gets line with the given [index] from list
  /// of the lines with this vertex as their first vertex.
  Line at1(int index) => this._vertex._lines1[index];

  /// Gets line with the given [index] from list
  /// of the lines with this vertex as their second vertex.
  Line at2(int index) => this._vertex._lines2[index];

  /// Gets the index of the given [line].
  int indexOf(Line line) {
    int index = this._vertex._lines1.indexOf(line);
    if (index >= 0) return index;
    index = this._vertex._lines2.indexOf(line);
    if (index >= 0) return index + this._vertex._lines1.length;
    return -1;
  }

  /// Gets the index of the given [line] in the list
  /// of the lines with this vertex as their first vertex.
  /// -1 is returned if the line isn't found.
  int indexOf1(Line line) => this._vertex._lines1.indexOf(line);

  /// Gets the index of the given [line] in the list
  /// of the lines with this vertex as their second vertex.
  /// -1 is returned if the line isn't found.
  int indexOf2(Line line) => this._vertex._lines2.indexOf(line);

  /// Gets the iterable for every line in the vertex.
  Iterable<Line> get iterable sync* {
    yield* this.iterable1;
    for (Line line in this.iterable2) {
      if (line._ver1 != this._vertex) yield line;
    }
  }

  /// Gets the iterable for the lines in the vertex
  /// which has this vertex as their first vertex.
  Iterable<Line> get iterable1 sync* {
    List<Line> lines = this._vertex._lines1.toList(growable: false);
    for (Line line in lines) {
      if (!line.disposed) yield line;
    }
  }

  /// Gets the iterable for the lines in the vertex
  /// which has this vertex as their second vertex.
  Iterable<Line> get iterable2 sync* {
    List<Line> lines = this._vertex._lines2.toList(growable: false);
    for (Line line in lines) {
      if (!line.disposed) yield line;
    }
  }

  /// Removes the line with at the given index.
  /// The removed line is disposed and returned or null if none removed.
  Line removeAt(int index) {
    Line line = this[index];
    if (line != null) line.dispose();
    return line;
  }

  /// Removes the line with at the given index of the face from
  /// the list of the lines with this vertex as their first vertex.
  /// The removed line is disposed and returned or null if none removed.
  Line removeAt1(int index) {
    Line line = this._vertex?._lines1[index];
    if (line != null) line.dispose();
    return line;
  }

  /// Removes the line with at the given index of the face from
  /// the list of the lines with this vertex as their second vertex.
  /// The removed line is disposed and returned or null if none removed.
  Line removeAt2(int index) {
    Line line = this._vertex?._lines2[index];
    if (line != null) line.dispose();
    return line;
  }

  /// Removes the given [line].
  /// Returns true if line was removed, false otherwise.
  bool remove(Line line) {
    if (line == null) return false;
    if (line._ver1?.shape != this.shape) return false;
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
