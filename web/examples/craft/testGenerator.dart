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

    if (this._isChunk(0, 1)) this._walls();
    if (this._isChunk(1, 1)) this._platforms();

    chunk.finishGenerate();
  }

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

  void _walls() {
    const int offset = 2;
    const int length = 12;
    const int seperation = 4;
    const int height = 10;
    const int lowest = 10;

    this._block(offset, lowest, offset+seperation, length, height, 1);
    this._block(offset+seperation, lowest, offset, 1, height, length);
    this._block(offset, lowest, offset+seperation*2, length, height, 1);
    this._block(offset+seperation*2, lowest, offset, 1, height, length);
  }

  void _platforms() {
    const int offset = 2;
    const int size = 4;
    const int lowest = 10;

    void platform(int xScale, int zScale, int height) =>
      this._block(offset+size*xScale, lowest+height, offset+size*zScale, size, 1, size);

    platform(0, 0, 0);
    platform(0, 1, 1);
    platform(1, 0, 2);
    platform(1, 1, 3);
    platform(1, 1, 3);
    platform(0, 2, 2);
    platform(0, 2, 0);
    platform(1, 2, 3);
    platform(1, 2, 1);
  }

  bool _isChunk(int x, int z) =>
    (this._curChunk.x == x*Constants.chunkSideSize) &&
    (this._curChunk.z == z*Constants.chunkSideSize);

  /// Adds a platform to the current chunk in the current location.
  void _block(int offsetX, int offsetY, int offsetZ, int xSize, int ySize, int zSize) {
    for (int x = 0; x < xSize; x++) {
      for (int y = 0; y < ySize; y++) {
        for (int z = 0; z < zSize; z++) {
          this._curChunk.setBlock(offsetX+x, offsetY+y, offsetZ+z, BlockType.Brick);
        }
      }
    }
  }
}
