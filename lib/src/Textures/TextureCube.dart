part of ThreeDart.Textures;

/// A cube map texture.
///
/// Cube map textures are good for rendering reflections,
/// refractions, and sky boxes.
class TextureCube extends Texture {
  int _index;
  WebGL.Texture? _texture;
  bool _bound;
  int _loaded;
  Events.Event? _changed;

  /// Creates a new cube map texture.
  TextureCube({int index: 0, WebGL.Texture? texture: null}):
    this._index   = index,
    this._texture = texture,
    this._bound   = false,
    this._loaded  = 0,
    this._changed = null;

  /// Increments the loaded value of the images.
  void _incLoaded() {
    this._loaded++;
    if (this.loaded)
      this._changed?.emit();
  }

  /// The index of the texture when bound to the rendering context.
  int get index => this._index;
  set index(int index) => this._index = index;

  /// The loaded state of the texture.
  bool get loaded => this._loaded >= 6;

  /// Emitted when the texture has finished being loaded.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Binds some data to the given [state].
  void bind(Core.RenderState state) {
    if (!this._bound && this.loaded) {
      this._bound = true;
      state.gl.activeTexture(WebGL.WebGL.TEXTURE0+this.index);
      state.gl.bindTexture(WebGL.WebGL.TEXTURE_CUBE_MAP, this._texture);
    }
  }

  /// Unbinds the bound data from the given [state].
  void unbind(Core.RenderState state) {
    if (this._bound) {
      this._bound = false;
      state.gl.activeTexture(WebGL.WebGL.TEXTURE0+this.index);
      state.gl.bindTexture(WebGL.WebGL.TEXTURE_CUBE_MAP, null);
    }
  }
}
