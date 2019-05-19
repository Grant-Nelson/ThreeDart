part of ThreeDart.Techniques;

/// A technique for a cover pass which draws several textures.
class TextureLayout extends Technique {
  Math.Color4 _backClr;
  Shaders.TextureLayout _shader;
  Collections.Collection<TextureLayoutEntry> _entries;
  int _lastCount;
  Events.Event _changed;
  Shaders.ColorBlendType _blend;
  Shaders.ColorBlendType _lastBlend;

  /// Creates a new sky box technique with the given initial values.
  TextureLayout({
      Math.Color4            backColor: null,
      Shaders.ColorBlendType blend:     Shaders.ColorBlendType.AlphaBlend}) {
    this._backClr = Math.Color4.transparent();
    this._shader   = null;
    this._entries  = new Collections.Collection<TextureLayoutEntry>();
    this._entries.setHandlers(
      onAddedHndl: _onEntityAdded,
      onRemovedHndl: _onEntityRemoved);
    this._lastCount = 0;
    this._changed   = null;
    this._blend     = Shaders.ColorBlendType.AlphaBlend;
    this._lastBlend = Shaders.ColorBlendType.AlphaBlend;
    
    this.backColor = backColor;
    this.blend     = blend;
  }

  /// Indicates that this technique has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles a change in this technique.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Handles when texture layout entities have been added.
  void _onEntityAdded(int index, Iterable<TextureLayoutEntry> added) {
    for (TextureLayoutEntry entity in added) {
      if (entity != null) entity.changed.add(this._onChanged);
    }
    this._onChanged();
  }

  /// Handles when texture layout entities have been removed.
  void _onEntityRemoved(int index, Iterable<TextureLayoutEntry> removed) {
    for (TextureLayoutEntry entity in removed) {
      if (entity != null) entity.changed.remove(this._onChanged);
    }
    this._onChanged();
  }

  /// The list of layout entries.
  Collections.Collection<TextureLayoutEntry> get entries => this._entries;

  /// The background color for the layout.
  Math.Color4 get backColor => this._backClr;
  set backColor(Math.Color4 clr) {
    clr ??= new Math.Color4.transparent();
    if (this._backClr != clr) {
      Math.Color4 prev = this._backClr;
      this._backClr = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, "backColor", prev, this._backClr));
    }
  }
  
  /// The type of blending to use on overlapping layout textures.
  Shaders.ColorBlendType get blend => this._blend;
  set blend(Shaders.ColorBlendType blend) {
    blend ??= Shaders.ColorBlendType.AlphaBlend;
    if (this._blend != blend) {
      Shaders.ColorBlendType prev = this._blend;
      this._blend = blend;
      this._onChanged(new Events.ValueChangedEventArgs(this, "blend", prev, this._blend));
    }
  }

  /// Updates this technique for the given state.
  void update(Core.RenderState state) {
    // Do Nothing
  }

  /// Calculates a limit for the textures for the shader from
  /// the current number of textures. This helps reduce and reuse
  /// shaders with similar number of attributes.
  int _lengthLimit(int count) {
    count = ((count + 3) ~/ 4) * 4;
    if (count <= 0) return 4;
    return count;
  }

  /// Checks if the texture is in the list and if not, sets it's index and adds it to the list.
  void _addToTextureList(List<Textures.Texture> textures, Textures.Texture txt) {
    if (txt != null) {
      if (!textures.contains(txt)) {
        txt.index = textures.length;
        textures.add(txt);
      }
    }
  }

  /// Renders this technique for the given state and entity.
  void render(Core.RenderState state, Core.Entity obj) {
    int newCount = this._lengthLimit(this._entries.length);
    if ((newCount != this._lastCount) || (this._blend != this._lastBlend)) {
      this._lastCount = newCount;
      this._lastBlend = this._blend;
      this._shader = null;
    }

    this._shader ??= new Shaders.TextureLayout.cached(newCount, this._blend, state);

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shapeBuilder.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc;
    }

    this._shader.bind(state);
    List<Textures.Texture> textures = new List<Textures.Texture>();
    int count = 0;
    for (int i = 0; i < this._entries.length; ++i) {
      TextureLayoutEntry entry = this._entries[i];
      if (entry != null && entry.texture != null) {
        this._addToTextureList(textures, entry.texture);
        this._shader.setTexture(count, entry.texture);
        this._shader.setColorMatrix(count, entry.colorMatrix);
        this._shader.setSourceRect(count, entry.source);
        this._shader.setDestinationRect(count, entry.destination);
        this._shader.setFlip(count, entry.flip);
        ++count;
      }
    }
    this._shader.textureCount = count;
    this._shader.backgroundColor = this._backClr;

    for (int i = 0; i < textures.length; i++) {
      textures[i].bind(state);
    }

    if (obj.cache is Data.BufferStore) {
      (obj.cache as Data.BufferStore)
        ..bind(state)
        ..render(state)
        ..unbind(state);
    } else obj.clearCache();
    this._shader.unbind(state);

    for (int i = 0; i < textures.length; i++) {
      textures[i].unbind(state);
    }
  }
}
