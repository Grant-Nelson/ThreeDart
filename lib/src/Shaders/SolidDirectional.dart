part of ThreeDart.Shaders;

class SolidDirectional extends Shader {

  static const String defaultName = "Solid Directional";

  static String _vertexSource =
      "uniform mat4 objMat;                                       \n"+
      "uniform mat4 viewMat;                                      \n"+
      "uniform mat4 projMat;                                      \n"+
      "uniform vec3 lightVec;                                     \n"+
      "                                                           \n"+
      "attribute vec3 posAttr;                                    \n"+
      "attribute vec3 normAttr;                                   \n"+
      "                                                           \n"+
      "varying vec3 normal;                                       \n"+
      "varying vec3 litVec;                                       \n"+
      "varying vec3 camPos;                                       \n"+
      "                                                           \n"+
      "void main()                                                \n"+
      "{                                                          \n"+
      "  camPos = (viewMat*vec4(0.0, 0.0, 0.0, -1.0)).xyz;        \n"+
      "  normal = normalize(objMat*vec4(normAttr, 0.0)).xyz;      \n"+
      "  litVec = normalize((viewMat*vec4(lightVec, 0.0)).xyz);   \n"+
      "  gl_Position = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n"+
      "}                                                          \n";

  static String _fragmentSource =
      "precision mediump float;                                   \n"+
      "                                                           \n"+
      "uniform vec3 lightClr;                                     \n"+
      "uniform vec3 emissionClr;                                  \n"+
      "uniform vec3 ambientClr;                                   \n"+
      "uniform vec3 diffuseClr;                                   \n"+
      "uniform vec3 specularClr;                                  \n"+
      "uniform float shininess;                                   \n"+
      "                                                           \n"+
      "varying vec3 normal;                                       \n"+
      "varying vec3 litVec;                                       \n"+
      "varying vec3 camPos;                                       \n"+
      "                                                           \n"+
      "vec3 diffuse(vec3 norm)                                    \n"+
      "{                                                          \n"+
      "   float scalar = dot(norm, litVec);                       \n"+
      "   return diffuseClr*max(scalar, 0.0);                     \n"+
      "}                                                          \n"+
      "                                                           \n"+
      "vec3 specular(vec3 norm)                                   \n"+
      "{                                                          \n"+
      "   vec3 lightRef = normalize(reflect(-litVec, norm));      \n"+
      "   float scalar = dot(lightRef, normalize(camPos));        \n"+
      "   if(scalar > 0.0)                                        \n"+
      "      return specularClr*max(pow(scalar, shininess), 0.0); \n"+
      "   else                                                    \n"+
      "      return vec3(0.0, 0.0, 0.0);                          \n"+
      "}                                                          \n"+
      "                                                           \n"+
      "void main()                                                \n"+
      "{                                                          \n"+
      "   vec3 norm = normalize(normal);                          \n"+
      "   vec3 litClr = lightClr*(ambientClr +                    \n"+
      "                 diffuse(norm) + specular(norm));          \n"+
      "   gl_FragColor = vec4(emissionClr + litClr, 1.0);         \n"+
      "}                                                          \n";

  Uniform3f _lightVecr;
  Uniform3f _lightClr;
  Uniform3f _emissionClr;
  Uniform3f _ambientClr;
  Uniform3f _diffuseClr;
  Uniform3f _specularClr;
  Uniform1f _shininess;
  UniformMat4 _objMat;
  UniformMat4 _viewMat;
  UniformMat4 _projMat;

  factory SolidDirectional.cached(Core.RenderState state) {
    SolidDirectional shader = state.shader(defaultName);
    if (shader == null) {
      shader = new SolidDirectional(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  SolidDirectional(WebGL.RenderingContext gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._lightVecr = this.uniforms["lightVecr"] as Uniform3f;
    this._lightClr = this.uniforms["lightClr"] as Uniform3f;
    this._emissionClr = this.uniforms["emissionClr"] as Uniform3f;
    this._ambientClr = this.uniforms["ambientClr"] as Uniform3f;
    this._diffuseClr = this.uniforms["diffuseClr"] as Uniform3f;
    this._specularClr = this.uniforms["specularClr"] as Uniform3f;
    this._shininess = this.uniforms["shininess"] as Uniform1f;
    this._objMat = this.uniforms["objMat"] as UniformMat4;
    this._viewMat = this.uniforms["viewMat"] as UniformMat4;
    this._projMat = this.uniforms["projMat"] as UniformMat4;
  }

  Math.Vector3 get lightVector => this._lightVecr.getVector3();
  set lightVector(Math.Vector3 vec) => this._lightVecr.setVector3(vec);

  Math.Color3 get lightColor => this._lightClr.getColor3();
  set lightColor(Math.Color3 clr) => this._lightClr.setColor3(clr);

  Math.Color3 get emissionColor => this._emissionClr.getColor3();
  set emissionColor(Math.Color3 clr) => this._emissionClr.setColor3(clr);

  Math.Color3 get ambientColor => this._ambientClr.getColor3();
  set ambientColor(Math.Color3 clr) => this._ambientClr.setColor3(clr);

  Math.Color3 get diffuseColor => this._diffuseClr.getColor3();
  set diffuseColor(Math.Color3 clr) => this._diffuseClr.setColor3(clr);

  Math.Color3 get specularColor => this._specularClr.getColor3();
  set specularColor(Math.Color3 clr) => this._specularClr.setColor3(clr);

  double get shininess => this._shininess.getValue();
  set shininess(double value) => this._shininess.setValue(value);

  Math.Matrix4 get objectMatrix => this._objMat.getMatrix4();
  set objectMatrix(Math.Matrix4 mat) => this._objMat.setMatrix4(mat);

  Math.Matrix4 get viewMatrix => this._viewMat.getMatrix4();
  set viewMatrix(Math.Matrix4 mat) => this._viewMat.setMatrix4(mat);

  Math.Matrix4 get projectMatrix => this._projMat.getMatrix4();
  set projectMatrix(Math.Matrix4 mat) => this._projMat.setMatrix4(mat);
}
