part of craft;

// This shows a pseudo wireframe instead of filled shapes.
// Anything with special shape logic, like mushrooms, might not become wireframe.
// This is useful to check that only the visible sides of the vocals are being drawn.
const bool _showWireFrame = false;

/// The shaper creates the shapes for all the items in the world.
class Shaper {
  static final Math.Vector3 _topNorm    = new Math.Vector3( 0.0,  1.0,  0.0);
  static final Math.Vector3 _bottomNorm = new Math.Vector3( 0.0, -1.0,  0.0);
  static final Math.Vector3 _leftNorm   = new Math.Vector3( 1.0,  0.0,  0.0);
  static final Math.Vector3 _rightNorm  = new Math.Vector3(-1.0,  0.0,  0.0);
  static final Math.Vector3 _frontNorm  = new Math.Vector3( 0.0,  0.0,  1.0);
  static final Math.Vector3 _backNorm   = new Math.Vector3( 0.0,  0.0, -1.0);

  static final Math.Point3 _frontTopLeft     = new Math.Point3(-0.5,  0.5,  0.5);
  static final Math.Point3 _frontTopRight    = new Math.Point3( 0.5,  0.5,  0.5);
  static final Math.Point3 _frontBottomLeft  = new Math.Point3(-0.5, -0.5,  0.5);
  static final Math.Point3 _frontBottomRight = new Math.Point3( 0.5, -0.5,  0.5);
  static final Math.Point3 _backTopLeft      = new Math.Point3(-0.5,  0.5, -0.5);
  static final Math.Point3 _backTopRight     = new Math.Point3( 0.5,  0.5, -0.5);
  static final Math.Point3 _backBottomLeft   = new Math.Point3(-0.5, -0.5, -0.5);
  static final Math.Point3 _backBottomRight  = new Math.Point3( 0.5, -0.5, -0.5);

  Materials _mats;
  Data.VertexType _vertexType;
  List<Shapes.ReducedShape> _shapes;

  /// Create a new shaper for building shapes for this world.
  /// This will create a temporary place holder for one shape per material in the materials list.
  /// Pass in a null material to produce only one placeholder to be used with [addCubeToOneShape].
  /// Optionally pass in a vertex type, otherwise it is Pos|Txt2D|Norm.
  Shaper(this._mats, [this._vertexType = null]) {
    this._vertexType ??= Data.VertexType.Pos | Data.VertexType.Txt2D | Data.VertexType.Norm;
    this._shapes = new List<Shapes.ReducedShape>(this._mats?.materials?.length ?? 1);
  }

  /// Builds all the shames for a whole given [chunk].
  /// Use [finish] to apply the shapes to the chunks entities.
  void buildChunkShapes(Chunk chunk) {
    for (int x = Chunk.xSize - 1; x >= 0; x--) {
      for (int y = Chunk.ySize - 1; y >= 0; y--) {
        for (int z = Chunk.zSize - 1; z >= 0; z--) {
          int value = chunk.getWorldBlock(x, y, z);
          this._addBlockToShapes(chunk, x, y, z, value, false, 1.0);
        }
      }
    }
  }

  /// Builds a single block with the given value.
  /// This is used for building what is in the hand.
  /// Use [finish] to apply the shapes to the player's entities.
  void buildSingleBlock(int value) {
    this._addBlockToShapes(null, 0, 0, 0, value, false, 1.0);
  }

  /// Builds a single block to the first shape storage.
  /// This is used for building the selection highlight.
  /// This should be used when the a null materials was used when creating the [Shaper].
  void addCubeToOneShape(int x, int y, int z, bool twoSided, double scalar) {
    Math.Point3 loc = new Math.Point3(x.toDouble() + 0.5, y.toDouble() + 0.5, z.toDouble() + 0.5);
    Shapes.ReducedShape shape = this._getShape(0);
    this._addTopToShape(   shape, loc, twoSided, scalar);
    this._addBottomToShape(shape, loc, twoSided, scalar);
    this._addLeftToShape(  shape, loc, twoSided, scalar);
    this._addRightToShape( shape, loc, twoSided, scalar);
    this._addFrontToShape( shape, loc, twoSided, scalar);
    this._addBackToShape(  shape, loc, twoSided, scalar);
  }

