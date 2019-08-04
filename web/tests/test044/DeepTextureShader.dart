part of ThreeDart.test.test044;

/// A shader for rendering and testing deep textures.
class DeepTextureShader extends Shaders.Shader {

  /// The name for this shader.
  static const String defaultName = "Deep Texture Shader";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 viewMat;                                             \n"+
      "uniform mat4 viewObjMat;                                          \n"+
      "uniform mat4 projViewObjMat;                                      \n"+
      "                                                                  \n"+
      "attribute vec3 posAttr;                                           \n"+
      "attribute vec3 normAttr;                                          \n"+
      "attribute vec3 binmAttr;                                          \n"+
      "attribute vec2 txt2DAttr;                                         \n"+
      "                                                                  \n"+
      "varying vec3 normVec;                                             \n"+
      "varying vec3 binmVec;                                             \n"+
      "varying vec3 viewPos;                                             \n"+
      "varying vec2 txt2D;                                               \n"+
      "                                                                  \n"+
      "void main()                                                       \n"+
      "{                                                                 \n"+
      "   normVec = normalize((viewObjMat*vec4(normAttr, 0.0)).xyz);     \n"+
      "   binmVec = normalize((viewObjMat*vec4(binmAttr, 0.0)).xyz);     \n"+
      "   viewPos = normalize((viewMat*vec4(posAttr, 1.0)).xyz);         \n"+
      "   txt2D = txt2DAttr;                                             \n"+
      "   gl_Position = projViewObjMat*vec4(posAttr, 1.0);               \n"+
      "}                                                                 \n";

  /// The fragment shader source code in glsl.
  static String _fragmentSource =
      "precision mediump float;                         \n"+
      "                                                 \n"+
      "uniform sampler2D colorTxt;                      \n"+
      "uniform sampler2D depthTxt;                      \n"+
      "                                                 \n"+
      "varying vec3 normVec;                            \n"+
      "varying vec3 binmVec;                            \n"+
      "varying vec3 viewPos;                            \n"+
      "varying vec2 txt2D;                              \n"+
      "                                                 \n"+
      "void main()                                      \n"+
      "{                                                \n"+
      "   vec3 n = normalize(normVec);                  \n"+
      "   vec3 b = normalize(binmVec);                  \n"+
      "   vec3 c = normalize(cross(b, n));              \n"+
      "                                                 \n"+
      "   float tdx = dot(n, viewPos);                  \n"+
      "   float tdy = dot(b, viewPos);                  \n"+
      "   float tdz = dot(c, viewPos);                  \n"+
      "   vec2 onPlane = normalize(vec3(tdx, tdy, tdz)).yz;                \n"+
      "                                                           \n"+
      "                                                           \n"+
      "   vec3 txtClr = texture2D(colorTxt, txt2D).rgb;           \n"+
      "   float depth = texture2D(depthTxt, txt2D).r;             \n"+
      "   if(depth > 0.1) txtClr = texture2D(colorTxt, txt2D-onPlane*0.2).rgb * vec3(0.8); \n"+
      "   gl_FragColor = vec4(txtClr, 1.0);                       \n"+
      "}                                                          \n";

  Shaders.Attribute _posAttr;
  Shaders.Attribute _normAttr;
  Shaders.Attribute _binmAttr;
  Shaders.Attribute _txt2DAttr;

  Shaders.UniformSampler2D _colorTxt;
  Shaders.UniformSampler2D _depthTxt;
  Shaders.UniformMat4 _viewMat;
  Shaders.UniformMat4 _viewObjMat;
  Shaders.UniformMat4 _projViewObjMat;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory DeepTextureShader.cached(ThreeDart.RenderState state) {
    DeepTextureShader shader = state.shader(defaultName);
    if (shader == null) {
      shader = new DeepTextureShader(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  DeepTextureShader(WebGL.RenderingContext2 gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr   = this.attributes["posAttr"];
    this._normAttr  = this.attributes["normAttr"];
    this._binmAttr  = this.attributes["binmAttr"];
    this._txt2DAttr = this.attributes["txt2DAttr"];
    this._colorTxt       = this.uniforms["colorTxt"] as Shaders.UniformSampler2D;
    this._depthTxt       = this.uniforms["depthTxt"] as Shaders.UniformSampler2D;
    this._viewMat        = this.uniforms["viewMat"] as Shaders.UniformMat4;
    this._viewObjMat     = this.uniforms["viewObjMat"] as Shaders.UniformMat4;
    this._projViewObjMat = this.uniforms["projViewObjMat"] as Shaders.UniformMat4;
  }

  /// The position vertex shader attribute.
  Shaders.Attribute get posAttr => this._posAttr;

  /// The normal vertex shader attribute.
  Shaders.Attribute get normAttr => this._normAttr;
  
  /// The binormal vertex shader attribute.
  Shaders.Attribute get binmAttr => this._binmAttr;

  /// The texture vertex shader attribute.
  Shaders.Attribute get txt2DAttr => this._txt2DAttr;

  /// The color texture of the object.
  set colorTexture(Textures.Texture2D txt) {
    if (txt != null) this._colorTxt.setTexture2D(txt);
  }
  
  /// The depth texture of the object.
  set depthTexture(Textures.Texture2D txt) {
    if (txt != null) this._depthTxt.setTexture2D(txt);
  }

  /// The view matrix.
  Math.Matrix4 get viewMatrix => this._viewMat.getMatrix4();
  set viewMatrix(Math.Matrix4 mat) => this._viewMat.setMatrix4(mat);

  /// The view object matrix.
  Math.Matrix4 get viewObjectMatrix => this._viewObjMat.getMatrix4();
  set viewObjectMatrix(Math.Matrix4 mat) => this._viewObjMat.setMatrix4(mat);

  /// The project view object matrix.
  Math.Matrix4 get projectViewObjectMatrix => this._projViewObjMat.getMatrix4();
  set projectViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMat.setMatrix4(mat);
}
