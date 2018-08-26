part of craft;

/// The generator will initialize chunks to create the world.
class Generator {

  /// The world to generate.
  World _world;

  /// The noise generator for the world.
  simplex.OpenSimplexNoise _simplex;

  /// Creates a new generator for the given world.
  Generator(this._world, [int seed = 0]) {
    this._simplex = new simplex.OpenSimplexNoise(seed);
  }

  /// Fills all the current chunks with data.
  Future fillWorld() async {
    this._addPyramid();
    for (Chunk chunk in this._world._chunks) {
      await this._turrainChunk(chunk);
    }
    for (Chunk chunk in this._world._chunks) {
      await this._applyWaterChunk(chunk);
    }
    for (Chunk chunk in this._world._chunks) {
      await this._trees(chunk);
    }
    for (Chunk chunk in this._world._chunks) {
      await this._plants(chunk);
    }
    await this._add3Dart(-12, 40, -15);
    await this._towerOfPimps(0, 2, 0);
  }

  /// Sets a location anywhere in the world with the given block value.
  void _set(int x, int y, int z, int value) {
    this._world.getBlock(x.toDouble(), y.toDouble(), z.toDouble()).value = value;
  }

  /// Get the scaled 2D noise offset for the given chunk.
  double _noise(Chunk chunk, int x, int z, double scale) =>
    this._simplex.eval2D((x + chunk.x)*scale, (z + chunk.z)*scale)*0.5 + 0.5;

  /// Applies the turrain (turf, dirt, and rock) to the given chunk.
  Future _turrainChunk(Chunk chunk) async {
    for (int x = 0; x < Chunk.xSize; x++) {
      for (int z = 0; z < Chunk.zSize; z++) {
        this._turrainBlock(chunk, x, z);
      }
    }
  }

  /// Determines the turrain blocks for the column in the current chunk.
  void _turrainBlock(Chunk chunk, int x, int z) {
    double terrain = 0.6 * this._noise(chunk, x, z, 0.001) +
                     0.3 * this._noise(chunk, x, z, 0.01) +
                     0.1 * this._noise(chunk, x, z, 0.1);
    int maxy = (math.pow(terrain, 2.0)*Chunk.ySize).toInt();
    maxy = (maxy >= Chunk.ySize)? Chunk.ySize-1: maxy;

    for (int y = 0; y <= maxy; y++) {
      if (chunk.getBlock(x, y, z) == BlockType.Air) {
        int block = BlockType.Rock;
        if (maxy == y) {
          block = BlockType.Turf;
        } else if (maxy - 1 == y) {
          block = BlockType.Dirt;
        }
        chunk.setBlock(x, y, z, block);
      }
    }
  }

  /// Applies the water and sand for the given chunk.
  Future _applyWaterChunk(Chunk chunk) async {
    for (int x = 0; x < Chunk.xSize; x++) {
      for (int z = 0; z < Chunk.zSize; z++) {
        this._applyWaterBlock(chunk, x, z);
      }
    }
  }

  /// Determines the water blocks for a column and any surrounding sand blocks.
  void _applyWaterBlock(Chunk chunk, int x, int z) {
    const int depth = 8;
    int maxy = chunk.topHit(x, z, 0);
    if (maxy < depth) {
      for (int y = depth; y > maxy; y--) {
        chunk.setBlock(x, y, z, BlockType.Water);
      }

      for (int y = depth+2; y > maxy-2; y--) {
        for (int dx = -1; dx <= 1; dx++) {
          for (int dz = -1; dz <= 1; dz++) {
            int value = chunk.getBlock(x+dx, y, z+dz);
            if (value == BlockType.Turf || value == BlockType.DryLeaves) {
              chunk.setBlock(x+dx, y, z+dz, BlockType.Sand);
            }
          }
        }
      }
    }
  }

