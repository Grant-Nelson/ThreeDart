part of ThreeDart.Math;

/// A math structure for defining a plane.
class Plane {

  /// The x component of the vector for the plane's normal.
  final double dx;

  /// The y component of the vector for the plane's normal.
  final double dy;

  /// The z component of the vector for the plane's normal.
  final double dz;
  
  /// The normal's scalar used as an offset from the origin
  /// along the normal to the surface of the plane.
  /// This vale may be negative if 
  final double offset;

  /// Constructs a new [Plane].
  Plane._(double this.dx, double this.dy, double this.dz, double this.offset);

  /// Constructs a new [Plane].
  /// The given vector and offset will be normalized.
  factory Plane(double dx, double dy, double dz, [double offset = 0.0]) =>
    new Plane.fromVector(new Vector3(dx, dy, dz), offset);

  /// Constructs a new [Plane] with the given vector.
  /// The given vector and offset will be normalized.
  factory Plane.fromVector(Vector3 normal, [double offset = 0.0]) {
    final double len = normal.length();
    return new Plane._(normal.dx/len, normal.dy/len, normal.dz/len, offset);
  }

  /// Constructs a new [Plane] with the given points on the surface of the plane.
  factory Plane.fromPoints(Point3 a, Point3 b, Point3 c) {
    Vector3 ab = a.vectorTo(b);
    Vector3 bc = b.vectorTo(c);
    Vector3 normal = ab.cross(bc).normal();
    Vector3 toA = new Vector3.fromPoint3(a);
    double offset = normal.dot(toA);
    return new Plane._(normal.dx, normal.dy, normal.dz, offset);
  }

  /// Constructs a new [Plane] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order dx, dy, dz, then offset.
  factory Plane.fromList(List<double> values) {
    assert(values.length == 4);
    return new Plane(values[0], values[1], values[2], values[3]);
  }
  
  /// Gets an list of 4 doubles in the order dx, dy, dz, then offset.
  List<double> toList() =>
    [this.dx, this.dy, this.dz, this.offset];

  /// Gets the value at the zero based index in the order dx, dy, dz, then other.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.dx;
      case 1: return this.dy;
      case 2: return this.dz;
      case 3: return this.offset;
    }
    return 0.0;
  }

  /// Gets the normal vector of this plain.
  Vector3 get normal =>
    new Vector3(this.dx, this.dy, this.dz);

  /// Gets the origin of the plain, the closes point on the plain to the nermeric origin.
  Point3 get origin =>
    new Point3(this.dx*this.offset, this.dy*this.offset, this.dz*this.offset);

  /// Gets the nearest point on the plain to the given point [pnt].
  Point3 nearestPoint(Point3 pnt) {
    Vector3 norm = this.normal;
    Vector3 origin = norm*this.offset;
    return new Point3.fromVector3(origin + norm*(this.offset - origin.dot(norm)));
  }

  /// Gets the side of the point on the plain were Right is on the positive normal size (above),
  /// Same is on the plane and Left is on the negative normal size (below).
  Side _sideOfPointComponents(double x, double y, double z) {
    double value = this.dx*x + this.dy*y + this.dz*z;
    if (Comparer.equals(value, 0.0)) return Side.Inside;
    if (value < 0.0) return Side.Right;
    return Side.Left;
  }

  /// Gets the side of the point on the plain were Right is on the positive normal size (above),
  /// Same is on the plane and Left is on the negative normal size (below).
  Side sideOfPoint(Point3 pnt) =>
    this._sideOfPointComponents(pnt.x, pnt.y, pnt.z);

  /// Determines the intersection between the given [ray] and this plane.
  /// Will return nil if there is no intersection.
  IntersectionRayPlane rayIntersection(Ray3 ray) {
    Vector3 norm = this.normal;
    Vector3 p0 = new Vector3(ray.x, ray.y, ray.z);
    Vector3 vec = ray.vector;
    double dem = vec.dot(norm);
    if (dem == 0.0) return null;
    double t = (this.offset - p0.dot(norm)) / dem;
    if ((t < 0.0) || (t > 1.0)) return null;
    return new IntersectionRayPlane(Point3.fromVector3(p0 + norm*t), t);
  }
  
  /// Determines there is a collision between the given [region] and this plane.
  bool regionCollision(Region3 range) {
    Point3 min = range.minCorner;
    Point3 max = range.maxCorner;
    Side side = this._sideOfPointComponents(min.x, min.y, min.z);
    if (side == Side.Inside) return true;
    Side other = this._sideOfPointComponents(min.x, min.y, max.z);
    if (other == Side.Inside) return true;
    if (side != other) return true;
    other = this._sideOfPointComponents(min.x, max.y, min.z);
    if (other == Side.Inside) return true;
    if (side != other) return true;
    other = this._sideOfPointComponents(min.x, max.y, max.z);
    if (other == Side.Inside) return true;
    if (side != other) return true;
    other = this._sideOfPointComponents(max.x, min.y, min.z);
    if (other == Side.Inside) return true;
    if (side != other) return true;
    other = this._sideOfPointComponents(max.x, min.y, max.z);
    if (other == Side.Inside) return true;
    if (side != other) return true;
    other = this._sideOfPointComponents(max.x, max.y, min.z);
    if (other == Side.Inside) return true;
    if (side != other) return true;
    other = this._sideOfPointComponents(max.x, max.y, max.z);
    if (other == Side.Inside) return true;
    return side != other;
  }
  
  /// Determines there is a collision between the given [triangle] and this plane.
  bool triangleCollision(Triangle3 tri) {
    Side side = this._sideOfPointComponents(tri.x1, tri.y1, tri.z1);
    if (side == Side.Inside) return true;
    Side other = this._sideOfPointComponents(tri.x2, tri.y2, tri.z2);
    if (other == Side.Inside) return true;
    if (side != other) return true;
    other = this._sideOfPointComponents(tri.x3, tri.y3, tri.z3);
    if (other == Side.Inside) return true;
    return side != other;
  }

  /// Get the point intersection of three planes.
  /// Will return null if one or more plane are parallel.
  Point3 intersectionOf3(Plane plane2, Plane plane3) {
    Vector3 normal1 = this.normal;
    Vector3 normal2 = plane2.normal;
    Vector3 normal3 = plane3.normal;
    Vector3 cross12 = normal1.cross(normal2);
    double div = cross12.dot(normal3);
    if (Comparer.equals(div, 0.0)) return null;
    Vector3 cross23 = normal2.cross(normal3);
    Vector3 cross31 = normal3.cross(normal1);
    return new Point3.fromVector3((cross23*this.offset +
      cross31*plane2.offset + cross12*plane3.offset) / div);
  }

  /// Determines if the given [other] variable is a [Plane] equal to this plane.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Plane) return false;
    Plane plane = other as Plane;
    if (!Comparer.equals(plane.dx,     this.dx))     return false;
    if (!Comparer.equals(plane.dy,     this.dy))     return false;
    if (!Comparer.equals(plane.dz,     this.dz))     return false;
    if (!Comparer.equals(plane.offset, this.offset)) return false;
    return true;
  }

  /// Gets the string for this plane.
  String toString() => this.format();

  /// Gets the formatted string for this plane.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.dx,     fraction, whole)+
    ', '+formatDouble(this.dy,     fraction, whole)+
    ', '+formatDouble(this.dz,     fraction, whole)+
    ', '+formatDouble(this.offset, fraction, whole)+']';
}
