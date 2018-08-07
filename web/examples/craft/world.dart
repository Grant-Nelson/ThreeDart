part of craft;

/// Defines the world shown in 3Dart craft.
class World {
  static const maxXSize = Chunk.xSize*12;
  static const maxZSize = Chunk.zSize*12;

  Materials _mats;
  Generator _gen;
  List<Chunk> _chunks;
  List<ThreeDart.Entity> _entities;
  Player _player;

  /// Creates a new world with the given meterials.
  World(this._mats) {
    this._gen = new Generator(this);
    this._chunks = new List<Chunk>();
    this._entities = new List<ThreeDart.Entity>();
    for (Techniques.MaterialLight tech in this._mats.materials)
      this.entities.add(new ThreeDart.Entity(tech: tech));

    for (int x = -maxXSize; x < maxXSize; x += Chunk.xSize) {
      for (int z = -maxZSize; z < maxZSize; z += Chunk.zSize) {
        this._chunks.add(new Chunk(x, z, this));
      }
    }

    this._gen.fillWorld();
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

  /// Updates the world to the player's view.
  void update(ThreeDart.EventArgs args) {
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
