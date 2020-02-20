part of ThreeDart.Shaders;

/// A shader for rendering the normals.
class Normal extends Shader {

  NormalConfig _cfg;

  Attribute _posAttr;
  Attribute _binmAttr;
  Attribute _normAttr;
  Attribute _txt2DAttr;
  Attribute _txtCubeAttr;

  UniformMat4 _viewObjMat;
  UniformMat4 _projViewObjMat;
  UniformMat3 _txt2DMat;
  UniformMat4 _txtCubeMat;

  UniformSampler2D _bump2D;
  UniformSamplerCube _bumpCube;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory Normal.cached(NormalConfig cfg, Core.RenderState state) {
    Normal shader = state.shader(cfg.name);
    if (shader == null) {
      shader = new Normal(cfg, state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  Normal(NormalConfig cfg,  WebGL.RenderingContext2 gl): super(gl, cfg.name) {
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

    // print(numberLines(this.uniforms.toString()));
    this._viewObjMat = this.uniforms.required("viewObjMat") as UniformMat4;
    this._projViewObjMat = this.uniforms.required("projViewObjMat") as UniformMat4;
    if (cfg.txt2D) this._txt2DMat = this.uniforms.required("txt2DMat") as UniformMat3;
    if (cfg.txtCube) this._txtCubeMat = this.uniforms.required("txtCubeMat") as UniformMat4;

    if (cfg.bumpy.hasTxt2D)
      this._bump2D = this.uniforms.required("bumpTxt") as UniformSampler2D;
    else if (cfg.bumpy.hasTxtCube)
      this._bumpCube = this.uniforms.required("bumpTxt") as UniformSamplerCube;
  }

  /// Sets the texture 2D and null texture indicator for the shader.
  void _setTexture2D(UniformSampler2D txt2D, Textures.Texture2D txt) {
    if ((txt != null) && txt.loaded) txt2D.setTexture2D(txt);
  }

  /// Sets the texture cube and null texture indicator for the shader.
  void _setTextureCube(UniformSamplerCube txtCube, Textures.TextureCube txt) {
    if ((txt != null) && txt.loaded) txtCube.setTextureCube(txt);
  }

  /// The configuration the shader is built for.
  NormalConfig get configuration => this._cfg;

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

  /// The product of the projection matrix, view matrix, and object matrix.
  Math.Matrix4 get projectViewObjectMatrix => this._projViewObjMat.getMatrix4();
  set projectViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMat.setMatrix4(mat);

  /// The 2D texture modification matrix.
  Math.Matrix3 get texture2DMatrix => this._txt2DMat.getMatrix3();
  set texture2DMatrix(Math.Matrix3 mat) => this._txt2DMat.setMatrix3(mat);

  /// The cube texture modification matrix.
  Math.Matrix4 get textureCubeMatrix => this._txtCubeMat.getMatrix4();
  set textureCubeMatrix(Math.Matrix4 mat) => this._txtCubeMat.setMatrix4(mat);

  /// The normal distortion texture 2D of the object.
  set bumpTexture2D(Textures.Texture2D txt) =>
    this._setTexture2D(this._bump2D, txt);

  /// The normal distortion texture cube of the object.
  set bumpTextureCube(Textures.TextureCube txt) =>
    this._setTextureCube(this._bumpCube, txt);
}
