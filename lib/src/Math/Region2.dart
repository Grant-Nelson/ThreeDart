part of ThreeDart.Math;

/// A math structure for storing a 2D region, like a rectangle.
/// This is also used for AABBs (axial alligned bounding boxes).
class Region2 {

  /// The left edge component of the region.
  final double x;

  /// The top edge component of the region.
  final double y;

  /// The width component of the region.
  final double dx;

  /// The height component of the region.
  final double dy;

  /// Constructs a new [Region2] instance.
  Region2._(double this.x, double this.y, double this.dx, double this.dy);

  /// Constructs a new [Region2] instance.
  factory Region2(double x, double y, double dx, double dy) {
    if (dx < 0.0) {
      x = x + dx;
      dx = -dx;
    }
    if (dy < 0.0) {
      y = y + dy;
      dy = -dy;
    }
    return new Region2._(x, y, dx, dy);
  }

  /// Constructs a new [Region2] at the origin.
  factory Region2.zero() =>
    new Region2(0.0, 0.0, 0.0, 0.0);

  /// Constructs a new [Region2] at the given point, [pnt].
  factory Region2.fromPoint(Point2 pnt, [double dx = 0.0, double dy = 0.0]) =>
    new Region2(pnt.x, pnt.y, dx, dy);

  /// Constructs a new [Region2] from two opposite corners.
  factory Region2.fromCorners(Point2 a, Point2 b) =>
    new Region2(a.x, a.y, b.x-a.x, b.y-a.y);

  /// Constructs a new [Region2] at the given ray.
  factory Region2.fromRay(Ray2 ray) =>
    new Region2(ray.x, ray.y, ray.dx, ray.dy);

  /// Constructs a new [Region2] instance given a list of 4 doubles.
  /// [values] is a list of doubles are in the order x, y, dx, then dy.
  factory Region2.fromList(List<double> values) {
    assert(values.length == 4);
    return new Region2(values[0], values[1], values[2], values[3]);
  }

  /// Constructs the union of the given regions. If both are null, null is returned.
  factory Region2.union(Region2 a, Region2 b) {
    if (a == null) return b;
    if (b == null) return a;
    double x  = math.min(a.x,      b.x);
    double y  = math.min(a.y,      b.y);
    double x2 = math.max(a.x+a.dx, b.x+b.dx);
    double y2 = math.max(a.y+a.dy, b.y+b.dy);
    return new Region2._(x, y, x2-x, y2-y);
  }

  /// Expands the region to include the given point, [pnt].
  Region2 expandWithPoint(Point2 pnt) =>
    this.expand(pnt.x, pnt.y);

  /// Expands the region to include the given location components.
  Region2 expand(double x, double y) {
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

    return new Region2._(x, y, dx, dy);
  }

  /// Gets an list of 4 doubles in the order x, y, dx, then dy.
  List<double> toList() =>
    [this.x, this.y, this.dx, this.dy];

  /// The minimum side of the region.
  double get minSide {
    if (this.dx > this.dy) return this.dy;
    else return this.dx;
  }

  /// The maximum side of the region.
  double get maxSide {
    if (this.dx > this.dy) return this.dx;
    else return this.dy;
  }

  /// Gets the adjusted point of the given [raw] point.
  /// This point is normalized into the region.
  Point2 adjustPoint(Point2 raw) {
    final double width  = this.dx*0.5;
    final double height = this.dy*0.5;
    final double x = raw.x - this.x - width;
    final double y = raw.y - this.y - height;
    return new Point2(x, y)*2.0/this.minSide;
  }

  /// Gets the adjusted vector of the given [raw] vector.
  /// This vector is normalized into the region.
  Vector2 adjustVector(Vector2 raw) {
    return raw*2.0/this.minSide;
  }

  /// Determines the location the given point is in relation to the region.
  HitRegion hit(Point2 a) {
    HitRegion region = HitRegion.None;

    if (a.x < this.x)               region |= HitRegion.XNeg;
    else if (a.x >= this.x+this.dx) region |= HitRegion.XPos;
    else                            region |= HitRegion.XCenter;

    if (a.y < this.y)               region |= HitRegion.YNeg;
    else if (a.y >= this.y+this.dy) region |= HitRegion.YPos;
    else                            region |= HitRegion.YCenter;

    return region;
  }

  /// nearestPoint finds the closest point in or on the edge of this region to the given point.
  Point2 nearestPoint(Point2 a) {
    HitRegion reg = this.hit(a);
    double x = reg.has(HitRegion.XNeg)? this.x:
               reg.has(HitRegion.XPos)? this.x+this.dx: a.x;
    double y = reg.has(HitRegion.YNeg)? this.y:
               reg.has(HitRegion.YPos)? this.y+this.dy: a.y;
    return new Point2(x, y);
  }

  /// Determines if the given point is contained inside this region.
  bool contains(Point2 a) {
    if (a.x < this.x) return false;
    else if (a.x >= this.x+this.dx) return false;

    if (a.y < this.y) return false;
    else if (a.y >= this.y+this.dy) return false;

    return true;
  }
  
  /// Determines if the two regions overlap even partually.
  bool overlap(Region2 a) =>
    (a.x <= this.x + this.dx) &&
    (a.y <= this.y + this.dy) &&
    (a.x + a.dx >= this.x) &&
    (a.y + a.dy >= this.y);

  /// Determines if the given [other] variable is a [Region2] equal to this region.
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Region2) return false;
    Region2 size = other as Region2;
    if (!Comparer.equals(size.x,  this.x))  return false;
    if (!Comparer.equals(size.y,  this.y))  return false;
    if (!Comparer.equals(size.dx, this.dx)) return false;
    if (!Comparer.equals(size.dy, this.dy)) return false;
    return true;
  }

  /// Gets the string for this region.
  String toString([int fraction = 3, int whole = 0]) =>
    '['+ formatDouble(this.x,  fraction, whole)+
    ', '+formatDouble(this.y,  fraction, whole)+
    ', '+formatDouble(this.dx, fraction, whole)+
    ', '+formatDouble(this.dy, fraction, whole)+']';
}
