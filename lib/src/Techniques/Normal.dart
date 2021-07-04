part of ThreeDart.Techniques;

/// The normal rendering technique.
class Normal extends Technique {
  Shaders.Normal? _shader;
  Math.Matrix3 _txt2DMat;
  Math.Matrix4 _txtCubeMat;
  Shaders.ColorSourceType _bumpyType;
  Textures.Texture2D? _bump2D;
  Textures.TextureCube? _bumpCube;
  Events.Event? _changed;

  /// Creates a new material/light technique.
  Normal():
    this._shader = null,
    this._txt2DMat   = Math.Matrix3.identity,
    this._txtCubeMat = Math.Matrix4.identity,
    this._bumpyType  = Shaders.ColorSourceType(),
    this._bump2D   = null,
    this._bumpCube = null,
    this._changed  = null {
    this.clearBump();
  }

  /// Indicates that this technique has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles a change in this technique.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  void _setBump2D(Textures.Texture2D? bump2D) {
    if (this._bump2D != bump2D) {
      this._bump2D?.changed.remove(this._onChanged);
      Textures.Texture2D? prev = this._bump2D;
      this._bump2D = bump2D;
      this._bump2D?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'bumpyTexture2D', prev, this._bump2D));
    }
  }

  void _setBumpCube(Textures.TextureCube? bumpCube) {
    if (this._bumpCube != bumpCube) {
      this._bumpCube?.changed.remove(this._onChanged);
      Textures.TextureCube? prev = this._bumpCube;
      this._bumpCube = bumpCube;
      this._bumpCube?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'bumpyTextureCube', prev, this._bumpCube));
    }
  }

  /// The 2D texture modification matrix.
  Math.Matrix3? get texture2DMatrix => this._txt2DMat;
  set texture2DMatrix(Math.Matrix3? mat) {
    mat ??= Math.Matrix3.identity;
    if (this._txt2DMat != mat) {
      Math.Matrix3? prev = this._txt2DMat;
      this._txt2DMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'texture2DMatrix', prev, this._txt2DMat));
    }
  }

  /// The cube texture modification matrix.
  Math.Matrix4? get textureCubeMatrix => this._txtCubeMat;
  set textureCubeMatrix(Math.Matrix4? mat) {
    mat ??= Math.Matrix4.identity;
    if (this._txtCubeMat != mat) {
      Math.Matrix4? prev = this._txtCubeMat;
      this._txtCubeMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'textureCubeMatrix', prev, this._txtCubeMat));
    }
  }

  /// Gets the vertex source code used for the shader used by this technique.
  String get vertexSourceCode => this._shader?.vertexSourceCode ?? '';

  /// Gets the fragment source code used for the shader used by this technique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode ?? '';

  /// Removes any normal distortion from the material.
  void clearBump() {
    if (this._bumpyType.hasAny) {
      this._shader = null;
      this._bumpyType = Shaders.ColorSourceType();
    }
    this._setBump2D(null);
    this._setBumpCube(null);
    this._onChanged();
  }

  /// The normal distortion 2D texture for the material.
  Textures.Texture2D? get bumpyTexture2D => this._bump2D;
  set bumpyTexture2D(Textures.Texture2D? txt) {
    if (txt == null) {
      if (this._bumpyType.hasTxt2D) {
        this._shader = null;
        this._bumpyType = Shaders.ColorSourceType();
      }
    } else if (!this._bumpyType.hasTxt2D) {
      this._bumpyType = this._bumpyType.enableTxt2D(true);
      this._setBumpCube(null);
      this._shader = null;
    }
    this._setBump2D(txt);
  }

  /// The normal distortion cube texture for the material.
  Textures.TextureCube? get bumpyTextureCube => this._bumpCube;
  set bumpyTextureCube(Textures.TextureCube? txt) {
    if (txt == null) {
      if (this._bumpyType.hasTxtCube) {
        this._shader = null;
        this._bumpyType = Shaders.ColorSourceType();
      }
    } else if (!this._bumpyType.hasTxtCube) {
      this._bumpyType = this._bumpyType.enableTxtCube(true);
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
  void _addToTextureList(List<Textures.Texture> textures, Textures.Texture? txt) {
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

  /// Renders the given [obj] with the current light and material for the given [state].
  void render(Core.RenderState state, Core.Entity obj) {
    var shader = this._shader;
    if (shader == null) {
      this._shader = shader = new Shaders.Normal.cached(this._config(), state);
      obj.clearCache();
    }
    Shaders.NormalConfig cfg = shader.configuration;
    Data.VertexType vertexType = cfg.vertexType;
    if (obj.cache is! Data.BufferStore) obj.clearCache();
    if (obj.cacheNeedsUpdate || (obj.cache as Data.BufferStore).vertexType != vertexType) {
      obj.shapeBuilder?.calculateNormals();
      if (cfg.binm) obj.shapeBuilder?.calculateBinormals();
      if (cfg.txtCube) obj.shapeBuilder?.calculateCubeTextures();

      Data.BufferStore? cache = obj.shapeBuilder?.build(new Data.WebGLBufferBuilder(state.gl), vertexType);
      if (cache == null) return;
      cache.findAttribute(Data.VertexType.Pos)?.attr  = shader.posAttr?.loc ?? 0;
      cache.findAttribute(Data.VertexType.Norm)?.attr = shader.normAttr?.loc ?? 1;
      if (cfg.binm)    cache.findAttribute(Data.VertexType.Binm)?.attr    = shader.binmAttr?.loc ?? 2;
      if (cfg.txt2D)   cache.findAttribute(Data.VertexType.Txt2D)?.attr   = shader.txt2DAttr?.loc ?? 3;
      if (cfg.txtCube) cache.findAttribute(Data.VertexType.TxtCube)?.attr = shader.txtCubeAttr?.loc ?? 4;
      obj.cache = cache;
    }

    List<Textures.Texture> textures = [];
    shader.bind(state);

    shader.viewObjectMatrix = state.viewObjectMatrix;
    shader.projectViewObjectMatrix = state.projectionViewObjectMatrix;
    if (cfg.txt2D)   shader.texture2DMatrix   = this._txt2DMat;
    if (cfg.txtCube) shader.textureCubeMatrix = this._txtCubeMat;

    if (cfg.bumpy.hasTxt2D) {
      var bump2D = this._bump2D;
      if (bump2D != null) {
        this._addToTextureList(textures, bump2D);
        shader.bumpTexture2D = bump2D;
      }
    } else if (cfg.bumpy.hasTxtCube) {
      var bumpCube = this._bumpCube;
      if (bumpCube != null) {
        this._addToTextureList(textures, bumpCube);
        shader.bumpTextureCube = bumpCube;
      }
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
    shader.unbind(state);
  }

  /// The string for the technique
  String toString() =>
    this._shader?.name ?? this._config().name;
}
