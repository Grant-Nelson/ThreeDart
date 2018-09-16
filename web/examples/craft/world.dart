part of craft;

const int outXSize = Chunk.xSize*6;
const int outZSize = Chunk.zSize*6;
const int inXSize = Chunk.xSize*4;
const int inZSize = Chunk.zSize*4;
const int worldTickMilliseconds = 100;

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
    const maxXSize = Chunk.xSize*2;
    const maxZSize = Chunk.xSize*2;
    for (int x = -maxXSize; x < maxXSize; x += Chunk.xSize) {
      for (int z = -maxZSize; z < maxZSize; z += Chunk.zSize) {
        Chunk chunk = new Chunk(x, z, this);
        this._chunks.add(chunk);
        this._gen.fillChunk(chunk);
      }
    }

    // Start timer for periodically generating chunks.
    new Timer.periodic(new Duration(milliseconds: worldTickMilliseconds), this._worldTick);
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
    int cx = (x.truncate() ~/ Chunk.xSize) * Chunk.xSize;
    int cz = (z.truncate() ~/ Chunk.zSize) * Chunk.zSize;
    if (x < 0.0) cx -= Chunk.xSize;
    if (z < 0.0) cz -= Chunk.zSize;
    Chunk chunk = this.findChunk(cx, cz);

    int bx = x.floor() - cx;
    int by = y.floor();
    int bz = z.floor() - cz;
    if (bx < 0) bx += Chunk.xSize;
    if (bz < 0) bz += Chunk.zSize;

    return new BlockInfo(bx, by, bz, cx, cz, chunk);
  }
  
  /// Adds and removes chunks as needed and
  /// generates one chunk which is still pending to be loaded.
  void _worldTick(Timer timer) {
    Math.Point3 player = this._player.point;
    BlockInfo pBlock = this.getBlock(player.x, player.y, player.z);

    // Check if the last chunk
    if (this._lastChunk != pBlock.chunk) {
      this._lastChunk = pBlock.chunk;

      // Add in any out of bounds chunks.
      int minXOut = pBlock.chunkX - outXSize, maxXOut = pBlock.chunkX + outXSize;
      int minZOut = pBlock.chunkZ - outZSize, maxZOut = pBlock.chunkZ + outZSize;
      for (int i = this._chunks.length-1; i >= 0; i--) {
        Chunk chunk = this._chunks[i];
        if ((minXOut > chunk.x) || (maxXOut <= chunk.x) ||
            (minZOut > chunk.z) || (maxZOut <= chunk.z)) {
          this._chunks.removeAt(i);
        }
      }

      // Add in any missing chunks.
      int minXIn = pBlock.chunkX - inXSize, maxXIn = pBlock.chunkX + inXSize;
      int minZIn = pBlock.chunkZ - inZSize, maxZIn = pBlock.chunkZ + inZSize;
      for (int x = minXIn; x < maxXIn; x += Chunk.xSize) {
        for (int z = minZIn; z < maxZIn; z += Chunk.zSize) {
          Chunk oldChunk = this.findChunk(x, z);
          if (oldChunk == null) {
            print(">> $x, $z");
            this._chunks.add(new Chunk(x, z, this));
          }
        }
      }
    }

    // Pick the nearest non-generated chunk to generate.
    double edgeX = player.x - Chunk.xSize*0.5;
    double edgeZ = player.z - Chunk.zSize*0.5;
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
    Math.Point3 front3 = mat.transPnt3(new Math.Point3(0.0, 0.0, -Chunk.zSize.toDouble()));
    Math.Point2 loc = new Math.Point2(loc3.x, loc3.z);
    Math.Point2 front = new Math.Point2(front3.x, front3.z);

    for (Chunk chunk in this._chunks) {
      chunk.updateShape();
      chunk.updateVisiblity(loc, front);
    }
  }
}
