part of ThreeDart.Math;

/// A math structure for storing a 2D vector.
class Vector2 {

  /// The dX component of the vector.
  final double dx;

  /// The dY component of the vector.
  final double dy;

  /// Constructs a new [Vector2] instance.
  Vector2(double this.dx, double this.dy);

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

  /// Gets an list of 2 doubles in the order dX then dY.
  List<double> toList() => [this.dx, this.dy];

  /// The length squared of this vector.
  double length2() => this.dot(this);

  /// The length of this vector.
  ///
  /// [length2] is faster since it does not take the [sqrt],
  /// therefore it should be used instead of [length] where possible.
  double length() => math.sqrt(this.length2());

  /// Gets the dot product of this vector and the [other] vector.
  double dot(Vector2 other) =>
    this.dx*other.dx + this.dy*other.dy;

  /// Finds the origin based cross product for this vector and the [other] vector.
  double cross(Vector2 other) =>
    this.dx*other.dy - this.dy*other.dx;

  /// Determines if the two vectors are acute or not.
  /// Returns true if the two vectors are acute (<90), false if not.
  bool acute(Vector2 other) => this.dot(other) > 0.0;

  /// Determines if the two vectors are obtuse or not.
  /// Returns true if the two vectors are obtuse (>90), false if not.
  bool obtuse(Vector2 other) => this.dot(other) < 0.0;

  /// Gets the side of the edge the given point is on.
  Side side(Point2 point) {
    double value = this.dx*point.y - this.dy*point.x;
    if (Comparer.currentEquality(value, 0.0)) return Side.Inside;
    if (value < 0.0) return Side.Right;
    return Side.Left;
  }

  /// Gets a linear interpolation between this vector and the [other] vector.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this vector.
  /// 1.0 or more will return the [other] vector. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two vectors.
  Vector2 lerp(Vector2 other, double i) =>
    new Vector2(lerpVal(this.dx, other.dx, i),
                lerpVal(this.dy, other.dy, i));

  /// Gets normalized vector of this vector.
  Vector2 normal() => this/this.length();

  /// Creates a new vector as the sum of this vector and the [other] vector.
  Vector2 operator +(Vector2 other) =>
    new Vector2(this.dx + other.dx, this.dy + other.dy);

  /// Creates a new vector as the difference of this vector and the [other] vector.
  Vector2 operator -(Vector2 other) =>
    new Vector2(this.dx - other.dx, this.dy - other.dy);

  /// Creates the negation of this vector.
  Vector2 operator -() =>
    new Vector2(-this.dx, -this.dy);

  /// Creates a new vector scaled by the given [scalar].
  Vector2 operator *(double scalar) =>
    new Vector2(this.dx * scalar, this.dy * scalar);

  /// Creates a new vector inversely scaled by the given [scalar].
  Vector2 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return new Vector2.zero();
    return new Vector2(this.dx / scalar, this.dy / scalar);
  }

  /// Determines if the given [other] variable is a [Vector2] equal to this vector.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Vector2) return false;
    Vector2 pnt = other as Vector2;
    if (!Comparer.equals(pnt.dx, this.dx)) return false;
    if (!Comparer.equals(pnt.dy, this.dy)) return false;
    return true;
  }

  /// Gets the string for this vector.
  String toString() => this.format();

  /// Gets the formatted string for this vector.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.dx, fraction, whole)+
    ', '+formatDouble(this.dy, fraction, whole)+']';
}
