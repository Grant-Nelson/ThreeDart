part of ThreeDart.Shapes;

/// The path to a node in the octree.
class Path {
  /// The maximum allowed depth value.
  static const int maxDepth = 31;

  /// The maximum allowed value for any component, 2^32 - 1.
  static const int maxValue = 4294967295;

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

  /// Determines the common path between this and the other path.
  Path common(Path other) {
    int diff = (this.x ^ other.x) | (this.y ^ other.y) | (this.z ^ other.z);
    int fullMask = 0x00;
    for (int d = 0, mask = 0x01; d < maxDepth; d++, mask <<= 1) {
      if (diff & mask != 0x00) break;
      fullMask |= mask;
    }
    return new Path(this.x & fullMask, this.y & fullMask, this.z & fullMask);
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
    int mask = 1 << depth;
    int childIndex = 0;
    if (this.x & mask != 0x00) childIndex |= 1;
    if (this.y & mask != 0x00) childIndex |= 2;
    if (this.z & mask != 0x00) childIndex |= 4;
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
    StringBuffer xstr = new StringBuffer();
    StringBuffer ystr = new StringBuffer();
    StringBuffer zstr = new StringBuffer();
    for (int d = 0, x = 0, mask = 0x01; d < depth; d++, x++, mask <<= 1) {
      if (x == 4) {
        x = 0;
        xstr.write(" ");
        ystr.write(" ");
        zstr.write(" ");
      }
      xstr.write((this.x & mask != 0x00)? "1": "0");
      ystr.write((this.y & mask != 0x00)? "1": "0");
      zstr.write((this.z & mask != 0x00)? "1": "0");
    }
    return "[${xstr.toString()}, ${ystr.toString()}, ${zstr.toString()}]";
  }
}
