part of craft;

/// A chunk represents the voxal information for a large number of blocks.
/// This makes up one of the many square areas of the world.
class Chunk {
  /// The number of blocks wide every chunk is.
  static const int xSize = 24;

  /// The number of blocks tall every chunk is.
  static const int ySize = 48;

  /// The number of block deep every chunk is.
  static const int zSize = 24;

  /// The total number of blocks per chunk.
  static const int _dataLength = xSize * ySize * zSize;

  /// The minimum number of blocks away from the player to always render a chunck.
  static const double _minDrawDist2 =  10.0 * 10.0;

  /// The maximum number of blocks away from the player to render before not drawing a chunck.
  static const double _maxDrawDist2 = 120.0 * 120.0;

  /// The offset to the left edge of the chunk.
  final int x;

  /// The offset to the front edge of the chunk.
  final int z;

  /// This is the world this chunk belongs to.
  World _world;

  /// The list of block information for this chunk.
  data.Uint8List _data;

  /// The entities for rendering all the different types of block textures.
  List<ThreeDart.Entity> _entities;

  /// Indicates if the chunk's entities need to be updated to reflect the chunk's data.
  bool _needUpdate;

  /// Creates a new chunk for the given [x] and [z] world offset for the given [world].
  Chunk(this.x, this.z, this._world) {
    this._data = new data.Uint8List(_dataLength)
      ..fillRange(0, _dataLength, BlockType.Air);

    this._entities = new List<ThreeDart.Entity>();
    for (ThreeDart.Entity parent in this._world.entities) {
      ThreeDart.Entity entity = new ThreeDart.Entity();
      parent.children.add(entity);
      this._entities.add(entity);
    }

    this._needUpdate = true;
  }

  /// Gets the string for this chunk for debugging.
  @override
  String toString() => "chunk($x, $z)";

  /// Gets the entities used for rendering this chunk.
  List<ThreeDart.Entity> get entities => this._entities;

  /// Gets or sets if this chunk needs an update.
  bool get needUpdate => this._needUpdate;
  set needUpdate(bool update) => this._needUpdate = update;

  /// Calculates the chunk's data offset for the given x, y, and z location.
  int _index(int x, int y, int z) => (x * ySize + y) * zSize + z;

  /// Gets the value of the block at the given location.
  /// If the coordinates are outside this chunk the neighboring chunk will checked.
  int getBlock(int x, int y, int z) {
    if (y < 0)      return BlockType.Boundary;
    if (y >= ySize) return BlockType.Air;
    if (x < 0)      return left?. getBlock(x + xSize, y, z) ?? BlockType.Air;
    if (x >= xSize) return right?.getBlock(x - xSize, y, z) ?? BlockType.Air;
    if (z < 0)      return back?. getBlock(x, y, z + zSize) ?? BlockType.Air;
    if (z >= zSize) return front?.getBlock(x, y, z - zSize) ?? BlockType.Air;
    return this._data[this._index(x, y, z)];
  }

  /// Sets the value of the block at the given location.
  /// If the coordinates are outside this chunk the neighboring chunk will be set to.
  /// Returns true if block set, false if not.
  bool setBlock(int x, int y, int z, int value) {
    if (y < 0 || y >= ySize) return false;
    if (x < 0)      return left?. setBlock(x + xSize, y, z, value) ?? false;
    if (x >= xSize) return right?.setBlock(x - xSize, y, z, value) ?? false;
    if (z < 0)      return back?. setBlock(x, y, z + zSize, value) ?? false;
    if (z >= zSize) return front?.setBlock(x, y, z - zSize, value) ?? false;
    this._data[this._index(x, y, z)] = value;
    return true;
  }

  /// Gets the chunk to the left (XNeg) of this chunk.
  Chunk get left  => this._world.findChunk(this.x - xSize, this.z);

  /// Gets the chunk to the front (ZPos) of this chunk.
  Chunk get front => this._world.findChunk(this.x, this.z + zSize);

  /// Gets the chunk to the right (XPos) of this chunk.
  Chunk get right => this._world.findChunk(this.x + xSize, this.z);

  /// Gets the chunk to the back (ZNeg) of this chunk.
  Chunk get back  => this._world.findChunk(this.x, this.z - zSize);

  /// Determines the highest non-air block in the given [x] and [z] column.
  /// If no ground is found then the given [defaultY] is returned.
  int topHit(int x, int z, [int defaultY = ySize]) {
    for (int y = ySize-1; y >= 0; y--) {
      if (BlockType.solid(this.getBlock(x, y, z))) return y;
    }
    return defaultY;
  }

  /// Updates the shapes in the entities for rendering this chucnk.
  void updateShape() {
    if (!this._needUpdate) return;
    this._needUpdate = false;
    Shaper shape = new Shaper(this._world.materials);
    shape.buildChunkShapes(this);
    shape.finish(this.entities);
  }

  /// Sets all of the entities to either enabled or disabled.
  void set _enabled(bool enabled) {
    for (ThreeDart.Entity entity in this._entities)
      entity.enabled = enabled;
  }

  /// Updates the visiblity of this chunk.
  void updateVisiblity(Math.Point2 loc, Math.Point2 front) {
    Math.Region2 aabb = new Math.Region2(this.x.toDouble(), this.z.toDouble(), xSize.toDouble(), zSize.toDouble());
    Math.Point2 nearLoc = aabb.nearestPoint(loc);
    if (nearLoc.distance2(loc) < _minDrawDist2) {
      this._enabled = true;
      return;
    }

    Math.Point2 nearFront = aabb.nearestPoint(front);
    Math.Vector2 forward = new Math.Vector2(front.x - loc.x, front.y - loc.y).normal();
    Math.Vector2 toNear = new Math.Vector2(nearFront.x - loc.x, nearFront.y - loc.y);

    double length = toNear.length2();
    if (length > _maxDrawDist2) {
      this._enabled = false;
      return;
    }

    toNear = toNear/length;
    double dot = forward.dot(toNear);
    bool enabled = dot > 0.0;
    this._enabled = enabled;
  }
}
