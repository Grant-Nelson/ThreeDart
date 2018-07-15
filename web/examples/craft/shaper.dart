part of craft;

class Shaper {
  static const double _tmin = 15.0/93.0; // texture edge adjustment for mipmap padding
  static const double _tmax = 78.0/93.0;
  static const int _maxBlock = 20; // number of columns in the texture
  static const int _maxSides = 6; // number of rows in the texture

  static final Math.Point3 center = new Math.Point3(0.5, 0.5, 0.5);
  static final Math.Point3 xAxis = new Math.Point3(1.0, 0.0, 0.0);
  static final Math.Point3 yAxis = new Math.Point3(0.0, 1.0, 0.0);
  static final Math.Point3 zAxis = new Math.Point3(0.0, 0.0, 1.0);

  Chunk _chunk;
  double _offsetX;
  double _offsetZ;
  double _scalar;
  bool _twoSided;
  
  Shaper(this._chunk, [int offsetX = 0, int offsetZ = 0, double scalar = 1.0, bool twoSided = false]) {
    this._offsetX = (this._chunk?.x ?? offsetX).toDouble();
    this._offsetZ = (this._chunk?.z ?? offsetZ).toDouble();
    this._scalar = scalar;
    this._twoSided = twoSided;
  }

  void buildShapes(Shapes.Shape terrain, Shapes.Shape water, Shapes.Shape plants) {
    for (int x = Chunk.xSize - 1; x >= 0; x--) {
      for (int y = Chunk.ySize - 1; y >= 0; y--) {
        for (int z = Chunk.zSize - 1; z >= 0; z--) {
          int value = this._chunk.getBlock(x, y, z);
          this._addInnerBlockToShape(terrain, water, plants, x, y, z, value);
        }
      }
    }
  }

  void buildSingleBlock(Shapes.Shape shape, int value, [int x = 0, int y = 0, int z = 0]) {
    this._addInnerBlockToShape(shape, shape, shape, x, y, z, value);
  }

  void _addInnerBlockToShape(Shapes.Shape terrain, Shapes.Shape water, Shapes.Shape plants, int x, int y, int z, int value) {
    if (value == BlockType.Air) return;
    else if (value == BlockType.Water) this._addCubeToShape(water, x, y, z, value);
    else if (BlockType.open(value)) {
      if (value == BlockType.Leaves) this._addCubeToShape(plants, x, y, z, BlockType.Leaves);
      else if (value == BlockType.Fern) this._addFernToShape(plants, x, y, z);
      else if (value == BlockType.Mushroom) this._addMushroomToShape(plants, x, y, z);
      else this._addPlantToShape(plants, x, y, z, value);
    } else if (BlockType.solid(value)) this._addCubeToShape(terrain, x, y, z, value);
    else if (value == BlockType.Selection) this._addCubeToShape(terrain, x, y, z, value);
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
    if (this._chunk == null) return true;
    if (y < 0) return false;
    if (y >= Chunk.ySize) return true;
    int neighbor = this._chunk.getBlock(x, y, z);
    return BlockType.drawSide(value, neighbor);
  }

  Shapes.Vertex _addVertex(Shapes.Shape shape, Math.Point3 base, Math.Point3 loc, double tu, double tv) {
    if (this._scalar > 1.001) loc = (loc - base - center)*this._scalar + base + center;
    return shape.vertices.addNew(
        type: Data.VertexType.Pos | Data.VertexType.Txt2D,
        loc: new Math.Point3(loc.x + this._offsetX, loc.y, loc.z + this._offsetZ),
        txt2D: new Math.Point2((tu - 1.0)/_maxBlock, tv/_maxSides));
  }

  void _addQuad(Shapes.Shape shape, Math.Point3 base, Math.Point3 loc, Math.Point3 left, Math.Point3 up, int value, int side, [bool twoSided = false]) {
    double dValue = value.toDouble();
    double dSide = side.toDouble();
    Shapes.Vertex ver1 = this._addVertex(shape, base, loc,             dValue + _tmin, dSide + _tmin);
    Shapes.Vertex ver2 = this._addVertex(shape, base, loc        + up, dValue + _tmin, dSide + _tmax);
    Shapes.Vertex ver3 = this._addVertex(shape, base, loc + left + up, dValue + _tmax, dSide + _tmax);
    Shapes.Vertex ver4 = this._addVertex(shape, base, loc + left,      dValue + _tmax, dSide + _tmin);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided || this._twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addTopToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc, loc + yAxis, xAxis, zAxis, value, 0);

