part of ThreeDart.Views;

/// A identity camera for rendering of a scene.
class IdentityCamera implements Camera {

  Movers.Mover _mover;

  /// Creates a new identity camera.
  IdentityCamera({Movers.Mover mover: null}) {
    this._mover = mover;
  }

  /// The mover to position this camera.
  Movers.Mover get mover => this._mover;
  set mover(Movers.Mover mover) => this._mover = mover;

  /// Binds this camera to the state.
  void bind(Core.RenderState state) {
    state.projection.push(new Math.Matrix4.identity());
    Math.Matrix4 look = new Math.Matrix4.identity();
    if (mover != null) {
      Math.Matrix4 mat = mover.update(state, this);
      if (mat != null) {
        look = mat * look;
      }
    }
    state.view.push(look);
  }

  /// Unbinds this camera and returns to the previous camera.
  void unbind(Core.RenderState state) {
    state.projection.pop();
    state.view.pop();
  }
}
