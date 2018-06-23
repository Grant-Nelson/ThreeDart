part of example1;

class Generator {
  World _world;
  simplex.OpenSimplexNoise _noise;

  Generator(this._world) {
    this._noise = new simplex.OpenSimplexNoise();
  }

  void fillWorld() {
    this._addPyramid();
    for (Chunk chunk in this._world._chunks) {
      this._turrainChunk(chunk);
    }
    for (Chunk chunk in this._world._chunks) {
      this._applyWaterChunk(chunk);
    }
    for (Chunk chunk in this._world._chunks) {
      this._trees(chunk);
    }
    this._add3Dart(-10, 30, -20);
  }

  double eval2D(Chunk chunk, int x, int z, double scale) => 
    this._noise.eval2D((x + chunk.x)*scale, (z + chunk.z)*scale)*0.5 + 0.5;

  int _findGround(Chunk chunk, int x, int z) {
    for (int y = Chunk.ySize-1; y >= 0; y--) {
      int value = chunk.getBlock(x, y, z);
      if (value == BlockType.Turf || value == BlockType.DryLeaves || value == BlockType.Sand) {
        return y;
      }
    }
    return 0;
  }

  void _turrainChunk(Chunk chunk) {
    for (int x = 0; x < Chunk.xSize; x++) {
      for (int z = 0; z < Chunk.zSize; z++) {
        this._turrainBlock(chunk, x, z);
      }
    }
  }

  void _turrainBlock(Chunk chunk, int x, int z) {
    double terrain = 0.6 * this.eval2D(chunk, x, z, 0.001) +
                     0.3 * this.eval2D(chunk, x, z, 0.01) +
                     0.1 * this.eval2D(chunk, x, z, 0.1);
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

  void _applyWaterChunk(Chunk chunk) {
    for (int x = 0; x < Chunk.xSize; x++) {
      for (int z = 0; z < Chunk.zSize; z++) {
        this._applyWaterBlock(chunk, x, z);
      }
    }
  }

  void _applyWaterBlock(Chunk chunk, int x, int z) {
    const int depth = 8;
    int maxy = this._findGround(chunk, x, z);
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

  void _trees(Chunk chunk) {
    for (int x = 0; x < Chunk.xSize; x++) {
      for (int z = 0; z < Chunk.zSize; z++) {
        if (this.eval2D(chunk, x, z, 1.5) < 0.1)
          this._addTree(chunk, x, z);
      }
    }
  }
    
  void _addTree(Chunk chunk, int x, int z) {
    int maxy = this._findGround(chunk, x, z);
    int value = chunk.getBlock(x, maxy, z);
    if (value != BlockType.Turf && value != BlockType.DryLeaves) return;

    for (int y = 1; y < 8; y++) {
      chunk.setBlock(x, maxy + y, z, BlockType.Trunk);
    }

    _addTreeBase(chunk, x, z);
    _addTreeLeaves(chunk, x, maxy + 8, z);
  }

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

  void _addPyramid() {
    int height = 30;
    for (int py = height; py >= 0; py--) {
      int width = (height-py)+3;
      for (int px = -width; px <= width; px++) {
        for (int pz = -width; pz <= width; pz++) {
          this._world.getBlock(px.toDouble(), py.toDouble(), pz.toDouble()).value = BlockType.Brick;
        }
      }
    }
  }

  void _add3Dart(int x, int y, int z) {
    var put = (int value, int dx, int dy, List<int> px, List<int> py) {
      for (int i = px.length -1; i >= 0; i--) {
        this._world.getBlock((x+dx+px[i]).toDouble(), (y+dy-py[i]).toDouble(), z.toDouble()).value = value;
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

}