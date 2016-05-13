part of ThreeDart.Shaders;

/// A shader for cover pass Gaussian blurring rendering.
class GaussianBlur extends Shader {

  /// The name for this shader.
  static const String defaultName = "GaussianBlur";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 projViewObjMat;                                 \n"+
      "uniform mat3 txt2DMat;                                       \n"+
      "                                                             \n"+
      "attribute vec3 posAttr;                                      \n"+
      "attribute vec2 txtAttr;                                      \n"+
      "                                                             \n"+
      "varying vec2 txt2D;                                          \n"+
      "                                                             \n"+
      "void main()                                                  \n"+
      "{                                                            \n"+
      "  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n"+
      "  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n"+
      "}                                                            \n";

  /// The fragment shader source code in glsl.
  static String _fragmentSource =
      "precision mediump float;                                 \n"+
      "                                                         \n"+
      "#define MAX_BLUR_RANGE 20.0                              \n"+
      "                                                         \n"+
      "uniform sampler2D colorTxt;                              \n"+
      "uniform sampler2D depthTxt;                              \n"+
      "uniform int nullColorTxt;                                \n"+
      "uniform int nullDepthTxt;                                \n"+
      "uniform float width;                                     \n"+
      "uniform float height;                                    \n"+
      "uniform float highOffset;                                \n"+
      "uniform float lowOffset;                                 \n"+
      "uniform float depthLimit;                                \n"+
      "                                                         \n"+
      "varying vec2 txt2D;                                      \n"+
      "                                                         \n"+
      "float div;                                               \n"+
      "vec4 color;                                              \n"+
      "                                                         \n"+
      "void offsetColor(float baseDepth, float tu, float tv)    \n"+
      "{                                                        \n"+
      "   vec2 txtOffset = vec2(txt2D.x + tu/width,             \n"+
      "                         txt2D.y + tv/height);           \n"+
      "   float depth = texture2D(depthTxt, txtOffset).r;       \n"+
      "   if (depth - depthLimit > baseDepth) return;           \n"+
      "   div += 1.0;                                           \n"+
      "   color += texture2D(colorTxt, txtOffset);              \n"+
      "}                                                        \n"+
      "                                                         \n"+
      "void main()                                              \n"+
      "{                                                        \n"+
      "   if(nullColorTxt > 0)                                  \n"+
      "   {                                                     \n"+
      "      gl_FragColor = vec4(1.0);                          \n"+
      "      return;                                            \n"+
      "   }                                                     \n"+
      "   color = texture2D(colorTxt, txt2D);                   \n"+
      "   float baseDepth;                                      \n"+
      "   if(nullDepthTxt > 0) baseDepth = 1.0;                 \n"+
      "   else baseDepth = texture2D(depthTxt, txt2D).r;        \n"+
      "   float offset = mix(lowOffset, highOffset, baseDepth); \n"+
      "   offset = abs(offset);                                 \n"+
      "   div = 1.0;                                            \n"+
      "   for(float x=0.0; x<MAX_BLUR_RANGE; x+=1.0)            \n"+
      "   {                                                     \n"+
      "      if(x > offset) break;                              \n"+
      "      for(float y=1.0; y<MAX_BLUR_RANGE; y+=1.0)         \n"+
      "      {                                                  \n"+
      "         if(y > offset) break;                           \n"+
      "         offsetColor(baseDepth,  x,  y);                 \n"+
      "         offsetColor(baseDepth,  x, -y);                 \n"+
      "         offsetColor(baseDepth, -x,  y);                 \n"+
      "         offsetColor(baseDepth, -x, -y);                 \n"+
      "      }                                                  \n"+
      "   }                                                     \n"+
      "   gl_FragColor = color / div;                           \n"+
      "}                                                        \n";

  Attribute _posAttr;
  Attribute _txtAttr;
  UniformMat4 _projViewObjMat;
  UniformMat3 _txt2DMat;
  UniformSampler2D _colorTxt;
  UniformSampler2D _depthTxt;
  Uniform1i _nullColorTxt;
  Uniform1i _nullDepthTxt;
  Uniform1f _width;
  Uniform1f _height;
  Uniform1f _highOffset;
  Uniform1f _lowOffset;
  Uniform1f _depthLimit;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory GaussianBlur.cached(Core.RenderState state) {
    GaussianBlur shader = state.shader(defaultName);
    if (shader == null) {
      shader = new GaussianBlur(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  GaussianBlur(WebGL.RenderingContext gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr        = this.attributes["posAttr"];
    this._txtAttr        = this.attributes["txtAttr"];
    this._projViewObjMat = this.uniforms["projViewObjMat"] as UniformMat4;
    this._txt2DMat       = this.uniforms["txt2DMat"] as UniformMat3;
    this._colorTxt       = this.uniforms["colorTxt"] as UniformSampler2D;
    this._depthTxt       = this.uniforms["depthTxt"] as UniformSampler2D;
    this._nullColorTxt   = this.uniforms["nullColorTxt"] as Uniform1i;
    this._nullDepthTxt   = this.uniforms["nullDepthTxt"] as Uniform1i;
    this._width          = this.uniforms["width"] as Uniform1f;
    this._height         = this.uniforms["height"] as Uniform1f;
    this._highOffset     = this.uniforms["highOffset"] as Uniform1f;
    this._lowOffset      = this.uniforms["lowOffset"] as Uniform1f;
    this._depthLimit     = this.uniforms["depthLimit"] as Uniform1f;
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

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The texture vertex shader attribute.
  Attribute get txtAttr => this._txtAttr;

  /// The width of the target in pixels.
  Math.Matrix4 get projectViewObjectMatrix => this._projViewObjMat.getMatrix4();
  set projectViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMat.setMatrix4(mat);

  /// The width of the target in pixels.
  Math.Matrix3 get textureMatrix => this._txt2DMat.getMatrix3();
  set textureMatrix(Math.Matrix3 mat) => this._txt2DMat.setMatrix3(mat);

  /// The color texture to cover with.
  set colorTexture(Textures.Texture2D txt) =>
    this._setTexture2D(this._colorTxt, this._nullColorTxt, txt);

  /// The depth texture to cover with.
  set depthTexture(Textures.Texture2D txt) =>
    this._setTexture2D(this._depthTxt, this._nullDepthTxt, txt);

  /// The width of the target in pixels.
  double get width => this._width.getValue();
  set width(double value) => this._width.setValue(value);

  /// The height of the target in pixels.
  double get height => this._height.getValue();
  set height(double value) => this._height.setValue(value);

  /// The offset value for the depth at it's highest value.
  double get highOffset => this._highOffset.getValue();
  set highOffset(double value) => this._highOffset.setValue(value);

  /// The offset value for the depth at it's lowest value.
  double get lowOffset => this._lowOffset.getValue();
  set lowOffset(double value) => this._lowOffset.setValue(value);

  /// The limit for higher depth to be excluded from the blur.
  double get depthLimit => this._depthLimit.getValue();
  set depthLimit(double value) => this._depthLimit.setValue(value);
}
