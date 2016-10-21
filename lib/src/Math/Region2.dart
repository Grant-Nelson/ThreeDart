part of ThreeDart.Math;

/// A math structure for storing a 2D region, like a rectangle.
class Region2 {

  double _x;
  double _y;
  double _dx;
  double _dy;

  /// Constructs a new [Region2] instance.
  Region2(double x, double y, double dx, double dy) {
    this.set(x, y, dx, dy);
  }

  /// Constructs a new [Region2] at the origin.
  factory Region2.zero() =>
      new Region2(0.0, 0.0, 0.0, 0.0);

  /// Constructs a new [Region2] at the given point, [pnt].
  factory Region2.fromPoint(Point2 pnt) =>
      new Region2(pnt.x, pnt.y, 0.0, 0.0);

  /// Constructs a new [Region2] from two opposite corners.
  factory Region2.fromCorners(Point2 a, Point2 b) =>
      new Region2(a.x, a.y, b.x-a.x, b.y-a.y);

  /// Constructs a new [Region2] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, dx, then dy.
  factory Region2.fromList(List<double> values) {
    assert(values.length == 4);
    return new Region2(values[0], values[1], values[2], values[3]);
  }

  /// Constructs the union of the given regions. If both are null, null is returned.
  factory Region2.union(Region2 a, Region2 b) {
    if (a == null) {
      if (b == null) return null;
      return b.copy();
    }
    Region2 region = a.copy();
    if (b == null) return region;
    region.expand(b._x, b._y);
    region.expand(b._x + b._dx, b._y + b._dy);
    return region;
  }

  /// The left edge component of the region.
  double get x => this._x;
  set x(double x) => this._x = x;

  /// The top edge component of the region.
  double get y => this._y;
  set y(double y) => this._y = y;

  /// The width component of the region.
  double get dx => this._dx;
  set dx(double dx) {
    if (dx < 0.0) {
      this._x += dx;
      this._dx = -dx;
    } else this._dx = dx;
  }

  /// The height component of the region.
  double get dy => this._dy;
  set dy(double dy) {
    if (dy < 0.0) {
      this._y += dy;
      this._dy = -dy;
    } else this._dy = dy;
  }

  /// Expands the region to include the given point, [pnt].
  void expandWithPoint(Point2 pnt) {
    this.expand(pnt.x, pnt.y);
  }

  /// Expands the region to include the given location components.
  void expand(double x, double y) {
    if (x < this._x) {
      this._dx += (this._x - x);
      this._x = x;
    } else if (x > this._x + this._dx) {
      this._dx = x - this._x;
    }

    if (y < this._y) {
      this._dy += (this._y - y);
      this._y = y;
    } else if (y > this._y + this._dy) {
      this._dy = y - this._y;
    }
  }

  /// Sets the region of this instance.
  void set(double x, double y, double dx, double dy) {
    if (dx < 0.0) {
      this._x = x + dx;
      this._dx = -dx;
    } else {
      this._x = x;
      this._dx = dx;
    }
    if (dy < 0.0) {
      this._y = y + dy;
      this._dy = -dy;
    } else {
      this._y = y;
      this._dy = dy;
    }
  }

  /// Gets an list of 4 doubles in the order x, y, dx, then dy.
  List<double> toList() =>
      [this._x, this._y, this._dx, this._dy];

  /// Creates a copy of the region.
  Region2 copy() =>
      new Region2(this._x, this._y, this._dx, this._dy);

  /// The minimum side of the region.
  double get minSide {
    if (this._dx > this._dy) return this._dy;
    else return this._dx;
  }

  /// The maximum side of the region.
  double get maxSide {
    if (this._dx > this._dy) return this._dx;
    else return this._dy;
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

  /// Determines if the given [other] variable is a [Region2] equal to this point.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Region2) return false;
    Region2 size = other as Region2;
    if (!Comparer.equals(size._x, this._x)) return false;
    if (!Comparer.equals(size._y, this._y)) return false;
    if (!Comparer.equals(size._dx, this._dx)) return false;
    if (!Comparer.equals(size._dy, this._dy)) return false;
    return true;
  }

  /// Gets the string for this region.
  String toString([int fraction = 3, int whole = 0]) =>
    '['+formatDouble(this._x, fraction, whole)+
    ', '+formatDouble(this._y, fraction, whole)+
    ', '+formatDouble(this._dx, fraction, whole)+
    ', '+formatDouble(this._dy, fraction, whole)+']';
}