  /// This applies the shapes to the given entities.
  /// The entities given should match up to the materials in the material list used when creating the [Shaper].
  /// If a null materials was used when creating the [Shaper] then only one entity should be passed in.
  void finish(List<ThreeDart.Entity> entities) {
    for (int i = entities.length-1; i >= 0; i--) {
      ThreeDart.Entity entity = entities[i];
      Shapes.ReducedShape shape = this._shapes[i];
      if (shape != null) {
        entity.shapeBuilder = shape;
        entity.enabled = !shape.vertices.isEmpty;
      } else {
        entity.shapeBuilder = null;
        entity.enabled = false;
      }
    }
    this._shapes = null;
  }

  /// Gets the shape with the given [index] from the set, if no shape is created
  /// for that index yet a new shape will be created and set to that index.
  Shapes.ReducedShape _getShape(int index) {
    Shapes.ReducedShape shape = this._shapes[index];
    if (shape == null) {
      shape = new Shapes.ReducedShape(this._vertexType);
      this._shapes[index] = shape;
    }
    return shape;
  }

  /// Adds a block from the given chunk to the correct shapes based on the materials' cube indices.
  void _addBlockToShapes(Chunk chunk, int x, int y, int z, int value, bool twoSided, double scalar) {
    Math.Point3 chunkLoc = new Math.Point3(x.toDouble(), y.toDouble(), z.toDouble());
    if (chunk != null) {
      x += chunk.x;
      z += chunk.z;
    }
    Math.Point3 loc = new Math.Point3(x.toDouble() + 0.5, y.toDouble() + 0.5, z.toDouble() + 0.5);

    if (value == BlockType.Air) return;
    else if (value == BlockType.Water) this._addCubeToShapes(chunk, loc, chunkLoc, value, twoSided, scalar);
    else if (BlockType.open(value)) {
      if (value == BlockType.Fern) this._addFernToShapes(loc);
      else if (value == BlockType.Mushroom) this._addMushroomToShapes(loc);
      else this._addPlantToShapes(loc, value);
    } else if (BlockType.solid(value)) this._addCubeToShapes(chunk, loc, chunkLoc, value, twoSided, scalar);
  }

  /// Creates a new vertex object with the given position, normal vector, and texture coordinates.
  Shapes.Vertex _getVertex(Math.Point3 loc, Math.Vector3 norm, double tu, double tv) {
    return new Shapes.Vertex(
        type: Data.VertexType.Pos | Data.VertexType.Txt2D | Data.VertexType.Norm,
        loc: loc,
        norm: norm,
        txt2D: new Math.Point2(tu, tv));
  }

  /// Adds a quad to the given [shape]. The given [loc] is the center point of a block
  /// and the offset to the corners of the quad.
  void _addQuad(Shapes.ReducedShape shape, Math.Point3 loc, Math.Point3 off1, Math.Point3 off2,
    Math.Point3 off3, Math.Point3 off4, Math.Vector3 norm, bool twoSided, double scalar) {
    Shapes.Vertex ver1 = this._getVertex(loc + off1*scalar, norm, 0.0, 0.0);
    Shapes.Vertex ver2 = this._getVertex(loc + off2*scalar, norm, 0.0, 1.0);
    Shapes.Vertex ver3 = this._getVertex(loc + off3*scalar, norm, 1.0, 1.0);
    Shapes.Vertex ver4 = this._getVertex(loc + off4*scalar, norm, 1.0, 0.0);
    int i = shape.addVertices([ver1, ver2, ver3, ver4]);
    if (_showWireFrame) {
      shape.addLines([i, i+1, i+1, i+2, i+2, i+3, i+3, i, i, i+2]);
    } else {
      shape.addTriangleFan([i, i+1, i+2, i+3]);
      if (twoSided) shape.addTriangleFan([i+2, i+1, i, i+3]);
    }
  }

  /// Adds the top square of a block to the given [shape].
  void _addTopToShape(Shapes.ReducedShape shape, Math.Point3 loc, bool twoSided, double scalar) =>
    _addQuad(shape, loc, _backTopLeft, _frontTopLeft, _frontTopRight, _backTopRight, _topNorm, twoSided, scalar);

  /// Adds the bottom square of a block to the given [shape].
  void _addBottomToShape(Shapes.ReducedShape shape, Math.Point3 loc, bool twoSided, double scalar) =>
    _addQuad(shape, loc, _frontBottomLeft, _backBottomLeft, _backBottomRight, _frontBottomRight, _bottomNorm, twoSided, scalar);

  /// Adds the left square of a block to the given [shape].
  void _addLeftToShape(Shapes.ReducedShape shape, Math.Point3 loc, bool twoSided, double scalar) =>
    _addQuad(shape, loc, _backTopLeft, _backBottomLeft, _frontBottomLeft, _frontTopLeft, _leftNorm, twoSided, scalar);

