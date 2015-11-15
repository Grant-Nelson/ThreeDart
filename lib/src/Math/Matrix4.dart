part of ThreeDart.Math;

/// A math structure for storing and manipulating a Matrix 4x4.
class Matrix4 {

  double _m11, _m21, _m31, _m41;
  double _m12, _m22, _m32, _m42;
  double _m13, _m23, _m33, _m43;
  double _m14, _m24, _m34, _m44;

  /// Constructs a new [Matrix4] with the given initial values.
  Matrix4(double m11, double m21, double m31, double m41,
          double m12, double m22, double m32, double m42,
          double m13, double m23, double m33, double m43,
          double m14, double m24, double m34, double m44) {
    this.set(m11, m21, m31, m41,
             m12, m22, m32, m42,
             m13, m23, m33, m43,
             m14, m24, m34, m44);
  }

  /// Constructs a 4x4 identity matrix.
  factory Matrix4.identity() =>
    new Matrix4(1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0);

  /// Constructs a 4x4 translation matrix.
  factory Matrix4.translate(double tx, double ty, double tz) =>
    new Matrix4(1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                tx,  ty,  tz,  1.0);

  /// Constructs a 4x4 scalar matrix.
  factory Matrix4.scale(double sx, double sy, double sz) =>
    new Matrix4(sx,  0.0, 0.0, 0.0,
                0.0, sy,  0.0, 0.0,
                0.0, 0.0, sz,  0.0,
                0.0, 0.0, 0.0, 1.0);

  /// Constructs a 4x4 rotation matrix.
  ///
  /// The given [angle] is in radians.
  /// The given [vec] is the vector to rotate around.
  factory Matrix4.rotate(double angle, Vector3 vec) {
    double c = math.cos(angle);
    double n = 1.0 - c;
    double s = math.sin(angle);
    double m11 = vec.dx * vec.dx * n + c,
           m21 = vec.dx * vec.dy * n - vec.dz * s,
           m31 = vec.dx * vec.dz * n + vec.dy * s,
           m12 = vec.dy * vec.dx * n + vec.dz * s,
           m22 = vec.dy * vec.dy * n + c,
           m32 = vec.dy * vec.dz * n - vec.dx * s,
           m13 = vec.dz * vec.dx * n - vec.dy * s,
           m23 = vec.dx * vec.dy * n + vec.dx * s,
           m33 = vec.dz * vec.dz * n + c;
    return new Matrix4(m11, m21, m31, 0.0,
                       m12, m22, m32, 0.0,
                       m13, m23, m33, 0.0,
                       0.0, 0.0, 0.0, 1.0);
  }

  /// Constructs a 4x4 X asix rotation matrix.
  ///
  /// The given [angle] is in radians.
  factory Matrix4.rotateX(double angle) {
    double c = math.cos(angle);
    double s = math.sin(angle);
    return new Matrix4(1.0, 0.0, 0.0, 0.0,
                       0.0, c,   -s,  0.0,
                       0.0, s,    c,  0.0,
                       0.0, 0.0, 0.0, 1.0);
  }

  /// Constructs a 4x4 Y asix rotation matrix.
  ///
  /// The given [angle] is in radians.
  factory Matrix4.rotateY(double angle) {
    double c = math.cos(angle);
    double s = math.sin(angle);
    return new Matrix4(c,   0.0, s,   0.0,
                       0.0, 1.0, 0.0, 0.0,
                       -s,  0.0, c,   0.0,
                       0.0, 0.0, 0.0, 1.0);
  }

  /// Constructs a 4x4 Z asix rotation matrix.
  ///
  /// The given [angle] is in radians.
  factory Matrix4.rotateZ(double angle) {
    double c = math.cos(angle);
    double s = math.sin(angle);
    return new Matrix4(c,   -s,  0.0, 0.0,
                       s,    c,  0.0, 0.0,
                       0.0, 0.0, 1.0, 0.0,
                       0.0, 0.0, 0.0, 1.0);
  }

  /// Constructs a new perspective projection matrix.
  ///
  /// The given [angle] is in radians of the field of view.
  /// The given [ratio] is the width over the height of the view.
  /// The [near] and [far] depth of the view.
  factory Matrix4.perspective(double angle, double ratio, double near, double far) {
    double yy = 1.0 / math.tan(angle * 0.5);
    double xx = yy / ratio;
    double zz = far / (far - near);
    double zw = -far * near / (far - near);
    return new Matrix4(xx,  0.0, 0.0, 0.0,
                       0.0, yy,  0.0, 0.0,
                       0.0, 0.0, zz,  1.0,
                       0.0, 0.0, zw,  0.0);
  }

