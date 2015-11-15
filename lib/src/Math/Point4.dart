part of ThreeDart.Math;

/// A math structure for storing a 4D point.
class Point4 {

  double _x;
  double _y;
  double _z;
  double _w;

  /// Constructs a new [Point4] instance.
  Point4(double x, double y, double z, double w) {
    this.set(x, y, z, w);
  }

  /// Constructs a new [Point4] at the origin.
  factory Point4.zero() =>
      new Point4(0.0, 0.0, 0.0, 0.0);

  /// Constructs a new [Point4] from a [Vector2].
  ///
  /// The Z and W component is initialized to 0.0.
  factory Point4.fromVector2(Vector2 vec) =>
      new Point4(vec.dx, vec.dy, 0.0, 0.0);

  /// Constructs a new [Point4] from a [Vector3].
  ///
  /// The W component is initialized to 0.0.
  factory Point4.fromVector3(Vector3 vec) =>
      new Point4(vec.dx, vec.dy, vec.dz, 0.0);

  /// Constructs a new [Point4] from a [Vector4].
  factory Point4.fromVector4(Vector4 vec) =>
      new Point4(vec.dx, vec.dy, vec.dz, vec.dw);

  /// Constructs a new [Point4] from a [Point2].
  ///
  /// The Z and W component is initialized to 0.0.
  factory Point4.fromPoint2(Point2 pnt) =>
      new Point4(pnt.x, pnt.y, 0.0, 0.0);

  /// Constructs a new [Point4] from a [Point3].
  ///
  /// The W component is initialized to 0.0.
  factory Point4.fromPoint3(Point3 pnt) =>
      new Point4(pnt.x, pnt.y, pnt.z, 0.0);

  /// Constructs a new [Point3] instance given a list of 3 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, z, then w.
  factory Point4.fromList(List<double> values) {
    assert(values.length == 4);
    return new Point4(values[0], values[1], values[2], values[3]);
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

  /// The w component of the point.
  double get w => this._w;
  set w(double w) => this._w = w;

  /// Sets the point of this instance.
  void set(double x, double y, double z, double w) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
  }

  /// Gets an list of 3 doubles in the order x, y, z, then w.
  List<double> toList() =>
      [this._x, this._y, this._z, this._w];

  /// The distance squared between this point and the [other] point.
  double distance2(Point4 other) {
    double dx = this._x - other._y;
    double dy = this._y - other._y;
    double dz = this._z - other._z;
    double dw = this._w - other._w;
    return dx * dx + dy * dy + dz * dz + dw * dw;
  }

  /// The distance between this point and the [other] point.
  ///
  /// [distance2] is faster since it does not take the [sqrt],
  /// therefor it should be used instead of [distance] where possible.
  double distance(Point4 other) =>
      math.sqrt(this.distance2(other));

  /// Creates a copy of the point.
  Point4 copy() =>
      new Point4(this._x, this._y, this._z, this._w);

  /// Creates the linear interpolation between this point and the [other] point.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this point.
  /// 1.0 or more will return the [other] point. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two points.
  Point4 lerp(Point4 other, double i) =>
      new Point4(lerpVal(this._x, other._x, i),
                 lerpVal(this._y, other._y, i),
                 lerpVal(this._z, other._z, i),
                 lerpVal(this._w, other._w, i));

  /// Creates a new point as the sum of this point and the [other] point.
  Point4 operator +(Point4 other) =>
      new Point4(this._x + other._x, this._y + other._y, this._z + other._z, this._w + other._w);

  /// Creates a new point as the difference of this point and the [other] point.
  Point4 operator -(Point4 other) =>
      new Point4(this._x - other._x, this._y - other._y, this._z - other._z, this._w - other._w);

  /// Creates the negation of this point.
  Point4 operator -() =>
      new Point4(-this._x, -this._y, -this._z, -this._w);

  /// Creates a new point scaled by the given [scalar].
  Point4 operator *(double scalar) =>
      new Point4(this._x * scalar, this._y * scalar, this._z * scalar, this._w * scalar);

  /// Creates a new point inversely scaled by the given [scalar].
  Point4 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return new Point4.zero();
    return new Point4(this._x / scalar, this._y / scalar, this._z / scalar, this._w / scalar);
  }

  /// Determines if the given [other] variable is a [Point4] equal to this point.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Point4) return false;
    Point4 pnt = other as Point4;
    if (!Comparer.equals(pnt._x, this._x)) return false;
    if (!Comparer.equals(pnt._y, this._y)) return false;
    if (!Comparer.equals(pnt._z, this._z)) return false;
    if (!Comparer.equals(pnt._w, this._w)) return false;
    return true;
  }

  /// Gets the string for this point.
  String toString() => '['+formatDouble(this._x)+
                      ', '+formatDouble(this._y)+
                      ', '+formatDouble(this._z)+
                      ', '+formatDouble(this._w)+']';
}