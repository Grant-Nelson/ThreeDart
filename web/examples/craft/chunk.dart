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
  ThreeDart.Entity _terrain;
  ThreeDart.Entity _water;
  ThreeDart.Entity _plants;
  bool _needUpdate;

  Chunk(this.x, this.z, World world) {
    this._data = new data.Uint8List(_dataLength);
    this._data.fillRange(0, _dataLength, BlockType.Air);
    
    this._terrain = new ThreeDart.Entity();
    this._water = new ThreeDart.Entity();
    this._plants = new ThreeDart.Entity();

    this._needUpdate = true;
    this._world = world;
  }
    
  String toString() => "chunk(${x}, ${z})";
  ThreeDart.Entity get terrainEntity => this._terrain;
  ThreeDart.Entity get waterEntity => this._water;
  ThreeDart.Entity get plantsEntity => this._plants;

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

  Chunk get left       => this._world.findChunk(this.x - xSize, this.z);
  Chunk get frontLeft  => this._world.findChunk(this.x - xSize, this.z + zSize);
  Chunk get front      => this._world.findChunk(this.x,         this.z + zSize);
  Chunk get frontRight => this._world.findChunk(this.x + xSize, this.z + zSize);
  Chunk get right      => this._world.findChunk(this.x + xSize, this.z);
  Chunk get backRight  => this._world.findChunk(this.x + xSize, this.z - zSize);
  Chunk get back       => this._world.findChunk(this.x,         this.z - zSize);
  Chunk get backLeft   => this._world.findChunk(this.x - xSize, this.z - zSize);

  int topHit(int x, int z) {
    for (int y = ySize-1; y >= 0; y--) {
      if (BlockType.solid(getBlock(x, y, z))) return y;
    }
    return ySize;
  }

  void updateShape() {
    if (!this._needUpdate) return;
    this._needUpdate = false;
    
    Shapes.Shape terrain = new Shapes.Shape();
    Shapes.Shape water = new Shapes.Shape();
    Shapes.Shape plants = new Shapes.Shape();
    new Shaper(this)._buildShapes(terrain, water, plants);

    this._terrain.shape = terrain;
    this._water.shape = water;
    this._plants.shape = plants;
  }

  void updateVisiblity(Math.Point2 loc, Math.Point2 front) {
    Math.Region2 aabb = new Math.Region2(this.x.toDouble(), this.z.toDouble(), xSize.toDouble(), zSize.toDouble());
    Math.Point2 nearLoc = aabb.nearestPoint(loc);
    if (nearLoc.distance2(loc) < 100.0) {
      this._terrain.enabled = true;
      this._water.enabled = true;
      this._plants.enabled = true;
      return;
    }

    Math.Point2 nearFront = aabb.nearestPoint(front);
    Math.Vector2 forward = new Math.Vector2(front.x - loc.x, front.y - loc.y).normal();
    Math.Vector2 toNear = new Math.Vector2(nearFront.x - loc.x, nearFront.y - loc.y);

    double length = toNear.length();
    if (length > _maxDrawDist) {
      this._terrain.enabled = false;
      this._water.enabled = false;
      this._plants.enabled = false;
      return;
    }

    toNear = toNear/length;
    double dot = forward.dot(toNear);
    bool enabled = dot > 0.0;
    this._terrain.enabled = enabled;
    this._water.enabled = enabled;
    this._plants.enabled = enabled;
  }
}
