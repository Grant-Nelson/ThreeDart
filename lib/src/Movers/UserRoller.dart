part of ThreeDart.Movers;

/// A roller which rotates an object in response to user input.
class UserRoller implements Mover, Core.UserInteractable {

  /// The user input this roller is attached to.
  Core.UserInput _input;

  /// The roll component for this roller.
  ComponentShift _roll;

  /// Indicates if the control/meta key must be pressed or released.
  bool _ctrlPressed;

  /// Indicates if the alt key must be pressed or released.
  bool _altPressed;

  /// Indicates if the shift key must be pressed or released.
  bool _shiftPressed;

  /// Indicates if the rotations should be continuous or not.
  bool _cumulative;

  /// The value to scale the roll by.
  double _rollScalar;

  /// The range, in pixels, of the dead band.
  double _deadBand;

  /// The dead band squared.
  double _deadBand2;

  /// Indicates if the mouse has left the dead band area yet.
  bool _inDeadBand;

  /// True indicating the mouse is pressed, false for released.
  bool _pressed;

  /// The roll rotation in radians when the button was pressed.
  double _lastRoll;

  /// The previous change of the mouse, the offset or delta.
  Math.Vector2 _prevVal;

  /// The last frame the mover was updated for.
  int _frameNum;

  /// The matrix describing the mover's rotation.
  Math.Matrix4 _mat;

  /// Creates a new user rotater instance.
  UserRoller() {
    this._input = null;
    this._roll = new ComponentShift()
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
    this._rollScalar = 2.5;
    this._deadBand = 2.0;
    this._deadBand2 = 4.0;
    this._pressed = false;
    this._inDeadBand = false;
    this._lastRoll = 0.0;
    this._prevVal = null;
    this._frameNum = 0;
    this._mat = null;
  }

  /// Attaches this mover to the user input.
  bool attach(Core.UserInput input) {
    if (input == null) return false;
    if (this._input != null) return false;
    this._input = input;
    this._input.mouseDown.add(this._mouseDownHandle);
    this._input.mouseMove.add(this._mouseMoveHandle);
    this._input.mouseUp.add(this._mouseUpHandle);
    return true;
  }

  /// Detaches this mover from the user input.
  void detach() {
    if (this._input != null) {
      this._input.mouseDown.remove(this._mouseDownHandle);
      this._input.mouseMove.remove(this._mouseMoveHandle);
      this._input.mouseUp.remove(this._mouseUpHandle);
      this._input = null;
    }
  }

  /// Handles the mouse down event.
  void _mouseDownHandle(Core.MouseEventArgs args) {
    if (this._ctrlPressed != this._input.ctrlPressed) return;
    if (this._altPressed != this._input.altPressed) return;
    if (this._shiftPressed != this._input.shiftPressed) return;
    this._pressed = true;
    this._inDeadBand = true;
    this._lastRoll = this._roll.location;
  }

  /// Handles the mouse move event.
  void _mouseMoveHandle(Core.MouseEventArgs args) {
    if (!this._pressed) return;
    if (this._inDeadBand) {
      if (args.rawOffset.length2() < this._deadBand2) return;
      this._inDeadBand = false;
    }
    if (this._cumulative) {
      this._prevVal = args.adjustedOffset;
      this._roll.velocity = this._prevVal.dx*10.0*this._rollScalar;
    } else {
      Math.Vector2 off = args.adjustedOffset;
      this._roll.location = -off.dx*this._rollScalar + this._lastRoll;
      this._roll.velocity = 0.0;
      this._prevVal = args.adjustedDelta;
    }
  }

  /// Handle the mouse up event.
  void _mouseUpHandle(Core.MouseEventArgs args) {
    if (!this._pressed) return;
    this._pressed = false;
    if (this._inDeadBand) return;
    if (this._prevVal.length2() > 0.0001) {
      this._roll.velocity = this._prevVal.dx*10.0*this._rollScalar;
    }
  }

  /// The roll component for this rotater.
  ComponentShift get roll => this._roll;

  /// Indicates if the control/meta key must be pressed or released.
  bool get ctrlPressed => this._ctrlPressed;
  void set ctrlPressed(bool enable) { this._ctrlPressed = enable; }

  /// Indicates if the alt key must be pressed or released.
  bool get altPressed => this._altPressed;
  void set altPressed(bool enable) { this._altPressed = enable; }

  /// Indicates if the shift key must be pressed or released.
  bool get shiftPressed => this._shiftPressed;
  void set shiftPressed(bool enable) { this._shiftPressed = enable; }

  /// Indicates if the rotations should be continuous or not.
  bool get cumulative => this._cumulative;
  void set cumulative(bool enable) { this._cumulative = enable; }

  /// The scalar to apply to the mouse movements roll.
  double get rollScalar => this._rollScalar;
  void set rollScalar(double value) { this._rollScalar = value; }

  /// The dead-band, in pixels, before anymovement is made.
  double get deadBand => this._deadBand;
  void set deadBand(double value) {
    this._deadBand = value;
    this._deadBand2 = this._deadBand * this._deadBand;
  }

  /// Updates the matrix for this mover.
  /// This is only called once per frame.
  void _update(Core.RenderState state) {
    this._frameNum = state.frameNumber;
    final double dt = state.dt;
    this._roll.update(dt);
    this._mat = new Math.Matrix4.rotateZ(this._roll.location);
  }

  /// Updates this mover and returns the matrix for the given object.
  Math.Matrix4 update(Core.RenderState state, Core.Entity obj) {
    if (this._frameNum < state.frameNumber) this._update(state);
    return this._mat;
  }
}
