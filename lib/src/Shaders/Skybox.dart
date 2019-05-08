part of ThreeDart.Shaders;

/// A shader for cover pass skybox rendering.
class Skybox extends Shader {

  /// The name for this shader.
  static const String defaultName = "Skybox";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 viewMat;                             \n"+
      "uniform float fov;                                \n"+
      "uniform float ratio;                              \n"+
      "                                                  \n"+
      "attribute vec3 posAttr;                           \n"+
      "                                                  \n"+
      "varying vec3 cubeTxt;                             \n"+
      "                                                  \n"+
      "void main()                                       \n"+
      "{                                                 \n"+
      "  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n"+
      "  float x = -t * posAttr.x / ratio;               \n"+
      "  float y = t * posAttr.y;                        \n"+
      "  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n"+
      "  gl_Position = vec4(posAttr, 1.0);               \n"+
      "}                                                 \n";

  /// The fragment shader source code in glsl.
  static String _fragmentSource =
      "precision mediump float;                                              \n"+
      "                                                                      \n"+
      "uniform samplerCube boxTxt;                                           \n"+
      "uniform vec3 boxClr;                                                  \n"+
      "                                                                      \n"+
      "varying vec3 cubeTxt;                                                 \n"+
      "                                                                      \n"+
      "void main()                                                           \n"+
      "{                                                                     \n"+
      "   vec3 txtCube = normalize(cubeTxt);                                 \n"+
      "   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n"+
      "}                                                                     \n";

  Attribute _posAttr;
  Uniform1f _fov;
  Uniform1f _ratio;
  Uniform3f _boxClr;
  UniformSamplerCube _boxTxt;
  UniformMat4 _viewMat;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory Skybox.cached(Core.RenderState state) {
    Skybox shader = state.shader(defaultName);
    if (shader == null) {
      shader = new Skybox(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  Skybox(WebGL.RenderingContext2 gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr = this.attributes["posAttr"];
    this._fov     = this.uniforms["fov"] as Uniform1f;
    this._ratio   = this.uniforms["ratio"] as Uniform1f;
    this._boxClr  = this.uniforms["boxClr"] as Uniform3f;
    this._boxTxt  = this.uniforms["boxTxt"] as UniformSamplerCube;
    this._viewMat = this.uniforms["viewMat"] as UniformMat4;
  }

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// Feild of view vertically in radians of the camera.
  double get fov => this._fov.getValue();
  set fov(double value) => this._fov.setValue(value);

  /// The render target's width over height aspect ratio.
  double get ratio => this._ratio.getValue();
  set ratio(double value) => this._ratio.setValue(value);

  /// The color to scale the sky box texture with..
  Math.Color3 get boxColor => this._boxClr.getColor3();
  set boxColor(Math.Color3 clr) => this._boxClr.setColor3(clr);

  /// The sky box texture to cover with.
  set boxTexture(Textures.TextureCube txt) =>
    this._boxTxt.setTextureCube(txt);

  /// The view matrix.
  Math.Matrix4 get viewMatrix => this._viewMat.getMatrix4();
  set viewMatrix(Math.Matrix4 mat) => this._viewMat.setMatrix4(mat);
}
