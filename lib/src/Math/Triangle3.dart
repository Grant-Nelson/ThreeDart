part of ThreeDart.Math;

/// A math structure for storing a 3D triangle.
class Triangle3 {
  
  /// The x component of the first point.
  final double x1;

  /// The y component of the first point.
  final double y1;

  /// The z component of the first point.
  final double z1;
  
  /// The x component of the second point.
  final double x2;

  /// The y component of the second point.
  final double y2;

  /// The z component of the second point.
  final double z2;
  
  /// The x component of the third point.
  final double x3;

  /// The y component of the third point.
  final double y3;

  /// The z component of the third point.
  final double z3;
  
  /// Constructs a new [Triangle3] instance.
  Triangle3(double this.x1, double this.y1, double this.z1,
            double this.x2, double this.y2, double this.z2,
            double this.x3, double this.y3, double this.z3);

  /// Constructs a new [Triangle3] with the given points.
  factory Triangle3.fromPoints(Point3 pnt1, Point3 pnt2, Point3 pnt3) =>
    new Triangle3(pnt1.x, pnt1.y, pnt1.z, pnt2.x, pnt2.y, pnt2.z, pnt3.x, pnt3.y, pnt3.z);

  /// Constructs a new [Triangle3] with the given [Triangle2] with the given z value.
  factory Triangle3.fromTriangle2(Triangle2 tri, [double z = 0.0]) =>
    new Triangle3(tri.x1, tri.y1, z, tri.x2, tri.y2, z, tri.x3, tri.y3, z);
    
  /// Constructs a new [Triangle3] instance given a list of 9 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, then z
  /// for the first, second, and third point.
  factory Triangle3.fromList(List<double> values) {
    assert(values.length == 9);
    return new Triangle3(values[0], values[1], values[2],
                         values[3], values[4], values[5],
                         values[6], values[7], values[8]);
  }

  /// Gets an list of 9 doubles in the order x, y, then z
  /// for the first, second, and third point.
  List<double> toList() =>
    [this.x1, this.y1, this.z1, this.x2, this.y2, this.z2, this.x3, this.y3, this.z3];

  /// Gets the value at the zero based index in the order x, y, then z
  /// for the first, second, and third point. If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.x1;
      case 1: return this.y1;
      case 2: return this.z1;
      case 3: return this.x2;
      case 4: return this.y2;
      case 5: return this.z2;
      case 6: return this.x3;
      case 7: return this.y3;
      case 8: return this.z3;
    }
    return 0.0;
  }

  /// Gets the first point of the triangle.
  Point3 get point1 => new Point3(this.x1, this.y1, this.z1);

  /// Gets the second point of the triangle.
  Point3 get point2 => new Point3(this.x2, this.y2, this.z2);

  /// Gets the third point of the triangle.
  Point3 get point3 => new Point3(this.x3, this.y3, this.z3);

  /// Gets the average point of the triangles points.
  Point3 get centroid => new Point3((this.x1 + this.x2 + this.x3) / 3.0,
                                    (this.y1 + this.y2 + this.y3) / 3.0,
                                    (this.z1 + this.z2 + this.z3) / 3.0);
      
  /// Determines there is a collision between the given [plane] and this triangle.
  bool planeCollision(Plane plane) =>
    plane.triangleCollision(this);


  // TODO: Add incenter and circumcenter
  // TODO: Add some barycentric coordinates methods


  /// Determines if the given [other] variable is a [Triangle3] equal to this triangle.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Triangle3) return false;
    Triangle3 tri = other as Triangle3;
    if (!Comparer.equals(tri.x1, this.x1)) return false;
    if (!Comparer.equals(tri.y1, this.y1)) return false;
    if (!Comparer.equals(tri.z1, this.z1)) return false;
    if (!Comparer.equals(tri.x2, this.x2)) return false;
    if (!Comparer.equals(tri.y2, this.y2)) return false;
    if (!Comparer.equals(tri.z2, this.z2)) return false;
    if (!Comparer.equals(tri.x3, this.x3)) return false;
    if (!Comparer.equals(tri.y3, this.y3)) return false;
    if (!Comparer.equals(tri.z3, this.z3)) return false;
    return true;
  }

  /// Gets the string for this triangle.
  String toString() => this.format();

  /// Gets the formatted string for this triangle.
  String format([int fraction = 3, int whole = 0]) =>
    '[['  +formatDouble(this.x1, fraction, whole)+
    ', '  +formatDouble(this.y1, fraction, whole)+
    ', '  +formatDouble(this.z1, fraction, whole)+
    '], ['+formatDouble(this.x2, fraction, whole)+
    ', '  +formatDouble(this.y2, fraction, whole)+
    ', '  +formatDouble(this.z2, fraction, whole)+
    '], ['+formatDouble(this.x3, fraction, whole)+
    ', '  +formatDouble(this.y3, fraction, whole)+
    ', '  +formatDouble(this.z3, fraction, whole)+']]';
}
