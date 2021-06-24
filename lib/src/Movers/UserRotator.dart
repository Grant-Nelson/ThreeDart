part of ThreeDart.Movers;

/// A rotator which rotates an object in response to user input.
class UserRotator implements Mover, Input.Interactable {

  /// The user input this rotator is attached to.
  Input.UserInput? _input = null;

  /// The pitch component for this rotator.
  ComponentShift _pitch = new ComponentShift();

  /// The yaw component for this rotator.
  ComponentShift _yaw = new ComponentShift();

  /// Indicates if the modifier keys which must be pressed or released.
  Input.Modifiers _modPressed = Input.Modifiers.none();

  /// Indicates if the rotations should be continuous or not.
  bool _cumulative = false;

  /// The invert the X mouse axis.
  bool _invertX = false;

  /// The invert the Y mouse axis.
  bool _invertY = false;

  /// The value to scale the pitch by.
  double _pitchScalar = 2.5;

  /// The value to scale the yaw by.
  double _yawScalar = 2.5;

  /// The range, in pixels, of the dead band.
  double _deadBand = 2.0;

  /// The dead band squared.
  double _deadBand2 = 4.0;

  /// Indicates if the mouse has left the dead band area yet.
  bool _inDeadBand = false;

  /// True indicating the mouse is pressed, false for released.
  bool _pressed = false;

  /// The yaw rotation in radians when the button was pressed.
  double _lastYaw = 0.0;

  /// The pitch rotation in radians when the button was pressed.
  double _lastPitch = 0.0;

  /// The previous change of the mouse, the offset or delta.
  Math.Vector2 _prevVal = Math.Vector2.zero;

  /// The last frame the mover was updated for.
  int _frameNum = 0;

  /// The matrix describing the mover's rotation.
  Math.Matrix4 _mat = Math.Matrix4.identity;

  /// Event for handling changes to this mover.
  Events.Event? _changed = null;

  /// Creates a new user rotator instance.
  UserRotator({
      bool ctrl:    false,
      bool alt:     false,
      bool shift:   false,
      bool locking: false,
      bool invertX: false,
      bool invertY: false,
      Input.Modifiers? mod:   null,
      Input.UserInput? input: null}) {
    this._pitch
      ..wrap = true
      ..maximumLocation = Math.PI * 2.0
      ..minimumLocation = 0.0
      ..location = 0.0
      ..maximumVelocity = 100.0
      ..velocity  = 0.0
      ..dampening = 0.5
      ..changed.add(this._onChanged);
    this._yaw
      ..wrap = true
      ..maximumLocation = Math.PI * 2.0
      ..minimumLocation = 0.0
      ..location = 0.0
      ..maximumVelocity = 100.0
      ..velocity  = 0.0
      ..dampening = 0.5
      ..changed.add(this._onChanged);
    this.modifiers = mod ?? new Input.Modifiers(ctrl, alt, shift);
    this.invertX   = invertX;
    this.invertY   = invertY;
    this.attach(input);
  }

  /// Creates a new flat movement like a typical first person view rotator.
  /// If [mod] is provided it will override any value given to [ctrl], [alt], and [shift].
  factory UserRotator.flat({
      bool locking: false,
      bool ctrl:    false,
      bool alt:     false,
      bool shift:   false,
      bool invertX: false,
      bool invertY: false,
      Input.Modifiers? mod:   null,
      Input.UserInput? input: null}) =>
    new UserRotator(
      locking: locking,
      mod:     mod,
      invertX: invertX,
      invertY: invertY,
      input: input)
      ..pitch.maximumLocation = Math.PI_2
      ..pitch.minimumLocation = -Math.PI_2
      ..pitch.dampening = 1.0
      ..yaw.dampening = 1.0
      ..pitch.wrap = false;

  /// Emits when the mover has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles a child mover being changed.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// Attaches this mover to the user input.
  bool attach(Input.UserInput? input) {
    if (input == null) return false;
    if (this._input != null) return false;
    this._input = input;
    input.mouse.down.add(this._mouseDownHandle);
    input.mouse.move.add(this._mouseMoveHandle);
    input.mouse.up.add(this._mouseUpHandle);
    input.locked.lockChanged.add(this._lockChangedHandle);
    input.locked.move.add(this._lockedMoveHandle);
    input.touch.start.add(this._touchStartHandle);
    input.touch.move.add(this._touchMoveHandle);
    input.touch.end.add(this._touchEndHandle);
    return true;
  }

