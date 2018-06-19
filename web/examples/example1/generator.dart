part of example1;

class Generator {
  simplex.OpenSimplexNoise _noise;

  Generator() {
    this._noise = new simplex.OpenSimplexNoise();
  }

  void fillChunk(Chunk chunk) {
    this._turrainChunk(chunk);
    this._trees(chunk);
  }

  void _turrainChunk(Chunk chunk) {
    for (int x = 0; x < Chunk.xSize; x++) {
      for (int z = 0; z < Chunk.zSize; z++) {
        this._turrainBlock(chunk, x, z);
      }
    }
  }

  void _turrainBlock(Chunk chunk, int x, int z) {
    double dx = (x + chunk.x) *0.01;
    double dz = (z + chunk.z) *0.01;

    double terrain = 0.6 * (this._noise.eval2D(dx* 0.1, dz* 0.1)*0.5 + 0.5) +
                      0.3 * (this._noise.eval2D(dx,      dz     )*0.5 + 0.5) +
                      0.1 * (this._noise.eval2D(dx*10.0, dz*10.0)*0.5 + 0.5);

    int maxy = (math.pow(terrain, 2.0)*Chunk.ySize).toInt();
    maxy = (maxy >= Chunk.ySize)? Chunk.ySize-1: maxy;

    for (int y = 9; y > maxy; y--) {
      chunk.setBlock(x, y, z, BlockType.Water);
    }

    for (int y = 0; y <= maxy; y++) {
      int block = BlockType.Rock;
      if (maxy == y) {
        if (maxy <= 8) block = BlockType.Sand;
        else block = BlockType.Turf;
      } else if (maxy - 1 == y) {
        if (maxy <= 8) block = BlockType.Sand;
        else block = BlockType.Dirt;
      }

      chunk.setBlock(x, y, z, block);
    }
  }

  void _trees(Chunk chunk) {
    for (int x = 0; x < Chunk.xSize; x++) {
      for (int z = 0; z < Chunk.zSize; z++) {
        double dx = (x + chunk.x) *0.01;
        double dz = (z + chunk.z) *0.01;
        if ((this._noise.eval2D(dx*150.0, dz*150.0)*0.5 + 0.5) < 0.1) {
            this._addTree(chunk, x, z);
        }
      }
    }
  }
    
  void _addTree(Chunk chunk, int x, int z) {
    int maxy = 8;
    for (int y = Chunk.ySize-1; y >= 0; y--) {
      int value = chunk.getBlock(x, y, z);
      if (value == BlockType.Turf || value == BlockType.DryLeaves) {
        maxy = y;
        break;
      }
    }

    for (int y = 1; y < 8; y++) {
      chunk.setBlock(x, maxy+y, z, BlockType.Trunk);
    }

    for (int px = x-3; px <= x+3; px++) {
      if (px >= 0 && px < Chunk.xSize) {
        for (int pz = z-3; pz <= z+3; pz++) {
          if (pz >= 0 && pz < Chunk.zSize) {

            for (int y = Chunk.ySize-1; y >= 0; y--) {
              if (chunk.getBlock(px, y, pz) == BlockType.Turf) {
                chunk.setBlock(px, y, pz, BlockType.DryLeaves);
                break;
              }
            }

          }
        }
      }
    }
  }

}