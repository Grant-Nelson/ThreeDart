part of ThreeDart.Shaders;

/// A shader for rendering solid color directional light.
class SolidDirectional extends Shader {

  /// The name for this shader.
  static const String defaultName = "Solid Directional";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 objMat;                                        \n"+
      "uniform mat4 viewMat;                                       \n"+
      "uniform mat4 projMat;                                       \n"+
      "uniform vec3 lightVec;                                      \n"+
      "                                                            \n"+
      "attribute vec3 posAttr;                                     \n"+
      "attribute vec3 normAttr;                                    \n"+
      "                                                            \n"+
      "varying vec3 normal;                                        \n"+
      "varying vec3 litVec;                                        \n"+
      "varying vec3 camPos;                                        \n"+
      "                                                            \n"+
      "void main()                                                 \n"+
      "{                                                           \n"+
      "   camPos = (viewMat*vec4(0.0, 0.0, 0.0, -1.0)).xyz;        \n"+
      "   normal = normalize(objMat*vec4(normAttr, 0.0)).xyz;      \n"+
      "   litVec = normalize((viewMat*vec4(lightVec, 0.0)).xyz);   \n"+
      "   gl_Position = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n"+
      "}                                                           \n";

  /// The fragment shader source code in glsl.
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
      "   if(dot(norm, litVec) > 0.0)                             \n"+
      "   {                                                       \n"+
      "      vec3 lightRef = normalize(reflect(litVec, norm));    \n"+
      "      float scalar = dot(lightRef, normalize(camPos));     \n"+
      "      return specularClr*pow(max(scalar, 0.0), shininess); \n"+
      "   }                                                       \n"+
      "   return vec3(0.0, 0.0, 0.0);                             \n"+
      "}                                                          \n"+
      "                                                           \n"+
      "void main()                                                \n"+
      "{                                                          \n"+
      "   vec3 norm = normalize(normal);                          \n"+
      "   vec3 litClr = lightClr*(ambientClr +                    \n"+
      "                 diffuse(norm) + specular(norm));          \n"+
      "   gl_FragColor = vec4(emissionClr + litClr, 1.0);         \n"+
      "}                                                          \n";

  Attribute _posAttr;
  Attribute _normAttr;
  Uniform3f _lightVec;
  Uniform3f _lightClr;
  Uniform3f _emissionClr;
  Uniform3f _ambientClr;
  Uniform3f _diffuseClr;
  Uniform3f _specularClr;
  Uniform1f _shininess;
  UniformMat4 _objMat;
  UniformMat4 _viewMat;
  UniformMat4 _projMat;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory SolidDirectional.cached(Core.RenderState state) {
    SolidDirectional shader = state.shader(defaultName);
    if (shader == null) {
      shader = new SolidDirectional(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  SolidDirectional(WebGL.RenderingContext gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr     = this.attributes["posAttr"];
    this._normAttr    = this.attributes["normAttr"];
    this._lightVec    = this.uniforms["lightVec"] as Uniform3f;
    this._lightClr    = this.uniforms["lightClr"] as Uniform3f;
    this._emissionClr = this.uniforms["emissionClr"] as Uniform3f;
    this._ambientClr  = this.uniforms["ambientClr"] as Uniform3f;
    this._diffuseClr  = this.uniforms["diffuseClr"] as Uniform3f;
    this._specularClr = this.uniforms["specularClr"] as Uniform3f;
    this._shininess   = this.uniforms["shininess"] as Uniform1f;
    this._objMat      = this.uniforms["objMat"] as UniformMat4;
    this._viewMat     = this.uniforms["viewMat"] as UniformMat4;
    this._projMat     = this.uniforms["projMat"] as UniformMat4;
  }

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The normal vertex shader attribute.
  Attribute get normAttr => this._normAttr;

  /// The direction the light is pointing.
  Math.Vector3 get lightVector => this._lightVec.getVector3();
  set lightVector(Math.Vector3 vec) => this._lightVec.setVector3(vec);

  /// The color of the light.
  Math.Color3 get lightColor => this._lightClr.getColor3();
  set lightColor(Math.Color3 clr) => this._lightClr.setColor3(clr);

  /// Sets the directional light's vector and color.
  void setLight(Lights.Directional light) {
    this.lightVector = light.direction;
    this.lightColor = light.color;
  }

  /// The emission color of the object.
  Math.Color3 get emissionColor => this._emissionClr.getColor3();
  set emissionColor(Math.Color3 clr) => this._emissionClr.setColor3(clr);

  /// The ambient color of the object.
  Math.Color3 get ambientColor => this._ambientClr.getColor3();
  set ambientColor(Math.Color3 clr) => this._ambientClr.setColor3(clr);

  /// The diffuse color of the object.
  Math.Color3 get diffuseColor => this._diffuseClr.getColor3();
  set diffuseColor(Math.Color3 clr) => this._diffuseClr.setColor3(clr);

  /// The specular color of the object.
  Math.Color3 get specularColor => this._specularClr.getColor3();
  set specularColor(Math.Color3 clr) => this._specularClr.setColor3(clr);

  /// The shininess value of the specualr.
  double get shininess => this._shininess.getValue();
  set shininess(double value) => this._shininess.setValue(value);

  /// Sets the material's colors.
  void setMaterial(Materials.Solid material) {
    this.emissionColor = material.emission;
    this.ambientColor = material.ambient;
    this.diffuseColor = material.diffuse;
    this.specularColor = material.specular;
    this.shininess = material.shininess;
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
