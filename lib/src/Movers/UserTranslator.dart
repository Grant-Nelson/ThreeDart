part of ThreeDart.Movers;

/// TODO: Comment
/// A zoom mover which zooms on an object in response to user input.
class UserTranslator implements Mover, Core.UserInteractable {

  Core.UserKeyGroup _xNegKey;
  Core.UserKeyGroup _xPosKey;
  Core.UserKeyGroup _yNegKey;
  Core.UserKeyGroup _yPosKey;
  Core.UserKeyGroup _zNegKey;
  Core.UserKeyGroup _zPosKey;

  ComponentShift _offsetX;
  ComponentShift _offsetY;
  ComponentShift _offsetZ;

  /// The last frame the mover was updated for.
  int _frameNum;

  /// The matrix describing the zoom.
  Math.Matrix4 _mat;

  /// Event for handling changes to this mover.
  Core.Event _changed;

  /// Creates an instance of [UserZoom].
  UserTranslator({Core.UserInput input: null}) {
    this._xNegKey = new Core.UserKeyGroup()
      ..addKey(Core.UserKey.rightArrow)
      ..addKey(Core.UserKey.keyD)
      ..keyDown.add(this._onKeyDown);
    this._xPosKey = new Core.UserKeyGroup()
      ..addKey(Core.UserKey.leftArrow)
      ..addKey(Core.UserKey.keyA)
      ..keyDown.add(this._onKeyDown);
    this._yNegKey = new Core.UserKeyGroup()
      ..addKey(Core.UserKey.keyQ)
      ..keyDown.add(this._onKeyDown);
    this._yPosKey = new Core.UserKeyGroup()
      ..addKey(Core.UserKey.keyE)
      ..keyDown.add(this._onKeyDown);
    this._zNegKey = new Core.UserKeyGroup()
      ..addKey(Core.UserKey.downArrow)
      ..addKey(Core.UserKey.keyS)
      ..keyDown.add(this._onKeyDown);
    this._zPosKey = new Core.UserKeyGroup()
      ..addKey(Core.UserKey.upArrow)
      ..addKey(Core.UserKey.keyW)
      ..keyDown.add(this._onKeyDown);

    this._offsetX = new ComponentShift()
      ..maximumVelocity = 10.0
      ..dampening = 0.01
      ..changed.add(this._onChanged);
    this._offsetY = new ComponentShift()
      ..maximumVelocity = 10.0
      ..dampening = 0.01
      ..changed.add(this._onChanged);
    this._offsetZ = new ComponentShift()
      ..maximumVelocity = 10.0
      ..dampening = 0.01
      ..changed.add(this._onChanged);
    this._frameNum = 0;
    this._mat      = null;
    this._changed  = null;
    this.attach(input);
  }

  /// Emits when the mover has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Handles a key pressed.
  void _onKeyDown(Core.EventArgs args) {
    this._onChanged(args);
  }

  void _updateMovement(double dt) {
    double step = dt*3.3;
    if (this._xNegKey.pressed) this._offsetX.velocity += step;
    if (this._xPosKey.pressed) this._offsetX.velocity -= step;
    if (this._yNegKey.pressed) this._offsetY.velocity += step;
    if (this._yPosKey.pressed) this._offsetY.velocity -= step;
    if (this._zNegKey.pressed) this._offsetZ.velocity += step;
    if (this._zPosKey.pressed) this._offsetZ.velocity -= step;
  }

  /// Handles a child mover being changed.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Attaches this mover to the user input.
  bool attach(Core.UserInput input) {
    bool result = true;
    result = this._xNegKey.attach(input) && result;
    result = this._xPosKey.attach(input) && result;
    result = this._yNegKey.attach(input) && result;
    result = this._yPosKey.attach(input) && result;
    result = this._zNegKey.attach(input) && result;
    result = this._zPosKey.attach(input) && result;
    return result;
  }

  /// Detaches this mover from the user input.
  void detach() {
    this._xNegKey.detach();
    this._xPosKey.detach();
    this._yNegKey.detach();
    this._yPosKey.detach();
    this._zNegKey.detach();
    this._zPosKey.detach();
  }

  /// Updates this mover and returns the matrix for the given object.
  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    if (this._frameNum < state.frameNumber) {
      this._frameNum = state.frameNumber;
      final double dt = state.dt;
      this._updateMovement(dt);
      this._offsetX.update(dt);
      this._offsetY.update(dt);
      this._offsetZ.update(dt);
      this._mat = new Math.Matrix4.translate(
        this._offsetX.location,
        this._offsetY.location,
        this._offsetZ.location);
    }
    return this._mat;
  }
}
