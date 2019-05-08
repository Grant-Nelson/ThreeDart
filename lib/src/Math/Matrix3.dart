part of ThreeDart.Math;

/// A math structure for storing and manipulating a Matrix 3x3.
class Matrix3 {

  /// Gets a 3x3 identity matrix.
  static Matrix3 get identity {
    _identSingleton ??= new Matrix3(
      1.0, 0.0, 0.0,
      0.0, 1.0, 0.0,
      0.0, 0.0, 1.0);
    return _identSingleton;
  }
  static Matrix3 _identSingleton;

  /// The 1st row and 1st column of the matrix, XX.
  final double m11;

  /// The 1st row and 2nd column of the matrix, XY.
  final double m21;

  /// The 1st row and 3rd column of the matrix, XZ.
  final double m31;

  /// The 2nd row and 1st column of the matrix, YX.
  final double m12;

  /// The 2nd row and 2nd column of the matrix, YY.
  final double m22;

  /// The 2nd row and 3rd column of the matrix, YZ.
  final double m32;

  /// The 3rd row and 1st column of the matrix, ZX.
  final double m13;

  /// The 3rd row and 2nd column of the matrix, ZY.
  final double m23;

  /// The 3rd row and 3rd column of the matrix, ZZ.
  final double m33;

  /// Constructs a new [Matrix3] with the given initial values.
  Matrix3(double this.m11, double this.m21, double this.m31,
          double this.m12, double this.m22, double this.m32,
          double this.m13, double this.m23, double this.m33);

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
    new Matrix3(mat.m11, mat.m21, 0.0,
                mat.m12, mat.m22, 0.0,
                0.0,     0.0,     1.0);

  /// Constructs a 3x3 matrix from a trimmed 4x4 matrix.
  ///
  /// The 4rd row and column are ignored from [mat].
  factory Matrix3.fromMatrix4(Matrix4 mat) =>
    new Matrix3(mat.m11, mat.m21, mat.m31,
                mat.m12, mat.m22, mat.m32,
                mat.m13, mat.m23, mat.m33);

