part of craft;

class Chunk {
  static const int xSize = 24;
  static const int ySize = 48;
  static const int zSize = 24;
  static const int _dataLength = xSize * ySize * zSize;
  static const double _maxDrawDist = 120.0;

  final int x;
  final int z;
  World _world;
  data.Uint8List _data;
  List<ThreeDart.Entity> _entities;
  bool _needUpdate;

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
    
  String toString() => "chunk(${x}, ${z})";
  List<ThreeDart.Entity> get entities => this._entities;

  bool get needUpdate => this._needUpdate;
  set needUpdate(bool update) => this._needUpdate = update;

  int _index(int x, int y, int z) => (x * ySize + y) * zSize + z;
  
  int getBlock(int x, int y, int z) {
    if (y < 0)      return BlockType.Boundary;
    if (y >= ySize) return BlockType.Air;
    if (x < 0)      return left?. getBlock(x + xSize, y, z) ?? BlockType.Air;
    if (x >= xSize) return right?.getBlock(x - xSize, y, z) ?? BlockType.Air;
    if (z < 0)      return back?. getBlock(x, y, z + zSize) ?? BlockType.Air;
    if (z >= zSize) return front?.getBlock(x, y, z - zSize) ?? BlockType.Air;
    return this._data[this._index(x, y, z)];
  }

  bool setBlock(int x, int y, int z, int value) {
    if (y < 0 || y >= ySize) return false;
    if (x < 0)      return left?. setBlock(x + xSize, y, z, value) ?? false;
    if (x >= xSize) return right?.setBlock(x - xSize, y, z, value) ?? false;
    if (z < 0)      return back?. setBlock(x, y, z + zSize, value) ?? false;
    if (z >= zSize) return front?.setBlock(x, y, z - zSize, value) ?? false;
    this._data[this._index(x, y, z)] = value;
    return true;
  }

  Chunk get left  => this._world.findChunk(this.x - xSize, this.z);
  Chunk get front => this._world.findChunk(this.x,         this.z + zSize);
  Chunk get right => this._world.findChunk(this.x + xSize, this.z);
  Chunk get back  => this._world.findChunk(this.x,         this.z - zSize);

  int topHit(int x, int z) {
    for (int y = ySize-1; y >= 0; y--) {
      if (BlockType.solid(getBlock(x, y, z))) return y;
    }
    return ySize;
  }

  void updateShape() {
    if (!this._needUpdate) return;
    this._needUpdate = false;
    Shaper shape = new Shaper(this._world.materials);
    shape.buildChunkShapes(this);
    shape.finish(this.entities);
  }

  void set _enabled(bool enabled) {
    for (ThreeDart.Entity entity in this._entities)
      entity.enabled = enabled;
  }

  void updateVisiblity(Math.Point2 loc, Math.Point2 front) {
    Math.Region2 aabb = new Math.Region2(this.x.toDouble(), this.z.toDouble(), xSize.toDouble(), zSize.toDouble());
    Math.Point2 nearLoc = aabb.nearestPoint(loc);
    if (nearLoc.distance2(loc) < 100.0) {
      this._enabled = true;
      return;
    }

    Math.Point2 nearFront = aabb.nearestPoint(front);
    Math.Vector2 forward = new Math.Vector2(front.x - loc.x, front.y - loc.y).normal();
    Math.Vector2 toNear = new Math.Vector2(nearFront.x - loc.x, nearFront.y - loc.y);

    double length = toNear.length();
    if (length > _maxDrawDist) {
      this._enabled = false;
      return;
    }

    toNear = toNear/length;
    double dot = forward.dot(toNear);
    bool enabled = dot > 0.0;
    this._enabled = enabled;
  }
}
