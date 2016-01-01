part of ThreeDart.Shapes;

class VertexLineCollection {
  Vertex _vertex;
  List<Line> _lines1;
  List<Line> _lines2;

  VertexLineCollection._(Vertex this._vertex) {
    this._lines1 = new List<Line>();
    this._lines2 = new List<Line>();
  }

  Shape get shape => this._vertex._shape;

  Line addLineTo(Vertex vertex) {
    if (this._vertex.shape == null)
      throw new Exception("May not add a line to a vertex which has not been added to a shape.");
    this._vertex.shape._vertices.add(vertex);
    return new Line(this._vertex, vertex);
  }

  List<Line> addLinesTo(List<Vertex> vertices) {
    if (this._vertex.shape == null)
      throw new Exception("May not add lines to a vertex which has not been added to a shape.");
    final int count = vertices.length;
    List<Line> lines = new List<Line>(count);
    for (int i = 0; i < count; ++i) {
      Vertex vertex = vertices[i];
      this._vertex.shape._vertices.add(vertex);
      lines.add(new Line(this._vertex, vertex));
    }
    return lines;
  }

  bool get isEmpty => this._lines1.isEmpty && this._lines2.isEmpty;
  int get length => this._lines1.length + this._lines2.length;
  int get length1 => this._lines1.length;
  int get length2 => this._lines2.length;

  Line operator[](int index) {
    final int len1 = this._lines1.length;
    if (index >= len1) return this._lines2[index-len1];
    else return this._lines1[index];
  }

  Line at1(int index) => this._lines1[index];
  Line at2(int index) => this._lines2[index];

  int indexOf(Line line) {
    int index = this._lines1.indexOf(line);
    if (index >= 0) return index;
    index = this._lines2.indexOf(line);
    if (index >= 0) return index + this._lines1.length;
    return -1;
  }

  int indexOf1(Line line) => this._lines1.indexOf(line);
  int indexOf2(Line line) => this._lines2.indexOf(line);

  void forEach(void funcHndl(Line line)) {
    this._lines1.forEach(funcHndl);
    this._lines2.forEach(funcHndl);
  }
  void forEach1(void funcHndl(Line line)) => this._lines1.forEach(funcHndl);
  void forEach2(void funcHndl(Line line)) => this._lines2.forEach(funcHndl);

  Line removeAt(int index) {
    Line line = this[index];
    if (line != null) line.dispose();
    return line;
  }

  Line removeAt1(int index) {
    Line line = this._lines1[index];
    if (line != null) line.dispose();
    return line;
  }

  Line removeAt2(int index) {
    Line line = this._lines2[index];
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
    for (int i = this._lines1.length-1; i >= 0; --i) {
      Line lineA = this._lines1[i];
      if (lineA != null) {
        for (int j = i - 1; j >= 0; --j) {
          Line lineB = this._lines1[j];
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
    for (int i = this._lines1.length-1; i >= 0; --i) {
      Line line = this._lines1[i];
      if ((line == null) || line.collapsed) line.dispose();
    }
  }

  String toString([String indent = ""]) {
    List<String> parts = new List<String>();
    for (Line line in this._lines1) {
      parts.add(line.toString(indent));
    }
    for (Line line in this._lines2) {
      parts.add(line.toString(indent));
    }
    return parts.join('\n');
  }
}
