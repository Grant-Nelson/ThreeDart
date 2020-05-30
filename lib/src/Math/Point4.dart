part of ThreeDart.Math;

/// A math structure for storing a 4D point.
class Point4 {

  /// Gets a [Point4] at the origin.
  static Point4 get zero {
    _zeroSingleton ??= new Point4(0.0, 0.0, 0.0, 0.0);
    return _zeroSingleton;
  }
  static Point4 _zeroSingleton;

  /// The x component of the point.
  final double x;

  /// The y component of the point.
  final double y;

  /// The z component of the point.
  final double z;

  /// The w component of the point.
  final double w;

  /// Constructs a new [Point4] instance.
  Point4(double this.x, double this.y, double this.z, double this.w);

  /// Constructs a new [Point4] from a [Vector2].
  ///
  /// The Z and W components are defaulted to 0.0.
  factory Point4.fromVector2(Vector2 vec, [double z = 0.0, double w = 0.0]) =>
    new Point4(vec.dx, vec.dy, z, w);

  /// Constructs a new [Point4] from a [Vector3].
  ///
  /// The W component is defaulted to 0.0.
  factory Point4.fromVector3(Vector3 vec, [double w = 0.0]) =>
    new Point4(vec.dx, vec.dy, vec.dz, w);

  /// Constructs a new [Point4] from a [Vector4].
  factory Point4.fromVector4(Vector4 vec) =>
    new Point4(vec.dx, vec.dy, vec.dz, vec.dw);

  /// Constructs a new [Point4] from a [Point2].
  ///
  /// The Z and W components are defaulted to 0.0.
  factory Point4.fromPoint2(Point2 pnt, [double z = 0.0, double w = 0.0]) =>
    new Point4(pnt.x, pnt.y, z, w);

  /// Constructs a new [Point4] from a [Point3].
  ///
  /// The W component is defaulted to 0.0.
  factory Point4.fromPoint3(Point3 pnt, [double w = 0.0]) =>
    new Point4(pnt.x, pnt.y, pnt.z, w);

  /// Constructs a new [Point3] instance given a list of 3 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, z, then w.
  factory Point4.fromList(List<double> values) {
    assert(values.length == 4);
    return new Point4(values[0], values[1], values[2], values[3]);
  }

  /// Gets an list of 3 doubles in the order x, y, z, then w.
  List<double> toList() =>
    [this.x, this.y, this.z, this.w];

  /// Gets the value at the zero based index in the order x, y, z, then w.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.x;
      case 1: return this.y;
      case 2: return this.z;
      case 3: return this.w;
    }
    return 0.0;
  }

  /// The distance squared between this point and the [other] point.
  double distance2(Point4 other) {
    double dx = this.x - other.x;
    double dy = this.y - other.y;
    double dz = this.z - other.z;
    double dw = this.w - other.w;
    return (dx*dx) + (dy*dy) + (dz*dz) + (dw*dw);
  }

  /// The distance between this point and the [other] point.
  ///
  /// [distance2] is faster since it does not take the [sqrt],
  /// therefore it should be used instead of [distance] where possible.
  double distance(Point4 other) =>
    math.sqrt(this.distance2(other));

  /// Creates the linear interpolation between this point and the [other] point.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this point.
  /// 1.0 or more will return the [other] point. Between 0.0 and 1.0 will be
  /// a scaled mixture of the two points.
  Point4 lerp(Point4 other, double i) =>
    new Point4(lerpVal(this.x, other.x, i),
               lerpVal(this.y, other.y, i),
               lerpVal(this.z, other.z, i),
               lerpVal(this.w, other.w, i));

  /// Creates a new point as the sum of this point and the [other] point.
  Point4 operator +(Point4 other) =>
    new Point4(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w);

  /// Creates a new point as the difference of this point and the [other] point.
  Point4 operator -(Point4 other) =>
    new Point4(this.x - other.x, this.y - other.y, this.z - other.z, this.w - other.w);

  /// Creates the negation of this point.
  Point4 operator -() =>
    new Point4(-this.x, -this.y, -this.z, -this.w);

  /// Creates a new point scaled by the given [scalar].
  Point4 operator *(double scalar) =>
    new Point4(this.x * scalar, this.y * scalar, this.z * scalar, this.w * scalar);

  /// Creates a new point inversely scaled by the given [scalar].
  Point4 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return Point4.zero;
    return new Point4(this.x / scalar, this.y / scalar, this.z / scalar, this.w / scalar);
  }

  /// Determines if the given [other] variable is a [Point4] equal to this point.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Point4) return false;
    Point4 pnt = other as Point4;
    if (!Comparer.equals(pnt.x, this.x)) return false;
    if (!Comparer.equals(pnt.y, this.y)) return false;
    if (!Comparer.equals(pnt.z, this.z)) return false;
    if (!Comparer.equals(pnt.w, this.w)) return false;
    return true;
  }

  /// Gets the string for this point.
  String toString() => this.format();

  /// Gets the formatted string for this point.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.x, fraction, whole)+
    ', '+formatDouble(this.y, fraction, whole)+
    ', '+formatDouble(this.z, fraction, whole)+
    ', '+formatDouble(this.w, fraction, whole)+']';
}
