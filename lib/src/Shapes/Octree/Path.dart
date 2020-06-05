part of ThreeDart.Shapes.Octree;

/// The path to a node in the octree.
class Path {
  static const int maxDepth = 52;

  final int _x;
  final int _y;
  final int _z;
  final int _depth;

  factory Path.fromPoint(double x, double y, double z, Math.Cube maxCube) =>
    new Path._(
      ((x - maxCube.x)/maxCube.size).round(),
      ((y - maxCube.y)/maxCube.size).round(),
      ((z - maxCube.z)/maxCube.size).round(), maxDepth);

  factory Path(int x, int y, int z, int depth) {
    if (x < 0 || y < 0 || z < 0)
      throw new Exception("A path must have positive coordinate ($x, $y, $z)");
    if (depth < 0 || depth >= maxDepth)
      throw new Exception("A path's depth must be between 0 and $maxDepth inclusively ($depth)");
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
