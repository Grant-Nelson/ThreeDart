part of ThreeDart.Techniques;

/// The material/light rendering technique.
class MaterialLight extends Technique {
  Shaders.MaterialLight _shader;
  Math.Matrix3 _txt2DMat;
  Math.Matrix4 _txtCubeMat;
  Math.Matrix4 _colorMat;
  Core.Collection<Math.Matrix4> _bendMats;
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
  Core.Event _changed;

  /// Creates a new material/light technique.
  MaterialLight() {
    this._shader     = null;
    this._txt2DMat   = null;
    this._txtCubeMat = null;
    this._colorMat   = null;
    this._bendMats   = new Core.Collection<Math.Matrix4>();
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
    this._lights.changed.add(this._resetShader);
    this._lights.lightChanged.add(this._onChanged);
    this._changed = null;
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

  /// Resets the shader when a component has changed.
  void _resetShader([Core.EventArgs args = null]) {
    this._shader = null;
    this._onChanged(args);
  }

  /// Handles added matrices to the bend matrices.
  void _onBendMatsAdded(int index, Iterable<Math.Matrix4> mats) {
    this._onChanged(new Core.ItemsAddedEventArgs(this, index, mats));
  }

  /// Handles removed matrices from the bend matrices.
  void _onBendMatsRemoved(int index, Iterable<Math.Matrix4> mats) {
    this._onChanged(new Core.ItemsRemovedEventArgs(this, index, mats));
  }

  /// The lights to render with.
  Lights.LightCollection get lights => this._lights;

  /// The 2D texture modification matrix.
  Math.Matrix3 get texture2DMatrix => this._txt2DMat;
  set texture2DMatrix(Math.Matrix3 mat) {
    mat = mat ?? new Math.Matrix3.identity();
    if (this._txt2DMat != mat) {
      if (Math.xor(this._txt2DMat == null, mat == null)) this._shader = null;
      Math.Matrix3 prev = this._txt2DMat;
      this._txt2DMat = mat;
      this._onChanged(new Core.ValueChangedEventArgs(this, "texture2DMatrix", prev, this._txt2DMat));
    }
  }

  /// The cube texture modification matrix.
  Math.Matrix4 get textureCubeMatrix => this._txtCubeMat;
  set textureCubeMatrix(Math.Matrix4 mat) {
    mat = mat ?? new Math.Matrix4.identity();
    if (this._txtCubeMat != mat) {
      if (Math.xor(this._txtCubeMat == null, mat == null)) this._shader = null;
      Math.Matrix4 prev = this._txtCubeMat;
      this._txtCubeMat = mat;
      this._onChanged(new Core.ValueChangedEventArgs(this, "textureCubeMatrix", prev, this._txtCubeMat));
    }
  }

  /// The color modification matrix.
  Math.Matrix4 get colorMatrix => this._colorMat;
  set colorMatrix(Math.Matrix4 mat) {
    if (this._colorMat != mat) {
      if (Math.xor(this._colorMat == null, mat == null)) this._shader = null;
      Math.Matrix4 prev = this._colorMat;
      this._colorMat = mat;
      this._onChanged(new Core.ValueChangedEventArgs(this, "colorMatrix", prev, this._colorMat));
    }
  }

  /// The list of matrices for bending the shape by weights.
  Core.Collection<Math.Matrix4> get bendMatrices => this._bendMats;

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

  /// The environment cube texture for reflective and refractive materials.
  Textures.TextureCube get environment => this._envSampler;
  set environment(Textures.TextureCube txt) {
    if (this._envSampler != txt) {
      if (this._envSampler != null) this._envSampler.loadFinished.remove(this._onChanged);
      Textures.TextureCube prev = this._envSampler;
      this._envSampler = txt;
      if (this._envSampler != null) this._envSampler.loadFinished.add(this._onChanged);
      this._onChanged(new Core.ValueChangedEventArgs(this, "environment", prev, this._envSampler));
    }
  }

  /// The reflection component of the material.
  MaterialLightColorComponent get reflection => this._reflect;

  /// The refraction component of the material.
  MaterialLightRefractionComponent get refraction => this._refract;

  /// The alpha value or scalar on the alpha texture for the material.
  MaterialLightAlphaComponent get alpha => this._alpha;

  /// Calculates a limit for the lights and other arrays for the shader from
  /// the current number of lights and lengths. This helps reduce and reuse
  /// shaders with similar number of attributes.
  int _lengthLimit(int count) {
    return ((count + 3) ~/ 4) * 4;
  }

  /// Creates the configuration for this shader.
  Shaders.MaterialLightConfig _config() {
    int dirLight      = this._lengthLimit(this._lights.directionalLights.length);
    int pointLight    = this._lengthLimit(this._lights.pointLights.length);
    int spotLight     = this._lengthLimit(this._lights.spotLights.length);
    int txtDirLight   = this._lengthLimit(this._lights.texturedDirectionalLights.length);
    int txtPointLight = this._lengthLimit(this._lights.texturedPointLights.length);
    int txtSpotLight  = this._lengthLimit(this._lights.texturedSpotLights.length);
    int bendMats      = this._lengthLimit(this._bendMats.length);
    return new Shaders.MaterialLightConfig(
      this._txt2DMat != null, this._txtCubeMat != null, this._colorMat != null, bendMats,
      this._emission.type, this._ambient.type, this._diffuse.type, this._invDiffuse.type, this._specular.type,
      this._bump.type, this._reflect.type, this._refract.type, this._alpha.type,
      dirLight, pointLight, spotLight, txtDirLight, txtPointLight, txtSpotLight);
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
      if (cfg.norm) obj.shape.calculateNormals();
      if (cfg.binm) obj.shape.calculateBinormals();
      if (cfg.txtCube) obj.shape.calculateCubeTextures();

      Data.BufferStore cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl), vertexType);
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

