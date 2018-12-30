part of craft;

/// Information about a single block of information.
class BlockInfo {

  /// The block's x offset local to the chunk.
  /// This value is [0..chunkSideSize).
  final int x;

  /// The block's y offset local to the chunk.
  /// This value is [0..chunkSideSize).
  final int y;

  /// The block's z offset local to the chunk.
  /// This value is [0..chunkSideSize).
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

  /// Creates a new block info for the one above this info.
  BlockInfo get above =>
    new BlockInfo(this.x, this.y+1, this.z, this.chunkX, this.chunkZ, this.chunk);

  /// Creates a new block info for the one below this info.
  BlockInfo get below =>
    new BlockInfo(this.x, this.y-1, this.z, this.chunkX, this.chunkZ, this.chunk);

  /// Creates a new block info for the one to the right of this info.
  BlockInfo get right {
    int x = this.x + 1;
    int chunkX = this.chunkX;
    Chunk chunk = this.chunk;
    if (x >= Constants.chunkSideSize) {
      x = 0;
      chunkX++;
      chunk = chunk?.right;
    }
    return new BlockInfo(x, this.y, this.z, chunkX, this.chunkZ, chunk);
  }

  /// Creates a new block info for the one to the left of this info.
  BlockInfo get left {
    int x = this.x - 1;
    int chunkX = this.chunkX;
    Chunk chunk = this.chunk;
    if (x < 0) {
      x = Constants.chunkSideSize-1;
      chunkX--;
      chunk = chunk?.left;
    }
    return new BlockInfo(x, this.y, this.z, chunkX, this.chunkZ, chunk);
  }

  /// Creates a new block info for the one to the front of this info.
  BlockInfo get front {
    int z = this.z + 1;
    int chunkZ = this.chunkX;
    Chunk chunk = this.chunk;
    if (z >= Constants.chunkSideSize) {
      z = 0;
      chunkZ++;
      chunk = chunk?.right;
    }
    return new BlockInfo(this.x, this.y, z, this.chunkX, chunkZ, chunk);
  }
  
  /// Creates a new block info for the one to the back of this info.
  BlockInfo get back {
    int z = this.z - 1;
    int chunkZ = this.chunkZ;
    Chunk chunk = this.chunk;
    if (z < 0) {
      z = Constants.chunkSideSize-1;
      chunkZ--;
      chunk = chunk?.left;
    }
    return new BlockInfo(this.x, this.y, z, this.chunkX, chunkZ, chunk);
  }

  /// Gets the region for this info block.
  Math.Region3 get blockRegion => new Math.Region3(
    this.x.toDouble()+this.chunkX.toDouble(),
    this.y.toDouble(),
    this.z.toDouble()+this.chunkZ.toDouble(),
    1.0, 1.0, 1.0);

  /// Gets the block info string for debugging.
  @override
  String toString() => "$chunk.block($x, $y, $z, ($chunkX, $chunkZ), ${BlockType.string(value)})";

  /// Gets or sets the block value for this block.
  int get value => this.chunk?.getBlock(x, y, z) ?? ((y < 0)? BlockType.Boundary: BlockType.Air);
  void set value(int value) { this.chunk?.setBlock(x, y, z, value); }
}
