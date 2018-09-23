part of craft;

/// Defines the world shown in 3Dart craft.
class World {
  Materials _mats;
  Generator _gen;
  List<Chunk> _chunks;
  List<ThreeDart.Entity> _entities;
  Player _player;
  Chunk _lastChunk;

  /// Creates a new world with the given meterials.
  World(this._mats) {
    this._gen = new Generator();
    this._chunks = new List<Chunk>();
    this._entities = new List<ThreeDart.Entity>();
    this._lastChunk = null;
    for (Techniques.MaterialLight tech in this._mats.materials)
      this.entities.add(new ThreeDart.Entity(tech: tech));

    // Preinitialize the starting part of the world.
    for (int x = -Constants.initChunkDist; x < Constants.initChunkDist; x += Constants.chunkSideSize) {
      for (int z = -Constants.initChunkDist; z < Constants.initChunkDist; z += Constants.chunkSideSize) {
        Chunk chunk = new Chunk(x, z, this);
        this._chunks.add(chunk);
        this._gen.fillChunk(chunk);
      }
    }

    // Start timer for periodically generating chunks and animate.
    new Timer.periodic(new Duration(milliseconds: Constants.worldTickMs), this._worldTick);
    new Timer.periodic(new Duration(milliseconds: Constants.generateTickMs), this._generateTick);
    new Timer.periodic(new Duration(milliseconds: Constants.animationTickMs), this._animationTick);
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
    int cx = (x.truncate() ~/ Constants.chunkSideSize) * Constants.chunkSideSize;
    int cz = (z.truncate() ~/ Constants.chunkSideSize) * Constants.chunkSideSize;
    if (x < 0.0) cx -= Constants.chunkSideSize;
    if (z < 0.0) cz -= Constants.chunkSideSize;
    Chunk chunk = this.findChunk(cx, cz);

    int bx = x.floor() - cx;
    int by = y.floor();
    int bz = z.floor() - cz;
    if (bx < 0) bx += Constants.chunkSideSize;
    if (bz < 0) bz += Constants.chunkSideSize;

    return new BlockInfo(bx, by, bz, cx, cz, chunk);
  }
  
  
  /// Adds and removes chunks as needed.
  void _worldTick(Timer timer) {
    Math.Point3 player = this._player.point;
    this._updateLoadedChunks(player);
  }

  /// Generates one chunk which is still pending to be loaded.
  void _generateTick(Timer timer) {
    Math.Point3 player = this._player.point;
    this._generateChunk(player);
  }

  // Animates the water texture.
  void _animationTick(Timer time) {
    this._mats.waterChanger.nextTexture();
  }

  /// Updates chunks which are loaded and removes any loaded chunks
  /// which aren't needed anymore.
  void _updateLoadedChunks(Math.Point3 player) {
    BlockInfo pBlock = this.getBlock(player.x, player.y, player.z);

    // Check if the last chunk
    if (this._lastChunk != pBlock.chunk) {
      this._lastChunk = pBlock.chunk;

      // Add in any out of bounds chunks.
      int minXOut = pBlock.chunkX - Constants.maxChunkDist, maxXOut = pBlock.chunkX + Constants.maxChunkDist;
      int minZOut = pBlock.chunkZ - Constants.maxChunkDist, maxZOut = pBlock.chunkZ + Constants.maxChunkDist;
      for (int i = this._chunks.length-1; i >= 0; i--) {
        Chunk chunk = this._chunks[i];
        if ((minXOut > chunk.x) || (maxXOut <= chunk.x) ||
            (minZOut > chunk.z) || (maxZOut <= chunk.z)) {
          this._chunks[i].remove();
          this._chunks.removeAt(i);
        }
      }

      // Add in any missing chunks.
      int minXIn = pBlock.chunkX - Constants.minChunkDist, maxXIn = pBlock.chunkX + Constants.minChunkDist;
      int minZIn = pBlock.chunkZ - Constants.minChunkDist, maxZIn = pBlock.chunkZ + Constants.minChunkDist;
      for (int x = minXIn; x < maxXIn; x += Constants.chunkSideSize) {
        for (int z = minZIn; z < maxZIn; z += Constants.chunkSideSize) {
          Chunk oldChunk = this.findChunk(x, z);
          if (oldChunk == null) {
            this._chunks.add(new Chunk(x, z, this));
          }
        }
      }
    }
  }

  /// This picks the nearest non-generated chunk to generate.
  void _generateChunk(Math.Point3 player) {
    double edgeX = player.x - Constants.chunkSideSize*0.5;
    double edgeZ = player.z - Constants.chunkSideSize*0.5;
    Chunk nearest = null;
    double minDist2 = 1000000.0;
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

  /// Updates the world to the player's view.
  void update(Events.EventArgs args) {
    Math.Matrix4 mat = this.player.location.matrix;
    Math.Point3 loc3 = mat.transPnt3(new Math.Point3(0.0, 0.0, 0.0));
    Math.Point3 front3 = mat.transPnt3(new Math.Point3(0.0, 0.0, -Constants.chunkSideSize.toDouble()));
    Math.Point2 loc = new Math.Point2(loc3.x, loc3.z);
    Math.Point2 front = new Math.Point2(front3.x, front3.z);

    for (Chunk chunk in this._chunks) {
      chunk.updateShape();
      chunk.updateVisiblity(loc, front);
    }
  }
}
