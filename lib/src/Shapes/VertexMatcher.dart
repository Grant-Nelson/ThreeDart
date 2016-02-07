part of ThreeDart.Shapes;

/// A matcher used to match vertices.
abstract class VertexMatcher {

  /// Determines if the two given vertices match, true, or not, false.
  bool matches(Vertex v1, Vertex v2);
}

/// A vertex matcher which matches only identical instances of vertices.
class ExactVertexMatcher extends VertexMatcher {

  /// Returns true if [v1] is [v2], false otherwise.
  bool matches(Vertex v1, Vertex v2) {
    return identical(v1, v2);
  }
}

/// A vertex matcher which matches vertices which have the same values.
class FullVertexMatcher extends VertexMatcher {

  /// Returns true if [v1] has the same values as [v2], false otherwise.
  bool matches(Vertex v1, Vertex v2) {
    if (v1 == null) return false;
    return v1.same(v2);
  }
}

/// A vertex matcher which matches vertices which have the same location.
class VertexLocationMatcher extends VertexMatcher {

  /// Returns true if [v1] has the same location as [v2], false otherwise.
  bool matches(Vertex v1, Vertex v2) {
    if (v1 == null) return false;
    if (v2 == null) return false;
    return v1.location == v2.location;
  }
}
