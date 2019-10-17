part of ThreeDart.Lights;

/// Storage for bar light data.
class Bar implements Light {
  Math.Matrix4 _startMatrix;
  Math.Matrix4 _endMatrix;
  Movers.Mover _startMover;
  Movers.Mover _endMover;
  Math.Color3 _color;
  Math.Vector4 _shadowAdj;
  double _attenuation0;
  double _attenuation1;
  double _attenuation2;
  bool _enableAttn;
  Events.Event _changed;

  /// Creates a new bar light data.
  Bar({
      Movers.Mover startMover: null,
      Movers.Mover endMover:   null,
      Math.Color3  color:      null,
      //Textures.Texture2D texture: null, // TODO: Add Texture
      Math.Vector4 shadowAdj: null,
      double attenuation0: 1.0,
      double attenuation1: 0.0,
      double attenuation2: 0.0,
      bool enableAttenuation: true}) {
    this._endMover     = null;
    this._startMover   = null;
    this._color        = new Math.Color3.white();
    this._attenuation0 = 1.0;
    this._attenuation1 = 0.0;
    this._attenuation2 = 0.0;
    this._enableAttn   = true;
    this._startMatrix  = Math.Matrix4.identity;
    this._endMatrix    = Math.Matrix4.identity;
    this._changed      = null;

    this.startMover   = startMover;
    this.endMover     = endMover;
    this.color        = color;
    //this.texture      = texture; // TODO: Add Texture
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
    this._startMatrix = Math.Matrix4.identity;
    if (this._startMover != null)
      this._startMatrix = this._startMover.update(state, this);
      
    this._endMatrix = Math.Matrix4.identity;
    if (this._endMover != null)
      this._endMatrix = this._endMover.update(state, this);
  }

  /// The identifier for the configuration to use when
  /// setting up the shader using this light.
  int get configID =>
    //((this._texture != null)? 0x01: 0) + // TODO: Add Texture
    (this._enableAttn?        0x04: 0);
  
  /// The rotation and position of the start point of the bar light.
  Math.Matrix4 get startMatrix => this._startMatrix;

  /// The rotation and position of the end point of the bar light.
  Math.Matrix4 get endMatrix => this._endMatrix;

  
  /// This is an alias to the satart mover, [startMover].
  Movers.Mover get mover => this.startMover;
  void set mover(Movers.Mover mover) => this.startMover = mover;

  /// The mover to start position this light.
  Movers.Mover get startMover => this._startMover;
  void set startMover(Movers.Mover mover) {
    if (this._startMover != mover) {
      if (this._startMover != null) this._startMover.changed.remove(this._onChanged);
      Movers.Mover prev = this._startMover;
      this._startMover = mover;
      if (this._startMover != null) this._startMover.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "startMover", prev, this._startMover));
    }
  }

  /// The mover to end position this light.
  Movers.Mover get endMover => this._endMover;
  void set endMover(Movers.Mover mover) {
    if (this._endMover != mover) {
      if (this._endMover != null) this._endMover.changed.remove(this._onChanged);
      Movers.Mover prev = this._endMover;
      this._endMover = mover;
      if (this._endMover != null) this._endMover.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "endMover", prev, this._endMover));
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

  /* TODO: Add Texture
  /// The color texture of the light.
  Textures.Texture2D get texture => this._texture;
  void set texture(Textures.Texture2D texture) {
    if (this._texture != texture) {
      if (this._texture != null) this._texture.changed.remove(this._onChanged);
      Textures.Texture2D prev = this._texture;
      this._texture = texture;
      if (this._texture != null) this._texture.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "texture", prev, this._texture));
    }
  }
  */
  
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
