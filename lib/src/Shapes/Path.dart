part of ThreeDart.Shapes;

/// The path to a node in the octree.
class Path {
  /// The maximum allowed depth value.
  static const int maxDepth = 32;

  /// The maximum allowed value for any component, 2^32 - 1.
  static const int maxValue = 0x7FFFFFFF;

  /// Clamps the given component into the valid range.
  static int clamp(int v) {
    if (v < 0) return 0;
    if (v > maxValue) return maxValue;
    return v;
  }

  /// The x component of the path.
  final int x;
  
  /// The y component of the path.
  final int y;

  /// The z component of the path.
  final int z;

  /// Determines the path to the given location within the given maximum cube.
  factory Path.fromPoint(Math.Point3 loc, Math.Cube maxCube) {
    double scalar = maxDepth / maxCube.size;
    if (loc == null) return new Path._(0, 0, 0);
    return new Path(
      ((loc.x - maxCube.x)*scalar).round(),
      ((loc.y - maxCube.y)*scalar).round(),
      ((loc.z - maxCube.z)*scalar).round());
  }

  /// Constructs a path with the given coordinates and depth.
  factory Path(int x, int y, int z) =>
    new Path._(clamp(x), clamp(y), clamp(z));

  /// Internal constructor to assign final values.
  Path._(this.x, this.y, this.z);

  /// This gets a new path with the given depth changed to a different index.
  Path redirect(int index, int depth) {
    int mask = 1 << depth;
    int notMask = maxValue - mask;
    int x = (this.x & notMask) | ((index & 1 != 0)? mask: 0);
    int y = (this.y & notMask) | ((index & 2 != 0)? mask: 0);
    int z = (this.z & notMask) | ((index & 4 != 0)? mask: 0);
    return new Path(x, y, z);
  }

  /// Determines the depth for the common path between this and the other path.
  /// If there is no match then this will return -1.
  int commonDepth(Path other) {
    int diff = (this.x ^ other.x) | (this.y ^ other.y) | (this.z ^ other.z);
    for (int d = 0, mask = 1; d < maxDepth; d++, mask <<= 1) {
      if (diff & mask != 0) return d-1;
    }
    return maxDepth-1;
  }

  /// Determines if the two paths are the same upto the given depth.
  /// If depths is less than zero this will return true.
  bool sameUpto(Path other, int depth) {
    int diff = (this.x ^ other.x) | (this.y ^ other.y) | (this.z ^ other.z);
    for (int d = 0, mask = 1; d < depth; d++, mask <<= 1) {
      if (diff & mask != 0) return false;
    }
    return true;
  }

  /// This gets the location this path is for in the given maximum cube.
  /// This does not take into account the depth.
  Math.Point3 location(Math.Cube maxCube) {
    double scalar = maxCube.size / maxDepth;
    return new Math.Point3(
      this.x * scalar + maxCube.x,
      this.y * scalar + maxCube.y,
      this.z * scalar + maxCube.z);
  }

  /// Gets the octree child index, 0 to 7, to take in this path at the given depth.
  int childIndexAt(int depth) {
    if (depth < 0) return 0;
    int mask = 1 << depth;
    int childIndex = 0;
    if (this.x & mask != 0) childIndex |= 1;
    if (this.y & mask != 0) childIndex |= 2;
    if (this.z & mask != 0) childIndex |= 4;
    return childIndex;
  }

  /// Determines if the given [other] variable is a [Path] equal to this path.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Path) return false;
    Path path = other as Path;
    return (this.x == path.x) && (this.y == path.y) && (this.z == path.z);
  }

  /// Gets the string for this path in binary.
  String toString([int depth = maxDepth]) {
    StringBuffer str = new StringBuffer();
    str.write("[");
    for (int d = 0, x = 0; d < depth; d++, x++) {
      if (x == 4) {
        x = 0;
        str.write(" ");
      }
      int index = this.childIndexAt(d);
      str.write("$index");
    }
    str.write("]");
    return str.toString();
  }
}