  /// Constructs a new orthographic projection matrix.
  ///
  /// [left] and [right] are the horizontal visible range.
  /// [top] and [bottom] are the vertical visible range.
  /// The [near] and [far] depth of the view.
  factory Matrix4.ortho(double left, double right, double top, double bottom, double near, double far) {
    double xx = 2.0 / (right - left);
    double yy = 2.0 / (top - bottom);
    double zz = 2.0 / (far - near);
    double wx = -(left + right) / (right - left);
    double wy = -(top + bottom) / (top - bottom);
    double wz = (far + near) / (far - near);
    return new Matrix4(xx,  0.0, 0.0, wx,
                       0.0, yy,  0.0, wy,
                       0.0, 0.0, zz,  wz,
                       0.0, 0.0, 0.0, 1.0);
  }

  /// Constructs a camara matrix.
  ///
  /// [pos] is the position of the camara,
  /// [up] is the top direction of the camara,
  /// and [forward] is the direction the camara is looking towards.
  factory Matrix4.lookTowards(Point3 pos, Vector3 up, Vector3 forward) {
    Vector3 zaxis = forward.normal();
    Vector3 xaxis = up.cross(zaxis).normal();
    Vector3 yaxis = zaxis.cross(xaxis);
    Vector3 toPos = new Vector3.fromPoint3(pos);
    double tx = (-xaxis).dot(toPos);
    double ty = (-yaxis).dot(toPos);
    double tz = (-zaxis).dot(toPos);
    return new Matrix4(xaxis.dx, yaxis.dx, zaxis.dx, 0.0,
                       xaxis.dy, yaxis.dy, zaxis.dy, 0.0,
                       xaxis.dz, yaxis.dz, zaxis.dz, 0.0,
                          tx,       ty,       tz,    1.0);
  }

  /// Constructs a camara matrix.
  ///
  /// [pos] is the position of the camara,
  /// [up] is the top direction of the camara,
  /// and [focus] is the point the camara is looking at.
  factory Matrix4.lookAtTarget(Point3 pos, Vector3 up, Point3 focus) {
    Vector3 forward = new Vector3.fromPoint3(focus - pos);
    return new Matrix4.lookTowards(pos, up, forward);
  }

  /// Constructs a 4x4 matrix from a 2x3 matrix.
  ///
  /// [mat] is padded with zeros except in ZZ and WW which is set to 1.0.
  factory Matrix4.fromMatrix2(Matrix2 mat) =>
    new Matrix4(mat._m11, mat._m12, 0.0, 0.0,
                mat._m21, mat._m22, 0.0, 0.0,
                0.0,      0.0,      1.0, 0.0,
                0.0,      0.0,      0.0, 1.0);

  /// Constructs a 4x4 matrix from a 3x3 matrix.
  ///
  /// [mat] is padded with zeros except in WW which is set to 1.0.
  factory Matrix4.fromMatrix3(Matrix3 mat) =>
    new Matrix4(mat._m11, mat._m12, mat._m13, 0.0,
                mat._m21, mat._m22, mat._m23, 0.0,
                mat._m31, mat._m32, mat._m33, 0.0,
                0.0,      0.0,      0.0,      1.0);

  /// Constructs a new [Matrix4] instance given a list of 16 doubles.
  factory Matrix4.fromList(List<double> values) {
    assert(values.length == 16);
    return new Matrix4(values[ 0], values[ 1], values[ 2], values[ 3],
                       values[ 4], values[ 5], values[ 6], values[ 7],
                       values[ 8], values[ 9], values[10], values[11],
                       values[12], values[13], values[14], values[15]);
  }

  /// Sets the [Matrix4] with the given values.
  void set(double m11, double m21, double m31, double m41,
           double m12, double m22, double m32, double m42,
           double m13, double m23, double m33, double m43,
           double m14, double m24, double m34, double m44) {
    this._m11 = m11; this._m21 = m21; this._m31 = m31; this._m41 = m41;
    this._m12 = m12; this._m22 = m22; this._m32 = m32; this._m42 = m42;
    this._m13 = m13; this._m23 = m23; this._m33 = m33; this._m43 = m43;
    this._m14 = m14; this._m24 = m24; this._m34 = m34; this._m44 = m44;
  }

