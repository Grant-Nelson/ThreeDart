part of ThreeDart.Lights;

/// Storage for directional light data.
class TexturedDirectional implements Light {
  Math.Vector3 _direction;
  Math.Vector3 _up;
  Math.Vector3 _right;
  Movers.Mover _mover;
  Math.Color3 _color;
  Textures.Texture2D _texture;
  Core.Event _changed;

  /// Creates a new directional light data.
  TexturedDirectional({
      Movers.Mover mover: null,
      Math.Color3 color: null,
      Textures.Texture2D texture: null}) {
    this.mover      = mover;
    this.color      = color;
    this.texture    = texture;
    this._direction = new Math.Vector3(0.0, 0.0, 1.0);
    this._up        = new Math.Vector3(0.0, 1.0, 0.0);
    this._right     = new Math.Vector3(-1.0, 0.0, 0.0);
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
    this._up        = new Math.Vector3(0.0, 1.0, 0.0);
    this._right     = new Math.Vector3(-1.0, 0.0, 0.0);
    if (this._mover != null) {
      Math.Matrix4 mat = this._mover.update(state, this);
      if (mat != null) {
        this._direction = mat.transVec3(this._direction).normal();
        this._up        = mat.transVec3(this._up).normal();
        this._right     = mat.transVec3(this._right).normal();
      }
    }
  }

  /// Binds the light to the given [state].
  void bind(Core.RenderState state){
    this.texture?.bind(state);
  }

  /// Unbinds the bound the light from the given [state].
  void unbind(Core.RenderState state) {
    this.texture?.unbind(state);
  }

  /// The direction the light is pointing.
  Math.Vector3 get direction => this._direction;

  /// The up vector of the texture for the light.
  Math.Vector3 get up => this._up;

  /// The right vector of the texture for the light.
  Math.Vector3 get right => this._right;

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

  /// The texture for the light.
  Textures.Texture2D get texture => this._texture;
  void set texture(Textures.Texture2D texture) {
    if (this._texture != texture) {
      if (this._texture != null) this._texture.loadFinished.remove(this.onChanged);
      if (texture != null) this._texture.loadFinished.add(this.onChanged);
      this._texture = texture;
      this.onChanged();
    }
  }
}
