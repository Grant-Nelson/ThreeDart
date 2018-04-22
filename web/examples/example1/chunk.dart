
part of example1;

class Chunk {
  static const int chunkXSize = 32;
  static const int chunkYSize = 16;
  static const int chunkZSize = 32;

  List<int> _data;
  int _x;
  int _y; 
  int _z;
  ThreeDart.Entity _entity;

  Chunk(this._x, this._y, this._z) {
    this._data = new List<int>.filled(chunkXSize*chunkYSize*chunkZSize, BlockType.Air);
    this._entity = new ThreeDart.Entity();

    // Default random land
    for (int x = 0; x < chunkXSize; x++) {
      for (int z = 0; z < chunkZSize; z++) {
        int maxy = ((math.cos((x+this._x)/chunkXSize*6.24) * math.sin((z+this._z)/chunkZSize*6.24))*5.0-this._y).floor();
        for (int y = 0; y <= maxy; y++) {
          this.setBlock(x, y, z, (maxy == y)?BlockType.Grass:(maxy-1 == y)?BlockType.Dirt:BlockType.Rock);
        }
      }
    }
  }

  ThreeDart.Entity get entity => _entity;

  int _index(int x, int y, int z) => (x*chunkYSize + y)*chunkZSize + z;

  int getBlock(int x, int y, int z) {
    return this._data[this._index(x, y, z)];
  }

  void setBlock(int x, int y, int z, int value) {
    this._data[this._index(x, y, z)] = value;
  }

  void updateShape() {
    Shapes.Shape shape = new Shapes.Shape();
    for (int x = 0; x < chunkXSize; x++) {
      for (int y = 0; y < chunkYSize; y++) {
        for (int z = 0; z < chunkZSize; z++) {
          this._addBlockToShape(shape, x, y, z);
        }
      }
    }
    this._entity.shape = shape;
  }
  
  bool _isAir(int x, int y, int z) {
    if ((x < 0) || (x >= chunkXSize) ||
      (y < 0) || (y >= chunkYSize) ||
      (z < 0) || (z >= chunkZSize)) return true;
    return this._data[this._index(x, y, z)] == BlockType.Air;
  }

  void _addBlockToShape(Shapes.Shape shape, int x, int y, int z) {
    int value = this.getBlock(x, y, z);
    if (value == BlockType.Air) return;
    if (this._isAir(x, y+1, z)) this._addTopToShape(shape, x, y, z, value);
    if (this._isAir(x, y-1, z)) this._addBottomToShape(shape, x, y, z, value);
    if (this._isAir(x-1, y, z)) this._addLeftToShape(shape, x, y, z, value);
    if (this._isAir(x+1, y, z)) this._addRightToShape(shape, x, y, z, value);
    if (this._isAir(x, y, z+1)) this._addFrontToShape(shape, x, y, z, value);
    if (this._isAir(x, y, z-1)) this._addBackToShape(shape, x, y, z, value);
  }

  Shapes.Vertex _addVertex(Shapes.Shape shape, int x, int y, int z, int u, int v) {
    return shape.vertices.addNew(
      type:    Data.VertexType.Pos|Data.VertexType.Txt2D,
      loc:     new Math.Point3((x+this._x).toDouble(), (y+this._y).toDouble(), (z+this._z).toDouble()),
      txt2D:   new Math.Point2((u-1)/BlockType.Max, v/6.0));
  }
  
  void _addTopToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x, y+1, z, value, 0);
    Shapes.Vertex ver2 = this._addVertex(shape, x, y+1, z+1, value, 1);
    Shapes.Vertex ver3 = this._addVertex(shape, x+1, y+1, z+1, value+1, 1);
    Shapes.Vertex ver4 = this._addVertex(shape, x+1, y+1, z, value+1, 0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }
  
  void _addBottomToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x, y, z, value, 2);
    Shapes.Vertex ver2 = this._addVertex(shape, x+1, y, z, value+1, 2);
    Shapes.Vertex ver3 = this._addVertex(shape, x+1, y, z+1, value+1, 1);
    Shapes.Vertex ver4 = this._addVertex(shape, x, y, z+1, value, 1);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }
  
  void _addLeftToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x, y, z, value, 3);
    Shapes.Vertex ver2 = this._addVertex(shape, x, y, z+1, value+1, 3);
    Shapes.Vertex ver3 = this._addVertex(shape, x, y+1, z+1, value+1, 2);
    Shapes.Vertex ver4 = this._addVertex(shape, x, y+1, z, value, 2);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }
  
  void _addRightToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x+1, y, z, value+1, 4);
    Shapes.Vertex ver2 = this._addVertex(shape, x+1, y+1, z, value+1, 3);
    Shapes.Vertex ver3 = this._addVertex(shape, x+1, y+1, z+1, value, 3);
    Shapes.Vertex ver4 = this._addVertex(shape, x+1, y, z+1, value, 4);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }
  
  void _addFrontToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x, y, z+1, value, 5);
    Shapes.Vertex ver2 = this._addVertex(shape, x+1, y, z+1, value+1, 5);
    Shapes.Vertex ver3 = this._addVertex(shape, x+1, y+1, z+1, value+1, 4);
    Shapes.Vertex ver4 = this._addVertex(shape, x, y+1, z+1, value, 4);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }
  
  void _addBackToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Shapes.Vertex ver1 = this._addVertex(shape, x, y, z, value+1, 6);
    Shapes.Vertex ver2 = this._addVertex(shape, x, y+1, z, value+1, 5);
    Shapes.Vertex ver3 = this._addVertex(shape, x+1, y+1, z, value, 5);
    Shapes.Vertex ver4 = this._addVertex(shape, x+1, y, z, value, 6);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
  }
}