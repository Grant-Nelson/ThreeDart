part of ThreeDart.Movers;

class Rotater extends Mover {

  double _yaw;
  double _pitch;
  double _roll;
  double _deltaYaw;
  double _deltaPitch;
  double _deltaRoll;
  int _frameNum;
  Math.Matrix4 _mat;

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

  double get yaw => this._yaw;
  set yaw(double value) => this._yaw = value;

  double get pitch => this._pitch;
  set pitch(double value) => this._pitch = value;

  double get roll => this._roll;
  set roll(double value) => this._roll = value;

  double get deltaYaw => this._deltaYaw;
  set deltaYaw(double value) => this._deltaYaw = value;

  double get deltaPitch => this._deltaPitch;
  set deltaPitch(double value) => this._deltaPitch = value;

  double get deltaRoll => this._deltaRoll;
  set deltaRoll(double value) => this._deltaRoll = value;

  void _update(Core.RenderState state, Core.Entity obj) {
    this._frameNum = state.frameNumber;

    this._yaw += this.deltaYaw*state.dt;
    this._pitch += this._deltaPitch*state.dt;
    this._roll += this._deltaRoll*state.dt;

    double pi2 = math.PI*2.0;
    if ((this._yaw > pi2) || (this._yaw < 0.0)) this._yaw %= pi2;
    if ((this._pitch > pi2) || (this._pitch < 0.0)) this._pitch %= pi2;
    if ((this._roll > pi2) || (this._roll < 0.0)) this._roll %= pi2;

    this._mat = new Math.Matrix4.rotateX(this._yaw)*
                new Math.Matrix4.rotateY(this._pitch)*
                new Math.Matrix4.rotateZ(this._roll);
  }

  Math.Matrix4 update(Core.RenderState state, Core.Entity obj) {
    if (this._frameNum < state.frameNumber) this._update(state, obj);
    return this._mat;
  }
}
