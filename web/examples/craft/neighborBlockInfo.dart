part of craft;

/// A callback for handling the block information while traversing neighbors.
/// Return true to stop and return this info, false to continue.
typedef bool HandleTraverseNeighbor(NeighborBlockInfo info);

/// Block information result from finding a neighboring block info.
class NeighborBlockInfo {

  /// The neighboring block information.
  final BlockInfo info;

  /// The direction this neighbor was from the other block.
  /// Will be only XNeg, XPos, YNeg, YPos, ZNeg, or ZPos.
  final Math.HitRegion region;

  /// The vector that is being traversed neighbor by neighbor.
  final Math.Ray3 ray;

  /// The count for the number of neighbors which have been traversed.
  final int depth;

  /// Creates a new neighbor block info result.
  NeighborBlockInfo(this.info, this.region, this.ray, this.depth);

  /// Gets the string for this neighbor block info.
  @override
  String toString() =>
    "NeighborBlockInfo($info, $region, $ray, $depth)";
}
