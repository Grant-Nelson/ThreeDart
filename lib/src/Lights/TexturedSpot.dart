part of ThreeDart.Lights;

/// Storage for textured spot light data.
class TexturedSpot implements Light {
  Math.Point3 _position;
  Math.Vector3 _direction;
  Math.Vector3 _up;
  Math.Vector3 _right;
  Movers.Mover _mover;
  Math.Color3 _color;
  Textures.Texture2D _texture;
  double _tuScalar;
  double _tvScalar;
  double _fov;
  double _ratio;
  double _attenuation0;
  double _attenuation1;
  double _attenuation2;
  Core.Event _changed;

  /// Creates a new textured spot light data.
  TexturedSpot({
      Movers.Mover mover: null,
      Math.Color3 color: null,
      Textures.Texture2D texture: null,
      double fov: null,
      double ratio: null,
      double attenuation0: null,
      double attenuation1: null,
      double attenuation2: null}) {
    this._fov         = 0.6;
    this._ratio       = 1.0;
    this.mover        = mover;
    this.color        = color;
    this.texture      = texture;
    this.fov          = fov;
    this.ratio        = ratio;
    this.attenuation0 = attenuation0;
    this.attenuation1 = attenuation1;
    this.attenuation2 = attenuation2;
    this._position    = new Math.Point3(0.0, 0.0, 0.0);
    this._direction   = new Math.Vector3(0.0, 0.0, 1.0);
    this._up          = new Math.Vector3(0.0, 1.0, 0.0);
    this._right       = new Math.Vector3(-1.0, 0.0, 0.0);
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
    this._position  = new Math.Point3(0.0, 0.0, 0.0);
    this._direction = new Math.Vector3(0.0, 0.0, 1.0);
    this._up        = new Math.Vector3(0.0, 1.0, 0.0);
    this._right     = new Math.Vector3(-1.0, 0.0, 0.0);
    if (this._mover != null) {
      Math.Matrix4 mat = this._mover.update(state, this);
      if (mat != null) {
        this._position  = mat.transPnt3(this._position);
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

  /// The location the light.
  Math.Point3 get position => this._position;

  /// The direction the light is pointing.
  Math.Vector3 get direction => this._direction;

  /// The up direction of the light.
  Math.Vector3 get up => this._up;

  /// The right direction of the light.
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

  /// The vertical texture scalar of the light.
  double get tuScalar => this._tuScalar;

  /// The horizontal texture scalar of the light.
  double get tvScalar => this._tvScalar;

  /// The feild-of-view of the light in the y-axis (up) of the texture.
  double get fov => this._fov;
  void set fov(double fov) {
    fov = Math.clampVal(fov ?? math.PI/3.0, 0.0, math.PI);
    if (!Math.Comparer.equals(this._fov, fov)) {
      this._fov = fov;
      this._tuScalar = 1.0/(math.sqrt(2.0)*math.tan(this._fov));
      this._tvScalar = this._tuScalar*this._ratio;
      this.onChanged();
    }
  }

  /// The ratio width to height of the texture.
  double get ratio => this._ratio;
  void set ratio(double ratio) {
    ratio = ratio ?? 1.0;
    if (!Math.Comparer.equals(this._ratio, ratio)) {
      this._ratio = ratio;
      this._tvScalar = this._tuScalar*this._ratio;
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
