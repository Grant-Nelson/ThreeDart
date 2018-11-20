part of craft;

/// Information about a single block of information.
class BlockInfo {

  /// The block's x offset local to the chunk.
  final int x;

  /// The block's y offset local to the chunk.
  final int y;

  /// The block's z offset local to the chunk.
  final int z;

  /// The x location this chunk is at in the world.
  /// This is given even if [chunk] is null.
  final int chunkX;

  /// The y location this chunk is at in the world.
  /// This is given even if [chunk] is null.
  final int chunkZ;

  /// The chunk this block belongs to or null if the chunk doesn't exist.
  final Chunk chunk;

  /// Creates a new block info.
  BlockInfo(this.x, this.y, this.z, this.chunkX, this.chunkZ, this.chunk);

  /// Creates a new block info for the one above the given non-null info.
  factory BlockInfo.above(BlockInfo info) =>
    new BlockInfo(info.x, info.y+1, info.z, info.chunkX, info.chunkZ, info.chunk);

  /// Creates a new block info for the one below the given non-null info.
  factory BlockInfo.below(BlockInfo info) =>
    new BlockInfo(info.x, info.y-1, info.z, info.chunkX, info.chunkZ, info.chunk);

  /// Gets the block info string for debugging.
  @override
  String toString() => "$chunk.block($x, $y, $z, ($chunkX, $chunkZ), ${BlockType.string(value)})";

  /// Gets or sets the block value for this block.
  int get value => this.chunk?.getBlock(x, y, z) ?? ((y < 0)? BlockType.Boundary: BlockType.Air);
  void set value(int value) { this.chunk?.setBlock(x, y, z, value); }
}

/// Block information result from finding a neighboring block info.
class NeighborBlockInfo {

  /// The neighboring block information.
  final BlockInfo info;

  /// The direction this neighbor was from the other block.
  /// Will be only XNeg, XPos, YNeg, YPos, ZNeg, or ZPos.
  final Math.HitRegion region;

  /// Creates a new neighbor block info result.
  NeighborBlockInfo(this.info, this.region);
}
