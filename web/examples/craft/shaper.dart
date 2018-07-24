part of craft;

class Shaper {
  Materials _mats;
  ThreeDart.Entity _group;
  List<ThreeDart.Entity> _entities;
  List<Shapes.Shape> _shapes;

  final Math.Point3 frontTopLeft     = new Math.Point3(-0.5,  0.5,  0.5);
  final Math.Point3 frontTopRight    = new Math.Point3( 0.5,  0.5,  0.5);
  final Math.Point3 frontBottomLeft  = new Math.Point3(-0.5, -0.5,  0.5);
  final Math.Point3 frontBottomRight = new Math.Point3( 0.5, -0.5,  0.5);
  final Math.Point3 backTopLeft      = new Math.Point3(-0.5,  0.5, -0.5);
  final Math.Point3 backTopRight     = new Math.Point3( 0.5,  0.5, -0.5);
  final Math.Point3 backBottomLeft   = new Math.Point3(-0.5, -0.5, -0.5);
  final Math.Point3 backBottomRight  = new Math.Point3( 0.5, -0.5, -0.5);

  Shaper(Materials this._mats) {
    this._group = new ThreeDart.Entity();
    this._entities = new List<ThreeDart.Entity>();
    this._shapes = null;

    for (Techniques.MaterialLight tech in this._mats.materials) {
      ThreeDart.Entity entity = new ThreeDart.Entity(tech: tech);
      this._group.children.add(entity);
      this._entities.add(entity);
    }
  }
  
  ThreeDart.Entity get entity => this._group;
  
  void buildChunkShapes(Chunk chunk) {
    this._startShapeUpdate();
    for (int x = Chunk.xSize - 1; x >= 0; x--) {
      for (int y = Chunk.ySize - 1; y >= 0; y--) {
        for (int z = Chunk.zSize - 1; z >= 0; z--) {
          int value = chunk.getBlock(x, y, z);
          this._addBlockToShapes(chunk, x, y, z, value, false);
        }
      }
    }
    this._finishUpdate();
  }

  void buildSingleBlock(int value, [int x = 0, int y = 0, int z = 0]) {
    this._startShapeUpdate();
    this._addBlockToShapes(null, x, y, z, value, false);
    this._finishUpdate();
  }
  
  void _startShapeUpdate() {
    this._shapes = new List<Shapes.Shape>(this._entities.length);
  }

