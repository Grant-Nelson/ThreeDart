part of ThreeDart.Techniques;

/// The material/light rendering technique.
class MaterialLight extends Technique {
  Shaders.MaterialLight? _shader;
  Math.Matrix3? _txt2DMat;
  Math.Matrix4? _txtCubeMat;
  Math.Matrix4? _colorMat;
  Collections.Collection<Math.Matrix4> _bendMats;
  MaterialLightColorComponent? _emission;
  MaterialLightColorComponent? _ambient;
  MaterialLightColorComponent? _diffuse;
  MaterialLightColorComponent? _invDiffuse;
  MaterialLightSpecularComponent? _specular;
  MaterialLightBumpComponent? _bump;
  Textures.TextureCube? _envSampler;
  MaterialLightColorComponent? _reflect;
  MaterialLightRefractionComponent? _refract;
  MaterialLightAlphaComponent? _alpha;
  Lights.LightCollection? _lights;
  MaterialLightFogComponent? _fog;
  Events.Event? _changed;

  /// Creates a new material/light technique.
  MaterialLight():
    this._shader     = null,
    this._txt2DMat   = null,
    this._txtCubeMat = null,
    this._colorMat   = null,
    this._bendMats   = Collections.Collection<Math.Matrix4>(),
    this._emission   = null,
    this._ambient    = null,
    this._diffuse    = null,
    this._invDiffuse = null,
    this._specular   = null,
    this._bump       = null,
    this._envSampler = null,
    this._reflect    = null,
    this._refract    = null,
    this._alpha      = null,
    this._lights     = null,
    this._fog        = null,
    this._changed    = null {
    this._bendMats.setHandlers(
      onAddedHndl:   this._onBendMatsAdded,
      onRemovedHndl: this._onBendMatsRemoved);
    this._lights
      ?..changed.add(this._resetShader)
      ..lightChanged.add(this._onChanged);
  }

  /// Creates a new emission material with an optional colored glow.
  factory MaterialLight.glow({Math.Color3? color: null}) =>
    new MaterialLight()
      ..emission.color = color ?? new Math.Color3.white();

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

  /// Handles added matrices to the bend matrices.
  void _onBendMatsAdded(int index, Iterable<Math.Matrix4> mats) =>
    this._onChanged(new Events.ItemsAddedEventArgs(this, index, mats));

  /// Handles removed matrices from the bend matrices.
  void _onBendMatsRemoved(int index, Iterable<Math.Matrix4> mats) =>
    this._onChanged(new Events.ItemsRemovedEventArgs(this, index, mats));

  /// The lights to render with.
  Lights.LightCollection get lights =>
    this._lights ??= new Lights.LightCollection()
      ..changed.add(this._resetShader)
      ..lightChanged.add(this._onChanged);

