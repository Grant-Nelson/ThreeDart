part of ThreeDart.Movers;

/// A mover for rotating an object at a constant rate with euler angles.
class Rotator extends Mover {
  double _yaw;
  double _pitch;
  double _roll;
  double _deltaYaw;
  double _deltaPitch;
  double _deltaRoll;
  int _frameNum;
  Math.Matrix4 _mat;
  Events.Event? _changed;

  /// Creates a new rotator.
  Rotator({
      double yaw:        0.0,
      double pitch:      0.0,
      double roll:       0.0,
      double deltaYaw:   0.1,
      double deltaPitch: 0.21,
      double deltaRoll:  0.32}):
    this._yaw   = 0.0,
    this._pitch = 0.0,
    this._roll  = 0.0,
    this._deltaYaw   = 0.0,
    this._deltaPitch = 0.0,
    this._deltaRoll  = 0.0,
    this._frameNum = 0,
    this._mat = Math.Matrix4.identity,
    this._changed = null {
    this.yaw   = yaw;
    this.pitch = pitch;
    this.roll  = roll;
    this.deltaYaw   = deltaYaw;
    this.deltaPitch = deltaPitch;
    this.deltaRoll  = deltaRoll;
  }

  /// Emits when the mover has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles a child mover being changed.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// The yaw rotation, in radians.
  double get yaw => this._yaw;
  set yaw(double value) {
    value = Math.wrapVal(value, 0.0, Math.TAU);
    if (!Math.Comparer.equals(this._yaw, value)) {
      double prev = this._yaw;
      this._yaw = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'yaw', prev, this._yaw));
    }
  }

  /// The pitch rotation, in radians.
  double get pitch => this._pitch;
  set pitch(double value) {
    value = Math.wrapVal(value, 0.0, Math.TAU);
    if (!Math.Comparer.equals(this._pitch, value)) {
      double prev = this._pitch;
      this._pitch = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'pitch', prev, this._pitch));
    }
  }

  /// The roll rotation, in radians.
  double get roll => this._roll;
  set roll(double value) {
    value = Math.wrapVal(value, 0.0, Math.TAU);
    if (!Math.Comparer.equals(this._roll, value)) {
      double prev = this._roll;
      this._roll = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'roll', prev, this._roll));
    }
  }

  /// The change in yaw, in radians per second.
  double get deltaYaw => this._deltaYaw;
  set deltaYaw(double value) {
    if (!Math.Comparer.equals(this._deltaYaw, value)) {
      double prev = this._deltaYaw;
      this._deltaYaw = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'deltaYaw', prev, this._deltaYaw));
    }
  }

  /// The change in pitch, in radians per second.
  double get deltaPitch => this._deltaPitch;
  set deltaPitch(double value) {
    if (!Math.Comparer.equals(this._deltaPitch, value)) {
      double prev = this._deltaPitch;
      this._deltaPitch = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'deltaPitch', prev, this._deltaPitch));
    }
  }

  /// The change in roll, in radians per second.
  double get deltaRoll => this._deltaRoll;
  set deltaRoll(double value) {
    if (!Math.Comparer.equals(this._deltaRoll, value)) {
      double prev = this._deltaRoll;
      this._deltaRoll = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'deltaRoll', prev, this._deltaRoll));
    }
  }

  /// Updates the rotation mover.
  ///
  /// This updates with the given [state] and the [obj] this mover is attached to.
  Math.Matrix4 update(Core.RenderState state, Movable? obj) {
    if (this._frameNum < state.frameNumber) {
      this._frameNum = state.frameNumber;
      this._changed?.suspend();
      this.yaw   += this._deltaYaw  *state.dt;
      this.pitch += this._deltaPitch*state.dt;
      this.roll  += this._deltaRoll *state.dt;
      this._mat = new Math.Matrix4.rotateZ(this._roll)*
                  new Math.Matrix4.rotateY(this._pitch)*
                  new Math.Matrix4.rotateX(this._yaw);
      this._changed?.resume();
    }
    return this._mat;
  }

  /// Determines if the given [other] variable is a [Rotator] equal to this one.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Rotator) return false;
    if (!Math.Comparer.equals(this._yaw,        other._yaw))        return false;
    if (!Math.Comparer.equals(this._pitch,      other._pitch))      return false;
    if (!Math.Comparer.equals(this._roll,       other._roll))       return false;
    if (!Math.Comparer.equals(this._deltaYaw,   other._deltaYaw))   return false;
    if (!Math.Comparer.equals(this._deltaPitch, other._deltaPitch)) return false;
    if (!Math.Comparer.equals(this._deltaRoll,  other._deltaRoll))  return false;
    return true;
  }

  /// The string for this constant mover.
  String toString() => this.format();

  /// Gets the formatted string for this constant mover.
  String format([int fraction = 3, int whole = 0]) {
    return 'Rotator: ['+
      Math.formatDouble(this._yaw,        fraction, whole)+', '+
      Math.formatDouble(this._pitch,      fraction, whole)+', '+
      Math.formatDouble(this._roll,       fraction, whole)+'], ['+
      Math.formatDouble(this._deltaYaw,   fraction, whole)+', '+
      Math.formatDouble(this._deltaPitch, fraction, whole)+', '+
      Math.formatDouble(this._deltaRoll,  fraction, whole)+']';
  }
}
