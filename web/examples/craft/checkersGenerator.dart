part of craft;

/// The generator will initialize chunks to create a world flat test world covered
/// with a checkered pattern. The edges of the chunks can be highlighted.
class CheckersGenerator implements Generator {

  /// Indicates the edges of chunks should be highlighted with red.
  bool _highlightChunkEdges;

  /// The height to build the chunks up to.
  int _height;

  /// Creates a new generator for the given world.
  CheckersGenerator({bool highlightChunkEdges = true, int height = 10}):
    this._highlightChunkEdges = highlightChunkEdges,
    this._height = height;

  /// Fills the given chunk with data.
  void fillChunk(Chunk? chunk) {
    if (chunk == null) return;

    for (int x = 0; x < Constants.chunkSideSize; x++) {
      for (int z = 0; z < Constants.chunkSideSize; z++) {
        for (int y = 0; y < this._height; y++) {
          chunk.setBlock(x, y, z, this._getValue(x, y, z));
        }
      }
    }

    chunk.finishGenerate();
  }

  /// Determines the value to put into the given x, y, and z.
  int _getValue(int x, int y, int z) {
    if (this._highlightChunkEdges) {

      // Highlight the x and z is zero edge.
      if (x == 0 || z == 0)
        return (x == 0 && z == 0)? BlockType.YellowShine: BlockType.RedShine;

      // Indicate which side of the chunk the highlight is on.
      if (x == 1 && z == 1)
        return BlockType.RedShine;
    }

    return ((x+y+z)%2 == 0)? BlockType.BlackShine: BlockType.WhiteShine;
  }
}
