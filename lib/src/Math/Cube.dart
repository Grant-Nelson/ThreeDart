part of ThreeDart.Math;

/// A math structure for storing a 3D region with equal width, depth, and height.
/// This is used when defining cubes of spaces like needed by an Octree.
class Cube {

  /// Gets a [Cube] at the origin.
  static Cube get zero {
    _zeroSingleton ??= new Cube(0.0, 0.0, 0.0, 0.0);
    return _zeroSingleton;
  }
  static Cube _zeroSingleton;

  /// Gets a [Cube] at the origin with a width, height, and depth of 1.
  static Cube get unit {
    _unitSingleton ??= new Cube(0.0, 0.0, 0.0, 1.0);
    return _unitSingleton;
  }
  static Cube _unitSingleton;

  /// Gets a [Cube] at the origin with a width, height, and depth of 2 centered on origin.
  static Cube get unit2 {
    _unit2Singleton ??= new Cube(-1.0, -1.0, -1.0, 2.0);
    return _unit2Singleton;
  }
  static Cube _unit2Singleton;

  /// The left edge component of the cube.
  final double x;
  
  /// The top edge component of the cube.
  final double y;
  
  /// The front edge component of the cube.
  final double z;

  /// The width, height, and depth of the cube.
  final double size;

  /// Constructs a new [Cube] instance.
  Cube._(double this.x, double this.y, double this.z, double this.size);
  
  /// Constructs a new [Cube] instance.
  factory Cube(double x, double y, double z, double size) {
    if (size < 0.0) {
      x = x + size;
      y = y + size;
      z = z + size;
      size = -size;
    }
    return new Cube._(x, y, z, size);
  }
  
  /// Constructs a new [Cube] at the given point, [pnt].
  factory Cube.fromPoint(Point3 pnt, [double size = 0.0]) =>
    new Cube(pnt.x, pnt.y, pnt.z, size);

  /// Constructs a new [Cube] at the given center point, [pnt].
  factory Cube.fromCenter(Point3 pnt, [double size = 0.0]) =>
    new Cube(pnt.x - size*0.5, pnt.y - size*0.5, pnt.z - size*0.5, size);
    
  /// Constructs a new [Cube] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, z, then size.
  factory Cube.fromList(List<double> values) {
    assert(values.length == 4);
    return new Cube(values[0], values[1], values[2], values[3]);
  }

  /// Gets a cube which tightly completely contained by the given region.
  factory Cube.inscribe(Region3 region) =>
    new Cube.fromCenter(region.center, region.minSide);

  /// Gets a cube which tightly completely contains the given region.
  factory Cube.circumscribe(Region3 region) =>
    new Cube.fromCenter(region.center, region.maxSide);
  
  /// The center point of the region.
  Point3 get center {
    final half = this.size/2.0;
    return new Point3(this.x + half, this.y + half, this.z + half);
  }

  /// Gets an list of 4 doubles in the order x, y, z, then size.
  List<double> toList() =>
    [this.x, this.y, this.z, this.size];

  /// Gets the value at the zero based index in the order x, y, z, then size.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.x;
      case 1: return this.y;
      case 2: return this.z;
      case 3: return this.size;
    }
    return 0.0;
  }

  /// Gets a [Region3] which is equivalent to this cube.
  Region3 toRegion3() =>
    new Region3(this.x, this.y, this.z, this.size, this.size, this.size);

  /// Gets the adjusted vector of the given [raw] vector.
  /// This vector is normalized into the region.
  Vector3 adjustVector(Vector3 raw) =>
    raw*2.0/this.size;

  /// Determines the location the given point is in relation to the region.
  HitRegion hit(Point3 a) {
    HitRegion region = HitRegion.None;

    if (a.x < this.x) region |= HitRegion.XNeg;
    else if (a.x >= this.x+this.size) region |= HitRegion.XPos;
    else region |= HitRegion.XCenter;

    if (a.y < this.y) region |= HitRegion.YNeg;
    else if (a.y >= this.y+this.size) region |= HitRegion.YPos;
    else region |= HitRegion.YCenter;

    if (a.z < this.z) region |= HitRegion.ZNeg;
    else if (a.z >= this.z+this.size) region |= HitRegion.ZPos;
    else region |= HitRegion.ZCenter;

    return region;
  }

  /// Determines if the given point is contained inside this cube.
  bool contains(Point3 a) =>
    inRange(a.x, this.x, this.x+this.size) &&
    inRange(a.y, this.y, this.y+this.size) &&
    inRange(a.z, this.z, this.z+this.size);

  /// Determines if the two cubes overlap even partially.
  bool overlaps(Cube a) =>
    rangeOverlap(a.x, a.x + a.size, this.x, this.x + this.size) &&
    rangeOverlap(a.y, a.y + a.size, this.y, this.y + this.size) &&
    rangeOverlap(a.z, a.z + a.size, this.z, this.z + this.size);

  /// Creates a new [Cube] as a translation of the other given cube.
  Cube translate(Vector3 offset) =>
    new Cube(this.x+offset.dx, this.y+offset.dy, this.z+offset.dz, this.size);

  /// Determines if the given [other] variable is a [Cube] equal to this cube.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Cube) return false;
    Cube size = other as Cube;
    if (!Comparer.equals(size.x,  this.x))  return false;
    if (!Comparer.equals(size.y,  this.y))  return false;
    if (!Comparer.equals(size.z,  this.z))  return false;
    if (!Comparer.equals(size.size, this.size)) return false;
    return true;
  }

  /// Gets the string for this cube.
  String toString() => this.format();

  /// Gets the formatted string for this cube.
  String format([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.x,  fraction, whole)+
    ', '+formatDouble(this.y,  fraction, whole)+
    ', '+formatDouble(this.z,  fraction, whole)+
    ', '+formatDouble(this.size, fraction, whole)+']';
}
