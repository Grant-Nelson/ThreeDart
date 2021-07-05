part of ThreeDart.Shapes;

/// A matcher used to match vertices.
abstract class VertexMatcher {

  /// Determines if the two given vertices match, true, or not, false.
  bool matches(Vertex? v1, Vertex? v2);
}

/// A vertex matcher which matches only identical instances of vertices.
class ExactVertexMatcher extends VertexMatcher {

  /// Returns true if [v1] is [v2], false otherwise.
  bool matches(Vertex? v1, Vertex? v2) => identical(v1, v2);
}

/// A vertex matcher which matches vertices which have the same values.
class FullVertexMatcher extends VertexMatcher {

  /// Returns true if [v1] has the same values as [v2], false otherwise.
  bool matches(Vertex? v1, Vertex? v2) {
    if (v1 == null) return false;
    return v1.same(v2);
  }
}

/// A vertex matcher which matches vertices which have the same location.
class VertexLocationMatcher extends VertexMatcher {

  /// Returns true if [v1] has the same location as [v2], false otherwise.
  bool matches(Vertex? v1, Vertex? v2) {
    if (v1 == null) return false;
    if (v2 == null) return false;
    return v1.location == v2.location;
  }
}

/// A vertex matcher which matches vertices which have are a less than or equal to a specific distance away.
class NearVertexLocationMatcher extends VertexMatcher {

  /// The maximum distance away two vertices can be, beyond which two vertices will not be merged.
  final double epsilon;

  /// The square of the epsilon value.
  final double epsilon2;

  /// Creates a new near vertex location matcher.
  NearVertexLocationMatcher._(this.epsilon, this.epsilon2);

  /// Creates a new near vertex location matcher for the given epsilon.
  factory NearVertexLocationMatcher(double epsilon) =>
    NearVertexLocationMatcher._(epsilon, epsilon*epsilon);

  /// Returns true if [v1] has a near location to [v2], false otherwise.
  bool matches(Vertex? v1, Vertex? v2) {
    if (v1 == null) return false;
    if (v2 == null) return false;
    var loc1 = v1.location;
    var loc2 = v2.location;
    if (loc1 == null) return false;
    if (loc2 == null) return false;
    return loc1.distance2(loc2) <= epsilon2;
  }
}
