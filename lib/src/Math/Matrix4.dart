part of ThreeDart.Math;

/// A math structure for storing and manipulating a Matrix 4x4.
class Matrix4 {

  /// Gets a 4x4 identity matrix.
  static Matrix4 get identity {
    _identSingleton ??= new Matrix4(
      1.0, 0.0, 0.0, 0.0,
      0.0, 1.0, 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0);
    return _identSingleton;
  }
  static Matrix4 _identSingleton;

  /// The 1st row and 1st column of the matrix, XX.
  final double m11;

  /// The 1st row and 2nd column of the matrix, XY.
  final double m21;

  /// The 1st row and 3rd column of the matrix, XZ.
  final double m31;

  /// The 1st row and 4th column of the matrix, XW.
  final double m41;

  /// The 2nd row and 1st column of the matrix, YX.
  final double m12;

  /// The 2nd row and 2nd column of the matrix, YY.
  final double m22;

  /// The 2nd row and 3rd column of the matrix, YZ.
  final double m32;

  /// The 2nd row and 4th column of the matrix, YW.
  final double m42;

  /// The 3rd row and 1st column of the matrix, ZX.
  final double m13;

  /// The 3rd row and 2nd column of the matrix, ZY.
  final double m23;

  /// The 3rd row and 3rd column of the matrix, ZZ.
  final double m33;

  /// The 3rd row and 4th column of the matrix, ZW.
  final double m43;

  /// The 4th row and 1st column of the matrix, WX.
  final double m14;

  /// The 4th row and 2nd column of the matrix, WY.
  final double m24;

  /// The 4th row and 3rd column of the matrix, WZ.
  final double m34;

  /// The 4th row and 4th column of the matrix, WW.
  final double m44;

  /// Constructs a new [Matrix4] with the given initial values.
  Matrix4(double this.m11, double this.m21, double this.m31, double this.m41,
          double this.m12, double this.m22, double this.m32, double this.m42,
          double this.m13, double this.m23, double this.m33, double this.m43,
          double this.m14, double this.m24, double this.m34, double this.m44);

  /// Constructs a 4x4 translation matrix.
  factory Matrix4.translate(double tx, double ty, double tz) =>
    new Matrix4(1.0, 0.0, 0.0, tx,
                0.0, 1.0, 0.0, ty,
                0.0, 0.0, 1.0, tz,
                0.0, 0.0, 0.0, 1.0);

  /// Constructs a 4x4 scalar matrix.
  factory Matrix4.scale(double sx, double sy, double sz, [double sw = 1.0]) =>
    new Matrix4(sx,  0.0, 0.0, 0.0,
                0.0, sy,  0.0, 0.0,
                0.0, 0.0, sz,  0.0,
                0.0, 0.0, 0.0, sw);

