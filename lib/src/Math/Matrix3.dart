part of ThreeDart.Math;

/// A math structure for storing and manipulating a Matrix 3x3.
class Matrix3 {

  double _m11, _m21, _m31;
  double _m12, _m22, _m32;
  double _m13, _m23, _m33;

  /// Constructs a new [Matrix3] with the given initial values.
  Matrix3(double m11, double m21, double m31,
          double m12, double m22, double m32,
          double m13, double m23, double m33) {
    this.set(m11, m21, m31,
             m12, m22, m32,
             m13, m23, m33);
  }

  /// Constructs a 3x3 identity matrix.
  factory Matrix3.identity() =>
    new Matrix3(1.0, 0.0, 0.0,
                0.0, 1.0, 0.0,
                0.0, 0.0, 1.0);

  /// Constructs a 3x3 translation matrix.
  factory Matrix3.translate(double tx, double ty) =>
    new Matrix3(1.0, 0.0, tx,
                0.0, 1.0, ty,
                0.0, 0.0, 1.0);

  /// Constructs a 3x3 scalar matrix.
  factory Matrix3.scale(double sx, double sy, [double sz = 1.0]) =>
    new Matrix3(sx,  0.0, 0.0,
                0.0, sy,  0.0,
                0.0, 0.0, sz);

  /// Constructs a 3x3 X axis rotation matrix.
  ///
  /// The given [angle] is in radians.
  factory Matrix3.rotateX(double angle) {
    double c = math.cos(angle);
    double s = math.sin(angle);
    return new Matrix3(1.0, 0.0, 0.0,
                       0.0, c,   -s,
                       0.0, s,    c);
  }

  /// Constructs a 3x3 Y axis rotation matrix.
  ///
  /// The given [angle] is in radians.
  factory Matrix3.rotateY(double angle) {
    double c = math.cos(angle);
    double s = math.sin(angle);
    return new Matrix3( c,  0.0, -s,
                       0.0, 1.0, 0.0,
                        s,  0.0,  c);
  }

  /// Constructs a 3x3 Z axis rotation matrix.
  ///
  /// The given [angle] is in radians.
  factory Matrix3.rotateZ(double angle) {
    double c = math.cos(angle);
    double s = math.sin(angle);
    return new Matrix3( c,  -s,  0.0,
                        s,   c,  0.0,
                       0.0, 0.0, 1.0);
  }

  /// Constructs a 3x3 matrix from a 2x2 matrix.
  ///
  /// [mat] is padded with zeros except in ZZ which is set to 1.0.
  factory Matrix3.fromMatrix2(Matrix2 mat) =>
    new Matrix3(mat._m11, mat._m21, 0.0,
                mat._m12, mat._m22, 0.0,
                0.0,      0.0,      1.0);

  /// Constructs a 3x3 matrix from a trimmed 4x4 matrix.
  ///
  /// The 4rd row and column are ignored from [mat].
  factory Matrix3.fromMatrix4(Matrix4 mat) =>
    new Matrix3(mat._m11, mat._m21, mat._m31,
                mat._m12, mat._m22, mat._m32,
                mat._m13, mat._m23, mat._m33);

  /// Constructs a 3x3 matrix from the given quaternion.
  factory Matrix3.fromQuaternion(Quaternion a) {
      double aa = a.a+a.a, bb = a.b+a.b, cc = a.c+a.c;
      double a2 = a.a*aa,  b2 = a.b*bb,  c2 = a.c*cc;
      double bc = a.b*cc,  ab = a.a*bb,  ac = a.a*cc;
      double ta = a.t*aa,  tb = a.t*bb,  tc = a.t*cc;
      return new Matrix3(1.0-(b2+c2), ab-tc,        ac+tb,
                         ab+tc,        1.0-(a2+c2), bc-ta,
                         ac-tb,        bc+ta,        1.0-(a2+b2));
  }

  /// Constructs a new [Matrix3] instance given a list of 9 doubles.
  /// By default the list is in row major order.
  factory Matrix3.fromList(List<double> values, [bool columnMajor = false]) {
    assert(values.length == 9);
    if (columnMajor) {
      return new Matrix3(values[0], values[3], values[6],
                         values[1], values[4], values[7],
                         values[2], values[5], values[8]);
    } else {
      return new Matrix3(values[0], values[1], values[2],
                         values[3], values[4], values[5],
                         values[6], values[7], values[8]);
    }
  }

