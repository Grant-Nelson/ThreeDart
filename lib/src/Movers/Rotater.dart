part of ThreeDart.Movers;

/// A mover for rotating an object at a constant rate with euler angles.
class Rotater extends Mover {
  double _yaw;
  double _pitch;
  double _roll;
  double _deltaYaw;
  double _deltaPitch;
  double _deltaRoll;
  int _frameNum;
  Math.Matrix4 _mat;
  Core.Event _changed;

  /// Creates a new rotater.
  Rotater({double yaw: 0.0, double pitch: 0.0, double roll: 0.0,
    double deltaYaw: 0.1, double deltaPitch: 0.21, double deltaRoll: 0.32 }) {
    this._yaw   = yaw;
    this._pitch = pitch;
    this._roll  = roll;
    this._deltaYaw   = deltaYaw;
    this._deltaPitch = deltaPitch;
    this._deltaRoll  = deltaRoll;
    this._frameNum   = 0;
    this._mat = null;
    this._changed = new Core.Event();
  }

  /// The yaw rotation, in radians.
  double get yaw => this._yaw;
  void set yaw(double value) {
    value = Math.wrapVal(value, 0.0, Math.TAU);
    if (!Math.Comparer.equals(this._yaw, value)) {
      this._yaw = value;
      this._changed.emit();
    }
  }

  /// The pitch rotation, in radians.
  double get pitch => this._pitch;
  void set pitch(double value) {
    value = Math.wrapVal(value, 0.0, Math.TAU);
    if (!Math.Comparer.equals(this._pitch, value)) {
      this._pitch = value;
      this._changed.emit();
    }
  }

  /// The roll rotation, in radians.
  double get roll => this._roll;
  void set roll(double value) {
    value = Math.wrapVal(value, 0.0, Math.TAU);
    if (!Math.Comparer.equals(this._roll, value)) {
      this._roll = value;
      this._changed.emit();
    }
  }

  /// The change in yaw, in radians per second.
  double get deltaYaw => this._deltaYaw;
  void set deltaYaw(double value) {
    if (!Math.Comparer.equals(this._deltaYaw, value)) {
      this._deltaYaw = value;
      this._changed.emit();
    }
  }

  /// The change in pitch, in radians per second.
  double get deltaPitch => this._deltaPitch;
  void set deltaPitch(double value) {
    if (!Math.Comparer.equals(this._deltaPitch, value)) {
      this._deltaPitch = value;
      this._changed.emit();
    }
  }

  /// The change in roll, in radians per second.
  double get deltaRoll => this._deltaRoll;
  void set deltaRoll(double value) {
    if (!Math.Comparer.equals(this._deltaRoll, value)) {
      this._deltaRoll = value;
      this._changed.emit();
    }
  }

  /// Emits when the mover has changed.
  Core.Event get changed => this._changed;

  /// Updates the rotation mover.
  ///
  /// This updates with the given [state] and the [obj] this mover is attached to.
  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    if (this._frameNum < state.frameNumber) {
      this._frameNum = state.frameNumber;
      this._changed.suspend();
      this.yaw   += this._deltaYaw  *state.dt;
      this.pitch += this._deltaPitch*state.dt;
      this.roll  += this._deltaRoll *state.dt;
      this._mat = new Math.Matrix4.rotateZ(this._roll)*
                  new Math.Matrix4.rotateY(this._pitch)*
                  new Math.Matrix4.rotateX(this._yaw);
      this._changed.resume();
    }
    return this._mat;
  }

  /// Determines if the given [other] variable is a [Rotater] equal to this one.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Rotater) return false;
    Rotater rot = other as Rotater;
    if (!Math.Comparer.equals(this._yaw,        rot._yaw))        return false;
    if (!Math.Comparer.equals(this._pitch,      rot._pitch))      return false;
    if (!Math.Comparer.equals(this._roll,       rot._roll))       return false;
    if (!Math.Comparer.equals(this._deltaYaw,   rot._deltaYaw))   return false;
    if (!Math.Comparer.equals(this._deltaPitch, rot._deltaPitch)) return false;
    if (!Math.Comparer.equals(this._deltaRoll,  rot._deltaRoll))  return false;
    return true;
  }

  /// The string for this constant mover.
  String toString([int fraction = 3, int whole = 0]) {
    return "Rotater: ["+
      Math.formatDouble(this._yaw,        fraction, whole)+", "+
      Math.formatDouble(this._pitch,      fraction, whole)+", "+
      Math.formatDouble(this._roll,       fraction, whole)+"], ["+
      Math.formatDouble(this._deltaYaw,   fraction, whole)+", "+
      Math.formatDouble(this._deltaPitch, fraction, whole)+", "+
      Math.formatDouble(this._deltaRoll,  fraction, whole)+"]";
  }
}
