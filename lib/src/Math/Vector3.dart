part of ThreeDart.Math;

/// A math structure for storing a 3D vector.
class Vector3 {

  /// The dX component of the vector.
  final double dx;

  /// The dY component of the vector.
  final double dy;

  /// The dZ component of the vector.
  final double dz;

  /// Constructs a new [Vector3] instance.
  Vector3(double this.dx, double this.dy, double this.dz);

  /// Constructs a new zeroed [Vector2].
  factory Vector3.zero() =>
    new Vector3(0.0, 0.0, 0.0);

  /// Constructs a new [Vector3] from a [Vector2].
  ///
  /// The dz component is defaulted to 0.0.
  factory Vector3.fromVector2(Vector2 vec, [double dz = 0.0]) =>
    new Vector3(vec.dx, vec.dy, dz);

  /// Constructs a new [Vector2] from a [Vector4].
  ///
  /// The dW component is ignored.
  factory Vector3.fromVector4(Vector4 vec) =>
    new Vector3(vec.dx, vec.dy, vec.dz);

  /// Constructs a new [Vector3] from a [Point2].
  ///
  /// The dz component is defaulted to 0.0.
  factory Vector3.fromPoint2(Point2 pnt, [double dz = 0.0]) =>
    new Vector3(pnt.x, pnt.y, dz);

  /// Constructs a new [Vector3] from a [Point3].
  factory Vector3.fromPoint3(Point3 pnt) =>
    new Vector3(pnt.x, pnt.y, pnt.z);

  /// Constructs a new [Vector3] from a [Point4].
  ///
  /// The W component is ignored.
  factory Vector3.fromPoint4(Point4 pnt) =>
    new Vector3(pnt.x, pnt.y, pnt.z);

  /// Constructs a new [Vector3] instance given a list of 3 doubles.
  ///
  /// [values] is a list of doubles are in the order dX, dY, then dZ.
  factory Vector3.fromList(List<double> values) {
    assert(values.length == 3);
    return new Vector3(values[0], values[1], values[2]);
  }

  /// Gets an list of 3 doubles in the order dX, dY, then dZ.
  List<double> toList() => [this.dx, this.dy, this.dz];

  /// The length squared of this vector.
  double length2() => this.dot(this);

  /// The length of this vector.
  ///
  /// [length2] is faster since it does not take the [sqrt],
  /// therefore it should be used instead of [length] where possible.
  double length() => math.sqrt(this.length2());

  /// Gets the dot product of this vector and the [other] vector.
  double dot(Vector3 other) =>
    this.dx*other.dx + this.dy*other.dy + this.dz*other.dz;

  /// Gets a linear interpolation between this vector and the [other] vector.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this vector.
  /// 1.0 or more will return the [other] vector. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two vectors.
  Vector3 lerp(Vector3 other, double i) =>
    new Vector3(lerpVal(this.dx, other.dx, i),
                lerpVal(this.dy, other.dy, i),
                lerpVal(this.dz, other.dz, i));

  /// Gets normalized vector of this vector.
  Vector3 normal() => this/this.length();

  /// Gets the cross of this vector and the given [other] vector.
  Vector3 cross(Vector3 other) =>
    new Vector3(this.dy*other.dz - this.dz*other.dy,
                this.dz*other.dx - this.dx*other.dz,
                this.dx*other.dy - this.dy*other.dx);

  /// Creates a new vector as the sum of this vector and the [other] vector.
  Vector3 operator +(Vector3 other) =>
    new Vector3(this.dx + other.dx, this.dy + other.dy, this.dz + other.dz);

  /// Creates a new vector as the difference of this vector and the [other] vector.
  Vector3 operator -(Vector3 other) =>
    new Vector3(this.dx - other.dx, this.dy - other.dy, this.dz - other.dz);

  /// Creates the negation of this vector.
  Vector3 operator -() =>
    new Vector3(-this.dx, -this.dy, -this.dz);

  /// Creates a new vector scaled by the given [scalar].
  Vector3 operator *(double scalar) =>
    new Vector3(this.dx * scalar, this.dy * scalar, this.dz * scalar);

  /// Creates a new vector inversely scaled by the given [scalar].
  Vector3 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return new Vector3.zero();
    return new Vector3(this.dx / scalar, this.dy / scalar, this.dz / scalar);
  }

  /// Determines if this vector is equal to zero.
  bool isZero() {
    if (!Comparer.equals(0.0, this.dx)) return false;
    if (!Comparer.equals(0.0, this.dy)) return false;
    if (!Comparer.equals(0.0, this.dz)) return false;
    return true;
  }

  /// Determines if the given [other] variable is a [Vector3] equal to this vector.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Vector3) return false;
    Vector3 pnt = other as Vector3;
    if (!Comparer.equals(pnt.dx, this.dx)) return false;
    if (!Comparer.equals(pnt.dy, this.dy)) return false;
    if (!Comparer.equals(pnt.dz, this.dz)) return false;
    return true;
  }

  /// Gets the string for this vector.
  String toString() => this.format();

  /// Gets the formatted string for this vector.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.dx, fraction, whole)+
    ', '+formatDouble(this.dy, fraction, whole)+
    ', '+formatDouble(this.dz, fraction, whole)+']';
}
