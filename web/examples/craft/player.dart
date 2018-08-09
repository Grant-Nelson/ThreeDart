part of craft;

/// The object defining the player and view of the game.
class Player {
  static const int _startX = 0; /// The x starting location of the player.
  static const int _startZ = 0; /// The y starting location of the player.
  static const double _gravity = -100.0; /// The gravity force to apply onto the player.
  static const double _speed = 6.0; /// The speed at which the player moves.
  static const double _fallSpeed = 60.0; /// The maximum speed the player can fall at, terminal velocity.
  static const double _pad = 0.25; /// The padding for collision detection.
  static const double _jumpSpeed = 30.0; // The velocity to apply when the player jumps.
  static const double _highlightDistance = 6.0; /// The maximum distance to set a highlight selection from the player.
  static const double _playerHeight = 2.0; /// The player's height.
  static const double _headOffset = 0.5; /// The player's head collision offset.
  static const double _footOffset = 1.5; /// The player's foot collision offset.

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

  /// Creates a new player for the world.
  Player(ThreeDart.ThreeDart td, this._world) {
    this._trans = new Movers.UserTranslator(input: td.userInput)
      ..offsetX.maximumVelocity = _speed
      ..offsetY.maximumVelocity = _fallSpeed
      ..offsetY.acceleration = _gravity
      ..offsetZ.maximumVelocity = _speed
      ..collisionHandle = this._handleCollide;
    this._rot = new Movers.UserRotater.flat(input: td.userInput, locking: true);
    this._rot.changed.add((ThreeDart.EventArgs args) {
      this._trans.velocityRotation = new Math.Matrix3.rotateY(-this._rot.yaw.location);
    });

    // Sets up the camera and player locations.
    this._camera = new Movers.Group([this._trans, this._rot])
      ..changed.add(this._updateHighlight);
    this._playerLoc = new Movers.Group([
      new Movers.Invert(this._rot),
      this._trans, new Movers.Constant.scale(1.0, -1.0, 1.0)]);

    // Sets up the location for the player's hand to show the selected block value to place.
    this._handLoc = new Movers.Group([
      new Movers.Constant.translate(-0.5, -0.5, -0.5),
      new Movers.Rotater(yaw: -0.1, deltaYaw: 0.0, deltaPitch: 0.1, deltaRoll: 0.0),
      new Movers.Constant.translate(0.5, 0.5, 0.5),
      new Movers.Constant.scale(0.04, -0.04, 0.04),
      new Movers.Constant.translate(-0.15, 0.06, -0.2),
      this._playerLoc]);

    // Sets up the location for the player's cross hairs.
    this._crossHairLoc = new Movers.Group([
      new Movers.Constant.scale(0.005, -0.005, 0.005),
      new Movers.Constant.translate(0.0, 0.0, -0.2),
      this._playerLoc]);

    // Sets up the key watcher for jumping.
    new ThreeDart.UserKeyGroup()
      ..addKey(ThreeDart.UserKey.spacebar)
      ..attach(td.userInput)
      ..keyDown.add(this._onJump);
    this._touchingGround = true;

    // Sets up the key watcher for changing the selected block value.
    new ThreeDart.UserKeyGroup()
      ..addKey(ThreeDart.UserKey.tab)
      ..addKey(ThreeDart.UserKey.tab, shift: true)
      ..attach(td.userInput)
      ..keyDown.add(this._onBlockCycle);

    // Sets up the key watcher for modifying the voxel data of a chunk.
    new ThreeDart.UserKeyGroup()
      ..addKey(ThreeDart.UserKey.keyE)
      ..addKey(ThreeDart.UserKey.keyQ)
      ..attach(td.userInput)
      ..keyDown.add(this._onBlockChange);

    // Creates the cross hair entity for drawing the cross hairs.
    this._crossHairs = new ThreeDart.Entity(
      mover: this._crossHairLoc,
      shape: Shapes.square(type: Data.VertexType.Pos|Data.VertexType.Txt2D),
      tech: this._world.materials.crosshair);

    // Creates the hand entity for showing the selected block type that will be added.
    this._blockHand = new ThreeDart.Entity(mover: this._handLoc);
    this._blockHandEntities = new List<ThreeDart.Entity>();
    for (Techniques.MaterialLight mat in this._world.materials.materials) {
      ThreeDart.Entity entity = new ThreeDart.Entity(tech: mat);
      this._blockHand.children.add(entity);
      this._blockHandEntities.add(entity);
    }
    this._selectedBlockIndex = 0;

    // Creates the selection highlight to show which
    this._blockHighlight = new ThreeDart.Entity(tech: this._world.materials.selection);
    this._highlight = null;

    // Puts all the entities under one for the whole player.
    this._entity = new ThreeDart.Entity(children: [this._crossHairs, this._blockHand, this._blockHighlight]);
    this._updateHand();
  }

  /// The camera mover used to position the view of the world.
  Movers.Group get camera => this._camera;

  /// The mover to the location of the player.
  Movers.Group get location => this._playerLoc;

  /// The base entity for the player.
  ThreeDart.Entity get entity => this._entity;

  /// Sets the player's coordinates to the starting position at the top most location.
  void goHome() {
    Chunk chunk = this._world.findChunk(_startX, _startZ);
    int y = chunk.topHit(_startX, _startZ);
    this._trans.location = new Math.Point3(
      _startX.toDouble(), y.toDouble()+60.0, _startZ.toDouble());
    this._trans.velocity = new Math.Vector3.zero();
  }

