part of ThreeDart.Math;

/// A math structure for storing a 3D size, like a rectangular cube
class Size3 {

  double _x;
  double _y;
  double _z;
  double _dx;
  double _dy;
  double _dz;

  /// Constructs a new [Size3] instance.
  Size3(double x, double y, double z, double dx, double dy, double dz) {
    this.set(x, y, z, dx, dy, dz);
  }

  /// Constructs a new [Size3] at the origin.
  factory Size3.zero() =>
      new Size3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

  /// Constructs a new [Size3] from two opposite corners.
  factory Size3.fromCorners(Point3 a, Point3 b) =>
      new Size3(a.x, a.y, a.z, b.x-a.x, b.y-a.y, b.z-a.z);

  /// Constructs a new [Size3] instance given a list of 6 doubles.
  ///
  /// [values] is a list of doubles are in the order x, y, z, dx, dy, then dz.
  factory Size3.fromList(List<double> values) {
    assert(values.length == 6);
    return new Size3(values[0], values[1], values[2], values[3], values[4], values[5]);
  }

  /// The left edge component of the size.
  double get x => this._x;
  set x(double x) => this._x = x;

  /// The top edge component of the size.
  double get y => this._y;
  set y(double y) => this._y = y;

  /// The front edge component of the size.
  double get z => this._z;
  set z(double z) => this._z = z;

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

  /// The depth component of the size.
  double get dz => this._dz;
  set dz(double dz) {
    if (dz < 0.0) {
      this._z += dz;
      this._dz = -dz;
    } else this._dz = dz;
  }

  /// Sets the size of this instance.
  void set(double x, double y, double z, double dx, double dy, double dz) {
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
    if (dz < 0.0) {
      this._z = z + dz;
      this._dz = -dz;
    } else {
      this._z = z;
      this._dz = dz;
    }
  }

  /// Gets an list of 4 doubles in the order x, y, z, dx, dy, then dz.
  List<double> toList() =>
      [this._x, this._y, this._z, this._dx, this._dy, this._dz];

  /// Creates a copy of the size.
  Size3 copy() =>
      new Size3(this._x, this._y, this._z, this._dx, this._dy, this._dz);

  /// The minimum side of the size.
  double get minSide {
    double side = this._dx;
    if (side > this._dy) side = this._dy;
    if (side > this._dz) side = this._dz;
    return side;
  }

  /// The maximum side of the size.
  double get maxSide {
    double side = this._dx;
    if (side < this._dy) side = this._dy;
    if (side < this._dz) side = this._dz;
    return side;
  }

  /// Gets the adjusted point of the given [raw] point.
  /// This point is normalized into the region.
  Point3 adjustPoint(Point3 raw) {
    final double width  = this.dx*0.5;
    final double height = this.dy*0.5;
    final double depth = this.dz*0.5;
    final double x = raw.x - this.x - width;
    final double y = raw.y - this.y - height;
    final double z = raw.z - this.z - depth;
    return new Point3(x, y, z)*2.0/this.minSide;
  }

  /// Gets the adjusted vector of the given [raw] vector.
  /// This vector is normalized into the region.
  Vector3 adjustVector(Vector3 raw) {
    return raw*2.0/this.minSide;
  }

  /// Determines if the given [other] variable is a [Size3] equal to this point.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Size3) return false;
    Size3 size = other as Size3;
    if (!Comparer.equals(size._x, this._x)) return false;
    if (!Comparer.equals(size._y, this._y)) return false;
    if (!Comparer.equals(size._z, this._z)) return false;
    if (!Comparer.equals(size._dx, this._dx)) return false;
    if (!Comparer.equals(size._dy, this._dy)) return false;
    if (!Comparer.equals(size._dz, this._dz)) return false;
    return true;
  }

  /// Gets the string for this size.
  String toString() => '['+formatDouble(this._x)+
                      ', '+formatDouble(this._y)+
                      ', '+formatDouble(this._z)+
                      ', '+formatDouble(this._dx)+
                      ', '+formatDouble(this._dy)+
                      ', '+formatDouble(this._dz)+']';
}