  /// Determines the trees for the given chunk.
  /// The leaves will hang over into neighbor chunks.
  Future _trees(Chunk chunk) async {
    for (int x = 0; x < Chunk.xSize; x++) {
      for (int z = 0; z < Chunk.zSize; z++) {
        if (this._noise(chunk, x, z, 1.5) < 0.1)
          this._addTree(chunk, x, z);
      }
    }
  }

  /// Adds a tree at the given [x] and [z] to this chunk.
  void _addTree(Chunk chunk, int x, int z) {
    int maxy = chunk.topHit(x, z, 0);
    int value = chunk.getBlock(x, maxy, z);
    if (value != BlockType.Turf && value != BlockType.DryLeaves) return;

    for (int y = 1; y < 8; y++) {
      chunk.setBlock(x, maxy + y, z, BlockType.TrunkUD);
    }

    _addTreeBase(chunk, x, z);
    _addTreeLeaves(chunk, x, maxy + 8, z);
  }

  /// Adds the base of a tree to the given [x] and [z] to this chunk.
  void _addTreeBase(Chunk chunk, int x, int z) {
    for (int px = -3; px <= 3; px++) {
      for (int pz = -3; pz <= 3; pz++) {
        if ((px * px + pz * pz) <= 10) {
          for (int y = Chunk.ySize-1; y >= 0; y--) {
            if (chunk.getBlock(x+px, y, z+pz) == BlockType.Turf) {
              chunk.setBlock(x+px, y, z+pz, BlockType.DryLeaves);
              break;
            }
          }
        }
      }
    }
  }

  /// Adds the leaves of a tree to the given [x] and [z] to this chunk.
  void _addTreeLeaves(Chunk chunk, int x, int y, int z) {
    for (int px = -3; px <= 3; px++) {
      for (int py = -3; py <= 3; py++) {
        for (int pz = -3; pz <= 3; pz++) {
          if ((px * px + py * py + pz * pz) <= 16) {
            if (chunk.getBlock(x+px, y+py, z+pz) == BlockType.Air) {
              chunk.setBlock(x+px, y+py, z+pz, BlockType.Leaves);
            }
          }
        }
      }
    }
  }

  /// Adds plants to the given chunk.
  Future _plants(Chunk chunk) async {
    for (int x = 0; x < Chunk.xSize; x++) {
      for (int z = 0; z < Chunk.zSize; z++) {
        if (this._noise(chunk, x, z, 12.5) < 0.1)
          this._addPlant(chunk, x, z, BlockType.RedFlower);
        else if (this._noise(chunk, x+400, z, 12.5) < 0.1)
          this._addPlant(chunk, x, z, BlockType.BlueFlower);
        else if (this._noise(chunk, x, z+400, 12.5) < 0.1)
          this._addPlant(chunk, x, z, BlockType.WhiteFlower);
        else if (this._noise(chunk, x+400, z+400, 12.5) < 0.15)
          this._addPlant(chunk, x, z, BlockType.Grass);
        else if (this._noise(chunk, x-400, z, 12.5) < 0.1)
          this._addPlant(chunk, x, z, BlockType.Fern);
        else if (this._noise(chunk, x, z-400, 12.5) < 0.08)
          this._addPlant(chunk, x, z, BlockType.Mushroom);
      }
    }
  }

  /// Adds a plant to the given chain.
  void _addPlant(Chunk chunk, int x, int z, int value) {
    int maxy = chunk.topHit(x, z, 0);
    int oldValue = chunk.getBlock(x, maxy, z);
    if (oldValue != BlockType.Turf && oldValue != BlockType.DryLeaves) return;
    chunk.setBlock(x, maxy+1, z, value);
  }

