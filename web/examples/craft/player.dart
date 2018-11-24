part of craft;

/// The object defining the player and view of the game.
class Player {
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
    td.userInput.lockOnClick = true;
    td.userInput.locked
      ..horizontalSensitivity = Constants.mouseSensitivity
      ..verticalSensitivity = Constants.mouseSensitivity;

    this._trans = new Movers.UserTranslator(input: td.userInput)
      ..offsetX.maximumVelocity = Constants.walkSpeed
      ..offsetY.maximumVelocity = Constants.maxFallSpeed
      ..offsetY.acceleration = Constants.gravity
      ..offsetZ.maximumVelocity = Constants.walkSpeed
      ..collisionHandle = this._handleCollide;
    this._rot = new Movers.UserRotater.flat(input: td.userInput, locking: true);
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

    // Sets up the key watcher for jumping.
    new Input.KeyGroup()
      ..addKey(Input.Key.spacebar)
      ..attach(td.userInput)
      ..keyDown.add(this._onJump);
    this._touchingGround = true;

    // Sets up the key watcher for changing the selected block value.
    new Input.KeyGroup()
      ..addKey(Input.Key.tab)
      ..addKey(Input.Key.tab, shift: true)
      ..attach(td.userInput)
      ..keyDown.add(this._onBlockCycle);

    // Sets up the key watcher for modifying the voxel data of a chunk.
    new Input.KeyGroup()
      ..addKey(Input.Key.keyE)
      ..addKey(Input.Key.keyQ)
      ..attach(td.userInput)
      ..keyDown.add(this._onBlockChange);
    td.userInput.locked.down.add(this._onClickBlockChange);

    new Input.KeyGroup()
      ..addKey(Input.Key.keyO)
      ..attach(td.userInput)
      ..keyDown.add(this._onReturnToOrigin);

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

  /// Gets the specific point location of the player in the world.
  Math.Point3 get point => this._playerLoc.matrix.transPnt3(Math.Point3.zero);

  /// The base entity for the player.
  ThreeDart.Entity get entity => this._entity;

  /// Sets the player's coordinates to the starting position at the top most location.
  void goHome() {
    Chunk chunk = this._world.findChunk(Constants.playerStartX.toInt(), Constants.playerStartZ.toInt());
    int y = chunk?.topHit(Constants.playerStartX.toInt(), Constants.playerStartZ.toInt()) ?? 0;
    this._trans.location = new Math.Point3(Constants.playerStartX, y.toDouble()+60.0, Constants.playerStartZ);
    this._trans.velocity = Math.Vector3.zero;
  }

  /// Handles then the player presses the return to origin button.
  void _onReturnToOrigin(Events.EventArgs args) {
    this.goHome();
  }

  /// Determines if the block at the given coordinates can not be walked through.
  bool _isHard(double x, double y, double z) {
    BlockInfo info = this._world.getBlock(x, y, z);
    bool hard = BlockType.hard(info.value);
    return hard;
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
    if (this._highlight == null) return;

    int blockType = BlockType.Air;
    if (setBlock) {
      NeighborBlockInfo neighbor = this._getNeighborBlock(this._highlight, this._playerViewTarget());
      blockType = BlockType.PlaceableBlocks[this._selectedBlockIndex];
      int oldValue = this._highlight.value;
      this._highlight = neighbor.info;

      // Keep a block from being put on the top of a plant.
      if (neighbor.region.overlaps(Math.HitRegion.YPos)) {
        if (BlockType.plant(oldValue)) return;
      }

      // Keep a plant from being put on water or air.
      if (BlockType.plant(blockType)) {
        if (!BlockType.solid(new BlockInfo.below(this._highlight).value)) return;
      }

      // Change the block type based on the side the block is being added to.
      if (blockType == BlockType.TrunkUD) {
        if (neighbor.region.overlaps(Math.HitRegion.XPos|Math.HitRegion.XNeg)) {
          blockType = BlockType.TrunkEW;
        } else if (neighbor.region.overlaps(Math.HitRegion.ZPos|Math.HitRegion.ZNeg)) {
          blockType = BlockType.TrunkNS;
        }
      } else if (blockType == BlockType.WoodUD) {
        if (neighbor.region.overlaps(Math.HitRegion.XPos|Math.HitRegion.XNeg)) {
          blockType = BlockType.WoodEW;
        } else if (neighbor.region.overlaps(Math.HitRegion.ZPos|Math.HitRegion.ZNeg)) {
          blockType = BlockType.WoodNS;
        }
      }
    }

    Chunk chunk = this._highlight.chunk;
    if (chunk != null) {
      // Apply the new block type.
      this._highlight.value = blockType;

      // Remove plant if a plant was above a removed block.
      if (blockType == BlockType.Air) {
        BlockInfo aboveInfo = new BlockInfo.above(this._highlight);
        if (BlockType.plant(aboveInfo.value)) aboveInfo.value = BlockType.Air;
      }
      
      // Indicate which chunks need to be updated.
      chunk.needUpdate = true;
      if (this._highlight.x <= 0)                           chunk.left?.needUpdate = true;
      if (this._highlight.z <= 0)                           chunk.back?.needUpdate = true;
      if (this._highlight.x >= Constants.chunkSideSize - 1) chunk.right?.needUpdate = true;
      if (this._highlight.z >= Constants.chunkSideSize - 1) chunk.front?.needUpdate = true;
    }
  }

