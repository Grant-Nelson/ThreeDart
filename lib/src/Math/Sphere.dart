part of ThreeDart.Math;

/// A math structure for defining a sphere.
class Sphere {

  /// The x component of the point for the sphere's center point.
  final double x;

  /// The y component of the point for the sphere's center point.
  final double y;

  /// The z component of the point for the sphere's center point.
  final double z;
  
  /// The positive radius of the sphere.
  final double radius;

  /// Constructs a new [Sphere].
  Sphere._(double this.x, double this.y, double this.z, double this.radius);
  
  /// Constructs a new [Sphere].
  factory Sphere(double x, double y, double z, double radius) =>
    new Sphere._(x, y, z, radius.abs());

  /// Constructs a new [Sphere] with the given center point.
  factory Sphere.fromPoint(Point3 center, double radius) =>
    new Sphere(center.x, center.y, center.z, radius);

  /// Constructs a new [Sphere] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, z, then radius.
  factory Sphere.fromList(List<double> values) {
    assert(values.length == 4);
    return new Sphere(values[0], values[1], values[2], values[3]);
  }
  
  /// Gets an list of 4 doubles in the order x, y, z, then radius.
  List<double> toList() =>
    [this.x, this.y, this.z, this.radius];

  /// Gets the value at the zero based index in the order x, y, z, then radius.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.x;
      case 1: return this.y;
      case 2: return this.z;
      case 3: return this.radius;
    }
    return 0.0;
  }

  /// Gets the center point of this sphere.
  Point3 get center => new Point3(this.x, this.y, this.z);

  /// Gets the closest point on the sphere's surface.
  Point3 closestPoint(Point3 pnt) {
    Point3 center = this.center;
    Vector3 toPnt = center.vectorTo(pnt);
    double dist = toPnt.length();
    return center.offset((toPnt * (this.radius / dist)));
  }
  
  /// Determines if the given [other] variable is a [Sphere] equal to this sphere.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Sphere) return false;
    if (!Comparer.equals(other.x,      this.x))      return false;
    if (!Comparer.equals(other.y,      this.y))      return false;
    if (!Comparer.equals(other.z,      this.z))      return false;
    if (!Comparer.equals(other.radius, this.radius)) return false;
    return true;
  }

  /// Gets the string for this sphere.
  String toString() => this.format();

  /// Gets the formatted string for this sphere.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.x,      fraction, whole)+
    ', '+formatDouble(this.y,      fraction, whole)+
    ', '+formatDouble(this.z,      fraction, whole)+
    ', '+formatDouble(this.radius, fraction, whole)+']';
}
