part of ThreeDart.Math;

/// A math structure for storing a 3D point.
class Point3 {

  /// Gets a [Point3] at the origin.
  static Point3 get zero {
    _zeroSingleton ??= new Point3(0.0, 0.0, 0.0);
    return _zeroSingleton;
  }
  static Point3 _zeroSingleton;

  /// The x component of the point.
  final double x;

  /// The y component of the point.
  final double y;

  /// The z component of the point.
  final double z;

  /// Constructs a new [Point3] instance.
  Point3(double this.x, double this.y, double this.z);

  /// Constructs a new [Point3] from a [Vector2].
  ///
  /// The Z component is defaulted to 0.0.
  factory Point3.fromVector2(Vector2 vec, [double z = 0.0]) =>
    new Point3(vec.dx, vec.dy, z);

  /// Constructs a new [Point3] from a [Vector3].
  factory Point3.fromVector3(Vector3 vec) =>
    new Point3(vec.dx, vec.dy, vec.dz);

  /// Constructs a new [Point3] from a [Vector4].
  ///
  /// The W component is ignored.
  factory Point3.fromVector4(Vector4 vec) =>
    new Point3(vec.dx, vec.dy, vec.dz);

  /// Constructs a new [Point3] from a [Point2].
  ///
  /// The Z component is defaulted to 0.0.
  factory Point3.fromPoint2(Point2 pnt, [double z = 0.0]) =>
    new Point3(pnt.x, pnt.y, z);

  /// Constructs a new [Point3] from a [Point4].
  ///
  /// The W component from [pnt] is ignored.
  factory Point3.fromPoint4(Point4 pnt) =>
    new Point3(pnt.x, pnt.y, pnt.z);

  /// Constructs a new [Point3] instance given a list of 3 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, then z.
  factory Point3.fromList(List<double> values) {
    assert(values.length == 3);
    return new Point3(values[0], values[1], values[2]);
  }

  /// Gets an list of 3 doubles in the order x, y, then z.
  List<double> toList() =>
    [this.x, this.y, this.z];

  /// Gets the value at the zero based index in the order x, y, then z.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.x;
      case 1: return this.y;
      case 2: return this.z;
    }
    return 0.0;
  }

  /// The distance squared between this point and the [other] point.
  double distance2(Point3 other) {
    double dx = this.x - other.x;
    double dy = this.y - other.y;
    double dz = this.z - other.z;
    return (dx*dx) + (dy*dy) + (dz*dz);
  }

  /// The distance between this point and the [other] point.
  ///
  /// [distance2] is faster since it does not take the [sqrt],
  /// therefore it should be used instead of [distance] where possible.
  double distance(Point3 other) =>
    math.sqrt(this.distance2(other));

  /// Creates the linear interpolation between this point and the [other] point.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this point.
  /// 1.0 or more will return the [other] point. Between 0.0 and 1.0 will be
  /// a scaled mixture of the two points.
  Point3 lerp(Point3 other, double i) =>
    new Point3(lerpVal(this.x, other.x, i),
               lerpVal(this.y, other.y, i),
               lerpVal(this.z, other.z, i));

  /// Creates a new point as the sum of this point and the [other] point.
  Point3 operator +(Point3 other) =>
    new Point3(this.x + other.x, this.y + other.y, this.z + other.z);

  /// Creates a new point as the difference of this point and the [other] point.
  Point3 operator -(Point3 other) =>
    new Point3(this.x - other.x, this.y - other.y, this.z - other.z);

  /// Creates the negation of this point.
  Point3 operator -() =>
    new Point3(-this.x, -this.y, -this.z);

  /// Creates a new point scaled by the given [scalar].
  Point3 operator *(double scalar) =>
    new Point3(this.x * scalar, this.y * scalar, this.z * scalar);

  /// Creates a new point inversely scaled by the given [scalar].
  Point3 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return Point3.zero;
    return new Point3(this.x / scalar, this.y / scalar, this.z / scalar);
  }

  /// Determines if the given [other] variable is a [Point3] equal to this point.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Point3) return false;
    Point3 pnt = other as Point3;
    if (!Comparer.equals(pnt.x, this.x)) return false;
    if (!Comparer.equals(pnt.y, this.y)) return false;
    if (!Comparer.equals(pnt.z, this.z)) return false;
    return true;
  }

  /// Gets the string for this point.
  String toString() => this.format();

  /// Gets the formatted string for this point.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.x, fraction, whole)+
    ', '+formatDouble(this.y, fraction, whole)+
    ', '+formatDouble(this.z, fraction, whole)+']';
}