  /// Constructs a 4x4 rotation matrix.
  ///
  /// The given [angle] is in radians.
  /// The given [vec] is the vector to rotate around.
  factory Matrix4.rotate(double angle, Vector3 vec) {
    final double c = math.cos(angle);
    final double n = 1.0 - c;
    final double s = math.sin(angle);
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

  /// Constructs a 4x4 X axis rotation matrix.
  ///
  /// The given [angle] is in radians.
  factory Matrix4.rotateX(double angle) {
    final double c = math.cos(angle);
    final double s = math.sin(angle);
    return new Matrix4(1.0, 0.0, 0.0, 0.0,
                       0.0,  c,  -s,  0.0,
                       0.0,  s,   c,  0.0,
                       0.0, 0.0, 0.0, 1.0);
  }

  /// Constructs a 4x4 Y axis rotation matrix.
  ///
  /// The given [angle] is in radians.
  factory Matrix4.rotateY(double angle) {
    final double c = math.cos(angle);
    final double s = math.sin(angle);
    return new Matrix4( c,  0.0, -s,  0.0,
                       0.0, 1.0, 0.0, 0.0,
                        s,  0.0,  c,  0.0,
                       0.0, 0.0, 0.0, 1.0);
  }

  /// Constructs a 4x4 Z axis rotation matrix.
  ///
  /// The given [angle] is in radians.
  factory Matrix4.rotateZ(double angle) {
    final double c = math.cos(angle);
    final double s = math.sin(angle);
    return new Matrix4( c,  -s,  0.0, 0.0,
                        s,   c,  0.0, 0.0,
                       0.0, 0.0, 1.0, 0.0,
                       0.0, 0.0, 0.0, 1.0);
  }

  /// Constructs a new perspective projection matrix.
  ///
  /// Constructs a projection for a right hand coordinate system.
  /// The given [angle] is in radians of the field of view.
  /// The given [ratio] is the width over the height of the view.
  /// The [near] and [far] depth of the view.
  factory Matrix4.perspective(double angle, double ratio, double near, double far) {
    final double depth = (far - near);
    final double yy = 1.0 / math.tan(angle * 0.5);
    final double xx = -yy / ratio;
    final double zz = far / depth;
    final double zw = -far * near / depth;
    return new Matrix4(xx,  0.0, 0.0, 0.0,
                       0.0, yy,  0.0, 0.0,
                       0.0, 0.0, zz,  zw,
                       0.0, 0.0, 1.0, 0.0);
  }

  /// Constructs a new orthographic projection matrix.
  ///
  /// [left] and [right] are the horizontal visible range.
  /// [top] and [bottom] are the vertical visible range.
  /// The [near] and [far] depth of the view.
  factory Matrix4.ortho(double left, double right, double top, double bottom, double near, double far) {
    final double xx = 2.0 / (right - left);
    final double yy = 2.0 / (top   - bottom);
    final double zz = 2.0 / (far   - near);
    final double wx = -(left + right)  / (right - left);
    final double wy = -(top  + bottom) / (top   - bottom);
    final double wz =  (far  + near)   / (far   - near);
    return new Matrix4(xx,  0.0, 0.0, wx,
                       0.0, yy,  0.0, wy,
                       0.0, 0.0, zz,  wz,
                       0.0, 0.0, 0.0, 1.0);
  }

  /// Constructs a matrix with a vector towards the given direction.
  ///
  /// [x]. [y], and [z] is the vector direction.
  /// [upHint] is a hint to help correct the top direction of the rotation.
  factory Matrix4.vectorTowards(double x, double y, double z, {Vector3 upHint: null}) {
    upHint ??= Vector3.posY;
    Vector3 forward = new Vector3(x, y, z);
    return new Matrix4.lookTowards(Point3.zero, upHint, forward);
  }

  /// Constructs a camera matrix.
  ///
  /// [pos] is the position of the camera,
  /// [up] is the top direction of the camera,
  /// and [forward] is the direction the camera is looking towards.
  factory Matrix4.lookTowards(Point3 pos, Vector3 up, Vector3 forward) {
    Vector3 zaxis = forward.normal();
    Vector3 xaxis = up.cross(zaxis).normal();
    Vector3 yaxis = zaxis.cross(xaxis);
    Vector3 toPos = new Vector3.fromPoint3(pos);
    final double tx = (-xaxis).dot(toPos);
    final double ty = (-yaxis).dot(toPos);
    final double tz = (-zaxis).dot(toPos);
    return new Matrix4(xaxis.dx, yaxis.dx, zaxis.dx, tx,
                       xaxis.dy, yaxis.dy, zaxis.dy, ty,
                       xaxis.dz, yaxis.dz, zaxis.dz, tz,
                         0.0,      0.0,      0.0,    1.0);
  }

  /// Constructs a camera matrix.
  ///
  /// [pos] is the position of the camera,
  /// [up] is the top direction of the camera,
  /// and [focus] is the point the camera is looking at.
  factory Matrix4.lookAtTarget(Point3 pos, Vector3 up, Point3 focus) =>
    new Matrix4.lookTowards(pos, up, pos.vectorTo(focus));

  /// Constructs a 4x4 matrix from a 2x3 matrix.
  ///
  /// [mat] is padded with zeros except in ZZ and WW which is set to 1.0.
  factory Matrix4.fromMatrix2(Matrix2 mat) =>
    new Matrix4(mat.m11, mat.m21, 0.0, 0.0,
                mat.m12, mat.m22, 0.0, 0.0,
                0.0,     0.0,     1.0, 0.0,
                0.0,     0.0,     0.0, 1.0);

  /// Constructs a 4x4 matrix from a 3x3 matrix.
  ///
  /// [mat] is padded with zeros except in WW which is set to 1.0.
  factory Matrix4.fromMatrix3(Matrix3 mat) =>
    new Matrix4(mat.m11, mat.m21, mat.m31, 0.0,
                mat.m12, mat.m22, mat.m32, 0.0,
                mat.m13, mat.m23, mat.m33, 0.0,
                0.0,     0.0,     0.0,     1.0);

  /// Constructs a new [Matrix4] instance given a list of 16 doubles.
  /// By default the list is in row major order.
  factory Matrix4.fromList(List<double> values, [bool columnMajor = false]) {
    assert(values.length == 16);
    if (columnMajor) {
      return new Matrix4(values[ 0], values[ 4], values[ 8], values[12],
                         values[ 1], values[ 5], values[ 9], values[13],
                         values[ 2], values[ 6], values[10], values[14],
                         values[ 3], values[ 7], values[11], values[15]);
    } else {
      return new Matrix4(values[ 0], values[ 1], values[ 2], values[ 3],
                         values[ 4], values[ 5], values[ 6], values[ 7],
                         values[ 8], values[ 9], values[10], values[11],
                         values[12], values[13], values[14], values[15]);
    }
  }

  /// Gets the list of 16 doubles for the matrix.
  /// By default the list is in row major order.
  List<double> toList([bool columnMajor = false]) {
    if (columnMajor) {
      return [this.m11, this.m12, this.m13, this.m14,
              this.m21, this.m22, this.m23, this.m24,
              this.m31, this.m32, this.m33, this.m34,
              this.m41, this.m42, this.m43, this.m44];
    } else {
      return [this.m11, this.m21, this.m31, this.m41,
              this.m12, this.m22, this.m32, this.m42,
              this.m13, this.m23, this.m33, this.m43,
              this.m14, this.m24, this.m34, this.m44];
    }
  }

  /// Gets the value at the zero based index in row major order.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case  0: return this.m11;
      case  1: return this.m12;
      case  2: return this.m13;
      case  3: return this.m14;
      case  4: return this.m21;
      case  5: return this.m22;
      case  6: return this.m23;
      case  7: return this.m24;
      case  8: return this.m31;
      case  9: return this.m32;
      case 10: return this.m33;
      case 11: return this.m34;
      case 12: return this.m41;
      case 13: return this.m42;
      case 14: return this.m43;
      case 15: return this.m44;
    }
    return 0.0;
  }

  /// Gets the determinant of this matrix.
  double det() {
    double a = this.m14 * this.m23 - this.m13 * this.m24;
    double b = this.m12 * this.m24 - this.m14 * this.m22;
    double c = this.m13 * this.m22 - this.m12 * this.m23;
    double d = this.m14 * this.m21 - this.m11 * this.m24;
    double e = this.m11 * this.m23 - this.m13 * this.m21;
    double f = this.m12 * this.m21 - this.m11 * this.m22;
    return (a * this.m32 + b * this.m33 + c * this.m34) * this.m41 -
           (a * this.m31 - d * this.m33 - e * this.m34) * this.m42 -
           (b * this.m31 + d * this.m32 - f * this.m34) * this.m43 -
           (c * this.m31 + e * this.m32 + f * this.m33) * this.m44;
  }

  /// Gets the transposition of this matrix.
  Matrix4 transpose() =>
    new Matrix4(this.m11, this.m12, this.m13, this.m14,
                this.m21, this.m22, this.m23, this.m24,
                this.m31, this.m32, this.m33, this.m34,
                this.m41, this.m42, this.m43, this.m44);

  /// Gets the inverse of this matrix.
  Matrix4 inverse() {
    double a = this.m11 * this.m22 - this.m21 * this.m12,
           b = this.m11 * this.m32 - this.m31 * this.m12,
           c = this.m11 * this.m42 - this.m41 * this.m12,
           e = this.m21 * this.m32 - this.m31 * this.m22,
           g = this.m21 * this.m42 - this.m41 * this.m22,
           h = this.m31 * this.m42 - this.m41 * this.m32,
           i = this.m13 * this.m24 - this.m23 * this.m14,
           j = this.m13 * this.m34 - this.m33 * this.m14,
           l = this.m13 * this.m44 - this.m43 * this.m14,
           m = this.m23 * this.m34 - this.m33 * this.m24,
           n = this.m23 * this.m44 - this.m43 * this.m24,
           o = this.m33 * this.m44 - this.m43 * this.m34;
    final double det = (a * o - b * n + c * m + e * l - g * j + h * i);
    if (Comparer.equals(det, 0.0)) return Matrix4.identity;
    final double q = 1.0 / det;
    return new Matrix4(
      ( this.m22 * o - this.m32 * n + this.m42 * m) * q, (-this.m21 * o + this.m31 * n - this.m41 * m) * q,
      ( this.m24 * h - this.m34 * g + this.m44 * e) * q, (-this.m23 * h + this.m33 * g - this.m43 * e) * q,
      (-this.m12 * o + this.m32 * l - this.m42 * j) * q, ( this.m11 * o - this.m31 * l + this.m41 * j) * q,
      (-this.m14 * h + this.m34 * c - this.m44 * b) * q, ( this.m13 * h - this.m33 * c + this.m43 * b) * q,
      ( this.m12 * n - this.m22 * l + this.m42 * i) * q, (-this.m11 * n + this.m21 * l - this.m41 * i) * q,
      ( this.m14 * g - this.m24 * c + this.m44 * a) * q, (-this.m13 * g + this.m23 * c - this.m43 * a) * q,
      (-this.m12 * m + this.m22 * j - this.m32 * i) * q, ( this.m11 * m - this.m21 * j + this.m31 * i) * q,
      (-this.m14 * e + this.m24 * b - this.m34 * a) * q, ( this.m13 * e - this.m23 * b + this.m33 * a) * q);
  }

  /// Multiplies this matrix by the [other] matrix.
  Matrix4 operator *(Matrix4 other) => new Matrix4(
    this.m11 * other.m11 + this.m21 * other.m12 + this.m31 * other.m13 + this.m41 * other.m14,
    this.m11 * other.m21 + this.m21 * other.m22 + this.m31 * other.m23 + this.m41 * other.m24,
    this.m11 * other.m31 + this.m21 * other.m32 + this.m31 * other.m33 + this.m41 * other.m34,
    this.m11 * other.m41 + this.m21 * other.m42 + this.m31 * other.m43 + this.m41 * other.m44,
    this.m12 * other.m11 + this.m22 * other.m12 + this.m32 * other.m13 + this.m42 * other.m14,
    this.m12 * other.m21 + this.m22 * other.m22 + this.m32 * other.m23 + this.m42 * other.m24,
    this.m12 * other.m31 + this.m22 * other.m32 + this.m32 * other.m33 + this.m42 * other.m34,
    this.m12 * other.m41 + this.m22 * other.m42 + this.m32 * other.m43 + this.m42 * other.m44,
    this.m13 * other.m11 + this.m23 * other.m12 + this.m33 * other.m13 + this.m43 * other.m14,
    this.m13 * other.m21 + this.m23 * other.m22 + this.m33 * other.m23 + this.m43 * other.m24,
    this.m13 * other.m31 + this.m23 * other.m32 + this.m33 * other.m33 + this.m43 * other.m34,
    this.m13 * other.m41 + this.m23 * other.m42 + this.m33 * other.m43 + this.m43 * other.m44,
    this.m14 * other.m11 + this.m24 * other.m12 + this.m34 * other.m13 + this.m44 * other.m14,
    this.m14 * other.m21 + this.m24 * other.m22 + this.m34 * other.m23 + this.m44 * other.m24,
    this.m14 * other.m31 + this.m24 * other.m32 + this.m34 * other.m33 + this.m44 * other.m34,
    this.m14 * other.m41 + this.m24 * other.m42 + this.m34 * other.m43 + this.m44 * other.m44);

  /// Transposes the given [vec] with this matrix.
  ///
  /// The Z component of the point is treated a 0.0,
  /// meaning the 4th (W) row and column of the matrix are not used.
  Vector2 transVec2(Vector2 vec) => new Vector2(
    this.m11 * vec.dx + this.m21 * vec.dy,
    this.m12 * vec.dx + this.m22 * vec.dy);

  /// Transposes the given [pnt] with this matrix.
  ///
  /// The W component of the point is treated a 1.0,
  /// meaning the 4th (W) column of the matrix can be used for translation.
  Point2 transPnt2(Point2 pnt) => new Point2(
    this.m11 * pnt.x + this.m21 * pnt.y + this.m41,
    this.m12 * pnt.x + this.m22 * pnt.y + this.m42);

  /// Transposes the given [vec] with this matrix.
  ///
  /// The Z component of the point is treated a 0.0,
  /// meaning the 4th (W) row and column of the matrix are not used.
  Vector3 transVec3(Vector3 vec) => new Vector3(
    this.m11 * vec.dx + this.m21 * vec.dy + this.m31 * vec.dz,
    this.m12 * vec.dx + this.m22 * vec.dy + this.m32 * vec.dz,
    this.m13 * vec.dx + this.m23 * vec.dy + this.m33 * vec.dz);

  /// Transposes the given [pnt] with this matrix.
  ///
  /// The W component of the point is treated a 1.0,
  /// meaning the 4th (W) column of the matrix can be used for translation.
  Point3 transPnt3(Point3 pnt) => new Point3(
    this.m11 * pnt.x + this.m21 * pnt.y + this.m31 * pnt.z + this.m41,
    this.m12 * pnt.x + this.m22 * pnt.y + this.m32 * pnt.z + this.m42,
    this.m13 * pnt.x + this.m23 * pnt.y + this.m33 * pnt.z + this.m43);

  /// Transposes the given [vec] with this matrix.
  Vector4 transVec4(Vector4 vec) => new Vector4(
    this.m11 * vec.dx + this.m21 * vec.dy + this.m31 * vec.dz + this.m41 * vec.dw,
    this.m12 * vec.dx + this.m22 * vec.dy + this.m32 * vec.dz + this.m42 * vec.dw,
    this.m13 * vec.dx + this.m23 * vec.dy + this.m33 * vec.dz + this.m43 * vec.dw,
    this.m14 * vec.dx + this.m24 * vec.dy + this.m34 * vec.dz + this.m44 * vec.dw);

  /// Transposes the given [pnt] with this matrix.
  Point4 transPnt4(Point4 pnt) => new Point4(
    this.m11 * pnt.x + this.m21 * pnt.y + this.m31 * pnt.z + this.m41 * pnt.w,
    this.m12 * pnt.x + this.m22 * pnt.y + this.m32 * pnt.z + this.m42 * pnt.w,
    this.m13 * pnt.x + this.m23 * pnt.y + this.m33 * pnt.z + this.m43 * pnt.w,
    this.m14 * pnt.x + this.m24 * pnt.y + this.m34 * pnt.z + this.m44 * pnt.w);

  /// Transposes the given [clr] with this matrix.
  ///
  /// The A component of the color is treated a 1.0,
  /// meaning the 4th (A) column of the matrix can be used for translation.
  Color3 transClr3(Color3 clr) => new Color3(
    this.m11 * clr.red + this.m21 * clr.green + this.m31 * clr.blue + this.m41,
    this.m12 * clr.red + this.m22 * clr.green + this.m32 * clr.blue + this.m42,
    this.m13 * clr.red + this.m23 * clr.green + this.m33 * clr.blue + this.m43);


  /// Transposes the given [clr] with this matrix.
  Color4 transClr4(Color4 clr) => new Color4(
    this.m11 * clr.red + this.m21 * clr.green + this.m31 * clr.blue + this.m41 * clr.alpha,
    this.m12 * clr.red + this.m22 * clr.green + this.m32 * clr.blue + this.m42 * clr.alpha,
    this.m13 * clr.red + this.m23 * clr.green + this.m33 * clr.blue + this.m43 * clr.alpha,
    this.m14 * clr.red + this.m24 * clr.green + this.m34 * clr.blue + this.m44 * clr.alpha);

  /// Determines if the given [other] variable is a [Matrix4] equal to this matrix.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Matrix4) return false;
    Matrix4 mat = other as Matrix4;
    if (!Comparer.equals(mat.m11, this.m11)) return false;
    if (!Comparer.equals(mat.m21, this.m21)) return false;
    if (!Comparer.equals(mat.m31, this.m31)) return false;
    if (!Comparer.equals(mat.m41, this.m41)) return false;
    if (!Comparer.equals(mat.m12, this.m12)) return false;
    if (!Comparer.equals(mat.m22, this.m22)) return false;
    if (!Comparer.equals(mat.m32, this.m32)) return false;
    if (!Comparer.equals(mat.m42, this.m42)) return false;
    if (!Comparer.equals(mat.m13, this.m13)) return false;
    if (!Comparer.equals(mat.m23, this.m23)) return false;
    if (!Comparer.equals(mat.m33, this.m33)) return false;
    if (!Comparer.equals(mat.m43, this.m43)) return false;
    if (!Comparer.equals(mat.m14, this.m14)) return false;
    if (!Comparer.equals(mat.m24, this.m24)) return false;
    if (!Comparer.equals(mat.m34, this.m34)) return false;
    if (!Comparer.equals(mat.m44, this.m44)) return false;
    return true;
  }

  /// Gets the string for this matrix.
  String toString() => this.format();

  /// Gets the formatted string for this matrix.
  String format([String indent = "", int fraction = 3, int whole = 0]) {
    List<String> col1 = formatColumn([this.m11, this.m12, this.m13, this.m14], fraction, whole);
    List<String> col2 = formatColumn([this.m21, this.m22, this.m23, this.m24], fraction, whole);
    List<String> col3 = formatColumn([this.m31, this.m32, this.m33, this.m34], fraction, whole);
    List<String> col4 = formatColumn([this.m41, this.m42, this.m43, this.m44], fraction, whole);
    return '[${col1[0]}, ${col2[0]}, ${col3[0]}, ${col4[0]},\n' +
      '$indent ${col1[1]}, ${col2[1]}, ${col3[1]}, ${col4[1]},\n' +
      '$indent ${col1[2]}, ${col2[2]}, ${col3[2]}, ${col4[2]},\n' +
      '$indent ${col1[3]}, ${col2[3]}, ${col3[3]}, ${col4[3]}]';
  }
}
