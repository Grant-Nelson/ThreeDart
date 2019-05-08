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

    // +----+----+----+----+
    // |    |    |    |    |  1
    // +----+----+----+----+
    // |    |    |    |    |  0
    // +----+----o----+----+----
    // |    |    |    |    | -1
    // +----+----+----+----+
    // |    |    |    |    | -2
    // +----+----+----+----+
    //   -2   -1 |  0    1

    if (this._isChunk(-2, 1)) this._sphere();
    if (this._isChunk(-1, 1)) this._pool();
    if (this._isChunk(0, 1)) this._walls();
    if (this._isChunk(1, 1)) this._platforms();
    if (this._isChunk(1, 0)) this._posts();
    if (this._isChunk(1, -1)) this._pillars();
    if (this._isChunk(-2, 0)) this._tunnels();
    if (this._isChunk(-2, -1)) this._narrows();
    if (this._isChunk(-2, -2)) this._pyramid();

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

  void _sphere() {
    int center = 8, size = 6, height = 17, size2 = size*size + 1;
    for (int x = -size; x <= size; x++) {
      for (int y = -size; y <= size; y++) {
        for (int z = -size; z <= size; z++) {
          if ((x*x + y*y + z*z) <= size2)
            this._curChunk.setBlock(center+x, height+y, center+z, BlockType.Sand);
        }
      }
    }
  }

  void _pool() {
    int lowest = 9;
    this._block(5, lowest, 3, 7, 2, 11);
    this._block(6, lowest+1, 4, 5, 1, 9, BlockType.Water);
  }

  void _walls() {
    const int offset = 2, length = 12, seperation = 4, height = 10, lowest = 10;
    this._block(offset, lowest, offset+seperation, length, height, 1);
    this._block(offset+seperation, lowest, offset, 1, height, length);
    this._block(offset, lowest, offset+seperation*2, length, height, 1);
    this._block(offset+seperation*2, lowest, offset, 1, height, length);
  }

  void _platforms() {
    const int offset = 2, size = 4, lowest = 10;
    void platform(int xScale, int zScale, int height) =>
      this._block(offset+size*xScale, lowest+height, offset+size*zScale, size, 1, size);

    platform(0, 0, 0);
    platform(0, 1, 1);
    platform(0, 2, 2);
    platform(1, 2, 3);
    platform(1, 1, 4);
    platform(1, 0, 5);

    platform(2, 0, 0);
    platform(2, 0, 2);
    platform(2, 1, 1);
    platform(2, 1, 3);
    platform(2, 2, 2);
    platform(2, 2, 4);
  }

  void _posts() {
    const int offset = 2, size = 4, lowest = 10;
    void pillar(int xScale, int zScale, int height) =>
      this._block(offset+size*xScale, lowest, offset+size*zScale, 1, height, 1);

    pillar(0, 0, 1);
    pillar(0, 1, 2);
    pillar(0, 2, 3);
    pillar(0, 3, 4);

    pillar(1, 0, 2);
    pillar(1, 1, 3);
    pillar(1, 2, 4);
    pillar(1, 3, 5);

    pillar(2, 0, 5);
    pillar(2, 1, 4);
    pillar(2, 2, 3);
    pillar(2, 3, 2);

    pillar(3, 0, 4);
    pillar(3, 1, 3);
    pillar(3, 2, 2);
    pillar(3, 3, 1);
  }

  void _pillars() {
    const int offset = 2, lowest = 10, width = 20, height = 8;
    for (int i = 0; i < width; i+=2) {
      for (int j = 0; j < width; j+=2) {
        this._block(offset+i, lowest, offset+j, 1, height, 1);
      }
    }
  }

  void _pyramid() {
    const int offset = 2, lowest = 10, height = 6;
    for (int i = 0; i < height; i++) {
      int size = Constants.chunkSideSize-(offset+i)*2+1;
      this._block(offset+i, lowest+i, offset+i, size, 1, size);
    }
  }

  void _tunnels() {
    const int offset = 2, height = 10, length = 12;
    for (int i = 0; i < 4; i++) {
      this._block(offset+1, height,     offset+i*3,   length, i+2, 1);
      this._block(offset+1, height+i+1, offset+i*3+1, length, 1,   2);
      this._block(offset+1, height,     offset+i*3+3, length, i+2, 1);
    }
  }

  void _narrows() {
    const int offset = 2, height = 10, length = 12;
    for (int i = 0; i < 6; i++) {
      this._block(offset+1, height,     offset+i*2,   length, i+2, 1);
      this._block(offset+1, height+i+1, offset+i*2+1, length, 1,   1);
      this._block(offset+1, height,     offset+i*2+2, length, i+2, 1);
    }
  }

  /// Determines if this chunk is the specified chunk with x and z scalars.
  bool _isChunk(int x, int z) =>
    (this._curChunk.x == x*Constants.chunkSideSize) &&
    (this._curChunk.z == z*Constants.chunkSideSize);

  /// Adds a platform to the current chunk in the current location.
  void _block(int offsetX, int offsetY, int offsetZ, int xSize, int ySize, int zSize, [int type = BlockType.Brick]) {
    for (int x = 0; x < xSize; x++) {
      for (int y = 0; y < ySize; y++) {
        for (int z = 0; z < zSize; z++) {
          this._curChunk.setBlock(offsetX+x, offsetY+y, offsetZ+z, type);
        }
      }
    }
  }
}
