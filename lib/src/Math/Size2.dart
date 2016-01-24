part of ThreeDart.Math;

/// A math structure for storing a 2D size, like a rectangle.
class Size2 {

  double _x;
  double _y;
  double _dx;
  double _dy;

  /// Constructs a new [Size2] instance.
  Size2(double x, double y, double dx, double dy) {
    this.set(x, y, dx, dy);
  }

  /// Constructs a new [Size2] at the origin.
  factory Size2.zero() =>
      new Size2(0.0, 0.0, 0.0, 0.0);

  /// Constructs a new [Size2] from two opposite corners.
  factory Size2.fromCorners(Point2 a, Point2 b) =>
      new Size2(a.x, a.y, b.x-a.x, b.y-a.y);

  /// Constructs a new [Size2] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, dx, then dy.
  factory Size2.fromList(List<double> values) {
    assert(values.length == 4);
    return new Size2(values[0], values[1], values[2], values[3]);
  }

  /// The left edge component of the size.
  double get x => this._x;
  set x(double x) => this._x = x;

  /// The top edge component of the size.
  double get y => this._y;
  set y(double y) => this._y = y;

  /// The width component of the size.
  double get dx => this._dx;
  set dx(double dx) {
    if (dx < 0.0) {
      this._x += dx;
      this._dx = -dx;
    } else this._dx = dx;
  }

  /// The height component of the size.
  double get dy => this._dy;
  set dy(double dy) {
    if (dy < 0.0) {
      this._y += dy;
      this._dy = -dy;
    } else this._dy = dy;
  }

  /// Sets the size of this instance.
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

  /// Creates a copy of the size.
  Size2 copy() =>
      new Size2(this._x, this._y, this._dx, this._dy);

  /// The minimum side of the size.
  double get minSide {
    if (this._dx > this._dy) return this._dy;
    else return this._dx;
  }

  /// The maximum side of the size.
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

  /// Determines if the given [other] variable is a [Size2] equal to this point.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Size2) return false;
    Size2 size = other as Size2;
    if (!Comparer.equals(size._x, this._x)) return false;
    if (!Comparer.equals(size._y, this._y)) return false;
    if (!Comparer.equals(size._dx, this._dx)) return false;
    if (!Comparer.equals(size._dy, this._dy)) return false;
    return true;
  }

  /// Gets the string for this size.
  String toString() => '['+formatDouble(this._x)+
                      ', '+formatDouble(this._y)+
                      ', '+formatDouble(this._dx)+
                      ', '+formatDouble(this._dy)+']';
}
