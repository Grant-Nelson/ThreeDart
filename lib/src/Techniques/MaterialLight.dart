part of ThreeDart.Techniques;

/// The material/light rendering technique.
class MaterialLight extends Technique {
  Shaders.MaterialLight _shader;
  Math.Matrix3 _txt2DMat;
  Math.Matrix4 _txtCubeMat;
  Math.Matrix4 _colorMat;
  Collections.Collection<Math.Matrix4> _bendMats;
  MaterialLightColorComponent _emission;
  MaterialLightColorComponent _ambient;
  MaterialLightColorComponent _diffuse;
  MaterialLightColorComponent _invDiffuse;
  MaterialLightSpecularComponent _specular;
  MaterialLightBumpComponent _bump;
  Textures.TextureCube _envSampler;
  MaterialLightColorComponent _reflect;
  MaterialLightRefractionComponent _refract;
  MaterialLightAlphaComponent _alpha;
  Lights.LightCollection _lights;
  MaterialLightFogComponent _fog;
  Events.Event _changed;

  /// Creates a new material/light technique.
  MaterialLight() {
    this._shader     = null;
    this._txt2DMat   = null;
    this._txtCubeMat = null;
    this._colorMat   = null;
    this._bendMats   = new Collections.Collection<Math.Matrix4>();
    this._bendMats.setHandlers(
      onAddedHndl:   this._onBendMatsAdded,
      onRemovedHndl: this._onBendMatsRemoved);
    this._emission   = new MaterialLightColorComponent._(this, "emission");
    this._ambient    = new MaterialLightColorComponent._(this, "ambient");
    this._diffuse    = new MaterialLightColorComponent._(this, "diffuse");
    this._invDiffuse = new MaterialLightColorComponent._(this, "invDiffuse");
    this._specular   = new MaterialLightSpecularComponent._(this, "specular");
    this._bump       = new MaterialLightBumpComponent._(this, "bump");
    this._envSampler = null;
    this._reflect    = new MaterialLightColorComponent._(this, "reflect");
    this._refract    = new MaterialLightRefractionComponent._(this, "refract");
    this._alpha      = new MaterialLightAlphaComponent._(this, "alpha");
    this._lights     = new Lights.LightCollection();
    this._fog        = new MaterialLightFogComponent._(this);
    this._lights.changed.add(this._resetShader);
    this._lights.lightChanged.add(this._onChanged);
    this._changed = null;
  }

  /// Creates a new emission material with an optional colored glow.
  factory MaterialLight.glow({Math.Color3 color: null}) =>
    new MaterialLight()
      ..emission.color = color ?? new Math.Color3.white();

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

  /// Handles added matrices to the bend matrices.
  void _onBendMatsAdded(int index, Iterable<Math.Matrix4> mats) {
    this._onChanged(new Events.ItemsAddedEventArgs(this, index, mats));
  }

  /// Handles removed matrices from the bend matrices.
  void _onBendMatsRemoved(int index, Iterable<Math.Matrix4> mats) {
    this._onChanged(new Events.ItemsRemovedEventArgs(this, index, mats));
  }

  /// The lights to render with.
  Lights.LightCollection get lights => this._lights;