  /// Sets the [Matrix3] with the given values.
  void set(double m11, double m21, double m31,
           double m12, double m22, double m32,
           double m13, double m23, double m33) {
    this._m11 = m11; this._m21 = m21; this._m31 = m31;
    this._m12 = m12; this._m22 = m22; this._m32 = m32;
    this._m13 = m13; this._m23 = m23; this._m33 = m33;
  }

  /// Gets the list of 9 doubles for the matrix.
  /// By default the list is in row major order.
  List<double> toList([bool columnMajor = false]) {
    if (columnMajor) {
      return [this._m11, this._m12, this._m13,
              this._m21, this._m22, this._m23,
              this._m31, this._m32, this._m33];
    } else {
      return [this._m11, this._m21, this._m31,
              this._m12, this._m22, this._m32,
              this._m13, this._m23, this._m33];
    }
  }

  /// The 1st row and 1st column of the matrix, XX.
  double get m11 => this._m11;
  set m11(double m11) => this._m11 = m11;

  /// The 1st row and 2nd column of the matrix, XY.
  double get m21 => this._m21;
  set m21(double m21) => this._m21 = m21;

  /// The 1st row and 3rd column of the matrix, XZ.
  double get m31 => this._m31;
  set m31(double m31) => this._m31 = m31;

  /// The 2nd row and 1st column of the matrix, YX.
  double get m12 => this._m12;
  set m12(double m12) => this._m12 = m12;

  /// The 2nd row and 2nd column of the matrix, YY.
  double get m22 => this._m22;
  set m22(double m22) => this._m22 = m22;

  /// The 2nd row and 3rd column of the matrix, YZ.
  double get m32 => this._m32;
  set m32(double m32) => this._m32 = m32;

  /// The 3rd row and 1st column of the matrix, ZX.
  double get m13 => this._m13;
  set m13(double m13) => this._m13 = m13;

  /// The 3rd row and 2nd column of the matrix, ZY.
  double get m23 => this._m23;
  set m23(double m23) => this._m23 = m23;

  /// The 3rd row and 3rd column of the matrix, ZZ.
  double get m33 => this._m33;
  set m33(double m33) => this._m33 = m33;

  /// Gets the determinant of this matrix.
  double det() =>
    this._m11 * (this._m22 * this._m33 - this._m32 * this._m23) -
    this._m12 * (this._m21 * this._m33 - this._m23 * this._m31) +
    this._m13 * (this._m21 * this._m32 - this._m22 * this._m31);

  /// Gets a copy of this matrix.
  Matrix3 copy() =>
      new Matrix3(this._m11, this._m21, this._m31,
                  this._m12, this._m22, this._m32,
                  this._m13, this._m23, this._m33);

  /// Gets the transposition of this matrix.
  Matrix3 transpose() =>
    new Matrix3(this._m11, this._m12, this._m13,
                this._m21, this._m22, this._m23,
                this._m31, this._m32, this._m33);

  /// Gets the inverse of this matrix.
  Matrix3 inverse() {
    double det = this.det();
    if (Comparer.equals(det, 0.0)) return new Matrix3.identity();
    double q = 1.0 / det;
    return new Matrix3((this._m22 * this._m33 - this._m32 * this._m23) * q,
                       (this._m13 * this._m32 - this._m12 * this._m33) * q,
                       (this._m12 * this._m23 - this._m13 * this._m22) * q,
                       (this._m23 * this._m31 - this._m21 * this._m33) * q,
                       (this._m11 * this._m33 - this._m13 * this._m31) * q,
                       (this._m21 * this._m13 - this._m11 * this._m23) * q,
                       (this._m21 * this._m32 - this._m31 * this._m22) * q,
                       (this._m31 * this._m12 - this._m11 * this._m32) * q,
                       (this._m11 * this._m22 - this._m21 * this._m12) * q);
  }

  /// Multiplies this matrix by the [other] matrix.
  Matrix3 operator *(Matrix3 other) => new Matrix3(
      this._m11 * other._m11 + this._m21 * other._m12 + this._m31 * other._m13,
      this._m11 * other._m21 + this._m21 * other._m22 + this._m31 * other._m23,
      this._m11 * other._m31 + this._m21 * other._m32 + this._m31 * other._m33,
      this._m12 * other._m11 + this._m22 * other._m12 + this._m32 * other._m13,
      this._m12 * other._m21 + this._m22 * other._m22 + this._m32 * other._m23,
      this._m12 * other._m31 + this._m22 * other._m32 + this._m32 * other._m33,
      this._m13 * other._m11 + this._m23 * other._m12 + this._m33 * other._m13,
      this._m13 * other._m21 + this._m23 * other._m22 + this._m33 * other._m23,
      this._m13 * other._m31 + this._m23 * other._m32 + this._m33 * other._m33);

