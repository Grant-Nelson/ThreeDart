part of example1;

class Player {
  static const int startX = 0;
  static const int startZ = 0;
  static const double _gravity = -120.0;

  Movers.UserTranslator _trans;
  Movers.UserRotater _rot;
  World _world;
  Movers.Group _camera;

  Player(ThreeDart.ThreeDart td, this._world) {
    this._trans = new Movers.UserTranslator(input: td.userInput);
    this._trans.locationUpdated.add(this._locationUpdated);
    this._rot = new Movers.UserRotater.flat(input: td.userInput);
    this._rot.changed.add((ThreeDart.EventArgs args) {
      this._trans.velocityRotation = new Math.Matrix3.rotateY(-this._rot.yaw.location);
    });
    this._camera = new Movers.Group([this._trans, this._rot]);
  }
  
  Movers.Group get camera => this._camera;

  void goHome() {
    Chunk chunk = this._world.findChunk(startX, startZ);
    int y = chunk.topHit(startX, startZ);
    this._trans.location = new Math.Point3(
      startX.toDouble(), y.toDouble()+3.0, startZ.toDouble());
    this._trans.velocity = new Math.Vector3.zero();
  }

  Math.Point3 _locationMoveHit(Math.Point3 start, Math.Point3 end, double offset) {
    while (true) {
      if (start == end) return start;
      BlockInfo info = this._world.getBlock(end.x, end.y+offset, end.z);
      if (!BlockType.solid(info.value)) return end;

      // TODO: Finish implementing with AABB and maths.

      //print(">>> $start, $end => $end2");
      return start;
    }
  }

  void _locationUpdated(ThreeDart.EventArgs args) {
    ThreeDart.ValueChangedEventArgs vargs = args as ThreeDart.ValueChangedEventArgs;
    Math.Point3 orig = vargs.previous as Math.Point3;
    Math.Point3 loc = vargs.value as Math.Point3;
    loc = this._locationMoveHit(orig, loc, -1.5);
    loc = this._locationMoveHit(orig, loc, -0.5);
    this._trans.location = loc;
  }

  void update(ThreeDart.EventArgs args) {
    double x = this._trans.offsetX.location;
    double y = this._trans.offsetY.location;
    double z = this._trans.offsetZ.location;

    BlockInfo info = this._world.getBlock(x, y-2.1, z);
    if (BlockType.solid(info.value)) {
      this._trans.offsetY.location = info.y+3.0;
      this._trans.offsetY.velocity = 0.0;
    } else {
      ThreeDart.RenderState state = (args as ThreeDart.StateEventArgs).state;
      this._trans.offsetY.velocity += state.dt*_gravity;
    }
  }
}