  /// Detaches this mover from the user input.
  void detach() {
    var input = this._input;
    if (input != null) {
      input.mouse.down.remove(this._mouseDownHandle);
      input.mouse.move.remove(this._mouseMoveHandle);
      input.mouse.up.remove(this._mouseUpHandle);
      input.locked.lockChanged.remove(this._lockChangedHandle);
      input.locked.move.remove(this._lockedMoveHandle);
      input.touch.start.remove(this._touchStartHandle);
      input.touch.move.remove(this._touchMoveHandle);
      input.touch.end.remove(this._touchEndHandle);
      this._input = null;
    }
  }

  /// Gets the given [vec] inverted based on settings.
  Math.Vector2 _getInverses(Math.Vector2 vec) {
    double dx = vec.dx;
    double dy = vec.dy;
    if (this._invertX) dx = -dx;
    if (this._invertY) dy = -dy;
    return new Math.Vector2(dx, dy);
  }

  /// Handles the mouse down event.
  void _mouseDownHandle(Events.EventArgs args) {
    Input.MouseEventArgs margs = (args as Input.MouseEventArgs);
    if (this._modPressed != margs.button.modifiers) return;
    this._pressed = true;
    this._inDeadBand = true;
    this._lastYaw = this._yaw.location;
    this._lastPitch = this._pitch.location;
  }

  /// Handles the mouse move event.
  void _mouseMoveHandle(Events.EventArgs args) {
    Input.MouseEventArgs margs = (args as Input.MouseEventArgs);
    if (!this._pressed) return;
    if (this._inDeadBand) {
      if (margs.rawOffset.length2() < this._deadBand2) return;
      this._inDeadBand = false;
    }

    if (this._cumulative) {
      this._prevVal = this._getInverses(margs.adjustedOffset);
      this._yaw.velocity   = -this._prevVal.dx*10.0*this._yawScalar;
      this._pitch.velocity = -this._prevVal.dy*10.0*this._pitchScalar;
    } else {
      Math.Vector2 off = this._getInverses(margs.adjustedOffset);
      this._yaw.location   = -off.dx*this._yawScalar + this._lastYaw;
      this._pitch.location = -off.dy*this._pitchScalar + this._lastPitch;
      this._pitch.velocity = 0.0;
      this._yaw.velocity   = 0.0;
      this._prevVal = this._getInverses(margs.adjustedDelta);
    }

    this._onChanged();
  }

  /// Handle the mouse up event.
  void _mouseUpHandle(Events.EventArgs _) {
    if (!this._pressed) return;
    this._pressed = false;
    if (this._inDeadBand) return;
    if (this._prevVal.length2() > 0.0001) {
      this._yaw.velocity   = -this._prevVal.dx*10.0*this._yawScalar;
      this._pitch.velocity = -this._prevVal.dy*10.0*this._pitchScalar;
      this._onChanged();
    }
  }

  /// Handle the change in the mouse pointer lock.
  void _lockChangedHandle(Events.EventArgs args) {
    Input.LockedEventArgs margs = (args as Input.LockedEventArgs);
    if (margs.locked) {
      this._inDeadBand = true;
      this._lastYaw = this._yaw.location;
      this._lastPitch = this._pitch.location;
    }
  }

  /// Handle the locked mouse movement.
  void _lockedMoveHandle(Events.EventArgs args) {
    Input.MouseEventArgs margs = (args as Input.MouseEventArgs);
    if (this._modPressed != margs.button.modifiers) return;

    Math.Vector2 off = this._getInverses(margs.adjustedOffset);
    this._yaw.location   = -off.dx*this._yawScalar + this._lastYaw;
    this._pitch.location = -off.dy*this._pitchScalar + this._lastPitch;
    this._pitch.velocity = 0.0;
    this._yaw.velocity   = 0.0;
    this._prevVal = this._getInverses(margs.adjustedDelta);

    this._onChanged();
  }

  /// Handle the touch screen touch start.
  void _touchStartHandle(Events.EventArgs args) {
    this._pressed = true;
    this._inDeadBand = true;
    this._lastYaw = this._yaw.location;
    this._lastPitch = this._pitch.location;
  }

