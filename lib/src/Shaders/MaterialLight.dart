part of ThreeDart.Shaders;

/// A shader for rendering solid color light.
class MaterialLight extends Shader {

  MaterialLightConfig _cfg;

  Attribute _posAttr;
  Attribute _binmAttr;
  Attribute _normAttr;
  Attribute _txt2DAttr;
  Attribute _txtCubeAttr;
  Attribute _bendAttr;

  UniformMat4 _objMat;
  UniformMat4 _viewObjMat;
  UniformMat4 _viewMat;
  UniformMat4 _projViewObjMat;
  UniformMat4 _projViewMat;
  UniformMat4 _invViewMat;
  UniformMat3 _txt2DMat;
  UniformMat4 _txtCubeMat;
  UniformMat4 _colorMat;

  Uniform1i _bendMatCount;
  List<UniformMat4> _bendMatrices;

  Uniform3f _emissionClr;
  UniformSampler2D _emission2D;
  UniformSamplerCube _emissionCube;

  Uniform3f _ambientClr;
  UniformSampler2D _ambient2D;
  UniformSamplerCube _ambientCube;

  Uniform3f _diffuseClr;
  UniformSampler2D _diffuse2D;
  UniformSamplerCube _diffuseCube;

  Uniform3f _invDiffuseClr;
  UniformSampler2D _invDiffuse2D;
  UniformSamplerCube _invDiffuseCube;

  Uniform3f _specularClr;
  UniformSampler2D _specular2D;
  UniformSamplerCube _specularCube;
  Uniform1f _shininess;

  UniformSampler2D _bump2D;
  UniformSamplerCube _bumpCube;

  UniformSamplerCube _envSampler;

  Uniform3f _reflectClr;
  UniformSampler2D _reflect2D;
  UniformSamplerCube _reflectCube;

  Uniform1f _refraction;
  Uniform3f _refractClr;
  UniformSampler2D _refract2D;
  UniformSamplerCube _refractCube;

  Uniform1f _alpha;
  UniformSampler2D _alpha2D;
  UniformSamplerCube _alphaCube;

  Uniform1i _dirLightCount;
  List<UniformDirectionalLight> _dirLights;

  Uniform1i _pntLightCount;
  List<UniformPointLight> _pntLights;

  Uniform1i _spotLightCount;
  List<UniformSpotLight> _spotLights;

  Uniform1i _txtDirLightCount;
  List<UniformTexturedDirectionalLight> _txtDirLights;

  Uniform1i _txtPntLightCount;
  List<UniformTexturedPointLight> _txtPntLights;

  Uniform1i _txtSpotLightCount;
  List<UniformTexturedSpotLight> _txtSpotLights;