  /// Handles checking for collision while the player is moving, falling, or jumping.
  Math.Point3 _handleCollide(Math.Point3 prev, Math.Point3 loc) {
    this._touchingGround = false;

    List<Math.Point3> collideOffsets = List<Math.Point3>.from([
      Math.Point3.zero,

      // new Math.Point3(Constants.collisionPad, -Constants.playerHighOffset, Constants.collisionPad),
      // new Math.Point3(Constants.collisionPad, -Constants.playerHighOffset, -Constants.collisionPad),
      // new Math.Point3(-Constants.collisionPad, -Constants.playerHighOffset, -Constants.collisionPad),
      // new Math.Point3(-Constants.collisionPad, -Constants.playerHighOffset, Constants.collisionPad),

      // new Math.Point3(Constants.collisionPad, -Constants.playerLowOffset, Constants.collisionPad),
      // new Math.Point3(Constants.collisionPad, -Constants.playerLowOffset, -Constants.collisionPad),
      // new Math.Point3(-Constants.collisionPad, -Constants.playerLowOffset, -Constants.collisionPad),
      // new Math.Point3(-Constants.collisionPad, -Constants.playerLowOffset, Constants.collisionPad),
    ]);
    final int offsetCount = collideOffsets.length;

    for (int loop1 = 0; loop1 < 5; loop1++) {
      Math.Ray3 ray = new Math.Ray3.fromPoints(prev, loc);
      Math.Point3 vec = new Math.Point3.fromVector3(ray.vector.normal()*0.25);
      ray = new Math.Ray3.fromPoints(prev-vec, loc+vec);

      List<Math.Ray3> backRays = new List<Math.Ray3>();
      List<NeighborBlockInfo> inters = new List<NeighborBlockInfo>();
      for (int i = 0; i < offsetCount; i++) {
        ray = new Math.Ray3.fromVertex(ray.start+collideOffsets[i], ray.vector);
        backRays.add(ray.reverse);

        BlockInfo info = this._world.getBlock(ray.x, ray.y, ray.z);
        inters.add(new NeighborBlockInfo(info, Math.HitRegion.None));
      }

      // Find first block collision with head and feet.
      int index = -1;
      for (int loop2 = 0; loop2 < 100; loop2++) {
        for (int i = 0; i < offsetCount; i++) {
          BlockInfo info = inters[i]?.info;
          if ((info == null) || BlockType.hard(info.value)) {
            index = i;
            break;
          }
          inters[i] = this._getNeighborBlock(info, backRays[i]);
        }
      }

      // Check if reached a stopping state.
      NeighborBlockInfo inter = inters[index];
      BlockInfo info = inter?.info;
      if ((info != null) && BlockType.hard(info.value)) {
        Math.Point3 offset = collideOffsets[index];
        double x = loc.x, y = loc.y, z = loc.z;
        print(">> $index, $info, ${inter.region}, $ray, $vec, $offset"); // TODO: REMOVE

        if (inter.region == Math.HitRegion.XNeg) {
          x = info.x - offset.x;
          this._trans.offsetX.velocity = 0.0;

        } else if (inter.region == Math.HitRegion.XPos) {
          x = info.x - offset.x;
          this._trans.offsetX.velocity = 0.0;

        } else if (inter.region == Math.HitRegion.YNeg) {
          y = info.y - offset.y;
          this._trans.offsetY.velocity = 0.0;
          this._touchingGround = true;

        } else if (inter.region == Math.HitRegion.YPos) {
          y = info.y - offset.y;
          this._trans.offsetY.velocity = 0.0;
          this._touchingGround = true;

        } else if (inter.region == Math.HitRegion.ZNeg) {
          z = info.z - offset.z;
          this._trans.offsetZ.velocity = 0.0;

        } else if (inter.region == Math.HitRegion.ZPos) {
          z = info.z - offset.z;
          this._trans.offsetZ.velocity = 0.0;

        } else break;
        Math.Point3 loc2 = new Math.Point3(x, y, z);
        if (loc2 == loc) break;
        print(">>>> $loc, $loc2"); // TODO: REMOVE
        loc = loc2;
      }
    }

    /*
    // Check if stuck in the ground and push up until out of the ground.
    // Known bug/feature: Jumping at the bottom of a tree (or any overhang) can result in "quick climbing" the tree.
    double x = loc.x, y = loc.y, z = loc.z;
    double ny = prev.y.floor() + 0.5;
    while (_isHard(x, y-Constants.playerHeight+Constants.collisionPad, z) || _isHard(x, y, z)) {
      y = ny + Constants.collisionPad;
      ny += 1.0;
      this._trans.offsetY.velocity = 0.0;
      this._touchingGround = true;
    }
    */

    return loc;// new Math.Point3(x, y, z);
  }

