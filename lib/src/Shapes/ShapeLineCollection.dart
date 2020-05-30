part of ThreeDart.Shapes;

/// A collection of lines for a shape.
class ShapeLineCollection {
  Shape _shape;
  List<Line> _lines;

  /// Creates a new shape's line collection for the given shape.
  ShapeLineCollection._(Shape this._shape) {
    this._lines = new List<Line>();
  }

  /// The shape which owns this collection.
  Shape get shape => this._shape;

  /// Adds a new line with the given vertices to the shape.
  Line add(Vertex ver1, Vertex ver2) {
    this._shape._vertices.add(ver1);
    this._shape._vertices.add(ver2);
    return new Line(ver1, ver2);
  }

  /// Adds a new strip of lines to the given vertices to the shape.
  List<Line> addStrip(List<Vertex> vertices) {
    List<Line> lines = new List<Line>();
    final int count = vertices.length;
    for (int i = 1; i < count; i++)
      lines.add(this.add(vertices[i-1], vertices[i]));
    return lines;
  }

  /// Adds a new loop of lines to the given vertices to the shape.
  List<Line> addLoop(List<Vertex> vertices) {
    List<Line> lines = new List<Line>();
    final int count = vertices.length;
    if (count > 0) {
      for (int i = 1; i < count; i++)
        lines.add(this.add(vertices[i-1], vertices[i]));
      lines.add(this.add(vertices[count-1], vertices[0]));
    }
    return lines;
  }

  /// Adds a set of lines to the given vertices to the shape.
  List<Line> addLines(List<Vertex> vertices) {
    List<Line> lines = new List<Line>();
    final int count = vertices.length;
    for (int i = 1; i < count; i += 2)
      lines.add(this.add(vertices[i-1], vertices[i]));
    return lines;
  }

  /// Determines if the shape contains any lines or not.
  bool get isEmpty => this._lines.isEmpty;

  /// The number of lines in the shape.
  int get length => this._lines.length;

  /// Gets the line at the at given index.
  Line operator[](int index) => this._lines[index];

  /// Gets the index of the given [line] or -1 if not found.
  int indexOf(Line line) => this._lines.indexOf(line);

  /// Runs the given function handler for every line in the shape.
  void forEach(void funcHndl(Line line)) => this._lines.forEach(funcHndl);

  /// Removes the line with at the given index.
  /// The removed line is disposed and returned or null if none removed.
  Line removeAt(int index) {
    Line line = this[index];
    if (line != null) line.dispose();
    return line;
  }

  /// Removes the given [line].
  /// Returns true if line was removed, false otherwise.
  bool remove(Line line) {
    if (line == null) return false;
    if (line._ver1._shape != this.shape) return false;
    line.dispose();
    return true;
  }

  /// Removes all lines which match each other based on the given matcher.
  void removeRepeats([LineMatcher matcher = null]) {
    matcher ??= new ExactLineMatcher();
    for (int i = this._lines.length-1; i >= 0; --i) {
      Line lineA = this._lines[i];
      if (lineA != null) {
        for (int j = i - 1; j >= 0; --j) {
          Line lineB = this._lines[j];
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

  /// Removes all lines which match each other based
  /// on the given matcher and share a vertex.
  void removeVertexRepeats([LineMatcher matcher = null]) {
    matcher ??= new ExactLineMatcher();
    for (int k = this._shape.vertices.length-1; k >= 0; --k) {
      Vertex ver = this._shape.vertices[k];
      for (int i = ver._lines.length-1; i >= 0; --i) {
        Line lineA = ver._lines[i];
        if (lineA != null) {
          for (int j = i - 1; j >= 0; --j) {
            Line lineB = ver._lines[j];
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
  }

  /// Removes all the collapsed lines.
  void removeCollapsed() {
    for (int i = this._lines.length-1; i >= 0; --i) {
      Line line = this._lines[i];
      if ((line == null) || line.collapsed) line.dispose();
    }
  }

  /// Gets to string for all the lines.
  String toString() => this.format();

  /// Gets the formatted string for this lines with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = new List<String>();
    final int count = this._lines.length;
    for (int i = 0; i < count; ++i) {
      Line line = this._lines[i];
      if (line == null) parts.add("$indent$i. null");
      else parts.add(line.format(indent+"$i. "));
    }
    return parts.join('\n');
  }
}
