part of ThreeDart.Lights;

/// Storage for directional light data.
class Directional implements Light {
  Math.Vector3 _direction;
  Movers.Mover _mover;
  Math.Color3 _color;
  Core.Event _changed;

  /// Creates a new directional light data.
  Directional({
      Movers.Mover mover: null,
      Math.Color3 color: null}) {
    this.mover      = mover;
    this.color      = color;
    this._direction = new Math.Vector3(0.0, 0.0, 1.0);
    this._changed   = null;
  }

  /// Emits when the light is changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Handles a change in the light.
  void onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Updates the light with the current state.
  void update(Core.RenderState state) {
    this._direction = new Math.Vector3(0.0, 0.0, 1.0);
    if (this._mover != null) {
      Math.Matrix4 mat = this._mover.update(state, this);
      if (mat != null) {
        this._direction = mat.transVec3(this._direction);
      }
    }
  }

  /// Binds the light to the given [state].
  void bind(Core.RenderState state) {
    // Do Nothing
  }

  /// Unbinds the bound the light from the given [state].
  void unbind(Core.RenderState state) {
    // Do Nothing
  }

  /// The direction the light is pointing.
  Math.Vector3 get direction => this._direction;

  /// The mover to position this light.
  Movers.Mover get mover => this._mover;
  void set mover(Movers.Mover mover) {
    if (this._mover != mover) {
      if (this._mover != null) this._mover.changed.remove(this.onChanged);
      if (mover != null) this._mover.changed.add(this.onChanged);
      this._mover = mover;
      this.onChanged();
    }
  }

  /// The color of the light.
  Math.Color3 get color => this._color;
  void set color(Math.Color3 color) {
    color = color ?? new Math.Color3.white();
    if (this._color != color) {
      this._color = color;
      this.onChanged();
    }
  }
}
