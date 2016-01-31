part of ThreeDart.Shaders;

/// A shader designed for inspecting shapes.
class Inspection extends Shader {

  /// The name for this shader.
  static const String defaultName = "Inspection";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 objMat;                                        \n"+
      "uniform mat4 viewMat;                                       \n"+
      "uniform mat4 projMat;                                       \n"+
      "uniform vec3 lightVec;                                      \n"+
      "                                                            \n"+
      "attribute vec3 posAttr;                                     \n"+
      "attribute vec3 normAttr;                                    \n"+
      "attribute vec3 clrAttr;                                     \n"+
      "                                                            \n"+
      "varying vec3 normal;                                        \n"+
      "varying vec3 color;                                         \n"+
      "varying vec3 litVec;                                        \n"+
      "varying vec3 camPos;                                        \n"+
      "                                                            \n"+
      "void main()                                                 \n"+
      "{                                                           \n"+
      "   gl_PointSize = 6.0;                                      \n"+
      "   color = clrAttr;                                         \n"+
      "   camPos = (viewMat*vec4(0.0, 0.0, 0.0, -1.0)).xyz;        \n"+
      "   normal = normalize(objMat*vec4(normAttr, 0.0)).xyz;      \n"+
      "   litVec = normalize((viewMat*vec4(lightVec, 0.0)).xyz);   \n"+
      "   gl_Position = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n"+
      "}                                                           \n";

  /// The fragment shader source code in glsl.
  static String _fragmentSource =
      "precision mediump float;                                   \n"+
      "                                                           \n"+
      "uniform vec3 ambientClr;                                   \n"+
      "uniform vec3 diffuseClr;                                   \n"+
      "                                                           \n"+
      "varying vec3 normal;                                       \n"+
      "varying vec3 color;                                        \n"+
      "varying vec3 litVec;                                       \n"+
      "varying vec3 camPos;                                       \n"+
      "                                                           \n"+
      "void main()                                                \n"+
      "{                                                          \n"+
      "   vec3 norm = normalize(normal);                          \n"+
      "   float scalar = dot(norm, litVec);                       \n"+
      "   vec3 diffuse = diffuseClr*max(scalar, 0.0);             \n"+
      "   gl_FragColor = vec4(color*(ambientClr + diffuse), 1.0); \n"+
      "}                                                          \n";

  Attribute _posAttr;
  Attribute _normAttr;
  Attribute _clrAttr;
  Uniform3f _lightVec;
  Uniform3f _ambientClr;
  Uniform3f _diffuseClr;
  UniformMat4 _objMat;
  UniformMat4 _viewMat;
  UniformMat4 _projMat;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory Inspection.cached(Core.RenderState state) {
    Inspection shader = state.shader(defaultName);
    if (shader == null) {
      shader = new Inspection(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  Inspection(WebGL.RenderingContext gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr    = this.attributes["posAttr"];
    this._normAttr   = this.attributes["normAttr"];
    this._clrAttr    = this.attributes["clrAttr"];
    this._lightVec   = this.uniforms["lightVec"] as Uniform3f;
    this._ambientClr = this.uniforms["ambientClr"] as Uniform3f;
    this._diffuseClr = this.uniforms["diffuseClr"] as Uniform3f;
    this._objMat     = this.uniforms["objMat"] as UniformMat4;
    this._viewMat    = this.uniforms["viewMat"] as UniformMat4;
    this._projMat    = this.uniforms["projMat"] as UniformMat4;
  }

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The normal vertex shader attribute.
  Attribute get normAttr => this._normAttr;

  /// The color vertex shader attribute.
  Attribute get clrAttr => this._clrAttr;

  /// The direction of the light on to the shape.
  Math.Vector3 get lightVector => this._lightVec.getVector3();
  set lightVector(Math.Vector3 vec) => this._lightVec.setVector3(vec);

  /// The ambient color of the shape.
  Math.Color3 get ambientColor => this._ambientClr.getColor3();
  set ambientColor(Math.Color3 clr) => this._ambientClr.setColor3(clr);

  /// The diffuse color of the shape.
  Math.Color3 get diffuseColor => this._diffuseClr.getColor3();
  set diffuseColor(Math.Color3 clr) => this._diffuseClr.setColor3(clr);

  /// Sets both the ambient color and diffuse color of the shape.
  void setColors(Math.Color3 ambientClr, Math.Color3 diffuseClr) {
    this._ambientClr.setColor3(ambientClr);
    this._diffuseClr.setColor3(diffuseClr);
  }

  /// The object matrix.
  Math.Matrix4 get objectMatrix => this._objMat.getMatrix4();
  set objectMatrix(Math.Matrix4 mat) => this._objMat.setMatrix4(mat);

  /// The view matrix.
  Math.Matrix4 get viewMatrix => this._viewMat.getMatrix4();
  set viewMatrix(Math.Matrix4 mat) => this._viewMat.setMatrix4(mat);

  /// The projection matrix.
  Math.Matrix4 get projectMatrix => this._projMat.getMatrix4();
  set projectMatrix(Math.Matrix4 mat) => this._projMat.setMatrix4(mat);
}