  Uniform4f _fogClr;
  Uniform1f _fogStop;
  Uniform1f _fogWidth;

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
  MaterialLight(MaterialLightConfig cfg,  WebGL.RenderingContext2 gl): super(gl, cfg.name) {
    this._cfg = cfg;
    String vertexSource = this._cfg.createVertexSource();
    String fragmentSource = this._cfg.createFragmentSource();

    // print(this._cfg.toString());
    // print(numberLines(vertexSource));
    // print(numberLines(fragmentSource));

    this.initialize(vertexSource, fragmentSource);
    this._posAttr     = this.attributes["posAttr"];
    this._normAttr    = this.attributes["normAttr"];
    this._binmAttr    = this.attributes["binmAttr"];
    this._txt2DAttr   = this.attributes["txt2DAttr"];
    this._txtCubeAttr = this.attributes["txtCubeAttr"];
    this._bendAttr    = this.attributes["bendAttr"];

    // print(numberLines(this.uniforms.toString()));
    // print(this._cfg.vertexType);

    if (cfg.invViewMat)     this._invViewMat     = this.uniforms.required("invViewMat")     as UniformMat4;
    if (cfg.objMat)         this._objMat         = this.uniforms.required("objMat")         as UniformMat4;
    if (cfg.viewObjMat)     this._viewObjMat     = this.uniforms.required("viewObjMat")     as UniformMat4;
    if (cfg.projViewObjMat) this._projViewObjMat = this.uniforms.required("projViewObjMat") as UniformMat4;
    if (cfg.viewMat)        this._viewMat        = this.uniforms.required("viewMat")        as UniformMat4;
    if (cfg.projViewMat)    this._projViewMat    = this.uniforms.required("projViewMat")    as UniformMat4;
    if (cfg.txt2DMat)       this._txt2DMat       = this.uniforms.required("txt2DMat")       as UniformMat3;
    if (cfg.txtCubeMat)     this._txtCubeMat     = this.uniforms.required("txtCubeMat")     as UniformMat4;
    if (cfg.colorMat)       this._colorMat       = this.uniforms.required("colorMat")       as UniformMat4;

    this._bendMatrices = new List<UniformMat4>();
    if (cfg.bendMats > 0) {
      this._bendMatCount = this.uniforms.required("bendMatCount");
      for (int i = 0; i < cfg.bendMats; ++i) {
        this._bendMatrices.add(this.uniforms.required("bendValues[$i].mat") as UniformMat4);
      }
    }

    if (cfg.emission.hasSolid)
      this._emissionClr = this.uniforms.required("emissionClr") as Uniform3f;
    if (cfg.emission.hasTxt2D)
      this._emission2D = this.uniforms.required("emissionTxt") as UniformSampler2D;
    else if (cfg.emission.hasTxtCube)
      this._emissionCube = this.uniforms.required("emissionTxt") as UniformSamplerCube;

    if (cfg.ambient.hasSolid)
      this._ambientClr = this.uniforms.required("ambientClr") as Uniform3f;
    if (cfg.ambient.hasTxt2D)
      this._ambient2D = this.uniforms.required("ambientTxt") as UniformSampler2D;
    else if (cfg.ambient.hasTxtCube)
      this._ambientCube = this.uniforms.required("ambientTxt") as UniformSamplerCube;

    if (cfg.diffuse.hasSolid)
      this._diffuseClr = this.uniforms.required("diffuseClr") as Uniform3f;
    if (cfg.diffuse.hasTxt2D)
      this._diffuse2D = this.uniforms.required("diffuseTxt") as UniformSampler2D;
    else if (cfg.diffuse.hasTxtCube)
      this._diffuseCube = this.uniforms.required("diffuseTxt") as UniformSamplerCube;

    if (cfg.invDiffuse.hasSolid)
      this._invDiffuseClr = this.uniforms.required("invDiffuseClr") as Uniform3f;
    if (cfg.invDiffuse.hasTxt2D)
      this._invDiffuse2D = this.uniforms.required("invDiffuseTxt") as UniformSampler2D;
    else if (cfg.invDiffuse.hasTxtCube)
      this._invDiffuseCube = this.uniforms.required("invDiffuseTxt") as UniformSamplerCube;

    if (cfg.specular.hasAny) {
      this._shininess = this.uniforms.required("shininess") as Uniform1f;
      if (cfg.specular.hasSolid)
        this._specularClr = this.uniforms.required("specularClr") as Uniform3f;
      if (cfg.specular.hasTxt2D)
        this._specular2D = this.uniforms.required("specularTxt") as UniformSampler2D;
      else if (cfg.specular.hasTxtCube)
        this._specularCube = this.uniforms.required("specularTxt") as UniformSamplerCube;
    }

    if (cfg.bumpy.hasTxt2D)
      this._bump2D = this.uniforms.required("bumpTxt") as UniformSampler2D;
    else if (cfg.bumpy.hasTxtCube)
      this._bumpCube = this.uniforms.required("bumpTxt") as UniformSamplerCube;

    if (cfg.enviromental) {
      this._envSampler = this.uniforms.required("envSampler") as UniformSamplerCube;

      if (cfg.reflection.hasSolid)
        this._reflectClr = this.uniforms.required("reflectClr") as Uniform3f;
      if (cfg.reflection.hasTxt2D)
        this._reflect2D = this.uniforms.required("reflectTxt") as UniformSampler2D;
      else if (cfg.reflection.hasTxtCube)
        this._reflectCube = this.uniforms.required("reflectTxt") as UniformSamplerCube;

      if (cfg.refraction.hasAny) {
        this._refraction = this.uniforms.required("refraction") as Uniform1f;
        if (cfg.refraction.hasSolid)
          this._refractClr = this.uniforms.required("refractClr") as Uniform3f;
        if (cfg.refraction.hasTxt2D)
          this._refract2D = this.uniforms.required("refractTxt") as UniformSampler2D;
        else if (cfg.refraction.hasTxtCube)
          this._refractCube = this.uniforms.required("refractTxt") as UniformSamplerCube;
      }
    }

    if (cfg.alpha.hasSolid)
      this._alpha = this.uniforms.required("alpha") as Uniform1f;
    if (cfg.alpha.hasTxt2D)
      this._alpha2D = this.uniforms.required("alphaTxt") as UniformSampler2D;
    else if (cfg.alpha.hasTxtCube)
      this._alphaCube = this.uniforms.required("alphaTxt") as UniformSamplerCube;

    this._dirLights     = new List<UniformDirectionalLight>();
    this._pntLights     = new List<UniformPointLight>();
    this._spotLights    = new List<UniformSpotLight>();
    this._txtDirLights  = new List<UniformTexturedDirectionalLight>();
    this._txtPntLights  = new List<UniformTexturedPointLight>();
    this._txtSpotLights = new List<UniformTexturedSpotLight>();

    if (cfg.lights) {
      if (cfg.dirLight > 0) {
        this._dirLightCount = this.uniforms.required("dirLightCount");
        for (int i = 0; i < cfg.dirLight; ++i) {
          Uniform3f viewDir = this.uniforms.required("dirLights[$i].viewDir") as Uniform3f;
          Uniform3f color   = this.uniforms.required("dirLights[$i].color") as Uniform3f;
          this._dirLights.add(new UniformDirectionalLight._(i, viewDir, color));
        }
      }

      if (cfg.pointLight > 0) {
        this._pntLightCount = this.uniforms.required("pntLightCount");
        for (int i = 0; i < cfg.pointLight; ++i) {
          Uniform3f point   = this.uniforms.required("pntLights[$i].point") as Uniform3f;
          Uniform3f viewPnt = this.uniforms.required("pntLights[$i].viewPnt") as Uniform3f;
          Uniform3f color   = this.uniforms.required("pntLights[$i].color") as Uniform3f;
          Uniform1f att0    = this.uniforms.required("pntLights[$i].att0") as Uniform1f;
          Uniform1f att1    = this.uniforms.required("pntLights[$i].att1") as Uniform1f;
          Uniform1f att2    = this.uniforms.required("pntLights[$i].att2") as Uniform1f;
          this._pntLights.add(new UniformPointLight._(i, point, viewPnt, color, att0, att1, att2));
        }
      }

      if (cfg.spotLight > 0) {
        this._spotLightCount = this.uniforms.required("spotLightCount");
        for (int i = 0; i < cfg.spotLight; ++i) {
          Uniform3f objPnt    = this.uniforms.required("spotLights[$i].objPnt") as Uniform3f;
          Uniform3f objDir    = this.uniforms.required("spotLights[$i].objDir") as Uniform3f;
          Uniform3f viewPnt   = this.uniforms.required("spotLights[$i].viewPnt") as Uniform3f;
          Uniform3f color     = this.uniforms.required("spotLights[$i].color") as Uniform3f;
          Uniform1f cutoff    = this.uniforms.required("spotLights[$i].cutoff") as Uniform1f;
          Uniform1f coneAngle = this.uniforms.required("spotLights[$i].coneAngle") as Uniform1f;
          Uniform1f att0      = this.uniforms.required("spotLights[$i].att0") as Uniform1f;
          Uniform1f att1      = this.uniforms.required("spotLights[$i].att1") as Uniform1f;
          Uniform1f att2      = this.uniforms.required("spotLights[$i].att2") as Uniform1f;
          this._spotLights.add(new UniformSpotLight._(i, objPnt, objDir, viewPnt, color, cutoff, coneAngle, att0, att1, att2));
        }
      }

      if (cfg.txtDirLight > 0) {
        this._txtDirLightCount = this.uniforms.required("txtDirLightCount");
        for (int i = 0; i < cfg.txtDirLight; ++i) {
          Uniform3f objUp      = this.uniforms.required("txtDirLights[$i].objUp") as Uniform3f;
          Uniform3f objRight   = this.uniforms.required("txtDirLights[$i].objRight") as Uniform3f;
          Uniform3f objDir     = this.uniforms.required("txtDirLights[$i].objDir") as Uniform3f;
          Uniform3f viewDir    = this.uniforms.required("txtDirLights[$i].viewDir") as Uniform3f;
          Uniform3f color      = this.uniforms.required("txtDirLights[$i].color") as Uniform3f;
          UniformSampler2D txt = this.uniforms.required("txtDirLightsTxt2D$i") as UniformSampler2D;
          this._txtDirLights.add(new UniformTexturedDirectionalLight._(i, objUp, objRight, objDir, viewDir, color, txt));
        }
      }

      if (cfg.txtPointLight > 0) {
        this._txtPntLightCount = this.uniforms.required("txtPntLightCount");
        for (int i = 0; i < cfg.txtPointLight; ++i) {
          Uniform3f point           = this.uniforms.required("txtPntLights[$i].point") as Uniform3f;
          Uniform3f viewPnt         = this.uniforms.required("txtPntLights[$i].viewPnt") as Uniform3f;
          UniformMat3 invViewRotMat = this.uniforms.required("txtPntLights[$i].invViewRotMat") as UniformMat3;
          Uniform3f color           = this.uniforms.required("txtPntLights[$i].color") as Uniform3f;
          Uniform1f att0            = this.uniforms.required("txtPntLights[$i].att0") as Uniform1f;
          Uniform1f att1            = this.uniforms.required("txtPntLights[$i].att1") as Uniform1f;
          Uniform1f att2            = this.uniforms.required("txtPntLights[$i].att2") as Uniform1f;
          UniformSamplerCube txt    = this.uniforms.required("txtPntLightsTxtCube$i") as UniformSamplerCube;
          this._txtPntLights.add(new UniformTexturedPointLight._(i, point, viewPnt, invViewRotMat, color, txt, att0, att1, att2));
        }
      }

      if (cfg.txtSpotLight > 0) {
        this._txtSpotLightCount = this.uniforms.required("txtSpotLightCount");
        for (int i = 0; i < cfg.txtSpotLight; ++i) {
          Uniform3f objPnt     = this.uniforms.required("txtSpotLights[$i].objPnt") as Uniform3f;
          Uniform3f objDir     = this.uniforms.required("txtSpotLights[$i].objDir") as Uniform3f;
          Uniform3f objUp      = this.uniforms.required("txtSpotLights[$i].objUp") as Uniform3f;
          Uniform3f objRight   = this.uniforms.required("txtSpotLights[$i].objRight") as Uniform3f;
          Uniform3f viewPnt    = this.uniforms.required("txtSpotLights[$i].viewPnt") as Uniform3f;
          Uniform3f color      = this.uniforms.required("txtSpotLights[$i].color") as Uniform3f;
          Uniform1f tuScalar   = this.uniforms.required("txtSpotLights[$i].tuScalar") as Uniform1f;
          Uniform1f tvScalar   = this.uniforms.required("txtSpotLights[$i].tvScalar") as Uniform1f;
          Uniform1f att0       = this.uniforms.required("txtSpotLights[$i].att0") as Uniform1f;
          Uniform1f att1       = this.uniforms.required("txtSpotLights[$i].att1") as Uniform1f;
          Uniform1f att2       = this.uniforms.required("txtSpotLights[$i].att2") as Uniform1f;
          UniformSampler2D txt = this.uniforms.required("txtSpotLightsTxt2D$i") as UniformSampler2D;
          this._txtSpotLights.add(new UniformTexturedSpotLight._(i, objPnt, objDir, objUp, objRight, viewPnt, txt, color, tuScalar, tvScalar, att0, att1, att2));
        }
      }

      if (cfg.fog) {
        this._fogClr   = this.uniforms.required("fogColor");
        this._fogStop  = this.uniforms.required("fogStop");
        this._fogWidth = this.uniforms.required("fogWidth");
      }
    }
  }

