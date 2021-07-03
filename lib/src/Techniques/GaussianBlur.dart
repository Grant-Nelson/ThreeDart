part of ThreeDart.Techniques;

/// A technique for a cover pass with a Gaussian blurred image based off of a file.
class GaussianBlur extends Technique {
  Shaders.GaussianBlur? _shader = null;
  Math.Matrix3 _txtMat = Math.Matrix3.identity;
  Math.Vector4 _blurAdj = Math.Vector4.zero;
  Math.Vector2 _blurDir = Math.Vector2.zero;
  Textures.Texture2D? _colorTxt = null;
  Textures.Texture2D? _blurTxt  = null;
  double _blurValue = 0.0;
  Events.Event? _changed = null;

  /// Creates a new cover Gaussian blur technique with the given initial values.
  GaussianBlur({Textures.Texture2D? colorTxt: null,
                Textures.Texture2D? blurTxt:  null,
                Math.Matrix3?       txtMat:   null,
                Math.Vector4?       blurAdj:  null,
                Math.Vector2?       blurDir:  null,
                double blurValue:  0.0}) {
    this.textureMatrix = txtMat ?? Math.Matrix3.identity;
    this.blurAdjust    = blurAdj ?? Math.Vector4.zero;
    this.blurDirection = blurDir ?? Math.Vector2.zero;
    this.colorTexture  = colorTxt;
    this.blurTexture   = blurTxt;
    this.blurValue     = blurValue;
  }

  /// Indicates that this technique has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles a change in this technique.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);
  
  /// Resets the shader when a component has changed.
  void _resetShader([Events.EventArgs? args = null]) {
    this._shader = null;
    this._onChanged(args);
  }

  /// The blur value, this will be overridden by blur texture.
  double get blurValue => this._blurValue;
  set blurValue(double value) {
    if (!Math.Comparer.equals(this._blurValue, value)) {
      double prev = this._blurValue;
      this._blurValue = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'blurValue', prev, this._blurValue));
    }
  }

  /// The color texture.
  Textures.Texture2D? get colorTexture => this._colorTxt;
  set colorTexture(Textures.Texture2D? txt) {
    if (this._colorTxt != txt) {
      this._colorTxt?.changed.remove(this._onChanged);
      Textures.Texture2D? prev = this._colorTxt;
      this._colorTxt = txt;
      this._colorTxt?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'colorTexture', prev, this._colorTxt));
    }
  }

  /// The blur texture, this will override the blur value.
  Textures.Texture2D? get blurTexture => this._blurTxt;
  set blurTexture(Textures.Texture2D? txt) {
    if (this._blurTxt != txt) {
      this._blurTxt?.changed.remove(this._onChanged);
      Textures.Texture2D? prev = this._blurTxt;
      this._blurTxt = txt;
      this._blurTxt?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'blurTexture', prev, this._blurTxt));
      if (((this._blurTxt == null) && (prev != null)) ||
          ((this._blurTxt != null) && (prev == null)))
        this._resetShader();
    }
  }

  /// The texture modification matrix.
  Math.Matrix3 get textureMatrix => this._txtMat;
  set textureMatrix(Math.Matrix3 mat) {
    if (this._txtMat != mat) {
      Math.Matrix3 prev = this._txtMat;
      this._txtMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'textureMatrix', prev, this._txtMat));
    }
  }

  /// The blur value modification vector.
  /// This is the vector to apply to the color from the blur texture
  /// to get the blur value from the blur texture.
  Math.Vector4 get blurAdjust => this._blurAdj;
  set blurAdjust(Math.Vector4 vec) {
    if (this._blurAdj != vec) {
      Math.Vector4 prev = this._blurAdj;
      this._blurAdj = vec;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'blurAdjust', prev, this._blurAdj));
    }
  }

  /// The direction to apply the direction, by default it is horizontal.
  Math.Vector2 get blurDirection => this._blurDir;
  set blurDirection(Math.Vector2 vec) {
    if (this._blurDir != vec) {
      Math.Vector2 prev = this._blurDir;
      this._blurDir = vec;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'blurDirection', prev, this._blurDir));
    }
  }

  /// Gets the vertex source code used for the shader used by this technique.
  String get vertexSourceCode => this._shader?.vertexSourceCode ?? '';

  /// Gets the fragment source code used for the shader used by this technique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode ?? '';

  /// Updates this technique for the given state.
  void update(Core.RenderState state) {
    // Do Nothing
  }

  /// Checks if the texture is in the list and if not, sets it's index and adds it to the list.
  void _addToTextureList(List<Textures.Texture> textures, Textures.Texture? txt) {
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

    Shaders.GaussianBlurConfig? cfg = this._shader?.configuration;
    if (cfg == null) return;
    if (obj.cache is! Data.BufferStore) obj.clearCache();
    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shapeBuilder?.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos|Data.VertexType.Txt2D)
        ?..findAttribute(Data.VertexType.Pos)?.attr = this._shader?.posAttr?.loc ?? 0
        ..findAttribute(Data.VertexType.Txt2D)?.attr = this._shader?.txtAttr?.loc ?? 1;
    }

    List<Textures.Texture> textures = [];
    this._addToTextureList(textures, this._colorTxt);
    if (cfg.blurTxt) this._addToTextureList(textures, this._blurTxt);
    if (textures.length <= 0) return;

    for (int i = 0; i < textures.length; i++) {
      textures[i].bind(state);
    }

    this._shader
      ?..bind(state)
      ..colorTexture  = this._colorTxt
      ..textureMatrix = this._txtMat
      ..blurScalar = new Math.Vector2(this._blurDir.dx/state.width.toDouble(), this._blurDir.dy/state.height.toDouble())
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix;

    if (cfg.blurTxt) {
      this._shader
        ?..blurTexture = this._blurTxt
        ..blurAdjust   = this._blurAdj;
    } else {
      this._shader
        ?..blurValue = this._blurValue;
    }

    if (obj.cache is Data.BufferStore) {
      (obj.cache as Data.BufferStore)
        ..bind(state)
        ..render(state)
        ..unbind(state);
    } else obj.clearCache();
    this._shader?.unbind(state);

    for (int i = 0; i < textures.length; i++) {
      textures[i].unbind(state);
    }
  }
}
