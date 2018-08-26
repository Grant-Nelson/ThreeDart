part of ThreeDart.Movers;

/// A roller which rotates an object in response to user input.
class UserRoller implements Mover, Input.Interactable {

  /// The user input this roller is attached to.
  Input.UserInput _input;

  /// The roll component for this roller.
  ComponentShift _roll;

  /// Indicates if the modifier keys which must be pressed or released.
  Input.Modifiers _modPressed;

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

  /// Event for handling changes to this mover.
  Events.Event _changed;

  /// Creates a new user rotater instance.
  UserRoller({
      bool ctrl:  false,
      bool alt:   false,
      bool shift: false,
      Input.Modifiers mod:   null,
      Input.UserInput input: null}) {
    this._input = null;
    this._roll = new ComponentShift()
      ..wrap = true
      ..maximumLocation = Math.PI * 2.0
      ..minimumLocation = 0.0
      ..location = 0.0
      ..maximumVelocity = 100.0
      ..velocity  = 0.0
      ..dampening = 0.2;
    this._roll.changed.add(this._onChanged);
    this._modPressed = null;
    this._cumulative = false;
    this._rollScalar = 2.5;
    this._deadBand   = 2.0;
    this._deadBand2  = 4.0;
    this._pressed    = false;
    this._inDeadBand = false;
    this._lastRoll   = 0.0;
    this._prevVal    = null;
    this._frameNum   = 0;
    this._mat        = null;
    this._changed    = null;
    
    this.modifiers = mod ?? new Input.Modifiers(ctrl, alt, shift);
    this.attach(input);
  }

  /// Emits when the mover has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles a child mover being changed.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Attaches this mover to the user input.
  bool attach(Input.UserInput input) {
    if (input == null) return false;
    if (this._input != null) return false;
    this._input = input;
    this._input.mouse.down.add(this._mouseDownHandle);
    this._input.mouse.move.add(this._mouseMoveHandle);
    this._input.mouse.up.add(this._mouseUpHandle);
    return true;
  }

  /// Detaches this mover from the user input.
  void detach() {
    if (this._input != null) {
      this._input.mouse.down.remove(this._mouseDownHandle);
      this._input.mouse.move.remove(this._mouseMoveHandle);
      this._input.mouse.up.remove(this._mouseUpHandle);
      this._input = null;
    }
  }

  /// Handles the mouse down event.
  void _mouseDownHandle(Events.EventArgs args) {
    if (this._modPressed != this._input.key.modifiers) return;
    this._pressed = true;
    this._inDeadBand = true;
    this._lastRoll = this._roll.location;
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
      this._prevVal = margs.adjustedOffset;
      this._roll.velocity = this._prevVal.dx*10.0*this._rollScalar;
    } else {
      Math.Vector2 off = margs.adjustedOffset;
      this._roll.location = -off.dx*this._rollScalar + this._lastRoll;
      this._roll.velocity = 0.0;
      this._prevVal = margs.adjustedDelta;
    }
    this._onChanged();
  }

  /// Handle the mouse up event.
  void _mouseUpHandle(Events.EventArgs args) {
    if (!this._pressed) return;
    this._pressed = false;
    if (this._inDeadBand) return;
    if (this._prevVal.length2() > 0.0001) {
      this._roll.velocity = this._prevVal.dx*10.0*this._rollScalar;
      this._onChanged();
    }
  }

  /// The roll component for this rotater.
  ComponentShift get roll => this._roll;

  /// Indicates if the modifiers keys must be pressed or released.
  Input.Modifiers get modifiers => this._modPressed;
  void set modifiers(Input.Modifiers mods) {
    mods = mods ?? new Input.Modifiers.none();
    if (this._modPressed != mods) {
      Input.Modifiers prev = this._modPressed;
      this._modPressed = mods;
      this._onChanged(new Events.ValueChangedEventArgs(this, "modifiers", prev, mods));
    }
  }

  /// Indicates if the rotations should be continuous or not.
  bool get cumulative => this._cumulative;
  void set cumulative(bool enable) {
    enable = enable ?? false;
    if (this._cumulative != enable) {
      bool prev = this._cumulative;
      this._cumulative = enable;
      this._onChanged(new Events.ValueChangedEventArgs(this, "cumulative", prev, this._cumulative));
    }
  }

  /// The scalar to apply to the mouse movements roll.
  double get rollScalar => this._rollScalar;
  void set rollScalar(double value) {
    value = value ?? 0.0;
    if (!Math.Comparer.equals(this._rollScalar, value)) {
      double prev = this._rollScalar;
      this._rollScalar = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, "rollScalar", prev, this._rollScalar));
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
      this._onChanged(new Events.ValueChangedEventArgs(this, "deadBand", prev, this._deadBand));
    }
  }

  /// Updates this mover and returns the matrix for the given object.
  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    if (this._frameNum < state.frameNumber) {
      this._frameNum = state.frameNumber;
      final double dt = state.dt;
      this._roll.update(dt);
      this._mat = new Math.Matrix4.rotateZ(this._roll.location);
    }
    return this._mat;
  }
}
