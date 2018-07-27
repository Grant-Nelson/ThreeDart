part of craft;

class Shaper {
  final Math.Point3 frontTopLeft     = new Math.Point3(-0.5,  0.5,  0.5);
  final Math.Point3 frontTopRight    = new Math.Point3( 0.5,  0.5,  0.5);
  final Math.Point3 frontBottomLeft  = new Math.Point3(-0.5, -0.5,  0.5);
  final Math.Point3 frontBottomRight = new Math.Point3( 0.5, -0.5,  0.5);
  final Math.Point3 backTopLeft      = new Math.Point3(-0.5,  0.5, -0.5);
  final Math.Point3 backTopRight     = new Math.Point3( 0.5,  0.5, -0.5);
  final Math.Point3 backBottomLeft   = new Math.Point3(-0.5, -0.5, -0.5);
  final Math.Point3 backBottomRight  = new Math.Point3( 0.5, -0.5, -0.5);

  Materials _mats;
  List<Shapes.Shape> _shapes;

  Shaper(Materials this._mats) {
    this._shapes = new List<Shapes.Shape>(this._mats.materials.length);
  }
  
  void buildChunkShapes(Chunk chunk) {
    for (int x = Chunk.xSize - 1; x >= 0; x--) {
      for (int y = Chunk.ySize - 1; y >= 0; y--) {
        for (int z = Chunk.zSize - 1; z >= 0; z--) {
          int value = chunk.getBlock(x, y, z);
          this._addBlockToShapes(chunk, x, y, z, value, false);
        }
      }
    }
  }

  void buildSingleBlock(int value, [int x = 0, int y = 0, int z = 0]) {
    this._addBlockToShapes(null, x, y, z, value, false);
  }
  
  void finish(List<ThreeDart.Entity> entities) {
    for (int i = entities.length-1; i >= 0; i--) {
      ThreeDart.Entity entity = entities[i];
      Shapes.Shape shape = this._shapes[i];
      if (shape != null) {
        entity.shape = shape;
        entity.enabled = !shape.vertices.isEmpty;
      } else {
        entity.shape = null;
        entity.enabled = false;
      }
    }
    this._shapes = null;
  }

  Shapes.Shape _getShape(int index) {
    Shapes.Shape shape = this._shapes[index];
    if (shape == null) {
      shape = new Shapes.Shape();
      this._shapes[index] = shape;
    }
    return shape; 
  }
  
  void _addBlockToShapes(Chunk chunk, int x, int y, int z, int value, bool twoSided) {
    Math.Point3 chunkLoc = new Math.Point3(x.toDouble(), y.toDouble(), z.toDouble());
    if (chunk != null) {
      x += chunk.x;
      z += chunk.z;
    }
    Math.Point3 loc = new Math.Point3(x.toDouble() + 0.5, y.toDouble() + 0.5, z.toDouble() + 0.5);

    if (value == BlockType.Air) return;
    else if (value == BlockType.Water) this._addCubeToShapes(chunk, loc, chunkLoc, value, twoSided);
    else if (BlockType.open(value)) {
      if (value == BlockType.Fern) this._addFernToShapes(loc);
      else if (value == BlockType.Mushroom) this._addMushroomToShapes(loc);
      else this._addPlantToShapes(loc, value);
    } else if (BlockType.solid(value)) this._addCubeToShapes(chunk, loc, chunkLoc, value, twoSided);
  }
  
  Shapes.Vertex _addVertex(Shapes.Shape shape, Math.Point3 loc, Math.Vector3 norm, double tu, double tv) {
    return shape.vertices.addNew(
        type: Data.VertexType.Pos | Data.VertexType.Txt2D | Data.VertexType.Norm,
        loc: loc,
        norm: norm,
        txt2D: new Math.Point2(tu, tv));
  }

