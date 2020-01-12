part of ThreeDart.Lights;

/// Storage for point light data.
class Point implements Light {
  Math.Matrix4 _matrix;
  Movers.Mover _mover;
  Math.Color3 _color;
  Textures.TextureCube _texture;
  Textures.TextureCube _shadow;
  Math.Vector4 _shadowAdj;
  double _attenuation0;
  double _attenuation1;
  double _attenuation2;
  bool _enableAttn;
  Events.Event _changed;

  /// Creates a new point light data.
  Point({
      Movers.Mover mover: null,
      Math.Color3  color: null,
      Textures.TextureCube texture: null,
      Textures.TextureCube shadow:  null,
      Math.Vector4 shadowAdj: null,
      double attenuation0: 1.0,
      double attenuation1: 0.0,
      double attenuation2: 0.0,
      bool enableAttenuation: true}) {
    this._mover        = null;
    this._color        = new Math.Color3.white();
    this._texture      = null;
    this._shadow       = null;
    this._attenuation0 = 1.0;
    this._attenuation1 = 0.0;
    this._attenuation2 = 0.0;
    this._enableAttn   = true;
    this._matrix       = Math.Matrix4.identity;
    this._changed      = null;

    this.mover        = mover;
    this.color        = color;
    this.texture      = texture;
    this.shadow       = shadow;
    this.shadowAdjust = shadowAdj;
    this.attenuation0 = attenuation0;
    this.attenuation1 = attenuation1;
    this.attenuation2 = attenuation2;
    this.enableAttenuation = enableAttenuation;
  }

  /// Emits when the light is changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles changes to the light.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Updates the light with the current state.
  void update(Core.RenderState state) {
    this._matrix = Math.Matrix4.identity;
    if (this._mover != null)
      this._matrix = this._mover.update(state, this);
  }

  /// The identifier for the configuration to use when
  /// setting up the shader using this light.
  int get configID =>
    ((this._texture != null)? 0x01: 0) +
    ((this._shadow != null)?  0x02: 0) +
    (this._enableAttn?        0x04: 0);

  /// The rotation and position of the point light.
  Math.Matrix4 get matrix => this._matrix;

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
    color ??= new Math.Color3.white();
    if (this._color != color) {
      Math.Color3 prev = this._color;
      this._color = color;
      this._onChanged(new Events.ValueChangedEventArgs(this, "color", prev, this._color));
    }
  }

  /// The color texture of the light.
  Textures.TextureCube get texture => this._texture;
  void set texture(Textures.TextureCube texture) {
    if (this._texture != texture) {
      if (this._texture != null) this._texture.changed.remove(this._onChanged);
      Textures.TextureCube prev = this._texture;
      this._texture = texture;
      if (this._texture != null) this._texture.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "texture", prev, this._texture));
    }
  }

  /// The shadow depth texture of the light.
  Textures.TextureCube get shadow => this._shadow;
  void set shadow(Textures.TextureCube shadow) {
    if (this._shadow != shadow) {
      if (this._shadow != null) this._shadow.changed.remove(this._onChanged);
      Textures.TextureCube prev = this._shadow;
      this._shadow = shadow;
      if (this._shadow != null) this._shadow.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "shadow", prev, this._shadow));
    }
  }

  /// The shadow value modification vector.
  /// This is the vector to apply to the color from the shadow texture
  /// to get the shadow value from the shadow texture.
  Math.Vector4 get shadowAdjust => this._shadowAdj;
  void set shadowAdjust(Math.Vector4 vec) {
    vec ??= Math.Vector4.shadowAdjust;
    if (this._shadowAdj != vec) {
      Math.Vector4 prev = this._shadowAdj;
      this._shadowAdj = vec;
      this._onChanged(new Events.ValueChangedEventArgs(this, "shadowAdjust", prev, this._shadowAdj));
    }
  }

  /// The constant attenuation factor of the light.
  double get attenuation0 => this._attenuation0;
  void set attenuation0(double attenuation0) {
    attenuation0 ??= 1.0;
    if (!Math.Comparer.equals(this._attenuation0, attenuation0)) {
      double prev = this._attenuation0;
      this._attenuation0 = attenuation0;
      this._onChanged(new Events.ValueChangedEventArgs(this, "attenuation0", prev, this._attenuation0));
    }
  }

  /// The linear attenuation factor of the light.
  double get attenuation1 => this._attenuation1;
  void set attenuation1(double attenuation1) {
    attenuation1 ??= 0.0;
    if (!Math.Comparer.equals(this._attenuation1, attenuation1)) {
      double prev = this._attenuation1;
      this._attenuation1 = attenuation1;
      this._onChanged(new Events.ValueChangedEventArgs(this, "attenuation1", prev, this._attenuation1));
    }
  }

  /// The quadratic attenuation factor of the light.
  double get attenuation2 => this._attenuation2;
  void set attenuation2(double attenuation2) {
    attenuation2 ??= 0.0;
    if (!Math.Comparer.equals(this._attenuation2, attenuation2)) {
      double prev = this._attenuation2;
      this._attenuation2 = attenuation2;
      this._onChanged(new Events.ValueChangedEventArgs(this, "attenuation2", prev, this._attenuation2));
    }
  }

  /// Indicates if attenuation should be determined or not.
  bool get enableAttenuation => this._enableAttn;
  void set enableAttenuation(bool enable) {
    enable ??= true;
    if (this._enableAttn != enable) {
      bool prev = this._enableAttn;
      this._enableAttn = enable;
      this._onChanged(new Events.ValueChangedEventArgs(this, "enableAttenuation", prev, this._enableAttn));
    }
  }
}
