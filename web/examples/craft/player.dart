part of craft;

class Player {
  static const int _startX = 0;
  static const int _startZ = 0;
  static const double _gravity = -100.0;
  static const double _speed = 6.0;
  static const double _fallSpeed = 60.0;
  static const double _pad = 0.25;
  static const double _jumpSpeed = 30.0;
  static const double _highlightDistance = 4.0;

  Movers.UserTranslator _trans;
  Movers.UserRotater _rot;
  World _world;
  Movers.Group _camera;
  Movers.Group _playerLoc;
  Movers.Group _handLoc;
  bool _touchingGround;
  int _selectedBlock;
  BlockInfo _highlight;

  ThreeDart.Entity _blockHand;
  ThreeDart.Entity _blockHighlight;
  ThreeDart.Entity _entity;

  Player(ThreeDart.ThreeDart td, this._world) {
    this._trans = new Movers.UserTranslator(input: td.userInput)
      ..offsetX.maximumVelocity = _speed
      ..offsetY.maximumVelocity = _fallSpeed
      ..offsetY.acceleration = _gravity
      ..offsetZ.maximumVelocity = _speed
      ..collisionHandle = this._handleCollide;
    this._rot = new Movers.UserRotater.flat(input: td.userInput);
    this._rot.changed.add((ThreeDart.EventArgs args) {
      this._trans.velocityRotation = new Math.Matrix3.rotateY(-this._rot.yaw.location);
    });

    this._camera = new Movers.Group([this._trans, this._rot])
      ..changed.add(this._updateHighlight);
    this._playerLoc = new Movers.Group([
      new Movers.Invert(this._rot),
      this._trans, new Movers.Constant.scale(1.0, -1.0, 1.0)]);
    
    this._handLoc = new Movers.Group([
      new Movers.Constant.translate(-0.5, -0.5, -0.5),
      new Movers.Rotater(yaw: -0.1, deltaYaw: 0.0, deltaPitch: 0.1, deltaRoll: 0.0),
      new Movers.Constant.translate(0.5, 0.5, 0.5),
      new Movers.Constant.scale(1.0, -1.0, 1.0),
      new Movers.Constant.scale(0.04, 0.04, 0.04),
      new Movers.Constant.translate(-0.15, 0.06, -0.2),
      this._playerLoc]);
    
    new ThreeDart.UserKeyGroup()
      ..addKey(ThreeDart.UserKey.spacebar)
      ..attach(td.userInput)
      ..keyDown.add(this._onJump);
    this._touchingGround = true;

    new ThreeDart.UserKeyGroup()
      ..addKey(ThreeDart.UserKey.keyE)
      ..addKey(ThreeDart.UserKey.keyQ)
      ..attach(td.userInput)
      ..keyDown.add(this._onBlockCycle);
    
    this._blockHand = new ThreeDart.Entity(mover: this._handLoc);
    this._blockHighlight = new ThreeDart.Entity();
    this._entity = new ThreeDart.Entity(children: [this._blockHand, this._blockHighlight]);
    this._selectedBlock = BlockType.Dirt;
    this._highlight = null;
    this._updateHand();
  }
  
  Movers.Group get camera => this._camera;
  Movers.Group get location => this._playerLoc;
  ThreeDart.Entity get entity => this._entity;

  void goHome() {
    Chunk chunk = this._world.findChunk(_startX, _startZ);
    int y = chunk.topHit(_startX, _startZ);
    this._trans.location = new Math.Point3(
      _startX.toDouble(), y.toDouble()+60.0, _startZ.toDouble());
    this._trans.velocity = new Math.Vector3.zero();
  }

  bool _isHard(double x, double y, double z) {
    BlockInfo info = this._world.getBlock(x, y, z);
    bool hard = BlockType.hard(info.value);
    return hard;
  }

  void _onJump(ThreeDart.EventArgs args) {
    if (this._touchingGround)
      this._trans.offsetY.velocity = _jumpSpeed;
  }

  void _onBlockCycle(ThreeDart.EventArgs args) {
    ThreeDart.KeyEventArgs keyArgs = args as ThreeDart.KeyEventArgs;
    if (keyArgs.key.key == ThreeDart.UserKey.keyE) {
      this._selectedBlock++;
      if (this._selectedBlock > BlockType.Mushroom)
        this._selectedBlock = BlockType.Dirt;
    } else {
      this._selectedBlock--;
      if (this._selectedBlock < BlockType.Dirt)
        this._selectedBlock = BlockType.Mushroom;
    }
    this._updateHand();
  }

