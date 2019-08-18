part of ThreeDart.Shaders;

/// A shader for very basic depth rendering.
class Depth extends Shader {

  /// The name for the high quality depth shader.
  static const String _highName = "HighDepth";

  /// The name for the grey scale depth shader.
  static const String _greyName = "GreyDepth";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 viewObjMat;                    \n"+
      "uniform mat4 projMat;                       \n"+
      "uniform float width;                        \n"+
      "uniform float stop;                         \n"+
      "                                            \n"+
      "attribute vec3 posAttr;                     \n"+
      "                                            \n"+
      "varying float depth;                        \n"+
      "                                            \n"+
      "void main()                                 \n"+
      "{                                           \n"+
      "  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n"+
      "  depth = (pos.z - stop) / width;           \n"+
      "  gl_Position = projMat*pos;                \n"+
      "}                                           \n";

  /// The fragment shader source code in glsl
  /// for the higher quality depth values.
  static String _fragmentHighSource =
      "precision mediump float;             \n"+
      "                                     \n"+
      "varying float depth;                 \n"+
      "                                     \n"+
      "void main()                          \n"+
      "{                                    \n"+
      "   float f = clamp(depth, 0.0, 1.0); \n"+
      "   f = f * 256.0;                    \n"+
      "   float r = floor(f);               \n"+
      "   f = (f - r) * 256.0;              \n"+
      "   float g = floor(f);               \n"+
      "   f = (f - g) * 256.0;              \n"+
      "   float b = floor(f);               \n"+
      "   vec3 clr = vec3(r, g, b) / 256.0; \n"+
      "   gl_FragColor = vec4(clr, 1.0);    \n"+
      "}                                    \n";
      
  /// The fragment shader source code in glsl
  /// for the grey scale depth values.
  static String _fragmentGreySource =
      "precision mediump float;             \n"+
      "                                     \n"+
      "varying float depth;                 \n"+
      "                                     \n"+
      "void main()                          \n"+
      "{                                    \n"+
      "   float f = clamp(depth, 0.0, 1.0); \n"+
      "   vec3 clr = vec3(f, f, f);         \n"+
      "   gl_FragColor = vec4(clr, 1.0);    \n"+
      "}                                    \n";

  Attribute _posAttr;
  Uniform1f _width;
  Uniform1f _stop;
  UniformMat4 _viewObjMat;
  UniformMat4 _projMat;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory Depth.cached(bool grey, Core.RenderState state) {
    Depth shader = state.shader(grey? _greyName: _highName);
    if (shader == null) {
      shader = new Depth(grey, state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  Depth(bool grey, WebGL.RenderingContext2 gl): super(gl, grey? _greyName: _highName) {
    this.initialize(_vertexSource, grey? _fragmentGreySource: _fragmentHighSource);
    this._posAttr    = this.attributes["posAttr"];
    this._width      = this.uniforms["width"] as Uniform1f;
    this._stop       = this.uniforms["stop"] as Uniform1f;
    this._viewObjMat = this.uniforms["viewObjMat"] as UniformMat4;
    this._projMat    = this.uniforms["projMat"] as UniformMat4;
  }

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The width of the depth values which map between 0 and 1.
  double get width => this._width.getValue();
  set width(double value) => this._width.setValue(value);

  /// The value when the depth stops.
  double get stop => this._stop.getValue();
  set stop(double value) => this._stop.setValue(value);

  /// The view matrix times the object matrix.
  Math.Matrix4 get viewObjectMatrix => this._viewObjMat.getMatrix4();
  set viewObjectMatrix(Math.Matrix4 mat) => this._viewObjMat.setMatrix4(mat);

  /// The projection matrix.
  Math.Matrix4 get projectMatrix => this._projMat.getMatrix4();
  set projectMatrix(Math.Matrix4 mat) => this._projMat.setMatrix4(mat);
}
