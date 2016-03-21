part of ThreeDart.Textures;

/// A cube map texture.
///
/// Cube map textures are good for rendering reflections,
/// refractions, and sky boxes.
class TextureCube extends Texture {
  WebGL.Texture _texture;
  bool _bound;

  /// Creates a new cube map texture.
  TextureCube({int index: 0, WebGL.Texture texture: null}):
    super._(index) {
    this._texture = texture;
    this._bound = false;
  }

  /// Binds some data to the given [state].
  void bind(Core.RenderState state) {
    if (!this._bound) {
      this._bound = true;
      state.gl.activeTexture(WebGL.TEXTURE0+this.index);
      state.gl.bindTexture(WebGL.TEXTURE_CUBE_MAP, this._texture);
    }
  }

  /// Unbinds the bound data from the given [state].
  void unbind(Core.RenderState state) {
    if (this._bound) {
      this._bound = false;
      state.gl.activeTexture(WebGL.TEXTURE0+this.index);
      state.gl.bindTexture(WebGL.TEXTURE_CUBE_MAP, null);
    }
  }
}