  /// Calcuates the view vector down the center of the screen out away from the player.
  Math.Ray3 _playerViewTarget() {
    Math.Matrix4 mat = this._playerLoc.matrix;
    return new Math.Ray3.fromVertex(
      mat.transPnt3(Math.Point3.zero),
      mat.transVec3(new Math.Vector3(0.0, 0.0, -Constants.highlightDistance)));
  }

  /// Gets the neighboring block to the given block with the given [ray] pointing at the side to get the neighbor for.
  NeighborBlockInfo _getNeighborBlock(BlockInfo info, Math.Ray3 ray) {
    Math.Region3 region = new Math.Region3(
      info.x.toDouble()+info.chunkX.toDouble(),
      info.y.toDouble(),
      info.z.toDouble()+info.chunkZ.toDouble(),
      1.0, 1.0, 1.0);

    Math.IntersectionRayRegion3 inter = region.rayIntersection(ray);
    Math.Point3 center = region.center;
    double x = center.x, y = center.y, z = center.z;
    if (inter == null) return null;
    else if (inter.region == Math.HitRegion.XNeg) x -= 1.0;
    else if (inter.region == Math.HitRegion.XPos) x += 1.0;
    else if (inter.region == Math.HitRegion.YNeg) y -= 1.0;
    else if (inter.region == Math.HitRegion.YPos) y += 1.0;
    else if (inter.region == Math.HitRegion.ZNeg) z -= 1.0;
    else if (inter.region == Math.HitRegion.ZPos) z += 1.0;
    else return null;

    BlockInfo block = this._world.getBlock(x, y, z);
    return new NeighborBlockInfo(block, inter.region);
  }

  /// Updates the selection for the highlighted block that can be modified.
  void _updateHighlight(Events.EventArgs _) {
    Math.Ray3 ray = this._playerViewTarget();
    Math.Ray3 back = ray.reverse;

    int dist = 0;
    BlockInfo info = this._world.getBlock(ray.x, ray.y, ray.z);
    while ((info != null) && (info.value == BlockType.Air)) {
      info = this._getNeighborBlock(info, back)?.info;
      dist++;
    }

    if ((info != null) && ((dist < 1) || (info.value == BlockType.Air) || (info.value == BlockType.Boundary))) info = null;
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
