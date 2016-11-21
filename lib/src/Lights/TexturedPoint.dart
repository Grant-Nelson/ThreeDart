part of ThreeDart.Lights;

/// Storage for textured point light data.
class TexturedPoint implements Light {
  Math.Matrix4 _matrix;
  Movers.Mover _mover;
  Math.Color3 _color;
  Textures.TextureCube _texture;
  double _attenuation0;
  double _attenuation1;
  double _attenuation2;
  Core.Event _changed;

  /// Creates a new textured point light data.
  TexturedPoint({
      Movers.Mover mover: null,
      Math.Color3 color: null,
      Textures.TextureCube texture: null,
      double attenuation0: null,
      double attenuation1: null,
      double attenuation2: null}) {
    this.mover        = mover;
    this.color        = color;
    this.texture      = texture;
    this.attenuation0 = attenuation0;
    this.attenuation1 = attenuation1;
    this.attenuation2 = attenuation2;
    this._matrix      = new Math.Matrix4.identity();
    this._changed     = null;
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
    this._matrix = new Math.Matrix4.identity();
    if (this._mover != null) {
      this._matrix = this._mover.update(state, this);
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

  /// The rotation and position of the point light.
  Math.Matrix4 get matrix => this._matrix;

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

  /// The texture of the light.
  Textures.TextureCube get texture => this._texture;
  void set texture(Textures.TextureCube texture) {
    if (this._texture != texture) {
      if (this._texture != null) this._texture.loadFinished.remove(this.onChanged);
      if (texture != null) this._texture.loadFinished.add(this.onChanged);
      this._texture = texture;
      this.onChanged();
    }
  }

  /// The constant attenuation factor of the light.
  double get attenuation0 => this._attenuation0;
  void set attenuation0(double attenuation0) {
    attenuation0 = attenuation0 ?? 1.0;
    if (!Math.Comparer.equals(this._attenuation0, attenuation0)) {
      this._attenuation0 = attenuation0;
      this.onChanged();
    }
  }

  /// The linear attenuation factor of the light.
  double get attenuation1 => this._attenuation1;
  void set attenuation1(double attenuation1) {
    attenuation1 = attenuation1 ?? 0.0;
    if (!Math.Comparer.equals(this._attenuation1, attenuation1)) {
      this._attenuation1 = attenuation1;
      this.onChanged();
    }
  }

  /// The quadratic attenuation factor of the light.
  double get attenuation2 => this._attenuation2;
  void set attenuation2(double attenuation2) {
    attenuation2 = attenuation2 ?? 0.0;
    if (!Math.Comparer.equals(this._attenuation2, attenuation2)) {
      this._attenuation2 = attenuation2;
      this.onChanged();
    }
  }
}
