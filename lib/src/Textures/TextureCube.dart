part of ThreeDart.Textures;

/// A cube map texture.
///
/// Cube map textures are good for rendering reflections,
/// refractions, and sky boxes.
class TextureCube extends Texture {
  WebGL.Texture _texture;
  bool _bound;
  int _loaded;
  Core.Event _loadFinished;

  /// Creates a new cube map texture.
  TextureCube({int index: 0, WebGL.Texture texture: null}):
    super._(index) {
    this._texture = texture;
    this._bound = false;
    this._loaded = 0;
    this._loadFinished = new Core.Event();
  }

  /// Increments the loaded value of the images.
  void _incLoaded() {
    this._loaded++;
    if (this._loaded == 6)
      this._loadFinished.emit();
  }

  /// The loaded state of the texture.
  bool get loaded => this._loaded >= 6;

  /// Emitted when the texture has finished being loaded.
  Core.Event get loadFinished => this._loadFinished;

  /// Binds some data to the given [state].
  void bind(Core.RenderState state) {
    if (!this._bound && this.loaded) {
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
