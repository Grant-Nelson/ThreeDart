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
  ThreeDart.UserKeyGroup _jump;
  double _jumpVel;

  Player(ThreeDart.ThreeDart td, this._world) {
    this._trans = new Movers.UserTranslator(input: td.userInput)
      ..offsetX.maximumVelocity = _speed
      ..offsetY.maximumVelocity = _fallSpeed
      ..offsetZ.maximumVelocity = _speed;
    this._rot = new Movers.UserRotater.flat(input: td.userInput);
    this._rot.changed.add((ThreeDart.EventArgs args) {
      this._trans.velocityRotation = new Math.Matrix3.rotateY(-this._rot.yaw.location);
    });
    this._camera = new Movers.Group([this._trans, this._rot]);
    this._jump = new ThreeDart.UserKeyGroup()
      ..addKey(ThreeDart.UserKey.spacebar)
      ..attach(td.userInput)
      ..keyDown.add(this._onJump);
    this._jumpVel = 0.0;
  }
  
  Movers.Group get camera => this._camera;

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
    this._jumpVel = _jumpSpeed;
  }

  void update(ThreeDart.EventArgs args) {
      ThreeDart.RenderState state = (args as ThreeDart.StateEventArgs).state;

    // Check for collisions
    Math.Point3 loc = this._trans.location;
    double x = loc.x, y = loc.y, z = loc.z;
    double nx = x.floor()+0.5, ny = y.floor()+0.5, nz = z.floor()+0.5;
    bool stopFall = false;

    // Check XZ lower body
    if (_isSolid(x-_pad, y-1.5, z)) x = nx - _pad;
		if (_isSolid(x+_pad, y-1.5, z)) x = nx + _pad;
    if (_isSolid(x, y-1.5, z-_pad)) z = nz - _pad;
		if (_isSolid(x, y-1.5, z+_pad)) z = nz + _pad;
    
    // Check XZ upper body
    if (_isSolid(x-_pad, y-0.5, z)) x = nx - _pad;
		if (_isSolid(x+_pad, y-0.5, z)) x = nx + _pad;
    if (_isSolid(x, y-0.5, z-_pad)) z = nz - _pad;
		if (_isSolid(x, y-0.5, z+_pad)) z = nz + _pad;

    // Check Y up and down
    if (_isSolid(x, y-_pad, z))     { y = ny - _pad; stopFall = true; }
    if (_isSolid(x, y-2.0+_pad, z)) { y = ny + _pad; stopFall = true; }

    this._trans.location = new Math.Point3(x, y, z);
    if (stopFall) this._trans.offsetY.velocity = 0.0;
    this._trans.offsetY.velocity += state.dt*_gravity + this._jumpVel;
    this._jumpVel = 0.0;
  }
}