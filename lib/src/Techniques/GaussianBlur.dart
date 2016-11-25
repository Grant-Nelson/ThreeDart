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
    this._shader       = null;
    this.colorTexture  = colorTxt;
    this.depthTexture  = depthTxt;
    this.textureMatrix = txtMat;
    this.highOffset    = highOffset;
    this.lowOffset     = lowOffset;
    this.depthLimit    = depthLimit;
    this._changed      = null;
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
    if (!Math.Comparer.equals(this._highOffset, value)) {
      this._highOffset = value;
      this._onChanged();
    }
  }

  /// The offset value for the depth at it's lowest value.
  double get lowOffset => this._lowOffset;
  void set lowOffset(double value) {
    if (!Math.Comparer.equals(this._lowOffset, value)) {
      this._lowOffset = value;
      this._onChanged();
    }
  }

  /// The limit for higher depth to be excluded from the blur.
  double get depthLimit => this._depthLimit;
  void set depthLimit(double value) {
    if (!Math.Comparer.equals(this._depthLimit, value)) {
      this._depthLimit = value;
      this._onChanged();
    }
  }

  /// The color texture.
  Textures.Texture2D get colorTexture => this._colorTxt;
  void set colorTexture(Textures.Texture2D txt) {
    if (this._colorTxt != txt) {
      this._colorTxt = txt;
      this._onChanged();
    }
  }

  /// The depth texture.
  Textures.Texture2D get depthTexture => this._depthTxt;
  void set depthTexture(Textures.Texture2D txt) {
    if (this._depthTxt != txt) {
      this._depthTxt = txt;
      this._onChanged();
    }
  }

  /// The texture modification matrix.
  Math.Matrix3 get textureMatrix => this._txtMat;
  void set textureMatrix(Math.Matrix3 mat) {
    mat = mat ?? new Math.Matrix3.identity();
    if (this._txtMat != mat) {
      this._txtMat = mat;
      this._onChanged();
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
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos|Data.VertexType.Txt2D)
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
