part of craft;

/// The generator will initialize chunks to create a world test world,
/// for cehcking collision detection, block selection and replacement, and more.
class TestGenerator implements Generator {
  
  /// The current chunk that is being worked on.
  Chunk _curChunk;

  /// Creates a new generator for the given world.
  TestGenerator() {
    this._curChunk = null;
  }

  /// Fills the given chunk with data.
  void fillChunk(Chunk chunk) {
    if (chunk == null) return;
    this._curChunk = chunk;

    this._default();

    if (this._isChunk(1, 1)) this._verticals();

    chunk.finishGenerate();
  }

  bool _isChunk(int x, int z) =>
    (this._curChunk.x == x*Constants.chunkSideSize) &&
    (this._curChunk.z == z*Constants.chunkSideSize);

  void _default() {
    const int rockHeight = 8;
    const int dirtHeight = 9;
    const int turfY = 9;

    for (int x = 0; x < Constants.chunkSideSize; x++) {
      for (int z = 0; z < Constants.chunkSideSize; z++) {
        for (int y = 0; y < rockHeight; y++)
          this._curChunk.setBlock(x, y, z, BlockType.Rock);

        for (int y = rockHeight; y < dirtHeight; y++)
          this._curChunk.setBlock(x, y, z, BlockType.Dirt);

        if (x == 0 || z == 0) {
          this._curChunk.setBlock(x, turfY, z, BlockType.BlackShine);
        } else if (x == 1 && z == 1) {
          this._curChunk.setBlock(x, turfY, z, BlockType.RedShine);
        } else {
          this._curChunk.setBlock(x, turfY, z, BlockType.Turf);
        }
      }
    }
  }

  /// Adds a platform to the current chunk in the current location.
  void _platform(int offsetX, int offsetZ, int xSize, int zSize, int height) {
    for (int x = 0; x < xSize; x++) {
      for (int z = 0; z < zSize; z++) {
        this._curChunk.setBlock(offsetX+x, height, offsetZ+z, BlockType.Brick);
      }
    }
  }

  void _verticals() {
    const int offset = 2;
    const int size = 4;
    const int lowest = 10;
    this._platform(offset, offset, size, size, lowest);
    this._platform(offset, offset+size, size, size, lowest+1);
    this._platform(offset, offset+size*2, size, size, lowest+2);
    this._platform(offset+size, offset, size, size, lowest+2);
    this._platform(offset+size, offset+size, size, size, lowest+3);
  }
}
