part of craft;

/// The object defining the player and view of the game.
class Player {
  Movers.UserTranslator _trans;
  Movers.UserRotater _rot;
  World _world;
  bool _touchingGround;
  int _selectedBlockIndex;
  NeighborBlockInfo _highlight;
  Collider _collider;

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
  Player(Input.UserInput userInput, this._world) {
    userInput.lockOnClick = true;
    userInput.locked
      ..horizontalSensitivity = Constants.mouseSensitivity
      ..verticalSensitivity = Constants.mouseSensitivity;

    // Sets up the key watcher for jumping.
    new Input.KeyGroup()
      ..addKey(Input.Key.spacebar)
      ..attach(userInput)
      ..keyDown.add(this._onJump);
    this._touchingGround = true;

    // Sets up the key watcher for changing the selected block value.
    new Input.KeyGroup()
      ..addKey(Input.Key.tab)
      ..addKey(Input.Key.tab, shift: true)
      ..attach(userInput)
      ..keyDown.add(this._onBlockCycle);

    // Sets up the watchers for modifying the voxel data of a chunk.
    new Input.KeyGroup()
      ..addKey(Input.Key.keyE)
      ..addKey(Input.Key.keyQ)
      ..attach(userInput)
      ..keyDown.add(this._onBlockChange);
    userInput.locked.down.add(this._onClickBlockChange);

    // Sets up the watcher for returning to the origin.
    new Input.KeyGroup()
      ..addKey(Input.Key.keyO)
      ..attach(userInput)
      ..keyDown.add(this._onReturnToOrigin);

    // Sets up how the player will move around.
    this._trans = new Movers.UserTranslator(input: userInput)
      ..offsetX.maximumVelocity = Constants.walkSpeed
      ..offsetY.maximumVelocity = Constants.maxFallSpeed
      ..offsetY.acceleration = Constants.gravity
      ..offsetZ.maximumVelocity = Constants.walkSpeed
      ..collisionHandle = this._handleCollide;

    // Sets up how the player will look around.
    this._rot = new Movers.UserRotater.flat(input: userInput, locking: true);
    this._rot.changed.add((Events.EventArgs args) {
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

    // Setup collider for handling collition detection for player.
    this._collider = new Collider(this._world);

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

  /// Gets the specific point location of the player in the world.
  Math.Point3 get point => this._playerLoc.matrix.transPnt3(Math.Point3.zero);

  /// The base entity for the player.
  ThreeDart.Entity get entity => this._entity;

  /// Sets the player's coordinates to the starting position at the top most location.
  void goHome() {
    Chunk chunk = this._world.findChunk(Constants.playerStartX.toInt(), Constants.playerStartZ.toInt());
    int y = chunk?.topHit(Constants.playerStartX.toInt(), Constants.playerStartZ.toInt()) ?? 0;
    this._trans.location = new Math.Point3(Constants.playerStartX, y.toDouble()+Constants.playerStartYOffset, Constants.playerStartZ);
    this._trans.velocity = Math.Vector3.zero;
  }

  /// Handles then the player presses the return to origin button.
  void _onReturnToOrigin(Events.EventArgs args) {
    this.goHome();
  }

  /// Handles when the player presses the jump key.
  void _onJump(Events.EventArgs args) {
    if (this._touchingGround)
      this._trans.offsetY.velocity = Constants.jumpSpeed;
  }

  /// Handles when the player presses the button(s) to cycle the selected block value in the hand.
  void _onBlockCycle(Events.EventArgs args) {
    Input.KeyEventArgs keyArgs = args as Input.KeyEventArgs;
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
  void _onBlockChange(Events.EventArgs args) {
    Input.Key key = (args as Input.KeyEventArgs).key;
    this._changeBlock(key.code == Input.Key.keyE);
  }

  /// Handles when the player clicks a mouse button to modify the voxal values of a chunk.
  void _onClickBlockChange(Events.EventArgs args) {
    Input.Button button = (args as Input.MouseEventArgs).button;
    this._changeBlock(button.code == Input.Button.right);
  }

  /// Modify the voxal values of a chunk.
  /// If [setBlock] is true then the current block in the hand is set on a neighboring side to the
  /// highlight, if false then the highlighted block is set to air.
  void _changeBlock(bool setBlock) {
    if (this._highlight?.info == null) return;
    BlockInfo info = this._highlight.info;

    int blockType = BlockType.Air;
    if (setBlock) {
      blockType = BlockType.PlaceableBlocks[this._selectedBlockIndex];
      int oldValue = this._highlight.info.value;
      Math.HitRegion region = this._highlight.region;

      // Keep a block from being put on the top of a plant.
      if (region.overlaps(Math.HitRegion.YPos)) {
        if (BlockType.plant(oldValue)) return;
      }

      // Keep a plant from being put on water or air.
      if (BlockType.plant(blockType)) {
        if (!BlockType.solid(info.below.value)) return;
      }

      // Change the block type based on the side the block is being added to.
      if (blockType == BlockType.TrunkUD) {
        if (region.overlaps(Math.HitRegion.XPos|Math.HitRegion.XNeg)) {
          blockType = BlockType.TrunkEW;
        } else if (region.overlaps(Math.HitRegion.ZPos|Math.HitRegion.ZNeg)) {
          blockType = BlockType.TrunkNS;
        }
      } else if (blockType == BlockType.WoodUD) {
        if (region.overlaps(Math.HitRegion.XPos|Math.HitRegion.XNeg)) {
          blockType = BlockType.WoodEW;
        } else if (region.overlaps(Math.HitRegion.ZPos|Math.HitRegion.ZNeg)) {
          blockType = BlockType.WoodNS;
        }
      }

      // Move to the neighbor location.
      info = info.neighbor(region.inverse());

      // Check the block won't be in the player's region.
      Math.Vector3 playerLoc = new Math.Vector3.fromPoint3(this._trans.location);
      Math.Region3 playerRect = Constants.playerRegion.translate(playerLoc);
      if (info.blockRegion.overlaps(playerRect)) return;
    }

    Chunk chunk = info.chunk;
    if (chunk != null) {
      // Apply the new block type.
      info.value = blockType;

      // Remove plant if a plant was above a removed block.
      if (blockType == BlockType.Air) {
        BlockInfo aboveInfo = info.above;
        if (BlockType.plant(aboveInfo.value)) aboveInfo.value = BlockType.Air;
      }

      // Indicate which chunks need to be updated.
      chunk.needUpdate = true;
      if (info.x <= 0)                           chunk.left?.needUpdate = true;
      if (info.z <= 0)                           chunk.back?.needUpdate = true;
      if (info.x >= Constants.chunkSideSize - 1) chunk.right?.needUpdate = true;
      if (info.z >= Constants.chunkSideSize - 1) chunk.front?.needUpdate = true;
    }
  }

  /// Handles checking for collision while the player is moving, falling, or jumping.
  Math.Point3 _handleCollide(Math.Point3 prev, Math.Point3 loc) {
    // Traverse the neighboring blocks using player's movement to find first
    // hard block checking both head and foot.
    Math.Vector3 vector = new Math.Vector3.fromPoint3(loc-prev);
    if (vector.length2() < Constants.maxCollisionSpeedSquared) {
      this._collider.collide(Constants.playerRegion, prev, vector);
      this._touchingGround = this._collider.touching.has(Math.HitRegion.YPos);
      if (this._touchingGround) this._trans.offsetY.velocity = 0.0;
    }
    return this._collider.location ?? loc;
  }

  /// The handler used in update highlight for traversing neighboring blocks.
  bool _updateHighlightHandler(NeighborBlockInfo neighbor) {
    // Check if the neighbor is not air or is null.
    if ((neighbor?.info != null) && (neighbor.info.value == BlockType.Air)) return false;

    // Check if found block is valid and selectable, if not set to null.
    BlockInfo info = neighbor?.info;
    if ((info != null) && ((neighbor.depth < 0) || (info.value == BlockType.Air) ||
      (info.value == BlockType.Boundary))) neighbor = null;
    this._highlight = neighbor;

    // Either remove or create highlight for the new selection.
    if (this._highlight == null) {
      this._blockHighlight.enabled = false;
    } else {
      Shaper shaper = new Shaper(null, Data.VertexType.Pos | Data.VertexType.Txt2D);
      shaper.addCubeToOneShape(info.chunkX+info.x, info.y, info.chunkZ+info.z, true, 1.1);
      shaper.finish([this._blockHighlight]);
      this._blockHighlight.enabled = true;
    }
    return true;
  }

  /// Updates the selection for the highlighted block that can be modified.
  void _updateHighlight(Events.EventArgs _) {
    // Calcuates the view vector down the center of the screen out away from the player.
    // The ray is scaled to have the maximum highlight length.
    Math.Matrix4 mat = this._playerLoc.matrix;
    Math.Ray3 playerViewTarget = new Math.Ray3.fromVector(
      mat.transPnt3(Math.Point3.zero),
      mat.transVec3(new Math.Vector3(0.0, 0.0, -Constants.highlightDistance)));
    Math.Ray3 back = playerViewTarget.reverse;
    BlockInfo info = this._world.getBlock(playerViewTarget.x, playerViewTarget.y, playerViewTarget.z);
    NeighborBlockInfo neighbor = new NeighborBlockInfo(info, Math.HitRegion.Inside, playerViewTarget, 0);

    // Traverse the neighboring blocks using player's view to find first non-air block.
    int depth = 0;
    while (!this._updateHighlightHandler(neighbor)) {
      neighbor = this._world.getNeighborBlock(neighbor.info, playerViewTarget, back, depth);
      depth++;
    }
  }

  /// Updates the block rendered into the hand.
  void _updateHand() {
    Shaper shaper = new Shaper(this._world.materials);
    shaper.buildSingleBlock(BlockType.PlaceableBlocks[this._selectedBlockIndex]);
    shaper.finish(this._blockHandEntities);
  }
}
