part of ThreeDart.Shapes;

/// A collection of lines for a vertex.
class VertexLineCollection {
  Vertex _vertex;
  List<Line> _lines1;
  List<Line> _lines2;

  /// Creates a new vertex's line collection for the given vertex.
  VertexLineCollection._(this._vertex):
    this._lines1 = [],
    this._lines2 = [];

  /// The vertex which owns this collection.
  Vertex get vertex => this._vertex;

  /// The shape which owns the vertex which owns this collection.
  Shape? get shape => this._vertex.shape;

  /// Adds a line from this vertex to the given vertex.
  Line addLineTo(Vertex vertex) {
    if (this._vertex.shape == null)
      throw new Exception('May not add a line to a vertex which has not been added to a shape.');
    this._vertex.shape?.vertices.add(vertex);
    return new Line(this._vertex, vertex);
  }

  /// Adds lines from this vertex to the given vertices.
  List<Line> addLinesTo(List<Vertex> vertices) {
    if (this._vertex.shape == null)
      throw new Exception('May not add lines to a vertex which has not been added to a shape.');
    final int count = vertices.length;
    List<Line> lines = new List<Line>.generate(count, (int i) {
      Vertex vertex = vertices[i];
      this._vertex.shape?.vertices.add(vertex);
      return new Line(this._vertex, vertex);
    });
    return lines;
  }

  /// Determines if the vertex contains any lines or not.
  bool get isEmpty => this._lines1.isEmpty && this._lines2.isEmpty;

  /// The number of lines in the vertex.
  int get length => this._lines1.length + this._lines2.length;

    /// The number of lines which use this vertex as the lines' first vertex.
  int get length1 => this._lines1.length;

    /// The number of lines which use this vertex as the lines' second vertex.
  int get length2 => this._lines2.length;

  /// Gets the line at the at given index.
  Line operator[](int index) {
    final int len1 = this._lines1.length;
    if (index >= len1) return this._lines2[index-len1];
    else return this._lines1[index];
  }

  /// Gets line with the given [index] from list
  /// of the lines with this vertex as their first vertex.
  Line at1(int index) => this._lines1[index];

  /// Gets line with the given [index] from list
  /// of the lines with this vertex as their second vertex.
  Line at2(int index) => this._lines2[index];

  /// Gets the index of the given [line].
  int indexOf(Line line) {
    int index = this._lines1.indexOf(line);
    if (index >= 0) return index;
    index = this._lines2.indexOf(line);
    if (index >= 0) return index + this._lines1.length;
    return -1;
  }

  /// Gets the index of the given [line] in the list
  /// of the lines with this vertex as their first vertex.
  /// -1 is returned if the line isn't found.
  int indexOf1(Line line) => this._lines1.indexOf(line);

  /// Gets the index of the given [line] in the list
  /// of the lines with this vertex as their second vertex.
  /// -1 is returned if the line isn't found.
  int indexOf2(Line line) => this._lines2.indexOf(line);

  /// Runs the given function handler for every line in the vertex.
  void forEach(void funcHndl(Line line)) {
    this._lines1.forEach(funcHndl);
    this._lines2.forEach((Line line) {
      if (line.vertex1 != this) funcHndl(line);
    });
  }

  /// Runs the given function handler for every line in the vertex
  /// which has this vertex as their first vertex.
  void forEach1(void funcHndl(Line line)) => this._lines1.forEach(funcHndl);

  /// Runs the given function handler for every line in the vertex
  /// which has this vertex as their first vertex.
  void forEach2(void funcHndl(Line line)) => this._lines2.forEach(funcHndl);

  /// Removes the line with at the given index.
  /// The removed line is disposed and returned or null if none removed.
  Line removeAt(int index) {
    Line line = this[index];
    line.dispose();
    return line;
  }

  /// Removes the line with at the given index of the face from
  /// the list of the lines with this vertex as their first vertex.
  /// The removed line is disposed and returned or null if none removed.
  Line removeAt1(int index) {
    Line line = this._lines1[index];
    line.dispose();
    return line;
  }

  /// Removes the line with at the given index of the face from
  /// the list of the lines with this vertex as their second vertex.
  /// The removed line is disposed and returned or null if none removed.
  Line removeAt2(int index) {
    Line line = this._lines2[index];
    line.dispose();
    return line;
  }

  /// Removes the given [line].
  /// Returns true if line was removed, false otherwise.
  bool remove(Line? line) {
    if (line == null) return false;
    if (line._ver1?.shape != this.shape) return false;
    line.dispose();
    return true;
  }

  /// Removes all lines which match each other based on the given matcher.
  void removeRepeats(LineMatcher matcher) {
    for (int i = this._lines1.length-1; i >= 0; --i) {
      Line lineA = this._lines1[i];
      for (int j = i - 1; j >= 0; --j) {
        Line lineB = this._lines1[j];
        if (matcher.matches(lineA, lineB)) {
          lineA.dispose();
          break;
        }
      }
    }
  }

  /// Removes all the collapsed lines.
  void removeCollapsed() {
    for (int i = this._lines1.length-1; i >= 0; --i) {
      Line line = this._lines1[i];
      if (line.collapsed) line.dispose();
    }
  }

  /// Gets to string for all the lines.
  String toString() => this.format();

  /// Gets the formatted string for all the lines with and optional [indent].
  String format([String indent = '']) {
    List<String> parts = [];
    for (Line line in this._lines1) {
      parts.add(line.format(indent));
    }
    for (Line line in this._lines2) {
      parts.add(line.format(indent));
    }
    return parts.join('\n');
  }
}
