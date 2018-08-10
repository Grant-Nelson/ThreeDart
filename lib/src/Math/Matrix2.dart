part of ThreeDart.Math;

/// A math structure for storing and manipulating a Matrix 2x2.
class Matrix2 {

  /// The 1st row and 1st column of the matrix, XX.
  final double m11;

  /// The 1st row and 2nd column of the matrix, XY.
  final double m21;

  /// The 2nd row and 1st column of the matrix, YX.
  final double m12;

  /// The 2nd row and 2nd column of the matrix, YY.
  final double m22;

  /// Constructs a new [Matrix2] with the given initial values.
  Matrix2(double this.m11, double this.m21,
          double this.m12, double this.m22);

  /// Constructs a 2x2 identity matrix.
  factory Matrix2.identity() =>
    new Matrix2(1.0, 0.0,
                0.0, 1.0);

  /// Constructs a 2x2 scalar matrix.
  ///
  /// [sx] scales the x axis and [sy] scales the y axis.
  factory Matrix2.scale(double sx, double sy) =>
    new Matrix2(sx,  0.0,
                0.0, sy);

  /// Constructs a 2x2 rotation matrix.
  ///
  /// The given [angle] is in radians.
  /// This matrix rotates counter-clockwise around a virtual Z axis.
  factory Matrix2.rotate(double angle) {
    double c = math.cos(angle);
    double s = math.sin(angle);
    return new Matrix2(c, -s,
                       s,  c);
  }

  /// Constructs a 2x2 matrix from a trimmed 3x3 matrix.
  ///
  /// The 3rd row and column are ignored from [mat].
  factory Matrix2.fromMatrix3(Matrix3 mat) =>
    new Matrix2(mat.m11, mat.m21,
                mat.m12, mat.m22);

  /// Constructs a 2x2 matrix from a trimmed 4x4 matrix.
  ///
  /// The 3rd and 4th row and column are ignored from [mat].
  factory Matrix2.fromMatrix4(Matrix4 mat) =>
    new Matrix2(mat.m11, mat.m21,
                mat.m12, mat.m22);

  /// Constructs a new [Matrix2] instance given a list of 4 doubles.
  /// By default the list is in row major order.
  factory Matrix2.fromList(List<double> values, [bool columnMajor = false]) {
    assert(values.length == 4);
    if (columnMajor) {
      return new Matrix2(values[0], values[2],
                         values[1], values[3]);
    } else {
      return new Matrix2(values[0], values[1],
                         values[2], values[3]);
    }
  }

  /// Gets the list of 4 doubles for the matrix.
  /// By default the list is in row major order.
  List<double> toList([bool columnMajor = false]) {
    if (columnMajor) {
      return [this.m11, this.m12,
              this.m21, this.m22];
    } else {
      return [this.m11, this.m21,
              this.m12, this.m22];
    }
  }

  /// Gets the determinant of this matrix.
  double det() =>
    this.m11 * this.m22 - this.m21 * this.m12;

  /// Gets the transposition of this matrix.
  Matrix2 transpose() =>
    new Matrix2(this.m11, this.m12,
                this.m21, this.m22);

  /// Gets the inverse of this matrix.
  Matrix2 inverse() {
    double det = this.det();
    if (Comparer.equals(det, 0.0)) return new Matrix2.identity();
    double q = 1.0 / det;
    return new Matrix2( this.m22 * q, -this.m21 * q,
                       -this.m12 * q,  this.m11 * q);
  }

  /// Multiplies this matrix by the [other] matrix.
  Matrix2 operator *(Matrix2 other) => new Matrix2(
    this.m11 * other.m11 + this.m21 * other.m12,
    this.m11 * other.m21 + this.m21 * other.m22,
    this.m12 * other.m11 + this.m22 * other.m12,
    this.m12 * other.m21 + this.m22 * other.m22);

  /// Transposes the given [vec] with this matrix.
  Vector2 transVec2(Vector2 vec) => new Vector2(
    this.m11 * vec.dx + this.m21 * vec.dy,
    this.m12 * vec.dx + this.m22 * vec.dy);

  /// Transposes the given [pnt] with this matrix.
  Point2 transPnt2(Point2 pnt) => new Point2(
    this.m11 * pnt.x + this.m21 * pnt.y,
    this.m12 * pnt.x + this.m22 * pnt.y);

  /// Determines if the given [other] variable is a [Matrix2] equal to this metrix.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Matrix2) return false;
    Matrix2 mat = other as Matrix2;
    if (!Comparer.equals(mat.m11, this.m11)) return false;
    if (!Comparer.equals(mat.m21, this.m21)) return false;
    if (!Comparer.equals(mat.m12, this.m12)) return false;
    if (!Comparer.equals(mat.m22, this.m22)) return false;
    return true;
  }

  /// Gets the string for this matrix.
  String toString() => this.format();

  /// Gets the formatted string for this matrix.
  String format([String indent = "", int fraction = 3, int whole = 0]) {
    List<String> col1 = formatColumn([this.m11, this.m12], fraction, whole);
    List<String> col2 = formatColumn([this.m21, this.m22], fraction, whole);
    return '[${col1[0]}, ${col2[0]},\n$indent ${col1[1]}, ${col2[1]}]';
  }
}