  /// The 2D texture modification matrix.
  Math.Matrix3 get texture2DMatrix => this._txt2DMat;
  set texture2DMatrix(Math.Matrix3 mat) {
    mat ??= Math.Matrix3.identity;
    if (this._txt2DMat != mat) {
      if (Math.xor(this._txt2DMat == null, mat == null)) this._shader = null;
      Math.Matrix3 prev = this._txt2DMat;
      this._txt2DMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, "texture2DMatrix", prev, this._txt2DMat));
    }
  }

  /// The cube texture modification matrix.
  Math.Matrix4 get textureCubeMatrix => this._txtCubeMat;
  set textureCubeMatrix(Math.Matrix4 mat) {
    mat ??= Math.Matrix4.identity;
    if (this._txtCubeMat != mat) {
      if (Math.xor(this._txtCubeMat == null, mat == null)) this._shader = null;
      Math.Matrix4 prev = this._txtCubeMat;
      this._txtCubeMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, "textureCubeMatrix", prev, this._txtCubeMat));
    }
  }

  /// The color modification matrix.
  Math.Matrix4 get colorMatrix => this._colorMat;
  set colorMatrix(Math.Matrix4 mat) {
    if (this._colorMat != mat) {
      if (Math.xor(this._colorMat == null, mat == null)) this._shader = null;
      Math.Matrix4 prev = this._colorMat;
      this._colorMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, "colorMatrix", prev, this._colorMat));
    }
  }

  /// The list of matrices for bending the shape by weights.
  Collections.Collection<Math.Matrix4> get bendMatrices => this._bendMats;

  /// The emission component of the material.
  MaterialLightColorComponent get emission => this._emission;

  /// The ambient component of the material.
  MaterialLightColorComponent get ambient => this._ambient;

  /// The diffuse component of the material.
  MaterialLightColorComponent get diffuse => this._diffuse;

  /// The inverse diffuse (transmission) component of the material.
  MaterialLightColorComponent get invDiffuse => this._invDiffuse;

  /// The specular component of the material.
  MaterialLightSpecularComponent get specular => this._specular;

  /// The specular component of the material.
  MaterialLightBumpComponent get bump => this._bump;

  /// The fog component of to render with.
  MaterialLightFogComponent get fog => this._fog;

  /// The environment cube texture for reflective and refractive materials.
  Textures.TextureCube get environment => this._envSampler;
  set environment(Textures.TextureCube txt) {
    if (this._envSampler != txt) {
      if (this._envSampler != null) this._envSampler.changed.remove(this._onChanged);
      Textures.TextureCube prev = this._envSampler;
      this._envSampler = txt;
      if (this._envSampler != null) this._envSampler.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "environment", prev, this._envSampler));
    }
  }

  /// The reflection component of the material.
  MaterialLightColorComponent get reflection => this._reflect;

  /// The refraction component of the material.
  MaterialLightRefractionComponent get refraction => this._refract;

  /// The alpha value or scalar on the alpha texture for the material.
  MaterialLightAlphaComponent get alpha => this._alpha;

  /// Gets the vertex source code used for the shader used by this technique.
  String get vertexSourceCode => this._shader?.vertexSourceCode;

  /// Gets the fragment source code used for the shader used by this technique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode;

  /// Calculates a limit for the lights and other arrays for the shader from
  /// the current number of lights and lengths. This helps reduce and reuse
  /// shaders with similar number of attributes.
  int _lengthLimit(int count) => ((count + 3) ~/ 4) * 4;

  /// Creates the configuration for this shader.
  Shaders.MaterialLightConfig _config() {

    // Collect configuration for bar lights.
    Map<int, int> barLightCounter = new Map<int, int>();
    for (Lights.Bar light in this._lights.barLights)
      barLightCounter[light.configID] = barLightCounter[light.configID]??0 + 1;
    List<Shaders.BarLightConfig> barLights = new List<Shaders.BarLightConfig>();
    barLightCounter.forEach((int configID, int count) =>
      barLights.add(new Shaders.BarLightConfig(configID, this._lengthLimit(count))));
    barLights.sort((Shaders.BarLightConfig a, Shaders.BarLightConfig b) => a.configID.compareTo(b.configID));

    // Collect configuration for directional lights.
    Map<int, int> dirLightCounter = new Map<int, int>();
    for (Lights.Directional light in this._lights.directionalLights)
      dirLightCounter[light.configID] = dirLightCounter[light.configID]??0 + 1;
    List<Shaders.DirectionalLightConfig> dirLights = new List<Shaders.DirectionalLightConfig>();
    dirLightCounter.forEach((int configID, int count) =>
      dirLights.add(new Shaders.DirectionalLightConfig(configID, this._lengthLimit(count))));
    dirLights.sort((Shaders.DirectionalLightConfig a, Shaders.DirectionalLightConfig b) => a.configID.compareTo(b.configID));

    // Collect configuration for point lights.
    Map<int, int> pointLightCounter = new Map<int, int>();
    for (Lights.Point light in this._lights.pointLights)
      pointLightCounter[light.configID] = pointLightCounter[light.configID]??0 + 1;
    List<Shaders.PointLightConfig> pointLights = new List<Shaders.PointLightConfig>();
    pointLightCounter.forEach((int configID, int count) =>
      pointLights.add(new Shaders.PointLightConfig(configID, this._lengthLimit(count))));
    pointLights.sort((Shaders.PointLightConfig a, Shaders.PointLightConfig b) => a.configID.compareTo(b.configID));

    // Collect configuration for spot lights.
    Map<int, int> spotLightCounter = new Map<int, int>();
    for (Lights.Spot light in this._lights.spotLights)
      spotLightCounter[light.configID] = spotLightCounter[light.configID]??0 + 1;
    List<Shaders.SpotLightConfig> spotLights = new List<Shaders.SpotLightConfig>();
    spotLightCounter.forEach((int configID, int count) =>
      spotLights.add(new Shaders.SpotLightConfig(configID, this._lengthLimit(count))));
    spotLights.sort((Shaders.SpotLightConfig a, Shaders.SpotLightConfig b) => a.configID.compareTo(b.configID));

    int bendMats = this._lengthLimit(this._bendMats.length);
    return new Shaders.MaterialLightConfig(
      this._txt2DMat != null, this._txtCubeMat != null, this._colorMat != null,
      this._fog.enabled, bendMats, this._emission.type, this._ambient.type,
      this._diffuse.type, this._invDiffuse.type, this._specular.type,
      this._bump.type, this._reflect.type, this._refract.type, this._alpha.type,
      barLights, dirLights, pointLights, spotLights);
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
    for (Lights.Light light in this._lights) {
      light.update(state);
    }
  }

  /// Renderes the given [obj] with the current light and material for the given [state].
  void render(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null) {
      this._shader = new Shaders.MaterialLight.cached(this._config(), state);
      obj.clearCache();
    }

    Shaders.MaterialLightConfig cfg = this._shader.configuration;
    Data.VertexType vertexType = cfg.vertexType;
    if (obj.cache is! Data.BufferStore) obj.clearCache();
    if (obj.cacheNeedsUpdate || (obj.cache as Data.BufferStore).vertexType != vertexType) {
      if (cfg.norm) obj.shapeBuilder.calculateNormals();
      if (cfg.binm) obj.shapeBuilder.calculateBinormals();
      if (cfg.txtCube) obj.shapeBuilder.calculateCubeTextures();

      Data.BufferStore cache = obj.shapeBuilder.build(new Data.WebGLBufferBuilder(state.gl), vertexType);
      cache.findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc;
      if (cfg.norm)    cache.findAttribute(Data.VertexType.Norm).attr    = this._shader.normAttr.loc;
      if (cfg.binm)    cache.findAttribute(Data.VertexType.Binm).attr    = this._shader.binmAttr.loc;
      if (cfg.txt2D)   cache.findAttribute(Data.VertexType.Txt2D).attr   = this._shader.txt2DAttr.loc;
      if (cfg.txtCube) cache.findAttribute(Data.VertexType.TxtCube).attr = this._shader.txtCubeAttr.loc;
      if (cfg.bending) cache.findAttribute(Data.VertexType.Bending).attr = this._shader.bendAttr.loc;
      obj.cache = cache;
    }

    List<Textures.Texture> textures = new List<Textures.Texture>();
    this._shader.bind(state);

    if (cfg.objMat)         this._shader.objectMatrix = state.object.matrix;
    if (cfg.viewObjMat)     this._shader.viewObjectMatrix = state.viewObjectMatrix;
    if (cfg.projViewObjMat) this._shader.projectViewObjectMatrix = state.projectionViewObjectMatrix;
    if (cfg.viewMat)        this._shader.viewMatrix = state.view.matrix;
    if (cfg.projViewMat)    this._shader.projectViewMatrix = state.projectionViewMatrix;

    if (cfg.txt2DMat)   this._shader.texture2DMatrix = this._txt2DMat;
    if (cfg.txtCubeMat) this._shader.textureCubeMatrix = this._txtCubeMat;
    if (cfg.colorMat)   this._shader.colorMatrix = this._colorMat;

    if (cfg.bendMats > 0) {
      int count = this._bendMats.length;
      this._shader.bendMatricesCount = count;
      for (int i = 0; i < count; ++i)  {
        this._shader.setBendMatrix(i, this._bendMats[i]);
      }
    }

    if (cfg.emission.hasSolid)
      this._shader.emissionColor = this._emission.color;
    if (cfg.emission.hasTxt2D) {
      this._addToTextureList(textures, this._emission.texture2D);
      this._shader.emissionTexture2D = this._emission.texture2D;
    } else if (cfg.emission.hasTxtCube) {
      this._addToTextureList(textures, this._emission.textureCube);
      this._shader.emissionTextureCube = this._emission.textureCube;
    }

    if (cfg.lights) {
      if (cfg.ambient.hasSolid)
        this._shader.ambientColor = this._ambient.color;
      if (cfg.ambient.hasTxt2D) {
        this._addToTextureList(textures, this._ambient.texture2D);
        this._shader.ambientTexture2D = this._ambient.texture2D;
      } else if (cfg.ambient.hasTxtCube) {
        this._addToTextureList(textures, this._ambient.textureCube);
        this._shader.ambientTextureCube = this._ambient.textureCube;
      }
      
      if (cfg.diffuse.hasSolid)
        this._shader.diffuseColor = this._diffuse.color;
      if (cfg.diffuse.hasTxt2D) {
        this._addToTextureList(textures, this._diffuse.texture2D);
        this._shader.diffuseTexture2D = this._diffuse.texture2D;
      } else if (cfg.diffuse.hasTxtCube) {
        this._addToTextureList(textures, this._diffuse.textureCube);
        this._shader.diffuseTextureCube = this._diffuse.textureCube;
      }
      
      if (cfg.invDiffuse.hasSolid)
        this._shader.invDiffuseColor = this._invDiffuse.color;
      if (cfg.invDiffuse.hasTxt2D) {
        this._addToTextureList(textures, this._invDiffuse.texture2D);
        this._shader.invDiffuseTexture2D = this._invDiffuse.texture2D;
      } else if (cfg.invDiffuse.hasTxtCube) {
        this._addToTextureList(textures, this._invDiffuse.textureCube);
        this._shader.invDiffuseTextureCube = this._invDiffuse.textureCube;
      }

      if (cfg.specular.hasAny)
        this._shader.shininess = this._specular.shininess;
      if (cfg.specular.hasSolid)
        this._shader.specularColor = this._specular.color;
      if (cfg.specular.hasTxt2D) {
        this._addToTextureList(textures, this._specular.texture2D);
        this._shader.specularTexture2D = this._specular.texture2D;
      } else if (cfg.specular.hasTxtCube) {
        this._addToTextureList(textures, this._specular.textureCube);
        this._shader.specularTextureCube = this._specular.textureCube;
      }

      if (cfg.barLights.length > 0) {
        Map<int, int> barLightCounter = new Map<int, int>();
        for (Lights.Bar light in this._lights.barLights) {
          final int configID = light.configID;
          final int index = barLightCounter[configID] ?? 0;
          barLightCounter[configID] = index + 1;

          Shaders.UniformBarLight uniform = this._shader.getBarLight(configID)[index];
          uniform.startPoint = light.startMatrix.transPnt3(Math.Point3.zero);
          uniform.endPoint   = light.endMatrix.transPnt3(Math.Point3.zero);
          uniform.color = light.color;
          if (light.enableAttenuation) {
            uniform.attenuation0 = light.attenuation0;
            uniform.attenuation1 = light.attenuation1;
            uniform.attenuation2 = light.attenuation2;
          }
        }

        for (Shaders.BarLightConfig light in cfg.barLights) {
          final int count = barLightCounter[light.configID] ?? 0;
          this._shader.setBarLightCount(light.configID, count);
        }
      }

      if (cfg.dirLights.length > 0) {
        Math.Matrix4 viewMat = state.view.matrix;
        Map<int, int> dirLightCounter = new Map<int, int>();
        for (Lights.Directional light in this._lights.directionalLights) {
          final int configID = light.configID;
          final int index = dirLightCounter[configID] ?? 0;
          dirLightCounter[configID] = index + 1;

          Shaders.UniformDirectionalLight uniform = this._shader.getDirectionalLight(configID)[index];
          uniform.viewDir = viewMat.transVec3(light.direction).normal();
          uniform.color   = light.color;
          if (light.texture != null) {
            uniform.objectDir   = light.direction;
            uniform.objectUp    = light.up;
            uniform.objectRight = light.right;
            this._addToTextureList(textures, light.texture);
            uniform.texture = light.texture;
          }
        }

        for (Shaders.DirectionalLightConfig light in cfg.dirLights) {
          final int count = dirLightCounter[light.configID] ?? 0;
          this._shader.setDirectionalLightCount(light.configID, count);
        }
      }

      if (cfg.pointLights.length > 0) {
        Math.Matrix4 viewMat = state.view.matrix;
        Map<int, int> pointLightCounter = new Map<int, int>();
        for (Lights.Point light in this._lights.pointLights) {
          final int configID = light.configID;
          final int index = pointLightCounter[configID] ?? 0;
          pointLightCounter[configID] = index + 1;

          Shaders.UniformPointLight uniform = this._shader.getPointLight(configID)[index];
          Math.Matrix4 viewObjMat = viewMat*light.matrix;
          uniform.point     = light.matrix.transPnt3(Math.Point3.zero);
          uniform.viewPoint = viewObjMat.transPnt3(Math.Point3.zero);
          uniform.color     = light.color;
          if (light.texture != null || light.shadow != null)
            uniform.inverseViewRotationMatrix = new Math.Matrix3.fromMatrix4(viewObjMat.inverse());
          if (light.texture != null) {
            this._addToTextureList(textures, light.texture);
            uniform.texture = light.texture;
          }
          if (light.shadow != null) {
            uniform.shadowAdjust = light.shadowAdjust;
            this._addToTextureList(textures, light.shadow);
            uniform.shadow = light.shadow;
          }
          if (light.enableAttenuation) {
            uniform.attenuation0 = light.attenuation0;
            uniform.attenuation1 = light.attenuation1;
            uniform.attenuation2 = light.attenuation2;
          }
        }

        for (Shaders.PointLightConfig light in cfg.pointLights) {
          final int count = pointLightCounter[light.configID] ?? 0;
          this._shader.setPointLightCount(light.configID, count);
        }
      }

      if (cfg.spotLights.length > 0) {
        Math.Matrix4 viewMat = state.view.matrix;
        Map<int, int> spotLightCounter = new Map<int, int>();
        for (Lights.Spot light in this._lights.spotLights) {
          final int configID = light.configID;
          final int index = spotLightCounter[configID] ?? 0;
          spotLightCounter[configID] = index + 1;

          Shaders.UniformSpotLight uniform = this._shader.getSpotLight(configID)[index];
          uniform.objectPoint     = light.position;
          uniform.objectDirection = light.direction.normal();
          uniform.viewPoint       = viewMat.transPnt3(light.position);
          uniform.color           = light.color;
          if (light.texture != null || light.shadow != null) {
            uniform.objectUp    = light.up;
            uniform.objectRight = light.right;
            uniform.tuScalar    = light.tuScalar;
            uniform.tvScalar    = light.tvScalar;
          }
          if (light.texture != null) {
            this._addToTextureList(textures, light.texture);
            uniform.texture = light.texture;
          }
          if (light.shadow != null) {
            uniform.shadowAdjust = light.shadowAdjust;
            this._addToTextureList(textures, light.shadow);
            uniform.shadow = light.shadow;
          }
          if (light.enableCutOff) {
            uniform.cutoff    = light.cutoff;
            uniform.coneAngle = light.coneAngle;
          }
          if (light.enableAttenuation) {
            uniform.attenuation0 = light.attenuation0;
            uniform.attenuation1 = light.attenuation1;
            uniform.attenuation2 = light.attenuation2;
          }
        }

        for (Shaders.SpotLightConfig light in cfg.spotLights) {
          final int count = spotLightCounter[light.configID] ?? 0;
          this._shader.setSpotLightCount(light.configID, count);
        }
      }
    }

    if (cfg.bumpy.hasTxt2D) {
      this._addToTextureList(textures, this._bump.texture2D);
      this._shader.bumpTexture2D = this._bump.texture2D;
    } else if (cfg.bumpy.hasTxtCube) {
      this._addToTextureList(textures, this._bump.textureCube);
      this._shader.bumpTextureCube = this._bump.textureCube;
    }

    if (cfg.invViewMat)
      this._shader.inverseViewMatrix = state.inverseViewMatrix;

    if (cfg.enviromental) {
      this._addToTextureList(textures, this._envSampler);
      this._shader.environmentTextureCube = this._envSampler;

      if (cfg.reflection.hasSolid)
        this._shader.reflectionColor = this._reflect.color;
      if (cfg.reflection.hasTxt2D) {
        this._addToTextureList(textures, this._reflect.texture2D);
        this._shader.reflectionTexture2D = this._reflect.texture2D;
      } else if (cfg.reflection.hasTxtCube) {
        this._addToTextureList(textures, this._reflect.textureCube);
        this._shader.reflectionTextureCube = this._reflect.textureCube;
      }

      if (cfg.refraction.hasAny)
        this._shader.refraction = this._refract.deflection;
      if (cfg.refraction.hasSolid)
        this._shader.refractionColor = this._refract.color;
      if (cfg.refraction.hasTxt2D) {
        this._addToTextureList(textures, this._refract.texture2D);
        this._shader.refractionTexture2D = this._refract.texture2D;
      } else if (cfg.refraction.hasTxtCube) {
        this._addToTextureList(textures, this._refract.textureCube);
        this._shader.refractionTextureCube = this._refract.textureCube;
      }
    }

    if (cfg.fog) {
      this._shader.fogColor = this._fog._clr;
      this._shader.fogStop = this._fog.stop;
      this._shader.fogWidth = this._fog.start-this._fog.stop;
    }

    if (cfg.alpha.hasAny) {
      if (cfg.alpha.hasSolid)
        this._shader.alpha = this._alpha.value;
      if (cfg.alpha.hasTxt2D) {
        this._addToTextureList(textures, this._alpha.texture2D);
        this._shader.alphaTexture2D = this._alpha.texture2D;
      } else if (cfg.alpha.hasTxtCube) {
        this._addToTextureList(textures, this._alpha.textureCube);
        this._shader.alphaTextureCube = this._alpha.textureCube;
      }

      state.gl.enable(WebGL.WebGL.BLEND);
      state.gl.blendFunc(WebGL.WebGL.SRC_ALPHA, WebGL.WebGL.ONE_MINUS_SRC_ALPHA);
    }

    for (int i = 0; i < textures.length; i++) {
      textures[i].bind(state);
    }

    obj.cache as Data.BufferStore
        ..bind(state)
        ..render(state)
        ..unbind(state);

    if (cfg.alpha.hasAny)
      state.gl.disable(WebGL.WebGL.BLEND);

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