  /// Adds the pyramid to the center of the world.
  Future _addPyramid() async {
    int height = 30;
    for (int py = height; py >= 0; py-=2) {
      int width = (height-py)+3;
      for (int px = -width; px <= width; px++) {
        for (int pz = -width; pz <= width; pz++) {
          this._set(px, py, pz, BlockType.WhiteShine);
          this._set(px, py-1, pz, BlockType.WhiteShine);
        }
      }

      for (int pw = -2; pw <= 2; pw++) {
          this._set(-width-1, py, pw, BlockType.Brick);
          this._set(-width-1, py-1, pw, BlockType.Brick);
          this._set(-width-2, py-1, pw, BlockType.Brick);

          this._set(width+1, py, pw, BlockType.Brick);
          this._set(width+1, py-1, pw, BlockType.Brick);
          this._set(width+2, py-1, pw, BlockType.Brick);

          this._set(pw, py, -width-1, BlockType.Brick);
          this._set(pw, py-1, -width-1, BlockType.Brick);
          this._set(pw, py-1, -width-2, BlockType.Brick);

          this._set(pw, py, width+1, BlockType.Brick);
          this._set(pw, py-1, width+1, BlockType.Brick);
          this._set(pw, py-1, width+2, BlockType.Brick);
      }

      this._set(-width-1, py+1, 2, BlockType.Brick);
      this._set(-width-2, py, 2, BlockType.Brick);
      this._set(-width-1, py+1, -2, BlockType.Brick);
      this._set(-width-2, py, -2, BlockType.Brick);

      this._set(width+1, py+1, 2, BlockType.Brick);
      this._set(width+2, py, 2, BlockType.Brick);
      this._set(width+1, py+1, -2, BlockType.Brick);
      this._set(width+2, py, -2, BlockType.Brick);

      this._set(2, py+1, -width-1, BlockType.Brick);
      this._set(2, py, -width-2, BlockType.Brick);
      this._set(-2, py+1, -width-1, BlockType.Brick);
      this._set(-2, py, -width-2, BlockType.Brick);

      this._set(2, py+1, width+1, BlockType.Brick);
      this._set(2, py, width+2, BlockType.Brick);
      this._set(-2, py+1, width+1, BlockType.Brick);
      this._set(-2, py, width+2, BlockType.Brick);
    }
  }


  /// Adds the 3Dart text to the world.
  Future _add3Dart(int x, int y, int z) async {
    var put = (int value, int dx, int dy, List<int> px, List<int> py) {
      for (int i = px.length -1; i >= 0; i--) {
        this._set(x+dx+px[i], y+dy-py[i], z, value);
      }
    };

    put(BlockType.RedShine, 0, 0, // 3
      [0, 1, 2, 3, 4, 4, 3, 2, 4, 4, 3, 2, 1, 0],
      [1, 0, 0, 0, 1, 2, 3, 3, 4, 5, 6, 6, 6, 5]);
    put(BlockType.RedShine, 6, 0, // D
      [0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 2, 3, 4, 5, 6, 6, 6, 5, 4, 3, 2, 1]);
    put(BlockType.BlackShine, 12, 0, // A
      [0, 0, 0, 0, 0, 1, 2, 1, 2, 3, 3, 3, 3, 3],
      [2, 3, 4, 5, 6, 1, 1, 4, 4, 2, 3, 4, 5, 6]);
    put(BlockType.BlackShine, 17, 0, // R
      [0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 3, 3, 3, 3],
      [1, 2, 3, 4, 5, 6, 1, 1, 4, 4, 2, 3, 5, 6]);
    put(BlockType.BlackShine, 22, 0, // T
      [0, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 3, 4, 5, 6]);
  }

  /// Adds the RT tribute, "the tower of pimps", to the world.
  Future _towerOfPimps(int x, int y, int z) async {
    final int width = 3, height = 7;
    for (int px = -width; px <= width; px++) {
      for (int py = 0; py <= height; py++) {
        for (int pz = -width; pz <= width; pz++) {
          this._set(x + px, y + py, z + pz, BlockType.Air);
        }
      }
    }

    this._set(x, y,   z, BlockType.BlackShine);
    this._set(x, y+1, z, BlockType.YellowShine);
    this._set(x, y+2, z, BlockType.YellowShine);
    this._set(x, y+3, z, BlockType.YellowShine);
    this._set(x, y+4, z, BlockType.YellowShine);
  }
}
