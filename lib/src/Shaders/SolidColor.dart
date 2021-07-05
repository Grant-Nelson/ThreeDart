part of ThreeDart.Shaders;

/// A shader for very basic solid color rendering.
class SolidColor extends Shader {

  /// The name for this shader.
  static const String defaultName = "SolidColor";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 projViewObjMat;                       \n"+
      "                                                   \n"+
      "attribute vec3 posAttr;                            \n"+
      "                                                   \n"+
      "void main()                                        \n"+
      "{                                                  \n"+
      "  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n"+
      "}                                                  \n";

  /// The fragment shader source code in glsl.
  static String _fragmentSource =
      "precision mediump float; \n"+
      "                         \n"+
      "uniform vec4 color;      \n"+
      "                         \n"+
      "void main()              \n"+
      "{                        \n"+
      "   gl_FragColor = color; \n"+
      "}                        \n";

  Attribute? _posAttr = null;
  Uniform4f? _clr = null;
  UniformMat4? _projViewObjMat = null;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory SolidColor.cached(Core.RenderState state) {
    SolidColor? shader = state.shader(defaultName) as SolidColor?;
    if (shader == null) {
      shader = new SolidColor(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  SolidColor(WebGL.RenderingContext2 gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr        = this.attributes["posAttr"];
    this._clr            = this.uniforms["color"] as Uniform4f;
    this._projViewObjMat = this.uniforms["projViewObjMat"] as UniformMat4;
  }

  /// The position vertex shader attribute.
  Attribute? get posAttr => this._posAttr;

  /// The color to draw the object with.
  Math.Color4 get color => this._clr?.getColor4() ?? Math.Color4.white();
  set color(Math.Color4 clr) => this._clr?.setColor4(clr);

  /// The projection matrix times view matrix times the object matrix.
  Math.Matrix4 get projViewObjectMatrix => this._projViewObjMat?.getMatrix4() ?? Math.Matrix4.identity;
  set projViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMat?.setMatrix4(mat);
}
