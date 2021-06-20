part of ThreeDart.Math;

/// A math structure for storing a 3D region, like a rectangular cube.
/// This is also used for AABBs (axial aligned bounding boxes).
class Region3 {

  /// Gets a [Region3] at the origin.
  static Region3 get zero =>
    _zeroSingleton ??= new Region3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
  static Region3? _zeroSingleton;

  /// Gets a [Region3] at the origin with a width, height, and depth of 1.
  static Region3 get unit =>
    _unitSingleton ??= new Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0);
  static Region3? _unitSingleton;

  /// Gets a [Region3] at the origin with a width, height, and depth of 2 centered on origin.
  static Region3 get unit2 =>
    _unit2Singleton ??= new Region3(-1.0, -1.0, -1.0, 2.0, 2.0, 2.0);
  static Region3? _unit2Singleton;

  /// Constructs the union of the given regions. If both are null, null is returned.
  static Region3? union(Region3? a, Region3? b) {
    if (a == null) return b ?? zero;
    if (b == null) return a;
    double x  = math.min(a.x,      b.x);
    double y  = math.min(a.y,      b.y);
    double z  = math.min(a.z,      b.z);
    double x2 = math.max(a.x+a.dx, b.x+b.dx);
    double y2 = math.max(a.y+a.dy, b.y+b.dy);
    double z2 = math.max(a.z+a.dz, b.z+b.dz);
    return new Region3._(x, y, z, x2-x, y2-y, z2-z);
  }

  /// The left edge component of the region.
  final double x;

  /// The top edge component of the region.
  final double y;

  /// The front edge component of the region.
  final double z;

  /// The width component of the region.
  final double dx;

  /// The height component of the region.
  final double dy;

  /// The depth component of the region.
  final double dz;

  /// Constructs a new [Region3] instance.
  Region3._(double this.x,  double this.y,  double this.z,
            double this.dx, double this.dy, double this.dz);

  /// Constructs a new [Region3] instance.
  factory Region3(double x, double y, double z, double dx, double dy, double dz) {
    if (dx < 0.0) {
      x = x + dx;
      dx = -dx;
    }
    if (dy < 0.0) {
      y = y + dy;
      dy = -dy;
    }
    if (dz < 0.0) {
      z = z + dz;
      dz = -dz;
    }
    return new Region3._(x, y, z, dx, dy, dz);
  }

  /// Constructs a new [Region3] at the given point, [pnt].
  factory Region3.fromPoint(Point3 pnt, [double dx = 0.0, double dy = 0.0, double dz = 0.0]) =>
    new Region3(pnt.x, pnt.y, pnt.z, dx, dy, dz);

  /// Constructs a new [Region3] from two opposite corners.
  factory Region3.fromCorners(Point3 a, Point3 b) =>
    new Region3(a.x, a.y, a.z, b.x-a.x, b.y-a.y, b.z-a.z);

  /// Constructs a new [Region3] from the given [Cube].
  factory Region3.fromCube(Cube cube) =>
    new Region3(cube.x, cube.y, cube.z, cube.size, cube.size, cube.size);

  /// Constructs a new [Region3] at the given ray.
  factory Region3.fromRay(Ray3 ray) =>
    new Region3(ray.x, ray.y, ray.z, ray.dx, ray.dy, ray.dz);

  /// Constructs a new [Region3] instance given a list of 6 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, z, dx, dy, then dz.
  factory Region3.fromList(List<double> values) {
    assert(values.length == 6);
    return new Region3(values[0], values[1], values[2], values[3], values[4], values[5]);
  }

  /// The minimum corner point in the region.
  Point3 get minCorner =>
    new Point3(this.x, this.y, this.z);

  /// The maximum corner point in the region.
  Point3 get maxCorner =>
    new Point3(this.x + this.dx, this.y + this.dy, this.z + this.dz);

  /// The center point of the region.
  Point3 get center => new Point3(
    this.x + this.dx/2.0,
    this.y + this.dy/2.0,
    this.z + this.dz/2.0);

  /// Expands the region to include the given point, [pnt].
  Region3 expandWithPoint(Point3 pnt) =>
    this.expand(pnt.x, pnt.y, pnt.z);

  /// Expands the region to include the given location components.
  Region3 expand(double x, double y, double z) {
    double dx = this.dx;
    if (x < this.x) dx = this.dx + (this.x - x);
    else {
      if (x > this.x + this.dx) dx = x - this.x;
      x = this.x;
    }

    double dy = this.dy;
    if (y < this.y) dy = this.dy + (this.y - y);
    else {
      if (y > this.y + this.dy) dy = y - this.y;
      y = this.y;
    }

    double dz = this.dz;
    if (z < this.z) dz = this.dz + (this.z - z);
    else {
      if (z > this.z + this.dz) dz = z - this.z;
      z = this.z;
    }

    return new Region3._(x, y, z, dx, dy, dz);
  }

  /// Expands the region to include the given region components.
  Region3 expandWithRegion(Region3 region) {
    double x1 = math.min(this.x, region.x);
    double x2 = math.max(this.x+this.dx, region.x+region.dx);
    double y1 = math.min(this.y, region.y);
    double y2 = math.max(this.y+this.dy, region.y+region.dy);
    double z1 = math.min(this.z, region.z);
    double z2 = math.max(this.z+this.dz, region.z+region.dz);
    return new Region3._(x1, y1, z1, x2-x1, y2-y1, z2-z1);
  }

  /// Gets an list of 6 doubles in the order x, y, z, dx, dy, then dz.
  List<double> toList() =>
    [this.x, this.y, this.z, this.dx, this.dy, this.dz];

  /// Gets the value at the zero based index in the order x, y, z, dx, dy, then dz.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.x;
      case 1: return this.y;
      case 2: return this.z;
      case 3: return this.dx;
      case 4: return this.dy;
      case 5: return this.dz;
    }
    return 0.0;
  }

  /// The minimum side of the region.
  double get minSide {
    double side = this.dx;
    if (side > this.dy) side = this.dy;
    if (side > this.dz) side = this.dz;
    return side;
  }

  /// The maximum side of the region.
  double get maxSide {
    double side = this.dx;
    if (side < this.dy) side = this.dy;
    if (side < this.dz) side = this.dz;
    return side;
  }

  /// Indicates if the region is a cube, ie has equal dx, dy, and dz.
  bool get isCube =>
    Comparer.equals(this.dx, this.dy) && Comparer.equals(this.dx, this.dz);

  /// Gets the adjusted point of the given [raw] point.
  /// This point is normalized into the region.
  Point3 adjustPoint(Point3 raw) {
    final double width  = this.dx*0.5;
    final double height = this.dy*0.5;
    final double depth  = this.dz*0.5;
    final double x = raw.x - this.x - width;
    final double y = raw.y - this.y - height;
    final double z = raw.z - this.z - depth;
    return new Point3(x, y, z)*2.0/this.minSide;
  }

  /// Gets the adjusted vector of the given [raw] vector.
  /// This vector is normalized into the region.
  Vector3 adjustVector(Vector3 raw) =>
    raw*2.0/this.minSide;

  /// Determines the location the given point is in relation to the region.
  HitRegion hit(Point3 a) {
    HitRegion region = HitRegion.None;

    if (a.x < this.x) region |= HitRegion.XNeg;
    else if (a.x >= this.x+this.dx) region |= HitRegion.XPos;
    else region |= HitRegion.XCenter;

    if (a.y < this.y) region |= HitRegion.YNeg;
    else if (a.y >= this.y+this.dy) region |= HitRegion.YPos;
    else region |= HitRegion.YCenter;

    if (a.z < this.z) region |= HitRegion.ZNeg;
    else if (a.z >= this.z+this.dz) region |= HitRegion.ZPos;
    else region |= HitRegion.ZCenter;

    return region;
  }

  /// Determines if the given point is contained inside this region.
  bool contains(Point3 a) =>
    inRange(a.x, this.x, this.x+this.dx) &&
    inRange(a.y, this.y, this.y+this.dy) &&
    inRange(a.z, this.z, this.z+this.dz);

  /// Determines if the two regions overlap even partially.
  bool overlaps(Region3 a) =>
    rangeOverlap(a.x, a.x + a.dx, this.x, this.x + this.dx) &&
    rangeOverlap(a.y, a.y + a.dy, this.y, this.y + this.dy) &&
    rangeOverlap(a.z, a.z + a.dz, this.z, this.z + this.dz);

  /// Creates a new [Region3] as a translation of the other given region.
  Region3 translate(Vector3 offset) =>
    new Region3(this.x+offset.dx, this.y+offset.dy, this.z+offset.dz, this.dx, this.dy, this.dz);

  /// Determines if the given [other] variable is a [Region3] equal to this region.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Region3) return false;
    if (!Comparer.equals(other.x,  this.x))  return false;
    if (!Comparer.equals(other.y,  this.y))  return false;
    if (!Comparer.equals(other.z,  this.z))  return false;
    if (!Comparer.equals(other.dx, this.dx)) return false;
    if (!Comparer.equals(other.dy, this.dy)) return false;
    if (!Comparer.equals(other.dz, this.dz)) return false;
    return true;
  }

  /// Gets the string for this region.
  String toString() => this.format();

  /// Gets the formatted string for this region.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.x,  fraction, whole)+
    ', '+formatDouble(this.y,  fraction, whole)+
    ', '+formatDouble(this.z,  fraction, whole)+
    ', '+formatDouble(this.dx, fraction, whole)+
    ', '+formatDouble(this.dy, fraction, whole)+
    ', '+formatDouble(this.dz, fraction, whole)+']';
}
