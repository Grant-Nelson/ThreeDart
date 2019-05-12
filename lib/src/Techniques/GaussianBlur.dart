part of ThreeDart.Techniques;

/// A technique for a cover pass with a Gaussian blurred image based off of a file.
class GaussianBlur extends Technique {
  Shaders.GaussianBlur _shader;
  Math.Matrix3 _txtMat;
  Textures.Texture2D _colorTxt;
  Textures.Texture2D _blurTxt;
  double _blurValue;
  double _highBlur;
  double _lowBlur;
  Events.Event _changed;

  /// Creates a new cover Gaussian blur technique with the given initial values.
  GaussianBlur({Textures.Texture2D colorTxt: null,
                Textures.Texture2D blurTxt:  null,
                Math.Matrix3       txtMat:   null,
                double blurValue:  0.0,
                double highBlur:   0.0,
                double lowBlur:    4.0}) {
    this._shader     = null;
    this._txtMat     = null;
    this._colorTxt   = null;
    this._blurTxt    = null;
    this._blurValue  = 0.0;
    this._highBlur   = 0.0;
    this._lowBlur    = 4.0;
    this._changed    = null;

    this.textureMatrix = txtMat;
    this.colorTexture  = colorTxt;
    this.blurTexture   = blurTxt;
    this.blurValue     = blurValue;
    this.highBlur      = highBlur;
    this.lowBlur       = lowBlur;
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
  
  /// Resets the shader when a component has changed.
  void _resetShader([Events.EventArgs args = null]) {
    this._shader = null;
    this._onChanged(args);
  }

  /// The offset value for the blur at it's highest value.
  /// This only has effect when using a blur texture.
  double get highBlur => this._highBlur;
  void set highBlur(double value) {
    value ??= 0.0;
    if (!Math.Comparer.equals(this._highBlur, value)) {
      double prev = this._highBlur;
      this._highBlur = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, "highBlur", prev, this._highBlur));
    }
  }

  /// The offset value for the blur at it's lowest value.
  /// This only has effect when using a blur texture.
  double get lowBlur => this._lowBlur;
  void set lowBlur(double value) {
    value ??= 4.0;
    if (!Math.Comparer.equals(this._lowBlur, value)) {
      double prev = this._lowBlur;
      this._lowBlur = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, "lowBlur", prev, this._lowBlur));
    }
  }

  /// The blur value, this will overrided by blur texture.
  double get blurValue => this._blurValue;
  void set blurValue(double value) {
    value ??= 0.0;
    if (this._blurValue != value) {
      double prev = this._blurValue;
      this._blurValue = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, "blurValue", prev, this._blurValue));
    }
  }

  /// The color texture.
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

  /// The blur texture, this will override the blur value.
  Textures.Texture2D get blurTexture => this._blurTxt;
  void set blurTexture(Textures.Texture2D txt) {
    if (this._blurTxt != txt) {
      if (this._blurTxt != null) this._blurTxt.changed.remove(this._onChanged);
      Textures.Texture2D prev = this._blurTxt;
      this._blurTxt = txt;
      if (this._blurTxt != null) this._blurTxt.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "blurTexture", prev, this._blurTxt));
      if (((this._blurTxt == null) && (prev != null)) ||
          ((this._blurTxt != null) && (prev == null)))
        this._resetShader();
    }
  }

  /// The texture modification matrix.
  Math.Matrix3 get textureMatrix => this._txtMat;
  void set textureMatrix(Math.Matrix3 mat) {
    mat ??= Math.Matrix3.identity;
    if (this._txtMat != mat) {
      Math.Matrix3 prev = this._txtMat;
      this._txtMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, "textureMatrix", prev, this._txtMat));
    }
  }

  /// Gets the vertex source code used for the shader used by this techinique.
  String get vertexSourceCode => this._shader?.vertexSourceCode;

  /// Gets the fragment source code used for the shader used by this techinique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode;

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
    if (this._shader == null) {
      bool hasBlurTxt = blurTexture != null;
      Shaders.GaussianBlurConfig cfg = new Shaders.GaussianBlurConfig(hasBlurTxt);
      this._shader = new Shaders.GaussianBlur.cached(cfg, state);
      obj.clearCache();
    }

    Shaders.GaussianBlurConfig cfg = this._shader.configuration;
    if (obj.cache is! Data.BufferStore) obj.clearCache();
    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shapeBuilder.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos|Data.VertexType.Txt2D)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc
        ..findAttribute(Data.VertexType.Txt2D).attr = this._shader.txtAttr.loc;
    }

    List<Textures.Texture> textures = new List<Textures.Texture>();
    this._addToTextureList(textures, this._colorTxt);
    if (cfg.blurTxt) this._addToTextureList(textures, this._blurTxt);
    for (int i = 0; i < textures.length; i++) {
      textures[i].bind(state);
    }

    this._shader
      ..bind(state)
      ..colorTexture  = this._colorTxt
      ..textureMatrix = this._txtMat
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix;

    if (cfg.blurTxt) {
      this._shader
        ..blurTexture = this._blurTxt
        ..width       = state.width.toDouble()
        ..height      = state.height.toDouble()
        ..highBlur    = this._highBlur
        ..lowBlur     = this._lowBlur;
    } else {
      this._shader
        ..blurValue = this._blurValue;
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
