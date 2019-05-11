part of ThreeDart.Techniques;

/// A technique for a cover pass with a Gaussian blurred image based off of a file.
class GaussianBlur extends Technique {
  Shaders.GaussianBlur _shader;
  Math.Matrix3 _txtMat;
  Textures.Texture2D _colorTxt;
  Textures.Texture2D _blurTxt;
  double _blurValue;
  double _highOffset;
  double _lowOffset;
  double _minBlur;
  double _maxBlur;
  double _blurLimit;
  Events.Event _changed;

  /// Creates a new cover Gaussian blur technique with the given initial values.
  GaussianBlur({Textures.Texture2D colorTxt: null,
                Textures.Texture2D blurTxt:  null,
                Math.Matrix3       txtMat:   null,
                double blurValue:  0.0,
                double highOffset: 0.0,
                double lowOffset:  4.0,
                double minBlur:    0.0,
                double maxBlur:    1.0,
                double blurLimit:  0.001}) {
    this._shader     = null;
    this._txtMat     = null;
    this._colorTxt   = null;
    this._blurTxt    = null;
    this._blurValue  = 0.0;
    this._highOffset = 0.0;
    this._lowOffset  = 4.0;
    this._minBlur    = 0.0;
    this._maxBlur    = 1.0;
    this._blurLimit  = 0.001;
    this._changed    = null;

    this.textureMatrix = txtMat;
    this.colorTexture  = colorTxt;
    this.blurTexture   = blurTxt;
    this.blurValue     = blurValue;
    this.highOffset    = highOffset;
    this.lowOffset     = lowOffset;
    this.minimumBlur   = minBlur;
    this.maximumBlur   = maxBlur;
    this.blurLimit     = blurLimit;
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

  /// The offset value for the blur at it's highest value.
  /// This only has effect when using a blur texture.
  double get highOffset => this._highOffset;
  void set highOffset(double value) {
    value ??= 0.0;
    if (!Math.Comparer.equals(this._highOffset, value)) {
      double prev = this._highOffset;
      this._highOffset = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, "highOffset", prev, this._highOffset));
    }
  }

  /// The offset value for the blur at it's lowest value.
  /// This only has effect when using a blur texture.
  double get lowOffset => this._lowOffset;
  void set lowOffset(double value) {
    value ??= 4.0;
    if (!Math.Comparer.equals(this._lowOffset, value)) {
      double prev = this._lowOffset;
      this._lowOffset = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, "lowOffset", prev, this._lowOffset));
    }
  }

  /// The minimum blur value which has the lowest offset.
  /// This only has effect when using a blur texture.
  double get minimumBlur => this._minBlur;
  void set minimumBlur(double value) {
    value ??= 0.0;
    if (!Math.Comparer.equals(this._minBlur, value)) {
      double prev = this._minBlur;
      this._minBlur = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, "minimumBlur", prev, this._minBlur));
    }
  }

  /// The maximum blur value which has the highest offset.
  /// This only has effect when using a blur texture.
  double get maximumBlur => this._maxBlur;
  void set maximumBlur(double value) {
    value ??= 1.0;
    if (!Math.Comparer.equals(this._maxBlur, value)) {
      double prev = this._maxBlur;
      this._maxBlur = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, "maximumBlur", prev, this._maxBlur));
    }
  }

  /// The limit for higher blur to be excluded from the blur.
  /// This only has effect when using a blur texture.
  double get blurLimit => this._blurLimit;
  void set blurLimit(double value) {
    value ??= 0.001;
    if (!Math.Comparer.equals(this._blurLimit, value)) {
      double prev = this._blurLimit;
      this._blurLimit = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, "blurLimit", prev, this._blurLimit));
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
      bool hasBlurTxt = blurTexture == null;
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
      ..colorTexture = this._colorTxt
      ..textureMatrix = this._txtMat
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix;

    if (cfg.blurTxt) {
      this._shader
        ..blurTexture = this._blurTxt
        ..width = state.width.toDouble()
        ..height = state.height.toDouble()
        ..highOffset = this._highOffset
        ..lowOffset = this._lowOffset
        ..minBlur = this._minBlur
        ..blurWidth = this._maxBlur-this._minBlur
        ..blurLimit = this._blurLimit;
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
