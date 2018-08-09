part of ThreeDart.Movers;

/// A rotater which rotates an object in response to user input.
class UserRotater implements Mover, Core.UserInteractable {

  /// The user input this rotater is attached to.
  Core.UserInput _input;

  /// The pitch component for this rotater.
  ComponentShift _pitch;

  /// The yaw component for this rotater.
  ComponentShift _yaw;

  /// Indicates the user rotater works for locking.
  bool _locking;

  /// Indicates if the control/meta key must be pressed or released.
  bool _ctrlPressed;

  /// Indicates if the alt key must be pressed or released.
  bool _altPressed;

  /// Indicates if the shift key must be pressed or released.
  bool _shiftPressed;

  /// Indicates if the rotations should be continuous or not.
  bool _cumulative;

  /// The invert the X mouse axis.
  bool _invertX;

  /// The invert the Y mouse axis.
  bool _invertY;

  /// The value to scale the pitch by.
  double _pitchScalar;

  /// The value to scale the yaw by.
  double _yawScalar;

  /// The range, in pixels, of the dead band.
  double _deadBand;

  /// The dead band squared.
  double _deadBand2;

  /// Indicates if the mouse has left the dead band area yet.
  bool _inDeadBand;

  /// True indicating the mouse is pressed, false for released.
  bool _pressed;

  /// The yaw rotation in radians when the button was pressed.
  double _lastYaw;

  /// The pitch rotation in radians when the button was pressed.
  double _lastPitch;

  /// The previous change of the mouse, the offset or delta.
  Math.Vector2 _prevVal;

  /// The last frame the mover was updated for.
  int _frameNum;

  /// The matrix describing the mover's rotation.
  Math.Matrix4 _mat;

  /// Event for handling changes to this mover.
  Core.Event _changed;

  /// Creates a new user rotater instance.
  UserRotater({
      bool locking: false,
      bool ctrl:    false,
      bool alt:     false,
      bool shift:   false,
      bool invertX: false,
      bool invertY: false,
      Core.UserInput input: null}) {
    this._input = null;
    this._pitch = new ComponentShift()
      ..wrap = true
      ..maximumLocation = Math.PI * 2.0
      ..minimumLocation = 0.0
      ..location = 0.0
      ..maximumVelocity = 100.0
      ..velocity  = 0.0
      ..dampening = 0.5;
    this._pitch.changed.add(this._onChanged);
    this._yaw = new ComponentShift()
      ..wrap = true
      ..maximumLocation = Math.PI * 2.0
      ..minimumLocation = 0.0
      ..location = 0.0
      ..maximumVelocity = 100.0
      ..velocity  = 0.0
      ..dampening = 0.5;
    this._yaw.changed.add(this._onChanged);
    this._locking      = locking;
    this._ctrlPressed  = false;
    this._altPressed   = false;
    this._shiftPressed = false;
    this._cumulative   = false;
    this._invertX      = false;
    this._invertY      = false;
    this._pitchScalar  = 2.5;
    this._yawScalar    = 2.5;
    this._deadBand     = 2.0;
    this._deadBand2    = 4.0;
    this._pressed      = false;
    this._inDeadBand   = false;
    this._lastYaw      = 0.0;
    this._lastPitch    = 0.0;
    this._prevVal      = null;
    this._frameNum     = 0;
    this._mat          = null;
    this._changed      = null;

    this.ctrlPressed  = ctrl;
    this.altPressed   = alt;
    this.shiftPressed = shift;
    this.invertX      = invertX;
    this.invertY      = invertY;
    this.attach(input);
  }

  /// Creates a new flat movement like a typical first person view rotater.
  factory UserRotater.flat({
      bool locking: false,
      bool ctrl:    false,
      bool alt:     false,
      bool shift:   false,
      bool invertX: false,
      bool invertY: false,
      Core.UserInput input: null}) =>
    new UserRotater(
      locking: locking,
      ctrl:    ctrl,
      alt:     alt,
      shift:   shift,
      invertX: invertX,
      invertY: invertY,
      input: input)
      ..pitch.maximumLocation = Math.PI_2
      ..pitch.minimumLocation = -Math.PI_2
      ..pitch.dampening = 1.0
      ..yaw.dampening = 1.0
      ..pitch.wrap = false;

  /// Emits when the mover has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Handles a child mover being changed.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Attaches this mover to the user input.
  bool attach(Core.UserInput input) {
    if (input == null) return false;
    if (this._input != null) return false;
    this._input = input;
    this._input.lockOnClick = this._locking;
    this._input.pointerLockChanged.add(this._lockChangedHandle);
    this._input.mouseDown.add(this._mouseDownHandle);
    this._input.mouseMove.add(this._mouseMoveHandle);
    this._input.mouseUp.add(this._mouseUpHandle);
    return true;
  }

