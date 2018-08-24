part of ThreeDart.Math;

/// A math structure for storing a 4D vector.
class Vector4 {

  /// The dX component of the vector.
  final double dx;

  /// The dY component of the vector.
  final double dy;

  /// The dZ component of the vector.
  final double dz;

  /// The dW component of the vector.
  final double dw;

  /// Constructs a new [Vector4] instance.
  Vector4(double this.dx, double this.dy, double this.dz, double this.dw);

  /// Constructs a new zeroed [Vector4].
  factory Vector4.zero() =>
    new Vector4(0.0, 0.0, 0.0, 0.0);

  /// Constructs a new [Vector4] from a [Vector2].
  ///
  /// The dZ and dW components are default to 0.0.
  factory Vector4.fromVector2(Vector2 vec, [double dz = 0.0, double dw = 0.0]) =>
    new Vector4(vec.dx, vec.dy, dz, dw);

  /// Constructs a new [Vector4] from a [Vector3].
  ///
  /// The dW component is default to 0.0.
  factory Vector4.fromVector3(Vector3 vec, [double dw = 0.0]) =>
    new Vector4(vec.dx, vec.dy, vec.dz, dw);

  /// Constructs a new [Vector4] from a [Point2].
  ///
  /// The dZ and dW components are default to 0.0.
  factory Vector4.fromPoint2(Point2 pnt, [double dz = 0.0, double dw = 0.0]) =>
    new Vector4(pnt.x, pnt.y, dz, dw);

  /// Constructs a new [Vector4] from a [Point3].
  ///
  /// The dW component is initialized to 0.0.
  factory Vector4.fromPoint3(Point3 pnt, [double dw = 0.0]) =>
    new Vector4(pnt.x, pnt.y, pnt.z, dw);

  /// Constructs a new [Vector4] from a [Point4].
  factory Vector4.fromPoint4(Point4 pnt) =>
    new Vector4(pnt.x, pnt.y, pnt.z, pnt.w);

  /// Constructs a new [Vector4] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order dX, dY, dZ, then dW.
  factory Vector4.fromList(List<double> values) {
    assert(values.length == 4);
    return new Vector4(values[0], values[1], values[2], values[3]);
  }

  /// Gets an list of 4 doubles in the order dX, dY, dZ, then dW.
  List<double> toList() => [this.dx, this.dy, this.dz, this.dw];

  /// The length squared of this vector.
  double length2() => this.dot(this);

  /// The length of this vector.
  ///
  /// [length2] is faster since it does not take the [sqrt],
  /// therefore it should be used instead of [length] where possible.
  double length() => math.sqrt(this.length2());

  /// Gets the dot product of this vector and the [other] vector.
  double dot(Vector4 other) =>
    this.dx*other.dx + this.dy*other.dy + this.dz*other.dz + this.dw*other.dw;

  /// Gets a linear interpolation between this vector and the [other] vector.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this vector.
  /// 1.0 or more will return the [other] vector. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two vectors.
  Vector4 lerp(Vector4 other, double i) =>
    new Vector4(lerpVal(this.dx, other.dx, i),
                lerpVal(this.dy, other.dy, i),
                lerpVal(this.dz, other.dz, i),
                lerpVal(this.dw, other.dw, i));

  /// Gets normalized vector of this vector.
  Vector4 normal() => this/this.length();

  /// Creates a new vector as the sum of this vector and the [other] vector.
  Vector4 operator +(Vector4 other) =>
    new Vector4(this.dx + other.dx, this.dy + other.dy, this.dz + other.dz, this.dw + other.dw);

  /// Creates a new vector as the difference of this vector and the [other] vector.
  Vector4 operator -(Vector4 other) =>
    new Vector4(this.dx - other.dx, this.dy - other.dy, this.dz - other.dz, this.dw - other.dw);

  /// Creates the negation of this vector.
  Vector4 operator -() =>
    new Vector4(-this.dx, -this.dy, -this.dz, -this.dw);

  /// Creates a new vector scaled by the given [scalar].
  Vector4 operator *(double scalar) =>
    new Vector4(this.dx * scalar, this.dy * scalar, this.dz * scalar, this.dw * scalar);

  /// Creates a new vector inversely scaled by the given [scalar].
  Vector4 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return new Vector4.zero();
    return new Vector4(this.dx / scalar, this.dy / scalar, this.dz / scalar, this.dw / scalar);
  }

  /// Determines if the given [other] variable is a [Vector4] equal to this vector.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Vector4) return false;
    Vector4 pnt = other as Vector4;
    if (!Comparer.equals(pnt.dx, this.dx)) return false;
    if (!Comparer.equals(pnt.dy, this.dy)) return false;
    if (!Comparer.equals(pnt.dz, this.dz)) return false;
    if (!Comparer.equals(pnt.dw, this.dw)) return false;
    return true;
  }

  /// Gets the string for this vector.
  String toString() => this.format();

  /// Gets the formatted string for this vector.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.dx, fraction, whole)+
    ', '+formatDouble(this.dy, fraction, whole)+
    ', '+formatDouble(this.dz, fraction, whole)+
    ', '+formatDouble(this.dw, fraction, whole)+']';
}
