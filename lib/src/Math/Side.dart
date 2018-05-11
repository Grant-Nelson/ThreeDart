part of ThreeDart.Math;

/// Side indicates which side of a ray point is on.
enum Side {

  /// Left indicates the point is to the left of the ray
  /// when looking from the start towards the end.
  Left,

  /// Right indicates the point is to the right of the ray
  /// when looking from the start towards the end.
  Right,

  /// Inside indicates the point is on the ray.
  Inside,
}
