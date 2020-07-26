part of ThreeDart.Shapes;

/// The path to a node in the octree.
///
/// Path design:
/// - Depth zero will always return zero.
/// - The first depth is the first value.
/// - The path is integers where each bit indicates left/right, forward/backward,
///   and up/down in each component of the path.
/// - The path must work when transpiled into JS. 
class Path {
  /// The maximum allowed depth value.
  static const int maxDepth = 32;

  /// The maximum allowed value for any component, 2^31 - 1.
  static const int maxValue = 0xFFFFFFFF;

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
    final double scalar = (maxValue + 1) / maxCube.size;
    if (loc == null) return new Path._(0, 0, 0);
    return new Path(
      ((loc.x - maxCube.x) * scalar).round(),
      ((loc.y - maxCube.y) * scalar).round(),
      ((loc.z - maxCube.z) * scalar).round());
  }

  /// Constructs a path with the given coordinates and depth.
  factory Path(int x, int y, int z) =>
    new Path._(clamp(x), clamp(y), clamp(z));

  /// Internal constructor to assign final values.
  Path._(this.x, this.y, this.z);

  /// This gets a new path with the given depth changed to a different index.
  Path redirect(int index, int depth) {
    if ((depth <= 0) || (depth > maxDepth))
      throw new Exception("The depth must be between [1 and $maxDepth] when redirecting, it was $depth.");
    final int mask = 1 << (depth-1);
    final int notMask = mask-1;
    final int x = (this.x & notMask) | ((index & 1 != 0)? mask: 0);
    final int y = (this.y & notMask) | ((index & 2 != 0)? mask: 0);
    final int z = (this.z & notMask) | ((index & 4 != 0)? mask: 0);
    return new Path(x, y, z);
  }

  /// Determines the depth for the common path between this and the other path.
  /// If they are the same then maxDepth is returned.
  /// If there is no match between these paths 0 is returned.
  int commonDepth(Path other) {
    final int diff = (this.x ^ other.x) | (this.y ^ other.y) | (this.z ^ other.z);
    for (int d = 1, mask = 1; d <= maxDepth; d++, mask <<= 1) {
      if (diff & mask != 0) return d-1;
    }
    return maxDepth;
  }

  /// Determines if the two paths are the same upto and including the given depth.
  /// If depths is less than zero this will return true.
  bool sameUpto(Path other, int depth) {
    if ((depth < 0) || (depth > maxDepth))
      throw new Exception("The depth must be between [0 and $maxDepth] for sameUpto, it was $depth.");
    if (depth == 0) return true;
    final int diff = (this.x ^ other.x) | (this.y ^ other.y) | (this.z ^ other.z);
    final int notMask = (1 << depth) - 1;
    return diff & notMask == 0;
  }

  /// This gets the location this path is for in the given maximum cube.
  /// This does not take into account the depth.
  Math.Point3 location(Math.Cube maxCube) {
    final double scalar = maxCube.size / (maxValue + 1);
    return new Math.Point3(
      (this.x.toDouble() * scalar) + maxCube.x,
      (this.y.toDouble() * scalar) + maxCube.y,
      (this.z.toDouble() * scalar) + maxCube.z);
  }

  /// This gets the location this path is for in the given maximum cube.
  /// This does not take into account the depth.
  Math.Cube cube(Math.Cube maxCube, int depth) {
    if ((depth < 0) || (depth > maxDepth))
      throw new Exception("The depth must be between [0 and $maxDepth] for the cube, it was $depth.");
    if (depth == 0) return maxCube;
    final double scalar = maxCube.size / (maxValue + 1);
    final int mask = (1 << (depth-1)) - 1;
    final double x = ((this.x & mask).toDouble() * scalar) + maxCube.x;
    final double y = ((this.y & mask).toDouble() * scalar) + maxCube.y;
    final double z = ((this.z & mask).toDouble() * scalar) + maxCube.z;
    return new Math.Cube(x, y, z, maxCube.size / (depth + 1));
  }

  /// Gets the octree child index, 0 to 7, to take in this path at the given depth.
  int childIndexAt(int depth) {
    if ((depth < 0) || (depth > maxDepth))
      throw new Exception("The depth must be between [0 and $maxDepth] for the child index, it was $depth.");
    if (depth == 0) return 0;
    final int mask = 1 << (depth-1);
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
    depth = clamp(depth);
    for (int d = 1, x = 0; d <= depth; d++, x++) {
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