  void _finishUpdate() {
    for (int i = this._entities.length-1; i >= 0; i--) {
      ThreeDart.Entity entity = this._entities[i];
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
    if (chunk != null) {
      x += chunk.x;
      z += chunk.z;
    }
    Math.Point3 loc = new Math.Point3(x.toDouble() + 0.5, y.toDouble() + 0.5, z.toDouble() + 0.5);

    if (value == BlockType.Air) return;
    else if (value == BlockType.Water) this._addCubeToShapes(chunk, loc, value, twoSided);
    else if (BlockType.open(value)) {
      if (value == BlockType.Leaves) this._addCubeToShapes(chunk, loc, BlockType.Leaves, twoSided);
      else if (value == BlockType.Fern) this._addFernToShapes(loc);
      else if (value == BlockType.Mushroom) this._addMushroomToShapes(loc);
      else this._addPlantToShapes(loc, value);
    } else if (BlockType.solid(value)) this._addCubeToShapes(chunk, loc, value, twoSided);
    else if (value == BlockType.Selection) this._addCubeToShapes(chunk, loc, value, twoSided);
  }
  
  Shapes.Vertex _addVertex(Shapes.Shape shape, Math.Point3 loc, double tu, double tv) {
    return shape.vertices.addNew(
        type: Data.VertexType.Pos | Data.VertexType.Txt2D,
        loc: loc,
        txt2D: new Math.Point2(tu, tv));
  }

  void _addTopToShape(Shapes.Shape shape, Math.Point3 loc, bool twoSided) {
    Shapes.Vertex ver1 = this._addVertex(shape, loc + backTopLeft,   0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + frontTopLeft,  0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + frontTopRight, 1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + backTopRight,  1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addBottomToShape(Shapes.Shape shape, Math.Point3 loc, bool twoSided) {
    Shapes.Vertex ver1 = this._addVertex(shape, loc + frontBottomLeft,  0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + backBottomLeft,   0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + backBottomRight,  1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + frontBottomRight, 1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addLeftToShape(Shapes.Shape shape, Math.Point3 loc, bool twoSided) {
    Shapes.Vertex ver1 = this._addVertex(shape, loc + backTopLeft,     0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + backBottomLeft,  0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + frontBottomLeft, 1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + frontTopLeft,    1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addRightToShape(Shapes.Shape shape, Math.Point3 loc, bool twoSided) {
    Shapes.Vertex ver1 = this._addVertex(shape, loc + frontTopRight,    0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + frontBottomRight, 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + backBottomRight,  1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + backTopRight,     1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addFrontToShape(Shapes.Shape shape, Math.Point3 loc, bool twoSided) {
    Shapes.Vertex ver1 = this._addVertex(shape, loc + frontTopLeft,     0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + frontBottomLeft,  0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + frontBottomRight, 1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + frontTopRight,    1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addBackToShape(Shapes.Shape shape, Math.Point3 loc, bool twoSided) {
    Shapes.Vertex ver1 = this._addVertex(shape, loc + backTopRight,    0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + backBottomRight, 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + backBottomLeft,  1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + backTopLeft,     1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addCubeToShapes(Chunk chunk, Math.Point3 loc, int value, bool twoSided) {  
    int offset = this._mats.groupOffset(value);
    if (this._addFace(chunk, value, loc,  0,  1,  0)) this._addTopToShape(   this._getShape(offset),   loc, twoSided);
    if (this._addFace(chunk, value, loc,  0, -1,  0)) this._addBottomToShape(this._getShape(offset+1), loc, twoSided);
    if (this._addFace(chunk, value, loc, -1,  0,  0)) this._addLeftToShape(  this._getShape(offset+2), loc, twoSided);
    if (this._addFace(chunk, value, loc,  1,  0,  0)) this._addRightToShape( this._getShape(offset+3), loc, twoSided);
    if (this._addFace(chunk, value, loc,  0,  0,  1)) this._addFrontToShape( this._getShape(offset+4), loc, twoSided);
    if (this._addFace(chunk, value, loc,  0,  0, -1)) this._addBackToShape(  this._getShape(offset+5), loc, twoSided);
  }

  bool _addFace(Chunk chunk, int value, Math.Point3 loc, int x, int y, int z) {
    if (chunk == null) return true;
    y += loc.y.toInt();
    if (y < 0) return false;
    if (y >= Chunk.ySize) return true;
    x += loc.x.toInt();
    z += loc.z.toInt();
    int neighbor = chunk.getBlock(x, y, z);
    return BlockType.drawSide(value, neighbor);
  }
  
  void _addQuadRotToShape(Shapes.Shape shape, Math.Point3 loc, double angle, [bool twoSided = false]) {
    double c = math.cos(angle)*0.5, s = math.sin(angle)*0.5;
    Shapes.Vertex ver1 = this._addVertex(shape, loc + new Math.Point3( c,  0.0, -s), 0.0, 0.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + new Math.Point3( c, -0.5, -s), 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + new Math.Point3(-c, -0.5,  s), 1.0, 1.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + new Math.Point3(-c,  0.0,  s), 1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    if (twoSided) shape.faces.addFan([ver4, ver3, ver2, ver1]);
  }

  void _addPlantToShapes(Math.Point3 loc, int value) {
    int offset = this._mats.groupOffset(value);
    this._addQuadRotToShape(this._getShape(offset),   loc, math.PI*0.5/4.0, true);
    this._addQuadRotToShape(this._getShape(offset+1), loc, math.PI*1.0/4.0, true);
    this._addQuadRotToShape(this._getShape(offset+2), loc, math.PI*2.5/4.0, true);
    this._addQuadRotToShape(this._getShape(offset+3), loc, math.PI*3.0/4.0, true);
  }
  
  void _addFernLeaf(Shapes.Shape shape, Math.Point3 loc, double angle) {
    Math.Matrix3 mat = new Math.Matrix3.rotateY(angle);
    Shapes.Vertex ver1 = this._addVertex(shape, loc + mat.transPnt3(new Math.Point3(0.4, -0.1, -0.4)), 1.0, 1.0);
    Shapes.Vertex ver2 = this._addVertex(shape, loc + mat.transPnt3(new Math.Point3(0.0, -0.5,  0.0)), 0.0, 1.0);
    Shapes.Vertex ver3 = this._addVertex(shape, loc + mat.transPnt3(new Math.Point3(0.4, -0.1,  0.4)), 0.0, 0.0);
    Shapes.Vertex ver4 = this._addVertex(shape, loc + mat.transPnt3(new Math.Point3(0.8,  0.0,  0.0)), 1.0, 0.0);
    shape.faces.addFan([ver1, ver2, ver3, ver4]);
    shape.faces.addFan([ver1, ver4, ver3, ver2]);
  }
  
  void _addFernToShapes(Math.Point3 loc) {
    int offset = this._mats.groupOffset(BlockType.Fern);
    _addFernLeaf(this._getShape(offset),   loc, math.PI*0.2/2.0);
    _addFernLeaf(this._getShape(offset+1), loc, math.PI*1.1/2.0);
    _addFernLeaf(this._getShape(offset+2), loc, math.PI*2.3/2.0);
    _addFernLeaf(this._getShape(offset+3), loc, math.PI*3.2/2.0);
  }

  void _addMushroomToShapes(Math.Point3 loc) {
    int offset = this._mats.groupOffset(BlockType.Mushroom);
    Shapes.Shape topShape    = this._getShape(offset);
    Shapes.Shape bottomShape = this._getShape(offset+1);
    Shapes.Shape side1Shape  = this._getShape(offset+2);
    Shapes.Shape side2Shape  = this._getShape(offset+3);

    List<Shapes.Vertex> side1 = [];
    List<Shapes.Vertex> side2 = [];
    for (double d = 0.0; d <= 1.0; d += 0.25) {
      Math.Matrix3 mat = new Math.Matrix3.rotateY(math.PI*d);
      side1.add(this._addVertex(side1Shape, loc + mat.transPnt3(new Math.Point3( 0.07, -0.1, 0.0)), d, 0.0));
      side1.add(this._addVertex(side1Shape, loc + mat.transPnt3(new Math.Point3( 0.1,  -0.5, 0.0)), d, 1.0));
      side2.add(this._addVertex(side2Shape, loc + mat.transPnt3(new Math.Point3(-0.07, -0.1, 0.0)), d, 0.0));
      side2.add(this._addVertex(side2Shape, loc + mat.transPnt3(new Math.Point3(-0.1,  -0.5, 0.0)), d, 1.0));
    }
    side1Shape.faces.addStrip(side1);
    side2Shape.faces.addStrip(side2);
    
    List<Shapes.Vertex> top = [];
    List<Shapes.Vertex> bottom = [];
    top.add(   this._addVertex(topShape,    loc + new Math.Point3(0.0,  0.1, 0.0), 0.5, 0.5));
    bottom.add(this._addVertex(bottomShape, loc + new Math.Point3(0.0, -0.1, 0.0), 0.5, 0.5));

    for (double d = 0.0; d <= 1.0; d += 0.1) {
      Math.Matrix3 topMat = new Math.Matrix3.rotateY(-math.PI*2.0*d);
      Math.Point3 topTxt = topMat.transPnt3(new Math.Point3(1.0, 0.0, 0.0));
      Math.Point3 topLoc = topMat.transPnt3(new Math.Point3(0.4, 0.4, 0.0));
      top.add(this._addVertex(topShape, loc + topLoc, topTxt.x, topTxt.z));
        
      Math.Matrix3 botMat = new Math.Matrix3.rotateY(math.PI*2.0*d);
      Math.Point3 botTxt = botMat.transPnt3(new Math.Point3(1.0, 0.0, 0.0));
      Math.Point3 botLoc = botMat.transPnt3(new Math.Point3(0.4, 0.4, 0.0));
      bottom.add(this._addVertex(bottomShape, loc + botLoc, botTxt.x, botTxt.z));
    }
    topShape.faces.addFan(top);
    bottomShape.faces.addFan(bottom);
  }
}