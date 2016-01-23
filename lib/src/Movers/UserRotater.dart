part of ThreeDart.Movers;

class UserRotater implements Mover, Core.UserInteractable {

  Core.UserInput _input;

  ComponentShift _pitch;
  ComponentShift _yaw;

  bool _ctrlPressed;
  bool _altPressed;
  bool _shiftPressed;
  bool _cumulative;
  double _pitchScalar;
  double _yawScalar;
  double _deadBand;
  double _deadBand2;
  bool _inDeadBand;
  bool _pressed;

  /// The yaw rotation in radians when the button was pressed.
  double _lastYaw;

  /// The pitch rotation in radians when the button was pressed.
  double _lastPitch;
  Math.Vector2 _prevDelta;

  int _frameNum;
  /// The matrix describing the mover's position.
  Math.Matrix4 _mat;

  UserRotater() {
    this._input = null;
    this._pitch = new ComponentShift()
      ..wrap = true
      ..maximumLocation = math.PI * 2.0
      ..minimumLocation = 0.0
      ..location = 0.0
      ..maximumVelocity = 100.0
      ..velocity = 0.0
      ..dampening = 0.2;
    this._yaw = new ComponentShift()
      ..wrap = true
      ..maximumLocation = math.PI * 2.0
      ..minimumLocation = 0.0
      ..location = 0.0
      ..maximumVelocity = 100.0
      ..velocity = 0.0
      ..dampening = 0.2;
    this._ctrlPressed = false;
    this._altPressed = false;
    this._shiftPressed = false;
    this._cumulative = false;
    this._pitchScalar = 2.5;
    this._yawScalar = 2.5;
    this._deadBand = 2.0;
    this._deadBand2 = 4.0;
    this._pressed = false;
    this._inDeadBand = false;
    this._lastYaw = 0.0;
    this._lastPitch = 0.0;
    this._prevDelta = null;
    this._frameNum = 0;
    this._mat = null;
  }

  bool attach(Core.UserInput input) {
    this._input = input;
    this._input.mouseDown.add(this._mouseDownHandle);
    this._input.mouseMove.add(this._mouseMoveHandle);
    this._input.mouseUp.add(this._mouseUpHandle);
    return true;
  }

  void detach() {
    this._input.mouseDown.remove(this._mouseDownHandle);
    this._input.mouseMove.remove(this._mouseMoveHandle);
    this._input.mouseUp.remove(this._mouseUpHandle);
    this._input = null;
  }

  void _mouseDownHandle(Object sender, Core.MouseEventArgs args) {
    if (this._ctrlPressed != this._input.ctrlPressed) return;
    if (this._altPressed != this._input.altPressed) return;
    if (this._shiftPressed != this._input.shiftPressed) return;
    this._pressed = true;
    this._inDeadBand = true;
    this._lastYaw = this._yaw.location;
    this._lastPitch = this._pitch.location;
  }

  void _mouseMoveHandle(Object sender, Core.MouseEventArgs args) {
    if (!this._pressed) return;
    if (this._inDeadBand) {
      if (args.rawOffset.length2() < this._deadBand2) return;
      this._inDeadBand = false;
    }
    if (this._cumulative) {
      this._prevDelta = args.adjustedOffset;
      this._pitch.velocity = -this._prevDelta.dx*10.0*this._pitchScalar;
      this._yaw.velocity = this._prevDelta.dy*10.0*this._yawScalar;
    } else {
      Math.Vector2 off = args.adjustedOffset;
      this._pitch.location = off.dx*this._pitchScalar + this._lastPitch;
      this._yaw.location = -off.dy*this._yawScalar + this._lastYaw;
      this._pitch.velocity = 0.0;
      this._yaw.velocity = 0.0;
      this._prevDelta = args.adjustedDelta;
    }
  }

  void _mouseUpHandle(Object sender, Core.MouseEventArgs args) {
    this._pressed = false;
    if (this._inDeadBand) return;
    if (this._prevDelta.length2() > 0.0001) {
      this._pitch.velocity = -this._prevDelta.dx*10.0*this._pitchScalar;
      this._yaw.velocity = this._prevDelta.dy*10.0*this._yawScalar;
    }
  }

  ComponentShift get pitch => this._pitch;
  ComponentShift get yaw => this._yaw;

  bool get ctrlPressed => this._ctrlPressed;
  void set ctrlPressed(bool enable) { this._ctrlPressed = enable; }
  bool get altPressed => this._altPressed;
  void set altPressed(bool enable) { this._altPressed = enable; }
  bool get shiftPressed => this._shiftPressed;
  void set shiftPressed(bool enable) { this._shiftPressed = enable; }

  bool get cumulative => this._cumulative;
  void set cumulative(bool enable) { this._cumulative = enable; }

  /// The scalar to apply to the mouse movements pitch.
  double get pitchScalar => this._pitchScalar;
  void set pitchScalar(double value) { this._pitchScalar = value; }

  /// The scalar to apply to the mouse movements yaw.
  double get yawScalar => this._yawScalar;
  void set yawScalar(double value) { this._yawScalar = value; }

  /// The dead-band, in pixels, before anymovement is made.
  double get deadBand => this._deadBand;
  void set deadBand(double value) {
    this._deadBand = value;
    this._deadBand2 = this._deadBand * this._deadBand;
  }

  void _update(Core.RenderState state) {
    this._frameNum = state.frameNumber;
    double dt = state.dt;
    this._yaw.update(dt);
    this._pitch.update(dt);
    this._mat = new Math.Matrix4.rotateX(this._yaw.location)*
                new Math.Matrix4.rotateY(this._pitch.location);
  }

  Math.Matrix4 update(Core.RenderState state, Core.Entity obj) {
    if (this._frameNum < state.frameNumber) this._update(state);
    return this._mat;
  }
}
