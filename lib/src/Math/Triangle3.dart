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

  /// Gets the normal of the triangle plane.
  Vector3 get normal {
    Vector3 d1 = new Vector3(this.x2-this.x1, this.y2-this.y1, this.z2-this.z1);
    Vector3 d2 = new Vector3(this.x3-this.x2, this.y3-this.y2, this.z3-this.z2);
    return d1.cross(d2).normal();
  }

  /// Get the area of the triangle.
  double get area {
    Vector3 d1 = new Vector3(this.x2-this.x1, this.y2-this.y1, this.z2-this.z1);
    Vector3 d2 = new Vector3(this.x3-this.x2, this.y3-this.y2, this.z3-this.z2);
    return d1.cross(d2).length() * 0.5;
  }

  /// Gets the average point of the triangles points.
  Point3 get centroid => new Point3((this.x1 + this.x2 + this.x3) / 3.0,
                                    (this.y1 + this.y2 + this.y3) / 3.0,
                                    (this.z1 + this.z2 + this.z3) / 3.0);

  /// Convertex from the given barycentric coorinates vector to the cartesian coordinate point.
  Point3 fromBarycentricCoordinates(double x, double y, double z) =>
    new Point3(x * this.x1 + y * this.x2 + z * this.x3,
               x * this.y1 + y * this.y2 + z * this.y3,
               x * this.z1 + y * this.z2 + z * this.z3);

  /// Convertex from the given barycentric coorinates vector to the cartesian coordinate point.
  Point3 fromBarycentric(Vector3 vec) =>
    fromBarycentricCoordinates(vec.dx, vec.dy, vec.dz);

  /// Convertex from the given cartesian coordinate point to the barycentric coorinates vector.
  /// If the triangle is degenerate (area is zero) then null will be returned.
  Vector3? toBarycentric(Point3 pnt) {
    Vector3 n = this.normal;
    double nxa = n.dx.abs();
    double nya = n.dy.abs();
    double nza = n.dz.abs();
    double u1, u2, u3, u4;
    double v1, v2, v3, v4;
    if ((nxa >= nya) && (nxa >= nza)) {
      // Discard x, project onto yz plane
      u1 = this.y1 - this.y3;
      u2 = this.y2 - this.y3;
      u3 = pnt.y - this.y1;
      u4 = pnt.y - this.y3;
      
      v1 = this.z1 - this.z3;
      v2 = this.z2 - this.z3;
      v3 = pnt.z - this.z1;
      v4 = pnt.z - this.z3;

    } else if (nya >= nza) {
      // Discard y, project onto xz plane
      u1 = this.z1 - this.z3;
      u2 = this.z2 - this.z3;
      u3 = pnt.z - this.z1;
      u4 = pnt.z - this.z3;
      
      v1 = this.x1 - this.x3;
      v2 = this.x2 - this.x3;
      v3 = pnt.x - this.x1;
      v4 = pnt.x - this.x3;

    } else {
      // Discard z, project onto xy plane
      u1 = this.x1 - this.x3;
      u2 = this.x2 - this.x3;
      u3 = pnt.x - this.x1;
      u4 = pnt.x - this.x3;
      
      v1 = this.y1 - this.y3;
      v2 = this.y2 - this.y3;
      v3 = pnt.y - this.y1;
      v4 = pnt.y - this.y3;
    }

    double div = v1*u3 - v2*u1;
    if (div == 0.0) {
      // Degenerate triangle
      return null;
    }

    double x = (v4*u2 - v2*u4) / div;
    double y = (v1*u3 - v3*u1) / div;
    return new Vector3(x, y, 1.0 - x - y);
  }

  /// Gets the sphere where the intersection of the sphere and the plane for the triangle is a circle
  /// which touches each side only once. The circle is inscribed in the triangle.
  /// If the triangle is degenerate (area is zero) then null will be returned.
  Sphere? get incenter {
    Point3 v1 = this.point1;
    Point3 v2 = this.point2;
    Point3 v3 = this.point3;
    double len1 = v2.distance(v3);
    double len2 = v1.distance(v3);
    double len3 = v1.distance(v2);
    double p = len1 + len2 + len3;
    if (p == 0.0) {
      // Degenerate triangle
      return null;
    }
    Point3 center = this.fromBarycentricCoordinates(len1 / p, len2 / p, len3 / p);
    return new Sphere.fromPoint(center, this.area / p);
  }

  /// Gets the sphere where the intersection of the sphere and the plane for the triangle is a circle
  /// which touches each point of the triangle. The circle is circumscribed around the triangle.
  Sphere? get circumcenter {
    Vector3 e1 = new Vector3(this.x3-this.x2, this.y3-this.y2, this.z3-this.z2);
    Vector3 e2 = new Vector3(this.x1-this.x3, this.y1-this.y3, this.z1-this.z3);
    Vector3 e3 = new Vector3(this.x2-this.x1, this.y2-this.y1, this.z2-this.z1);
    double d1 = -e2.dot(e3);
    double d2 = -e3.dot(e1);
    double d3 = -e1.dot(e2);
    double c1 = d2*d3;
    double c2 = d3*d1;
    double c3 = d1*d2;
    double c = c1 + c2 + c3;
    if (c == 0) return null;
    double div = 2.0 * c;
    Point3 center = this.fromBarycentricCoordinates((c2 + c3)/div, (c2 + c3)/div, (c2 + c3)/div);
    double diam = math.sqrt((d1 + d2)*(d2 + d3)*(d3 + d1) / c);
    return new Sphere.fromPoint(center, diam/2.0);
  }

  /// Determines if the given [other] variable is a [Triangle3] equal to this triangle.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Triangle3) return false;
    if (!Comparer.equals(other.x1, this.x1)) return false;
    if (!Comparer.equals(other.y1, this.y1)) return false;
    if (!Comparer.equals(other.z1, this.z1)) return false;
    if (!Comparer.equals(other.x2, this.x2)) return false;
    if (!Comparer.equals(other.y2, this.y2)) return false;
    if (!Comparer.equals(other.z2, this.z2)) return false;
    if (!Comparer.equals(other.x3, this.x3)) return false;
    if (!Comparer.equals(other.y3, this.y3)) return false;
    if (!Comparer.equals(other.z3, this.z3)) return false;
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
