part of ThreeDart.Techniques;

/// The normal rendering technique.
class Normal extends Technique {
  Shaders.Normal _shader;
  Math.Matrix3 _txt2DMat;
  Math.Matrix4 _txtCubeMat;
  Shaders.ColorSourceType _bumpyType;
  Textures.Texture2D _bump2D;
  Textures.TextureCube _bumpCube;
  Events.Event _changed;

  /// Creates a new material/light technique.
  Normal() {
    this._shader = null;
    this._txt2DMat = new Math.Matrix3.identity();
    this._txtCubeMat = new Math.Matrix4.identity();
    this.clearBump();
    this._changed = null;
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

  void _setBump2D(Textures.Texture2D bump2D) {
    if (this._bump2D != bump2D) {
      if (this._bump2D != null) this._bump2D.loadFinished.remove(this._onChanged);
      Textures.Texture2D prev = this._bump2D;
      this._bump2D = bump2D;
      if (this._bump2D != null) this._bump2D.loadFinished.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "bumpyTexture2D", prev, this._bump2D));
    }
  }

  void _setBumpCube(Textures.TextureCube bumpCube) {
    if (this._bumpCube != bumpCube) {
      if (this._bumpCube != null) this._bumpCube.loadFinished.remove(this._onChanged);
      Textures.TextureCube prev = this._bumpCube;
      this._bumpCube = bumpCube;
      if (this._bumpCube != null) this._bumpCube.loadFinished.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "bumpyTextureCube", prev, this._bumpCube));
    }
  }

  /// The 2D texture modification matrix.
  Math.Matrix3 get texture2DMatrix => this._txt2DMat;
  void set texture2DMatrix(Math.Matrix3 mat) {
    mat = mat ?? new Math.Matrix3.identity();
    if (this._txt2DMat != mat) {
      Math.Matrix3 prev = this._txt2DMat;
      this._txt2DMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, "texture2DMatrix", prev, this._txt2DMat));
    }
  }

  /// The cube texture modification matrix.
  Math.Matrix4 get textureCubeMatrix => this._txtCubeMat;
  void set textureCubeMatrix(Math.Matrix4 mat) {
    mat = mat ?? new Math.Matrix4.identity();
    if (this._txtCubeMat != mat) {
      Math.Matrix4 prev = this._txtCubeMat;
      this._txtCubeMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, "textureCubeMatrix", prev, this._txtCubeMat));
    }
  }

  /// Removes any normal distortion from the material.
  void clearBump() {
    if (this._bumpyType != Shaders.ColorSourceType.None) {
      this._shader = null;
      this._bumpyType = Shaders.ColorSourceType.None;
    }
    this._setBump2D(null);
    this._setBumpCube(null);
    this._onChanged();
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
      this._setBumpCube(null);
      this._shader = null;
    }
    this._setBump2D(txt);
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
      this._setBump2D(null);
      this._shader = null;
    }
    this._setBumpCube(txt);
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
      obj.shapeBuilder.calculateNormals();
      if (cfg.binm) obj.shapeBuilder.calculateBinormals();
      if (cfg.txtCube) obj.shapeBuilder.calculateCubeTextures();

      Data.BufferStore cache = obj.shapeBuilder.build(new Data.WebGLBufferBuilder(state.gl), vertexType);
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
