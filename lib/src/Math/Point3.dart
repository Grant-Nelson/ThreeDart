part of ThreeDart.Math;

/// A math structure for storing a 3D point.
class Point3 {

  double _x;
  double _y;
  double _z;

  /// Constructs a new [Point3] instance.
  Point3(double x, double y, double z) {
    this.set(x, y, z);
  }

  /// Constructs a new [Point3] at the origin.
  factory Point3.zero() =>
      new Point3(0.0, 0.0, 0.0);

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

  /// The x component of the point.
  double get x => this._x;
  set x(double x) => this._x = x;

  /// The y component of the point.
  double get y => this._y;
  set y(double y) => this._y = y;

  /// The z component of the point.
  double get z => this._z;
  set z(double z) => this._z = z;

  /// Sets the point of this instance.
  void set(double x, double y, double z) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  /// Gets an list of 3 doubles in the order x, y, then z.
  List<double> toList() =>
      [this._x, this._y, this._z];

  /// The distance squared between this point and the [other] point.
  double distance2(Point3 other) {
    double dx = this._x - other._x;
    double dy = this._y - other._y;
    double dz = this._z - other._z;
    return (dx*dx) + (dy*dy) + (dz*dz);
  }

  /// The distance between this point and the [other] point.
  ///
  /// [distance2] is faster since it does not take the [sqrt],
  /// therefore it should be used instead of [distance] where possible.
  double distance(Point3 other) =>
      math.sqrt(this.distance2(other));

  /// Creates a copy of the point.
  Point3 copy() =>
      new Point3(this._x, this._y, this._z);

  /// Creates the linear interpolation between this point and the [other] point.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this point.
  /// 1.0 or more will return the [other] point. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two points.
  Point3 lerp(Point3 other, double i) =>
      new Point3(lerpVal(this._x, other._x, i),
                 lerpVal(this._y, other._y, i),
                 lerpVal(this._z, other._z, i));

  /// Creates a new point as the sum of this point and the [other] point.
  Point3 operator +(Point3 other) =>
      new Point3(this._x + other._x, this._y + other._y, this._z + other._z);

  /// Creates a new point as the difference of this point and the [other] point.
  Point3 operator -(Point3 other) =>
      new Point3(this._x - other._x, this._y - other._y, this._z - other._z);

  /// Creates the negation of this point.
  Point3 operator -() =>
      new Point3(-this._x, -this._y, -this._z);

  /// Creates a new point scaled by the given [scalar].
  Point3 operator *(double scalar) =>
      new Point3(this._x * scalar, this._y * scalar, this._z * scalar);

  /// Creates a new point inversely scaled by the given [scalar].
  Point3 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return new Point3.zero();
    return new Point3(this._x / scalar, this._y / scalar, this._z / scalar);
  }

  /// Determines if the given [other] variable is a [Point3] equal to this point.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Point3) return false;
    Point3 pnt = other as Point3;
    if (!Comparer.equals(pnt._x, this._x)) return false;
    if (!Comparer.equals(pnt._y, this._y)) return false;
    if (!Comparer.equals(pnt._z, this._z)) return false;
    return true;
  }

  /// Gets the string for this point.
  String toString([int fraction = 3, int whole = 0]) =>
    '['+formatDouble(this._x, fraction, whole)+
    ', '+formatDouble(this._y, fraction, whole)+
    ', '+formatDouble(this._z, fraction, whole)+']';
}
