part of ThreeDart.Movers;

/// Constant mover applies a constant matrix to an entity or group.
class Constant extends Mover {
  Math.Matrix4 _mat;
  Events.Event _changed;

  /// Creates a new constant mover.
  Constant([Math.Matrix4 mat = null]) {
    this._mat = null;
    this._changed = null;

    this.matrix = mat;
  }

  /// Constructs a 4x4 identity constant mover.
  factory Constant.identity() =>
    new Constant(Math.Matrix4.identity);

  /// Constructs a 4x4 translation constant mover.
  factory Constant.translate(double tx, double ty, double tz) =>
    new Constant(new Math.Matrix4.translate(tx, ty, tz));

  /// Constructs a 4x4 scalar constant mover.
  factory Constant.scale(double sx, double sy, double sz, [double sw = 1.0]) =>
    new Constant(new Math.Matrix4.scale(sx, sy, sz, sw));

  /// Constructs a 4x4 rotation constant mover.
  ///
  /// The given [angle] is in radians.
  /// The given [vec] is the vector to rotate around.
  factory Constant.rotate(double angle, Math.Vector3 vec) =>
    new Constant(new Math.Matrix4.rotate(angle, vec));

  /// Constructs a 4x4 X axis rotation constant mover.
  ///
  /// The given [angle] is in radians.
  factory Constant.rotateX(double angle) =>
    new Constant(new Math.Matrix4.rotateX(angle));

  /// Constructs a 4x4 Y axis rotation constant mover.
  ///
  /// The given [angle] is in radians.
  factory Constant.rotateY(double angle) =>
    new Constant(new Math.Matrix4.rotateY(angle));

  /// Constructs a 4x4 Z axis rotation constant mover.
  ///
  /// The given [angle] is in radians.
  factory Constant.rotateZ(double angle) =>
    new Constant(new Math.Matrix4.rotateZ(angle));

  /// Constructs a new perspective projection constant mover.
  ///
  /// Constructs a projectection for a right hand coordinate system.
  /// The given [angle] is in radians of the field of view.
  /// The given [ratio] is the width over the height of the view.
  /// The [near] and [far] depth of the view.
  factory Constant.perspective(double angle, double ratio, double near, double far) =>
    new Constant(new Math.Matrix4.perspective(angle, ratio, near, far));

  /// Constructs a new orthographic projection constant mover.
  ///
  /// [left] and [right] are the horizontal visible range.
  /// [top] and [bottom] are the vertical visible range.
  /// The [near] and [far] depth of the view.
  factory Constant.ortho(double left, double right, double top, double bottom, double near, double far) =>
    new Constant(new Math.Matrix4.ortho(left, right, top, bottom, near, far));

  /// Constructs a constant mover with a vector towards the given direction.
  ///
  /// [x]. [y], and [z] is the vector direction.
  /// [upHint] is a hint to help correct the top direction of the rotation.
  factory Constant.vectorTowards(double x, double y, double z, {Math.Vector3 upHint: null}) =>
    new Constant(new Math.Matrix4.vectorTowards(x, y, z, upHint: upHint));

  /// Constructs a camera constant mover.
  ///
  /// [pos] is the position of the camera,
  /// [up] is the top direction of the camera,
  /// and [forward] is the direction the camera is looking towards.
  factory Constant.lookTowards(Math.Point3 pos, Math.Vector3 up, Math.Vector3 forward) =>
    new Constant(new Math.Matrix4.lookTowards(pos, up, forward));

  /// Constructs a camera constant mover.
  ///
  /// [pos] is the position of the camera,
  /// [up] is the top direction of the camera,
  /// and [focus] is the point the camera is looking at.
  factory Constant.lookAtTarget(Math.Point3 pos, Math.Vector3 up, Math.Point3 focus) =>
    new Constant(new Math.Matrix4.lookAtTarget(pos, up, focus));

  /// Emits when the mover has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles emitting a change.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The matrix to apply to an entity or group.
  Math.Matrix4 get matrix => this._mat;
  void set matrix(Math.Matrix4 mat) {
    mat ??= Math.Matrix4.identity;
    if (this._mat != mat) {
      Math.Matrix4 prev = this._mat;
      this._mat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, "matrix", prev, this._mat));
    }
  }

  /// Updates the mover, in this case just returns the current matrix.
  ///
  /// This updates with the given [state] and the [obj] this mover is attached to.
  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    return this._mat;
  }

  /// Determines if the given [other] variable is a [Constant] equal to this one.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Constant) return false;
    return this._mat == (other as Constant)._mat;
  }

  /// The string for this constant mover.
  String toString() {
    return "Constant: "+this._mat.format("          ");
  }
}
