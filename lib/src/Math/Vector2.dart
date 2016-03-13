part of ThreeDart.Math;

/// A math structure for storing a 2D vector.
class Vector2 {

  double _dx;
  double _dy;

  /// Constructs a new [Vector2] instance.
  Vector2(double dx, double dy) {
    this.set(dx, dy);
  }

  /// Constructs a new zeroed [Vector2].
  factory Vector2.zero() =>
      new Vector2(0.0, 0.0);

  /// Constructs a new [Vector2] from a [Vector3].
  ///
  /// The dZ component is ignored.
  factory Vector2.fromVector3(Vector3 vec) =>
      new Vector2(vec.dx, vec.dy);

  /// Constructs a new [Vector2] from a [Vector4].
  ///
  /// The dZ and dW components are ignored.
  factory Vector2.fromVector4(Vector4 vec) =>
      new Vector2(vec.dx, vec.dy);

  /// Constructs a new [Vector2] from a [Point2].
  factory Vector2.fromPoint2(Point2 pnt) =>
      new Vector2(pnt.x, pnt.y);

  /// Constructs a new [Vector2] from a [Point3].
  ///
  /// The Z component is ignored.
  factory Vector2.fromPoint3(Point3 pnt) =>
      new Vector2(pnt.x, pnt.y);

  /// Constructs a new [Vector2] from a [Point4].
  ///
  /// The Z and W components are ignored.
  factory Vector2.fromPoint4(Point4 pnt) =>
      new Vector2(pnt.x, pnt.y);

  /// Constructs a new [Vector2] instance given a list of 2 doubles.
  ///
  /// [values] is a list of doubles are in the order dX then dY.
  factory Vector2.fromList(List<double> values) {
    assert(values.length == 2);
    return new Vector2(values[0], values[1]);
  }

  /// The dX component of the vector.
  double get dx => this._dx;
  set dx(double dx) => this._dx = dx;

  /// The dY component of the vector.
  double get dy => this._dy;
  set dy(double dy) => this._dy = dy;

  /// Sets the vector of this instance.
  void set(double dx, double dy) {
    this._dx = dx;
    this._dy = dy;
  }

  /// Gets an list of 2 doubles in the order dX then dY.
  List<double> toList() => [this._dx, this._dy];

  /// The length squared of this vector.
  double length2() => this.dot(this);

  /// The length of this vector.
  ///
  /// [length2] is faster since it does not take the [sqrt],
  /// therefor it should be used instead of [length] where possible.
  double length() => math.sqrt(this.length2());

  /// Gets the dot product of this vector and the [other] vector.
  double dot(Vector2 other) =>
      this._dx*other._dx + this._dy*other._dy;

  /// Creates a copy of this vector.
  Vector2 copy() =>
      new Vector2(this._dx, this._dy);

  /// Gets a linear interpolation between this vector and the [other] vector.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this vector.
  /// 1.0 or more will return the [other] vector. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two vectors.
  Vector2 lerp(Vector2 other, double i) =>
      new Vector2(lerpVal(this._dx, other._dx, i),
                  lerpVal(this._dy, other._dy, i));

  /// Gets normalized vector of this vector.
  Vector2 normal() => this/this.length();

  /// Creates a new vector as the sum of this vector and the [other] vector.
  Vector2 operator +(Vector2 other) =>
      new Vector2(this._dx + other._dx, this._dy + other._dy);

  /// Creates a new vector as the difference of this vector and the [other] vector.
  Vector2 operator -(Vector2 other) =>
      new Vector2(this._dx - other._dx, this._dy - other._dy);

  /// Creates the negation of this vector.
  Vector2 operator -() =>
      new Vector2(-this._dx, -this._dy);

  /// Creates a new vector scaled by the given [scalar].
  Vector2 operator *(double scalar) =>
      new Vector2(this._dx * scalar, this._dy * scalar);

  /// Creates a new vector inversely scaled by the given [scalar].
  Vector2 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return new Vector2.zero();
    return new Vector2(this._dx / scalar, this._dy / scalar);
  }

  /// Determines if the given [other] variable is a [Vector2] equal to this vector.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Vector2) return false;
    Vector2 pnt = other as Vector2;
    if (!Comparer.equals(pnt._dx, this._dx)) return false;
    if (!Comparer.equals(pnt._dy, this._dy)) return false;
    return true;
  }

  /// Gets the string for this vector.
  String toString([int fraction = 3, int whole = 0]) =>
    '['+formatDouble(this._dx, fraction, whole)+
    ', '+formatDouble(this._dy, fraction, whole)+']';
}
