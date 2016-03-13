part of ThreeDart.Math;

/// A math structure for storing a 4D vector.
class Vector4 {

  double _dx;
  double _dy;
  double _dz;
  double _dw;

  /// Constructs a new [Vector4] instance.
  Vector4(double dx, double dy, double dz, double dw) {
    this.set(dx, dy, dz, dw);
  }

  /// Constructs a new zeroed [Vector4].
  factory Vector4.zero() =>
      new Vector4(0.0, 0.0, 0.0, 0.0);

  /// Constructs a new [Vector4] from a [Vector2].
  ///
  /// The dZ and dW components are initialized to 0.0.
  factory Vector4.fromVector2(Vector2 vec) =>
      new Vector4(vec.dx, vec.dy, 0.0, 0.0);

  /// Constructs a new [Vector4] from a [Vector3].
  ///
  /// The dW component is initialized to 0.0.
  factory Vector4.fromVector3(Vector3 vec) =>
      new Vector4(vec.dx, vec.dy, vec.dz, 0.0);

  /// Constructs a new [Vector4] from a [Point2].
  ///
  /// The dZ and dW components are initialized to 0.0.
  factory Vector4.fromPoint2(Point2 pnt) =>
      new Vector4(pnt.x, pnt.y, 0.0, 0.0);

  /// Constructs a new [Vector4] from a [Point3].
  ///
  /// The dW component is initialized to 0.0.
  factory Vector4.fromPoint3(Point3 pnt) =>
      new Vector4(pnt.x, pnt.y, pnt.z, 0.0);

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

  /// The dX component of the vector.
  double get dx => this._dx;
  set dx(double dx) => this._dx = dx;

  /// The dY component of the vector.
  double get dy => this._dy;
  set dy(double dy) => this._dy = dy;

  /// The dZ component of the vector.
  double get dz => this._dz;
  set dz(double dz) => this._dz = dz;

  /// The dW component of the vector.
  double get dw => this._dw;
  set dw(double dw) => this._dw = dw;

  /// Sets the vector of this instance.
  void set(double dx, double dy, double dz, double dw) {
    this._dx = dx;
    this._dy = dy;
    this._dz = dz;
    this._dw = dw;
  }

  /// Gets an list of 4 doubles in the order dX, dY, dZ, then dW.
  List<double> toList() => [this._dx, this._dy, this._dz, this._dw];

  /// The length squared of this vector.
  double length2() => this.dot(this);

  /// The length of this vector.
  ///
  /// [length2] is faster since it does not take the [sqrt],
  /// therefor it should be used instead of [length] where possible.
  double length() => math.sqrt(this.length2());

  /// Gets the dot product of this vector and the [other] vector.
  double dot(Vector4 other) =>
      this._dx*other._dx + this._dy*other._dy + this._dz*other._dz + this._dw*other._dw;

  /// Creates a copy of this vector.
  Vector4 copy() =>
      new Vector4(this._dx, this._dy, this._dz, this._dw);

  /// Gets a linear interpolation between this vector and the [other] vector.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this vector.
  /// 1.0 or more will return the [other] vector. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two vectors.
  Vector4 lerp(Vector4 other, double i) =>
      new Vector4(lerpVal(this._dx, other._dx, i),
                  lerpVal(this._dy, other._dy, i),
                  lerpVal(this._dz, other._dz, i),
                  lerpVal(this._dw, other._dw, i));

  /// Gets normalized vector of this vector.
  Vector4 normal() => this/this.length();

  /// Creates a new vector as the sum of this vector and the [other] vector.
  Vector4 operator +(Vector4 other) =>
      new Vector4(this._dx + other._dx, this._dy + other._dy, this._dz + other._dz, this._dw + other._dw);

  /// Creates a new vector as the difference of this vector and the [other] vector.
  Vector4 operator -(Vector4 other) =>
      new Vector4(this._dx - other._dx, this._dy - other._dy, this._dz - other._dz, this._dw - other._dw);

  /// Creates the negation of this vector.
  Vector4 operator -() =>
      new Vector4(-this._dx, -this._dy, -this._dz, -this._dw);

  /// Creates a new vector scaled by the given [scalar].
  Vector4 operator *(double scalar) =>
      new Vector4(this._dx * scalar, this._dy * scalar, this._dz * scalar, this._dw * scalar);

  /// Creates a new vector inversely scaled by the given [scalar].
  Vector4 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) return new Vector4.zero();
    return new Vector4(this._dx / scalar, this._dy / scalar, this._dz / scalar, this._dw / scalar);
  }

  /// Determines if the given [other] variable is a [Vector4] equal to this vector.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Vector4) return false;
    Vector4 pnt = other as Vector4;
    if (!Comparer.equals(pnt._dx, this._dx)) return false;
    if (!Comparer.equals(pnt._dy, this._dy)) return false;
    if (!Comparer.equals(pnt._dz, this._dz)) return false;
    if (!Comparer.equals(pnt._dw, this._dw)) return false;
    return true;
  }

  /// Gets the string for this vector.
  String toString([int fraction = 3, int whole = 0]) =>
    '['+formatDouble(this._dx, fraction, whole)+
    ', '+formatDouble(this._dy, fraction, whole)+
    ', '+formatDouble(this._dz, fraction, whole)+
    ', '+formatDouble(this._dw, fraction, whole)+']';
}
