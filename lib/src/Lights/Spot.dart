part of ThreeDart.Lights;

/// Storage for spot light data.
class Spot implements Light {
  Math.Point3 _position;
  Math.Vector3 _direction;
  Math.Vector3 _up;
  Math.Vector3 _right;
  Math.Vector4? _shadowAdj;
  Movers.Mover? _mover;
  Math.Color3? _color;
  Textures.Texture2D? _texture;
  Textures.Texture2D? _shadow;
  double _tuScalar;
  double _tvScalar;
  double _fov;
  double _ratio;
  double _cutoff;
  bool _enableCutOff;
  double _coneAngle;
  double _attenuation0;
  double _attenuation1;
  double _attenuation2;
  bool _enableAttn;
  Events.Event? _changed;

  /// Creates a new spot light data.
  Spot({
    Movers.Mover? mover: null,
    Math.Color3?  color: null,
    Textures.Texture2D? texture:   null,
    Textures.Texture2D? shadow:    null,
    Math.Vector4?       shadowAdj: null,
    double fov:          Math.PI_3,
    double ratio:        1.0,
    double cutoff:       Math.PI_2,
    double coneAngle:    Math.PI_2,
    double attenuation0: 1.0,
    double attenuation1: 0.0,
    double attenuation2: 0.0,
    bool enableCutOff:      true,
    bool enableAttenuation: true}):
    this._position  = Math.Point3.zero,
    this._direction = Math.Vector3.posZ,
    this._up        = Math.Vector3.posY,
    this._right     = Math.Vector3.negX,
    this._shadowAdj = null,
    this._mover = null,
    this._color = Math.Color3.white(),
    this._texture = null,
    this._shadow  = null,
    this._tuScalar = 1.0,
    this._tvScalar = 1.0,
    this._fov = Math.PI_3,
    this._ratio = 1.0,
    this._cutoff = Math.PI_2,
    this._enableCutOff = true,
    this._coneAngle = Math.PI_2,
    this._attenuation0 = 1.0,
    this._attenuation1 = 0.0,
    this._attenuation2 = 0.0,
    this._enableAttn = true,
    this._changed = null {
    this.mover     = mover;
    this.color     = color;
    this.texture   = texture;
    this.shadow    = shadow;
    this.fov       = fov;
    this.ratio     = ratio;
    this.cutoff    = cutoff;
    this.coneAngle = coneAngle;
    this.shadowAdjust = shadowAdj;
    this.attenuation0 = attenuation0;
    this.attenuation1 = attenuation1;
    this.attenuation2 = attenuation2;
    this.enableCutOff      = enableCutOff;
    this.enableAttenuation = enableAttenuation;
  }

  /// The event emitted when the light has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles changes to the light.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// Updates the light with the current state.
  void update(Core.RenderState state) {
    this._position  = Math.Point3.zero;
    this._direction = Math.Vector3.posZ;
    this._up        = Math.Vector3.posY;
    this._right     = Math.Vector3.negX;
    var mover = this._mover;
    if (mover != null) {
      Math.Matrix4 mat = mover.update(state, this);
      this._position  = mat.transPnt3(this._position);
      this._direction = mat.transVec3(this._direction).normal();
      this._up        = mat.transVec3(this._up).normal();
      this._right     = mat.transVec3(this._right).normal();
    }
  }

  /// The identifier for the configuration to use when
  /// setting up the shader using this light.
  int get configID =>
    ((this._texture != null)? 0x01: 0) +
    ((this._shadow != null)?  0x02: 0) +
    (this._enableAttn?        0x04: 0) +
    (this._enableCutOff?      0x08: 0);

  /// The location the light.
  Math.Point3 get position => this._position;

  /// The direction the light is pointing.
  Math.Vector3 get direction => this._direction;

  /// The up direction of the light.
  Math.Vector3 get up => this._up;

  /// The right direction of the light.
  Math.Vector3 get right => this._right;

