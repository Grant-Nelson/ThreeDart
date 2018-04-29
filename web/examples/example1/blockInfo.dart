part of example1;

class BlockInfo {
  final int x;
  final int y;
  final int z;
  final Chunk chunk;
  final int value;

  BlockInfo(this.x, this.y, this.z, this.chunk, this.value);

  @override
  String toString() => "$chunk.block($x, $y, $z, ${BlockType.string(value)})";
}