  /// Gets the list of 16 doubles for the matrix.
  List<double> toList() => [
    this._m11, this._m21, this._m31, this._m41,
    this._m12, this._m22, this._m32, this._m42,
    this._m13, this._m23, this._m33, this._m43,
    this._m14, this._m24, this._m34, this._m44
  ];

  /// The 1st row and 1st column of the matrix, XX.
  double get m11 => this._m11;
  set m11(double m11) => this._m11 = m11;

  /// The 1st row and 2nd column of the matrix, XY.
  double get m21 => this._m21;
  set m21(double m21) => this._m21 = m21;

  /// The 1st row and 3rd column of the matrix, XZ.
  double get m31 => this._m31;
  set m31(double m31) => this._m31 = m31;

  /// The 1st row and 4th column of the matrix, XW.
  double get m41 => this._m41;
  set m41(double m41) => this._m41 = m41;

  /// The 2nd row and 1st column of the matrix, YX.
  double get m12 => this._m12;
  set m12(double m12) => this._m12 = m12;

  /// The 2nd row and 2nd column of the matrix, YY.
  double get m22 => this._m22;
  set m22(double m22) => this._m22 = m22;

  /// The 2nd row and 3rd column of the matrix, YZ.
  double get m32 => this._m32;
  set m32(double m32) => this._m32 = m32;

  /// The 2nd row and 4th column of the matrix, YW.
  double get m42 => this._m42;
  set m42(double m42) => this._m42 = m42;

  /// The 3rd row and 1st column of the matrix, ZX.
  double get m13 => this._m13;
  set m13(double m13) => this._m13 = m13;

  /// The 3rd row and 2nd column of the matrix, ZY.
  double get m23 => this._m23;
  set m23(double m23) => this._m23 = m23;

  /// The 3rd row and 3rd column of the matrix, ZZ.
  double get m33 => this._m33;
  set m33(double m33) => this._m33 = m33;

  /// The 3rd row and 4th column of the matrix, ZW.
  double get m43 => this._m43;
  set m43(double m43) => this._m43 = m43;

  /// The 4th row and 1st column of the matrix, WX.
  double get m14 => this._m14;
  set m14(double m14) => this._m14 = m14;

  /// The 4th row and 2nd column of the matrix, WY.
  double get m24 => this._m24;
  set m24(double m24) => this._m24 = m24;

  /// The 4th row and 3rd column of the matrix, WZ.
  double get m34 => this._m34;
  set m34(double m34) => this._m34 = m34;

  /// The 4th row and 4th column of the matrix, WW.
  double get m44 => this._m44;
  set m44(double m44) => this._m44 = m44;

  /// Gets the determinant of this matrix.
  double det() {
    double a = this._m14 * this._m23 - this._m13 * this._m24;
    double b = this._m12 * this._m24 - this._m14 * this._m22;
    double c = this._m13 * this._m22 - this._m12 * this._m23;
    double d = this._m14 * this._m21 - this._m11 * this._m24;
    double e = this._m11 * this._m23 - this._m13 * this._m21;
    double f = this._m12 * this._m21 - this._m11 * this._m22;
    return (a * this._m32 + b * this._m33 + c * this._m34) * this._m41 -
           (a * this._m31 - d * this._m33 - e * this._m34) * this._m42 -
           (b * this._m31 + d * this._m32 - f * this._m34) * this._m43 -
           (c * this._m31 + e * this._m32 + f * this._m33) * this._m44;
  }

  /// Gets a copy of this matrix.
  Matrix4 copy() =>
      new Matrix4(this._m11, this._m21, this._m31, this._m41,
                  this._m12, this._m22, this._m32, this._m42,
                  this._m13, this._m23, this._m33, this._m43,
                  this._m14, this._m24, this._m34, this._m44);

  /// Gets the transposition of this matrix.
  Matrix4 transpose() =>
    new Matrix4(this._m11, this._m12, this._m13, this._m14,
                this._m21, this._m22, this._m23, this._m24,
                this._m31, this._m32, this._m33, this._m34,
                this._m41, this._m42, this._m43, this._m44);

