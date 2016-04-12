part of ThreeDart.Techniques;

/// The material/light rendering technique.
class MaterialLight extends Technique {
  Shaders.MaterialLight _shader;
  Lights.Light _light;
  List<Textures.Texture> _textures;

  Shaders.MaterialComponentType _emissionType;
  Math.Color4 _emissionClr;
  Textures.Texture2D _emission2D;
  Textures.TextureCube _emissionCube;

  Shaders.MaterialComponentType _ambientType;
  Math.Color4 _ambientClr;
  Textures.Texture2D _ambient2D;
  Textures.TextureCube _ambientCube;

  Shaders.MaterialComponentType _diffuseType;
  Math.Color4 _diffuseClr;
  Textures.Texture2D _diffuse2D;
  Textures.TextureCube _diffuseCube;

  Shaders.MaterialComponentType _specularType;
  double _shininess;
  Math.Color4 _specularClr;
  Textures.Texture2D _specular2D;
  Textures.TextureCube _specularCube;

  Shaders.MaterialComponentType _bumpyType;
  Textures.Texture2D _bump2D;
  Textures.TextureCube _bumpCube;

  bool _hasReflection;
  bool _hasRefraction;
  Textures.TextureCube _envSampler;
  double _refraction;
  Math.Color4 _reflectClr;
  Math.Color4 _refractClr;

  /// Creates a new material/light technique.
  MaterialLight({Lights.Light light: null}) {
    this._shader = null;
    this._light = light;
    this._textures = new List<Textures.Texture>();
    this.clearEmission();
    this.clearAmbient();
    this.clearDiffuse();
    this.clearSpecular();
    this.clearBump();



    this._hasReflection = false;
    this._hasRefraction = false;
    this._envSampler = null;
    this._refraction = 0.5;
    this._reflectClr = new Math.Color4.transparent();
    this._refractClr = new Math.Color4.transparent();
  }

  /// The light to render with.
  Lights.Light get light => this._light;
  set light(Lights.Light light) {
    this._light = light;
    this._shader = null;
  }

  /// Removes any emission from the material.
  void clearEmission() {
    if (this._emissionType != Shaders.MaterialComponentType.None) {
      this._shader = null;
      this._emissionType = Shaders.MaterialComponentType.None;
      this._emissionClr = new Math.Color4.transparent();
      this._emission2D = null;
      this._emissionCube = null;
    }
  }

  /// The emission color or scalar on the emission texture for the material.
  Math.Color4 get emissionColor => this._emissionClr;
  set emissionColor(Math.Color4 clr) {
    if (clr == null) this.clearEmission();
    else if (this._emissionType == Shaders.MaterialComponentType.None) {
      this._emissionType = Shaders.MaterialComponentType.Solid;
      this._shader = null;
    }
    this._emissionClr = clr;
  }

