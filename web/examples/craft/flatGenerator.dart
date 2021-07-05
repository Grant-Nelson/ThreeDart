part of craft;

/// The generator will initialize chunks to create a world flat grass world.
class FlatGenerator implements Generator {

  /// The height to build the rock up to.
  int _rockHeight;

  /// The height to build the dirt up to.
  /// If this is less than the rock height no dirt will be added.
  int _dirtHeight;

  /// Creates a new generator for the given world.
  FlatGenerator([int rockHeight = 8, int dirtHeight = 9]):
    this._rockHeight = rockHeight,
    this._dirtHeight = dirtHeight;

  /// Fills the given chunk with data.
  void fillChunk(Chunk? chunk) {
    if (chunk == null) return;

    int turfY = math.max(this._rockHeight, this._dirtHeight);
    for (int x = 0; x < Constants.chunkSideSize; x++) {
      for (int z = 0; z < Constants.chunkSideSize; z++) {
        for (int y = 0; y < this._rockHeight; y++)
          chunk.setBlock(x, y, z, BlockType.Rock);
        for (int y = this._rockHeight; y < this._dirtHeight; y++)
          chunk.setBlock(x, y, z, BlockType.Dirt);
        chunk.setBlock(x, turfY, z, BlockType.Turf);
      }
    }

    chunk.finishGenerate();
  }
}
