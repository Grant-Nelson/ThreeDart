part of ThreeDart.Shaders;

/// A shader for rendering solid color light.
class MaterialLight extends Shader {

  MaterialLightConfig _cfg;

  Attribute _posAttr;
  Attribute _binmAttr;
  Attribute _normAttr;
  Attribute _txt2DAttr;
  Attribute _txtCubeAttr;

  UniformMat4 _viewObjMat;
  UniformMat4 _viewMat;
  UniformMat4 _projViewObjMat;
  UniformMat4 _invViewMat;

  Uniform3f _lightVec;
  Uniform3f _lightClr;

  Uniform3f _emissionClr;
  UniformSampler2D _emission2D;
  UniformSamplerCube _emissionCube;
  Uniform1i _nullEmissionTxt;

  Uniform3f _ambientClr;
  UniformSampler2D _ambient2D;
  UniformSamplerCube _ambientCube;
  Uniform1i _nullAmbientTxt;

  Uniform3f _diffuseClr;
  UniformSampler2D _diffuse2D;
  UniformSamplerCube _diffuseCube;
  Uniform1i _nullDiffuseTxt;

  Uniform3f _specularClr;
  UniformSampler2D _specular2D;
  UniformSamplerCube _specularCube;
  Uniform1i _nullSpecularTxt;
  Uniform1f _shininess;

  UniformSampler2D _bump2D;
  UniformSamplerCube _bumpCube;
  Uniform1i _nullBumpTxt;

  UniformSamplerCube _envSampler;
  Uniform1i _nullEnvTxt;

  Uniform3f _reflectClr;
  UniformSampler2D _reflect2D;
  UniformSamplerCube _reflectCube;
  Uniform1i _nullReflectTxt;

  Uniform1f _refraction;
  Uniform3f _refractClr;
  UniformSampler2D _refract2D;
  UniformSamplerCube _refractCube;
  Uniform1i _nullRefractTxt;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory MaterialLight.cached(MaterialLightConfig cfg, Core.RenderState state) {
    MaterialLight shader = state.shader(cfg.name);
    if (shader == null) {
      shader = new MaterialLight(cfg, state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  MaterialLight(MaterialLightConfig cfg,  WebGL.RenderingContext gl): super(gl, cfg.name) {
    this._cfg = cfg;
    String vertexSource = this._cfg.createVertexSource();
    String fragmentSource = this._cfg.createFragmentSource();

    print(this._cfg.toString());
    print(vertexSource);
    print(fragmentSource);

    this.initialize(vertexSource, fragmentSource);
    this._posAttr     = this.attributes["posAttr"];
    this._normAttr    = this.attributes["normAttr"];
    this._binmAttr    = this.attributes["binmAttr"];
    this._txt2DAttr   = this.attributes["txt2DAttr"];
    this._txtCubeAttr = this.attributes["txtCubeAttr"];

    if (cfg._viewObjMat)  this._viewObjMat = this.uniforms.required("viewObjMat") as UniformMat4;
    if (cfg._viewMat)     this._viewMat    = this.uniforms.required("viewMat") as UniformMat4;
    if (cfg.enviromental) this._invViewMat = this.uniforms.required("invViewMat") as UniformMat4;
    this._projViewObjMat = this.uniforms.required("projViewObjMat") as UniformMat4;

    if (cfg.lights) {
      this._lightVec = this.uniforms.required("lightVec") as Uniform3f;
      this._lightClr = this.uniforms.required("lightClr") as Uniform3f;
    }

    if (cfg.emission != MaterialComponentType.None) {
      this._emissionClr = this.uniforms.required("emissionClr") as Uniform3f;
      switch (cfg.emission) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid: break;
        case MaterialComponentType.Texture2D:
          this._emission2D = this.uniforms.required("emissionTxt") as UniformSampler2D;
          this._nullEmissionTxt = this.uniforms.required("nullEmissionTxt") as Uniform1i;
          break;
        case MaterialComponentType.TextureCube:
          this._emissionCube = this.uniforms.required("emissionTxt") as UniformSamplerCube;
          this._nullEmissionTxt = this.uniforms.required("nullEmissionTxt") as Uniform1i;
          break;
      }
    }

    if (cfg.ambient != MaterialComponentType.None) {
      this._ambientClr = this.uniforms.required("ambientClr") as Uniform3f;
      switch (cfg.ambient) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid: break;
        case MaterialComponentType.Texture2D:
          this._ambient2D = this.uniforms.required("ambientTxt") as UniformSampler2D;
          this._nullAmbientTxt = this.uniforms.required("nullAmbientTxt") as Uniform1i;
          break;
        case MaterialComponentType.TextureCube:
          this._ambientCube = this.uniforms.required("ambientTxt") as UniformSamplerCube;
          this._nullAmbientTxt = this.uniforms.required("nullAmbientTxt") as Uniform1i;
          break;
      }
    }

    if (cfg.diffuse != MaterialComponentType.None) {
      this._diffuseClr = this.uniforms.required("diffuseClr") as Uniform3f;
      switch (cfg.diffuse) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid: break;
        case MaterialComponentType.Texture2D:
          this._diffuse2D = this.uniforms.required("diffuseTxt") as UniformSampler2D;
          this._nullDiffuseTxt = this.uniforms.required("nullDiffuseTxt") as Uniform1i;
          break;
        case MaterialComponentType.TextureCube:
          this._diffuseCube = this.uniforms.required("diffuseTxt") as UniformSamplerCube;
          this._nullDiffuseTxt = this.uniforms.required("nullDiffuseTxt") as Uniform1i;
          break;
      }
    }

    if (cfg.specular != MaterialComponentType.None) {
        this._shininess = this.uniforms.required("shininess") as Uniform1f;
        this._specularClr = this.uniforms.required("specularClr") as Uniform3f;
      switch (cfg.specular) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid: break;
        case MaterialComponentType.Texture2D:
          this._specular2D = this.uniforms.required("specularTxt") as UniformSampler2D;
          this._nullSpecularTxt = this.uniforms.required("nullSpecularTxt") as Uniform1i;
          break;
        case MaterialComponentType.TextureCube:
          this._specularCube = this.uniforms.required("specularTxt") as UniformSamplerCube;
          this._nullSpecularTxt = this.uniforms.required("nullSpecularTxt") as Uniform1i;
          break;
      }
    }

