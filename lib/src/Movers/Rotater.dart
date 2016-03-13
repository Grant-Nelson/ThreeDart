part of ThreeDart.Movers;

/// A mover for rotating an object at a constant rate with euler angles.
class Rotater extends Mover {

  /// The yaw rotation, in radians.
  double _yaw;

  /// The pitch rotation, in radians.
  double _pitch;

  /// The roll rotation, in radians.
  double _roll;

  /// The change in yaw, in radians per second.
  double _deltaYaw;

  /// The change in pitch, in radians per second.
  double _deltaPitch;

  /// The change in roll, in radians per second.
  double _deltaRoll;

  /// The last frame the rotation was updated.
  int _frameNum;

  /// The last calculated rataion matrix.
  Math.Matrix4 _mat;

  /// Creates a new rotater.
  Rotater() {
    this._yaw = 0.0;
    this._pitch = 0.0;
    this._roll = 0.0;
    this._deltaYaw = 0.1;
    this._deltaPitch = 0.21;
    this._deltaRoll = 0.32;
    this._frameNum = 0;
    this._mat = null;
  }

  /// The yaw rotation, in radians.
  double get yaw => this._yaw;
  set yaw(double value) => this._yaw = value;

  /// The pitch rotation, in radians.
  double get pitch => this._pitch;
  set pitch(double value) => this._pitch = value;

  /// The roll rotation, in radians.
  double get roll => this._roll;
  set roll(double value) => this._roll = value;

  /// The change in yaw, in radians per second.
  double get deltaYaw => this._deltaYaw;
  set deltaYaw(double value) => this._deltaYaw = value;

  /// The change in pitch, in radians per second.
  double get deltaPitch => this._deltaPitch;
  set deltaPitch(double value) => this._deltaPitch = value;

  /// The change in roll, in radians per second.
  double get deltaRoll => this._deltaRoll;
  set deltaRoll(double value) => this._deltaRoll = value;

  /// Updates the ratation matrix.
  /// This is only called once per frame.
  void _update(Core.RenderState state, Core.Entity obj) {
    this._frameNum = state.frameNumber;

    this._yaw += this.deltaYaw*state.dt;
    this._pitch += this._deltaPitch*state.dt;
    this._roll += this._deltaRoll*state.dt;

    double pi2 = math.PI*2.0;
    if ((this._yaw > pi2) || (this._yaw < 0.0)) this._yaw %= pi2;
    if ((this._pitch > pi2) || (this._pitch < 0.0)) this._pitch %= pi2;
    if ((this._roll > pi2) || (this._roll < 0.0)) this._roll %= pi2;

    this._mat = new Math.Matrix4.rotateZ(this._roll)*
                new Math.Matrix4.rotateY(this._pitch)*
                new Math.Matrix4.rotateX(this._yaw);
  }

  /// Updates the rotation mover.
  ///
  /// This updates with the given [state] and the [obj] this mover is attached to.
  Math.Matrix4 update(Core.RenderState state, Core.Entity obj) {
    if (this._frameNum < state.frameNumber) this._update(state, obj);
    return this._mat;
  }
}
