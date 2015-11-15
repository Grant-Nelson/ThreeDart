part of ThreeDart.Shapes;

abstract class VertexMatcher {
  bool matches(Vertex v1, Vertex v2);
}

class FullMatcher extends VertexMatcher {
  bool matches(Vertex v1, Vertex v2) {
    return v1 == v2;
  }
}

class LocationMatcher extends VertexMatcher {
  bool matches(Vertex v1, Vertex v2) {
    return v1.location == v2.location;
  }
}
