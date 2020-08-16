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
  final double offset;

  /// Constructs a new [Plane].
  Plane._(double this.dx, double this.dy, double this.dz, double this.offset);

  /// Constructs a new [Plane].
  /// The given vector and offset will be normalized.
  factory Plane(double dx, double dy, double dz, [double offset = 0.0]) =>
    new Plane.fromVector(new Vector3(dx, dy, dz), offset);

  /// Constructs a new [Plane] with the given vector.
  /// The given vector and offset will be normalized.
  factory Plane.fromVector(Vector3 vector, [double offset = 0.0]) {
    vector = vector.normal();
    if (offset < 0.0) {
      offset = -offset;
      vector = -vector;
    }
    return new Plane._(vector.dx, vector.dy, vector.dz, offset);
  }

  /// Constructs a new [Plane] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order dx, dy, dz, offset.
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
  Vector3 get normal => new Vector3(this.dx, this.dy, this.dz);

  /// Gets the origin of the plain, the closes point on the plain to the nermeric origin.
  Point3 get origin => new Point3(this.dx*this.offset, this.dy*this.offset, this.dz*this.offset);

  /// Gets the nearest point on the plain to the given point [pnt].
  Point3 nearestPoint(Point3 pnt) {
    Vector3 norm = this.normal;
    Vector3 origin = norm*this.offset;
    return new Point3.fromVector3(origin + norm*(this.offset - origin.dot(norm)));
  }


  // TODO: Add Ray Intersection Result structure.
  Point3 rayIntersection(Ray3 ray) {
    Vector3 norm = this.normal;
    Vector3 p0 = new Vector3(ray.x, ray.y, ray.z);
    Vector3 vec = ray.vector;
    double dem = vec.dot(norm);
    if (dem == 0.0) {
      return // No itersection
    }
    ###
    double t = (this.offset - p0.dot(norm)) / dem;
    return new Point3.fromVector3(p0 + norm*t);
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
