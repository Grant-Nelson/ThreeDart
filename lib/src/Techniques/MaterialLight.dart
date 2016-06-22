part of ThreeDart.Techniques;

/// The material/light rendering technique.
class MaterialLight extends Technique {
  Shaders.MaterialLight _shader;

  Math.Matrix3 _txt2DMat;
  Math.Matrix4 _txtCubeMat;
  Math.Matrix4 _colorMat;

  Shaders.ColorSourceType _emissionType;
  Math.Color3 _emissionClr;
  Textures.Texture2D _emission2D;
  Textures.TextureCube _emissionCube;

  Shaders.ColorSourceType _ambientType;
  Math.Color3 _ambientClr;
  Textures.Texture2D _ambient2D;
  Textures.TextureCube _ambientCube;

  Shaders.ColorSourceType _diffuseType;
  Math.Color3 _diffuseClr;
  Textures.Texture2D _diffuse2D;
  Textures.TextureCube _diffuseCube;

  Shaders.ColorSourceType _invDiffuseType;
  Math.Color3 _invDiffuseClr;
  Textures.Texture2D _invDiffuse2D;
  Textures.TextureCube _invDiffuseCube;

  Shaders.ColorSourceType _specularType;
  double _shininess;
  Math.Color3 _specularClr;
  Textures.Texture2D _specular2D;
  Textures.TextureCube _specularCube;

  Shaders.ColorSourceType _bumpyType;
  Textures.Texture2D _bump2D;
  Textures.TextureCube _bumpCube;

  Textures.TextureCube _envSampler;
  Shaders.ColorSourceType _reflectionType;
  Math.Color3 _reflectClr;
  Textures.Texture2D _reflect2D;
  Textures.TextureCube _reflectCube;

  Shaders.ColorSourceType _refractionType;
  double _refraction;
  Math.Color3 _refractClr;
  Textures.Texture2D _refract2D;
  Textures.TextureCube _refractCube;

  Shaders.ColorSourceType _alphaType;
  double _alpha;
  Textures.Texture2D _alpha2D;
  Textures.TextureCube _alphaCube;

  LightCollection _lights;

  /// Creates a new material/light technique.
  MaterialLight() {
    this._shader = null;
    this._txt2DMat = new Math.Matrix3.identity();
    this._txtCubeMat = new Math.Matrix4.identity();
    this._colorMat = new Math.Matrix4.identity();
    this.clearEmission();
    this.clearAmbient();
    this.clearDiffuse();
    this.clearInvDiffuse();
    this.clearSpecular();
    this.clearBump();
    this.clearReflection();
    this.clearRefraction();
    this.clearAlpha();
    this._lights = new LightCollection._(this);
  }

  /// The lights to render with.
  LightCollection get lights => this._lights;

  /// The 2D texture modification matrix.
  Math.Matrix3 get texture2DMatrix => this._txt2DMat;
  set texture2DMatrix(Math.Matrix3 mat) =>
    this._txt2DMat = (mat == null)? new Math.Matrix3.identity(): mat;

  /// The cube texture modification matrix.
  Math.Matrix4 get textureCubeMatrix => this._txtCubeMat;
  set textureCubeMatrix(Math.Matrix4 mat) =>
    this._txtCubeMat = (mat == null)? new Math.Matrix4.identity(): mat;

  /// The color modification matrix.
  Math.Matrix4 get colorMatrix => this._colorMat;
  set colorMatrix(Math.Matrix4 mat) =>
    this._colorMat = (mat == null)? new Math.Matrix4.identity(): mat;

  /// Removes any emission from the material.
  void clearEmission() {
    if (this._emissionType != Shaders.ColorSourceType.None) {
      this._shader = null;
      this._emissionType = Shaders.ColorSourceType.None;
    }
    this._emissionClr = new Math.Color3.black();
    this._emission2D = null;
    this._emissionCube = null;
  }

  /// The emission color or scalar on the emission texture for the material.
  Math.Color3 get emissionColor => this._emissionClr;
  set emissionColor(Math.Color3 clr) {
    if (clr == null) this.clearEmission();
    else if (this._emissionType == Shaders.ColorSourceType.None) {
      this._emissionType = Shaders.ColorSourceType.Solid;
      this._shader = null;
    }
    this._emissionClr = clr;
  }