  /// Adds the right square of a block to the given [shape].
  void _addRightToShape(Shapes.ReducedShape shape, Math.Point3 loc, bool twoSided, double scalar) =>
    _addQuad(shape, loc, _frontTopRight, _frontBottomRight, _backBottomRight, _backTopRight, _rightNorm, twoSided, scalar);

  /// Adds the front square of a block to the given [shape].
  void _addFrontToShape(Shapes.ReducedShape shape, Math.Point3 loc, bool twoSided, double scalar) =>
    _addQuad(shape, loc, _frontTopLeft, _frontBottomLeft, _frontBottomRight, _frontTopRight, _frontNorm, twoSided, scalar);

  /// Adds the back square of a block to the given [shape].
  void _addBackToShape(Shapes.ReducedShape shape, Math.Point3 loc, bool twoSided, double scalar) =>
    _addQuad(shape, loc, _backTopRight, _backBottomRight, _backBottomLeft, _backTopLeft, _backNorm, twoSided, scalar);

  /// Adds a cube to the shapes defined by the materials cube data for the given block [value].
  /// Only the sides of the cube which are visible are added, the rest are skipped.
  void _addCubeToShapes(Chunk chunk, Math.Point3 loc, Math.Point3 chunkLoc, int value, bool twoSided, double scalar) {
    CubeData data = this._mats.cubeData(value);
    if (this._addFace(chunk, value, chunkLoc,  0,  1,  0)) this._addTopToShape(   this._getShape(data.topIndex),    loc, twoSided, scalar);
    if (this._addFace(chunk, value, chunkLoc,  0, -1,  0)) this._addBottomToShape(this._getShape(data.bottomIndex), loc, twoSided, scalar);
    if (this._addFace(chunk, value, chunkLoc, -1,  0,  0)) this._addLeftToShape(  this._getShape(data.leftIndex),   loc, twoSided, scalar);
    if (this._addFace(chunk, value, chunkLoc,  1,  0,  0)) this._addRightToShape( this._getShape(data.rightIndex),  loc, twoSided, scalar);
    if (this._addFace(chunk, value, chunkLoc,  0,  0,  1)) this._addFrontToShape( this._getShape(data.frontIndex),  loc, twoSided, scalar);
    if (this._addFace(chunk, value, chunkLoc,  0,  0, -1)) this._addBackToShape(  this._getShape(data.backIndex),   loc, twoSided, scalar);
  }

  /// Determines if a face should be added to because it is visible in the world.
  bool _addFace(Chunk chunk, int value, Math.Point3 chunkLoc, int x, int y, int z) {
    if (chunk == null) return true;
    y += chunkLoc.y.toInt();
    if (y < 0) return false;
    if (y >= Chunk.ySize) return true;
    x += chunkLoc.x.toInt();
    z += chunkLoc.z.toInt();
    int neighbor = chunk.getWorldBlock(x, y, z);
    return BlockType.drawSide(value, neighbor);
  }

  /// Adds a rotated quad to the shape. This is for adding flowers and grass.
  /// The given [angle] is in radians.
  void _addQuadRotToShape(Shapes.ReducedShape shape, Math.Point3 loc, double angle, [bool twoSided = false]) {
    double c = math.cos(angle)*0.5, s = math.sin(angle)*0.5;
    _addQuad(shape, loc,
      new Math.Point3( c,  0.0, -s),
      new Math.Point3( c, -0.5, -s),
      new Math.Point3(-c, -0.5,  s),
      new Math.Point3(-c,  0.0,  s),
      new Math.Vector3(s,  0.0,  c), twoSided, 1.0);
  }

  /// Adds a plant to the shapes.
  /// It selects the correct shape to add to from the materials and given block [value].
  void _addPlantToShapes(Math.Point3 loc, int value) {
    List<int> offset = this._mats.matData(value);
    this._addQuadRotToShape(this._getShape(offset[0]), loc, Math.PI*0.5/4.0, true);
    this._addQuadRotToShape(this._getShape(offset[0]), loc, Math.PI*2.5/4.0, true);
  }

