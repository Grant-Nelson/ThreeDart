part of ThreeDart.Math;

/// A math structure for storing and manipulating a Matrix 2x2.
class Matrix2 {

  double _m11, _m21;
  double _m12, _m22;

  /// Constructs a new [Matrix2] with the given initial values.
  Matrix2(double m11, double m21,
          double m12, double m22) {
    this.set(m11, m21,
             m12, m22);
  }

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
    new Matrix2(mat._m11, mat._m12,
                mat._m21, mat._m22);

  /// Constructs a 2x2 matrix from a trimmed 4x4 matrix.
  ///
  /// The 3rd and 4th row and column are ignored from [mat].
  factory Matrix2.fromMatrix4(Matrix4 mat) =>
    new Matrix2(mat._m11, mat._m12,
                mat._m21, mat._m22);

  /// Constructs a new [Matrix2] instance given a list of 4 doubles.
  factory Matrix2.fromList(List<double> values) {
    assert(values.length == 4);
    return new Matrix2(values[0], values[1],
                       values[2], values[3]);
  }

  /// Sets the [Matrix2] with the given values.
  void set(double m11, double m21,
           double m12, double m22) {
    this._m11 = m11; this._m21 = m21;
    this._m12 = m12; this._m22 = m22;
  }

  /// Gets the list of 4 doubles for the matrix.
  List<double> toList() => [
    this._m11, this._m21,
    this._m12, this._m22,
  ];

  /// The 1st row and 1st column of the matrix, XX.
  double get m11 => this._m11;
  set m11(double m11) => this._m11 = m11;

  /// The 1st row and 2nd column of the matrix, XY.
  double get m21 => this._m21;
  set m21(double m21) => this._m21 = m21;

  /// The 2nd row and 1st column of the matrix, YX.
  double get m12 => this._m12;
  set m12(double m12) => this._m12 = m12;

  /// The 2nd row and 2nd column of the matrix, YY.
  double get m22 => this._m22;
  set m22(double m22) => this._m22 = m22;

  /// Gets the determinant of this matrix.
  double det() =>
    this._m11 * this._m22 - this._m21 * this._m12;

  /// Gets a copy of this matrix.
  Matrix2 copy() =>
      new Matrix2(this._m11, this._m21,
                  this._m12, this._m22);

  /// Gets the transposition of this matrix.
  Matrix2 transpose() =>
    new Matrix2(this._m11, this._m12,
                this._m21, this._m22);

  /// Gets the inverse of this matrix.
  Matrix2 inverse() {
    double det = this.det();
    if (Comparer.equals(det, 0.0)) return new Matrix2.identity();
    double q = 1.0 / det;
    return new Matrix2( this._m22 * q, -this._m12 * q,
                       -this._m21 * q,  this._m11 * q);
  }

  /// Multiplies this matrix by the [other] matrix.
  Matrix2 operator *(Matrix2 other) => new Matrix2(
      this._m11 * other._m11 + this._m21 * other._m12,
      this._m11 * other._m21 + this._m21 * other._m22,
      this._m12 * other._m11 + this._m22 * other._m12,
      this._m12 * other._m21 + this._m22 * other._m22);

  /// Transposes the given [vec] with this matrix.
  Vector2 transVec2(Vector2 vec) => new Vector2(
      this._m11 * vec.dx + this._m21 * vec.dy,
      this._m12 * vec.dx + this._m22 * vec.dy);

  /// Transposes the given [pnt] with this matrix.
  Point2 transPnt2(Point2 pnt) => new Point2(
      this._m11 * pnt.x + this._m21 * pnt.y,
      this._m12 * pnt.x + this._m22 * pnt.y);

  /// Determines if the given [other] variable is a [Matrix2] equal to this metrix.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Matrix2) return false;
    Matrix2 mat = other as Matrix2;
    if (!Comparer.equals(mat._m11, this._m11)) return false;
    if (!Comparer.equals(mat._m21, this._m21)) return false;
    if (!Comparer.equals(mat._m12, this._m12)) return false;
    if (!Comparer.equals(mat._m22, this._m22)) return false;
    return true;
  }

  /// Gets the string for this matrix.
  String toString([String indent = ""]) =>
    '['+formatDouble(this._m11)+', '+formatDouble(this._m21)+',\n' + indent +
    ' '+formatDouble(this._m12)+', '+formatDouble(this._m22)+']';
}