  Math.Point3 _handleCollide(Math.Point3 prev, Math.Point3 loc) {
    double x = loc.x, y = loc.y, z = loc.z;
    final double nx = prev.x.floor()+0.5, ny = prev.y.floor()+0.5, nz = prev.z.floor()+0.5;
    final double headY = y - 1.5;
    final double footY = y - 0.5;
    this._touchingGround = false;

    // TODO: Determine if underwater so that the water can be flipped inside out.

    if (_isHard(x-_pad, headY, z) ||
        _isHard(x-_pad, footY, z)) {
      x = nx - _pad;
      this._trans.offsetX.velocity = 0.0;
    } else if (_isHard(x+_pad, headY, z) ||
               _isHard(x+_pad, footY, z)) {
      x = nx + _pad;
      this._trans.offsetX.velocity = 0.0;
    }

    if (_isHard(x, headY, z-_pad) ||
        _isHard(x, footY, z-_pad)) {
      z = nz - _pad;
      this._trans.offsetZ.velocity = 0.0;
    } else if (_isHard(x, headY, z+_pad) ||
               _isHard(x, footY, z+_pad)) {
      z = nz + _pad;
      this._trans.offsetZ.velocity = 0.0;
    }

    if (_isHard(x, y-_pad, z)) {
      y = ny - _pad;
      this._trans.offsetY.velocity = 0.0;
    } else if (_isHard(x, y-2.0+_pad, z)) {
      y = ny + _pad;
      this._trans.offsetY.velocity = 0.0;
      this._touchingGround = true;
    }
    
    return new Math.Point3(x, y, z);
  }

  void _updateHighlight(ThreeDart.EventArgs _) {
    Math.Matrix4 mat = this._playerLoc.matrix;
    Math.Ray3 ray = new Math.Ray3.fromVertex(
      mat.transPnt3(new Math.Point3.zero()),
      mat.transVec3(new Math.Vector3(0.0, 0.0, -_highlightDistance)));
    Math.Ray3 back = ray.reverse;

    BlockInfo info = this._world.getBlock(ray.x, ray.y, ray.z);
    while ((info != null) && (info.value == BlockType.Air)) {
      
      double x = info.x.toDouble()+info.chunk.x;
      double y = info.y.toDouble();
      double z = info.z.toDouble()+info.chunk.z;
      Math.Region3 region = new Math.Region3(x, y, z, 1.0, 1.0, 1.0);

      Math.IntersectionRayRegion3 inter = region.rayIntersection(back);
      if (inter == null) break;
      else if (inter.region == Math.HitRegion.XNeg) x -= 0.9;
      else if (inter.region == Math.HitRegion.XPos) x += 1.1;
      else if (inter.region == Math.HitRegion.YNeg) y -= 0.9;
      else if (inter.region == Math.HitRegion.YPos) y += 1.1; 
      else if (inter.region == Math.HitRegion.ZNeg) z -= 0.9;
      else if (inter.region == Math.HitRegion.ZPos) z += 1.1;
      else break;

      info = this._world.getBlock(x, y, z);
    }
    if ((info != null) && (info.value == BlockType.Air)) info = null;
    this._highlight = info;

    if (this._highlight == null) {
      this._blockHighlight.enabled = false;
    } else {
      double x = this._highlight.x.toDouble()+this._highlight.chunk.x;
      double y = this._highlight.y.toDouble();
      double z = this._highlight.z.toDouble()+this._highlight.chunk.z;

      Shapes.Shape shape = new Shapes.Shape();
      new Shaper(null, this._highlight.chunk.x, this._highlight.chunk.z)
        .buildSingleBlock(shape, BlockType.Selection, this._highlight.x, this._highlight.y, this._highlight.z);

      Shapes.Vertex pnt0 = shape.vertices.addNewLoc(x,     y,     z);
      Shapes.Vertex pnt1 = shape.vertices.addNewLoc(x+1.0, y,     z);
      Shapes.Vertex pnt2 = shape.vertices.addNewLoc(x+1.0, y+1.0, z);
      Shapes.Vertex pnt3 = shape.vertices.addNewLoc(x,     y+1.0, z);
      Shapes.Vertex pnt4 = shape.vertices.addNewLoc(x,     y,     z+1.0);
      Shapes.Vertex pnt5 = shape.vertices.addNewLoc(x+1.0, y,     z+1.0);
      Shapes.Vertex pnt6 = shape.vertices.addNewLoc(x+1.0, y+1.0, z+1.0);
      Shapes.Vertex pnt7 = shape.vertices.addNewLoc(x,     y+1.0, z+1.0);

      // TODO: Fix rendering and fix null when out-of-bounds

      shape.lines.addLines([
        pnt0, pnt1, pnt1, pnt2, pnt2, pnt3, pnt3, pnt0,
        pnt4, pnt5, pnt5, pnt6, pnt6, pnt7, pnt7, pnt4,
        pnt0, pnt4, pnt1, pnt5, pnt2, pnt6, pnt3, pnt7]);
        
      this._blockHighlight.shape = shape;
      this._blockHighlight.enabled = true;
    }
  }

  void _updateHand() {
    Shapes.Shape shape = new Shapes.Shape();
    new Shaper(null).buildSingleBlock(shape, this._selectedBlock);
    this._blockHand.shape = shape;
  }
}
