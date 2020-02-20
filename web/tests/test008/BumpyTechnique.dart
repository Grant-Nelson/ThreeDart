part of ThreeDart.test.test008;

/// The bumpy test rendering technique.
class BumpyTechnique extends Techniques.Technique {
  BumpyShader _shader;
  Textures.Texture2D _txt;
  double _offsetScalar;
  Events.Event _changed;

  /// Creates a new bumpy test technique technique.
  BumpyTechnique() {
    this._shader = null;
    this._txt = null;
    this._offsetScalar = 1.0;
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

  /// The bumpy texture to render with.
  Textures.Texture2D get bumpyTexture => this._txt;
  void set bumpyTexture(Textures.Texture2D txt) {
    if (this._txt != txt) {
      if (this._txt != null) this._txt.changed.remove(this._onChanged);
      Textures.Texture2D prev = this._txt;
      this._txt = txt;
      if (this._txt != null) this._txt.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "bumpyTexture", prev, this._txt));
    }
  }

  /// The offset scalar for the size of the normal vectors.
  double get offsetScalar => this._offsetScalar;
  void set offsetScalar(double scalar) {
    if (!Math.Comparer.equals(this._offsetScalar, scalar)) {
      double prev = this._offsetScalar;
      this._offsetScalar = scalar;
      this._onChanged(new Events.ValueChangedEventArgs(this, "offsetScalar", prev, this._offsetScalar));
    }
  }

  /// Gets the vertex source code used for the shader used by this technique.
  String get vertexSourceCode => this._shader?.vertexSourceCode;

  /// Gets the fragment source code used for the shader used by this technique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode;

  /// Updates this technique for the given state.
  void update(ThreeDart.RenderState state) {
    // Do Nothing
  }

  /// Renders the given [obj] with the current texture for the given [state].
  void render(ThreeDart.RenderState state, ThreeDart.Entity obj) {
    this._shader ??= new BumpyShader.cached(state);

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|
        Data.VertexType.Txt2D|Data.VertexType.Weight)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = this._shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = this._shader.binmAttr.loc
        ..findAttribute(Data.VertexType.Txt2D).attr = this._shader.txtAttr.loc
        ..findAttribute(Data.VertexType.Weight).attr = this._shader.weightAttr.loc;
    }

    if (this._txt != null) {
      this._txt.index = 0;

      this._shader
        ..bind(state)
        ..bumpTexture = this._txt
        ..projectMatrix = state.projection.matrix
        ..viewMatrix = state.view.matrix
        ..objectMatrix = state.object.matrix
        ..offsetScalar = this._offsetScalar;

      this._txt.bind(state);
      if (obj.cache is Data.BufferStore) {
        (obj.cache as Data.BufferStore)
          ..bind(state)
          ..render(state)
          ..unbind(state);
      } else obj.clearCache();

      this._shader.unbind(state);
      this._txt.unbind(state);
    }
  }
}
