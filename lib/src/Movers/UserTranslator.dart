part of ThreeDart.Movers;

/// The handler for handling collisions during the movement.
typedef Math.Point3 CollisionHandle(Math.Point3 prev, Math.Point3 next);

/// A translation mover which translates on an object in response to user input.
class UserTranslator implements Mover, Input.Interactable {
  Input.KeyGroup _xNegKey = new Input.KeyGroup();
  Input.KeyGroup _xPosKey = new Input.KeyGroup();
  Input.KeyGroup _yNegKey = new Input.KeyGroup();
  Input.KeyGroup _yPosKey = new Input.KeyGroup();
  Input.KeyGroup _zNegKey = new Input.KeyGroup();
  Input.KeyGroup _zPosKey = new Input.KeyGroup();
  ComponentShift _offsetX = new ComponentShift();
  ComponentShift _offsetY = new ComponentShift();
  ComponentShift _offsetZ = new ComponentShift();
  Math.Matrix3 _velRot    = Math.Matrix3.identity;
  Math.Matrix3 _velRotInv = Math.Matrix3.identity;
  double _deccel = 60.0;
  double _accel = 15.0;

  /// The last frame the mover was updated for.
  int _frameNum = 0;

  /// The matrix describing the translation.
  Math.Matrix4 _mat = Math.Matrix4.identity;

  /// Event for handling changes to this mover.
  Events.Event? _changed = null;

  /// A handler for optionally handling collisions in movement.
  CollisionHandle? _collision = null;

  /// Creates an instance of [UserTranslator].
  UserTranslator({Input.UserInput? input: null}) {
    this._xNegKey
      ..addKey(Input.Key.rightArrow)
      ..addKey(Input.Key.keyD)
      ..keyDown.add(this._onKeyDown);
    this._xPosKey
      ..addKey(Input.Key.leftArrow)
      ..addKey(Input.Key.keyA)
      ..keyDown.add(this._onKeyDown);
    this._yNegKey
      ..addKey(Input.Key.keyQ)
      ..keyDown.add(this._onKeyDown);
    this._yPosKey
      ..addKey(Input.Key.keyE)
      ..keyDown.add(this._onKeyDown);
    this._zNegKey
      ..addKey(Input.Key.downArrow)
      ..addKey(Input.Key.keyS)
      ..keyDown.add(this._onKeyDown);
    this._zPosKey
      ..addKey(Input.Key.upArrow)
      ..addKey(Input.Key.keyW)
      ..keyDown.add(this._onKeyDown);

    final double maxVel = 30.0;
    final double dampening = 0.0;
    this._offsetX
      ..maximumVelocity = maxVel
      ..dampening = dampening
      ..changed.add(this._onChanged);
    this._offsetY
      ..maximumVelocity = maxVel
      ..dampening = dampening
      ..changed.add(this._onChanged);
    this._offsetZ
      ..maximumVelocity = maxVel
      ..dampening = dampening
      ..changed.add(this._onChanged);

    this.attach(input);
  }

  /// Emits when the mover has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles a child mover being changed.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// The group of keys which will cause movement down a negative X vector.
  Input.KeyGroup get negativeXKey => this._xNegKey;

  /// The group of keys which will cause movement down a positive X vector.
  Input.KeyGroup get positiveXKey => this._xPosKey;

  /// The group of keys which will cause movement down a negative Y vector.
  Input.KeyGroup get negativeYKey => this._yNegKey;

  /// The group of keys which will cause movement down a positive Y vector.
  Input.KeyGroup get positiveYKey => this._yPosKey;

  /// The group of keys which will cause movement down a negative Z vector.
  Input.KeyGroup get negativeZKey => this._zNegKey;

  /// The group of keys which will cause movement down a positive Z vector.
  Input.KeyGroup get positiveZKey => this._zPosKey;

  /// The X offset component shifter.
  ComponentShift get offsetX => this._offsetX;

  /// The Y offset component shifter.
  ComponentShift get offsetY => this._offsetY;

  /// The Z offset component shifter.
  ComponentShift get offsetZ => this._offsetZ;