  /// Sets the tcxture 2D and null texture indicator for the shader.
  void _setTexture2D(UniformSampler2D txt2D, Textures.Texture2D txt) {
    if ((txt != null) && txt.loaded) txt2D.setTexture2D(txt);
  }

  /// Sets the tcxture cube and null texture indicator for the shader.
  void _setTextureCube(UniformSamplerCube txtCube, Textures.TextureCube txt) {
    if ((txt != null) && txt.loaded) txtCube.setTextureCube(txt);
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

  /// The bending value shader attribute.
  Attribute get bendAttr => this._bendAttr;

  /// The object matrix.
  Math.Matrix4 get objectMatrix => this._objMat.getMatrix4();
  set objectMatrix(Math.Matrix4 mat) => this._objMat.setMatrix4(mat);

  /// The view matrix multiplied by the object matrix.
  Math.Matrix4 get viewObjectMatrix => this._viewObjMat.getMatrix4();
  set viewObjectMatrix(Math.Matrix4 mat) => this._viewObjMat.setMatrix4(mat);

  /// The view matrix.
  Math.Matrix4 get viewMatrix => this._viewMat.getMatrix4();
  set viewMatrix(Math.Matrix4 mat) => this._viewMat.setMatrix4(mat);

  /// The product of the projection matrix, view matrix, and object matrix.
  Math.Matrix4 get projectViewObjectMatrix => this._projViewObjMat.getMatrix4();
  set projectViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMat.setMatrix4(mat);

  /// The product of the projection matrix and view matrix.
  Math.Matrix4 get projectViewMatrix => this._projViewMat.getMatrix4();
  set projectViewMatrix(Math.Matrix4 mat) => this._projViewMat.setMatrix4(mat);

  /// The inverse view matrix.
  Math.Matrix4 get inverseViewMatrix => this._invViewMat.getMatrix4();
  set inverseViewMatrix(Math.Matrix4 mat) => this._invViewMat.setMatrix4(mat);

  /// The 2D texture modification matrix.
  Math.Matrix3 get texture2DMatrix => this._txt2DMat.getMatrix3();
  set texture2DMatrix(Math.Matrix3 mat) => this._txt2DMat.setMatrix3(mat);

  /// The cube texture modification matrix.
  Math.Matrix4 get textureCubeMatrix => this._txtCubeMat.getMatrix4();
  set textureCubeMatrix(Math.Matrix4 mat) => this._txtCubeMat.setMatrix4(mat);

  /// The color modification matrix.
  Math.Matrix4 get colorMatrix => this._colorMat.getMatrix4();
  set colorMatrix(Math.Matrix4 mat) => this._colorMat.setMatrix4(mat);

  /// The number of bend matrices.
  int get bendMatricesCount => this._bendMatCount.getValue();
  set bendMatricesCount(int count) => this._bendMatCount.setValue(count);

  /// Sets the bend matrix with to the given [index].
  setBendMatrix(int index, Math.Matrix4 mat) => this._bendMatrices[index].setMatrix4(mat);

  /// Gets the bend matrix from the given [index].
  Math.Matrix4 getBendMatrix(int index) => this._bendMatrices[index].getMatrix4();

  /// The emission color scalar of the object.
  Math.Color3 get emissionColor => this._emissionClr.getColor3();
  set emissionColor(Math.Color3 clr) => this._emissionClr.setColor3(clr);

  /// The emission texture 2D of the object.
  set emissionTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._emission2D, txt);