    switch (cfg.bumpy) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid: break;
      case MaterialComponentType.Texture2D:
        this._bump2D = this.uniforms.required("bumpTxt") as UniformSampler2D;
        this._nullBumpTxt = this.uniforms.required("nullBumpTxt") as Uniform1i;
        break;
      case MaterialComponentType.TextureCube:
        this._bumpCube = this.uniforms.required("bumpTxt") as UniformSamplerCube;
        this._nullBumpTxt = this.uniforms.required("nullBumpTxt") as Uniform1i;
        break;
    }

    if (cfg.enviromental) {
      this._envSampler = this.uniforms.required("envSampler") as UniformSamplerCube;
      this._nullEnvTxt = this.uniforms.required("nullEnvTxt") as Uniform1i;

      if (cfg.reflection != MaterialComponentType.None) {
        this._reflectClr = this.uniforms.required("reflectClr") as Uniform3f;
        switch (cfg.reflection) {
          case MaterialComponentType.None: break;
          case MaterialComponentType.Solid: break;
          case MaterialComponentType.Texture2D:
            this._reflect2D = this.uniforms.required("reflectTxt") as UniformSampler2D;
            this._nullReflectTxt = this.uniforms.required("nullReflectTxt") as Uniform1i;
            break;
          case MaterialComponentType.TextureCube:
            this._reflectCube = this.uniforms.required("reflectTxt") as UniformSamplerCube;
            this._nullReflectTxt = this.uniforms.required("nullReflectTxt") as Uniform1i;
            break;
        }
      }

      if (cfg.refraction != MaterialComponentType.None) {
        this._refraction = this.uniforms.required("refraction") as Uniform1f;
        this._refractClr = this.uniforms.required("refractClr") as Uniform3f;
        switch (cfg.refraction) {
          case MaterialComponentType.None: break;
          case MaterialComponentType.Solid: break;
          case MaterialComponentType.Texture2D:
            this._refract2D = this.uniforms.required("refractTxt") as UniformSampler2D;
            this._nullRefractTxt = this.uniforms.required("nullRefractTxt") as Uniform1i;
            break;
          case MaterialComponentType.TextureCube:
            this._refractCube = this.uniforms.required("refractTxt") as UniformSamplerCube;
            this._nullRefractTxt = this.uniforms.required("nullRefractTxt") as Uniform1i;
            break;
        }
      }
    }
  }

  /// Sets the tcxture 2D and null texture indicator for the shader.
  void _setTexture2D(UniformSampler2D txt2D, Uniform1i nullTxt, Textures.Texture2D txt) {
    if ((txt == null) || !txt.loaded) {
      nullTxt.setValue(1);
    } else {
      txt2D.setTexture2D(txt);
      nullTxt.setValue(0);
    }
  }

  /// Sets the tcxture cube and null texture indicator for the shader.
  void _setTextureCube(UniformSamplerCube txtCube, Uniform1i nullTxt, Textures.TextureCube txt) {
    if ((txt == null) || !txt.loaded) {
      nullTxt.setValue(1);
    } else {
      txtCube.setTextureCube(txt);
      nullTxt.setValue(0);
    }
  }

  /// The configuration the shader is built for.
  MaterialLightConfig get configuration => this._cfg;

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The normal vertex shader attribute.
  Attribute get normAttr => this._normAttr;

  /// The binormal vertex shader attribute.
  Attribute get binmAttr => this._binmAttr;

  /// The texture 2D vertex shader attribute.
  Attribute get txt2DAttr => this._txt2DAttr;

  /// The texture Cube vertex shader attribute.
  Attribute get txtCubeAttr => this._txtCubeAttr;

  /// The view matrix multiplied by the object matrix.
  Math.Matrix4 get viewObjectMatrix => this._viewObjMat.getMatrix4();
  set viewObjectMatrix(Math.Matrix4 mat) => this._viewObjMat.setMatrix4(mat);

  /// The view matrix.
  Math.Matrix4 get viewMatrix => this._viewMat.getMatrix4();
  set viewMatrix(Math.Matrix4 mat) => this._viewMat.setMatrix4(mat);

  /// The product of the projection matrix, view matrix, and object matrix.
  Math.Matrix4 get projectViewObjectMatrix => this._projViewObjMat.getMatrix4();
  set projectViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMat.setMatrix4(mat);

  /// The inverse view matrix.
  Math.Matrix4 get inverseViewMatrix => this._invViewMat.getMatrix4();
  set inverseViewMatrix(Math.Matrix4 mat) => this._invViewMat.setMatrix4(mat);

  /// The direction the light is pointing.
  Math.Vector3 get lightVector => this._lightVec.getVector3();
  set lightVector(Math.Vector3 vec) => this._lightVec.setVector3(vec);

  /// The color of the light.
  Math.Color3 get lightColor => this._lightClr.getColor3();
  set lightColor(Math.Color3 clr) => this._lightClr.setColor3(clr);

  /// Sets the directional light's vector and color.
  void setLight(Lights.Directional light) {
    this.lightVector = light.direction;
    this.lightColor = light.color;
  }

  /// The emission color scalar of the object.
  Math.Color3 get emissionColor => this._emissionClr.getColor3();
  set emissionColor(Math.Color3 clr) => this._emissionClr.setColor3(clr);

  /// The emission texture 2D of the object.
  set emissionTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._emission2D, this._nullEmissionTxt, txt);

  /// The emission texture cube of the object.
  set emissionTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._emissionCube, this._nullEmissionTxt, txt);

  /// The ambient color scalar of the object.
  Math.Color3 get ambientColor => this._ambientClr.getColor3();
  set ambientColor(Math.Color3 clr) => this._ambientClr.setColor3(clr);

  /// The ambient texture 2D of the object.
  set ambientTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._ambient2D, this._nullAmbientTxt, txt);

  /// The ambient texture cube of the object.
  set ambientTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._ambientCube, this._nullAmbientTxt, txt);

  /// The diffuse color scalar of the object.
  Math.Color3 get diffuseColor => this._diffuseClr.getColor3();
  set diffuseColor(Math.Color3 clr) => this._diffuseClr.setColor3(clr);

  /// The diffuse texture 2D of the object.
  set diffuseTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._diffuse2D, this._nullDiffuseTxt, txt);

  /// The diffuse texture cube of the object.
  set diffuseTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._diffuseCube, this._nullDiffuseTxt, txt);

  /// The specular color scalar of the object.
  Math.Color3 get specularColor => this._specularClr.getColor3();
  set specularColor(Math.Color3 clr) => this._specularClr.setColor3(clr);

  /// The specular texture 2D of the object.
  set specularTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._specular2D, this._nullSpecularTxt, txt);

  /// The specular texture cube of the object.
  set specularTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._specularCube, this._nullSpecularTxt, txt);

  /// The shininess value of the specualr.
  double get shininess => this._shininess.getValue();
  set shininess(double value) => this._shininess.setValue(value);

  /// The normal distortion texture 2D of the object.
  set bumpTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._bump2D, this._nullBumpTxt, txt);

  /// The normal distortion texture cube of the object.
  set bumpTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._bumpCube, this._nullBumpTxt, txt);

  /// The environment texture cube of the object.
  set environmentTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._envSampler, this._nullEnvTxt, txt);

  /// The refraction value of the specualr.
  double get refraction => this._refraction.getValue();
  set refraction(double value) => this._refraction.setValue(value);

  /// The reflection color scalar of the object.
  Math.Color3 get reflectionColor => this._reflectClr.getColor3();
  set reflectionColor(Math.Color3 clr) => this._reflectClr.setColor3(clr);

  /// The reflection texture 2D scalar of the object.
  set reflectionTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._reflect2D, this._nullReflectTxt, txt);

  /// The reflection texture cube scalar of the object.
  set reflectionTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._reflectCube, this._nullReflectTxt, txt);

  /// The refraction color scalar of the object.
  Math.Color3 get refractionColor => this._refractClr.getColor3();
  set refractionColor(Math.Color3 clr) => this._refractClr.setColor3(clr);

  /// The refraction texture 2D scalar of the object.
  set refractionTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._refract2D, this._nullRefractTxt, txt);

  /// The refraction texture cube scalar of the object.
  set refractionTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._refractCube, this._nullRefractTxt, txt);
}