  /// The mover to position this light.
  Movers.Mover? get mover => this._mover;
  set mover(Movers.Mover? mover) {
    if (this._mover != mover) {
      this._mover?.changed.remove(this._onChanged);
      Movers.Mover? prev = this._mover;
      this._mover = mover;
      this._mover?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'mover', prev, this._mover));
    }
  }

  /// The color of the light.
  Math.Color3? get color => this._color;
  set color(Math.Color3? color) {
    color ??= new Math.Color3.white();
    if (this._color != color) {
      Math.Color3? prev = this._color;
      this._color = color;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'color', prev, this._color));
    }
  }

  /// The color texture for the light.
  Textures.Texture2D? get texture => this._texture;
  set texture(Textures.Texture2D? texture) {
    if (this._texture != texture) {
      this._texture?.changed.remove(this._onChanged);
      Textures.Texture2D? prev = this._texture;
      this._texture = texture;
      this._texture?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'texture', prev, this._texture));
    }
  }

  /// The shadow depth texture for the light.
  Textures.Texture2D? get shadow => this._shadow;
  set shadow(Textures.Texture2D? shadow) {
    if (this._shadow != shadow) {
      this._shadow?.changed.remove(this._onChanged);
      Textures.Texture2D? prev = this._shadow;
      this._shadow = shadow;
      this._shadow?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'shadow', prev, this._shadow));
    }
  }

  /// The shadow value modification vector.
  /// This is the vector to apply to the color from the shadow texture
  /// to get the shadow value from the shadow texture.
  Math.Vector4? get shadowAdjust => this._shadowAdj;
  set shadowAdjust(Math.Vector4? vec) {
    vec ??= Math.Vector4.shadowAdjust;
    if (this._shadowAdj != vec) {
      Math.Vector4? prev = this._shadowAdj;
      this._shadowAdj = vec;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'shadowAdjust', prev, this._shadowAdj));
    }
  }

  /// The vertical texture scalar of the light.
  double get tuScalar => this._tuScalar;

  /// The horizontal texture scalar of the light.
  double get tvScalar => this._tvScalar;

  /// The field-of-view of the light in the y-axis (up) of the texture.
  double get fov => this._fov;
  set fov(double fov) {
    fov = Math.clampVal(fov, 0.0, Math.PI);
    if (!Math.Comparer.equals(this._fov, fov)) {
      double prev = this._fov;
      this._fov = fov;
      this._tuScalar = 1.0/(math.sqrt(2.0)*math.tan(this._fov));
      this._tvScalar = this._tuScalar*this._ratio;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'fov', prev, this._fov));
    }
  }

  /// The ratio width to height of the texture.
  double get ratio => this._ratio;
  set ratio(double ratio) {
    if (!Math.Comparer.equals(this._ratio, ratio)) {
      double prev = this._ratio;
      this._ratio = ratio;
      this._tvScalar = this._tuScalar*this._ratio;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'ratio', prev, this._ratio));
    }
  }

  /// The cut-off angle, in radians, of the light cone.
  double get cutoff => this._cutoff;
  set cutoff(double cutoff) {
    cutoff = Math.clampVal(cutoff, 0.0, Math.PI);
    if (!Math.Comparer.equals(this._cutoff, cutoff)) {
      double prev = this._cutoff;
      this._cutoff = cutoff;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'cutoff', prev, this._cutoff));
    }
  }

  /// The cone angle, in radians, of the light.
  double get coneAngle => this._coneAngle;
  set coneAngle(double coneAngle) {
    coneAngle = Math.clampVal(coneAngle, 0.0, Math.PI);
    if (!Math.Comparer.equals(this._coneAngle, coneAngle)) {
      double prev = this._coneAngle;
      this._coneAngle = coneAngle;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'coneAngle', prev, this._coneAngle));
    }
  }

  /// Indicates if cone cutoff should be applied or not.
  bool get enableCutOff => this._enableCutOff;
  set enableCutOff(bool enable) {
    if (this._enableCutOff != enable) {
      bool prev = this._enableCutOff;
      this._enableCutOff = enable;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'enableCutOff', prev, this._enableCutOff));
    }
  }

  /// The constant attenuation factor of the light.
  double get attenuation0 => this._attenuation0;
  set attenuation0(double attenuation0) {
    if (!Math.Comparer.equals(this._attenuation0, attenuation0)) {
      double prev = this._attenuation0;
      this._attenuation0 = attenuation0;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'attenuation0', prev, this._attenuation0));
    }
  }

  /// The linear attenuation factor of the light.
  double get attenuation1 => this._attenuation1;
  set attenuation1(double attenuation1) {
    if (!Math.Comparer.equals(this._attenuation1, attenuation1)) {
      double prev = this._attenuation1;
      this._attenuation1 = attenuation1;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'attenuation1', prev, this._attenuation1));
    }
  }

  /// The quadratic attenuation factor of the light.
  double get attenuation2 => this._attenuation2;
  set attenuation2(double attenuation2) {
    if (!Math.Comparer.equals(this._attenuation2, attenuation2)) {
      double prev = this._attenuation2;
      this._attenuation2 = attenuation2;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'attenuation2', prev, this._attenuation2));
    }
  }

  /// Indicates if attenuation should be determined or not.
  bool get enableAttenuation => this._enableAttn;
  set enableAttenuation(bool enable) {
    if (this._enableAttn != enable) {
      bool prev = this._enableAttn;
      this._enableAttn = enable;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'enableAttenuation', prev, this._enableAttn));
    }
  }
}
