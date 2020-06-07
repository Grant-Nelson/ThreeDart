part of ThreeDart.Shapes.Octree;

/// The path to a node in the octree.
class Path {
  final int _x;
  final int _y;
  final int _z;

  factory Path.fromPoint(Math.Point3 loc, Math.Cube maxCube) =>
    new Path._(
      ((loc.x - maxCube.x)/maxCube.size).round(),
      ((loc.y - maxCube.y)/maxCube.size).round(),
      ((loc.z - maxCube.z)/maxCube.size).round());

  factory Path(int x, int y, int z, int depth) {
    if (x < 0 || y < 0 || z < 0)
      throw new Exception("A path must have positive coordinate ($x, $y, $z)");
    return new Path._(x, y, z);
  }

  Path._(this._x, this._y, this._z);

  Math.Point3 location(Math.Cube maxCube) =>
    new Math.Point3(
      this._x * maxCube.size + maxCube.x,
      this._y * maxCube.size + maxCube.y,
      this._z * maxCube.size + maxCube.z);

  int childIndexAt(int index) {
    int mask = 1 << index;
    int childIndex = 0;
    if (this._x & mask != 0x00) childIndex |= 1;
    if (this._y & mask != 0x00) childIndex |= 2;
    if (this._z & mask != 0x00) childIndex |= 4;
    return childIndex;
  }
}
