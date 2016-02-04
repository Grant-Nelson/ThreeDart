part of ThreeDart.Movers;

/// Constant mover applys a constant matrix to an entity or group.
class Constant extends Mover {

  Math.Matrix4 _mat;

  /// Creates a new constant mover.
  Constant([Math.Matrix4 mat = null]) {
    this.matrix = mat;
  }

  /// The matrix to apply to an entity or group.
  Math.Matrix4 get matrix => this._mat;
  void set matrix(Math.Matrix4 mat) {
    this._mat = (mat == null)? new Math.Matrix4.identity(): mat;
  }

  /// Updates the mover, in this case just returns the current matrix.
  ///
  /// This updates with the given [state] and the [obj] this mover is attached to.
  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    return this._mat;
  }
}