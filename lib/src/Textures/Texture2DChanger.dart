part of ThreeDart.Textures;

/// A 2D texture changer for cycling between images.
class Texture2DChanger extends Texture2D {
  int _index = 0;
  int _listIndex = 0;
  Texture2D? _current = null;
  Texture2D? _bound = null;
  List<Texture2D> _textures = [];
  Events.Event? _changed = null;

  /// Creates a new 2D texture.
  Texture2DChanger({int index: 0, List<Texture2D>? textures: null}) {
    this._index    = index;
    this._textures = textures ?? [];
  }

  /// The index of the texture when bound to the rendering context.
  int get index => this._index;
  set index(int index) => this._index = index;

  /// This is the bound texture being used or the current texture assigned
  /// which will be bound during the next render.
  Texture2D? get _active => this._bound ?? this._current;

  /// The internal texture instance.
  WebGL.Texture? get texture => this._active?.texture;

  /// The loaded state of the texture.
  bool get loaded => this._active?.loaded ?? false;

  /// Ths width of the image in pixels as requested or loaded from file.
  int get width => this._active?.width ?? 0;

  /// Ths height of the image in pixels as requested or loaded from file.
  int get height => this._active?.height ?? 0;

  /// The width of the image in pixels allowed by this machine's architecture.
  int get actualWidth => this._active?.actualWidth ?? 0;

  /// The height of the image in pixels allowed by this machine's architecture.
  int get actualHeight => this._active?.actualHeight ?? 0;

  /// Emitted when the texture has finished being loaded or replaced.
  ///
  /// On change typically indicates a new render is needed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

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
      this._bound?.unbind(state);
      this._bound = null;
    }
  }
}
