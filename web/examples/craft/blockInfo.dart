part of craft;

class BlockInfo {
  final int x;
  final int y;
  final int z;
  final Chunk chunk;

  BlockInfo(this.x, this.y, this.z, this.chunk);

  @override
  String toString() => "$chunk.block($x, $y, $z, ${BlockType.string(value)})";

  int get value =>
    this.chunk?.getBlock(x, y, z) ?? ((y < 0)? BlockType.Boundary: BlockType.Air);
  void set value(int value) { this.chunk?.setBlock(x, y, z, value); }
}