  /// The emission texture cube of the object.
  set emissionTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._emissionCube, txt);

  /// The ambient color scalar of the object.
  Math.Color3 get ambientColor => this._ambientClr.getColor3();
  set ambientColor(Math.Color3 clr) => this._ambientClr.setColor3(clr);

  /// The ambient texture 2D of the object.
  set ambientTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._ambient2D, txt);

  /// The ambient texture cube of the object.
  set ambientTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._ambientCube, txt);

  /// The diffuse color scalar of the object.
  Math.Color3 get diffuseColor => this._diffuseClr.getColor3();
  set diffuseColor(Math.Color3 clr) => this._diffuseClr.setColor3(clr);

  /// The diffuse texture 2D of the object.
  set diffuseTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._diffuse2D, txt);

  /// The diffuse texture cube of the object.
  set diffuseTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._diffuseCube, txt);

  /// The inverse diffuse color scalar of the object.
  Math.Color3 get invDiffuseColor => this._invDiffuseClr.getColor3();
  set invDiffuseColor(Math.Color3 clr) => this._invDiffuseClr.setColor3(clr);

  /// The inverse diffuse texture 2D of the object.
  set invDiffuseTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._invDiffuse2D, txt);

  /// The inverse diffuse texture cube of the object.
  set invDiffuseTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._invDiffuseCube, txt);

  /// The specular color scalar of the object.
  Math.Color3 get specularColor => this._specularClr.getColor3();
  set specularColor(Math.Color3 clr) => this._specularClr.setColor3(clr);

  /// The specular texture 2D of the object.
  set specularTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._specular2D, txt);

  /// The specular texture cube of the object.
  set specularTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._specularCube, txt);

  /// The shininess value of the specualr.
  double get shininess => this._shininess.getValue();
  set shininess(double value) => this._shininess.setValue(value);

  /// The normal distortion texture 2D of the object.
  set bumpTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._bump2D, txt);

  /// The normal distortion texture cube of the object.
  set bumpTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._bumpCube, txt);

  /// The environment texture cube of the object.
  set environmentTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._envSampler, txt);

  /// The refraction value of the specualr.
  double get refraction => this._refraction.getValue();
  set refraction(double value) => this._refraction.setValue(value);

  /// The reflection color scalar of the object.
  Math.Color3 get reflectionColor => this._reflectClr.getColor3();
  set reflectionColor(Math.Color3 clr) => this._reflectClr.setColor3(clr);

  /// The reflection texture 2D scalar of the object.
  set reflectionTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._reflect2D, txt);

  /// The reflection texture cube scalar of the object.
  set reflectionTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._reflectCube, txt);

  /// The refraction color scalar of the object.
  Math.Color3 get refractionColor => this._refractClr.getColor3();
  set refractionColor(Math.Color3 clr) => this._refractClr.setColor3(clr);

  /// The refraction texture 2D scalar of the object.
  set refractionTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._refract2D, txt);

  /// The refraction texture cube scalar of the object.
  set refractionTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._refractCube, txt);

  /// The alpha scalar of the object.
  double get alpha => this._alpha.getValue();
  set alpha(double alpha) => this._alpha.setValue(alpha);

  /// The alpha texture 2D of the object.
  set alphaTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._alpha2D, txt);

  /// The alpha texture cube of the object.
  set alphaTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._alphaCube, txt);

  /// The number of currently used directional lights.
  int get directionalLightCount => this._dirLightCount.getValue();
  set directionalLightCount(int count) => this._dirLightCount.setValue(count);

  /// The list of directional lights.
  List<UniformDirectionalLight> get directionalLights => this._dirLights;

  /// The number of currently used point lights.
  int get pointLightCount => this._pntLightCount.getValue();
  set pointLightCount(int count) => this._pntLightCount.setValue(count);

  /// The list of point lights.
  List<UniformPointLight> get pointLights => this._pntLights;

  /// The number of currently used spot lights.
  int get spotLightCount => this._spotLightCount.getValue();
  set spotLightCount(int count) => this._spotLightCount.setValue(count);

  /// The list of spot lights.
  List<UniformSpotLight> get spotLights => this._spotLights;

  /// The number of currently used textured directional lights.
  int get texturedDirectionalLightCount => this._txtDirLightCount.getValue();
  set texturedDirectionalLightCount(int count) => this._txtDirLightCount.setValue(count);

  /// The list of textured directional lights.
  List<UniformTexturedDirectionalLight> get texturedDirectionalLights => this._txtDirLights;

  /// The number of currently used textured point lights.
  int get texturedPointLightCount => this._txtPntLightCount.getValue();
  set texturedPointLightCount(int count) => this._txtPntLightCount.setValue(count);

  /// The list of textured point lights.
  List<UniformTexturedPointLight> get texturedPointLights => this._txtPntLights;

  /// The number of currently used textured spot lights.
  int get texturedSpotLightCount => this._txtSpotLightCount.getValue();
  set texturedSpotLightCount(int count) => this._txtSpotLightCount.setValue(count);

  /// The list of textured spot lights.
  List<UniformTexturedSpotLight> get texturedSpotLights => this._txtSpotLights;

  /// The color of the fog.
  Math.Color4 get fogColor => this._fogClr.getColor4();
  set fogColor(Math.Color4 clr) => this._fogClr.setColor4(clr);

  /// The fog stop is the minimum depth at which fog stops being applied.
  double get fogStop => this._fogStop.getValue();
  set fogStop(double value) => this._fogStop.setValue(value);

  /// The fog width from the fog stop to when the only color returned is the fog color.
  double get fogWidth => this._fogWidth.getValue();
  set fogWidth(double value) => this._fogWidth.setValue(value);
}
