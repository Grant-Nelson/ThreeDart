part of ThreeDart.Shapes;

/// A matcher used to match faces.
abstract class FaceMatcher {

  /// Determines if the two given faces match, true, or not, false.
  bool matches(Face f1, Face f2);
}

/// A face matcher which matches only identical instances of faces.
class ExactFaceMatcher extends FaceMatcher {

  /// Returns true if [f1] is [f2], false otherwise.
  bool matches(Face f1, Face f2) {
    return identical(f1, f2);
  }
}

/// A face matcher which matches faces which have the same
/// three vertices and are wrapped the same direction.
class SimilarFaceMatcher extends FaceMatcher {

  /// Returns true if the faces share the same vertices and
  /// face the same direction, false otherwise.
  bool matches(Face f1, Face f2) {
    if (f1 == null) return false;
    if (f2 == null) return false;
    if (f1.vertex1.index == f2.vertex1.index) {
      return (f1.vertex2.index == f2.vertex2.index) &&
             (f1.vertex3.index == f2.vertex3.index);
    } else if (f1.vertex1.index == f2.vertex2.index) {
      return (f1.vertex2.index == f2.vertex3.index) &&
             (f1.vertex3.index == f2.vertex1.index);
    } else if (f1.vertex1.index == f2.vertex3.index) {
      return (f1.vertex2.index == f2.vertex1.index) &&
             (f1.vertex3.index == f2.vertex2.index);
    } else return false;
  }
}

/// A face matcher which matches faces which have the same
/// three vertices but the wrapped direction doesn't matter.
class UnculledFaceMatcher extends FaceMatcher {

  /// Returns true if the faces share the same vertices, false otherwise.
  bool matches(Face f1, Face f2) {
    if (f1 == null) return false;
    if (f2 == null) return false;
    if (f1.vertex1.index == f2.vertex1.index) {
      if (f1.vertex2.index == f2.vertex2.index)
        return f1.vertex3.index == f2.vertex3.index;
      else if (f1.vertex2.index == f2.vertex3.index)
        return f1.vertex3.index == f2.vertex2.index;
      else return false;
    } else if (f1.vertex1.index == f2.vertex2.index) {
      if (f1.vertex2.index == f2.vertex3.index)
        return f1.vertex3.index == f2.vertex1.index;
      else if (f1.vertex2.index == f2.vertex1.index)
        return f1.vertex3.index == f2.vertex3.index;
      else return false;
    } else if (f1.vertex1.index == f2.vertex3.index) {
      if (f1.vertex2.index == f2.vertex1.index)
        return f1.vertex3.index == f2.vertex2.index;
      else if (f1.vertex2.index == f2.vertex2.index)
        return f1.vertex3.index == f2.vertex1.index;
      else return false;
    } else return false;
  }
}
