part of example1;

class Chunk {
  static const int xSize = 16;
  static const int ySize = 64;
  static const int zSize = 16;
  static const int _dataLength = xSize * ySize * zSize;
  static const double _tmin = 0.05;
  static const double _tmax = 0.95;
  static const double _maxDrawDist = 60.0;

  final int x;
  final int z;
  World _world;
  data.Uint8List _data;
  ThreeDart.Entity _terrain;
  ThreeDart.Entity _water;
  bool _needUpdate;

  Chunk(this.x, this.z, World world) {
    this._data = new data.Uint8List(_dataLength);
    this._data.fillRange(0, _dataLength, BlockType.Air);
    
    this._terrain = new ThreeDart.Entity();
    this._water = new ThreeDart.Entity();

    this._needUpdate = true;
    this._world = world;
  }
    
  String toString() => "chunk(${x}, ${z})";
  ThreeDart.Entity get terrainEntity => this._terrain;
  ThreeDart.Entity get waterEntity => this._water;

  bool get needUpdate => this._needUpdate;
  set needUpdate(bool update) => this._needUpdate = update;

  int _index(int x, int y, int z) => (x * ySize + y) * zSize + z;
  int getBlock(int x, int y, int z) => this._data[this._index(x, y, z)];
  void setBlock(int x, int y, int z, int value) => this._data[this._index(x, y, z)] = value;

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

    Chunk left = this.left;
    Chunk right = this.right;
    Chunk front = this.front;
    Chunk back = this.back;

    Shapes.Shape terrain = new Shapes.Shape();
    Shapes.Shape water = new Shapes.Shape();
    for (int x = xSize - 1; x >= 0; x--) {
      for (int y = ySize - 1; y >= 0; y--) {
        for (int z = zSize - 1; z >= 0; z--) {
          this._addInnerBlockToShape(terrain, water, x, y, z, left, right, front, back);
        }
      }
    }

    this._terrain.shape = terrain;
    this._water.shape = water;
  }

  void updateVisiblity(Math.Point2 loc, Math.Point2 front) {
    Math.Region2 aabb = new Math.Region2(this.x.toDouble(), this.z.toDouble(), xSize.toDouble(), zSize.toDouble());
    Math.Point2 nearLoc = aabb.nearestPoint(loc);
    if (nearLoc.distance2(loc) < 100.0) {
      this._terrain.enabled = true;
      this._water.enabled = true;
      return;
    }

    Math.Point2 nearFront = aabb.nearestPoint(front);
    Math.Vector2 forward = new Math.Vector2(front.x - loc.x, front.y - loc.y).normal();
    Math.Vector2 toNear = new Math.Vector2(nearFront.x - loc.x, nearFront.y - loc.y);

    double length = toNear.length();
    if (length > _maxDrawDist) {
      this._terrain.enabled = false;
      this._water.enabled = false;
      return;
    }

    toNear = toNear/length;
    double dot = forward.dot(toNear);
    bool enabled = dot > 0.0;
    this._terrain.enabled = enabled;
    this._water.enabled = enabled;
  }

  void _addInnerBlockToShape(Shapes.Shape terrain, Shapes.Shape water, int x, int y, int z, Chunk left, Chunk right, Chunk front, Chunk back) {
    int value = this.getBlock(x, y, z);
    if (value == BlockType.Air) return;
    if (value == BlockType.Water) {
      if (this._addFace(value, x, y + 1, z, left, right, front, back)) this._addTopToShape(water, x, y, z, value);
      if (this._addFace(value, x, y - 1, z, left, right, front, back)) this._addBottomToShape(water, x, y, z, value);
      if (this._addFace(value, x - 1, y, z, left, right, front, back)) this._addLeftToShape(water, x, y, z, value);
      if (this._addFace(value, x + 1, y, z, left, right, front, back)) this._addRightToShape(water, x, y, z, value);
      if (this._addFace(value, x, y, z + 1, left, right, front, back)) this._addFrontToShape(water, x, y, z, value);
      if (this._addFace(value, x, y, z - 1, left, right, front, back)) this._addBackToShape(water, x, y, z, value);
    }
    if (BlockType.open(value)) {
      // TODO:
    }
    if (BlockType.solid(value)) {
      if (this._addFace(value, x, y + 1, z, left, right, front, back)) this._addTopToShape(terrain, x, y, z, value);
      if (this._addFace(value, x, y - 1, z, left, right, front, back)) this._addBottomToShape(terrain, x, y, z, value);
      if (this._addFace(value, x - 1, y, z, left, right, front, back)) this._addLeftToShape(terrain, x, y, z, value);
      if (this._addFace(value, x + 1, y, z, left, right, front, back)) this._addRightToShape(terrain, x, y, z, value);
      if (this._addFace(value, x, y, z + 1, left, right, front, back)) this._addFrontToShape(terrain, x, y, z, value);
      if (this._addFace(value, x, y, z - 1, left, right, front, back)) this._addBackToShape(terrain, x, y, z, value);
    }
  }

  bool _addFace(int value, int x, int y, int z, Chunk left, Chunk right, Chunk front, Chunk back) {
    if (y < 0) return false;
    if (y >= ySize) return true;
    int neighbor = BlockType.Air;
    if      (x < 0)      neighbor = (left  != null) ? left.getBlock(xSize - 1, y, z) : neighbor;
    else if (x >= xSize) neighbor = (right != null) ? right.getBlock(0, y, z) : neighbor;
    else if (z < 0)      neighbor = (back  != null) ? back.getBlock(x, y, zSize - 1) : neighbor;
    else if (z >= zSize) neighbor = (front != null) ? front.getBlock(x, y, 0) : neighbor;
    else                 neighbor = getBlock(x, y, z);
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