  /// Constructs a 3x3 matrix from the given quaternion.
  factory Matrix3.fromQuaternion(Quaternion a) {
    double aa = a.a+a.a, bb = a.b+a.b, cc = a.c+a.c;
    double a2 = a.a*aa,  b2 = a.b*bb,  c2 = a.c*cc;
    double bc = a.b*cc,  ab = a.a*bb,  ac = a.a*cc;
    double ta = a.t*aa,  tb = a.t*bb,  tc = a.t*cc;
    return new Matrix3(1.0-(b2+c2), ab-tc,       ac+tb,
                       ab+tc,       1.0-(a2+c2), bc-ta,
                       ac-tb,       bc+ta,       1.0-(a2+b2));
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

  /// Gets the list of 9 doubles for the matrix.
  /// By default the list is in row major order.
  List<double> toList([bool columnMajor = false]) {
    if (columnMajor) {
      return [this.m11, this.m12, this.m13,
              this.m21, this.m22, this.m23,
              this.m31, this.m32, this.m33];
    } else {
      return [this.m11, this.m21, this.m31,
              this.m12, this.m22, this.m32,
              this.m13, this.m23, this.m33];
    }
  }

  /// Gets the value at the zero based index in row major order.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.m11;
      case 1: return this.m12;
      case 2: return this.m13;
      case 3: return this.m21;
      case 4: return this.m22;
      case 5: return this.m23;
      case 6: return this.m31;
      case 7: return this.m32;
      case 8: return this.m33;
    }
    return 0.0;
  }

  /// Gets the determinant of this matrix.
  double det() =>
    this.m11 * (this.m22 * this.m33 - this.m32 * this.m23) -
    this.m12 * (this.m21 * this.m33 - this.m23 * this.m31) +
    this.m13 * (this.m21 * this.m32 - this.m22 * this.m31);

  /// Gets the transposition of this matrix.
  Matrix3 transpose() =>
    new Matrix3(this.m11, this.m12, this.m13,
                this.m21, this.m22, this.m23,
                this.m31, this.m32, this.m33);

  /// Gets the inverse of this matrix.
  Matrix3 inverse() {
    double det = this.det();
    if (Comparer.equals(det, 0.0)) return Matrix3.identity;
    double q = 1.0 / det;
    return new Matrix3((this.m22 * this.m33 - this.m23 * this.m32) * q,
                       (this.m23 * this.m31 - this.m21 * this.m33) * q,
                       (this.m21 * this.m32 - this.m22 * this.m31) * q,
                       (this.m13 * this.m32 - this.m12 * this.m33) * q,
                       (this.m11 * this.m33 - this.m13 * this.m31) * q,
                       (this.m12 * this.m31 - this.m11 * this.m32) * q,
                       (this.m12 * this.m23 - this.m13 * this.m22) * q,
                       (this.m13 * this.m21 - this.m11 * this.m23) * q,
                       (this.m11 * this.m22 - this.m12 * this.m21) * q);
  }

  /// Multiplies this matrix by the [other] matrix.
  Matrix3 operator *(Matrix3 other) => new Matrix3(
    this.m11 * other.m11 + this.m21 * other.m12 + this.m31 * other.m13,
    this.m11 * other.m21 + this.m21 * other.m22 + this.m31 * other.m23,
    this.m11 * other.m31 + this.m21 * other.m32 + this.m31 * other.m33,
    this.m12 * other.m11 + this.m22 * other.m12 + this.m32 * other.m13,
    this.m12 * other.m21 + this.m22 * other.m22 + this.m32 * other.m23,
    this.m12 * other.m31 + this.m22 * other.m32 + this.m32 * other.m33,
    this.m13 * other.m11 + this.m23 * other.m12 + this.m33 * other.m13,
    this.m13 * other.m21 + this.m23 * other.m22 + this.m33 * other.m23,
    this.m13 * other.m31 + this.m23 * other.m32 + this.m33 * other.m33);

  /// Transposes the given [vec] with this matrix.
  ///
  /// The Z component of the point is treated a 0.0,
  /// meaning the 3rd (Z) row and column of the matrix are not used.
  Vector2 transVec2(Vector2 vec) => new Vector2(
    this.m11 * vec.dx + this.m21 * vec.dy,
    this.m12 * vec.dx + this.m22 * vec.dy);

  /// Transposes the given [pnt] with this matrix.
  ///
  /// The Z component of the point is treated a 1.0,
  /// meaning the 3rd (Z) column of the matrix can be used for translation.
  Point2 transPnt2(Point2 pnt) => new Point2(
    this.m11 * pnt.x + this.m21 * pnt.y + this.m31,
    this.m12 * pnt.x + this.m22 * pnt.y + this.m32);

  /// Transposes the given [vec] with this matrix.
  Vector3 transVec3(Vector3 vec) => new Vector3(
    this.m11 * vec.dx + this.m21 * vec.dy + this.m31 * vec.dz,
    this.m12 * vec.dx + this.m22 * vec.dy + this.m32 * vec.dz,
    this.m13 * vec.dx + this.m23 * vec.dy + this.m33 * vec.dz);

  /// Transposes the given [pnt] with this matrix.
  Point3 transPnt3(Point3 pnt) => new Point3(
    this.m11 * pnt.x + this.m21 * pnt.y + this.m31 * pnt.z,
    this.m12 * pnt.x + this.m22 * pnt.y + this.m32 * pnt.z,
    this.m13 * pnt.x + this.m23 * pnt.y + this.m33 * pnt.z);

  /// Transposes the given [clr] with this matrix.
  Color3 transClr3(Color3 clr) => new Color3(
    this.m11 * clr.red + this.m21 * clr.green + this.m31 * clr.blue,
    this.m12 * clr.red + this.m22 * clr.green + this.m32 * clr.blue,
    this.m13 * clr.red + this.m23 * clr.green + this.m33 * clr.blue);

  /// Transposes the given [clr] with this matrix.
  ///
  /// The alpha component is not modified.
  Color4 transClr4(Color4 clr) => new Color4(
    this.m11 * clr.red + this.m21 * clr.green + this.m31 * clr.blue,
    this.m12 * clr.red + this.m22 * clr.green + this.m32 * clr.blue,
    this.m13 * clr.red + this.m23 * clr.green + this.m33 * clr.blue,
    clr.alpha);

  /// Determines if the given [other] variable is a [Matrix3] equal to this metrix.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Matrix3) return false;
    Matrix3 mat = other as Matrix3;
    if (!Comparer.equals(mat.m11, this.m11)) return false;
    if (!Comparer.equals(mat.m21, this.m21)) return false;
    if (!Comparer.equals(mat.m31, this.m31)) return false;
    if (!Comparer.equals(mat.m12, this.m12)) return false;
    if (!Comparer.equals(mat.m22, this.m22)) return false;
    if (!Comparer.equals(mat.m32, this.m32)) return false;
    if (!Comparer.equals(mat.m13, this.m13)) return false;
    if (!Comparer.equals(mat.m23, this.m23)) return false;
    if (!Comparer.equals(mat.m33, this.m33)) return false;
    return true;
  }

  /// Gets the string for this matrix.
  String toString() => this.format();

  /// Gets the formatted string for this matrix.
  String format([String indent = "", int fraction = 3, int whole = 0]) {
    List<String> col1 = formatColumn([this.m11, this.m12, this.m13], fraction, whole);
    List<String> col2 = formatColumn([this.m21, this.m22, this.m23], fraction, whole);
    List<String> col3 = formatColumn([this.m31, this.m32, this.m33], fraction, whole);
    return '[${col1[0]}, ${col2[0]}, ${col3[0]},\n' +
      '$indent ${col1[1]}, ${col2[1]}, ${col3[1]},\n' +
      '$indent ${col1[2]}, ${col2[2]}, ${col3[2]}]';
  }
}