  /// The 2D emission texture for the material.
  Textures.Texture2D get emissionTexture2D => this._emission2D;
  set emissionTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._emissionType == Shaders.ColorSourceType.Texture2D) {
        this._shader = null;
        this._emissionType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._emissionType != Shaders.ColorSourceType.Texture2D) {
      if (this._emissionType == Shaders.ColorSourceType.None)
        this._emissionClr = new Math.Color3.white();
      this._emissionType = Shaders.ColorSourceType.Texture2D;
      this._emissionCube = null;
      this._shader = null;
    }
    this._emission2D = txt;
  }

  /// The cube emission texture for the material.
  Textures.TextureCube get emissionTextureCube => this._emissionCube;
  set emissionTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._emissionType == Shaders.ColorSourceType.TextureCube) {
        this._shader = null;
        this._emissionType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._emissionType != Shaders.ColorSourceType.TextureCube) {
      if (this._emissionType == Shaders.ColorSourceType.None)
        this._emissionClr = new Math.Color3.white();
      this._emissionType = Shaders.ColorSourceType.TextureCube;
      this._emission2D = null;
      this._shader = null;
    }
    this._emissionCube = txt;
  }

  /// Removes any ambient from the material.
  void clearAmbient() {
    if (this._ambientType != Shaders.ColorSourceType.None) {
      this._shader = null;
      this._ambientType = Shaders.ColorSourceType.None;
    }
    this._ambientClr = new Math.Color3.black();
    this._ambient2D = null;
    this._ambientCube = null;
  }

  /// The ambient color or scalar on the ambient texture for the material.
  Math.Color3 get ambientColor => this._ambientClr;
  set ambientColor(Math.Color3 clr) {
    if (clr == null) this.clearAmbient();
    else if (this._ambientType == Shaders.ColorSourceType.None) {
      this._ambientType = Shaders.ColorSourceType.Solid;
      this._shader = null;
    }
    this._ambientClr = clr;
  }

  /// The 2D ambient texture for the material.
  Textures.Texture2D get ambientTexture2D => this._ambient2D;
  set ambientTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._ambientType == Shaders.ColorSourceType.Texture2D) {
        this._shader = null;
        this._ambientType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._ambientType != Shaders.ColorSourceType.Texture2D) {
      if (this._ambientType == Shaders.ColorSourceType.None)
        this._ambientClr = new Math.Color3.white();
      this._ambientType = Shaders.ColorSourceType.Texture2D;
      this._ambientCube = null;
      this._shader = null;
    }
    this._ambient2D = txt;
  }

  /// The cube ambient texture for the material.
  Textures.TextureCube get ambientTextureCube => this._ambientCube;
  set ambientTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._ambientType == Shaders.ColorSourceType.TextureCube) {
        this._shader = null;
        this._ambientType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._ambientType != Shaders.ColorSourceType.TextureCube) {
      if (this._ambientType == Shaders.ColorSourceType.None)
        this._ambientClr = new Math.Color3.white();
      this._ambientType = Shaders.ColorSourceType.TextureCube;
      this._ambient2D = null;
      this._shader = null;
    }
    this._ambientCube = txt;
  }

  /// Removes any diffuse from the material.
  void clearDiffuse() {
    if (this._diffuseType != Shaders.ColorSourceType.None) {
      this._shader = null;
      this._diffuseType = Shaders.ColorSourceType.None;
    }
    this._diffuseClr = new Math.Color3.black();
    this._diffuse2D = null;
    this._diffuseCube = null;
  }

  /// The diffuse color or scalar on the diffuse texture for the material.
  Math.Color3 get diffuseColor => this._diffuseClr;
  set diffuseColor(Math.Color3 clr) {
    if (clr == null) this.clearDiffuse();
    else if (this._diffuseType == Shaders.ColorSourceType.None) {
      this._diffuseType = Shaders.ColorSourceType.Solid;
      this._shader = null;
    }
    this._diffuseClr = clr;
  }

  /// The 2D diffuse texture for the material.
  Textures.Texture2D get diffuseTexture2D => this._diffuse2D;
  set diffuseTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._diffuseType == Shaders.ColorSourceType.Texture2D) {
        this._shader = null;
        this._diffuseType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._diffuseType != Shaders.ColorSourceType.Texture2D) {
      if (this._diffuseType == Shaders.ColorSourceType.None)
        this._diffuseClr = new Math.Color3.white();
      this._diffuseType = Shaders.ColorSourceType.Texture2D;
      this._diffuseCube = null;
      this._shader = null;
    }
    this._diffuse2D = txt;
  }

  /// The cube diffuse texture for the material.
  Textures.TextureCube get diffuseTextureCube => this._diffuseCube;
  set diffuseTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._diffuseType == Shaders.ColorSourceType.TextureCube) {
        this._shader = null;
        this._diffuseType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._diffuseType != Shaders.ColorSourceType.TextureCube) {
      if (this._diffuseType == Shaders.ColorSourceType.None)
        this._diffuseClr = new Math.Color3.white();
      this._diffuseType = Shaders.ColorSourceType.TextureCube;
      this._diffuse2D = null;
      this._shader = null;
    }
    this._diffuseCube = txt;
  }

  /// Removes any inverse diffuse from the material.
  void clearInvDiffuse() {
    if (this._invDiffuseType != Shaders.ColorSourceType.None) {
      this._shader = null;
      this._invDiffuseType = Shaders.ColorSourceType.None;
    }
    this._invDiffuseClr = new Math.Color3.black();
    this._invDiffuse2D = null;
    this._invDiffuseCube = null;
  }

  /// The inverse diffuse color or scalar on the inverse diffuse texture for the material.
  Math.Color3 get invDiffuseColor => this._invDiffuseClr;
  set invDiffuseColor(Math.Color3 clr) {
    if (clr == null) this.clearInvDiffuse();
    else if (this._invDiffuseType == Shaders.ColorSourceType.None) {
      this._invDiffuseType = Shaders.ColorSourceType.Solid;
      this._shader = null;
    }
    this._invDiffuseClr = clr;
  }

  /// The 2D inverse diffuse texture for the material.
  Textures.Texture2D get invDiffuseTexture2D => this._invDiffuse2D;
  set invDiffuseTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._invDiffuseType == Shaders.ColorSourceType.Texture2D) {
        this._shader = null;
        this._invDiffuseType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._invDiffuseType != Shaders.ColorSourceType.Texture2D) {
      if (this._invDiffuseType == Shaders.ColorSourceType.None)
        this._invDiffuseClr = new Math.Color3.white();
      this._invDiffuseType = Shaders.ColorSourceType.Texture2D;
      this._invDiffuseCube = null;
      this._shader = null;
    }
    this._invDiffuse2D = txt;
  }

  /// The cube inverse diffuse texture for the material.
  Textures.TextureCube get invDiffuseTextureCube => this._invDiffuseCube;
  set invDiffuseTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._invDiffuseType == Shaders.ColorSourceType.TextureCube) {
        this._shader = null;
        this._invDiffuseType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._invDiffuseType != Shaders.ColorSourceType.TextureCube) {
      if (this._invDiffuseType == Shaders.ColorSourceType.None)
        this._invDiffuseClr = new Math.Color3.white();
      this._invDiffuseType = Shaders.ColorSourceType.TextureCube;
      this._invDiffuse2D = null;
      this._shader = null;
    }
    this._invDiffuseCube = txt;
  }

  /// Removes any specular from the material.
  void clearSpecular() {
    if (this._specularType != Shaders.ColorSourceType.None) {
      this._shader = null;
      this._specularType = Shaders.ColorSourceType.None;
    }
    this._shininess = 100.0;
    this._specularClr = new Math.Color3.black();
    this._specular2D = null;
    this._specularCube = null;
  }

  /// The specular color or scalar on the specular texture for the material.
  double get shininess => this._shininess;
  set shininess(double value) {
    if (value <= 0.0) this.clearSpecular();
    else if (this._specularType == Shaders.ColorSourceType.None) {
      this._specularType = Shaders.ColorSourceType.Solid;
      this._specularClr = new Math.Color3.white();
      this._shader = null;
    }
    this._shininess = value;
  }

  /// The specular color or scalar on the specular texture for the material.
  Math.Color3 get specularColor => this._specularClr;
  set specularColor(Math.Color3 clr) {
    if (clr == null) this.clearSpecular();
    else if (this._specularType == Shaders.ColorSourceType.None) {
      this._shininess = 100.0;
      this._specularType = Shaders.ColorSourceType.Solid;
      this._shader = null;
    }
    this._specularClr = clr;
  }

  /// The 2D specular texture for the material.
  Textures.Texture2D get specularTexture2D => this._specular2D;
  set specularTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._specularType == Shaders.ColorSourceType.Texture2D) {
        this._shader = null;
        this._specularType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._specularType != Shaders.ColorSourceType.Texture2D) {
      if (this._specularType == Shaders.ColorSourceType.None) {
        this._shininess = 100.0;
        this._specularClr = new Math.Color3.white();
      }
      this._specularType = Shaders.ColorSourceType.Texture2D;
      this._specularCube = null;
      this._shader = null;
    }
    this._specular2D = txt;
  }

  /// The cube specular texture for the material.
  Textures.TextureCube get specularTextureCube => this._specularCube;
  set specularTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._specularType == Shaders.ColorSourceType.TextureCube) {
        this._shader = null;
        this._specularType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._specularType != Shaders.ColorSourceType.TextureCube) {
      if (this._specularType == Shaders.ColorSourceType.None) {
        this._shininess = 100.0;
        this._specularClr = new Math.Color3.white();
      }
      this._specularType = Shaders.ColorSourceType.TextureCube;
      this._specular2D = null;
      this._shader = null;
    }
    this._specularCube = txt;
  }

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

  /// The environment cube texture for reflective and refractive materials.
  Textures.TextureCube get environmentTexture => this._envSampler;
  set environmentTexture(Textures.TextureCube txt) {
    this._envSampler = txt;
  }

  /// Removes any reflection from the material.
  void clearReflection() {
    if (this._reflectionType != Shaders.ColorSourceType.None) {
      this._shader = null;
      this._reflectionType = Shaders.ColorSourceType.None;
    }
    this._reflectClr = new Math.Color3.black();
    this._reflect2D = null;
    this._reflectCube = null;
  }

  /// The reflection color or scalar on the reflection of the evironmental texture for the material.
  Math.Color3 get reflectionColor => this._reflectClr;
  set reflectionColor(Math.Color3 clr) {
    if (clr == null) this.clearReflection();
    else if (this._reflectionType == Shaders.ColorSourceType.None) {
      this._reflectionType = Shaders.ColorSourceType.Solid;
      this._shader = null;
    }
    this._reflectClr = clr;
  }

  /// The 2D reflection texture scalar for the material.
  Textures.Texture2D get reflectionTexture2D => this._reflect2D;
  set reflectionTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._reflectionType == Shaders.ColorSourceType.Texture2D) {
        this._shader = null;
        this._reflectionType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._reflectionType != Shaders.ColorSourceType.Texture2D) {
      if (this._reflectionType == Shaders.ColorSourceType.None)
        this._reflectClr = new Math.Color3.white();
      this._reflectionType = Shaders.ColorSourceType.Texture2D;
      this._reflectCube = null;
      this._shader = null;
    }
    this._reflect2D = txt;
  }

  /// The cube reflection texture scalar for the material.
  Textures.TextureCube get reflectionTextureCube => this._reflectCube;
  set reflectionTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._reflectionType == Shaders.ColorSourceType.TextureCube) {
        this._shader = null;
        this._reflectionType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._reflectionType != Shaders.ColorSourceType.TextureCube) {
      if (this._reflectionType == Shaders.ColorSourceType.None)
        this._reflectClr = new Math.Color3.white();
      this._reflectionType = Shaders.ColorSourceType.TextureCube;
      this._reflect2D = null;
      this._shader = null;
    }
    this._reflectCube = txt;
  }

  /// Clears the refraction of the material.
  void clearRefraction() {
    if (this._refractionType != Shaders.ColorSourceType.None) {
      this._shader = null;
      this._refractionType = Shaders.ColorSourceType.None;
    }
    this._refraction = 1.0;
    this._refractClr = new Math.Color3.black();
    this._refract2D = null;
    this._refractCube = null;
  }

  /// The refraction scalar for the distortion for the material.
  double get refraction => this._refraction;
  set refraction(double value) {
    if (value <= 0.0) this.clearRefraction();
    else if (this._refractionType == Shaders.ColorSourceType.None) {
      this._refractionType = Shaders.ColorSourceType.Solid;
      this._refractClr = new Math.Color3.white();
      this._shader = null;
    }
    this._refraction = value;
  }

  /// The refraction color or scalar on the refraction texture for the material.
  Math.Color3 get refractionColor => this._refractClr;
  set refractionColor(Math.Color3 clr) {
    if (clr == null) this.clearRefraction();
    else if (this._refractionType == Shaders.ColorSourceType.None) {
      this._refraction = 1.0;
      this._refractionType = Shaders.ColorSourceType.Solid;
      this._shader = null;
    }
    this._refractClr = clr;
  }

  /// The 2D refraction texture scalar for the material.
  Textures.Texture2D get refractionTexture2D => this._refract2D;
  set refractionTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._refractionType == Shaders.ColorSourceType.Texture2D) {
        this._shader = null;
        this._refractionType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._refractionType != Shaders.ColorSourceType.Texture2D) {
      if (this._refractionType == Shaders.ColorSourceType.None) {
        this._refraction = 1.0;
        this._refractClr = new Math.Color3.white();
      }
      this._refractionType = Shaders.ColorSourceType.Texture2D;
      this._refractCube = null;
      this._shader = null;
    }
    this._refract2D = txt;
  }

  /// The cube refraction texture scalar for the material.
  Textures.TextureCube get refractionTextureCube => this._refractCube;
  set refractionTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._refractionType == Shaders.ColorSourceType.TextureCube) {
        this._shader = null;
        this._refractionType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._refractionType != Shaders.ColorSourceType.TextureCube) {
      if (this._refractionType == Shaders.ColorSourceType.None) {
        this._refraction = 100.0;
        this._refractClr = new Math.Color3.white();
      }
      this._refractionType = Shaders.ColorSourceType.TextureCube;
      this._refract2D = null;
      this._shader = null;
    }
    this._refractCube = txt;
  }

  /// Removes any alpha from the material.
  void clearAlpha() {
    if (this._alphaType != Shaders.ColorSourceType.None) {
      this._shader = null;
      this._alphaType = Shaders.ColorSourceType.None;
    }
    this._alpha = 1.0;
    this._alpha2D = null;
    this._alphaCube = null;
  }

  /// The alpha value or scalar on the alpha texture for the material.
  double get alpha => this._alpha;
  set alpha(double alpha) {
    if (Math.Comparer.equals(alpha, 1.0)) this.clearAlpha();
    else if (this._alphaType == Shaders.ColorSourceType.None) {
      this._alphaType = Shaders.ColorSourceType.Solid;
      this._shader = null;
      this._alpha = Math.clampVal(alpha);
    }
  }

  /// The 2D alpha texture for the material.
  Textures.Texture2D get alphaTexture2D => this._alpha2D;
  set alphaTexture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._alphaType == Shaders.ColorSourceType.Texture2D) {
        this._shader = null;
        this._alphaType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._alphaType != Shaders.ColorSourceType.Texture2D) {
      if (this._alphaType == Shaders.ColorSourceType.None)
        this._alpha = 1.0;
      this._alphaType = Shaders.ColorSourceType.Texture2D;
      this._alphaCube = null;
      this._shader = null;
    }
    this._alpha2D = txt;
  }

  /// The cube alpha texture for the material.
  Textures.TextureCube get alphaTextureCube => this._alphaCube;
  set alphaTextureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._alphaType == Shaders.ColorSourceType.TextureCube) {
        this._shader = null;
        this._alphaType = Shaders.ColorSourceType.Solid;
      }
    } else if (this._alphaType != Shaders.ColorSourceType.TextureCube) {
      if (this._alphaType == Shaders.ColorSourceType.None)
        this._alpha = 1.0;
      this._alphaType = Shaders.ColorSourceType.TextureCube;
      this._alpha2D = null;
      this._shader = null;
    }
    this._alphaCube = txt;
  }

  /// Calculates a limit for the lights for the shader from the current number of lights.
  int _lightLimit(int count) {
    return ((count + 3) ~/ 4) * 4;
  }

  /// Creates the configuration for this shader.
  Shaders.MaterialLightConfig _config() {
    int dirLight      = this._lightLimit(this._lights._dirLights.length);
    int pointLight    = this._lightLimit(this._lights._pntLights.length);
    int spotLight     = this._lightLimit(this._lights._spotLights.length);
    int txtDirLight   = this._lightLimit(this._lights._txtDirLights.length);
    int txtPointLight = this._lightLimit(this._lights._txtPntLights.length);
    int txtSpotLight  = this._lightLimit(this._lights._txtSpotLights.length);
    return new Shaders.MaterialLightConfig(this._emissionType, this._ambientType,
      this._diffuseType, this._invDiffuseType, this._specularType, this._bumpyType,
      this._reflectionType, this._refractionType, this._alphaType,
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
    for (Lights.Light light in this._lights._allLights) {
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
      obj.cache = cache;
    }

    List<Textures.Texture> textures = new List<Textures.Texture>();
    this._shader.bind(state);

    if (cfg.objMat)     this._shader.objectMatrix = state.object.matrix;
    if (cfg.viewObjMat) this._shader.viewObjectMatrix = state.viewObjectMatrix;
    this._shader.projectViewObjectMatrix = state.projectionViewObjectMatrix;
    if (cfg.txt2D)   this._shader.texture2DMatrix = this._txt2DMat;
    if (cfg.txtCube) this._shader.textureCubeMatrix = this._txtCubeMat;
    this._shader.colorMatrix = this._colorMat;

    switch (cfg.emission) {
      case Shaders.ColorSourceType.None: break;
      case Shaders.ColorSourceType.Solid:
        this._shader.emissionColor = this._emissionClr;
        break;
      case Shaders.ColorSourceType.Texture2D:
        this._addToTextureList(textures, this._emission2D);
        this._shader.emissionTexture2D = this._emission2D;
        this._shader.emissionColor     = this._emissionClr;
        break;
      case Shaders.ColorSourceType.TextureCube:
        this._addToTextureList(textures, this._emissionCube);
        this._shader.emissionTextureCube = this._emissionCube;
        this._shader.emissionColor       = this._emissionClr;
        break;
    }

    if (cfg.lights) {
      switch (cfg.ambient) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.ambientColor = this._ambientClr;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._ambient2D);
          this._shader.ambientTexture2D = this._ambient2D;
          this._shader.ambientColor     = this._ambientClr;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._ambientCube);
          this._shader.ambientTextureCube = this._ambientCube;
          this._shader.ambientColor       = this._ambientClr;
          break;
      }

      switch (cfg.diffuse) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.diffuseColor = this._diffuseClr;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._diffuse2D);
          this._shader.diffuseTexture2D = this._diffuse2D;
          this._shader.diffuseColor     = this._diffuseClr;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._diffuseCube);
          this._shader.diffuseTextureCube = this._diffuseCube;
          this._shader.diffuseColor       = this._diffuseClr;
          break;
      }

      switch (cfg.invDiffuse) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.invDiffuseColor = this._invDiffuseClr;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._invDiffuse2D);
          this._shader.invDiffuseTexture2D = this._invDiffuse2D;
          this._shader.invDiffuseColor     = this._invDiffuseClr;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._invDiffuseCube);
          this._shader.invDiffuseTextureCube = this._invDiffuseCube;
          this._shader.invDiffuseColor       = this._invDiffuseClr;
          break;
      }

      switch (cfg.specular) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.specularColor = this._specularClr;
          this._shader.shininess     = this._shininess;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._specular2D);
          this._shader.specularTexture2D = this._specular2D;
          this._shader.specularColor     = this._specularClr;
          this._shader.shininess         = this._shininess;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._specularCube);
          this._shader.specularTextureCube = this._specularCube;
          this._shader.specularColor       = this._specularClr;
          this._shader.shininess           = this._shininess;
          break;
      }

      if (cfg.dirLight > 0) {
        int count = this._lights._dirLights.length;
        this._shader.directionalLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        for (int i = 0; i < count; ++i)  {
          Lights.Directional light = this._lights._dirLights[i];
          Shaders.UniformDirectionalLight uniform = this._shader.directionalLights[i];
          uniform.viewDir = viewMat.transVec3(light.direction).normal();
          uniform.color   = light.color;
        }
      }

      if (cfg.pointLight > 0) {
        int count = this._lights._pntLights.length;
        this._shader.pointLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        for (int i = 0; i < count; ++i)  {
          Lights.Point light = this._lights._pntLights[i];
          Shaders.UniformPointLight uniform = this._shader.pointLights[i];
          uniform.point        = light.position;
          uniform.viewPoint    = viewMat.transPnt3(light.position);
          uniform.color        = light.color;
          uniform.attenuation0 = light.attenuation0;
          uniform.attenuation1 = light.attenuation1;
          uniform.attenuation2 = light.attenuation2;
        }
      }

      if (cfg.spotLight > 0) {
        int count = this._lights._spotLights.length;
        this._shader.spotLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        for (int i = 0; i < count; ++i)  {
          Lights.Spot light = this._lights._spotLights[i];
          Shaders.UniformSpotLight uniform = this._shader.spotLights[i];
          uniform.objectPoint     = light.position;
          uniform.objectDirection = light.direction.normal();
          uniform.viewPoint       = viewMat.transPnt3(light.position);
          uniform.color           = light.color;
          uniform.cutoff          = light.cutoff;
          uniform.coneAngle       = light.coneAngle;
          uniform.attenuation0    = light.attenuation0;
          uniform.attenuation1    = light.attenuation1;
          uniform.attenuation2    = light.attenuation2;
        }
      }

      if (cfg.txtDirLight > 0) {
        int count = this._lights._txtDirLights.length;
        this._shader.texturedDirectionalLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        for (int i = 0; i < count; ++i)  {
          Lights.TexturedDirectional light = this._lights._txtDirLights[i];
          Shaders.UniformTexturedDirectionalLight uniform = this._shader.texturedDirectionalLights[i];
          this._addToTextureList(textures, light.texture);
          uniform.objectDir   = light.direction;
          uniform.objectUp    = light.up;
          uniform.objectRight = light.right;
          uniform.viewDir     = viewMat.transVec3(light.direction).normal();
          uniform.color       = light.color;
          uniform.texture     = light.texture;
        }
      }

      if (cfg.txtPointLight > 0) {
        int count = this._lights._txtPntLights.length;
        this._shader.texturedPointLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        for (int i = 0; i < count; ++i)  {
          Lights.TexturedPoint light = this._lights._txtPntLights[i];
          Shaders.UniformTexturedPointLight uniform = this._shader.texturedPointLights[i];
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
        }
      }

      if (cfg.txtSpotLight > 0) {
        int count = this._lights._txtSpotLights.length;
        this._shader.texturedSpotLightCount = count;
        Math.Matrix4 viewMat = state.view.matrix;
        for (int i = 0; i < count; ++i)  {
          Lights.TexturedSpot light = this._lights._txtSpotLights[i];
          Shaders.UniformTexturedSpotLight uniform = this._shader.texturedSpotLights[i];
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
        }
      }
    }

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

    if (cfg.invViewMat) {
      this._shader.inverseViewMatrix = state.inverseViewMatrix;
    }

    if (cfg.enviromental) {
      this._addToTextureList(textures, this._envSampler);
      this._shader.environmentTextureCube = this._envSampler;

      switch (cfg.reflection) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.reflectionColor = this._reflectClr;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._reflect2D);
          this._shader.reflectionTexture2D = this._reflect2D;
          this._shader.reflectionColor = this._reflectClr;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._reflectCube);
          this._shader.reflectionTextureCube = this._reflectCube;
          this._shader.reflectionColor = this._reflectClr;
          break;
      }

      switch (cfg.refraction) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.refractionColor = this._refractClr;
          this._shader.refraction = this._refraction;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._refract2D);
          this._shader.refractionTexture2D = this._refract2D;
          this._shader.refractionColor = this._refractClr;
          this._shader.refraction = this._refraction;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._refractCube);
          this._shader.refractionTextureCube = this._refractCube;
          this._shader.refractionColor = this._refractClr;
          this._shader.refraction = this._refraction;
          break;
      }
    }

    if (cfg.alpha != Shaders.ColorSourceType.None) {
      switch (cfg.alpha) {
        case Shaders.ColorSourceType.None: break;
        case Shaders.ColorSourceType.Solid:
          this._shader.alpha = this._alpha;
          break;
        case Shaders.ColorSourceType.Texture2D:
          this._addToTextureList(textures, this._alpha2D);
          this._shader.alphaTexture2D = this._alpha2D;
          this._shader.alpha = this._alpha;
          break;
        case Shaders.ColorSourceType.TextureCube:
          this._addToTextureList(textures, this._alphaCube);
          this._shader.alphaTextureCube = this._alphaCube;
          this._shader.alpha = this._alpha;
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