  /// Adds a single fern leaf to the given [shape] at the given [angle] in radians.
  void _addFernLeaf(Shapes.ReducedShape shape, Math.Point3 loc, double angle) {
    Math.Matrix3 mat = new Math.Matrix3.rotateY(angle);
    _addQuad(shape, loc,
      mat.transPnt3(new Math.Point3(0.4, -0.1, -0.4)),
      mat.transPnt3(new Math.Point3(0.0, -0.5,  0.0)),
      mat.transPnt3(new Math.Point3(0.4, -0.1,  0.4)),
      mat.transPnt3(new Math.Point3(0.8,  0.0,  0.0)),
      _topNorm, true, 1.0);
  }

  /// Adds a fern to the shapes at the given [loc].
  void _addFernToShapes(Math.Point3 loc) {
    List<int> offset = this._mats.matData(BlockType.Fern);
    _addFernLeaf(this._getShape(offset[0]), loc, Math.PI*0.2/2.0);
    _addFernLeaf(this._getShape(offset[0]), loc, Math.PI*1.1/2.0);
    _addFernLeaf(this._getShape(offset[0]), loc, Math.PI*2.3/2.0);
    _addFernLeaf(this._getShape(offset[0]), loc, Math.PI*3.2/2.0);
  }

  /// Adds a mushroom to the shapes at the given [loc].
  void _addMushroomToShapes(Math.Point3 loc) {
    List<int> offset = this._mats.matData(BlockType.Mushroom);
    Shapes.ReducedShape topShape    = this._getShape(offset[0]);
    Shapes.ReducedShape bottomShape = this._getShape(offset[1]);
    Shapes.ReducedShape sideShape   = this._getShape(offset[2]);

    List<Shapes.Vertex> side = [];
    List<Shapes.Vertex> botcap = [];
    for (double d = 0.0; d <= 2.0; d += 0.25) {
      Math.Matrix3 mat = new Math.Matrix3.rotateY(Math.PI*d);
      side.add(this._getVertex(loc + mat.transPnt3(new Math.Point3( 0.07, -0.1, 0.0)), mat.transVec3(_frontNorm), (d-1.0).abs(), 0.0));
      side.add(this._getVertex(loc + mat.transPnt3(new Math.Point3( 0.1,  -0.5, 0.0)), mat.transVec3(_frontNorm), (d-1.0).abs(), 1.0));
      Math.Point3 topLoc = mat.transPnt3(new Math.Point3(0.1, -0.5, 0.0));
      Math.Point3 topTxt = mat.transPnt3(new Math.Point3(0.1,  0.0, 0.0));
      botcap.add(this._getVertex(loc + topLoc, _bottomNorm, topTxt.x+0.5, topTxt.z+0.5));
    }

    int side1Index = sideShape.addVertices(side);
    int botcapIndex = bottomShape.addVertices(botcap);
    sideShape.addTriangleStrip(new List<int>.generate(side.length, (int i) => side1Index+i));
    bottomShape.addTriangleFan(new List<int>.generate(botcap.length, (int i) => botcapIndex+i));

    List<Shapes.Vertex> top = [];
    List<Shapes.Vertex> bottom = [];
    top.add(   this._getVertex(loc + new Math.Point3(0.0,  0.05, 0.0), _topNorm,    0.5, 0.5));
    bottom.add(this._getVertex(loc + new Math.Point3(0.0, -0.1,  0.0), _bottomNorm, 0.5, 0.5));

    for (double d = 0.0; d <= 1.0; d += 0.1) {
      Math.Matrix3 topMat = new Math.Matrix3.rotateY(-Math.PI*2.0*d);
      Math.Point3 topLoc = topMat.transPnt3(new Math.Point3(0.4, -0.15, 0.0));
      Math.Point3 topTxt = topMat.transPnt3(new Math.Point3(0.5,  0.0,  0.0));
      top.add(this._getVertex(loc + topLoc, null, topTxt.x+0.5, topTxt.z+0.5));

      Math.Matrix3 botMat = new Math.Matrix3.rotateY(Math.PI*2.0*d);
      Math.Point3 botLoc = botMat.transPnt3(new Math.Point3(0.4, -0.15, 0.0));
      Math.Point3 botTxt = botMat.transPnt3(new Math.Point3(0.5,  0.0,  0.0));
      bottom.add(this._getVertex(loc + botLoc, null, botTxt.x+0.5, botTxt.z+0.5));
    }

    int topIndex = topShape.addVertices(top);
    int bottomIndex = bottomShape.addVertices(bottom);
    topShape.addTriangleFan(new List<int>.generate(top.length, (int i) => topIndex+i));
    bottomShape.addTriangleFan(new List<int>.generate(bottom.length, (int i) => bottomIndex+i));
  }
}