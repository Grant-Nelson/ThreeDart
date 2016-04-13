part of ThreeDart.Techniques;

/// The material/light rendering technique.
class MaterialLight extends Technique {
  Shaders.MaterialLight _shader;
  Lights.Light _light;

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
    this.clearEmission();
    this.clearAmbient();
    this.clearDiffuse();
    this.clearSpecular();
    this.clearBump();
    this.clearReflection();
    this.clearRefraction();
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

  /// The environment cube texture for reflective and refractive materials.
  Textures.TextureCube get environmentTexture => this._envSampler;
  set environmentTexture(Textures.TextureCube txt) {
    this._envSampler = txt;
  }

  /// Clears the refraction of the material.
  void clearRefraction() {
    if (this._hasRefraction) {
        this._hasRefraction = false;
        this._refraction = 0.5;
        this._refractClr = new Math.Color4.transparent();
        this._shader = null;
    }
  }

  /// The specular color or scalar on the specular texture for the material.
  double get refraction => this._refraction;
  set refraction(double value) {
    if (value <= 0.0) this.clearRefraction();
    else if (!this._hasRefraction) {
      this._hasRefraction = true;
      this._refractClr = new Math.Color4.white();
      this._shader = null;
    }
    this._refraction = value;
  }

  /// The refraction color or scalar on the refraction of the evironmental texture for the material.
  Math.Color4 get refractionColor => this._refractClr;
  set refractionColor(Math.Color4 clr) {
    if (clr == null) this.clearRefraction();
    else if (!this._hasRefraction) {
      this._hasRefraction = true;
      this._refraction = 0.5;
      this._shader = null;
    }
    this._refractClr = clr;
  }

  /// Clears the reflection of the material.
  void clearReflection() {
    if (this._hasReflection) {
        this._hasReflection = false;
        this._reflectClr = new Math.Color4.transparent();
        this._shader = null;
    }
  }

  /// The reflection color or scalar on the reflection of the evironmental texture for the material.
  Math.Color4 get reflectionColor => this._reflectClr;
  set reflectionColor(Math.Color4 clr) {
    if (clr == null) this.clearReflection();
    else if (!this._hasReflection) {
      this._hasReflection = true;
      this._shader = null;
    }
    this._reflectClr = clr;
  }