  /// The 2D emission texture for the material.
  Textures.Texture2D get emissionTexture2D => this._emission2D;
  set emissionTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._emissionType == Shaders.MaterialComponentType.Texture2D) {
        this._shader = null;
        this._emissionType = Shaders.MaterialComponentType.Solid;
      }
    } else if (this._emissionType != Shaders.MaterialComponentType.Texture2D) {
      if (this._emissionType == Shaders.MaterialComponentType.None)
        this._emissionClr = new Math.Color4.white();
      this._emissionType == Shaders.MaterialComponentType.Texture2D;
      this._emissionCube = null;
      this._shader = null;
    }
    this._emission2D = txt;
  }

  /// The cube emission texture for the material.
  Textures.TextureCube get emissionTextureCube => this._emissionCube;
  set emissionTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._emissionType == Shaders.MaterialComponentType.TextureCube) {
        this._shader = null;
        this._emissionType = Shaders.MaterialComponentType.Solid;
      }
    } else if (this._emissionType != Shaders.MaterialComponentType.TextureCube) {
      if (this._emissionType == Shaders.MaterialComponentType.None)
        this._emissionClr = new Math.Color4.white();
      this._emissionType == Shaders.MaterialComponentType.TextureCube;
      this._emission2D = null;
      this._shader = null;
    }
    this._emissionCube = txt;
  }

  /// Removes any ambient from the material.
  void clearAmbient() {
    if (this._ambientType != Shaders.MaterialComponentType.None) {
      this._shader = null;
      this._ambientType = Shaders.MaterialComponentType.None;
      this._ambientClr = new Math.Color4.transparent();
      this._ambient2D = null;
      this._ambientCube = null;
    }
  }

  /// The ambient color or scalar on the ambient texture for the material.
  Math.Color4 get ambientColor => this._ambientClr;
  set ambientColor(Math.Color4 clr) {
    if (clr == null) this.clearAmbient();
    else if (this._ambientType == Shaders.MaterialComponentType.None) {
      this._ambientType = Shaders.MaterialComponentType.Solid;
      this._shader = null;
    }
    this._ambientClr = clr;
  }

  /// The 2D ambient texture for the material.
  Textures.Texture2D get ambientTexture2D => this._ambient2D;
  set ambientTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._ambientType == Shaders.MaterialComponentType.Texture2D) {
        this._shader = null;
        this._ambientType = Shaders.MaterialComponentType.Solid;
      }
    } else if (this._ambientType != Shaders.MaterialComponentType.Texture2D) {
      if (this._ambientType == Shaders.MaterialComponentType.None)
        this._ambientClr = new Math.Color4.white();
      this._ambientType == Shaders.MaterialComponentType.Texture2D;
      this._ambientCube = null;
      this._shader = null;
    }
    this._ambient2D = txt;
  }

  /// The cube ambient texture for the material.
  Textures.TextureCube get ambientTextureCube => this._ambientCube;
  set ambientTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._ambientType == Shaders.MaterialComponentType.TextureCube) {
        this._shader = null;
        this._ambientType = Shaders.MaterialComponentType.Solid;
      }
    } else if (this._ambientType != Shaders.MaterialComponentType.TextureCube) {
      if (this._ambientType == Shaders.MaterialComponentType.None)
        this._ambientClr = new Math.Color4.white();
      this._ambientType == Shaders.MaterialComponentType.TextureCube;
      this._ambient2D = null;
      this._shader = null;
    }
    this._ambientCube = txt;
  }

  /// Removes any diffuse from the material.
  void clearDiffuse() {
    if (this._diffuseType != Shaders.MaterialComponentType.None) {
      this._shader = null;
      this._diffuseType = Shaders.MaterialComponentType.None;
      this._diffuseClr = new Math.Color4.transparent();
      this._diffuse2D = null;
      this._diffuseCube = null;
    }
  }

  /// The diffuse color or scalar on the diffuse texture for the material.
  Math.Color4 get diffuseColor => this._diffuseClr;
  set diffuseColor(Math.Color4 clr) {
    if (clr == null) this.clearDiffuse();
    else if (this._diffuseType == Shaders.MaterialComponentType.None) {
      this._diffuseType = Shaders.MaterialComponentType.Solid;
      this._shader = null;
    }
    this._diffuseClr = clr;
  }

  /// The 2D diffuse texture for the material.
  Textures.Texture2D get diffuseTexture2D => this._diffuse2D;
  set diffuseTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._diffuseType == Shaders.MaterialComponentType.Texture2D) {
        this._shader = null;
        this._diffuseType = Shaders.MaterialComponentType.Solid;
      }
    } else if (this._diffuseType != Shaders.MaterialComponentType.Texture2D) {
      if (this._diffuseType == Shaders.MaterialComponentType.None)
        this._diffuseClr = new Math.Color4.white();
      this._diffuseType == Shaders.MaterialComponentType.Texture2D;
      this._diffuseCube = null;
      this._shader = null;
    }
    this._diffuse2D = txt;
  }

  /// The cube diffuse texture for the material.
  Textures.TextureCube get diffuseTextureCube => this._diffuseCube;
  set diffuseTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._diffuseType == Shaders.MaterialComponentType.TextureCube) {
        this._shader = null;
        this._diffuseType = Shaders.MaterialComponentType.Solid;
      }
    } else if (this._diffuseType != Shaders.MaterialComponentType.TextureCube) {
      if (this._diffuseType == Shaders.MaterialComponentType.None)
        this._diffuseClr = new Math.Color4.white();
      this._diffuseType == Shaders.MaterialComponentType.TextureCube;
      this._diffuse2D = null;
      this._shader = null;
    }
    this._diffuseCube = txt;
  }

  /// Removes any specular from the material.
  void clearSpecular() {
    if (this._specularType != Shaders.MaterialComponentType.None) {
      this._shader = null;
      this._specularType = Shaders.MaterialComponentType.None;
      this._shininess = 100.0;
      this._specularClr = new Math.Color4.transparent();
      this._specular2D = null;
      this._specularCube = null;
    }
  }

  /// The specular color or scalar on the specular texture for the material.
  double get shininess => this._shininess;
  set shininess(double value) {
    if (value <= 0.0) this.clearSpecular();
    else if (this._specularType == Shaders.MaterialComponentType.None) {
      this._specularType = Shaders.MaterialComponentType.Solid;
      this._specularClr = new Math.Color4.white();
      this._shader = null;
    }
    this._shininess = value;
  }

  /// The specular color or scalar on the specular texture for the material.
  Math.Color4 get specularColor => this._specularClr;
  set specularColor(Math.Color4 clr) {
    if (clr == null) this.clearSpecular();
    else if (this._specularType == Shaders.MaterialComponentType.None) {
      this._shininess = 100.0;
      this._specularType = Shaders.MaterialComponentType.Solid;
      this._shader = null;
    }
    this._specularClr = clr;
  }

  /// The 2D specular texture for the material.
  Textures.Texture2D get specularTexture2D => this._specular2D;
  set specularTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._specularType == Shaders.MaterialComponentType.Texture2D) {
        this._shader = null;
        this._specularType = Shaders.MaterialComponentType.Solid;
      }
    } else if (this._specularType != Shaders.MaterialComponentType.Texture2D) {
      if (this._specularType == Shaders.MaterialComponentType.None) {
        this._shininess = 100.0;
        this._specularClr = new Math.Color4.white();
      }
      this._specularType == Shaders.MaterialComponentType.Texture2D;
      this._specularCube = null;
      this._shader = null;
    }
    this._specular2D = txt;
  }

  /// The cube specular texture for the material.
  Textures.TextureCube get specularTextureCube => this._specularCube;
  set specularTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._specularType == Shaders.MaterialComponentType.TextureCube) {
        this._shader = null;
        this._specularType = Shaders.MaterialComponentType.Solid;
      }
    } else if (this._specularType != Shaders.MaterialComponentType.TextureCube) {
      if (this._specularType == Shaders.MaterialComponentType.None) {
        this._shininess = 100.0;
        this._specularClr = new Math.Color4.white();
      }
      this._specularType == Shaders.MaterialComponentType.TextureCube;
      this._specular2D = null;
      this._shader = null;
    }
    this._specularCube = txt;
  }

  /// Removes any normal distortion from the material.
  void clearBump() {
    if (this._bumpyType != Shaders.MaterialComponentType.None) {
      this._shader = null;
      this._bumpyType = Shaders.MaterialComponentType.None;
      this._bump2D = null;
      this._bumpCube = null;
    }
  }

  /// The normal distortion 2D texture for the material.
  Textures.Texture2D get bumpyTexture2D => this._bump2D;
  set bumpyTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._bumpyType == Shaders.MaterialComponentType.Texture2D) {
        this._shader = null;
        this._bumpyType = Shaders.MaterialComponentType.None;
      }
    } else if (this._bumpyType != Shaders.MaterialComponentType.Texture2D) {
      this._bumpyType == Shaders.MaterialComponentType.Texture2D;
      this._bumpCube = null;
      this._shader = null;
    }
    this._bump2D = txt;
  }

  /// The normal distortion cube texture for the material.
  Textures.TextureCube get bumpyTextureCube => this._bumpCube;
  set bumpyTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._bumpyType == Shaders.MaterialComponentType.TextureCube) {
        this._shader = null;
        this._bumpyType = Shaders.MaterialComponentType.None;
      }
    } else if (this._bumpyType != Shaders.MaterialComponentType.TextureCube) {
      this._bumpyType == Shaders.MaterialComponentType.TextureCube;
      this._bump2D = null;
      this._shader = null;
    }
    this._bumpCube = txt;
  }



    // TODO: Finish
    //
    // this._hasReflection = false;
    // this._hasRefraction = false;
    // this._envSampler = null;
    // this._refraction = 0.5;
    // this._reflectClr = new Math.Color4.transparent();
    // this._refractClr = new Math.Color4.transparent();
    //






  /// Update the list of textures.
  void _updateTextureList() {
    this._textures.clear();
    if (this._emission2D   != null) this._textures.add(this._emission2D);
    if (this._emissionCube != null) this._textures.add(this._emissionCube);
    if (this._ambient2D    != null) this._textures.add(this._ambient2D);
    if (this._ambientCube  != null) this._textures.add(this._ambientCube);
    if (this._diffuse2D    != null) this._textures.add(this._diffuse2D);
    if (this._diffuseCube  != null) this._textures.add(this._diffuseCube);
    if (this._specularCube != null) this._textures.add(this._specularCube);
    if (this._bump2D       != null) this._textures.add(this._bump2D);
    if (this._bumpCube     != null) this._textures.add(this._bumpCube);
    if (this._envSampler   != null) this._textures.add(this._envSampler);
  }

  Shaders.MaterialLightConfig _config() {
    return new Shaders.MaterialLightConfig(this._emissionType, this._ambientType, this._diffuseType,
      this._specularType, this._bumpyType, this._hasReflection, this._hasRefraction);
  }

  /// Renderes the given [obj] with the current light and material for the given [state].
  void render(Core.RenderState state, Core.Entity obj) {
    if (this._light == null) return;
    if (this._light is! Lights.Directional)
      throw new Exception("Unsupported light type: $_light");

    if (this._shader == null) {
      this._shader = new Shaders.MaterialLight.cached(this._config(), state);
      this._updateTextureList();



    }





    this._shader.bind(state);
    for (int i = 0; i < this._textures.length; i++) {
      Textures.Texture txt = this._textures[i];
      txt.index = i;
      txt.bind(state);
    }

    if (obj.cache is Data.BufferStore) {
      (obj.cache as Data.BufferStore)
        ..bind(state)
        ..render(state)
        ..unbind(state);
    } else obj.clearCache();

    for (int i = 0; i < this._textures.length; i++) {
      this._textures[i].unbind(state);
    }
    this._shader.unbind(state);
  }








  /// Renders and sets up the shaper for solid color light.
  void _solid(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.Solid.cached(state);
    Shaders.Solid shader = this._shader as Shaders.Solid;

    if (obj.cacheNeedsUpdate) {
      obj.shape.calculateNormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc;
    }

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(this._material as Materials.Solid)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for bumpy solid color light.
  void _bumpySolid(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.BumpySolid.cached(state);
    Shaders.BumpySolid shader = this._shader as Shaders.BumpySolid;

    if (obj.cacheNeedsUpdate) {
      obj.shape
        ..calculateNormals()
        ..calculateBinormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.Txt2D)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = shader.binmAttr.loc
        ..findAttribute(Data.VertexType.Txt2D).attr = shader.txtAttr.loc;
    }

    Materials.BumpySolid mat = this._material as Materials.BumpySolid;
    if (mat.bumpMap != null) mat.bumpMap.index = 0;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for reflective solid color light.
  void _reflSolid(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.ReflSolid.cached(state);
    Shaders.ReflSolid shader = this._shader as Shaders.ReflSolid;

    if (obj.cacheNeedsUpdate) {
      obj.shape
        ..calculateNormals()
        ..calculateBinormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc;
    }

    Materials.ReflSolid mat = this._material as Materials.ReflSolid;
    if (mat.environment != null) mat.environment.index = 0;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..inverseViewMatrix = state.inverseViewMatrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for bumpy cube solid color light.
  void _bumpyCubeSolid(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.BumpyCubeSolid.cached(state);
    Shaders.BumpyCubeSolid shader = this._shader as Shaders.BumpyCubeSolid;

    if (obj.cacheNeedsUpdate) {
      obj.shape
        ..calculateNormals()
        ..calculateBinormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.TxtCube)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = shader.binmAttr.loc
        ..findAttribute(Data.VertexType.TxtCube).attr = shader.txtCubeAttr.loc;
    }

    Materials.BumpyCubeSolid mat = this._material as Materials.BumpyCubeSolid;
    if (mat.bumpMap != null) mat.bumpMap.index = 0;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for texture 2D light.
  void _txt2D(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.Texture2D.cached(state);
    Shaders.Texture2D shader = this._shader as Shaders.Texture2D;

    if (obj.cacheNeedsUpdate) {
      obj.shape.calculateNormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Txt2D)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Txt2D).attr = shader.txtAttr.loc;
    }

    Materials.Texture2D mat = this._material as Materials.Texture2D;
    if (mat.emissionTexture != null) mat.emissionTexture.index = 0;
    if (mat.ambientTexture != null) mat.ambientTexture.index = 1;
    if (mat.diffuseTexture != null) mat.diffuseTexture.index = 2;
    if (mat.specularTexture != null) mat.specularTexture.index = 3;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for bumpy texture 2D light.
  void _bumpyTxt2D(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.BumpyTexture2D.cached(state);
    Shaders.BumpyTexture2D shader = this._shader as Shaders.BumpyTexture2D;

    if (obj.cacheNeedsUpdate) {
      obj.shape
        ..calculateNormals()
        ..calculateBinormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.Txt2D)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = shader.binmAttr.loc
        ..findAttribute(Data.VertexType.Txt2D).attr = shader.txtAttr.loc;
    }

    Materials.BumpyTexture2D mat = this._material as Materials.BumpyTexture2D;
    if (mat.emissionTexture != null) mat.emissionTexture.index = 0;
    if (mat.ambientTexture != null) mat.ambientTexture.index = 1;
    if (mat.diffuseTexture != null) mat.diffuseTexture.index = 2;
    if (mat.specularTexture != null) mat.specularTexture.index = 3;
    if (mat.bumpMap != null) mat.bumpMap.index = 4;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for texture cube light.
  void _txtCube(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.TextureCube.cached(state);
    Shaders.TextureCube shader = this._shader as Shaders.TextureCube;

    if (obj.cacheNeedsUpdate) {
      obj.shape.calculateNormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.TxtCube)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.TxtCube).attr = shader.txtCubeAttr.loc;
    }

    Materials.TextureCube mat = this._material as Materials.TextureCube;
    if (mat.emissionTexture != null) mat.emissionTexture.index = 0;
    if (mat.ambientTexture != null) mat.ambientTexture.index = 1;
    if (mat.diffuseTexture != null) mat.diffuseTexture.index = 2;
    if (mat.specularTexture != null) mat.specularTexture.index = 3;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for bumpy texture cube light.
  void _bumpyTxtCube(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.BumpyTextureCube.cached(state);
    Shaders.BumpyTextureCube shader = this._shader as Shaders.BumpyTextureCube;

    if (obj.cacheNeedsUpdate) {
      obj.shape
        ..calculateNormals()
        ..calculateBinormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.TxtCube)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = shader.binmAttr.loc
        ..findAttribute(Data.VertexType.TxtCube).attr = shader.txtCubeAttr.loc;
    }

    Materials.BumpyTextureCube mat = this._material as Materials.BumpyTextureCube;
    if (mat.emissionTexture != null) mat.emissionTexture.index = 0;
    if (mat.ambientTexture != null) mat.ambientTexture.index = 1;
    if (mat.diffuseTexture != null) mat.diffuseTexture.index = 2;
    if (mat.specularTexture != null) mat.specularTexture.index = 3;
    if (mat.bumpMap != null) mat.bumpMap.index = 4;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }
}
