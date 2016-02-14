part of ThreeDart.Textures;

/// A 2D texture.
class Texture2D extends Texture {
  WebGL.Texture texture;

  /// Creates a new 2D texture.
  Texture2D({int index: 0, WebGL.Texture texture: null}):
    super._(index) {
    this.texture = texture;
  }

  /// Binds some data to the given [state].
  void bind(Core.RenderState state) {
    if (this.texture != null) {
      state.gl.activeTexture(WebGL.TEXTURE0+this.index);
      state.gl.bindTexture(WebGL.TEXTURE_2D, this.texture);
    }
  }

  /// Unbinds the bound data from the given [state].
  void unbind(Core.RenderState state) {
    state.gl.activeTexture(WebGL.TEXTURE0+this.index);
    state.gl.bindTexture(WebGL.TEXTURE_2D, null);
  }
}
