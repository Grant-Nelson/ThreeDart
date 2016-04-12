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
  Uniform4f _lightClr;
  Uniform4f _emissionClr;
  UniformSampler2D _emission2D;
  UniformSamplerCube _emissionCube;
  Uniform4f _ambientClr;
  UniformSampler2D _ambient2D;
  UniformSamplerCube _ambientCube;
  Uniform4f _diffuseClr;
  UniformSampler2D _diffuse2D;
  UniformSamplerCube _diffuseCube;
  Uniform4f _specularClr;
  UniformSampler2D _specular2D;
  UniformSamplerCube _specularCube;
  Uniform1f _shininess;
  UniformSampler2D _bump2D;
  UniformSamplerCube _bumpCube;
  UniformSamplerCube _envSampler;
  Uniform1f _refraction;
  Uniform4f _reflectClr;
  Uniform4f _refractClr;

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
    this.initialize(this._cfg.createVertexSource(), this._cfg.createFragmentSource());
    this._posAttr     = this.attributes["posAttr"];
    this._normAttr    = this.attributes["normAttr"];
    this._binmAttr    = this.attributes["binmAttr"];
    this._txt2DAttr   = this.attributes["txt2DAttr"];
    this._txtCubeAttr = this.attributes["txtCubeAttr"];

    if (cfg._viewObjMat)  this._viewObjMat = this.uniforms["viewObjMat"] as UniformMat4;
    if (cfg._viewMat)     this._viewMat    = this.uniforms["viewMat"] as UniformMat4;
    if (cfg.enviromental) this._invViewMat = this.uniforms["invViewMat"] as UniformMat4;
    this._projViewObjMat = this.uniforms["projViewObjMat"] as UniformMat4;

    if (cfg.lights) {
      this._lightVec = this.uniforms["lightVec"] as Uniform3f;
      this._lightClr = this.uniforms["lightClr"] as Uniform4f;
    }

    if (cfg.emission != MaterialComponentType.None) {
      this._emissionClr = this.uniforms["emissionClr"] as Uniform4f;
      switch (cfg.emission) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid: break;
        case MaterialComponentType.Texture2D:
          this._emission2D = this.uniforms["emissionTxt"] as UniformSampler2D;
          break;
        case MaterialComponentType.TextureCube:
          this._emissionCube = this.uniforms["emissionTxt"] as UniformSamplerCube;
          break;
      }
    }

    if (cfg.ambient != MaterialComponentType.None) {
      this._ambientClr = this.uniforms["ambientClr"] as Uniform4f;
      switch (cfg.ambient) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid: break;
        case MaterialComponentType.Texture2D:
          this._ambient2D = this.uniforms["ambientTxt"] as UniformSampler2D;
          break;
        case MaterialComponentType.TextureCube:
          this._ambientCube = this.uniforms["ambientTxt"] as UniformSamplerCube;
          break;
      }
    }

    if (cfg.diffuse != MaterialComponentType.None) {
      this._diffuseClr = this.uniforms["diffusetClr"] as Uniform4f;
      switch (cfg.diffuse) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid: break;
        case MaterialComponentType.Texture2D:
          this._diffuse2D  = this.uniforms["diffuseTxt"] as UniformSampler2D;
          break;
        case MaterialComponentType.TextureCube:
          this._diffuseCube = this.uniforms["diffuseTxt"] as UniformSamplerCube;
          break;
      }
    }

    if (cfg.specular != MaterialComponentType.None) {
        this._shininess    = this.uniforms["shininess"] as Uniform1f;
        this._specularClr  = this.uniforms["specularClr"] as Uniform4f;
      switch (cfg.specular) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid: break;
        case MaterialComponentType.Texture2D:
        this._specular2D   = this.uniforms["specularTxt"] as UniformSampler2D;
          break;
        case MaterialComponentType.TextureCube:
        this._specularCube = this.uniforms["specularTxt"] as UniformSamplerCube;
          break;
      }
    }

    switch (cfg.bumpy) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid: break;
      case MaterialComponentType.Texture2D:
        this._bump2D = this.uniforms["bumpTxt"] as UniformSampler2D;
        break;
      case MaterialComponentType.TextureCube:
        this._bumpCube = this.uniforms["bumpTxt"] as UniformSamplerCube;
        break;
    }

    if (cfg.enviromental) {
      this._envSampler = this.uniforms["envSampler"] as UniformSamplerCube;
      if (cfg.reflection) {
          this._reflectClr = this.uniforms["reflectClr"] as Uniform4f;
      }
      if (cfg.refraction) {
        this._refraction = this.uniforms["refraction"] as Uniform1f;
        this._refractClr = this.uniforms["refractClr"] as Uniform4f;
      }
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
  Math.Color4 get lightColor => this._lightClr.getColor4();
  set lightColor(Math.Color4 clr) => this._lightClr.setColor4(clr);

  /// Sets the directional light's vector and color.
  void setLight(Lights.Directional light) {
    this.lightVector = light.direction;
    this.lightColor = light.color;
  }

  /// The emission color scalar of the object.
  Math.Color4 get emissionColor => this._emissionClr.getColor4();
  set emissionColor(Math.Color4 clr) => this._emissionClr.setColor4(clr);

  /// The emission texture 2D of the object.
  set emissionTexture2D(Textures.Texture2D txt) =>
    this._emission2D.setTexture2D(txt);

  /// The emission texture cube of the object.
  set emissionTextureCube(Textures.TextureCube txt) =>
    this._emissionCube.setTextureCube(txt);

  /// The ambient color scalar of the object.
  Math.Color4 get ambientColor => this._ambientClr.getColor4();
  set ambientColor(Math.Color4 clr) => this._ambientClr.setColor4(clr);

  /// The ambient texture 2D of the object.
  set ambientTexture2D(Textures.Texture2D txt) =>
    this._ambient2D.setTexture2D(txt);

  /// The ambient texture cube of the object.
  set ambientTextureCube(Textures.TextureCube txt) =>
    this._ambientCube.setTextureCube(txt);

  /// The diffuse color scalar of the object.
  Math.Color4 get diffuseColor => this._diffuseClr.getColor4();
  set diffuseColor(Math.Color4 clr) => this._diffuseClr.setColor4(clr);

  /// The diffuse texture 2D of the object.
  set diffuseTexture2D(Textures.Texture2D txt) =>
    this._diffuse2D.setTexture2D(txt);

  /// The diffuse texture cube of the object.
  set diffuseTextureCube(Textures.TextureCube txt) =>
    this._diffuseCube.setTextureCube(txt);

  /// The specular color scalar of the object.
  Math.Color4 get specularColor => this._specularClr.getColor4();
  set specularColor(Math.Color4 clr) => this._specularClr.setColor4(clr);

  /// The specular texture 2D of the object.
  set specularTexture2D(Textures.Texture2D txt) =>
    this._specular2D.setTexture2D(txt);

  /// The specular texture cube of the object.
  set specularTextureCube(Textures.TextureCube txt) =>
    this._specularCube.setTextureCube(txt);

  /// The shininess value of the specualr.
  double get shininess => this._shininess.getValue();
  set shininess(double value) => this._shininess.setValue(value);

  /// The normal distortion texture 2D of the object.
  set bumpTexture2D(Textures.Texture2D txt) =>
    this._bump2D.setTexture2D(txt);

  /// The normal distortion texture cube of the object.
  set bumpTextureCube(Textures.TextureCube txt) =>
    this._bumpCube.setTextureCube(txt);

  /// The environment texture cube of the object.
  set environmentTextureCube(Textures.TextureCube txt) =>
    this._envSampler.setTextureCube(txt);

  /// The refraction value of the specualr.
  double get refraction => this._refraction.getValue();
  set refraction(double value) => this._refraction.setValue(value);

  /// The reflection color scalar of the object.
  Math.Color4 get reflectionColor => this._reflectClr.getColor4();
  set reflectionColor(Math.Color4 clr) => this._reflectClr.setColor4(clr);

  /// The refraction color scalar of the object.
  Math.Color4 get refractionColor => this._refractClr.getColor4();
  set refractionColor(Math.Color4 clr) => this._refractClr.setColor4(clr);
}