    switch (cfg.emission) {
      case Shaders.ColorSourceType.None: break;
      case Shaders.ColorSourceType.Solid:
        this._shader.emissionColor = this._emission.color;
        break;
      case Shaders.ColorSourceType.Texture2D:
        this._addToTextureList(textures, this._emission.texture2D);
        this._shader.emissionTexture2D = this._emission.texture2D;
        this._shader.emissionColor     = this._emission.color;
        break;
      case Shaders.ColorSourceType.TextureCube:
        this._addToTextureList(textures, this._emission.textureCube);
        this._shader.emissionTextureCube = this._emission.textureCube;
        this._shader.emissionColor       = this._emission.color;
        break;
    }

    if (cfg.lights) {
      switch (cfg.ambient) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.ambientColor = this._ambient.color;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._ambient.texture2D);
          this._shader.ambientTexture2D = this._ambient.texture2D;
          this._shader.ambientColor     = this._ambient.color;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._ambient.textureCube);
          this._shader.ambientTextureCube = this._ambient.textureCube;
          this._shader.ambientColor       = this._ambient.color;
          break;
      }

      switch (cfg.diffuse) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.diffuseColor = this._diffuse.color;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._diffuse.texture2D);
          this._shader.diffuseTexture2D = this._diffuse.texture2D;
          this._shader.diffuseColor     = this._diffuse.color;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._diffuse.textureCube);
          this._shader.diffuseTextureCube = this._diffuse.textureCube;
          this._shader.diffuseColor       = this._diffuse.color;
          break;
      }

      switch (cfg.invDiffuse) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.invDiffuseColor = this._invDiffuse.color;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._invDiffuse.texture2D);
          this._shader.invDiffuseTexture2D = this._invDiffuse.texture2D;
          this._shader.invDiffuseColor     = this._invDiffuse.color;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._invDiffuse.textureCube);
          this._shader.invDiffuseTextureCube = this._invDiffuse.textureCube;
          this._shader.invDiffuseColor       = this._invDiffuse.color;
          break;
      }

      switch (cfg.specular) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.specularColor = this._specular.color;
          this._shader.shininess     = this._specular.shininess;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._specular.texture2D);
          this._shader.specularTexture2D = this._specular.texture2D;
          this._shader.specularColor     = this._specular.color;
          this._shader.shininess         = this._specular.shininess;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._specular.textureCube);
          this._shader.specularTextureCube = this._specular.textureCube;
          this._shader.specularColor       = this._specular.color;
          this._shader.shininess           = this._specular.shininess;
          break;
      }

      if (cfg.dirLight > 0) {
        int count = this._lights.directionalLights.length;
        this._shader.directionalLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        int index = 0;
        for (Lights.Directional light in this._lights.directionalLights) {
          Shaders.UniformDirectionalLight uniform = this._shader.directionalLights[index];
          uniform.viewDir = viewMat.transVec3(light.direction).normal();
          uniform.color   = light.color;
          index++;
        }
      }

      if (cfg.pointLight > 0) {
        int count = this._lights.pointLights.length;
        this._shader.pointLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        int index = 0;
        for (Lights.Point light in this._lights.pointLights) {
          Shaders.UniformPointLight uniform = this._shader.pointLights[index];
          uniform.point        = light.position;
          uniform.viewPoint    = viewMat.transPnt3(light.position);
          uniform.color        = light.color;
          uniform.attenuation0 = light.attenuation0;
          uniform.attenuation1 = light.attenuation1;
          uniform.attenuation2 = light.attenuation2;
          index++;
        }
      }

      if (cfg.spotLight > 0) {
        int count = this._lights.spotLights.length;
        this._shader.spotLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        int index = 0;
        for (Lights.Spot light in this._lights.spotLights) {
          Shaders.UniformSpotLight uniform = this._shader.spotLights[index];
          uniform.objectPoint     = light.position;
          uniform.objectDirection = light.direction.normal();
          uniform.viewPoint       = viewMat.transPnt3(light.position);
          uniform.color           = light.color;
          uniform.cutoff          = light.cutoff;
          uniform.coneAngle       = light.coneAngle;
          uniform.attenuation0    = light.attenuation0;
          uniform.attenuation1    = light.attenuation1;
          uniform.attenuation2    = light.attenuation2;
          index++;
        }
      }

      if (cfg.txtDirLight > 0) {
        int count = this._lights.texturedDirectionalLights.length;
        this._shader.texturedDirectionalLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        int index = 0;
        for (Lights.TexturedDirectional light in this._lights.texturedDirectionalLights) {
          Shaders.UniformTexturedDirectionalLight uniform = this._shader.texturedDirectionalLights[index];
          this._addToTextureList(textures, light.texture);
          uniform.objectDir   = light.direction;
          uniform.objectUp    = light.up;
          uniform.objectRight = light.right;
          uniform.viewDir     = viewMat.transVec3(light.direction).normal();
          uniform.color       = light.color;
          uniform.texture     = light.texture;
          index++;
        }
      }

      if (cfg.txtPointLight > 0) {
        int count = this._lights.texturedPointLights.length;
        this._shader.texturedPointLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        int index = 0;
        for (Lights.TexturedPoint light in this._lights.texturedPointLights) {
          Shaders.UniformTexturedPointLight uniform = this._shader.texturedPointLights[index];
          this._addToTextureList(textures, light.texture);
          Math.Matrix4 viewObjMat = viewMat*light.matrix;
          uniform.point        = light.matrix.transPnt3(new Math.Point3(0.0, 0.0, 0.0));
          uniform.viewPoint    = viewObjMat.transPnt3(new Math.Point3(0.0, 0.0, 0.0));
          uniform.inverseViewRotationMatrix = new Math.Matrix3.fromMatrix4(viewObjMat.inverse());
          uniform.color        = light.color;
          uniform.texture      = light.texture;
          uniform.attenuation0 = light.attenuation0;
          uniform.attenuation1 = light.attenuation1;
          uniform.attenuation2 = light.attenuation2;
          index++;
        }
      }

      if (cfg.txtSpotLight > 0) {
        int count = this._lights.texturedSpotLights.length;
        this._shader.texturedSpotLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        int index = 0;
        for (Lights.TexturedSpot light in this._lights.texturedSpotLights) {
          Shaders.UniformTexturedSpotLight uniform = this._shader.texturedSpotLights[index];
          this._addToTextureList(textures, light.texture);
          uniform.objectPoint     = light.position;
          uniform.objectDirection = light.direction;
          uniform.objectUp        = light.up;
          uniform.objectRight     = light.right;
          uniform.viewPoint       = viewMat.transPnt3(light.position);
          uniform.texture         = light.texture;
          uniform.color           = light.color;
          uniform.tuScalar        = light.tuScalar;
          uniform.tvScalar        = light.tvScalar;
          uniform.attenuation0    = light.attenuation0;
          uniform.attenuation1    = light.attenuation1;
          uniform.attenuation2    = light.attenuation2;
          index++;
        }
      }
    }

    switch (cfg.bumpy) {
      case Shaders.ColorSourceType.None: break;
      case Shaders.ColorSourceType.Solid: break;
      case Shaders.ColorSourceType.Texture2D:
        this._addToTextureList(textures, this._bump.texture2D);
        this._shader.bumpTexture2D = this._bump.texture2D;
        break;
      case Shaders.ColorSourceType.TextureCube:
        this._addToTextureList(textures, this._bump.textureCube);
        this._shader.bumpTextureCube = this._bump.textureCube;
        break;
    }

    if (cfg.invViewMat) {
      this._shader.inverseViewMatrix = state.inverseViewMatrix;
    }

    if (cfg.enviromental) {
      this._addToTextureList(textures, this._envSampler);
      this._shader.environmentTextureCube = this._envSampler;

      switch (cfg.reflection) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.reflectionColor = this._reflect.color;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._reflect.texture2D);
          this._shader.reflectionTexture2D = this._reflect.texture2D;
          this._shader.reflectionColor = this._reflect.color;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._reflect.textureCube);
          this._shader.reflectionTextureCube = this._reflect.textureCube;
          this._shader.reflectionColor = this._reflect.color;
          break;
      }

      switch (cfg.refraction) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.refractionColor = this._refract.color;
          this._shader.refraction = this._refract.deflection;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._refract.texture2D);
          this._shader.refractionTexture2D = this._refract.texture2D;
          this._shader.refractionColor = this._refract.color;
          this._shader.refraction = this._refract.deflection;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._refract.textureCube);
          this._shader.refractionTextureCube = this._refract.textureCube;
          this._shader.refractionColor = this._refract.color;
          this._shader.refraction = this._refract.deflection;
          break;
      }
    }

    if (cfg.alpha != Shaders.ColorSourceType.None) {
      switch (cfg.alpha) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.alpha = this._alpha.value;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._alpha.texture2D);
          this._shader.alphaTexture2D = this._alpha.texture2D;
          this._shader.alpha = this._alpha.value;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._alpha.textureCube);
          this._shader.alphaTextureCube = this._alpha.textureCube;
          this._shader.alpha = this._alpha.value;
          break;
      }
      state.gl.enable(WebGL.BLEND);
      state.gl.blendFunc(WebGL.SRC_ALPHA, WebGL.ONE_MINUS_SRC_ALPHA);
    }

    for (int i = 0; i < textures.length; i++) {
      textures[i].bind(state);
    }

    obj.cache as Data.BufferStore
        ..bind(state)
        ..render(state)
        ..unbind(state);

    if (cfg.alpha != Shaders.ColorSourceType.None) {
      state.gl.disable(WebGL.BLEND);
    }

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
