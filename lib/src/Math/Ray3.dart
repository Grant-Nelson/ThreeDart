part of ThreeDart.Math;

/// A 3D ray is a vector with a starting point.
class Ray3 {

  /// The x component of the ray.
  final double x;

  /// The y component of the ray.
  final double y;

  /// The z component of the ray.
  final double z;

  /// The delta X component of the ray.
  final double dx;

  /// The delta Y component of the ray.
  final double dy;

  /// The delta Z component of the ray.
  final double dz;

  /// Constructs a new [Ray3].
  Ray3(this.x, this.y, this.z, this.dx, this.dy, this.dz);

  /// Constructs a new [Ray3] at the origin with no vector.
  factory Ray3.zero() =>
    new Ray3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

  /// Constructs a new [Ray3] with the given point and vector.
  factory Ray3.fromVertex(Point3 pnt, Vector3 vec) =>
    new Ray3(pnt.x, pnt.y, pnt.z, vec.dx, vec.dy, vec.dz);

  /// Constructs a new [Ray3] with the two given points.
  factory Ray3.fromPoints(Point3 a, Point3 b) =>
    new Ray3(a.x, a.y, a.z, b.x-a.x, b.y-a.y, b.z-a.z);

  /// Constructs a new [Ray3] from a [Ray2] with the optional z components.
  factory Ray3.fromRay3(Ray2 a, [double z = 0.0, double dz = 0.0]) =>
    new Ray3(a.x, a.y, z, a.dx, a.dy, dz);

  /// Constructs a new [Ray3] instance given a list of 6 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, z, dx, dy, then dz.
  factory Ray3.fromList(List<double> values) {
    assert(values.length == 6);
    return new Ray3(values[0], values[1], values[2], values[3], values[4], values[5]);
  }

  /// Gets an list of 6 doubles in the order x, y, z, dx, dy, then dz.
  List<double> toList() =>
    [this.x, this.y, this.z, this.dx, this.dy, this.dz];

  /// Gets the point at the start of this ray.
  Point3 get start => new Point3(this.x, this.y, this.z);

  /// Gets the point at the end of this ray.
  Point3 get end => new Point3(this.x+this.dx, this.y+this.dy, this.z+this.dz);

  /// Gets the vector of this ray.
  Vector3 get vector => new Vector3(this.dx, this.dy, this.dz);

  /// Creates a ray heading from the tip of this ray backwards to the origin.
  Ray3 get reverse => new Ray3.fromVertex(this.end, -this.vector);

  /// Determines if the given [other] variable is a [Ray3] equal to this ray.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Ray3) return false;
    Ray3 size = other as Ray3;
    if (!Comparer.equals(size.x,  this.x))  return false;
    if (!Comparer.equals(size.y,  this.y))  return false;
    if (!Comparer.equals(size.z,  this.z))  return false;
    if (!Comparer.equals(size.dx, this.dx)) return false;
    if (!Comparer.equals(size.dy, this.dy)) return false;
    if (!Comparer.equals(size.dz, this.dz)) return false;
    return true;
  }

  /// Gets the string for this ray.
  String toString() => this.format();

  /// Gets the formatted string for this ray.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.x,  fraction, whole)+
    ', '+formatDouble(this.y,  fraction, whole)+
    ', '+formatDouble(this.z,  fraction, whole)+
    ', '+formatDouble(this.dx, fraction, whole)+
    ', '+formatDouble(this.dy, fraction, whole)+
    ', '+formatDouble(this.dz, fraction, whole)+']';
}
