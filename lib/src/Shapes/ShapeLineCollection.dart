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

  /// Runs the given function handler for every line in the shape.
  void forEach(void funcHndl(Line line)) {
    for (Line line in this.iteratable) funcHndl(line);
  }

  /// Gets an iteratable which steps through all of the lines in the collection.
  Iterable<Line> get iteratable sync* {
    for (Vertex vertex in this._shape.vertices.iteratable) {
      List<Line> lines = vertex._lines1.toList(growable: false);
      yield* lines;
    }
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
    Iterator<Line> linesA = this.iteratable.iterator;
    while (linesA.moveNext()) {
      Line lineA = linesA.current;
      if (!lineA.disposed) {
        Iterator<Line> linesB = this.iteratable.skipWhile((Line lineB) => lineB != lineA).iterator;
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
    this._shape.vertices.forEach((Vertex ver) {
      ver.lines.removeRepeats(matcher);
    });
  }

  /// Removes all the collapsed lines.
  void removeCollapsed() {
    this.forEach((Line line) {
      if (line.collapsed) line.dispose();
    });
  }
  
  /// Gets a copy of the lines as a list.
  List<Line> toList({bool growable = true}) =>
    this.iteratable.toList(growable: growable);

  /// Gets to string for all the lines.
  String toString() => this.format();

  /// Gets the formatted string for this lines with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = new List<String>();
    int index = 0;
    this.forEach((Line line) {
      parts.add(line.format(indent+"$index. "));
      ++index;
    });
    return parts.join('\n');
  }
}