  /// Creates the configuration for this shader.
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
      obj.clearCache();
    }
    Shaders.MaterialLightConfig cfg = this._shader.configuration;
    if (obj.cacheNeedsUpdate) {
      Data.VertexType vertexType = Data.VertexType.Pos;
      if (cfg.norm) {
        obj.shape.calculateNormals();
        vertexType |= Data.VertexType.Norm;
      }
      if (cfg.binm) {
        obj.shape.calculateBinormals();
        vertexType |= Data.VertexType.Binm;
      }
      if (cfg.txt2D) {
        vertexType |= Data.VertexType.Txt2D;
      }
      if (cfg.txtCube) {
        obj.shape.calculateCubeTextures();
        vertexType |= Data.VertexType.TxtCube;
      }

      Data.BufferStore cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl), vertexType);
      cache.findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc;
      if (cfg.norm) cache.findAttribute(Data.VertexType.Norm).attr = this._shader.normAttr.loc;
      if (cfg.binm) cache.findAttribute(Data.VertexType.Binm).attr = this._shader.binmAttr.loc;
      if (cfg.txt2D) cache.findAttribute(Data.VertexType.Txt2D).attr = this._shader.txt2DAttr.loc;
      if (cfg.txtCube) cache.findAttribute(Data.VertexType.TxtCube).attr = this._shader.txtCubeAttr.loc;
      obj.cache = cache;
    }

    List<Textures.Texture> textures = new List<Textures.Texture>();
    this._shader.bind(state);

    if (cfg.viewObjMat) this._shader.viewObjectMatrix = state.viewObjectMatrix;
    if (cfg.viewMat)    this._shader.viewMatrix = state.view.matrix;
    this._shader.projectViewObjectMatrix = state.projectionViewObjectMatrix;

    if (cfg.lights) {
      this._shader.lightColor = (this._light as Lights.Directional).color;
      this._shader.lightVector = (this._light as Lights.Directional).direction;
    }

    switch (cfg.emission) {
      case Shaders.MaterialComponentType.None: break;
      case Shaders.MaterialComponentType.Solid:
        this._shader.emissionColor = this._emissionClr;
        break;
      case Shaders.MaterialComponentType.Texture2D:
        this._emission2D.index = textures.length;
        textures.add(this._emission2D);
        this._shader.emissionTexture2D = this._emission2D;
        this._shader.emissionColor = this._emissionClr;
        break;
      case Shaders.MaterialComponentType.TextureCube:
        this._emissionCube.index = textures.length;
        textures.add(this._emissionCube);
        this._shader.emissionTextureCube = this._emissionCube;
        this._shader.emissionColor = this._emissionClr;
        break;
    }

    switch (cfg.ambient) {
      case Shaders.MaterialComponentType.None: break;
      case Shaders.MaterialComponentType.Solid:
        this._shader.ambientColor = this._ambientClr;
        break;
      case Shaders.MaterialComponentType.Texture2D:
        this._ambient2D.index = textures.length;
        textures.add(this._ambient2D);
        this._shader.ambientTexture2D = this._ambient2D;
        this._shader.ambientColor = this._ambientClr;
        break;
      case Shaders.MaterialComponentType.TextureCube:
        this._ambientCube.index = textures.length;
        textures.add(this._ambientCube);
        this._shader.ambientTextureCube = this._ambientCube;
        this._shader.ambientColor = this._ambientClr;
        break;
    }

    switch (cfg.diffuse) {
      case Shaders.MaterialComponentType.None: break;
      case Shaders.MaterialComponentType.Solid:
        this._shader.diffuseColor = this._diffuseClr;
        break;
      case Shaders.MaterialComponentType.Texture2D:
        this._diffuse2D.index = textures.length;
        textures.add(this._diffuse2D);
        this._shader.diffuseTexture2D = this._diffuse2D;
        this._shader.diffuseColor = this._diffuseClr;
        break;
      case Shaders.MaterialComponentType.TextureCube:
        this._diffuseCube.index = textures.length;
        textures.add(this._diffuseCube);
        this._shader.diffuseTextureCube = this._diffuseCube;
        this._shader.diffuseColor = this._diffuseClr;
        break;
    }

    switch (cfg.specular) {
      case Shaders.MaterialComponentType.None: break;
      case Shaders.MaterialComponentType.Solid:
        this._shader.specularColor = this._specularClr;
        this._shader.shininess = this._shininess;
        break;
      case Shaders.MaterialComponentType.Texture2D:
        this._specular2D.index = textures.length;
        textures.add(this._specular2D);
        this._shader.specularTexture2D = this._specular2D;
        this._shader.specularColor = this._specularClr;
        this._shader.shininess = this._shininess;
        break;
      case Shaders.MaterialComponentType.TextureCube:
        this._specularCube.index = textures.length;
        textures.add(this._specularCube);
        this._shader.specularTextureCube = this._specularCube;
        this._shader.specularColor = this._specularClr;
        this._shader.shininess = this._shininess;
        break;
    }

    switch (cfg.bumpy) {
      case Shaders.MaterialComponentType.None: break;
      case Shaders.MaterialComponentType.Solid: break;
      case Shaders.MaterialComponentType.Texture2D:
        this._bump2D.index = textures.length;
        textures.add(this._bump2D);
        this._shader.bumpTexture2D = this._bump2D;
        break;
      case Shaders.MaterialComponentType.TextureCube:
        this._bumpCube.index = textures.length;
        textures.add(this._bumpCube);
        this._shader.bumpTextureCube = this._bumpCube;
        break;
    }

    if (cfg.enviromental) {
      this._shader.inverseViewMatrix = state.inverseViewMatrix;
      this._envSampler.index = textures.length;
      textures.add(this._envSampler);
      this._shader.environmentTextureCube = this._envSampler;
      if (cfg.reflection) {
        this._shader.reflectionColor = this._reflectClr;
      }
      if (cfg.refraction) {
        this._shader.refractionColor = this._refractClr;
        this._shader.refraction = this._refraction;
      }
    }

    for (int i = 0; i < textures.length; i++) {
      textures[i].bind(state);
    }

    if (obj.cache is Data.BufferStore) {
      (obj.cache as Data.BufferStore)
        ..bind(state)
        ..render(state)
        ..unbind(state);
    } else obj.clearCache();

    for (int i = 0; i < textures.length; i++) {
      textures[i].unbind(state);
    }
    this._shader.unbind(state);
  }
}
