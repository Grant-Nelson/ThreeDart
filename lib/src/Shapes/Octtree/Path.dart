part of ThreeDart.Shapes.Octtree;

class Path {

  final int _x;
  final int _y;
  final int _z;
  final int _depth;

  factory Path.fromPoint(double x, double y, double z, double xOffset, double yOffset, double zOffset, double maxSize) =>
    new Path._(((x - xOffset)/maxSize).round(), ((y - yOffset)/maxSize).round(), ((z - zOffset)/maxSize).round(), 63);

  factory Path(int x, int y, int z, int depth) {
    if (x < 0 || y < 0 || z < 0)
      throw new Exception("A path must have positive coordinate ($x, $y, $z)");
    if (depth < 0 || depth >= 64)
      throw new Exception("A path's depth must be between 0 and 63 inclusively ($depth)");
    return new Path._(x, y, z, depth);
  }

  Path._(this._x, this._y, this._z, this._depth);

  int get depth => this._depth;

  int childIndexAt(int index) {
    int mask = 1 << index;
    int childIndex = 0;
    if (this._x & mask != 0x00) childIndex |= 1;
    if (this._y & mask != 0x00) childIndex |= 2;
    if (this._z & mask != 0x00) childIndex |= 4;
    return childIndex;
  }
}