  /// Detaches this mover from the user input.
  void detach() {
    if (this._input != null) {
    this._input.pointerLockChanged.remove(this._lockChangedHandle);
      this._input.mouseDown.remove(this._mouseDownHandle);
      this._input.mouseMove.remove(this._mouseMoveHandle);
      this._input.mouseUp.remove(this._mouseUpHandle);
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

  void _lockChangedHandle(Core.MouseEventArgs args) {
    if (this._input.pointerLocked) {
      this._inDeadBand = true;
      this._lastYaw = this._yaw.location;
      this._lastPitch = this._pitch.location;
    }
  }

  /// Handles the mouse down event.
  void _mouseDownHandle(Core.MouseEventArgs args) {
    if (!this._locking) {
      if (this._ctrlPressed  != this._input.ctrlPressed)  return;
      if (this._altPressed   != this._input.altPressed)   return;
      if (this._shiftPressed != this._input.shiftPressed) return;
      this._pressed = true;
      this._inDeadBand = true;
      this._lastYaw = this._yaw.location;
      this._lastPitch = this._pitch.location;
    }
  }

  /// Handles the mouse move event.
  void _mouseMoveHandle(Core.MouseEventArgs args) {
    if (this._locking) {
      if (!this._input.pointerLocked) return;
      if (this._ctrlPressed  != this._input.ctrlPressed)  return;
      if (this._altPressed   != this._input.altPressed)   return;
      if (this._shiftPressed != this._input.shiftPressed) return;
    } else if (!this._pressed) return;

    if (this._inDeadBand) {
      if (args.rawOffset.length2() < this._deadBand2) return;
      this._inDeadBand = false;
    }

    if (this._cumulative) {
      this._prevVal = this._getInverses(args.adjustedOffset);
      this._yaw.velocity   = -this._prevVal.dx*10.0*this._yawScalar;
      this._pitch.velocity = -this._prevVal.dy*10.0*this._pitchScalar;
    } else {
      Math.Vector2 off = this._getInverses(args.adjustedOffset);
      this._yaw.location   = -off.dx*this._yawScalar + this._lastYaw;
      this._pitch.location = -off.dy*this._pitchScalar + this._lastPitch;
      this._pitch.velocity = 0.0;
      this._yaw.velocity   = 0.0;
      this._prevVal = this._getInverses(args.adjustedDelta);
    }

    this._onChanged();
  }

  /// Handle the mouse up event.
  void _mouseUpHandle(Core.MouseEventArgs args) {
    if (!this._pressed) return;
    this._pressed = false;
    if (this._inDeadBand) return;
    if (this._prevVal.length2() > 0.0001) {
      this._yaw.velocity   = -this._prevVal.dx*10.0*this._yawScalar;
      this._pitch.velocity = -this._prevVal.dy*10.0*this._pitchScalar;
      this._onChanged();
    }
  }

  /// The pitch component for this rotater.
  ComponentShift get pitch => this._pitch;

  /// The yaw component for this rotater.
  ComponentShift get yaw => this._yaw;

  /// Indicates if the control/meta key must be pressed or released.
  bool get ctrlPressed => this._ctrlPressed;
  void set ctrlPressed(bool enable) {
    enable = enable ?? false;
    if (this._ctrlPressed != enable) {
      bool prev = this._ctrlPressed;
      this._ctrlPressed = enable;
      this._onChanged(new Core.ValueChangedEventArgs(this, "ctrlPressed", prev, this._ctrlPressed));
    }
  }

  /// Indicates if the alt key must be pressed or released.
  bool get altPressed => this._altPressed;
  void set altPressed(bool enable) {
    enable = enable ?? false;
    if (this._altPressed != enable) {
      bool prev = this._altPressed;
      this._altPressed = enable;
      this._onChanged(new Core.ValueChangedEventArgs(this, "altPressed", prev, this._altPressed));
    }
  }

  /// Indicates if the shift key must be pressed or released.
  bool get shiftPressed => this._shiftPressed;
  void set shiftPressed(bool enable) {
    enable = enable ?? false;
    if (this._shiftPressed != enable) {
      bool prev = this._shiftPressed;
      this._shiftPressed = enable;
      this._onChanged(new Core.ValueChangedEventArgs(this, "shiftPressed", prev, this._shiftPressed));
    }
  }

  /// Indicates if the rotations should be continuous or not.
  bool get cumulative => this._cumulative;
  void set cumulative(bool enable) {
    enable = enable ?? false;
    if (this._cumulative != enable) {
      bool prev = this._cumulative;
      this._cumulative = enable;
      this._onChanged(new Core.ValueChangedEventArgs(this, "cumulative", prev, this._cumulative));
    }
  }

  /// Inverts the X mouse axis.
  bool get invertX => this._invertX;
  void set invertX(bool invert) {
    invert = invert ?? false;
    if (this._invertX != invert) {
      bool prev = this._invertX;
      this._invertX = invert;
      this._onChanged(new Core.ValueChangedEventArgs(this, "invertX", prev, this._invertX));
    }
  }

  /// Inverts the Y mouse axis.
  bool get invertY => this._invertY;
  void set invertY(bool invert) {
    invert = invert ?? false;
    if (this._invertY != invert) {
      bool prev = this._invertY;
      this._invertY = invert;
      this._onChanged(new Core.ValueChangedEventArgs(this, "invertY", prev, this._invertY));
    }
  }

  /// The scalar to apply to the mouse movements pitch.
  double get pitchScalar => this._pitchScalar;
  void set pitchScalar(double value) {
    value = value ?? 0.0;
    if (!Math.Comparer.equals(this._pitchScalar, value)) {
      double prev = this._pitchScalar;
      this._pitchScalar = value;
      this._onChanged(new Core.ValueChangedEventArgs(this, "pitchScalar", prev, this._pitchScalar));
    }
  }

  /// The scalar to apply to the mouse movements yaw.
  double get yawScalar => this._yawScalar;
  void set yawScalar(double value) {
    value = value ?? 0.0;
    if (!Math.Comparer.equals(this._yawScalar, value)) {
      double prev = this._yawScalar;
      this._yawScalar = value;
      this._onChanged(new Core.ValueChangedEventArgs(this, "yawScalar", prev, this._yawScalar));
    }
  }

  /// The dead-band, in pixels, before any movement is made.
  double get deadBand => this._deadBand;
  void set deadBand(double value) {
    value = value ?? 0.0;
    if (!Math.Comparer.equals(this._deadBand, value)) {
      double prev = this._deadBand;
      this._deadBand = value;
      this._deadBand2 = this._deadBand * this._deadBand;
      this._onChanged(new Core.ValueChangedEventArgs(this, "deadBand", prev, this._deadBand));
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
