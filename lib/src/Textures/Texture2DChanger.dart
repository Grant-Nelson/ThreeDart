part of ThreeDart.Textures;

/// A 2D texture changer for cycling between images.
class Texture2DChanger extends Texture2D {
  int _index;
  int _listIndex;
  Texture2D _current;
  Texture2D _bound;
  List<Texture2D> _textures;
  Events.Event _changed;

  /// Creates a new 2D texture.
  Texture2DChanger({int index: 0, List<Texture> textures: null}) {
    this._index     = index;
    this._listIndex = 0;
    this._current   = null;
    this._bound     = null;
    this._textures  = textures ?? new List<Texture2D>();
    this._changed   = null;
  }

  /// The index of the texture when bound to the rendering context.
  int get index => this._index;
  set index(int index) => this._index = index;

  /// The internal texture instance.
  WebGL.Texture get texture => this._bound?.texture ?? this._current?.texture;

  /// The loaded state of the texture.
  bool get loaded => this._bound?.loaded ?? this._current?.loaded ?? false;

  /// Ths width of the image in pixels as requested or loaded from file.
  int get width => this._bound?.width ?? this._current?.width ?? 0;

  /// Ths height of the image in pixels as requested or loaded from file.
  int get height => this._bound?.height ?? this._current?.height ?? 0;

  /// The width of the image in pixels allowed by this machine's architecture.
  int get actualWidth => this._bound?.actualWidth ?? this._current?.actualWidth ?? 0;

  /// The height of the image in pixels allowed by this machine's architecture.
  int get actualHeight => this._bound?.actualHeight ?? this._current?.actualHeight ?? 0;

  /// Emitted when the texture has finished being loaded or replaced.
  ///
  /// On change typically indicates a new render is needed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// The index of the texture when bound to the rendering context.
  int get currentIndex => this._listIndex;
  set currentIndex(int index) {
    if ((index >= 0) && (index < this._textures.length)) {
      this._listIndex = index;
      this._current = this._textures[index];
      this._changed?.emit();
    }
  }

  /// Selects the next texture or cycles back to the first texture.
  void nextTexture() {
    this.currentIndex = (this._listIndex + 1) % this._textures.length;
  }

  /// Selects the previous texture or cycles back to the last texture.
  void previousTexture() {
    int count = this._textures.length;
    this.currentIndex = (this._listIndex + count - 1) % count;
  }

  // The list of textures to cycle through.
  List<Texture2D> get textures => this._textures;

  /// Binds some data to the given [state].
  void bind(Core.RenderState state) {
    if (this._bound == null) {
      this._bound = this._current;
      this._bound?.bind(state);
    }
  }

  /// Unbinds the bound data from the given [state].
  void unbind(Core.RenderState state) {
    if (this._bound != null) {
      this._bound.unbind(state);
      this._bound = null;
    }
  }
}