  /// Gets the inverse of this matrix.
  Matrix4 inverse() {
    double a = this._m11 * this._m22 - this._m21 * this._m12,
           b = this._m11 * this._m32 - this._m31 * this._m12,
           c = this._m11 * this._m42 - this._m41 * this._m12,
           e = this._m21 * this._m32 - this._m31 * this._m22,
           g = this._m21 * this._m42 - this._m41 * this._m22,
           h = this._m31 * this._m42 - this._m41 * this._m32,
           i = this._m13 * this._m24 - this._m23 * this._m14,
           j = this._m13 * this._m34 - this._m33 * this._m14,
           l = this._m13 * this._m44 - this._m43 * this._m14,
           m = this._m23 * this._m34 - this._m33 * this._m24,
           n = this._m23 * this._m44 - this._m43 * this._m24,
           o = this._m33 * this._m44 - this._m43 * this._m34;
    double det = (a * o - b * n + c * m + e * l - g * j + h * i);
    if (Comparer.equals(det, 0.0)) return new Matrix4.identity();
    double q = 1.0 / det;
    return new Matrix4(
        ( this._m22 * o - this._m32 * n + this._m42 * m) * q, (-this._m21 * o + this._m31 * n - this._m41 * m) * q,
        ( this._m24 * h - this._m34 * g + this._m44 * e) * q, (-this._m23 * h + this._m33 * g - this._m43 * e) * q,
        (-this._m12 * o + this._m32 * l - this._m42 * j) * q, ( this._m11 * o - this._m31 * l + this._m41 * j) * q,
        (-this._m14 * h + this._m34 * c - this._m44 * b) * q, ( this._m13 * h - this._m33 * c + this._m43 * b) * q,
        ( this._m12 * n - this._m22 * l + this._m42 * i) * q, (-this._m11 * n + this._m21 * l - this._m41 * i) * q,
        ( this._m14 * g - this._m24 * c + this._m44 * a) * q, (-this._m13 * g + this._m23 * c - this._m43 * a) * q,
        (-this._m12 * m + this._m22 * j - this._m32 * i) * q, ( this._m11 * m - this._m21 * j + this._m31 * i) * q,
        (-this._m14 * e + this._m24 * b - this._m34 * a) * q, ( this._m13 * e - this._m23 * b + this._m33 * a) * q);
  }

  /// Multiplies this matrix by the [other] matrix.
  Matrix4 operator *(Matrix4 other) => new Matrix4(
      this._m11 * other._m11 + this._m21 * other._m12 + this._m31 * other._m13 + this._m41 * other._m14,
      this._m11 * other._m21 + this._m21 * other._m22 + this._m31 * other._m23 + this._m41 * other._m24,
      this._m11 * other._m31 + this._m21 * other._m32 + this._m31 * other._m33 + this._m41 * other._m34,
      this._m11 * other._m41 + this._m21 * other._m42 + this._m31 * other._m43 + this._m41 * other._m44,
      this._m12 * other._m11 + this._m22 * other._m12 + this._m32 * other._m13 + this._m42 * other._m14,
      this._m12 * other._m21 + this._m22 * other._m22 + this._m32 * other._m23 + this._m42 * other._m24,
      this._m12 * other._m31 + this._m22 * other._m32 + this._m32 * other._m33 + this._m42 * other._m34,
      this._m12 * other._m41 + this._m22 * other._m42 + this._m32 * other._m43 + this._m42 * other._m44,
      this._m13 * other._m11 + this._m23 * other._m12 + this._m33 * other._m13 + this._m43 * other._m14,
      this._m13 * other._m21 + this._m23 * other._m22 + this._m33 * other._m23 + this._m43 * other._m24,
      this._m13 * other._m31 + this._m23 * other._m32 + this._m33 * other._m33 + this._m43 * other._m34,
      this._m13 * other._m41 + this._m23 * other._m42 + this._m33 * other._m43 + this._m43 * other._m44,
      this._m14 * other._m11 + this._m24 * other._m12 + this._m34 * other._m13 + this._m44 * other._m14,
      this._m14 * other._m21 + this._m24 * other._m22 + this._m34 * other._m23 + this._m44 * other._m24,
      this._m14 * other._m31 + this._m24 * other._m32 + this._m34 * other._m33 + this._m44 * other._m34,
      this._m14 * other._m41 + this._m24 * other._m42 + this._m34 * other._m43 + this._m44 * other._m44);