  void _addBottomToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc, loc + zAxis, xAxis, -zAxis, value, 1);

  void _addLeftToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc, loc + yAxis, zAxis, -yAxis, value, 2);

  void _addRightToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc, loc + xAxis + yAxis +zAxis, -zAxis, -yAxis, value, 3);

  void _addFrontToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc, loc + yAxis + zAxis, xAxis, -yAxis, value, 5);

  void _addBackToShape(Shapes.Shape shape, Math.Point3 loc, int value) =>
    this._addQuad(shape, loc, loc + xAxis + yAxis, -xAxis, -yAxis, value, 5);
  
  void _addQuadToShape(Shapes.Shape shape, Math.Point3 loc, double angle, int value, int offset) {
    Math.Point3 rot = new Math.Point3(math.cos(angle), 0.0, math.sin(angle));
    this._addQuad(shape, loc, loc + (xAxis + zAxis - rot)*0.5 + yAxis, rot, -yAxis, value, offset, true);
  }
  
  void _addPlantToShape(Shapes.Shape shape, int x, int y, int z, int value) {
    Math.Point3 loc = new Math.Point3(x.toDouble(), y.toDouble(), z.toDouble());
    this._addQuadToShape(shape, loc, math.PI*0.5/4.0, value, 2);
    //this._addQuadToShape(shape, loc, math.PI*1.0/4.0, value, 3);
    this._addQuadToShape(shape, loc, math.PI*2.5/4.0, value, 4);
    //this._addQuadToShape(shape, loc, math.PI*3.0/4.0, value, 5);
  }
  
  void _addFernLeaf(Shapes.Shape shape, Math.Point3 loc, double angle) {
    Math.Matrix3 mat = new Math.Matrix3.rotateY(angle);
    Shapes.Vertex ver1 = this._addVertex(shape, loc, loc + mat.transPnt3(new Math.Point3(0.4, 0.4, -0.4)), BlockType.Fern + _tmax, _tmax);
    Shapes.Vertex ver2 = this._addVertex(shape, loc, loc + mat.transPnt3(new Math.Point3(0.0, 0.0,  0.0)), BlockType.Fern + _tmin, _tmax);
    Shapes.Vertex ver3 = this._addVertex(shape, loc, loc + mat.transPnt3(new Math.Point3(0.4, 0.4,  0.4)), BlockType.Fern + _tmin, _tmin);
    Shapes.Vertex ver4 = this._addVertex(shape, loc, loc + mat.transPnt3(new Math.Point3(0.8, 0.5,  0.0)), BlockType.Fern + _tmax, _tmin);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    shape.faces.addFan([ver1, ver4, ver3, ver2]);
  }
  
  void _addFernToShape(Shapes.Shape shape, int x, int y, int z) {
    Math.Point3 loc = new Math.Point3(x.toDouble()+0.5, y.toDouble(), z.toDouble()+0.5);
    _addFernLeaf(shape, loc, math.PI*0.2/2.0);
    _addFernLeaf(shape, loc, math.PI*1.1/2.0);
    _addFernLeaf(shape, loc, math.PI*2.3/2.0);
    _addFernLeaf(shape, loc, math.PI*3.2/2.0);
  }

  void _addMushroomToShape(Shapes.Shape shape, int x, int y, int z) {
    Math.Point3 loc = new Math.Point3(x.toDouble()+0.5, y.toDouble(), z.toDouble()+0.5);

    List<Shapes.Vertex> side1 = [];
    List<Shapes.Vertex> side2 = [];
    for (double d = 0.0; d <= 1.0; d += 0.25) {
      double tu = BlockType.Mushroom + _tmin + (_tmax - _tmin)*d;
      Math.Matrix3 mat = new Math.Matrix3.rotateY(math.PI*d);
      side1.add(this._addVertex(shape, loc, loc + mat.transPnt3(new Math.Point3(0.07, 0.4, 0.0)), tu, 2 + _tmin));
      side1.add(this._addVertex(shape, loc, loc + mat.transPnt3(new Math.Point3(0.1, 0.0, 0.0)), tu, 2 + _tmax));
      side2.add(this._addVertex(shape, loc, loc + mat.transPnt3(new Math.Point3(-0.07, 0.4, 0.0)), tu, 3 + _tmin));
      side2.add(this._addVertex(shape, loc, loc + mat.transPnt3(new Math.Point3(-0.1, 0.0, 0.0)), tu, 3 + _tmax));
    }
    shape.faces.addStrip(side1);
    shape.faces.addStrip(side2);
    
    List<Shapes.Vertex> top = [];
    List<Shapes.Vertex> bottom = [];
    double thalf = (_tmax - _tmin)*0.5, tmid = _tmin + thalf;
    top.add(this._addVertex(shape, loc, loc + new Math.Point3(0.0, 0.6, 0.0), BlockType.Mushroom + tmid, tmid));
    bottom.add(this._addVertex(shape, loc, loc + new Math.Point3(0.0, 0.4, 0.0), BlockType.Mushroom + tmid, 1 + tmid));

    for (double d = 0.0; d <= 1.0; d += 0.1) {
      Math.Matrix3 topMat = new Math.Matrix3.rotateY(-math.PI*2.0*d);
      Math.Point3 topTxt = topMat.transPnt3(new Math.Point3(thalf, 0.0, 0.0));
      top.add(this._addVertex(shape, loc, loc + topMat.transPnt3(new Math.Point3(0.4, 0.4, 0.0)),
        BlockType.Mushroom + tmid + topTxt.x, tmid + topTxt.z));
        
      Math.Matrix3 botMat = new Math.Matrix3.rotateY(math.PI*2.0*d);
      Math.Point3 botTxt = botMat.transPnt3(new Math.Point3(thalf, 0.0, 0.0));
      bottom.add(this._addVertex(shape, loc, loc + botMat.transPnt3(new Math.Point3(0.4, 0.4, 0.0)),
        BlockType.Mushroom + tmid + botTxt.x, 1 + tmid + botTxt.z));
    }
    shape.faces.addFan(top);
    shape.faces.addFan(bottom);
  }
}