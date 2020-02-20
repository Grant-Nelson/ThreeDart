part of ThreeDart.Shaders;

/// A shader for cover pass distortion rendering.
class Distort extends Shader {

  /// The name for this shader.
  static const String defaultName = "Distort";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 projViewObjMat;                             \n"+
      "uniform mat3 colorTxt2DMat;                              \n"+
      "uniform mat3 bumpTxt2DMat;                               \n"+
      "                                                         \n"+
      "attribute vec3 posAttr;                                  \n"+
      "attribute vec2 txt2DAttr;                                \n"+
      "                                                         \n"+
      "varying vec2 colorTxt2D;                                 \n"+
      "varying vec2 bumpTxt2D;                                  \n"+
      "                                                         \n"+
      "void main()                                              \n"+
      "{                                                        \n"+
      "   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n"+
      "   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n"+
      "   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n"+
      "   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n"+
      "}                                                        \n";

  /// The fragment shader source code in glsl.
  static String _fragmentSource =
      "precision mediump float;                           \n"+
      "                                                   \n"+
      "uniform sampler2D colorTxt;                        \n"+
      "uniform sampler2D bumpTxt;                         \n"+
      "uniform mat4 bumpMat;                              \n"+
      "                                                   \n"+
      "varying vec2 colorTxt2D;                           \n"+
      "varying vec2 bumpTxt2D;                            \n"+
      "                                                   \n"+
      "vec2 offset()                                      \n"+
      "{                                                  \n"+
      "   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n"+
      "   txt2D = normalize(txt2D*2.0 - 1.0);             \n"+
      "   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n"+
      "}                                                  \n"+
      "                                                   \n"+
      "void main()                                        \n"+
      "{                                                  \n"+
      "   vec2 txt2D = colorTxt2D + offset();             \n"+
      "   gl_FragColor = texture2D(colorTxt, txt2D);      \n"+
      "}                                                  \n";

  Attribute _posAttr;
  Attribute _txtAttr;
  UniformMat4 _projViewObjMat;
  UniformMat3 _colorTxt2DMat;
  UniformMat3 _bumpTxt2DMat;
  UniformSampler2D _colorTxt;
  UniformSampler2D _bumpTxt;
  UniformMat4 _bumpMat;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory Distort.cached(Core.RenderState state) {
    Distort shader = state.shader(defaultName);
    if (shader == null) {
      shader = new Distort(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  Distort(WebGL.RenderingContext2 gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr        = this.attributes["posAttr"];
    this._txtAttr        = this.attributes["txt2DAttr"];
    this._projViewObjMat = this.uniforms.required("projViewObjMat") as UniformMat4;
    this._colorTxt2DMat  = this.uniforms.required("colorTxt2DMat") as UniformMat3;
    this._bumpTxt2DMat   = this.uniforms.required("bumpTxt2DMat") as UniformMat3;
    this._colorTxt       = this.uniforms.required("colorTxt") as UniformSampler2D;
    this._bumpTxt        = this.uniforms.required("bumpTxt") as UniformSampler2D;
    this._bumpMat        = this.uniforms.required("bumpMat") as UniformMat4;
  }

  /// Sets the texture 2D and null texture indicator for the shader.
  void _setTexture2D(UniformSampler2D txt2D, Textures.Texture2D txt) {
    if ((txt != null) && txt.loaded) txt2D.setTexture2D(txt);
  }

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The texture vertex shader attribute.
  Attribute get txtAttr => this._txtAttr;

  /// The matrix for modifying the project view object matrix.
  Math.Matrix4 get projectViewObjectMatrix => this._projViewObjMat.getMatrix4();
  set projectViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMat.setMatrix4(mat);

  /// The matrix for modifying the color texture coordinates.
  Math.Matrix3 get colorTextureMatrix => this._colorTxt2DMat.getMatrix3();
  set colorTextureMatrix(Math.Matrix3 mat) => this._colorTxt2DMat.setMatrix3(mat);

  /// The matrix for modifying the bump texture coordinates.
  Math.Matrix3 get bumpTextureMatrix => this._bumpTxt2DMat.getMatrix3();
  set bumpTextureMatrix(Math.Matrix3 mat) => this._bumpTxt2DMat.setMatrix3(mat);

  /// The color texture to cover with.
  set colorTexture(Textures.Texture2D txt) =>
    this._setTexture2D(this._colorTxt, txt);

  /// The bump distortion texture to cover with.
  set bumpTexture(Textures.Texture2D txt) =>
    this._setTexture2D(this._bumpTxt, txt);

  /// The matrix for modifying the bump normals.
  Math.Matrix4 get bumpMatrix => this._bumpMat.getMatrix4();
  set bumpMatrix(Math.Matrix4 mat) => this._bumpMat.setMatrix4(mat);
}
