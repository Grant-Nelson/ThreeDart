part of ThreeDart.Textures;

/// A cube map texture.
///
/// Cube map textures are good for rendering reflections,
/// refractions, and sky boxes.
class TextureCube extends Texture {
  WebGL.Texture texture;

  /// Creates a new cube map texture.
  TextureCube({int index: 0, WebGL.Texture texture: null}):
    super._(index) {
    this.texture = texture;
  }

  /// Binds some data to the given [state].
  void bind(Core.RenderState state) {
    if (this.texture != null) {
      state.gl.activeTexture(WebGL.TEXTURE0+this.index);
      state.gl.bindTexture(WebGL.TEXTURE_CUBE_MAP, this.texture);
    }
  }

  /// Unbinds the bound data from the given [state].
  void unbind(Core.RenderState state) {
    state.gl.activeTexture(WebGL.TEXTURE0+this.index);
    state.gl.bindTexture(WebGL.TEXTURE_CUBE_MAP, null);
  }
}
