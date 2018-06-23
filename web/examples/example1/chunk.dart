part of example1;

class Chunk {
  static const int xSize = 16;
  static const int ySize = 48;
  static const int zSize = 16;
  static const int _dataLength = xSize * ySize * zSize;
  static const double _tmin = 0.05;
  static const double _tmax = 0.95;
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
    for (int x = xSize - 1; x >= 0; x--) {
      for (int y = ySize - 1; y >= 0; y--) {
        for (int z = zSize - 1; z >= 0; z--) {
          this._addInnerBlockToShape(terrain, water, plants, x, y, z);
        }
      }
    }

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

  void _addInnerBlockToShape(Shapes.Shape terrain, Shapes.Shape water, Shapes.Shape plants, int x, int y, int z) {
    int value = this.getBlock(x, y, z);
    if (value == BlockType.Air) return;
    else if (value == BlockType.Water) this._addCubeToShape(water, x, y, z, value);
    else if (BlockType.open(value)) {
      if (value == BlockType.Leaves) this._addCubeToShape(plants, x, y, z, value);
    } else if (BlockType.solid(value)) this._addCubeToShape(terrain, x, y, z, value);    
  }

  void _addCubeToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    if (this._addFace(value, x, y + 1, z)) this._addTopToShape(shape, x, y, z, value);
    if (this._addFace(value, x, y - 1, z)) this._addBottomToShape(shape, x, y, z, value);
    if (this._addFace(value, x - 1, y, z)) this._addLeftToShape(shape, x, y, z, value);
    if (this._addFace(value, x + 1, y, z)) this._addRightToShape(shape, x, y, z, value);
    if (this._addFace(value, x, y, z + 1)) this._addFrontToShape(shape, x, y, z, value);
    if (this._addFace(value, x, y, z - 1)) this._addBackToShape(shape, x, y, z, value);
  }

  bool _addFace(int value, int x, int y, int z) {
    if (y < 0) return false;
    if (y >= ySize) return true;
    int neighbor = this.getBlock(x, y, z);
    return BlockType.drawSide(value, neighbor);
  }

  Shapes.Vertex _addVertex(Shapes.Shape shape, int x, int y, int z, double u, double v) {
    return shape.vertices.addNew(
        type: Data.VertexType.Pos | Data.VertexType.Txt2D,
        loc: new Math.Point3((x + this.x).toDouble(), y.toDouble(), (z + this.z).toDouble()),
        txt2D: new Math.Point2((u - 1) / BlockType.Max, v / 6.0));
  }

  void _addTopToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x, y + 1, z, value + _tmin, _tmin);
    Shapes.Vertex ver2 = this._addVertex(shape, x, y + 1, z + 1, value + _tmin, _tmax);
    Shapes.Vertex ver3 = this._addVertex(shape, x + 1, y + 1, z + 1, value + _tmax, _tmax);
    Shapes.Vertex ver4 = this._addVertex(shape, x + 1, y + 1, z, value + _tmax, _tmin);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }

  void _addBottomToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x, y, z, value + _tmin, 1 + _tmax);
    Shapes.Vertex ver2 = this._addVertex(shape, x + 1, y, z, value + _tmax, 1 + _tmax);
    Shapes.Vertex ver3 = this._addVertex(shape, x + 1, y, z + 1, value + _tmax, 1 + _tmin);
    Shapes.Vertex ver4 = this._addVertex(shape, x, y, z + 1, value + _tmin, 1 + _tmin);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }

  void _addLeftToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x, y, z, value + _tmin, 2 + _tmax);
    Shapes.Vertex ver2 = this._addVertex(shape, x, y, z + 1, value + _tmax, 2 + _tmax);
    Shapes.Vertex ver3 = this._addVertex(shape, x, y + 1, z + 1, value + _tmax, 2 + _tmin);
    Shapes.Vertex ver4 = this._addVertex(shape, x, y + 1, z, value + _tmin, 2 + _tmin);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }

  void _addRightToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x + 1, y, z, value + _tmax, 3 + _tmax);
    Shapes.Vertex ver2 = this._addVertex(shape, x + 1, y + 1, z, value + _tmax, 3 + _tmin);
    Shapes.Vertex ver3 = this._addVertex(shape, x + 1, y + 1, z + 1, value + _tmin, 3 + _tmin);
    Shapes.Vertex ver4 = this._addVertex(shape, x + 1, y, z + 1, value + _tmin, 3 + _tmax);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }

  void _addFrontToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x, y, z + 1, value + _tmin, 4 + _tmax);
    Shapes.Vertex ver2 = this._addVertex(shape, x + 1, y, z + 1, value + _tmax, 4 + _tmax);
    Shapes.Vertex ver3 = this._addVertex(shape, x + 1, y + 1, z + 1, value + _tmax, 4 + _tmin);
    Shapes.Vertex ver4 = this._addVertex(shape, x, y + 1, z + 1, value + _tmin, 4 + _tmin);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }

  void _addBackToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x, y, z, value + _tmax, 5 + _tmax);
    Shapes.Vertex ver2 = this._addVertex(shape, x, y + 1, z, value + _tmax, 5 + _tmin);
    Shapes.Vertex ver3 = this._addVertex(shape, x + 1, y + 1, z, value + _tmin, 5 + _tmin);
    Shapes.Vertex ver4 = this._addVertex(shape, x + 1, y, z, value + _tmin, 5 + _tmax);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }
}
