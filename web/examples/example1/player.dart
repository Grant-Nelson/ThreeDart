part of example1;

class Player {
  static const int _startX = 0;
  static const int _startZ = 0;
  static const double _gravity = -100.0;
  static const double _speed = 6.0;
  static const double _fallSpeed = 60.0;
  static const double _pad = 0.25;
  static const double _jumpSpeed = 30.0;

  Movers.UserTranslator _trans;
  Movers.UserRotater _rot;
  World _world;
  Movers.Group _camera;
  Movers.Group _mat;
  ThreeDart.UserKeyGroup _jump;
  bool _touchingGround;

  Techniques.Inspection _tech;
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

    this._camera = new Movers.Group([this._trans, this._rot]);
    this._mat = new Movers.Group([new Movers.Invert(this._rot),
      this._trans, new Movers.Constant.scale(1.0, -1.0, 1.0)]);
    this._jump = new ThreeDart.UserKeyGroup()
      ..addKey(ThreeDart.UserKey.spacebar)
      ..attach(td.userInput)
      ..keyDown.add(this._onJump);
    this._touchingGround = true;

    this._tech = new Techniques.Inspection()
      ..showAxis = true
      ..showWireFrame = true
      ..vectorScale = 1.0;
    this._entity = new ThreeDart.Entity(shape: Shapes.cube(), tech: this._tech, mover: this._mat)
      ..enabled = false;
  }
  
  Movers.Group get camera => this._camera;
  Movers.Group get location => this._mat;
  ThreeDart.Entity get entity => this._entity;

  void goHome() {
    Chunk chunk = this._world.findChunk(_startX, _startZ);
    int y = chunk.topHit(_startX, _startZ);
    this._trans.location = new Math.Point3(
      _startX.toDouble(), y.toDouble()+60.0, _startZ.toDouble());
    this._trans.velocity = new Math.Vector3.zero();
  }

  bool _isSolid(double x, double y, double z) {
    BlockInfo info = this._world.getBlock(x, y, z);
    bool solid = BlockType.solid(info.value);
    return solid;
  }

  void _onJump(ThreeDart.EventArgs args) {
    if (this._touchingGround)
      this._trans.offsetY.velocity = _jumpSpeed;
  }

  Math.Point3 _handleCollide(Math.Point3 prev, Math.Point3 loc) {
    double x = loc.x, y = loc.y, z = loc.z;
    final double nx = prev.x.floor()+0.5, ny = prev.y.floor()+0.5, nz = prev.z.floor()+0.5;
    final double headY = y - 1.5;
    final double footY = y - 0.5;
    this._touchingGround = false;

    // TODO: Determine if underwater so that the water can be flipped inside out.

    if (_isSolid(x-_pad, headY, z) ||
        _isSolid(x-_pad, footY, z)) {
      x = nx - _pad;
      this._trans.offsetX.velocity = 0.0;
    } else if (_isSolid(x+_pad, headY, z) ||
               _isSolid(x+_pad, footY, z)) {
      x = nx + _pad;
      this._trans.offsetX.velocity = 0.0;
    }

    if (_isSolid(x, headY, z-_pad) ||
        _isSolid(x, footY, z-_pad)) {
      z = nz - _pad;
      this._trans.offsetZ.velocity = 0.0;
    } else if (_isSolid(x, headY, z+_pad) ||
               _isSolid(x, footY, z+_pad)) {
      z = nz + _pad;
      this._trans.offsetZ.velocity = 0.0;
    }

    if (_isSolid(x, y-_pad, z)) {
      y = ny - _pad;
      this._trans.offsetY.velocity = 0.0;
    } else if (_isSolid(x, y-2.0+_pad, z)) {
      y = ny + _pad;
      this._trans.offsetY.velocity = 0.0;
      this._touchingGround = true;
    }
    
    return new Math.Point3(x, y, z);
  }
}
