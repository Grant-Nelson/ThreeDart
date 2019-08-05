part of ThreeDart.test.test044;

/// The deep texture test rendering technique.
class DeepTextureTechnique extends Techniques.Technique {
  DeepTextureShader _shader;
  Textures.Texture2D _colorTxt;
  Textures.Texture2D _depthTxt;
  Events.Event _changed;

  /// Creates a new bumpy test techinque technique.
  DeepTextureTechnique() {
    this._shader = null;
    this._colorTxt = null;
    this._depthTxt = null;
    this._changed = null;
  }

  /// Emits an event whem the technique being changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles the technique being changed.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The color texture to render with.
  Textures.Texture2D get colorTexture => this._colorTxt;
  void set colorTexture(Textures.Texture2D txt) {
    if (this._colorTxt != txt) {
      if (this._colorTxt != null) this._colorTxt.changed.remove(this._onChanged);
      Textures.Texture2D prev = this._colorTxt;
      this._colorTxt = txt;
      if (this._colorTxt != null) this._colorTxt.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "colorTexture", prev, this._colorTxt));
    }
  }

  /// The depth texture to render with.
  Textures.Texture2D get depthTexture => this._depthTxt;
  void set depthTexture(Textures.Texture2D txt) {
    if (this._depthTxt != txt) {
      if (this._depthTxt != null) this._depthTxt.changed.remove(this._onChanged);
      Textures.Texture2D prev = this._depthTxt;
      this._depthTxt = txt;
      if (this._depthTxt != null) this._depthTxt.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "depthTexture", prev, this._depthTxt));
    }
  }

  /// Gets the vertex source code used for the shader used by this techinique.
  String get vertexSourceCode => this._shader?.vertexSourceCode;

  /// Gets the fragment source code used for the shader used by this techinique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode;

  /// Updates this technique for the given state.
  void update(ThreeDart.RenderState state) {
    // Do Nothing
  }

  /// Renderes the given [obj] with the current texture for the given [state].
  void render(ThreeDart.RenderState state, ThreeDart.Entity obj) {
    this._shader ??= new DeepTextureShader.cached(state);

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|
        Data.VertexType.Txt2D|Data.VertexType.Weight)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = this._shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = this._shader.binmAttr.loc
        ..findAttribute(Data.VertexType.Txt2D).attr = this._shader.txt2DAttr.loc;
    }

    if ((this._colorTxt != null) && (this._depthTxt != null)) {
      this._colorTxt.index = 0;
      this._depthTxt.index = 1;

      this._shader
        ..bind(state)
        ..colorTexture = this._colorTxt
        ..depthTexture = this._depthTxt
        ..viewMatrix              = state.view.matrix
        ..viewObjectMatrix        = state.viewObjectMatrix
        ..projectViewObjectMatrix = state.projectionViewObjectMatrix;

      this._colorTxt.bind(state);
      this._depthTxt.bind(state);
      if (obj.cache is Data.BufferStore) {
        (obj.cache as Data.BufferStore)
          ..bind(state)
          ..render(state)
          ..unbind(state);
      } else obj.clearCache();

      this._shader.unbind(state);
      this._colorTxt.unbind(state);
      this._depthTxt.unbind(state);
    }
  }
}
