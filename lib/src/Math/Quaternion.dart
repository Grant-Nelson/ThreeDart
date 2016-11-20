part of ThreeDart.Math;

/// A math structure for storing a quaternion.
class Quaternion {

  /// The imaginary 'i' scalar of the quaternion.
  final double a;

  /// The imaginary 'j' scalar of the quaternion.
  final double b;

  /// The imaginary 'k' scalar of the quaternion.
  final double c;

  /// The real axis scalar of the quaternion.
  final double t;

  /// Contructs a new [Quaternion] instance.
  ///
  /// [a], [b], and [c] are the scalars on the imaginary 'i', 'j', and 'k' axii repectively.
  /// [t] is the scalar on the real axis.
  Quaternion(double this.a, double this.b, double this.c, double this.t);

  /// Constructs a new [Quaternion] at the origin.
  factory Quaternion.zero() =>
    new Quaternion(0.0, 0.0, 0.0, 0.0);

  /// Constructs a scaled quaterion of the given [quat] scaled by the given [scalar].
  factory Quaternion.scale(Quaternion quat, double scalar) =>
    new Quaternion(quat.a*scalar, quat.b*scalar, quat.c*scalar, quat.t*scalar);

  /// Constructs a quaternion from the given 3x3 matrix.
  factory Quaternion.fromMatrix3(Matrix3 mat) {
    double tr = mat.m11 + mat.m22 + mat.m33;
    if (tr > 0) {
      double scalar = math.sqrt(tr + 1.0) * 2.0; // 4*q.t
      return new Quaternion(
        (mat.m32 - mat.m23) / scalar,
        (mat.m13 - mat.m31) / scalar,
        (mat.m21 - mat.m12) / scalar,
        0.25 * scalar);
    } else if ((mat.m11 > mat.m22) && (mat.m11 > mat.m33)) {
      double scalar = math.sqrt(1.0 + mat.m11 - mat.m22 - mat.m33) * 2.0; // 4*q.a
      return new Quaternion(
        0.25 * scalar,
        (mat.m12 + mat.m21) / scalar,
        (mat.m13 + mat.m31) / scalar,
        (mat.m32 - mat.m23) / scalar);
    } else if (mat.m22 > mat.m33) {
      double scalar = math.sqrt(1.0 + mat.m22 - mat.m11 - mat.m33) * 2.0; // 4*q.b
      return new Quaternion(
        (mat.m12 + mat.m21) / scalar,
        0.25 * scalar,
        (mat.m23 + mat.m32) / scalar,
        (mat.m13 - mat.m31) / scalar);
    } else {
      double scalar = math.sqrt(1.0 + mat.m33 - mat.m11 - mat.m22) * 2.0; // 4*q.c
      return new Quaternion(
        (mat.m13 + mat.m31) / scalar,
        (mat.m23 + mat.m32) / scalar,
        0.25 * scalar,
        (mat.m21 - mat.m12) / scalar);
    }
  }

  /// Constructs a new [Quaternion] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order a, b, c, then t.
  factory Quaternion.fromList(List<double> values) {
    assert(values.length == 4);
    return new Quaternion(values[0], values[1], values[2], values[3]);
  }

  /// Gets a list of 4 doubles in the order a, b, c, then t.
  List<double> toList() =>
    [this.a, this.b, this.c, this.t];

  /// The length squared of this quaternion.
  double length2() =>
    this.a*this.a + this.b*this.b + this.c*this.c + this.t*this.t;

  /// The length of this quaternion.
  ///
  /// [length2] is faster since it does not take the [sqrt],
  /// therefore it should be used instead of [length] where possible.
  double length() =>
    math.sqrt(this.length2());

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
    new Quaternion(this.a*other.t + this.t*other.a + this.b*other.c - this.c*other.b,
                   this.b*other.t + this.t*other.b + this.c*other.a - this.a*other.c,
                   this.c*other.t + this.t*other.c + this.a*other.b - this.b*other.a,
                   this.t*other.t - this.a*other.a - this.b*other.b - this.c*other.c);

  /// Transforms the given [vec] with this quaternion.
  Vector3 trans(Vector3 vec) {
    double c =  this.c*vec.dx + this.a*vec.dz - this.b*vec.dy,
           d =  this.c*vec.dy + this.b*vec.dx - this.t*vec.dz,
           e =  this.c*vec.dz + this.t*vec.dy - this.a*vec.dx,
           f = -this.t*vec.dx - this.a*vec.dy - this.b*vec.dz;
    return new Vector3( c*this.c - d*this.b + e*this.a - f*this.t,
                        c*this.b + d*this.c - e*this.t - f*this.a,
                       -c*this.a + d*this.t + e*this.c - f*this.b);
  }

  /// Determines if the given [other] variable is a [Quaternion] equal to this point.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Quaternion) return false;
    Quaternion quad = other as Quaternion;
    if (!Comparer.equals(quad.a, this.a)) return false;
    if (!Comparer.equals(quad.b, this.b)) return false;
    if (!Comparer.equals(quad.c, this.c)) return false;
    if (!Comparer.equals(quad.t, this.t)) return false;
    return true;
  }

  /// Gets the string for this quaternion.
  String toString([int fraction = 3, int whole = 0]) =>
    '['+   formatDouble(this.a, fraction, whole)+
    'i + '+formatDouble(this.b, fraction, whole)+
    'j + '+formatDouble(this.c, fraction, whole)+
    'k + '+formatDouble(this.t, fraction, whole)+']';
}
