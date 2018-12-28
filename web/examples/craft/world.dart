part of craft;

/// Defines the world shown in 3Dart craft.
class World {
  Materials _mats;
  Generator _gen;
  List<Chunk> _graveyard;
  List<Chunk> _chunks;
  List<ThreeDart.Entity> _entities;
  Player _player;
  Chunk _lastChunk;

  /// Creates a new world with the given materials.
  World(this._mats, this._gen) {
    this._graveyard = new List<Chunk>();
    this._chunks = new List<Chunk>();
    this._entities = new List<ThreeDart.Entity>();
    this._lastChunk = null;

    if (this._mats != null) {
      for (Techniques.MaterialLight tech in this._mats.materials)
        this.entities.add(new ThreeDart.Entity(tech: tech));
    }

    // Pre-allocate several chunks into the graveyard.
    for (int i = 0; i < Constants.initialGraveyardSize; i++)
      this._graveyard.add(new Chunk(this));

    // Preinitialize the starting part of the world.
    for (int x = -Constants.initChunkDist; x < Constants.initChunkDist; x += Constants.chunkSideSize) {
      for (int z = -Constants.initChunkDist; z < Constants.initChunkDist; z += Constants.chunkSideSize) {
        this._gen.fillChunk(this._prepareChunk(x, z));
      }
    }
  }

  /// Gets the random noise generator for this world.
  Generator get generator => this._gen;

  /// Gets the materials for this world.
  Materials get materials => this._mats;

  /// Gets all the entities for the world.
  /// These is an entity for each material in the world.
  List<ThreeDart.Entity> get entities => this._entities;

  /// Gets or sets the player which is playing in this worls.
  Player get player => this._player;
  set player(Player player) => this._player = player;

  /// Finds a chunk with the specific given [x] and [z].
  /// Returns null if no chunk for that location is found.
  Chunk findChunk(int x, int z) {
    for (Chunk chunk in this._chunks) {
      if ((chunk.x == x) && (chunk.z == z)) return chunk;
    }
    return null;
  }

  /// Gets the block closest to thie given location.
  BlockInfo getBlock(double x, double y, double z) {
    int tx = x.floor();
    int ty = y.floor();
    int tz = z.floor();

    int cx = (tx < 0)? tx - Constants.chunkSideSize + 1: tx;
    int cz = (tz < 0)? tz - Constants.chunkSideSize + 1: tz;
    cx = (cx ~/ Constants.chunkSideSize) * Constants.chunkSideSize;
    cz = (cz ~/ Constants.chunkSideSize) * Constants.chunkSideSize;
    Chunk chunk = this.findChunk(cx, cz);

    int bx = tx - cx;
    int by = ty;
    int bz = tz - cz;
    if (bx < 0) bx += Constants.chunkSideSize;
    if (bz < 0) bz += Constants.chunkSideSize;

    return new BlockInfo(bx, by, bz, cx, cz, chunk);
  }

  /// The location of the player in the world.
  Math.Point3 get _playerPoint => this._player.point ?? Math.Point3.zero;
  
  /// Adds and removes chunks as needed.
  void worldTick(_) {
    Math.Point3 player = this._playerPoint;
    this._updateLoadedChunks(player);
  }

  /// Generates one chunk which is still pending to be loaded.
  void generateTick(_) {
    Math.Point3 player = this._playerPoint;
    this._generateChunk(player);
    this._refreshDirty(player);
  }

  // Animates the water texture.
  void animationTick(_) {
    this._mats.waterChanger.nextTexture();
  }
  
  /// Gets a chunk from the graveyard or creates a new one.
  /// This will prepare the chunk for the given [x] and [z] world location.
  Chunk _prepareChunk(int x, int z) {
    Chunk chunk = this._graveyard.removeLast() ?? new Chunk(this);
    chunk.prepare(x, z);
    this._chunks.add(chunk);
    return chunk;
  }

  /// Updates chunks which are loaded and removes any loaded chunks
  /// which aren't needed anymore.
  void _updateLoadedChunks(Math.Point3 player) {
    BlockInfo pBlock = this.getBlock(player.x, player.y, player.z);

    // Check if the last chunk
    if (this._lastChunk != pBlock.chunk) {
      this._lastChunk = pBlock.chunk;

      // Remove any out of bounds chunks.
      int minXOut = pBlock.chunkX - Constants.maxChunkDist, maxXOut = pBlock.chunkX + Constants.maxChunkDist;
      int minZOut = pBlock.chunkZ - Constants.maxChunkDist, maxZOut = pBlock.chunkZ + Constants.maxChunkDist;
      for (int i = this._chunks.length-1; i >= 0; i--) {
        Chunk chunk = this._chunks[i];
        if ((minXOut > chunk.x) || (maxXOut <= chunk.x) ||
            (minZOut > chunk.z) || (maxZOut <= chunk.z)) {
          Chunk chunk = this._chunks[i];
          chunk.freeup();
          this._chunks.remove(chunk);
          this._graveyard.add(chunk);
        }
      }

      // Add in any missing chunks.
      int minXIn = pBlock.chunkX - Constants.minChunkDist, maxXIn = pBlock.chunkX + Constants.minChunkDist;
      int minZIn = pBlock.chunkZ - Constants.minChunkDist, maxZIn = pBlock.chunkZ + Constants.minChunkDist;
      for (int x = minXIn; x < maxXIn; x += Constants.chunkSideSize) {
        for (int z = minZIn; z < maxZIn; z += Constants.chunkSideSize) {
          Chunk oldChunk = this.findChunk(x, z);
          if (oldChunk == null) this._prepareChunk(x, z);
        }
      }
    }
  }

