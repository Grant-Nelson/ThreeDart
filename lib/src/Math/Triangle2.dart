part of ThreeDart.Math;

/// A math structure for storing a 2D triangle.
class Triangle2 {
  
  /// The x component of the first point.
  final double x1;

  /// The y component of the first point.
  final double y1;
  
  /// The x component of the second point.
  final double x2;

  /// The y component of the second point.
  final double y2;
  
  /// The x component of the third point.
  final double x3;

  /// The y component of the third point.
  final double y3;
  
  /// Constructs a new [Triangle2] instance.
  Triangle2(double this.x1, double this.y1,
            double this.x2, double this.y2,
            double this.x3, double this.y3);

  /// Constructs a new [Triangle2] with the given points.
  factory Triangle2.fromPoints(Point2 pnt1, Point2 pnt2, Point2 pnt3) =>
    new Triangle2(pnt1.x, pnt1.y, pnt2.x, pnt2.y, pnt3.x, pnt3.y);

  /// Constructs a new [Triangle2] with the given [Triangle3] ignoring the z value.
  factory Triangle2.fromTriangle3(Triangle3 tri) =>
    new Triangle2(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3);
    
  /// Constructs a new [Triangle2] instance given a list of 6 doubles.
  ///
  /// [values] is a list of doubles are in the order x then y
  /// for the first, second, and third point.
  factory Triangle2.fromList(List<double> values) {
    assert(values.length == 6);
    return new Triangle2(values[0], values[1], values[2],
                         values[3], values[4], values[5]);
  }

  /// Gets an list of 6 doubles in the order x then y
  /// for the first, second, and third point.
  List<double> toList() =>
    [this.x1, this.y1, this.x2, this.y2, this.x3, this.y3];

  /// Gets the value at the zero based index in the order x then y
  /// for the first, second, and third point. If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.x1;
      case 1: return this.y1;
      case 3: return this.x2;
      case 4: return this.y2;
      case 6: return this.x3;
      case 7: return this.y3;
    }
    return 0.0;
  }

  /// Gets the first point of the triangle.
  Point2 get point1 => new Point2(this.x1, this.y1);

  /// Gets the second point of the triangle.
  Point2 get point2 => new Point2(this.x2, this.y2);

  /// Gets the third point of the triangle.
  Point2 get point3 => new Point2(this.x3, this.y3);

  /// Gets the average point of the triangles points.
  Point2 get centroid => new Point2((this.x1 + this.x2 + this.x3) / 3.0,
                                    (this.y1 + this.y2 + this.y3) / 3.0);


  // TODO: Add incenter and circumcenter
  // TODO: Add some barycentric coordinates methods


  /// Determines if the given [other] variable is a [Triangle2] equal to this triangle.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Triangle2) return false;
    Triangle2 tri = other as Triangle2;
    if (!Comparer.equals(tri.x1, this.x1)) return false;
    if (!Comparer.equals(tri.y1, this.y1)) return false;
    if (!Comparer.equals(tri.x2, this.x2)) return false;
    if (!Comparer.equals(tri.y2, this.y2)) return false;
    if (!Comparer.equals(tri.x3, this.x3)) return false;
    if (!Comparer.equals(tri.y3, this.y3)) return false;
    return true;
  }

  /// Gets the string for this triangle.
  String toString() => this.format();

  /// Gets the formatted string for this triangle.
  String format([int fraction = 3, int whole = 0]) =>
    '[['  +formatDouble(this.x1, fraction, whole)+
    ', '  +formatDouble(this.y1, fraction, whole)+
    '], ['+formatDouble(this.x2, fraction, whole)+
    ', '  +formatDouble(this.y2, fraction, whole)+
    '], ['+formatDouble(this.x3, fraction, whole)+
    ', '  +formatDouble(this.y3, fraction, whole)+']]';
}