  /// Determines if the block at the given coordinates can not be walked through.
  bool _isHard(double x, double y, double z) {
    BlockInfo info = this._world.getBlock(x, y, z);
    bool hard = BlockType.hard(info.value);
    return hard;
  }

  /// Handles when the player presses the jump key.
  void _onJump(ThreeDart.EventArgs args) {
    if (this._touchingGround)
      this._trans.offsetY.velocity = _jumpSpeed;
  }

  /// Handles when the player presses the button(s) to cycle the selected block value in the hand.
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

  /// Handles when the player presses the button(s) to modify the voxal values of a chunk.
  void _onBlockChange(ThreeDart.EventArgs args) {
    if (this._highlight == null) return;

    int blockType = BlockType.Air;
    if ((args as ThreeDart.KeyEventArgs).key.key == ThreeDart.UserKey.keyE) {
      NeighborBlockInfo neighbor = this._getNeighborBlock(this._highlight, this._playerViewTarget());
      this._highlight = neighbor.info;
      blockType = BlockType.PlaceableBlocks[this._selectedBlockIndex];

      if (blockType == BlockType.TrunkUD) {
        if (neighbor.region.overlaps(Math.HitRegion.XPos|Math.HitRegion.XNeg)) {
          blockType = BlockType.TrunkEW;
        } else if (neighbor.region.overlaps(Math.HitRegion.ZPos|Math.HitRegion.ZNeg)) {
          blockType = BlockType.TrunkNS;
        }
      }
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

  /// Handles checking for collision while the player is moving, falling, or jumping.
  Math.Point3 _handleCollide(Math.Point3 prev, Math.Point3 loc) {
    double x = loc.x, y = loc.y, z = loc.z;
    double nx = prev.x.floor()+0.5, ny = prev.y.floor()+0.5, nz = prev.z.floor()+0.5;
    this._touchingGround = false;

    // Check if hitting head
    if (_isHard(x, y-_pad, z)) {
      y = ny - _pad;
      this._trans.offsetY.velocity = 0.0;
    }

    // Check if touching the ground
    if (_isHard(x, y-_playerHeight+_pad, z)) {
      y = ny + _pad;
      this._trans.offsetY.velocity = 0.0;
      this._touchingGround = true;
    }

    // Handle pushing out of left and right walls
    if (_isHard(x-_pad, y-_headOffset, z) ||
        _isHard(x-_pad, y-_footOffset, z)) {
      x = nx - _pad;
      this._trans.offsetX.velocity = 0.0;
    } else if (_isHard(x+_pad, y-_headOffset, z) ||
               _isHard(x+_pad, y-_footOffset, z)) {
      x = nx + _pad;
      this._trans.offsetX.velocity = 0.0;
    }

    // Handle pushing out of front and back walls
    if (_isHard(x, y-_headOffset, z-_pad) ||
        _isHard(x, y-_footOffset, z-_pad)) {
      z = nz - _pad;
      this._trans.offsetZ.velocity = 0.0;
    } else if (_isHard(x, y-_headOffset, z+_pad) ||
               _isHard(x, y-_footOffset, z+_pad)) {
      z = nz + _pad;
      this._trans.offsetZ.velocity = 0.0;
    }

    // Check if stuck in the ground and push up until out of the ground.
    while (_isHard(x, y-_playerHeight+_pad, z) || _isHard(x, y, z)) {
      y = ny + _pad;
      ny += 1.0;
      this._trans.offsetY.velocity = 0.0;
      this._touchingGround = true;
    }

    return new Math.Point3(x, y, z);
  }

  /// Calcuates the view vector down the center of the screen out away from the player.
  Math.Ray3 _playerViewTarget() {
    Math.Matrix4 mat = this._playerLoc.matrix;
    return new Math.Ray3.fromVertex(
      mat.transPnt3(new Math.Point3.zero()),
      mat.transVec3(new Math.Vector3(0.0, 0.0, -_highlightDistance)));
  }

  /// Gets the neighboring block to the given block with the given [ray] pointing at the side to get the neighbor for.
  NeighborBlockInfo _getNeighborBlock(BlockInfo info, Math.Ray3 ray) {
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

    return new NeighborBlockInfo(this._world.getBlock(x, y, z), inter.region);
  }

  /// Updates the selection for the highlighted block that can be modified.
  void _updateHighlight(ThreeDart.EventArgs _) {
    Math.Ray3 ray = this._playerViewTarget();
    Math.Ray3 back = ray.reverse;

    BlockInfo info = this._world.getBlock(ray.x, ray.y, ray.z);
    while ((info != null) && (info.value == BlockType.Air)) {
      info = this._getNeighborBlock(info, back)?.info;
    }

    if ((info != null) && ((info.value == BlockType.Air) || (info.value == BlockType.Boundary))) info = null;
    this._highlight = info;

    if (this._highlight == null) {
      this._blockHighlight.enabled = false;
    } else {
      Shaper shaper = new Shaper(null, Data.VertexType.Pos | Data.VertexType.Txt2D);
      shaper.addCubeToOneShape(this._highlight.chunkX+this._highlight.x, this._highlight.y,
        this._highlight.chunkZ+this._highlight.z, true, 1.1);
      shaper.finish([this._blockHighlight]);
      this._blockHighlight.enabled = true;
    }
  }

  /// Updates the block rendered into the hand.
  void _updateHand() {
    Shaper shaper = new Shaper(this._world.materials);
    shaper.buildSingleBlock(BlockType.PlaceableBlocks[this._selectedBlockIndex]);
    shaper.finish(this._blockHandEntities);
  }
}
