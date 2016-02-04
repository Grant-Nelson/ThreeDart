part of ThreeDart.Shapes;

/// A matcher used to match lines.
abstract class LineMatcher {

  /// Determines if the two given lines match, true, or not, false.
  bool matches(Line line1, Line line2);
}

/// A line matcher which matches only identical instances of lines.
class ExactLineMatcher extends LineMatcher {

  /// Returns true if [f1] is [f2], false otherwise.
  bool matches(Line line1, Line line2) {
    return identical(line1, line2);
  }
}

/// A line matcher which matches lines which have the same vertices.
class UndirectedLineMatcher extends LineMatcher {

  /// Returns true if [f1] and [f2] have the same two vertices
  /// in either order, false otherwise.
  bool matches(Line line1, Line line2) {
    if (line1.vertex1.index == line2.vertex1.index) {
      return line1.vertex2.index == line2.vertex2.index;
    } else if (line1.vertex1.index == line2.vertex2.index) {
      return line1.vertex2.index == line2.vertex1.index;
    } else return false;
  }
}
