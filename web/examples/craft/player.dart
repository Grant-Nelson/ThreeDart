part of craft;

class Player {
  static const int _startX = 0;
  static const int _startZ = 0;
  static const double _gravity = -100.0;
  static const double _speed = 6.0;
  static const double _fallSpeed = 60.0;
  static const double _pad = 0.25;
  static const double _jumpSpeed = 30.0;
  static const double _highlightDistance = 6.0;

  Movers.UserTranslator _trans;
  Movers.UserRotater _rot;
  World _world;
  bool _touchingGround;
  int _selectedBlockIndex;
  BlockInfo _highlight;

  Movers.Group _camera;
  Movers.Group _playerLoc;
  Movers.Group _handLoc;
  Movers.Group _crossHairLoc;

  ThreeDart.Entity _crossHairs;
  ThreeDart.Entity _blockHand;
  ThreeDart.Entity _blockHighlight;
  ThreeDart.Entity _entity;
  List<ThreeDart.Entity> _blockHandEntities;

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
      new Movers.Constant.scale(0.04, -0.04, 0.04),
      new Movers.Constant.translate(-0.15, 0.06, -0.2),
      this._playerLoc]);

    this._crossHairLoc = new Movers.Group([
      new Movers.Constant.scale(0.005, -0.005, 0.005),
      new Movers.Constant.translate(0.0, 0.0, -0.2),
      this._playerLoc]);
    
    new ThreeDart.UserKeyGroup()
      ..addKey(ThreeDart.UserKey.spacebar)
      ..attach(td.userInput)
      ..keyDown.add(this._onJump);
    this._touchingGround = true;

    new ThreeDart.UserKeyGroup()
      ..addKey(ThreeDart.UserKey.tab)
      ..addKey(ThreeDart.UserKey.tab, shift: true)
      ..attach(td.userInput)
      ..keyDown.add(this._onBlockCycle);

    new ThreeDart.UserKeyGroup()
      ..addKey(ThreeDart.UserKey.keyE)
      ..addKey(ThreeDart.UserKey.keyQ)
      ..attach(td.userInput)
      ..keyDown.add(this._onBlockChange);
    
    Shapes.Shape crossHairShape = new Shapes.Shape();
    Shapes.Vertex ver1 = crossHairShape.vertices.addNew(
      loc:   new Math.Point3(-1.0, -1.0, 0.0),
      txt2D: new Math.Point2(0.0, 1.0));
    Shapes.Vertex ver2 = crossHairShape.vertices.addNew(
      loc:   new Math.Point3(1.0, -1.0, 0.0),
      txt2D: new Math.Point2(1.0, 1.0));
    Shapes.Vertex ver3 = crossHairShape.vertices.addNew(
      loc:   new Math.Point3(1.0, 1.0, 0.0),
      txt2D: new Math.Point2(1.0, 0.0));
    Shapes.Vertex ver4 = crossHairShape.vertices.addNew(
      loc:   new Math.Point3(-1.0, 1.0, 0.0),
      txt2D: new Math.Point2(0.0, 0.0));
    crossHairShape.faces.addFan([ver1, ver2, ver3, ver4]);
    this._crossHairs = new ThreeDart.Entity(
      mover: this._crossHairLoc,
      shape: crossHairShape,
      tech: this._world.materials.crosshair);

    this._blockHand = new ThreeDart.Entity(mover: this._handLoc);
    this._blockHandEntities = new List<ThreeDart.Entity>();
    for (Techniques.MaterialLight mat in this._world.materials.materials) {
      ThreeDart.Entity entity = new ThreeDart.Entity(tech: mat);
      this._blockHand.children.add(entity);
      this._blockHandEntities.add(entity);
    }

    this._blockHighlight = new ThreeDart.Entity(tech: this._world.materials.selection);
    this._entity = new ThreeDart.Entity(children: [this._crossHairs, this._blockHand, this._blockHighlight]);
    this._selectedBlockIndex = 0;
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
    int length = BlockType.PlaceableBlocks.length;
    if (keyArgs.key.shift) {
      this._selectedBlockIndex--;
      if (this._selectedBlockIndex < 0)
        this._selectedBlockIndex = length-1;
    } else {
      this._selectedBlockIndex++;
      if (this._selectedBlockIndex >= length)
        this._selectedBlockIndex = 0;
    }
    this._updateHand();
  }

  void _onBlockChange(ThreeDart.EventArgs args) {
    if (this._highlight == null) return;

    int blockType = BlockType.Air;
    if ((args as ThreeDart.KeyEventArgs).key.key == ThreeDart.UserKey.keyE) {
      this._highlight = this._getNeighborBlock(this._highlight, this._playerViewTarget());
      blockType = BlockType.PlaceableBlocks[this._selectedBlockIndex];
    }

    Chunk chunk = this._highlight.chunk;
    if (chunk != null) {
      this._highlight.value = blockType;
      chunk.needUpdate = true;
      if (this._highlight.x <= 0)               chunk.left?.needUpdate = true;
      if (this._highlight.z <= 0)               chunk.back?.needUpdate = true;
      if (this._highlight.x >= Chunk.xSize - 1) chunk.right?.needUpdate = true;
      if (this._highlight.z >= Chunk.zSize - 1) chunk.front?.needUpdate = true;
    }
  }

  Math.Point3 _handleCollide(Math.Point3 prev, Math.Point3 loc) {
    double x = loc.x, y = loc.y, z = loc.z;
    final double nx = prev.x.floor()+0.5, ny = prev.y.floor()+0.5, nz = prev.z.floor()+0.5;
    final double headY = y - 1.5;
    final double footY = y - 0.5;
    this._touchingGround = false;

    // TODO: Determine if underwater so that the water can be flipped inside out.
    // TODO: If inside a block, push towards nearest wall.

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

  Math.Ray3 _playerViewTarget() {
    Math.Matrix4 mat = this._playerLoc.matrix;
    return new Math.Ray3.fromVertex(
      mat.transPnt3(new Math.Point3.zero()),
      mat.transVec3(new Math.Vector3(0.0, 0.0, -_highlightDistance)));
  }

  BlockInfo _getNeighborBlock(BlockInfo info, Math.Ray3 ray) {
    double x = info.x.toDouble()+info.chunkX.toDouble();
    double y = info.y.toDouble();
    double z = info.z.toDouble()+info.chunkZ.toDouble();
    Math.Region3 region = new Math.Region3(x, y, z, 1.0, 1.0, 1.0);

    Math.IntersectionRayRegion3 inter = region.rayIntersection(ray);
    if (inter == null) return null;
    else if (inter.region == Math.HitRegion.XNeg) x -= 0.9;
    else if (inter.region == Math.HitRegion.XPos) x += 1.1;
    else if (inter.region == Math.HitRegion.YNeg) y -= 0.9;
    else if (inter.region == Math.HitRegion.YPos) y += 1.1;
    else if (inter.region == Math.HitRegion.ZNeg) z -= 0.9;
    else if (inter.region == Math.HitRegion.ZPos) z += 1.1;
    else return null;

    return this._world.getBlock(x, y, z);
  }

  void _updateHighlight(ThreeDart.EventArgs _) {
    Math.Ray3 ray = this._playerViewTarget();
    Math.Ray3 back = ray.reverse;

    BlockInfo info = this._world.getBlock(ray.x, ray.y, ray.z);
    while ((info != null) && (info.value == BlockType.Air))
      info = this._getNeighborBlock(info, back);

    if ((info != null) && (info.value == BlockType.Air)) info = null;
    this._highlight = info;

    if (this._highlight == null) {
      this._blockHighlight.enabled = false;
    } else {
      Shaper shaper = new Shaper(null);
      shaper.addCubeToOneShape(this._highlight.chunkX+this._highlight.x, this._highlight.y, 
        this._highlight.chunkZ+this._highlight.z, true, 1.1);
      shaper.finish([this._blockHighlight]);
    }
  }

  void _updateHand() {
    Shaper shaper = new Shaper(this._world.materials);
    shaper.buildSingleBlock(BlockType.PlaceableBlocks[this._selectedBlockIndex]);
    shaper.finish(this._blockHandEntities);
  }
}
