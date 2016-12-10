part of ThreeDart.Techniques;

/// An entry in the TextureLayout technique descibing the layout of one texture.
class TextureLayoutEntry implements Core.Changable {
  Textures.Texture2D _txt;
  Math.Matrix4 _clrMat;
  Math.Region2 _src;
  Math.Region2 _dest;
  bool _flip;
  Core.Event _changed;

  /// Creates an entry for the texture layout technique.
  TextureLayoutEntry({Textures.Texture2D texture:     null,
                      Math.Matrix4       colorMatrix: null,
                      Math.Region2       source:      null,
                      Math.Region2       destination: null,
                      bool               flip:        false}) {
    this.texture     = texture;
    this.colorMatrix = colorMatrix;
    this.source      = source;
    this.destination = destination;
    this.flip        = flip;
    this._changed    = null;
  }

  /// Indicates that this entity has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Handles a change in this entity.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The texture to draw for this entry.
  Textures.Texture2D get texture => this._txt;
  void set texture(Textures.Texture2D txt) {
    if (this._txt != txt) {
      if (this._txt != null) this._txt.loadFinished.remove(this._onChanged);
      Textures.Texture2D prev = this._txt;
      this._txt = txt;
      if (this._txt != null) this._txt.loadFinished.add(this._onChanged);
      this._onChanged(new Core.ValueChangedEventArgs(this, "texture", prev, this._txt));
    }
  }

  /// The color adjustment matrix.
  Math.Matrix4 get colorMatrix => this._clrMat;
  void set colorMatrix(Math.Matrix4 mat) {
    mat = mat ?? new Math.Matrix4.identity();
    if (this._clrMat != mat) {
      Math.Matrix4 prev = this._clrMat;
      this._clrMat = mat;
      this._onChanged(new Core.ValueChangedEventArgs(this, "colorMatrix", prev, this._clrMat));
    }
  }

  /// The source region of the texture to render with.
  Math.Region2 get source => this._src;
  void set source(Math.Region2 src) {
    src = src ?? new Math.Region2(0.0, 0.0, 1.0, 1.0);
    if (this._src != src) {
      Math.Region2 prev = this._src;
      this._src = src;
      this._onChanged(new Core.ValueChangedEventArgs(this, "source", prev, this._src));
    }
  }

  /// The destination to render the source region into.
  Math.Region2 get destination => this._dest;
  void set destination(Math.Region2 dest) {
    dest = dest ?? new Math.Region2(0.0, 0.0, 1.0, 1.0);
    if (this._dest != dest) {
      Math.Region2 prev = this._dest;
      this._dest = dest;
      this._onChanged(new Core.ValueChangedEventArgs(this, "destination", prev, this._dest));
    }
  }

  /// Indicates if the image should be flipped or not.
  bool get flip => this._flip;
  void set flip(bool flip) {
    if (this._flip != flip) {
      this._flip = flip;
      this._onChanged(new Core.ValueChangedEventArgs(this, "flip", !flip, this._flip));
    }
  }
}

//===============================================

/// A technique for a cover pass which draws several textures.
class TextureLayout extends Technique {
  Math.Color4 _backClr;
  Shaders.TextureLayout _shader;
  Core.Collection<TextureLayoutEntry> _entries;
  int _lastCount;
  Core.Event _changed;

  /// Creates a new sky box technique with the given initial values.
  TextureLayout({Math.Color4 backColor: null}) {
    this.backColor = backColor;
    this._shader   = null;
    this._entries  = new Core.Collection<TextureLayoutEntry>();
    this._entries.setHandlers(
      onAddedHndl: _onEntityAdded,
      onRemovedHndl: _onEntityRemoved);
    this._lastCount = 0;
    this._changed   = null;
  }

  /// Indicates that this technique has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Handles a change in this technique.
  void _onChanged([Core.EventArgs args = null]) {
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
  Core.Collection<TextureLayoutEntry> get entries => this._entries;

  /// The background color for the layout.
  Math.Color4 get backColor => this._backClr;
  set backColor(Math.Color4 clr) {
    clr = clr ?? new Math.Color4.transparent();
    if (this._backClr != clr) {
      Math.Color4 prev = this._backClr;
      this._backClr = clr;
      this._onChanged(new Core.ValueChangedEventArgs(this, "backColor", prev, this._backClr));
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
    return ((count + 3) ~/ 4) * 4;
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
    if (newCount != this._lastCount) {
      this._lastCount = newCount;
      this._shader = null;
    }

    if (this._shader == null)
      this._shader = new Shaders.TextureLayout.cached(newCount, state);

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos)
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
