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

  Math.Matrix3 _velRot;

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

    final double maxVel = 100.0;
    final double dampening = 0.9;
    this._offsetX = new ComponentShift()
      ..maximumVelocity = maxVel
      ..dampening = dampening
      ..changed.add(this._onChanged);
    this._offsetY = new ComponentShift()
      ..maximumVelocity = maxVel
      ..dampening = dampening
      ..changed.add(this._onChanged);
    this._offsetZ = new ComponentShift()
      ..maximumVelocity = maxVel
      ..dampening = dampening
      ..changed.add(this._onChanged);
    this._velRot   = null;
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

  /// Handles a child mover being changed.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  Core.UserKeyGroup get negitiveXKey => this._xNegKey;
  Core.UserKeyGroup get positiveXKey => this._xPosKey;
  Core.UserKeyGroup get negitiveYKey => this._yNegKey;
  Core.UserKeyGroup get positiveYKey => this._yPosKey;
  Core.UserKeyGroup get negitiveZKey => this._zNegKey;
  Core.UserKeyGroup get positiveZKey => this._zPosKey;

  ComponentShift get offsetX => this._offsetX;
  ComponentShift get offsetY => this._offsetY;
  ComponentShift get offsetZ => this._offsetZ;

  Math.Matrix3 get velocityRotation => this._velRot;
  void set velocityRotation(Math.Matrix3 velRot) {
    if (this._velRot != velRot) {
      Math.Matrix3 prev = this._velRot;
      this._velRot = velRot;
      this._onChanged(new Core.ValueChangedEventArgs(this, "velocityRotation", prev, this._velRot));
    }
  }

  /// Handles a key pressed.
  void _onKeyDown(Core.EventArgs args) {
    this._onChanged(args);
  }

  void _updateMovement(double dt) {
    if (dt > 0.1) dt = 0.1;
    Math.Vector3 vec = new Math.Vector3(
      (this._xNegKey.pressed?1.0:0.0) + (this._xPosKey.pressed?-1.0:0.0),
      (this._yNegKey.pressed?1.0:0.0) + (this._yPosKey.pressed?-1.0:0.0),
      (this._zNegKey.pressed?1.0:0.0) + (this._zPosKey.pressed?-1.0:0.0));
    final double speed = 30.0; // TODO: Make a public value.
    vec = vec*dt*speed;
    if (this._velRot != null) vec = this._velRot.transVec3(vec);
    this._offsetX.velocity += vec.dx;
    this._offsetY.velocity += vec.dy;
    this._offsetZ.velocity += vec.dz;
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
      this._offsetX.update(dt);
      this._offsetY.update(dt);
      this._offsetZ.update(dt);
      this._updateMovement(dt);
      this._mat = new Math.Matrix4.translate(
        this._offsetX.location,
        this._offsetY.location,
        this._offsetZ.location);
    }
    return this._mat;
  }
}
