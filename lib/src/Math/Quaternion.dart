part of ThreeDart.Math;

/// A math structure for storing a quaternion.
class Quaternion {

  double _a;
  double _b;
  double _c;
  double _t;

  /// Contructs a new [Quaternion] instance.
  ///
  /// [a], [b], and [c] are the scalars on the imaginary 'i', 'j', and 'k' axii repectively.
  /// [t] is the scalar on the real axis.
  Quaternion(double a, double b, double c, double t) {
    this.set(a, b, c, t);
  }

  /// Constructs a new [Quaternion] at the origin.
  factory Quaternion.zero() =>
    new Quaternion(0.0, 0.0, 0.0, 0.0);

  /// Constructs a scaled quaterion of the given [quat] scaled by the given [scalar].
  factory Quaternion.scale(Quaternion quat, double scalar) =>
    new Quaternion(quat._a*scalar, quat._b*scalar, quat._c*scalar, quat._t*scalar);

  /// Constructs a new [Quaternion] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order a, b, c, then t.
  factory Quaternion.fromList(List<double> values) {
    assert(values.length == 4);
    return new Quaternion(values[0], values[1], values[2], values[3]);
  }

  /// The imaginary 'i' scalar of the quaternion.
  double get a => this._a;
  set a(double a) => this._a = a;

  /// The imaginary 'j' scalar of the quaternion.
  double get b => this._b;
  set b(double b) => this._b = b;

  /// The imaginary 'k' scalar of the quaternion.
  double get c => this._c;
  set c(double c) => this._c = c;

  /// The real axis scalar of the quaternion.
  double get t => this._t;
  set t(double t) => this._t = t;

  /// Sets the quaternion of this instance.
  void set(double a, double b, double c, double t) {
      this._a = a;
      this._b = b;
      this._c = c;
      this._t = t;
  }

  /// Gets a list of 4 doubles in the order a, b, c, then t.
  List<double> toList() =>
      [this._a, this._b, this._c, this._t];

  /// The length squared of this quaternion.
  double length2() =>
    this._a*this._a + this._b*this._b + this._c*this._c + this._t*this._t;

  /// The length of this quaternion.
  ///
  /// [length2] is faster since it does not take the [sqrt],
  /// therefor it should be used instead of [length] where possible.
  double length() =>
    math.sqrt(this.length2());

  /// Creates a copy of this quaternion.
  Quaternion copy() =>
      new Quaternion(this._a, this._b, this._c, this._t);

  /// Calculates the W component of this quaternion.
  Quaternion calculateW() {
    double t2 = 1.0 - this.a*this.a - this.b*this.b - this.c*this.c;
    if (t2 < 0.0) t2 = -t2;
    double t = -math.sqrt(t2);
    return new Quaternion(this.a, this.b, this.c, t);
  }

  /// Gets the inverse of the quaternion.
  Quaternion inverse() =>
    new Quaternion(-this.a, -this.b, -this.c, this.t);

  /// Gets normalized quaternion of this quaternion.
  Quaternion normal() {
    double length = this.length();
    if (Comparer.equals(length, 0.0)) return new Quaternion.zero();
    return new Quaternion.scale(this, 1.0/length);
  }

  /// Gets a linear interpolation between this quaternion and the [other] quaternion.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this quaternion.
  /// 1.0 or more will return the [other] quaternion. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two quaternions.
  Quaternion slerp(Quaternion other, double i) {
      double d = i;
      double dot = this.a*other.a + this.b*other.b + this.c*other.c + this.t*other.t;
      if (dot < 0.0)  d = -1.0*i;
      return new Quaternion(1.0-i*this.a+d*other.a,
                            1.0-i*this.b+d*other.b,
                            1.0-i*this.c+d*other.c,
                            1.0-i*this.t+d*other.t);
  }

  /// Gets the product of this quaternion and the given [other] quaternion.
  Quaternion operator *(Quaternion other) =>
    new Quaternion(this._a*other._t + this._t*other._a + this._b*other._c - this._c*other._b,
                   this._b*other._t + this._t*other._b + this._c*other._a - this._a*other._c,
                   this._c*other._t + this._t*other._c + this._a*other._b - this._b*other._a,
                   this._t*other._t - this._a*other._a - this._b*other._b - this._c*other._c);

  /// Transforms the given [vec] with this quaternion.
  Vector3 trans(Vector3 vec) {
      double c =  this._c*vec.dx + this._a*vec.dz - this._b*vec.dy,
             d =  this._c*vec.dy + this._b*vec.dx - this._t*vec.dz,
             e =  this._c*vec.dz + this._t*vec.dy - this._a*vec.dx,
             f = -this._t*vec.dx - this._a*vec.dy - this._b*vec.dz;
      return new Vector3( c*this._c - d*this._b + e*this._a - f*this._t,
                          c*this._b + d*this._c - e*this._t - f*this._a,
                         -c*this._a + d*this._t + e*this._c - f*this._b);
  }

  /// Determines if the given [other] variable is a [Quaternion] equal to this point.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Quaternion) return false;
    Quaternion quad = other as Quaternion;
    if (!Comparer.equals(quad._a, this._a)) return false;
    if (!Comparer.equals(quad._b, this._b)) return false;
    if (!Comparer.equals(quad._c, this._c)) return false;
    if (!Comparer.equals(quad._t, this._t)) return false;
    return true;
  }

  /// Gets the string for this quaternion.
  String toString([int fraction = 3]) =>
    '['+formatDouble(this._a, fraction)+
    'i + '+formatDouble(this._b, fraction)+
    'j + '+formatDouble(this._c, fraction)+
    'k + '+formatDouble(this._t, fraction)+']';
}