  /// Handle the touch screen move.
  void _touchMoveHandle(Events.EventArgs args) {
    Input.TouchEventArgs targs = (args as Input.TouchEventArgs);

    if (!this._pressed) return;
    if (this._inDeadBand) {
      if (targs.rawOffset.length2() < this._deadBand2) return;
      this._inDeadBand = false;
    }

    if (this._cumulative) {
      this._prevVal = this._getInverses(targs.adjustedOffset);
      this._yaw.velocity   = -this._prevVal.dx*10.0*this._yawScalar;
      this._pitch.velocity = -this._prevVal.dy*10.0*this._pitchScalar;
    } else {
      Math.Vector2 off = this._getInverses(targs.adjustedOffset);
      this._yaw.location   = -off.dx*this._yawScalar + this._lastYaw;
      this._pitch.location = -off.dy*this._pitchScalar + this._lastPitch;
      this._pitch.velocity = 0.0;
      this._yaw.velocity   = 0.0;
      this._prevVal = this._getInverses(targs.adjustedDelta);
    }

    this._onChanged();
  }

  /// Handle the touch screen end.
  void _touchEndHandle(Events.EventArgs args) {
    if (!this._pressed) return;
    this._pressed = false;
    if (this._inDeadBand) return;
    if (this._prevVal.length2() > 0.0001) {
      this._yaw.velocity   = -this._prevVal.dx*10.0*this._yawScalar;
      this._pitch.velocity = -this._prevVal.dy*10.0*this._pitchScalar;
      this._onChanged();
    }
  }

  /// The pitch component for this rotator.
  ComponentShift get pitch => this._pitch;

  /// The yaw component for this rotator.
  ComponentShift get yaw => this._yaw;

  /// Gets the matrix calculated during the last update.
  Math.Matrix4 get matrix => this._mat;

  /// Indicates if the modifiers keys must be pressed or released.
  /// This does not apply when using a touch input.
  Input.Modifiers get modifiers => this._modPressed;
  set modifiers(Input.Modifiers mods) {
    if (this._modPressed != mods) {
      Input.Modifiers prev = this._modPressed;
      this._modPressed = mods;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'modifiers', prev, mods));
    }
  }

  /// Indicates if the rotations should be continuous or not.
  /// This does not apply when the mouse is locked.
  bool get cumulative => this._cumulative;
  set cumulative(bool enable) {
    if (this._cumulative != enable) {
      bool prev = this._cumulative;
      this._cumulative = enable;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'cumulative', prev, this._cumulative));
    }
  }

  /// Inverts the X mouse axis.
  bool get invertX => this._invertX;
  set invertX(bool invert) {
    if (this._invertX != invert) {
      bool prev = this._invertX;
      this._invertX = invert;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'invertX', prev, this._invertX));
    }
  }

  /// Inverts the Y mouse axis.
  bool get invertY => this._invertY;
  set invertY(bool invert) {
    if (this._invertY != invert) {
      bool prev = this._invertY;
      this._invertY = invert;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'invertY', prev, this._invertY));
    }
  }

  /// The scalar to apply to the mouse movements pitch.
  double get pitchScalar => this._pitchScalar;
  set pitchScalar(double value) {
    if (!Math.Comparer.equals(this._pitchScalar, value)) {
      double prev = this._pitchScalar;
      this._pitchScalar = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'pitchScalar', prev, this._pitchScalar));
    }
  }

  /// The scalar to apply to the mouse movements yaw.
  double get yawScalar => this._yawScalar;
  set yawScalar(double value) {
    if (!Math.Comparer.equals(this._yawScalar, value)) {
      double prev = this._yawScalar;
      this._yawScalar = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'yawScalar', prev, this._yawScalar));
    }
  }

  /// The dead-band, in pixels, before any movement is made.
  /// This does not apply when the mouse is locked.
  double get deadBand => this._deadBand;
  set deadBand(double value) {
    if (!Math.Comparer.equals(this._deadBand, value)) {
      double prev = this._deadBand;
      this._deadBand = value;
      this._deadBand2 = this._deadBand * this._deadBand;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'deadBand', prev, this._deadBand));
    }
  }

  /// Updates this mover and returns the matrix for the given object.
  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    if (this._frameNum < state.frameNumber) {
      this._frameNum = state.frameNumber;
      final double dt = state.dt;
      this._yaw.update(dt);
      this._pitch.update(dt);
      this._mat = new Math.Matrix4.rotateX(this._pitch.location)*
                  new Math.Matrix4.rotateY(this._yaw.location);
    }
    return this._mat;
  }
}
