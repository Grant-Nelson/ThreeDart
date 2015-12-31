part of ThreeDart.Shapes;

class ShapeLineCollection extends LineCollection {
  Shape _shape;

  ShapeLineCollection._(Shape this._shape): super._();

  Shape get shape => this._shape;

  Line add(Vertex ver1, Vertex ver2) {
    this._shape._vertices.add(ver1);
    this._shape._vertices.add(ver2);
    return new Line(ver1, ver2);
  }

  List<Line> addStrip(List<Vertex> vertices) {
    final int count = vertices.length;
    List<Line> lines = new List<Line>(count-1);
    for (int i = 1; i < count; i++)
      lines.add(this.add(vertices[i-1], vertices[i]));
    return lines;
  }

  List<Line> addLoop(List<Vertex> vertices) {
    final int count = vertices.length;
    List<Line> lines = new List<Line>(count);
    if (count > 0) {
      for (int i = 1; i < count; i++)
        lines.add(this.add(vertices[i-1], vertices[i]));
      lines.add(this.add(vertices[count-1], vertices[0]));
    }
    return lines;
  }

  List<Line> addLines(List<Vertex> vertices) {
    final int count = vertices.length;
    List<Line> lines = new List<Line>((count/2).floor());
    for (int i = 1; i < count; i += 2)
      lines.add(this.add(vertices[i-1], vertices[i]));
    return lines;
  }
}

class VertexLineCollection extends LineCollection {
  Vertex _vertex;

  VertexLineCollection._(Vertex this._vertex): super._();

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
}

abstract class LineCollection {
  List<Line> _lines1;
  List<Line> _lines2;

  LineCollection._() {
    this._lines1 = new List<Line>();
    this._lines2 = new List<Line>();
  }

  Shape get shape;

  bool get empty => this.length <= 0;
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
    List<String> parts = new List<String>(this.length);
    for (Line line in this._lines1) {
      parts.add(line.toString(indent));
    }
    for (Line line in this._lines2) {
      parts.add(line.toString(indent));
    }
    return parts.join('\n');
  }
}
