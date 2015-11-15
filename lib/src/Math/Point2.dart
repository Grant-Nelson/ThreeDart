part of ThreeDart.Math;

/// A math structure for storing a 2D point.
class Point2 {

  double _x;
  double _y;

  /// Constructs a new [Point2] instance.
  Point2(double x, double y) {
    this.set(x, y);
  }

  /// Constructs a new [Point2] at the origin.
  factory Point2.zero() =>
      new Point2(0.0, 0.0);

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
    assert(values.length == 2);
    return new Point2(values[0], values[1]);
  }

  /// The x component of the point.
  double get x => this._x;
  set x(double x) => this._x = x;

  /// The y component of the point.
  double get y => this._y;
  set y(double y) => this._y = y;

  /// Sets the point of this instance.
  void set(double x, double y) {
    this._x = x;
    this._y = y;
  }

  /// Gets an list of 2 doubles in the order x then y.
  List<double> toList() =>
      [this._x, this._y];

  /// The distance squared between this point and the [other] point.
  double distance2(Point2 other) {
    double dx = this._x - other._y;
    double dy = this._y - other._y;
    return dx * dx + dy * dy;
  }

  /// The distance between this point and the [other] point.
  ///
  /// [distance2] is faster since it does not take the [sqrt],
  /// therefor it should be used instead of [distance] where possible.
  double distance(Point2 other) =>
      math.sqrt(this.distance2(other));

  /// Creates a copy of the point.
  Point2 copy() =>
      new Point2(this._x, this._y);

  /// Creates the linear interpolation between this point and the [other] point.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this point.
  /// 1.0 or more will return the [other] point. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two points.
  Point2 lerp(Point2 other, double i) =>
      new Point2(lerpVal(this._x, other._x, i),
                 lerpVal(this._y, other._y, i));

  /// Creates a new point as the sum of this point and the [other] point.
  Point2 operator +(Point2 other) =>
      new Point2(this._x + other._x, this._y + other._y);

  /// Creates a new point as the difference of this point and the [other] point.
  Point2 operator -(Point2 other) =>
      new Point2(this._x - other._x, this._y - other._y);

  /// Creates the negation of this point.
  Point2 operator -() =>
      new Point2(-this._x, -this._y);

  /// Creates a new point scaled by the given [scalar].
  Point2 operator *(double scalar) =>
      new Point2(this._x * scalar, this._y * scalar);

  /// Creates a new point inversely scaled by the given [scalar].
  Point2 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return new Point2.zero();
    return new Point2(this._x / scalar, this._y / scalar);
  }

  /// Determines if the given [other] variable is a [Point2] equal to this point.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Point2) return false;
    Point2 pnt = other as Point2;
    if (!Comparer.equals(pnt._x, this._x)) return false;
    if (!Comparer.equals(pnt._y, this._y)) return false;
    return true;
  }

  /// Gets the string for this point.
  String toString() => '['+formatDouble(this._x)+
                      ', '+formatDouble(this._y)+']';
}