  void _addTopToShape(CubeData data, Math.Point3 loc, bool twoSided) {
    Shapes.Shape shape = this._getShape(data.topIndex);
    Math.Vector3 norm = new Math.Vector3(0.0, 1.0, 0.0);
    Shapes.Vertex ver1 = this._addVertex(shape, loc + backTopLeft,   norm, 0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + frontTopLeft,  norm, 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + frontTopRight, norm, 1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + backTopRight,  norm, 1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addBottomToShape(CubeData data, Math.Point3 loc, bool twoSided) {
    Shapes.Shape shape = this._getShape(data.bottomIndex);
    Math.Vector3 norm = new Math.Vector3(0.0, -1.0, 0.0);
    Shapes.Vertex ver1 = this._addVertex(shape, loc + frontBottomLeft,  norm, 0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + backBottomLeft,   norm, 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + backBottomRight,  norm, 1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + frontBottomRight, norm, 1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addLeftToShape(CubeData data, Math.Point3 loc, bool twoSided) {
    Shapes.Shape shape = this._getShape(data.leftIndex);
    Math.Vector3 norm = new Math.Vector3(1.0, 0.0, 0.0);
    Shapes.Vertex ver1 = this._addVertex(shape, loc + backTopLeft,     norm, 0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + backBottomLeft,  norm, 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + frontBottomLeft, norm, 1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + frontTopLeft,    norm, 1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addRightToShape(CubeData data, Math.Point3 loc, bool twoSided) {
    Shapes.Shape shape = this._getShape(data.rightIndex);
    Math.Vector3 norm = new Math.Vector3(-1.0, 0.0, 0.0);
    Shapes.Vertex ver1 = this._addVertex(shape, loc + frontTopRight,    norm, 0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + frontBottomRight, norm, 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + backBottomRight,  norm, 1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + backTopRight,     norm, 1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addFrontToShape(CubeData data, Math.Point3 loc, bool twoSided) {
    Shapes.Shape shape = this._getShape(data.frontIndex);
    Math.Vector3 norm = new Math.Vector3(0.0, 0.0, 1.0);
    Shapes.Vertex ver1 = this._addVertex(shape, loc + frontTopLeft,     norm, 0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + frontBottomLeft,  norm, 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + frontBottomRight, norm, 1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + frontTopRight,    norm, 1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addBackToShape(CubeData data, Math.Point3 loc, bool twoSided) {
    Shapes.Shape shape = this._getShape(data.backIndex);
    Math.Vector3 norm = new Math.Vector3(0.0, 0.0, -1.0);
    Shapes.Vertex ver1 = this._addVertex(shape, loc + backTopRight,    norm, 0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + backBottomRight, norm, 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + backBottomLeft,  norm, 1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + backTopLeft,     norm, 1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addCubeToShapes(Chunk chunk, Math.Point3 loc, Math.Point3 chunkLoc, int value, bool twoSided) {  
    CubeData data = this._mats.cubeData(value);
    if (this._addFace(chunk, value, chunkLoc,  0,  1,  0)) this._addTopToShape(   data, loc, twoSided);
    if (this._addFace(chunk, value, chunkLoc,  0, -1,  0)) this._addBottomToShape(data, loc, twoSided);
    if (this._addFace(chunk, value, chunkLoc, -1,  0,  0)) this._addLeftToShape(  data, loc, twoSided);
    if (this._addFace(chunk, value, chunkLoc,  1,  0,  0)) this._addRightToShape( data, loc, twoSided);
    if (this._addFace(chunk, value, chunkLoc,  0,  0,  1)) this._addFrontToShape( data, loc, twoSided);
    if (this._addFace(chunk, value, chunkLoc,  0,  0, -1)) this._addBackToShape(  data, loc, twoSided);
  }

  bool _addFace(Chunk chunk, int value, Math.Point3 chunkLoc, int x, int y, int z) {
    if (chunk == null) return true;
    y += chunkLoc.y.toInt();
    if (y < 0) return false;
    if (y >= Chunk.ySize) return true;
    x += chunkLoc.x.toInt();
    z += chunkLoc.z.toInt();
    int neighbor = chunk.getBlock(x, y, z);
    return BlockType.drawSide(value, neighbor);
  }
  
  void _addQuadRotToShape(Shapes.Shape shape, Math.Point3 loc, double angle, [bool twoSided = false]) {
    double c = math.cos(angle)*0.5, s = math.sin(angle)*0.5;
    Shapes.Vertex ver1 = this._addVertex(shape, loc + new Math.Point3( c,  0.0, -s), null, 0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + new Math.Point3( c, -0.5, -s), null, 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + new Math.Point3(-c, -0.5,  s), null, 1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + new Math.Point3(-c,  0.0,  s), null, 1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addPlantToShapes(Math.Point3 loc, int value) {
    List<int> offset = this._mats.matData(value);
    this._addQuadRotToShape(this._getShape(offset[0]),   loc, math.PI*0.5/4.0, true);
    //this._addQuadRotToShape(this._getShape(offset[0]), loc, math.PI*1.0/4.0, true);
    this._addQuadRotToShape(this._getShape(offset[0]), loc, math.PI*2.5/4.0, true);
    //this._addQuadRotToShape(this._getShape(offset[0]), loc, math.PI*3.0/4.0, true);
  }
  
  void _addFernLeaf(Shapes.Shape shape, Math.Point3 loc, double angle) {
    Math.Matrix3 mat = new Math.Matrix3.rotateY(angle);
    Shapes.Vertex ver1 = this._addVertex(shape, loc + mat.transPnt3(new Math.Point3(0.4, -0.1, -0.4)), null, 1.0, 1.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + mat.transPnt3(new Math.Point3(0.0, -0.5,  0.0)), null, 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + mat.transPnt3(new Math.Point3(0.4, -0.1,  0.4)), null, 0.0, 0.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + mat.transPnt3(new Math.Point3(0.8,  0.0,  0.0)), null, 1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    shape.faces.addFan([ver1, ver4, ver3, ver2]);
  }
  
  void _addFernToShapes(Math.Point3 loc) {
    List<int> offset = this._mats.matData(BlockType.Fern);
    _addFernLeaf(this._getShape(offset[0]), loc, math.PI*0.2/2.0);
    _addFernLeaf(this._getShape(offset[0]), loc, math.PI*1.1/2.0);
    _addFernLeaf(this._getShape(offset[0]), loc, math.PI*2.3/2.0);
    _addFernLeaf(this._getShape(offset[0]), loc, math.PI*3.2/2.0);
  }

  void _addMushroomToShapes(Math.Point3 loc) {
    List<int> offset = this._mats.matData(BlockType.Mushroom);
    Shapes.Shape topShape    = this._getShape(offset[0]);
    Shapes.Shape bottomShape = this._getShape(offset[1]);
    Shapes.Shape sideShape   = this._getShape(offset[2]);

    List<Shapes.Vertex> side1 = [];
    List<Shapes.Vertex> side2 = [];
    for (double d = 0.0; d <= 1.0; d += 0.25) {
      Math.Matrix3 mat = new Math.Matrix3.rotateY(math.PI*d);
      side1.add(this._addVertex(sideShape, loc + mat.transPnt3(new Math.Point3( 0.07, -0.1, 0.0)), null, d, 0.0));
      side1.add(this._addVertex(sideShape, loc + mat.transPnt3(new Math.Point3( 0.1,  -0.5, 0.0)), null, d, 1.0));
      side2.add(this._addVertex(sideShape, loc + mat.transPnt3(new Math.Point3(-0.07, -0.1, 0.0)), null, d, 0.0));
      side2.add(this._addVertex(sideShape, loc + mat.transPnt3(new Math.Point3(-0.1,  -0.5, 0.0)), null, d, 1.0));
    }
    sideShape.faces.addStrip(side1);
    sideShape.faces.addStrip(side2);
    
    List<Shapes.Vertex> top = [];
    List<Shapes.Vertex> bottom = [];
    top.add(   this._addVertex(topShape,    loc + new Math.Point3(0.0,  0.05, 0.0), null, 0.5, 0.5));
    bottom.add(this._addVertex(bottomShape, loc + new Math.Point3(0.0, -0.1,  0.0), null, 0.5, 0.5));

    for (double d = 0.0; d <= 1.0; d += 0.1) {
      Math.Matrix3 topMat = new Math.Matrix3.rotateY(-math.PI*2.0*d);
      Math.Point3 topTxt = topMat.transPnt3(new Math.Point3(0.5,  0.0,  0.0));
      Math.Point3 topLoc = topMat.transPnt3(new Math.Point3(0.4, -0.15, 0.0));
      top.add(this._addVertex(topShape, loc + topLoc, null, topTxt.x+0.5, topTxt.z+0.5));
        
      Math.Matrix3 botMat = new Math.Matrix3.rotateY(math.PI*2.0*d);
      Math.Point3 botTxt = botMat.transPnt3(new Math.Point3(0.5,  0.0,  0.0));
      Math.Point3 botLoc = botMat.transPnt3(new Math.Point3(0.4, -0.15, 0.0));
      bottom.add(this._addVertex(bottomShape, loc + botLoc, null, botTxt.x+0.5, botTxt.z+0.5));
    }
    topShape.faces.addFan(top);
    bottomShape.faces.addFan(bottom);
  }
}