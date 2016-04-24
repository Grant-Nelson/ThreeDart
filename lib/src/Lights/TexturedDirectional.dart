part of ThreeDart.Lights;

/// Storage for directional light data.
class TexturedDirectional implements Light {

  /// Creates a new directional light data.
  TexturedDirectional({
      Movers.Mover mover: null,
      Math.Color3 color: null,
      Textures.Texture2D texture: null}) {
    this.mover      = mover;
    this.color      = color;
    this.texture    = texture;
    this._direction = new Math.Vector3(0.0, 0.0, 1.0);
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
  void bind(Core.RenderState state){
    if(this.texture != null) this.texture.bind(state);
  }

  /// Unbinds the bound the light  from the given [state].
  void unbind(Core.RenderState state) {
    if(this.texture != null) this.texture.unbind(state);
  }

  /// The direction the light is pointing.
  Math.Vector3 get direction => this._direction;
  Math.Vector3 _direction;

  /// The mover to position this light.
  Movers.Mover get mover => this._mover;
  set mover(Movers.Mover mover) => this._mover = mover;
  Movers.Mover _mover;

  /// The color of the light.
  Math.Color3 get color => this._color;
  set color(Math.Color3 color) =>
    this._color = (color == null)? new Math.Color3.white(): color;
  Math.Color3 _color;

  /// The texture for the light.
  Textures.Texture2D get texture => this._texture;
  set texture(Textures.Texture2D texture) => this._texture = texture;
  Textures.Texture2D _texture;
}
