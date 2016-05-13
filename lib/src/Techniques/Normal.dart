part of ThreeDart.Techniques;

/// The normal rendering technique.
class Normal extends Technique {
  Shaders.Normal _shader;

  Math.Matrix3 _txt2DMat;
  Math.Matrix4 _txtCubeMat;

  Shaders.ColorSourceType _bumpyType;
  Textures.Texture2D _bump2D;
  Textures.TextureCube _bumpCube;

  /// Creates a new material/light technique.
  Normal() {
    this._shader = null;
    this._txt2DMat = new Math.Matrix3.identity();
    this._txtCubeMat = new Math.Matrix4.identity();
    this.clearBump();
  }

  /// The 2D texture modification matrix.
  Math.Matrix3 get texture2DMatrix => this._txt2DMat;
  set texture2DMatrix(Math.Matrix3 mat) =>
    this._txt2DMat = (mat == null)? new Math.Matrix3.identity(): mat;

  /// The cube texture modification matrix.
  Math.Matrix4 get textureCubeMatrix => this._txtCubeMat;
  set textureCubeMatrix(Math.Matrix4 mat) =>
    this._txtCubeMat = (mat == null)? new Math.Matrix4.identity(): mat;

  /// Removes any normal distortion from the material.
  void clearBump() {
    if (this._bumpyType != Shaders.ColorSourceType.None) {
      this._shader = null;
      this._bumpyType = Shaders.ColorSourceType.None;
    }
    this._bump2D = null;
    this._bumpCube = null;
  }

  /// The normal distortion 2D texture for the material.
  Textures.Texture2D get bumpyTexture2D => this._bump2D;
  set bumpyTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._bumpyType == Shaders.ColorSourceType.Texture2D) {
        this._shader = null;
        this._bumpyType = Shaders.ColorSourceType.None;
      }
    } else if (this._bumpyType != Shaders.ColorSourceType.Texture2D) {
      this._bumpyType = Shaders.ColorSourceType.Texture2D;
      this._bumpCube = null;
      this._shader = null;
    }
    this._bump2D = txt;
  }

  /// The normal distortion cube texture for the material.
  Textures.TextureCube get bumpyTextureCube => this._bumpCube;
  set bumpyTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._bumpyType == Shaders.ColorSourceType.TextureCube) {
        this._shader = null;
        this._bumpyType = Shaders.ColorSourceType.None;
      }
    } else if (this._bumpyType != Shaders.ColorSourceType.TextureCube) {
      this._bumpyType = Shaders.ColorSourceType.TextureCube;
      this._bump2D = null;
      this._shader = null;
    }
    this._bumpCube = txt;
  }

  /// Creates the configuration for this shader.
  Shaders.NormalConfig _config() {
    return new Shaders.NormalConfig(this._bumpyType);
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

  /// Updates the light and material technique.
  void update(Core.RenderState state) {
    // Do Nothing
  }

  /// Renderes the given [obj] with the current light and material for the given [state].
  void render(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null) {
      this._shader = new Shaders.Normal.cached(this._config(), state);
      obj.clearCache();
    }
    Shaders.NormalConfig cfg = this._shader.configuration;
    Data.VertexType vertexType = cfg.vertexType;
    if (obj.cache is! Data.BufferStore) obj.clearCache();
    if (obj.cacheNeedsUpdate || (obj.cache as Data.BufferStore).vertexType != vertexType) {
      obj.shape.calculateNormals();
      if (cfg.binm) obj.shape.calculateBinormals();
      if (cfg.txtCube) obj.shape.calculateCubeTextures();

      Data.BufferStore cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl), vertexType);
      cache.findAttribute(Data.VertexType.Pos).attr  = this._shader.posAttr.loc;
      cache.findAttribute(Data.VertexType.Norm).attr = this._shader.normAttr.loc;
      if (cfg.binm)    cache.findAttribute(Data.VertexType.Binm).attr    = this._shader.binmAttr.loc;
      if (cfg.txt2D)   cache.findAttribute(Data.VertexType.Txt2D).attr   = this._shader.txt2DAttr.loc;
      if (cfg.txtCube) cache.findAttribute(Data.VertexType.TxtCube).attr = this._shader.txtCubeAttr.loc;
      obj.cache = cache;
    }

    List<Textures.Texture> textures = new List<Textures.Texture>();
    this._shader.bind(state);

    this._shader.viewObjectMatrix = state.viewObjectMatrix;
    this._shader.projectViewObjectMatrix = state.projectionViewObjectMatrix;
    if (cfg.txt2D)   this._shader.texture2DMatrix   = this._txt2DMat;
    if (cfg.txtCube) this._shader.textureCubeMatrix = this._txtCubeMat;

    switch (cfg.bumpy) {
      case Shaders.ColorSourceType.None: break;
      case Shaders.ColorSourceType.Solid: break;
      case Shaders.ColorSourceType.Texture2D:
        this._addToTextureList(textures, this._bump2D);
        this._shader.bumpTexture2D = this._bump2D;
        break;
      case Shaders.ColorSourceType.TextureCube:
        this._addToTextureList(textures, this._bumpCube);
        this._shader.bumpTextureCube = this._bumpCube;
        break;
    }

    for (int i = 0; i < textures.length; i++) {
      textures[i].bind(state);
    }

    obj.cache as Data.BufferStore
        ..bind(state)
        ..render(state)
        ..unbind(state);

    for (int i = 0; i < textures.length; i++) {
      textures[i].unbind(state);
    }
    this._shader.unbind(state);
  }

  /// The string for the technique
  String toString() {
    if (this._shader != null) return this._shader.name;
    else return this._config().name;
  }
}