  /// Transposes the given [vec] with this matrix.
  ///
  /// The Z component of the point is treated a 0.0,
  /// meaning the 3rd (Z) row and column of the matrix are not used.
  Vector2 transVec2(Vector2 vec) => new Vector2(
      this._m11 * vec.dx + this._m21 * vec.dy,
      this._m12 * vec.dx + this._m22 * vec.dy);

  /// Transposes the given [pnt] with this matrix.
  ///
  /// The Z component of the point is treated a 1.0,
  /// meaning the 3rd (Z) column of the matrix can be used for translation.
  Point2 transPnt2(Point2 pnt) => new Point2(
      this._m11 * pnt.x + this._m21 * pnt.y + this._m31,
      this._m12 * pnt.x + this._m22 * pnt.y + this._m32);

  /// Transposes the given [vec] with this matrix.
  Vector3 transVec3(Vector3 vec) => new Vector3(
      this._m11 * vec.dx + this._m21 * vec.dy + this._m31 * vec.dz,
      this._m12 * vec.dx + this._m22 * vec.dy + this._m32 * vec.dz,
      this._m13 * vec.dx + this._m23 * vec.dy + this._m33 * vec.dz);

  /// Transposes the given [pnt] with this matrix.
  Point3 transPnt3(Point3 pnt) => new Point3(
      this._m11 * pnt.x + this._m21 * pnt.y + this._m31 * pnt.z,
      this._m12 * pnt.x + this._m22 * pnt.y + this._m32 * pnt.z,
      this._m13 * pnt.x + this._m23 * pnt.y + this._m33 * pnt.z);

  /// Transposes the given [clr] with this matrix.
  Color3 transClr3(Color3 clr) => new Color3(
      this._m11 * clr.red + this._m21 * clr.green + this._m31 * clr.blue,
      this._m12 * clr.red + this._m22 * clr.green + this._m32 * clr.blue,
      this._m13 * clr.red + this._m23 * clr.green + this._m33 * clr.blue);

  /// Transposes the given [clr] with this matrix.
  ///
  /// The alpha component is not modified.
  Color4 transClr4(Color4 clr) => new Color4(
      this._m11 * clr.red + this._m21 * clr.green + this._m31 * clr.blue,
      this._m12 * clr.red + this._m22 * clr.green + this._m32 * clr.blue,
      this._m13 * clr.red + this._m23 * clr.green + this._m33 * clr.blue,
      clr.alpha);

  /// Determines if the given [other] variable is a [Matrix3] equal to this metrix.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Matrix3) return false;
    Matrix3 mat = other as Matrix3;
    if (!Comparer.equals(mat._m11, this._m11)) return false;
    if (!Comparer.equals(mat._m21, this._m21)) return false;
    if (!Comparer.equals(mat._m31, this._m31)) return false;
    if (!Comparer.equals(mat._m12, this._m12)) return false;
    if (!Comparer.equals(mat._m22, this._m22)) return false;
    if (!Comparer.equals(mat._m32, this._m32)) return false;
    if (!Comparer.equals(mat._m13, this._m13)) return false;
    if (!Comparer.equals(mat._m23, this._m23)) return false;
    if (!Comparer.equals(mat._m33, this._m33)) return false;
    return true;
  }

  /// Gets the string for this matrix.
  String toString([String indent = "", int fraction = 3, int whole = 0]) {
    List<String> col1 = formatColumn([this._m11, this._m12, this._m13], fraction, whole);
    List<String> col2 = formatColumn([this._m21, this._m22, this._m23], fraction, whole);
    List<String> col3 = formatColumn([this._m31, this._m32, this._m33], fraction, whole);
    return '[${col1[0]}, ${col2[0]}, ${col3[0]},\n' +
      '$indent ${col1[1]}, ${col2[1]}, ${col3[1]},\n' +
      '$indent ${col1[2]}, ${col2[2]}, ${col3[2]}]';
  }
}
