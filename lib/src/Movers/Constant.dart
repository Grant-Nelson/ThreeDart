part of ThreeDart.Movers;

/// Constant mover applies a constant matrix to an entity or group.
class Constant extends Mover {
  Math.Matrix4 _mat;
  Core.Event _changed;

  /// Creates a new constant mover.
  Constant([Math.Matrix4 mat = null]) {
    this.matrix = mat;
    this._changed = null;
  }

  /// The matrix to apply to an entity or group.
  Math.Matrix4 get matrix => this._mat;
  void set matrix(Math.Matrix4 mat) {
    mat = mat ?? new Math.Matrix4.identity();
    if (this._mat != mat) {
      this._mat = mat;
      this._changed?.emit();
    }
  }

  /// Emits when the mover has changed.
  Core.Event get changed {
    if (this._changed == null)
      this._changed = new Core.Event();
    return this._changed;
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
    return "Constant: "+this._mat.toString("          ");
  }
}
