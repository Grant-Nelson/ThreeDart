part of ThreeDart.Lights;

/// Storage for textured point light data.
class TexturedPoint implements Light {

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

  /// Unbinds the bound the light  from the given [state].
  void unbind(Core.RenderState state) {
    this.texture?.unbind(state);
  }

  /// The rotation and position of the point light.
  Math.Matrix4 get matrix => this._matrix;
  Math.Matrix4 _matrix;

  /// The mover to position this light.
  Movers.Mover get mover => this._mover;
  set mover(Movers.Mover mover) => this._mover = mover;
  Movers.Mover _mover;

  /// The color of the light.
  Math.Color3 get color => this._color;
  set color(Math.Color3 color) => this._color = color ?? new Math.Color3.white();
  Math.Color3 _color;

  /// The texture of the light.
  Textures.TextureCube get texture => this._texture;
  set texture(Textures.TextureCube texture) => this._texture = texture;
  Textures.TextureCube _texture;

  /// The constant attenuation factor of the light.
  double get attenuation0 => this._attenuation0;
  set attenuation0(double attenuation0) => this._attenuation0 = attenuation0 ?? 0.0;
  double _attenuation0;

  /// The linear attenuation factor of the light.
  double get attenuation1 => this._attenuation1;
  set attenuation1(double attenuation1) => this._attenuation1 = attenuation1 ?? 0.0;
  double _attenuation1;

  /// The quadratic attenuation factor of the light.
  double get attenuation2 => this._attenuation2;
  set attenuation2(double attenuation2) => this._attenuation2 = attenuation2 ?? 0.0;
  double _attenuation2;
}
