part of ThreeDart.Shaders;

/// A shader designed for inspecting shapes.
class Inspection extends Shader {

  /// The name for this shader.
  static const String defaultName = "Inspection";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 viewMat;                                         \n"+
      "uniform mat4 viewObjMatrix;                                   \n"+
      "uniform mat4 projViewObjMatrix;                               \n"+
      "uniform vec3 lightVec;                                        \n"+
      "uniform float weightScalar;                                   \n"+
      "                                                              \n"+
      "attribute vec3 posAttr;                                       \n"+
      "attribute vec3 normAttr;                                      \n"+
      "attribute vec3 clrAttr;                                       \n"+
      "attribute vec3 binmAttr;                                      \n"+
      "                                                              \n"+
      "varying vec3 normal;                                          \n"+
      "varying vec3 color;                                           \n"+
      "varying vec3 litVec;                                          \n"+
      "varying vec3 camPos;                                          \n"+
      "                                                              \n"+
      "void main()                                                   \n"+
      "{                                                             \n"+
      "   gl_PointSize = 6.0;                                        \n"+
      "   color = clrAttr;                                           \n"+
      "   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n"+
      "   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n"+
      "   vec3 pos = posAttr + binmAttr*weightScalar;                \n"+
      "   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n"+
      "}                                                             \n";

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
  Attribute _binmAttr;
  Uniform3f _lightVec;
  Uniform3f _ambientClr;
  Uniform3f _diffuseClr;
  Uniform1f _weightScalar;
  UniformMat4 _viewMat;
  UniformMat4 _viewObjMatrix;
  UniformMat4 _projViewObjMatrix;

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
    this._posAttr           = this.attributes["posAttr"];
    this._normAttr          = this.attributes["normAttr"];
    this._clrAttr           = this.attributes["clrAttr"];
    this._binmAttr          = this.attributes["binmAttr"];
    this._lightVec          = this.uniforms["lightVec"] as Uniform3f;
    this._ambientClr        = this.uniforms["ambientClr"] as Uniform3f;
    this._diffuseClr        = this.uniforms["diffuseClr"] as Uniform3f;
    this._weightScalar      = this.uniforms["weightScalar"] as Uniform1f;
    this._viewMat           = this.uniforms["viewMat"] as UniformMat4;
    this._viewObjMatrix     = this.uniforms["viewObjMatrix"] as UniformMat4;
    this._projViewObjMatrix = this.uniforms["projViewObjMatrix"] as UniformMat4;
  }

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The normal vertex shader attribute.
  Attribute get normAttr => this._normAttr;

  /// The color vertex shader attribute.
  Attribute get clrAttr => this._clrAttr;

  /// The binormal vertex shader attribute.
  Attribute get binmAttr => this._binmAttr;

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

  /// The scalar of the weighting for the shape.
  double get weightScalar => this._weightScalar.getValue();
  set weightScalar(double scalar) => this._weightScalar.setValue(scalar);

  /// The view matrix.
  Math.Matrix4 get viewMatrix => this._viewMat.getMatrix4();
  set viewMatrix(Math.Matrix4 mat) => this._viewMat.setMatrix4(mat);

  /// The view object matrix.
  Math.Matrix4 get viewObjectMatrix => this._viewObjMatrix.getMatrix4();
  set viewObjectMatrix(Math.Matrix4 mat) => this._viewObjMatrix.setMatrix4(mat);

  /// The projection view object matrix.
  Math.Matrix4 get projectViewObjectMatrix => this._projViewObjMatrix.getMatrix4();
  set projectViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMatrix.setMatrix4(mat);
}
