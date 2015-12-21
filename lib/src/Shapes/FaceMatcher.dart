part of ThreeDart.Shapes;

abstract class FaceMatcher {
  bool matches(Face f1, Face f2);
}

class ExactFaceMatcher extends FaceMatcher {
  bool matches(Face f1, Face f2) {
    return f1 == f2;
  }
}

class SimilarFaceMatcher extends FaceMatcher {
  bool matches(Face f1, Face f2) {
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

class UnculledFaceMatcher extends FaceMatcher {
  bool matches(Face f1, Face f2) {
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
