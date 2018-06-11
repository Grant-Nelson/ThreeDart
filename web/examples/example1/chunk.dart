part of example1;

class Chunk {
  static const int chunkXSize = 16;
  static const int chunkYSize = 64;
  static const int chunkZSize = 16;
  static const int _dataLength = chunkXSize * chunkYSize * chunkZSize;
  static const double _tmin = 0.05;
  static const double _tmax = 0.95;
  static const double _maxDrawDist = 60.0;

  final int x;
  final int z;
  data.Uint8List _data;
  ThreeDart.Entity _entity;
  bool _needUpdate;

  Chunk(this.x, this.z, simplex.OpenSimplexNoise noise) {
    this._data = new data.Uint8List(_dataLength);
    this._data.fillRange(0, _dataLength, BlockType.Air);
    this._entity = new ThreeDart.Entity();
    this._needUpdate = true;

    // Generate random land
    for (int x = 0; x < chunkXSize; x++) {
      for (int z = 0; z < chunkZSize; z++) {
        double dx = (x + this.x) *0.01;
        double dz = (z + this.z) *0.01;

        double val = 0.6 * (noise.eval2D(dx* 0.1, dz* 0.1)*0.5 + 0.5) +
                     0.3 * (noise.eval2D(dx,      dz     )*0.5 + 0.5) +
                     0.1 * (noise.eval2D(dx*10.0, dz*10.0)*0.5 + 0.5);

        int maxy = (math.pow(val, 2.0)*chunkYSize).toInt();
        maxy = (maxy >= chunkYSize)? chunkYSize-1: maxy;

        for (int y = 0; y <= maxy; y++) {
          int block = BlockType.Rock;
          if (maxy == y) {
            if (maxy <= 8) block = BlockType.Sand;
            else block = BlockType.Turf;
          } else if (maxy - 1 == y) {
            if (maxy <= 8) block = BlockType.Sand;
            else block = BlockType.Dirt;
          }

          this.setBlock(x, y, z, block);
        }
      }
    }
  }

  String toString() => "chunk(${x}, ${z})";
  ThreeDart.Entity get entity => this._entity;

  bool get needUpdate => this._needUpdate;
  set needUpdate(bool update) => this._needUpdate = update;

  int _index(int x, int y, int z) => (x * chunkYSize + y) * chunkZSize + z;
  int getBlock(int x, int y, int z) => this._data[this._index(x, y, z)];
  void setBlock(int x, int y, int z, int value) => this._data[this._index(x, y, z)] = value;

  int topHit(int x, int z) {
    for (int y = chunkYSize-1; y >= 0; y--) {
      if (BlockType.solid(getBlock(x, y, z))) return y;
    }
    return chunkYSize;
  }

  void updateShape(World world) {
    if (!this._needUpdate) return;
    this._needUpdate = false;

    Chunk left = world.findChunk(this.x - chunkXSize, this.z);
    Chunk right = world.findChunk(this.x + chunkXSize, this.z);
    Chunk front = world.findChunk(this.x, this.z + chunkZSize);
    Chunk back = world.findChunk(this.x, this.z - chunkZSize);

    Shapes.Shape shape = new Shapes.Shape();
    for (int x = chunkXSize - 1; x >= 0; x--) {
      for (int y = chunkYSize - 1; y >= 0; y--) {
        for (int z = chunkZSize - 1; z >= 0; z--) {
          this._addInnerBlockToShape(shape, x, y, z, left, right, front, back);
        }
      }
    }
    this._entity.shape = shape;
  }

  void updateVisiblity(Math.Point2 loc, Math.Point2 front) {
    Math.Region2 aabb = new Math.Region2(this.x.toDouble(), this.z.toDouble(), chunkXSize.toDouble(), chunkZSize.toDouble());
    Math.Point2 nearLoc = aabb.nearestPoint(loc);
    if (nearLoc.distance2(loc) < 100.0) {
      this.entity.enabled = true;
      return;
    }

    Math.Point2 nearFront = aabb.nearestPoint(front);
    Math.Vector2 forward = new Math.Vector2(front.x - loc.x, front.y - loc.y).normal();
    Math.Vector2 toNear = new Math.Vector2(nearFront.x - loc.x, nearFront.y - loc.y);

    double length = toNear.length();
    if (length > _maxDrawDist) {
      this.entity.enabled = false;
      return;
    }

    toNear = toNear/length;
    double dot = forward.dot(toNear);
    this.entity.enabled = dot > 0.0;
  }

  bool _addFace(int value, int x, int y, int z, Chunk left, Chunk right, Chunk front, Chunk back) {
    if (y < 0) return false;
    if (y >= chunkYSize) return true;
    if (x < 0) return (left != null) ? !BlockType.solid(left.getBlock(chunkXSize - 1, y, z)) : true;
    if (x >= chunkXSize) return (right != null) ? !BlockType.solid(right.getBlock(0, y, z)) : true;
    if (z < 0) return (back != null) ? !BlockType.solid(back.getBlock(x, y, chunkZSize - 1)) : true;
    if (z >= chunkZSize) return (front != null) ? !BlockType.solid(front.getBlock(x, y, 0)) : true;
    return BlockType.drawSide(value, getBlock(x, y, z));
  }

  void _addInnerBlockToShape(Shapes.Shape shape, int x, int y, int z, Chunk left, Chunk right, Chunk front, Chunk back) {
    int value = this.getBlock(x, y, z);
    if (value == BlockType.Air) return;
    if (BlockType.open(value)) {
      // TODO:
    }
    if (BlockType.solid(value)) {
      if (this._addFace(value, x, y + 1, z, left, right, front, back)) this._addTopToShape(shape, x, y, z, value);
      if (this._addFace(value, x, y - 1, z, left, right, front, back)) this._addBottomToShape(shape, x, y, z, value);
      if (this._addFace(value, x - 1, y, z, left, right, front, back)) this._addLeftToShape(shape, x, y, z, value);
      if (this._addFace(value, x + 1, y, z, left, right, front, back)) this._addRightToShape(shape, x, y, z, value);
      if (this._addFace(value, x, y, z + 1, left, right, front, back)) this._addFrontToShape(shape, x, y, z, value);
      if (this._addFace(value, x, y, z - 1, left, right, front, back)) this._addBackToShape(shape, x, y, z, value);
    }
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