  /// The amount to remove from the velocity when no key in a direction is being pressed.
  double get deceleration => this._deccel;
  void set deceleration(double deccel) {
    if (this._deccel != deccel) {
      double prev = this._deccel;
      this._deccel = deccel;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'deceleration', prev, this._deccel));
    }
  }

  /// The amount to add to the velocity when a key in a direction is being pressed.
  double get acceleration => this._accel;
  void set acceleration(double accel) {
    if (this._accel != accel) {
      double prev = this._accel;
      this._accel = accel;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'acceleration', prev, this._accel));
    }
  }

  /// The matrix describing the rotation to apply to the velocity of thr translation.
  /// This is typically the yaw rotation for the direction the user is looking.
  Math.Matrix3 get velocityRotation => this._velRot;
  void set velocityRotation(Math.Matrix3 velRot) {
    if (this._velRot != velRot) {
      Math.Matrix3 prev = this._velRot;
      this._velRot = velRot;
      this._velRotInv = this._velRot.inverse();
      this._onChanged(new Events.ValueChangedEventArgs(this, 'velocityRotation', prev, this._velRot));
    }
  }

  /// Velocity is the velocity vector relative to the world.
  Math.Vector3 get velocity => new Math.Vector3(
      this._offsetX.velocity, this._offsetY.velocity, this._offsetZ.velocity);
  set velocity(Math.Vector3 vec) {
    this._offsetX.velocity = vec.dx;
    this._offsetY.velocity = vec.dy;
    this._offsetZ.velocity = vec.dz;
  }

  /// Direction is the velocity vector relative to the users rotation.
  Math.Vector3 get direction => this._velRotInv.transVec3(this.velocity);
  set direction(Math.Vector3 vec) => this.velocity = this._velRot.transVec3(vec);

  /// Location is the position of the user in the world.
  Math.Point3 get location => new Math.Point3(
    this._offsetX.location, this._offsetY.location, this._offsetZ.location);
  set location(Math.Point3 loc) {
    this._offsetX.location = loc.x;
    this._offsetY.location = loc.y;
    this._offsetZ.location = loc.z;
  }

  /// The amount to add to the velocity when a key in a direction is being pressed.
  CollisionHandle? get collisionHandle => this._collision;
  void set collisionHandle(CollisionHandle? collision) => this._collision = collision;

  /// Handles a key pressed.
  void _onKeyDown(Events.EventArgs args) => this._onChanged(args);

  /// Updates a single component of the movement for the given keys.
  double _updateComponent(Input.KeyGroup negKey, Input.KeyGroup posKey, double deccel, double accel, double value) {
    if      (negKey.pressed) value += accel;
    else if (posKey.pressed) value -= accel;
    else if (value > 0.0) value -= math.min( value, deccel);
    else                  value += math.min(-value, deccel);
    return value;
  }

  /// Updates the movement of the translation.
  void _updateMovement(double dt) {
    // Limits initial speed caused by a large dt from lower than 0.1 second updates.
    if (dt > 0.1) dt = 0.1;
    final double deccel = this._deccel*dt;
    final double accel = this._accel*dt;

    Math.Vector3 dir = this.direction;
    double x = this._updateComponent(this._xNegKey, this._xPosKey, deccel, accel, dir.dx);
    double y = this._updateComponent(this._yNegKey, this._yPosKey, deccel, accel, dir.dy);
    double z = this._updateComponent(this._zNegKey, this._zPosKey, deccel, accel, dir.dz);
    this.direction = new Math.Vector3(x, y, z);

    this._offsetX.update(dt);
    this._offsetY.update(dt);
    this._offsetZ.update(dt);
  }

  /// Attaches this mover to the user input.
  bool attach(Input.UserInput? input) {
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

      Math.Point3 prev = this.location;
      this._updateMovement(state.dt);

      CollisionHandle? collision = this._collision;
      if (collision != null)
        this.location = collision(prev, this.location);

      this._mat = new Math.Matrix4.translate(
        this._offsetX.location,
        -this._offsetY.location,
        this._offsetZ.location);
    }
    return this._mat;
  }
}
