part of ThreeDart.Views;

/// A identity camara for rendering of a scene.
class IdentityCamara implements Camara {

  Movers.Mover _mover;

  /// Creates a new identity camara.
  IdentityCamara({Movers.Mover mover: null}) {
    this._mover = mover;
  }

  /// The mover to position this camara.
  Movers.Mover get mover => this._mover;
  set mover(Movers.Mover mover) => this._mover = mover;

  /// Binds this camara to the state.
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

  /// Unbinds this camara and returns to the previous camara.
  void unbind(Core.RenderState state) {
    state.projection.pop();
    state.view.pop();
  }
}