  /// Transposes the given [vec] with this matrix.
  ///
  /// The Z component of the point is treated a 0.0,
  /// meaning the 4th (W) row and column of the matrix are not used.
  Vector3 transVec3(Vector3 vec) => new Vector3(
      this._m11 * vec.dx + this._m21 * vec.dy + this._m31 * vec.dz,
      this._m12 * vec.dx + this._m22 * vec.dy + this._m32 * vec.dz,
      this._m13 * vec.dx + this._m23 * vec.dy + this._m33 * vec.dz);

  /// Transposes the given [pnt] with this matrix.
  ///
  /// The W component of the point is treated a 1.0,
  /// meaning the 4th (W) column of the matrix can be used for translation.
  Point3 transPnt3(Point3 pnt) => new Point3(
      this._m11 * pnt.x + this._m21 * pnt.y + this._m31 * pnt.z + this._m41,
      this._m12 * pnt.x + this._m22 * pnt.y + this._m32 * pnt.z + this._m42,
      this._m13 * pnt.x + this._m23 * pnt.y + this._m33 * pnt.z + this._m43);

  /// Transposes the given [vec] with this matrix.
  Vector4 transVec4(Vector4 vec) => new Vector4(
      this._m11 * vec.dx + this._m21 * vec.dy + this._m31 * vec.dz + this._m41 * vec.dw,
      this._m12 * vec.dx + this._m22 * vec.dy + this._m32 * vec.dz + this._m42 * vec.dw,
      this._m13 * vec.dx + this._m23 * vec.dy + this._m33 * vec.dz + this._m43 * vec.dw,
      this._m14 * vec.dx + this._m24 * vec.dy + this._m34 * vec.dz + this._m44 * vec.dw);

  /// Transposes the given [pnt] with this matrix.
  Point4 transPnt4(Point4 pnt) => new Point4(
      this._m11 * pnt.x + this._m21 * pnt.y + this._m31 * pnt.z + this._m41 * pnt.w,
      this._m12 * pnt.x + this._m22 * pnt.y + this._m32 * pnt.z + this._m42 * pnt.w,
      this._m13 * pnt.x + this._m23 * pnt.y + this._m33 * pnt.z + this._m43 * pnt.w,
      this._m14 * pnt.x + this._m24 * pnt.y + this._m34 * pnt.z + this._m44 * pnt.w);

  /// Determines if the given [other] variable is a [Matrix4] equal to this metrix.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Matrix4) return false;
    Matrix4 mat = other as Matrix4;
    if (!Comparer.equals(mat._m11, this._m11)) return false;
    if (!Comparer.equals(mat._m21, this._m21)) return false;
    if (!Comparer.equals(mat._m31, this._m31)) return false;
    if (!Comparer.equals(mat._m41, this._m41)) return false;
    if (!Comparer.equals(mat._m12, this._m12)) return false;
    if (!Comparer.equals(mat._m22, this._m22)) return false;
    if (!Comparer.equals(mat._m32, this._m32)) return false;
    if (!Comparer.equals(mat._m42, this._m42)) return false;
    if (!Comparer.equals(mat._m13, this._m13)) return false;
    if (!Comparer.equals(mat._m23, this._m23)) return false;
    if (!Comparer.equals(mat._m33, this._m33)) return false;
    if (!Comparer.equals(mat._m43, this._m43)) return false;
    if (!Comparer.equals(mat._m14, this._m14)) return false;
    if (!Comparer.equals(mat._m24, this._m24)) return false;
    if (!Comparer.equals(mat._m34, this._m34)) return false;
    if (!Comparer.equals(mat._m44, this._m44)) return false;
    return true;
  }

  /// Gets the string for this matrix.
  String toString() =>
      '['+formatDouble(this._m11)+', '+formatDouble(this._m21)+', '+formatDouble(this._m31)+', '+formatDouble(this._m41)+',\n' +
      ' '+formatDouble(this._m12)+', '+formatDouble(this._m22)+', '+formatDouble(this._m32)+', '+formatDouble(this._m42)+',\n' +
      ' '+formatDouble(this._m13)+', '+formatDouble(this._m23)+', '+formatDouble(this._m33)+', '+formatDouble(this._m43)+',\n' +
      ' '+formatDouble(this._m14)+', '+formatDouble(this._m24)+', '+formatDouble(this._m34)+', '+formatDouble(this._m44)+']';
}