  /// The 2D texture modification matrix.
  Math.Matrix3? get texture2DMatrix => this._txt2DMat;
  set texture2DMatrix(Math.Matrix3? mat) {
    if (this._txt2DMat != mat) {
      if (Math.xor(this._txt2DMat == null, mat == null)) this._shader = null;
      Math.Matrix3? prev = this._txt2DMat;
      this._txt2DMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'texture2DMatrix', prev, this._txt2DMat));
    }
  }

  /// The cube texture modification matrix.
  Math.Matrix4? get textureCubeMatrix => this._txtCubeMat;
  set textureCubeMatrix(Math.Matrix4? mat) {
    if (this._txtCubeMat != mat) {
      if (Math.xor(this._txtCubeMat == null, mat == null)) this._shader = null;
      Math.Matrix4? prev = this._txtCubeMat;
      this._txtCubeMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'textureCubeMatrix', prev, this._txtCubeMat));
    }
  }

  /// The color modification matrix.
  Math.Matrix4? get colorMatrix => this._colorMat;
  set colorMatrix(Math.Matrix4? mat) {
    if (this._colorMat != mat) {
      if (Math.xor(this._colorMat == null, mat == null)) this._shader = null;
      Math.Matrix4? prev = this._colorMat;
      this._colorMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'colorMatrix', prev, this._colorMat));
    }
  }

  /// The list of matrices for bending the shape by weights.
  Collections.Collection<Math.Matrix4> get bendMatrices => this._bendMats;

  /// The emission component of the material.
  MaterialLightColorComponent get emission =>
    this._emission ?? new MaterialLightColorComponent._(this, 'emission');

  /// The ambient component of the material.
  MaterialLightColorComponent get ambient =>
    this._ambient ?? new MaterialLightColorComponent._(this, 'ambient');

  /// The diffuse component of the material.
  MaterialLightColorComponent get diffuse =>
    this._diffuse ?? new MaterialLightColorComponent._(this, 'diffuse');

  /// The inverse diffuse (transmission) component of the material.
  MaterialLightColorComponent get invDiffuse =>
    this._invDiffuse ?? new MaterialLightColorComponent._(this, 'invDiffuse');

  /// The specular component of the material.
  MaterialLightSpecularComponent get specular =>
    this._specular ?? new MaterialLightSpecularComponent._(this, 'specular');

  /// The specular component of the material.
  MaterialLightBumpComponent get bump =>
    this._bump ?? new MaterialLightBumpComponent._(this, 'bump');

  /// The fog component of to render with.
  MaterialLightFogComponent get fog =>
    this._fog ?? new MaterialLightFogComponent._(this);

  /// The environment cube texture for reflective and refractive materials.
  Textures.TextureCube? get environment => this._envSampler;
  set environment(Textures.TextureCube? txt) {
    if (this._envSampler != txt) {
      this._envSampler?.changed.remove(this._onChanged);
      Textures.TextureCube? prev = this._envSampler;
      this._envSampler = txt;
      this._envSampler?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'environment', prev, this._envSampler));
    }
  }

  /// The reflection component of the material.
  MaterialLightColorComponent get reflection =>
    this._reflect ?? new MaterialLightColorComponent._(this, 'reflect');

  /// The refraction component of the material.
  MaterialLightRefractionComponent get refraction =>
    this._refract ?? new MaterialLightRefractionComponent._(this, 'refract');

  /// The alpha value or scalar on the alpha texture for the material.
  MaterialLightAlphaComponent get alpha =>
    this._alpha ?? new MaterialLightAlphaComponent._(this, 'alpha');

  /// Gets the vertex source code used for the shader used by this technique.
  String get vertexSourceCode => this._shader?.vertexSourceCode ?? '';

  /// Gets the fragment source code used for the shader used by this technique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode ?? '';

  /// Calculates a limit for the lights and other arrays for the shader from
  /// the current number of lights and lengths. This helps reduce and reuse
  /// shaders with similar number of attributes.
  int _lengthLimit(int count) => ((count + 3) ~/ 4) * 4;

  /// Creates the configuration for this shader.
  Shaders.MaterialLightConfig _config() {

    // Collect configuration for bar lights.
    Map<int, int> barLightCounter = new Map<int, int>();
    for (Lights.Bar light in this._lights?.barLights ?? [])
      barLightCounter[light.configID] = barLightCounter[light.configID]??0 + 1;
    List<Shaders.BarLightConfig> barLights = [];
    barLightCounter.forEach((int configID, int count) =>
      barLights.add(new Shaders.BarLightConfig(configID, this._lengthLimit(count))));
    barLights.sort((Shaders.BarLightConfig a, Shaders.BarLightConfig b) => a.configID.compareTo(b.configID));

    // Collect configuration for directional lights.
    Map<int, int> dirLightCounter = new Map<int, int>();
    for (Lights.Directional light in this._lights?.directionalLights ?? [])
      dirLightCounter[light.configID] = dirLightCounter[light.configID]??0 + 1;
    List<Shaders.DirectionalLightConfig> dirLights = [];
    dirLightCounter.forEach((int configID, int count) =>
      dirLights.add(new Shaders.DirectionalLightConfig(configID, this._lengthLimit(count))));
    dirLights.sort((Shaders.DirectionalLightConfig a, Shaders.DirectionalLightConfig b) => a.configID.compareTo(b.configID));

    // Collect configuration for point lights.
    Map<int, int> pointLightCounter = new Map<int, int>();
    for (Lights.Point light in this._lights?.pointLights ?? [])
      pointLightCounter[light.configID] = pointLightCounter[light.configID]??0 + 1;
    List<Shaders.PointLightConfig> pointLights = [];
    pointLightCounter.forEach((int configID, int count) =>
      pointLights.add(new Shaders.PointLightConfig(configID, this._lengthLimit(count))));
    pointLights.sort((Shaders.PointLightConfig a, Shaders.PointLightConfig b) => a.configID.compareTo(b.configID));

    // Collect configuration for spot lights.
    Map<int, int> spotLightCounter = new Map<int, int>();
    for (Lights.Spot light in this._lights?.spotLights ?? [])
      spotLightCounter[light.configID] = spotLightCounter[light.configID]??0 + 1;
    List<Shaders.SpotLightConfig> spotLights = [];
    spotLightCounter.forEach((int configID, int count) =>
      spotLights.add(new Shaders.SpotLightConfig(configID, this._lengthLimit(count))));
    spotLights.sort((Shaders.SpotLightConfig a, Shaders.SpotLightConfig b) => a.configID.compareTo(b.configID));

    int bendMats = this._lengthLimit(this._bendMats.length);
    return new Shaders.MaterialLightConfig(
      this._txt2DMat != null, this._txtCubeMat != null, this._colorMat != null,
      this._fog?.enabled ?? false, bendMats,
      this._emission?.type ?? Shaders.ColorSourceType(),
      this._ambient?.type ?? Shaders.ColorSourceType(),
      this._diffuse?.type ?? Shaders.ColorSourceType(),
      this._invDiffuse?.type ?? Shaders.ColorSourceType(),
      this._specular?.type ?? Shaders.ColorSourceType(),
      this._bump?.type ?? Shaders.ColorSourceType(),
      this._reflect?.type ?? Shaders.ColorSourceType(),
      this._refract?.type ?? Shaders.ColorSourceType(),
      this._alpha?.type ?? Shaders.ColorSourceType(),
      barLights, dirLights, pointLights, spotLights);
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
    for (Lights.Light light in this._lights ?? [])
      light.update(state);
  }

  /// Renders the given [obj] with the current light and material for the given [state].
  void render(Core.RenderState state, Core.Entity obj) {
    var shader = this._shader;
    if (shader == null) {
      this._shader = shader = new Shaders.MaterialLight.cached(this._config(), state);
      obj.clearCache();
    }

    Shaders.MaterialLightConfig cfg = shader.configuration;
    Data.VertexType vertexType = cfg.vertexType;
    if (obj.cache is! Data.BufferStore) obj.clearCache();
    if (obj.cacheNeedsUpdate || (obj.cache as Data.BufferStore).vertexType != vertexType) {
      if (cfg.norm) obj.shapeBuilder?.calculateNormals();
      if (cfg.binm) obj.shapeBuilder?.calculateBinormals();
      if (cfg.txtCube) obj.shapeBuilder?.calculateCubeTextures();

      Data.BufferStore? cache = obj.shapeBuilder?.build(new Data.WebGLBufferBuilder(state.gl), vertexType);
      if (cache == null) return;
      cache.findAttribute(Data.VertexType.Pos)?.attr = shader.posAttr?.loc ?? 0;
      if (cfg.norm)    cache.findAttribute(Data.VertexType.Norm)?.attr    = shader.normAttr?.loc    ?? 1;
      if (cfg.binm)    cache.findAttribute(Data.VertexType.Binm)?.attr    = shader.binmAttr?.loc    ?? 2;
      if (cfg.txt2D)   cache.findAttribute(Data.VertexType.Txt2D)?.attr   = shader.txt2DAttr?.loc   ?? 3;
      if (cfg.txtCube) cache.findAttribute(Data.VertexType.TxtCube)?.attr = shader.txtCubeAttr?.loc ?? 4;
      if (cfg.bending) cache.findAttribute(Data.VertexType.Bending)?.attr = shader.bendAttr?.loc    ?? 5;
      obj.cache = cache;
    }

    List<Textures.Texture> textures = [];
    shader.bind(state);

    if (cfg.objMat)         shader.objectMatrix = state.object.matrix;
    if (cfg.viewObjMat)     shader.viewObjectMatrix = state.viewObjectMatrix;
    if (cfg.projViewObjMat) shader.projectViewObjectMatrix = state.projectionViewObjectMatrix;
    if (cfg.viewMat)        shader.viewMatrix = state.view.matrix;
    if (cfg.projViewMat)    shader.projectViewMatrix = state.projectionViewMatrix;

    if (cfg.txt2DMat)   shader.texture2DMatrix   = this._txt2DMat   ?? Math.Matrix3.identity;
    if (cfg.txtCubeMat) shader.textureCubeMatrix = this._txtCubeMat ?? Math.Matrix4.identity;
    if (cfg.colorMat)   shader.colorMatrix       = this._colorMat   ?? Math.Matrix4.identity;

    if (cfg.bendMats > 0) {
      int count = this._bendMats.length;
      shader.bendMatricesCount = count;
      for (int i = 0; i < count; ++i)  {
        shader.setBendMatrix(i, this._bendMats[i]);
      }
    }

    if (cfg.emission.hasSolid)
      shader.emissionColor = this._emission?.color ?? Math.Color3.black();
    if (cfg.emission.hasTxt2D) {
      this._addToTextureList(textures, this._emission?.texture2D);
      shader.emissionTexture2D = this._emission?.texture2D;
    } else if (cfg.emission.hasTxtCube) {
      this._addToTextureList(textures, this._emission?.textureCube);
      shader.emissionTextureCube = this._emission?.textureCube;
    }

    if (cfg.lights) {
      if (cfg.ambient.hasSolid)
        shader.ambientColor = this._ambient?.color ?? Math.Color3.black();
      if (cfg.ambient.hasTxt2D) {
        this._addToTextureList(textures, this._ambient?.texture2D);
        shader.ambientTexture2D = this._ambient?.texture2D;
      } else if (cfg.ambient.hasTxtCube) {
        this._addToTextureList(textures, this._ambient?.textureCube);
        shader.ambientTextureCube = this._ambient?.textureCube;
      }
      
      if (cfg.diffuse.hasSolid)
        shader.diffuseColor = this._diffuse?.color ?? Math.Color3.black();
      if (cfg.diffuse.hasTxt2D) {
        this._addToTextureList(textures, this._diffuse?.texture2D);
        shader.diffuseTexture2D = this._diffuse?.texture2D;
      } else if (cfg.diffuse.hasTxtCube) {
        this._addToTextureList(textures, this._diffuse?.textureCube);
        shader.diffuseTextureCube = this._diffuse?.textureCube;
      }
      
      if (cfg.invDiffuse.hasSolid)
        shader.invDiffuseColor = this._invDiffuse?.color ?? Math.Color3.black();
      if (cfg.invDiffuse.hasTxt2D) {
        this._addToTextureList(textures, this._invDiffuse?.texture2D);
        shader.invDiffuseTexture2D = this._invDiffuse?.texture2D;
      } else if (cfg.invDiffuse.hasTxtCube) {
        this._addToTextureList(textures, this._invDiffuse?.textureCube);
        shader.invDiffuseTextureCube = this._invDiffuse?.textureCube;
      }

      if (cfg.specular.hasAny)
        shader.shininess = this._specular?.shininess ?? 100.0;
      if (cfg.specular.hasSolid)
        shader.specularColor = this._specular?.color ?? Math.Color3.white();
      if (cfg.specular.hasTxt2D) {
        this._addToTextureList(textures, this._specular?.texture2D);
        shader.specularTexture2D = this._specular?.texture2D;
      } else if (cfg.specular.hasTxtCube) {
        this._addToTextureList(textures, this._specular?.textureCube);
        shader.specularTextureCube = this._specular?.textureCube;
      }

      if (cfg.barLights.length > 0) {
        Map<int, int> barLightCounter = new Map<int, int>();
        for (Lights.Bar light in this._lights?.barLights ?? []) {
          final int configID = light.configID;
          final int index = barLightCounter[configID] ?? 0;
          barLightCounter[configID] = index + 1;

          Shaders.UniformBarLight uniform = shader.getBarLight(configID)[index];
          uniform.startPoint = light.startMatrix.transPnt3(Math.Point3.zero);
          uniform.endPoint   = light.endMatrix.transPnt3(Math.Point3.zero);
          uniform.color = light.color ?? Math.Color3.white();
          if (light.enableAttenuation) {
            uniform.attenuation0 = light.attenuation0;
            uniform.attenuation1 = light.attenuation1;
            uniform.attenuation2 = light.attenuation2;
          }
        }

        for (Shaders.BarLightConfig light in cfg.barLights) {
          final int count = barLightCounter[light.configID] ?? 0;
          shader.setBarLightCount(light.configID, count);
        }
      }

      if (cfg.dirLights.length > 0) {
        Math.Matrix4 viewMat = state.view.matrix;
        Map<int, int> dirLightCounter = new Map<int, int>();
        for (Lights.Directional light in this._lights?.directionalLights ?? []) {
          final int configID = light.configID;
          final int index = dirLightCounter[configID] ?? 0;
          dirLightCounter[configID] = index + 1;

          Shaders.UniformDirectionalLight uniform = shader.getDirectionalLight(configID)[index];
          uniform.viewDir = viewMat.transVec3(light.direction).normal();
          uniform.color   = light.color ?? Math.Color3.white();
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
          shader.setDirectionalLightCount(light.configID, count);
        }
      }

      if (cfg.pointLights.length > 0) {
        Math.Matrix4 viewMat = state.view.matrix;
        Map<int, int> pointLightCounter = new Map<int, int>();
        for (Lights.Point light in this._lights?.pointLights ?? []) {
          final int configID = light.configID;
          final int index = pointLightCounter[configID] ?? 0;
          pointLightCounter[configID] = index + 1;

          Shaders.UniformPointLight uniform = shader.getPointLight(configID)[index];
          Math.Matrix4 viewObjMat = viewMat*light.matrix;
          uniform.point     = light.matrix.transPnt3(Math.Point3.zero);
          uniform.viewPoint = viewObjMat.transPnt3(Math.Point3.zero);
          uniform.color     = light.color ?? Math.Color3.white();
          if (light.texture != null || light.shadow != null)
            uniform.inverseViewRotationMatrix = new Math.Matrix3.fromMatrix4(viewObjMat.inverse());
          if (light.texture != null) {
            this._addToTextureList(textures, light.texture);
            uniform.texture = light.texture;
          }
          if (light.shadow != null) {
            uniform.shadowAdjust = light.shadowAdjust ?? Math.Vector4.zero;
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
          shader.setPointLightCount(light.configID, count);
        }
      }

      if (cfg.spotLights.length > 0) {
        Math.Matrix4 viewMat = state.view.matrix;
        Map<int, int> spotLightCounter = new Map<int, int>();
        for (Lights.Spot light in this._lights?.spotLights ?? []) {
          final int configID = light.configID;
          final int index = spotLightCounter[configID] ?? 0;
          spotLightCounter[configID] = index + 1;

          Shaders.UniformSpotLight uniform = shader.getSpotLight(configID)[index];
          uniform.objectPoint     = light.position;
          uniform.objectDirection = light.direction.normal();
          uniform.viewPoint       = viewMat.transPnt3(light.position);
          uniform.color           = light.color ?? Math.Color3.white();
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
            uniform.shadowAdjust = light.shadowAdjust ?? Math.Vector4.zero;
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
          shader.setSpotLightCount(light.configID, count);
        }
      }
    }

    if (cfg.bumpy.hasTxt2D) {
      this._addToTextureList(textures, this._bump?.texture2D);
      shader.bumpTexture2D = this._bump?.texture2D;
    } else if (cfg.bumpy.hasTxtCube) {
      this._addToTextureList(textures, this._bump?.textureCube);
      shader.bumpTextureCube = this._bump?.textureCube;
    }

    if (cfg.invViewMat)
      shader.inverseViewMatrix = state.inverseViewMatrix;

    if (cfg.environmental) {
      this._addToTextureList(textures, this._envSampler);
      shader.environmentTextureCube = this._envSampler;

      if (cfg.reflection.hasSolid)
        shader.reflectionColor = this._reflect?.color ?? Math.Color3.white();
      if (cfg.reflection.hasTxt2D) {
        this._addToTextureList(textures, this._reflect?.texture2D);
        shader.reflectionTexture2D = this._reflect?.texture2D;
      } else if (cfg.reflection.hasTxtCube) {
        this._addToTextureList(textures, this._reflect?.textureCube);
        shader.reflectionTextureCube = this._reflect?.textureCube;
      }

      if (cfg.refraction.hasAny)
        shader.refraction = this._refract?.deflection ?? 0.0;
      if (cfg.refraction.hasSolid)
        shader.refractionColor = this._refract?.color ?? Math.Color3.white();
      if (cfg.refraction.hasTxt2D) {
        this._addToTextureList(textures, this._refract?.texture2D);
        shader.refractionTexture2D = this._refract?.texture2D;
      } else if (cfg.refraction.hasTxtCube) {
        this._addToTextureList(textures, this._refract?.textureCube);
        shader.refractionTextureCube = this._refract?.textureCube;
      }
    }

    if (cfg.fog) {
      var fog = this._fog;
      if (fog != null) {
        shader.fogColor = fog.color ?? Math.Color4.white();
        shader.fogStop  = fog.stop;
        shader.fogWidth = fog.start-fog.stop;
      }
    }

    if (cfg.alpha.hasAny) {
      if (cfg.alpha.hasSolid)
        shader.alpha = this._alpha?.value ?? 1.0;
      if (cfg.alpha.hasTxt2D) {
        this._addToTextureList(textures, this._alpha?.texture2D);
        shader.alphaTexture2D = this._alpha?.texture2D;
      } else if (cfg.alpha.hasTxtCube) {
        this._addToTextureList(textures, this._alpha?.textureCube);
        shader.alphaTextureCube = this._alpha?.textureCube;
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
    shader.unbind(state);
  }

  /// The string for the technique
  String toString() {
    var shader = this._shader;
    if (shader != null) return shader.name;
    else return this._config().name;
  }
}
