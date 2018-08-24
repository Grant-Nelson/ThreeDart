part of ThreeDart.Views;

/// A identity camera for rendering of a scene.
class IdentityCamera implements Camera {
  Movers.Mover _mover;
  Events.Event _changed;

  /// Creates a new identity camera.
  IdentityCamera({Movers.Mover mover: null}) {
    this._mover = mover;
    this._changed = null;
  }

  /// Indicates that this target has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles a change in this target.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The mover to position this camera.
  Movers.Mover get mover => this._mover;
  void set mover(Movers.Mover mover) {
    if (this._mover != mover) {
      if (this._mover != null) this._mover.changed.remove(this._onChanged);
      Movers.Mover prev = this._mover;
      this._mover = mover;
      if (this._mover != null) this._mover.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "mover", prev, this._mover));
    }
  }

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
