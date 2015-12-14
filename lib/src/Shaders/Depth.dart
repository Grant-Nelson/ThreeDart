part of ThreeDart.Shaders;

class Depth extends Shader {

  static const String defaultName = "Depth";

  static String _vertexSource =
      "uniform mat4 viewObjMat;                    \n"+
      "uniform mat4 projMat;                       \n"+
      "                                            \n"+
      "attribute vec3 posAttr;                     \n"+
      "                                            \n"+
      "varying float depth;                        \n"+
      "                                            \n"+
      "void main()                                 \n"+
      "{                                           \n"+
      "  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n"+
      "  depth = pos.z;                            \n"+
      "  gl_Position = projMat*pos;                \n"+
      "}                                           \n";

  static String _fragmentSource =
      "precision mediump float;                                  \n"+
      "                                                          \n"+
      "uniform vec3 objClr;                                      \n"+
      "uniform vec3 fogClr;                                      \n"+
      "uniform float fogStart;                                   \n"+
      "uniform float fogStop;                                    \n"+
      "                                                          \n"+
      "varying float depth;                                      \n"+
      "                                                          \n"+
      "void main()                                               \n"+
      "{                                                         \n"+
      "   float factor = (depth-fogStop)/(fogStart-fogStop);     \n"+
      "   factor = clamp(factor, 0.0, 1.0);                      \n"+
      "   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n"+
      "}                                                         \n";

  Attribute _posAttr;
  Uniform3f _objClr;
  Uniform3f _fogClr;
  Uniform1f _fogStart;
  Uniform1f _fogStop;
  UniformMat4 _viewObjMat;
  UniformMat4 _projMat;

  factory Depth.cached(Core.RenderState state) {
    Depth shader = state.shader(defaultName);
    if (shader == null) {
      shader = new Depth(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  Depth(WebGL.RenderingContext gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr    = this.attributes["posAttr"];
    this._objClr     = this.uniforms["objClr"] as Uniform3f;
    this._fogClr     = this.uniforms["fogClr"] as Uniform3f;
    this._fogStart   = this.uniforms["fogStart"] as Uniform1f;
    this._fogStop    = this.uniforms["fogStop"] as Uniform1f;
    this._viewObjMat = this.uniforms["viewObjMat"] as UniformMat4;
    this._projMat    = this.uniforms["projMat"] as UniformMat4;
  }

  Attribute get posAttr => this._posAttr;

  Math.Color3 get objectColor => this._objClr.getColor3();
  set objectColor(Math.Color3 clr) => this._objClr.setColor3(clr);

  Math.Color3 get fogColor => this._fogClr.getColor3();
  set fogColor(Math.Color3 clr) => this._fogClr.setColor3(clr);

  double get fogStart => this._fogStart.getValue();
  set fogStart(double value) => this._fogStart.setValue(value);

  double get fogStop => this._fogStop.getValue();
  set fogStop(double value) => this._fogStop.setValue(value);

  Math.Matrix4 get viewObjectMatrix => this._viewObjMat.getMatrix4();
  set viewObjectMatrix(Math.Matrix4 mat) => this._viewObjMat.setMatrix4(mat);

  Math.Matrix4 get projectMatrix => this._projMat.getMatrix4();
  set projectMatrix(Math.Matrix4 mat) => this._projMat.setMatrix4(mat);
}
