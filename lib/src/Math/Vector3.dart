part of ThreeDart.Math;

/// A math structure for storing a 3D vector.
class Vector3 {

  double _dx;
  double _dy;
  double _dz;

  /// Constructs a new [Vector3] instance.
  Vector3(double dx, double dy, double dz) {
    this.set(dx, dy, dz);
  }

  /// Constructs a new zeroed [Vector2].
  factory Vector3.zero() =>
      new Vector3(0.0, 0.0, 0.0);

  /// Constructs a new [Vector3] from a [Vector2].
  ///
  /// The dZ component is initialized to 0.0.
  factory Vector3.fromVector2(Vector2 vec) =>
      new Vector3(vec.dx, vec.dy, 0.0);

  /// Constructs a new [Vector2] from a [Vector4].
  ///
  /// The dW component is ignored.
  factory Vector3.fromVector4(Vector4 vec) =>
      new Vector3(vec.dx, vec.dy, vec.dz);

  /// Constructs a new [Vector3] from a [Point2].
  ///
  /// The dZ component is initialized to 0.0.
  factory Vector3.fromPoint2(Point2 pnt) =>
      new Vector3(pnt.x, pnt.y, 0.0);

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

  /// The dX component of the vector.
  double get dx => this._dx;
  set dx(double dx) => this._dx = dx;

  /// The dY component of the vector.
  double get dy => this._dy;
  set dy(double dy) => this._dy = dy;

  /// The dZ component of the vector.
  double get dz => this._dz;
  set dz(double dz) => this._dz = dz;

  /// Sets the vector of this instance.
  void set(double dx, double dy, double dz) {
    this._dx = dx;
    this._dy = dy;
    this._dz = dz;
  }

  /// Gets an list of 3 doubles in the order dX, dY, then dZ.
  List<double> toList() => [this._dx, this._dy, this._dz];

  /// The length squared of this vector.
  double length2() => this.dot(this);

  /// The length of this vector.
  ///
  /// [length2] is faster since it does not take the [sqrt],
  /// therefor it should be used instead of [length] where possible.
  double length() => math.sqrt(this.length2());

  /// Gets the dot product of this vector and the [other] vector.
  double dot(Vector3 other) =>
      this._dx*other._dx + this._dy*other._dy + this._dz*other._dz;

  /// Creates a copy of this vector.
  Vector3 copy() =>
      new Vector3(this._dx, this._dy, this._dz);

  /// Gets a linear interpolation between this vector and the [other] vector.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this vector.
  /// 1.0 or more will return the [other] vector. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two vectors.
  Vector3 lerp(Vector3 other, double i) =>
      new Vector3(lerpVal(this._dx, other._dx, i),
                  lerpVal(this._dy, other._dy, i),
                  lerpVal(this._dz, other._dz, i));

  /// Gets normalized vector of this vector.
  Vector3 normal() => this/this.length();

  /// Gets the cross of this vector and the given [other] vector.
  Vector3 cross(Vector3 other) =>
      new Vector3(this._dy*other._dz - this._dz*other._dy,
                  this._dz*other._dx - this._dx*other._dz,
                  this._dx*other._dy - this._dy*other._dx);

  /// Creates a new vector as the sum of this vector and the [other] vector.
  Vector3 operator +(Vector3 other) =>
      new Vector3(this._dx + other._dx, this._dy + other._dy, this._dz + other._dz);

  /// Creates a new vector as the difference of this vector and the [other] vector.
  Vector3 operator -(Vector3 other) =>
      new Vector3(this._dx - other._dx, this._dy - other._dy, this._dz - other._dz);

  /// Creates the negation of this vector.
  Vector3 operator -() =>
      new Vector3(-this._dx, -this._dy, -this._dz);

  /// Creates a new vector scaled by the given [scalar].
  Vector3 operator *(double scalar) =>
      new Vector3(this._dx * scalar, this._dy * scalar, this._dz * scalar);

  /// Creates a new vector inversely scaled by the given [scalar].
  Vector3 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return new Vector3.zero();
    return new Vector3(this._dx / scalar, this._dy / scalar, this._dz / scalar);
  }

  /// Determines if the given [other] variable is a [Vector3] equal to this vector.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Vector3) return false;
    Vector3 pnt = other as Vector3;
    if (!Comparer.equals(pnt._dx, this._dx)) return false;
    if (!Comparer.equals(pnt._dy, this._dy)) return false;
    if (!Comparer.equals(pnt._dz, this._dz)) return false;
    return true;
  }

  /// Gets the string for this vector.
  String toString([int fraction = 3, int whole = 0]) =>
    '['+formatDouble(this._dx, fraction, whole)+
    ', '+formatDouble(this._dy, fraction, whole)+
    ', '+formatDouble(this._dz, fraction, whole)+']';
}
