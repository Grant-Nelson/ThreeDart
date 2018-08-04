part of craft;

class BlockInfo {
  final int x;
  final int y;
  final int z;
  final int chunkX;
  final int chunkZ;
  final Chunk chunk;

  BlockInfo(this.x, this.y, this.z, this.chunkX, this.chunkZ, this.chunk);

  @override
  String toString() => "$chunk.block($x, $y, $z, ($chunkX, $chunkZ), ${BlockType.string(value)})";

  int get value =>
    this.chunk?.getBlock(x, y, z) ?? ((y < 0)? BlockType.Boundary: BlockType.Air);
  void set value(int value) { this.chunk?.setBlock(x, y, z, value); }
}

class NeighborBlockInfo {
  final BlockInfo info;
  final Math.HitRegion region;

  NeighborBlockInfo(this.info, this.region);
}
