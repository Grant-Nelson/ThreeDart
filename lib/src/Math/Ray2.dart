part of ThreeDart.Math;

/// A 2D ray is a vector with a starting point.
class Ray2 {

  /// Gets a [Ray2] at the origin with no vector.
  static Ray2 get zero {
    _zeroSingleton ??= new Ray2(0.0, 0.0, 0.0, 0.0);
    return _zeroSingleton;
  }
  static Ray2 _zeroSingleton;

  /// The x component of the ray.
  final double x;

  /// The y component of the ray.
  final double y;

  /// The delta X component of the ray.
  final double dx;

  /// The delta Y component of the ray.
  final double dy;

  /// Constructs a new [Ray2].
  Ray2(this.x, this.y, this.dx, this.dy);

  /// Constructs a new [Ray2] with the given point and vector.
  factory Ray2.fromVector(Point2 pnt, Vector2 vec) =>
    new Ray2(pnt.x, pnt.y, vec.dx, vec.dy);

  /// Constructs a new [Ray2] with the two given points.
  factory Ray2.fromPoints(Point2 a, Point2 b) =>
    new Ray2(a.x, a.y, b.x-a.x, b.y-a.y);

  /// Constructs a new [Ray2] by using only the x and y components of a [Ray3].
  factory Ray2.fromRay3(Ray3 a) =>
    new Ray2(a.x, a.y, a.dx, a.dy);

  /// Constructs a new [Ray2] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, dx, then dy.
  factory Ray2.fromList(List<double> values) {
    assert(values.length == 4);
    return new Ray2(values[0], values[1], values[2], values[3]);
  }

  /// Gets the point at the start of this ray.
  Point2 get start => new Point2(this.x, this.y);

  /// Gets the point at the end of this ray.
  Point2 get end => new Point2(this.x+this.dx, this.y+this.dy);

  /// Gets the vector of this ray.
  Vector2 get vector => new Vector2(this.dx, this.dy);

  /// Gets an list of 4 doubles in the order x, y, dx, then dy.
  List<double> toList() =>
    [this.x, this.y, this.dx, this.dy];

  /// Gets the value at the zero based index in the order x, y, dx, then dy.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.x;
      case 1: return this.y;
      case 2: return this.dx;
      case 3: return this.dy;
    }
    return 0.0;
  }

  /// Determines if the given [other] variable is a [Ray2] equal to this ray.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Ray2) return false;
    Ray2 size = other as Ray2;
    if (!Comparer.equals(size.x,  this.x))  return false;
    if (!Comparer.equals(size.y,  this.y))  return false;
    if (!Comparer.equals(size.dx, this.dx)) return false;
    if (!Comparer.equals(size.dy, this.dy)) return false;
    return true;
  }

  /// Gets the string for this ray.
  String toString() => this.format();

  /// Gets the formatted string for this ray.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.x,  fraction, whole)+
    ', '+formatDouble(this.y,  fraction, whole)+
    ', '+formatDouble(this.dx, fraction, whole)+
    ', '+formatDouble(this.dy, fraction, whole)+']';
}
