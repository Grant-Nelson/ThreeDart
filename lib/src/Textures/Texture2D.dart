part of ThreeDart.Textures;

/// A 2D texture.
class Texture2D extends Texture {
  WebGL.Texture _texture;
  bool _bound;
  bool _loaded;

  /// Creates a new 2D texture.
  Texture2D({int index: 0, WebGL.Texture texture: null}):
    super._(index) {
    this._texture = texture;
    this._bound = false;
    this._loaded = false;
  }

  /// The loaded state of the texture.
  bool get loaded => this._loaded;

  /// Binds some data to the given [state].
  void bind(Core.RenderState state) {
    if (!this._bound && this._loaded) {
      this._bound = true;
      state.gl.activeTexture(WebGL.TEXTURE0+this.index);
      state.gl.bindTexture(WebGL.TEXTURE_2D, this._texture);
    }
  }

  /// Unbinds the bound data from the given [state].
  void unbind(Core.RenderState state) {
    if (this._bound) {
      this._bound = false;
      state.gl.activeTexture(WebGL.TEXTURE0+this.index);
      state.gl.bindTexture(WebGL.TEXTURE_2D, null);
    }
  }
}
