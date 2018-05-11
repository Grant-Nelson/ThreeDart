part of ThreeDart.Math;

enum Intersect2DType {
  None,
  Inside,
  HorizontalEdge,
  VerticalEdge
}

// TODO: Comment
class Intersect2D {

  final Point2 point;

  final double depth;

  final Intersect2DType intersection;

  Intersect2D(this.point, this.depth, this.intersection);

  String toString() =>
    "${this.point.toString()} ${this.depth} ${this.intersection}";
}