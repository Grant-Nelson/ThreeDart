part of ThreeDart.Math;

/// A math structure for storing a 2D point.
class Point2 {

  /// Gets a [Point2] at the origin.
  static Point2 get zero {
    _zeroSingleton ??= new Point2(0.0, 0.0);
    return _zeroSingleton;
  }
  static Point2 _zeroSingleton;

  /// The x component of the point.
  final double x;

  /// The y component of the point.
  final double y;

  /// Constructs a new [Point2] instance.
  Point2(double this.x, double this.y);

  /// Constructs a new [Point2] from a [Vector2].
  factory Point2.fromVector2(Vector2 vec) =>
    new Point2(vec.dx, vec.dy);

  /// Constructs a new [Point2] from a [Vector3].
  ///
  /// The dZ component is ignored.
  factory Point2.fromVector3(Vector3 vec) =>
    new Point2(vec.dx, vec.dy);

  /// Constructs a new [Point2] from a [Vector4].
  ///
  /// The dZ and dW component is ignored.
  factory Point2.fromVector4(Vector4 vec) =>
    new Point2(vec.dx, vec.dy);

  /// Constructs a new [Point2] from a [Point3].
  ///
  /// The Z component is ignored.
  factory Point2.fromPoint3(Point3 pnt) =>
    new Point2(pnt.x, pnt.y);

  /// Constructs a new [Point2] from a [Point4].
  ///
  /// The Z and W components are ignored.
  factory Point2.fromPoint4(Point4 pnt) =>
    new Point2(pnt.x, pnt.y);

  /// Constructs a new [Point2] instance given a list of 2 doubles.
  ///
  /// [values] is a list of doubles are in the order x then y.
  factory Point2.fromList(List<double> values) {
    assert(values.length == 2, );
    return new Point2(values[0], values[1]);
  }

  /// Gets an list of 2 doubles in the order x then y.
  List<double> toList() => [this.x, this.y];

  /// Gets the value at the zero based index in the order x then y.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.x;
      case 1: return this.y;
    }
    return 0.0;
  }

  /// The distance squared between this point and the [other] point.
  double distance2(Point2 other) {
    double dx = this.x - other.x;
    double dy = this.y - other.y;
    return (dx*dx) + (dy*dy);
  }

  /// The distance between this point and the [other] point.
  ///
  /// [distance2] is faster since it does not take the [sqrt],
  /// therefore it should be used instead of [distance] where possible.
  double distance(Point2 other) =>
    math.sqrt(this.distance2(other));

  /// Creates the linear interpolation between this point and the [other] point.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this point.
  /// 1.0 or more will return the [other] point. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two points.
  Point2 lerp(Point2 other, double i) =>
    new Point2(lerpVal(this.x, other.x, i),
               lerpVal(this.y, other.y, i));

  /// Creates a new point as the sum of this point and the [other] point.
  Point2 operator +(Point2 other) =>
    new Point2(this.x + other.x, this.y + other.y);

  /// Creates a new point as the difference of this point and the [other] point.
  Point2 operator -(Point2 other) =>
    new Point2(this.x - other.x, this.y - other.y);

  /// Creates the negation of this point.
  Point2 operator -() =>
    new Point2(-this.x, -this.y);

  /// Creates a new point scaled by the given [scalar].
  Point2 operator *(double scalar) =>
    new Point2(this.x * scalar, this.y * scalar);

  /// Creates a new point inversely scaled by the given [scalar].
  Point2 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return Point2.zero;
    return new Point2(this.x / scalar, this.y / scalar);
  }

  /// Determines if the given [other] variable is a [Point2] equal to this point.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Point2) return false;
    Point2 pnt = other as Point2;
    if (!Comparer.equals(pnt.x, this.x)) return false;
    if (!Comparer.equals(pnt.y, this.y)) return false;
    return true;
  }

  /// Gets the string for this point.
  String toString() => this.format();

  /// Gets the formatted string for this point.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.x, fraction, whole)+
    ', '+formatDouble(this.y, fraction, whole)+']';
}
