part of ThreeDart.Shapes;

/// A collection of lines for a shape.
class ShapeLineCollection {
  final Shape _shape;

  /// Creates a new shape's line collection for the given shape.
  ShapeLineCollection._(Shape this._shape);

  /// The shape which owns this collection.
  Shape get shape => this._shape;

  /// Adds a new line with the given vertices to the shape.
  Line add(Vertex ver1, Vertex ver2) {
    ShapeVertexCollection vcol = this._shape.vertices;
    vcol.add(ver1);
    vcol.add(ver2);
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
  bool get isEmpty => this.length <= 0;

  /// The number of lines in the shape.
  int get length => this._shape._lineCount;

  /// Gets an iterable which steps through all of the lines in the collection.
  Iterable<Line> get iterable sync* {
    for (Vertex vertex in this._shape.vertices.iterable) {
      yield* vertex.lines.iterable1;
    }
  }

  /// Removes the given [line].
  /// Returns true if line was removed, false otherwise.
  bool remove(Line line) {
    if (line == null) return false;
    if (line._ver1.shape != this.shape) return false;
    line.dispose();
    return true;
  }

  /// Removes all lines which match each other based on the given matcher.
  void removeRepeats([LineMatcher matcher = null]) {
    matcher ??= new ExactLineMatcher();
    Iterator<Line> linesA = this.iterable.iterator;
    while (linesA.moveNext()) {
      Line lineA = linesA.current;
      if (!lineA.disposed) {
        Iterator<Line> linesB = this.iterable.skipWhile((Line lineB) => lineB != lineA).iterator;
        linesB.moveNext(); // step over lineA
        while (linesB.moveNext()) {
          Line lineB = linesB.current;
          if (!lineB.disposed) {
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
    for (Vertex ver in this._shape.vertices.iterable)
      ver.lines.removeRepeats(matcher);
  }

  /// Removes all the collapsed lines.
  void removeCollapsed() {
    for (Line line in this.iterable) {
      if (line.collapsed) line.dispose();
    }
  }

  /// Gets all the lines into a list. This is slightly faster than
  /// using the iterator because we already know the number of lines.
  List<Line> toList({bool growable: true}) {
    List<Line> result = new List<Line>.filled(this._shape._lineCount, null, growable: growable);
    int index = 0;
    for (Line line in this.iterable) {
      result[index] = line;
      index++;
    }
    return result;
  }

  /// Gets to string for all the lines.
  String toString() => this.format();

  /// Gets the formatted string for this lines with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = new List<String>();
    int index = 0;
    for (Line line in this.iterable) {
      parts.add(line.format(indent+"$index. "));
      ++index;
    }
    return parts.join('\n');
  }
}
