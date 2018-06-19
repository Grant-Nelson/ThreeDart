part of ThreeDart.Techniques;

/// A technique for a cover pass with a Gaussian blurred image based off depth.
class GaussianBlur extends Technique {
  Shaders.GaussianBlur _shader;
  Math.Matrix3 _txtMat;
  Textures.Texture2D _colorTxt;
  Textures.Texture2D _depthTxt;
  double _highOffset;
  double _lowOffset;
  double _depthLimit;
  Core.Event _changed;

  /// Creates a new cover Gaussian blur technique with the given initial values.
  GaussianBlur({Textures.Texture2D colorTxt: null,
                Textures.Texture2D depthTxt: null,
                Math.Matrix3       txtMat:   null,
                double highOffset: 0.0,
                double lowOffset:  4.0,
                double depthLimit: 0.001}) {
    this._shader     = null;
    this._txtMat     = null;
    this._colorTxt   = null;
    this._depthTxt   = null;
    this._highOffset = 0.0;
    this._lowOffset  = 4.0;
    this._depthLimit = 0.001;
    this._changed    = null;

    this.textureMatrix = txtMat;
    this.colorTexture  = colorTxt;
    this.depthTexture  = depthTxt;
    this.highOffset    = highOffset;
    this.lowOffset     = lowOffset;
    this.depthLimit    = depthLimit;
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

  /// The offset value for the depth at it's highest value.
  double get highOffset => this._highOffset;
  void set highOffset(double value) {
    value = value ?? 0.0;
    if (!Math.Comparer.equals(this._highOffset, value)) {
      double prev = this._highOffset;
      this._highOffset = value;
      this._onChanged(new Core.ValueChangedEventArgs(this, "highOffset", prev, this._highOffset));
    }
  }

  /// The offset value for the depth at it's lowest value.
  double get lowOffset => this._lowOffset;
  void set lowOffset(double value) {
    value = value ?? 4.0;
    if (!Math.Comparer.equals(this._lowOffset, value)) {
      double prev = this._lowOffset;
      this._lowOffset = value;
      this._onChanged(new Core.ValueChangedEventArgs(this, "lowOffset", prev, this._lowOffset));
    }
  }

  /// The limit for higher depth to be excluded from the blur.
  double get depthLimit => this._depthLimit;
  void set depthLimit(double value) {
    value = value ?? 0.001;
    if (!Math.Comparer.equals(this._depthLimit, value)) {
      double prev = this._depthLimit;
      this._depthLimit = value;
      this._onChanged(new Core.ValueChangedEventArgs(this, "depthLimit", prev, this._depthLimit));
    }
  }

  /// The color texture.
  Textures.Texture2D get colorTexture => this._colorTxt;
  void set colorTexture(Textures.Texture2D txt) {
    if (this._colorTxt != txt) {
      if (this._colorTxt != null) this._colorTxt.loadFinished.remove(this._onChanged);
      Textures.Texture2D prev = this._colorTxt;
      this._colorTxt = txt;
      if (this._colorTxt != null) this._colorTxt.loadFinished.add(this._onChanged);
      this._onChanged(new Core.ValueChangedEventArgs(this, "colorTexture", prev, this._colorTxt));
    }
  }

  /// The depth texture.
  Textures.Texture2D get depthTexture => this._depthTxt;
  void set depthTexture(Textures.Texture2D txt) {
    if (this._depthTxt != txt) {
      if (this._depthTxt != null) this._depthTxt.loadFinished.remove(this._onChanged);
      Textures.Texture2D prev = this._depthTxt;
      this._depthTxt = txt;
      if (this._depthTxt != null) this._depthTxt.loadFinished.add(this._onChanged);
      this._onChanged(new Core.ValueChangedEventArgs(this, "depthTexture", prev, this._depthTxt));
    }
  }

  /// The texture modification matrix.
  Math.Matrix3 get textureMatrix => this._txtMat;
  void set textureMatrix(Math.Matrix3 mat) {
    mat = mat ?? new Math.Matrix3.identity();
    if (this._txtMat != mat) {
      Math.Matrix3 prev = this._txtMat;
      this._txtMat = mat;
      this._onChanged(new Core.ValueChangedEventArgs(this, "textureMatrix", prev, this._depthTxt));
    }
  }

  /// Updates this technique for the given state.
  void update(Core.RenderState state) {
    // Do Nothing
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
    if (this._shader == null)
      this._shader = new Shaders.GaussianBlur.cached(state);

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shapeBuilder.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos|Data.VertexType.Txt2D)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc
        ..findAttribute(Data.VertexType.Txt2D).attr = this._shader.txtAttr.loc;
    }

    List<Textures.Texture> textures = new List<Textures.Texture>();
    this._addToTextureList(textures, this._colorTxt);
    this._addToTextureList(textures, this._depthTxt);
    for (int i = 0; i < textures.length; i++) {
      textures[i].bind(state);
    }

    this._shader
      ..bind(state)
      ..colorTexture = this._colorTxt
      ..depthTexture = this._depthTxt
      ..textureMatrix = this._txtMat
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..width = state.width.toDouble()
      ..height = state.height.toDouble()
      ..highOffset = this._highOffset
      ..lowOffset = this._lowOffset
      ..depthLimit = this._depthLimit;

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
