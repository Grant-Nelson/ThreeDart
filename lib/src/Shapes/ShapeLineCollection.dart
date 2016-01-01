part of ThreeDart.Shapes;

class ShapeLineCollection {
  Shape _shape;
  List<Line> _lines;

  ShapeLineCollection._(Shape this._shape) {
    this._lines = new List<Line>();
  }

  Shape get shape => this._shape;

  Line add(Vertex ver1, Vertex ver2) {
    this._shape._vertices.add(ver1);
    this._shape._vertices.add(ver2);
    return new Line(ver1, ver2);
  }

  List<Line> addStrip(List<Vertex> vertices) {
    List<Line> lines = new List<Line>();
    final int count = vertices.length;
    for (int i = 1; i < count; i++)
      lines.add(this.add(vertices[i-1], vertices[i]));
    return lines;
  }

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

  List<Line> addLines(List<Vertex> vertices) {
    List<Line> lines = new List<Line>();
    final int count = vertices.length;
    for (int i = 1; i < count; i += 2)
      lines.add(this.add(vertices[i-1], vertices[i]));
    return lines;
  }

  bool get isEmpty => this._lines.isEmpty;
  int get length => this._lines.length;
  Line operator[](int index) => this._lines[index];
  int indexOf(Line line) => this._lines.indexOf(line);
  void forEach(void funcHndl(Line line)) => this._lines.forEach(funcHndl);

  Line removeAt(int index) {
    Line line = this[index];
    if (line != null) line.dispose();
    return line;
  }

  bool remove(Line line) {
    if (line == null) return false;
    if (line._ver1._shape != this.shape) return false;
    line.dispose();
    return true;
  }

  void removeRepeats(LineMatcher matcher) {
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

  void removeCollapsed() {
    for (int i = this._lines.length-1; i >= 0; --i) {
      Line line = this._lines[i];
      if ((line == null) || line.collapsed) line.dispose();
    }
  }

  String toString([String indent = ""]) {
    List<String> parts = new List<String>();
    for (Line line in this._lines) {
      parts.add(line.toString(indent));
    }
    return parts.join('\n');
  }
}
