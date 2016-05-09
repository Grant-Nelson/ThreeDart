part of ThreeDart.Techniques;

/// A technique for a cover pass with a blurred image based off depth.
class Blur extends Technique {
  Shaders.Blur _shader;
  Math.Matrix3 _txtMat;
  Textures.Texture2D _colorTxt;
  Textures.Texture2D _depthTxt;
  double _highOffset;
  double _lowOffset;
  double _depthLimit;

  /// Creates a new cover blur technique with the given initial values.
  Blur({Textures.Texture2D colorTxt: null,
        Textures.Texture2D depthTxt: null,
        Math.Matrix3 txtMat: null,
        double highOffset: 0.0,
        double lowOffset: 4.0,
        double depthLimit: 0.001}) {
    this._shader = null;
    this.colorTexture = colorTxt;
    this.depthTexture = depthTxt;
    this.textureMatrix = txtMat;
    this.highOffset = highOffset;
    this.lowOffset = lowOffset;
    this.depthLimit = depthLimit;
  }

  /// The offset value for the depth at it's highest value.
  double get highOffset => this._highOffset;
  set highOffset(double value) => this._highOffset = value;

  /// The offset value for the depth at it's lowest value.
  double get lowOffset => this._lowOffset;
  set lowOffset(double value) => this._lowOffset = value;

  /// The limit for higher depth to be excluded from the blur.
  double get depthLimit => this._depthLimit;
  set depthLimit(double value) => this._depthLimit = value;

  /// The color texture.
  Textures.Texture2D get colorTexture => this._colorTxt;
  set colorTexture(Textures.Texture2D txt) => this._colorTxt = txt;

  /// The depth texture.
  Textures.Texture2D get depthTexture => this._depthTxt;
  set depthTexture(Textures.Texture2D txt) => this._depthTxt = txt;

  /// The texture modification matrix.
  Math.Matrix3 get textureMatrix => this._txtMat;
  set textureMatrix(Math.Matrix3 mat) =>
    this._txtMat = (mat == null)? new Math.Matrix3.identity(): mat;

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
      this._shader = new Shaders.Blur.cached(state);

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
