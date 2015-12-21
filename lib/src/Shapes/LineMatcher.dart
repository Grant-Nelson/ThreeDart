part of ThreeDart.Shapes;

abstract class LineMatcher {
  bool matches(Line line1, Line line2);
}

class ExactLineMatcher extends LineMatcher {
  bool matches(Line line1, Line line2) {
    return line1 == line2;
  }
}

class UndirectedLineMatcher extends LineMatcher {
  bool matches(Line line1, Line line2) {
    if (line1.vertex1.index == line2.vertex1.index) {
      return line1.vertex2.index == line2.vertex2.index;
    } else if (line1.vertex1.index == line2.vertex2.index) {
      return line1.vertex2.index == line2.vertex1.index;
    } else return false;
  }
}