  /// This picks the nearest non-generated chunk to generate.
  void _generateChunk(Math.Point3 player) {
    double edgeX = player.x - Constants.chunkSideSize*0.5;
    double edgeZ = player.z - Constants.chunkSideSize*0.5;
    Chunk nearest = null;
    double minDist2 = 1.0e-9;
    for (Chunk chunk in this._chunks) {
      if (chunk.needToGenerate) {
        double dx = chunk.x - edgeX;
        double dz = chunk.z - edgeZ;
        double dist2 = dx*dx + dz*dz;
        if ((nearest == null) || (minDist2 > dist2)) {
          nearest = chunk;
          minDist2 = dist2;
        }
      }
    }
    if (nearest != null) {
      this._gen.fillChunk(nearest);
    }
  }

  /// This picks the nearest dirty chunk to refresh.
  void _refreshDirty(Math.Point3 player) {
    double edgeX = player.x - Constants.chunkSideSize*0.5;
    double edgeZ = player.z - Constants.chunkSideSize*0.5;
    Chunk nearest = null;
    double minDist2 = 1.0e-9;
    for (Chunk chunk in this._chunks) {
      if (chunk.dirty) {
        double dx = chunk.x - edgeX;
        double dz = chunk.z - edgeZ;
        double dist2 = dx*dx + dz*dz;
        if ((nearest == null) || (minDist2 > dist2)) {
          nearest = chunk;
          minDist2 = dist2;
        }
      }
    }
    if (nearest != null) {
      nearest.dirty = false;
      nearest.needUpdate = true;
    }
  }
  
  /// Gets the neighboring block to the given block with the
  /// given [ray] pointing at the side to get the neighbor for.
  NeighborBlockInfo _getNeighborBlock(BlockInfo info, Math.Ray3 ray, int depth) {
    Math.Region3 region = new Math.Region3(
      info.x.toDouble()+info.chunkX.toDouble(),
      info.y.toDouble(),
      info.z.toDouble()+info.chunkZ.toDouble(),
      1.0, 1.0, 1.0);

    Math.IntersectionRayRegion3 inter = region.rayIntersection(ray);
    Math.Point3 center = region.center;
    double x = center.x, y = center.y, z = center.z;
    if (inter == null) return null;
    else if (inter.region == Math.HitRegion.XNeg) x -= 1.0;
    else if (inter.region == Math.HitRegion.XPos) x += 1.0;
    else if (inter.region == Math.HitRegion.YNeg) y -= 1.0;
    else if (inter.region == Math.HitRegion.YPos) y += 1.0;
    else if (inter.region == Math.HitRegion.ZNeg) z -= 1.0;
    else if (inter.region == Math.HitRegion.ZPos) z += 1.0;
    else return null;

    BlockInfo block = this.getBlock(x, y, z);
    return new NeighborBlockInfo(block, inter.region, depth);
  }

  /// Updates the selection for the highlighted block that can be modified.
  /// Returns the neighbor block info this traversal was stopped at.
  NeighborBlockInfo traverseNeighbors(Math.Ray3 ray, HandleTraverseNeighbor hndl) {
    Math.Ray3 back = ray.reverse;
    int depth = 0;
    BlockInfo info = this.getBlock(ray.x, ray.y, ray.z);
    NeighborBlockInfo neighbor = new NeighborBlockInfo(info, Math.HitRegion.Inside, 0);
    while (neighbor?.info != null) {
      if (hndl(neighbor)) return neighbor;
      neighbor = this._getNeighborBlock(neighbor.info, back, depth);
      depth++;
    }
    return neighbor;
  }

  /// Gets the string for debug information to be printed to the console.
  String debugString() {
    return "chunks: ${this._chunks.length}, graveyard: ${this._graveyard.length}, player: ${this._playerPoint}";
  }

  /// Updates the world to the player's view.
  void update(Events.EventArgs args) {
    Math.Matrix4 mat = this.player.location.matrix;
    Math.Point3 loc3 = mat.transPnt3(Math.Point3.zero);
    Math.Point3 front3 = mat.transPnt3(new Math.Point3(0.0, 0.0, -Constants.chunkSideSize.toDouble()));
    Math.Point2 loc = new Math.Point2(loc3.x, loc3.z);
    Math.Point2 front = new Math.Point2(front3.x, front3.z);

    for (Chunk chunk in this._chunks) {
      chunk.updateShape();
      chunk.updateVisiblity(loc, front);
    }
  }
}
