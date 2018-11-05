part of ThreeDart.Lights;

/// Storage for directional light data.
class Directional implements Light {
  Math.Vector3 _direction;
  Movers.Mover _mover;
  Math.Color3 _color;
  Events.Event _changed;

  /// Creates a new directional light data.
  Directional({
      Movers.Mover mover: null,
      Math.Color3  color: null}) {
    this._mover     = null;
    this._color     = new Math.Color3.white();
    this._direction = new Math.Vector3(0.0, 0.0, 1.0);
    this._changed   = null;

    this.mover = mover;
    this.color = color;
  }

  /// Emits when the light is changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles a change in the light.
  void _onChanged([Events.EventArgs args = null]) {
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
  /// Setting direction will override the mover with a constant mover pointing in the given direction.
  Math.Vector3 get direction => this._direction;
  void set direction(Math.Vector3 vector) {
    this._mover = new Movers.Constant.lookTowards(
      new Math.Point3.zero(), new Math.Vector3(0.0, 1.0, 0.0), vector);
  }

  /// The mover to position this light.
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

  /// The color of the light.
  Math.Color3 get color => this._color;
  void set color(Math.Color3 color) {
    color = color ?? new Math.Color3.white();
    if (this._color != color) {
      Math.Color3 prev = this._color;
      this._color = color;
      this._onChanged(new Events.ValueChangedEventArgs(this, "color", prev, this._color));
    }
  }
}
