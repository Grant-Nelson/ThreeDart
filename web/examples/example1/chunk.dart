part of example1;

class Chunk {
  static const int xSize = 16;
  static const int ySize = 48;
  static const int zSize = 16;
  static const int _dataLength = xSize * ySize * zSize;
  static const double _tmin = 0.05;
  static const double _tmax = 0.95;
  static const double _maxDrawDist = 120.0;
  static final Math.Point3 xAxis = new Math.Point3(1.0, 0.0, 0.0);
  static final Math.Point3 yAxis = new Math.Point3(0.0, 1.0, 0.0);
  static final Math.Point3 zAxis = new Math.Point3(0.0, 0.0, 1.0);

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
      if (value == BlockType.Leaves) this._addCubeToShape(plants, x, y, z, BlockType.Leaves);
      else if (value == BlockType.Fern) this._addFernToShape(plants, x, y, z);
      else if (value == BlockType.Mushroom) this._addMushroomToShape(plants, x, y, z);
      else this._addPlantToShape(plants, x, y, z, value);
    } else if (BlockType.solid(value)) this._addCubeToShape(terrain, x, y, z, value);    
  }

  void _addCubeToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Math.Point3 loc = new Math.Point3(x.toDouble(), y.toDouble(), z.toDouble());
    if (this._addFace(value, x,     y + 1, z))     this._addTopToShape(   shape, loc, value);
    if (this._addFace(value, x,     y - 1, z))     this._addBottomToShape(shape, loc, value);
    if (this._addFace(value, x - 1, y,     z))     this._addLeftToShape(  shape, loc, value);
    if (this._addFace(value, x + 1, y,     z))     this._addRightToShape( shape, loc, value);
    if (this._addFace(value, x,     y,     z + 1)) this._addFrontToShape( shape, loc, value);
    if (this._addFace(value, x,     y,     z - 1)) this._addBackToShape(  shape, loc, value);
  }

  bool _addFace(int value, int x, int y, int z) {
    if (y < 0) return false;
    if (y >= ySize) return true;
    int neighbor = this.getBlock(x, y, z);
    return BlockType.drawSide(value, neighbor);
  }

  Shapes.Vertex _addVertex(Shapes.Shape shape, Math.Point3 loc, double tu, double tv) {
    return shape.vertices.addNew(
        type: Data.VertexType.Pos | Data.VertexType.Txt2D,
        loc: new Math.Point3(loc.x + this.x.toDouble(), loc.y, loc.z + this.z.toDouble()),
        txt2D: new Math.Point2((tu - 1.0)/BlockType.Max, tv/6.0));
  }

  void _addQuad(Shapes.Shape shape, Math.Point3 loc, Math.Point3 left, Math.Point3 up, int value, int side, [bool twoSided = false]) {
    double dValue = value.toDouble();
    double dSide = side.toDouble();
    Shapes.Vertex ver1 = this._addVertex(shape, loc,             dValue + _tmin, dSide + _tmin);
    Shapes.Vertex ver2 = this._addVertex(shape, loc        + up, dValue + _tmin, dSide + _tmax);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + left + up, dValue + _tmax, dSide + _tmax);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + left,      dValue + _tmax, dSide + _tmin);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addTopToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc + yAxis, xAxis, zAxis, value, 0);

  void _addBottomToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc + zAxis, xAxis, -zAxis, value, 1);

  void _addLeftToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc + yAxis, zAxis, -yAxis, value, 2);

  void _addRightToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc + xAxis + yAxis +zAxis, -zAxis, -yAxis, value, 3);

  void _addFrontToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc + yAxis + zAxis, xAxis, -yAxis, value, 5);

  void _addBackToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc + xAxis + yAxis, -xAxis, -yAxis, value, 5);
  
  void _addQuadToShape(Shapes.Shape shape, Math.Point3 loc, double angle, int value, int offset) {
    Math.Point3 rot = new Math.Point3(math.cos(angle), 0.0, math.sin(angle));
    this._addQuad(shape, loc + (xAxis + zAxis - rot)*0.5 + yAxis, rot, -yAxis, value, offset, true);
  }
  
  void _addPlantToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Math.Point3 loc = new Math.Point3(x.toDouble(), y.toDouble(), z.toDouble());
    this._addQuadToShape(shape, loc, math.PI*0.0/4.0, value, 2);
    //this._addQuadToShape(shape, loc, math.PI*1.0/4.0, value, 3);
    this._addQuadToShape(shape, loc, math.PI*2.0/4.0, value, 4);
    //this._addQuadToShape(shape, loc, math.PI*3.0/4.0, value, 5);
  }
  
  void _addFernToShape(Shapes.Shape shape, int x, int y, int z) {
    double cx = x.toDouble()+0.5, dy = y.toDouble(), cz = z.toDouble()+0.5;
    Shapes.Vertex ver1 = this._addVertex(shape, new Math.Point3(cx + 0.4, dy + 0.4, cz - 0.4), BlockType.Fern + _tmax, _tmax);
    Shapes.Vertex ver2 = this._addVertex(shape, new Math.Point3(cx,       dy,       cz),       BlockType.Fern + _tmin, _tmax);
    Shapes.Vertex ver3 = this._addVertex(shape, new Math.Point3(cx + 0.4, dy + 0.4, cz + 0.4), BlockType.Fern + _tmin, _tmin);
    Shapes.Vertex ver4 = this._addVertex(shape, new Math.Point3(cx + 0.8, dy + 0.5, cz),       BlockType.Fern + _tmax, _tmin);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    shape.faces.addFan([ver1, ver4, ver3, ver2]);
    
    Shapes.Vertex ver5 = this._addVertex(shape, new Math.Point3(cx - 0.4, dy + 0.4, cz + 0.4), BlockType.Fern + _tmax, 1 + _tmax);
    Shapes.Vertex ver6 = this._addVertex(shape, new Math.Point3(cx,       dy,       cz),       BlockType.Fern + _tmin, 1 + _tmax);
    Shapes.Vertex ver7 = this._addVertex(shape, new Math.Point3(cx - 0.4, dy + 0.4, cz - 0.4), BlockType.Fern + _tmin, 1 + _tmin);
    Shapes.Vertex ver8 = this._addVertex(shape, new Math.Point3(cx - 0.8, dy + 0.5, cz),       BlockType.Fern + _tmax, 1 + _tmin);
    shape.faces.addFan([ver5, ver6, ver7, ver8]);
    shape.faces.addFan([ver5, ver8, ver7, ver6]);

    Shapes.Vertex ver9  = this._addVertex(shape, new Math.Point3(cx - 0.4, dy + 0.4, cz + 0.4), BlockType.Fern + _tmax, 2 + _tmax);
    Shapes.Vertex ver10 = this._addVertex(shape, new Math.Point3(cx,       dy,       cz),       BlockType.Fern + _tmin, 2 + _tmax);
    Shapes.Vertex ver11 = this._addVertex(shape, new Math.Point3(cx + 0.4, dy + 0.4, cz + 0.4), BlockType.Fern + _tmin, 2 + _tmin);
    Shapes.Vertex ver12 = this._addVertex(shape, new Math.Point3(cx,       dy + 0.5, cz + 0.8), BlockType.Fern + _tmax, 2 + _tmin);
    shape.faces.addFan([ver9, ver10, ver11, ver12]);
    shape.faces.addFan([ver9, ver12, ver11, ver10]);
    
    Shapes.Vertex ver13 = this._addVertex(shape, new Math.Point3(cx + 0.4, dy + 0.4, cz - 0.4), BlockType.Fern + _tmax, 3 + _tmax);
    Shapes.Vertex ver14 = this._addVertex(shape, new Math.Point3(cx,       dy,       cz),       BlockType.Fern + _tmin, 3 + _tmax);
    Shapes.Vertex ver15 = this._addVertex(shape, new Math.Point3(cx - 0.4, dy + 0.4, cz - 0.4), BlockType.Fern + _tmin, 3 + _tmin);
    Shapes.Vertex ver16 = this._addVertex(shape, new Math.Point3(cx,       dy + 0.5, cz - 0.8), BlockType.Fern + _tmax, 3 + _tmin);
    shape.faces.addFan([ver13, ver14, ver15, ver16]);
    shape.faces.addFan([ver13, ver16, ver15, ver14]);
  }

  void _addMushroomToShape(Shapes.Shape shape, int x, int y, int z) {
    // TODO: Create mushroom shape
  }
}
