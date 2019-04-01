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

  /// Gets the x offset for this block in the world coordinates.
  int get worldX => this.x + this.chunkX;
  
  /// Gets the z offset for this block in the world coordinates.
  int get worldZ => this.z + this.chunkZ;

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
      chunkX += Constants.chunkSideSize;
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
      chunkX -= Constants.chunkSideSize;
      chunk = chunk?.left;
    }
    return new BlockInfo(x, this.y, this.z, chunkX, this.chunkZ, chunk);
  }

  /// Creates a new block info for the one to the front of this info.
  BlockInfo get front {
    int z = this.z + 1;
    int chunkZ = this.chunkZ;
    Chunk chunk = this.chunk;
    if (z >= Constants.chunkSideSize) {
      z = 0;
      chunkZ += Constants.chunkSideSize;
      chunk = chunk?.front;
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
      chunkZ -= Constants.chunkSideSize;
      chunk = chunk?.back;
    }
    return new BlockInfo(this.x, this.y, z, this.chunkX, chunkZ, chunk);
  }

  /// Creates a new block info for the one to the given region direction from this info.
  /// This only works for single direction component, no diagonals.
  BlockInfo neighbor(Math.HitRegion region) {
    if (region == Math.HitRegion.XNeg) return this.left;
    else if (region == Math.HitRegion.XPos) return this.right;
    else if (region == Math.HitRegion.YNeg) return this.below;
    else if (region == Math.HitRegion.YPos) return this.above;
    else if (region == Math.HitRegion.ZNeg) return this.back;
    else if (region == Math.HitRegion.ZPos) return this.front;
    else return null;
  }

  /// Gets the region for this info block.
  Math.Region3 get blockRegion => new Math.Region3(
    this.x.toDouble()+this.chunkX.toDouble(),
    this.y.toDouble(),
    this.z.toDouble()+this.chunkZ.toDouble(),
    1.0, 1.0, 1.0);

  /// Gets the neighbors which are solid.
  Math.HitRegion solidNeighbors() {
    Math.HitRegion neighbors = Math.HitRegion.None;

    BlockInfo info = this.left;
    if ((info != null) && BlockType.solid(info.value)) neighbors |= Math.HitRegion.XNeg;
    info = this.right;
    if ((info != null) && BlockType.solid(info.value)) neighbors |= Math.HitRegion.XPos;
   
    info = this.below;
    if ((info != null) && BlockType.solid(info.value)) neighbors |= Math.HitRegion.YNeg;
    info = this.above;
    if ((info != null) && BlockType.solid(info.value)) neighbors |= Math.HitRegion.YPos;
    
    info = this.back;
    if ((info != null) && BlockType.solid(info.value)) neighbors |= Math.HitRegion.ZNeg;
    info = this.front;
    if ((info != null) && BlockType.solid(info.value)) neighbors |= Math.HitRegion.ZPos;

    return neighbors;
  }
  

  /// Gets the block info string for debugging.
  @override
  String toString() => "$chunk.block($x, $y, $z, ($chunkX, $chunkZ), ${BlockType.string(value)})";

  /// Gets or sets the block value for this block.
  int get value => this.chunk?.getBlock(x, y, z) ?? ((y < 0)? BlockType.Boundary: BlockType.Air);
  void set value(int value) { this.chunk?.setBlock(x, y, z, value); }
}
