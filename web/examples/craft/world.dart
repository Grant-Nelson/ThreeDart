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
        this._gen.fillChunk(this.prepareChunk(x, z));
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
  Chunk prepareChunk(int x, int z) {
    Chunk chunk = this._graveyard.removeLast() ?? new Chunk(this);
    chunk.prepare(x, z);
    this._chunks.add(chunk);
    return chunk;
  }

  /// Frees the given chunk and puts it in the graveyard
  /// if the chunk is non-nil and currently in use.
  /// Returns true if disposed, false if not.
  bool disposeChunk(Chunk chunk) {
    if ((chunk != null) && this._chunks.remove(chunk)) {
      chunk.freeup();
      this._graveyard.add(chunk);
      return true;
    }
    return false;
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
            (minZOut > chunk.z) || (maxZOut <= chunk.z))
          this.disposeChunk(this._chunks[i]);
      }

      // Add in any missing chunks.
      int minXIn = pBlock.chunkX - Constants.minChunkDist, maxXIn = pBlock.chunkX + Constants.minChunkDist;
      int minZIn = pBlock.chunkZ - Constants.minChunkDist, maxZIn = pBlock.chunkZ + Constants.minChunkDist;
      for (int x = minXIn; x < maxXIn; x += Constants.chunkSideSize) {
        for (int z = minZIn; z < maxZIn; z += Constants.chunkSideSize) {
          Chunk oldChunk = this.findChunk(x, z);
          if (oldChunk == null) this.prepareChunk(x, z);
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
  NeighborBlockInfo _getNeighborBlock(BlockInfo info, Math.Ray3 ray, Math.Ray3 back, int pointType, int depth) {
    Math.Region3 region = info.blockRegion;
    Math.IntersectionRayRegion3 inter = region.rayIntersection(back);

    if (inter == null) return null;
    else if (inter.region == Math.HitRegion.XNeg) info = info.left;
    else if (inter.region == Math.HitRegion.XPos) info = info.right;
    else if (inter.region == Math.HitRegion.YNeg) info = info.below;
    else if (inter.region == Math.HitRegion.YPos) info = info.above;
    else if (inter.region == Math.HitRegion.ZNeg) info = info.back;
    else if (inter.region == Math.HitRegion.ZPos) info = info.front;
    else return null;

    return new NeighborBlockInfo(info, inter.region, ray, pointType, depth);
  }

  /// Updates the selection for the highlighted block that can be modified.
  /// Returns the neighbor block info this traversal was stopped at.
  NeighborBlockInfo traverseNeighbors(List<Math.Ray3> rays, List<int> pointTypes, HandleTraverseNeighbor hndl) {
    int depth = 0;
    int count = rays.length;

    List<Math.Ray3> backs = new List<Math.Ray3>.generate(count,
      (int index) => rays[index].reverse);

    List<NeighborBlockInfo> neighbors = new List<NeighborBlockInfo>.generate(count,
      (int index) {
        Math.Ray3 ray = rays[index];
        BlockInfo info = this.getBlock(ray.x, ray.y, ray.z);
        return new NeighborBlockInfo(info, Math.HitRegion.Inside, ray, pointTypes[index], 0);
      });

    while (true) {
      for (int i = 0; i < count; i++) {
        NeighborBlockInfo neighbor = neighbors[i];
        if (hndl(neighbor)) return neighbor;
        neighbors[i] = this._getNeighborBlock(neighbor.info, rays[i], backs[i], pointTypes[i], depth);
      }
      depth++;
    }
  }
  
  /// TODO: Comment (returns offset start)
  CollisionResult collide(List<Math.Point3> points, Math.Vector3 vector) {
    int count = points.length;
    if (count <= 0) return null;

    int fullCount = count * 5;
    List<Math.Point3> starts = new List<Math.Point3>(fullCount);
    List<int> pointTypes = new List<int>(fullCount);
    for (int i = 0, j = 0; i < count; i++, j += 5) {
      Math.Point3 point = points[i];
      starts[j] = point;
      pointTypes[j] = 0;
      starts[j+1] = point + new Math.Point3(-Constants.horizontalPad, 0.0, 0.0);
      pointTypes[j+1] = 1;
      starts[j+2] = point + new Math.Point3(Constants.horizontalPad, 0.0, 0.0);
      pointTypes[j+2] = 1;
      starts[j+3] = point + new Math.Point3(0.0, 0.0, -Constants.horizontalPad);
      pointTypes[j+3] = 2;
      starts[j+4] = point + new Math.Point3(0.0, 0.0, Constants.horizontalPad);
      pointTypes[j+4] = 2;
    }
    
    bool touchingGround = false;
    while (true) {
      Math.Point3 loc = starts[0]+new Math.Point3.fromVector3(vector);

      List<Math.Ray3> rays = new List<Math.Ray3>.generate(fullCount,
        (int index) => new Math.Ray3.fromVertex(starts[index], vector));

      NeighborBlockInfo neighbor = this.traverseNeighbors(rays, pointTypes,
        (NeighborBlockInfo neighbor) {
          if (neighbor?.info == null) return true;
          if (!BlockType.hard(neighbor.info.value)) return false;
          if ((neighbor.region == Math.HitRegion.XPos) || (neighbor.region == Math.HitRegion.XNeg)) return neighbor.pointType == 1;
          if ((neighbor.region == Math.HitRegion.ZPos) || (neighbor.region == Math.HitRegion.ZNeg)) return neighbor.pointType == 2;
          return neighbor.pointType == 0;
        });

      // Handle the collision with the neighboring block.
      Math.Point3 offset;
      if (neighbor == null) return new CollisionResult(loc, touchingGround);
      else if (neighbor.pointType == 0) {
        if (neighbor.region == Math.HitRegion.Inside) {
          // Stuck inside of hard block, push character up.
          // TODO: If up is also solid, check left, right, front and back before moving up.
          offset = new Math.Point3(0.0, neighbor.info.y + 1.0 - neighbor.ray.y, 0.0);
          vector = Math.Vector3.zero;
          touchingGround = true;

        } else if (neighbor.region == Math.HitRegion.YNeg) {
          // Hit ground
          offset = new Math.Point3(0.0, neighbor.info.y + 1.0 - neighbor.ray.y, 0.0);
          vector = new Math.Vector3(vector.dx, 0.0, vector.dz);
          touchingGround = true;
        } else if (neighbor.region == Math.HitRegion.YPos) {
          // Hit top
          offset = new Math.Point3(0.0, neighbor.info.y - neighbor.ray.y, 0.0);
          vector = new Math.Vector3(vector.dx, 0.0, vector.dz);
        } else return new CollisionResult(loc, touchingGround);

      } else if (neighbor.pointType == 1) {
        if (neighbor.region == Math.HitRegion.XNeg) {
          // Hit wall to the left
          offset = new Math.Point3(neighbor.info.worldX + 1.0 - neighbor.ray.x, 0.0, 0.0);
          vector = new Math.Vector3(0.0, vector.dy, vector.dz);
        } else if (neighbor.region == Math.HitRegion.XPos) {
          // Hit wall to the right
          offset = new Math.Point3(neighbor.info.worldX - neighbor.ray.x, 0.0, 0.0);
          vector = new Math.Vector3(0.0, vector.dy, vector.dz);
        } else return new CollisionResult(loc, touchingGround);

      } else if (neighbor.pointType == 2) {
        if (neighbor.region == Math.HitRegion.ZNeg) {
          // Hit wall to the back
          offset = new Math.Point3(0.0, 0.0, neighbor.info.worldZ + 1.0 - neighbor.ray.z);
          vector = new Math.Vector3(vector.dx, vector.dy, 0.0);
        } else if (neighbor.region == Math.HitRegion.ZPos) {
          // Hit wall to the front
          offset = new Math.Point3(0.0, 0.0, neighbor.info.worldZ - neighbor.ray.z);
          vector = new Math.Vector3(vector.dx, vector.dy, 0.0);
        } else return new CollisionResult(loc, touchingGround);
      }

      // Update start locations and vector to the new offset.
      for (int i = 0; i < fullCount; i++)
        starts[i] = starts[i] + offset;
    }
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
