part of ThreeDart.Shaders;

/// A shader for rendering bumpy texture 2D directional light.
class BumpyTexture2DDirectional extends Shader {

  /// The name for this shader.
  static const String defaultName = "Bumpy Texture2D Directional";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 viewMat;                                        \n"+
      "uniform mat4 viewObjMat;                                     \n"+
      "uniform mat4 projViewObjMat;                                 \n"+
      "uniform vec3 lightVec;                                       \n"+
      "                                                             \n"+
      "attribute vec3 posAttr;                                      \n"+
      "attribute vec3 normAttr;                                     \n"+
      "attribute vec3 binmAttr;                                     \n"+
      "attribute vec2 txtAttr;                                      \n"+
      "                                                             \n"+
      "varying vec3 normal;                                         \n"+
      "varying vec3 binormal;                                       \n"+
      "varying vec3 litVec;                                         \n"+
      "varying vec3 camPos;                                         \n"+
      "varying vec2 txt2D;                                          \n"+
      "                                                             \n"+
      "void main()                                                  \n"+
      "{                                                            \n"+
      "   camPos = (viewMat*vec4(0.0, 0.0, 0.0, -1.0)).xyz;         \n"+
      "   normal = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;   \n"+
      "   binormal = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz; \n"+
      "   litVec = normalize((viewMat*vec4(lightVec, 0.0)).xyz);    \n"+
      "   txt2D = txtAttr;                                          \n"+
      "   gl_Position = projViewObjMat*vec4(posAttr, 1.0);          \n"+
      "}                                                            \n";

  /// The fragment shader source code in glsl.
  static String _fragmentSource =
      "precision mediump float;                                       \n"+
      "                                                               \n"+
      "uniform vec4 lightClr;                                         \n"+
      "uniform sampler2D emissionTxt;                                 \n"+
      "uniform sampler2D ambientTxt;                                  \n"+
      "uniform sampler2D diffuseTxt;                                  \n"+
      "uniform sampler2D specularTxt;                                 \n"+
      "uniform vec4 emissionClr;                                      \n"+
      "uniform vec4 ambientClr;                                       \n"+
      "uniform vec4 diffuseClr;                                       \n"+
      "uniform vec4 specularClr;                                      \n"+
      "uniform sampler2D bumpTxt;                                     \n"+
      "uniform float shininess;                                       \n"+
      "                                                               \n"+
      "varying vec3 normal;                                           \n"+
      "varying vec3 binormal;                                         \n"+
      "varying vec3 litVec;                                           \n"+
      "varying vec3 camPos;                                           \n"+
      "varying vec2 txt2D;                                            \n"+
      "                                                               \n"+
      "vec4 emission()                                                \n"+
      "{                                                              \n"+
      "   if (emissionClr.w <= 0.0) return vec4(0.0, 0.0, 0.0, 0.0);  \n"+
      "   return emissionClr*texture2D(emissionTxt, txt2D);           \n"+
      "}                                                              \n"+
      "                                                               \n"+
      "vec4 ambient()                                                 \n"+
      "{                                                              \n"+
      "   if (ambientClr.w <= 0.0) return vec4(0.0, 0.0, 0.0, 0.0);   \n"+
      "   return ambientClr*texture2D(ambientTxt, txt2D);             \n"+
      "}                                                              \n"+
      "                                                               \n"+
      "vec4 diffuse(vec3 norm)                                        \n"+
      "{                                                              \n"+
      "   if (diffuseClr.w <= 0.0) return vec4(0.0, 0.0, 0.0, 0.0);   \n"+
      "   float scalar = dot(norm, -litVec);                          \n"+
      "   if(scalar < 0.0) return vec4(0.0, 0.0, 0.0, 0.0);           \n"+
      "   return scalar*diffuseClr*texture2D(diffuseTxt, txt2D);      \n"+
      "}                                                              \n"+
      "                                                               \n"+
      "vec4 specular(vec3 norm)                                       \n"+
      "{                                                              \n"+
      "   if (specularClr.w <= 0.0) return vec4(0.0, 0.0, 0.0, 0.0);  \n"+
      "   if(dot(norm, -litVec) > 0.0)                                \n"+
      "   {                                                           \n"+
      "      vec3 lightRef = normalize(reflect(litVec, norm));        \n"+
      "      float scalar = dot(lightRef, normalize(camPos));         \n"+
      "      if(scalar > 0.0)                                         \n"+
      "      {                                                        \n"+
      "         vec4 clr = specularClr*texture2D(specularTxt, txt2D); \n"+
      "         return clr*pow(scalar, shininess);                    \n"+
      "      }                                                        \n"+
      "   }                                                           \n"+
      "   return vec4(0.0, 0.0, 0.0, 0.0);                            \n"+
      "}                                                              \n"+
      "                                                               \n"+
      "vec3 bumpyNormal()                                             \n"+
      "{                                                              \n"+
      "   vec3 color = texture2D(bumpTxt, txt2D).rgb;                 \n"+
      "   vec3 n = normalize(normal);                                 \n"+
      "   vec3 b = normalize(binormal);                               \n"+
      "   vec3 c = cross(b, n);                                       \n"+
      "   b = cross(n, c);                                            \n"+
      "   mat3 mat = mat3( b.x,  b.y,  b.z,                           \n"+
      "                   -c.x, -c.y, -c.z,                           \n"+
      "                    n.x,  n.y,  n.z);                          \n"+
      "   return mat * normalize(2.0*color - 1.0);                    \n"+
      "}                                                              \n"+
      "                                                               \n"+
      "void main()                                                    \n"+
      "{                                                              \n"+
      "   vec3 norm = bumpyNormal();                                  \n"+
      "   vec4 clr = ambient() + diffuse(norm) + specular(norm);      \n"+
      "   gl_FragColor = emission() + lightClr*clr;                   \n"+
      "}                                                              \n";

  Attribute _posAttr;
  Attribute _normAttr;
  Attribute _binmAttr;
  Attribute _txtAttr;
  Uniform3f _lightVec;
  Uniform4f _lightClr;
  UniformSampler2D _emissionTxt;
  UniformSampler2D _ambientTxt;
  UniformSampler2D _diffuseTxt;
  UniformSampler2D _specularTxt;
  Uniform4f _emissionClr;
  Uniform4f _ambientClr;
  Uniform4f _diffuseClr;
  Uniform4f _specularClr;
  Uniform1f _shininess;
  UniformSampler2D _bumpTxt;
  UniformMat4 _viewObjMat;
  UniformMat4 _viewMat;
  UniformMat4 _projViewObjMat;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory BumpyTexture2DDirectional.cached(Core.RenderState state) {
    BumpyTexture2DDirectional shader = state.shader(defaultName);
    if (shader == null) {
      shader = new BumpyTexture2DDirectional(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  BumpyTexture2DDirectional(WebGL.RenderingContext gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr        = this.attributes["posAttr"];
    this._normAttr       = this.attributes["normAttr"];
    this._binmAttr       = this.attributes["binmAttr"];
    this._txtAttr        = this.attributes["txtAttr"];
    this._lightVec       = this.uniforms["lightVec"] as Uniform3f;
    this._lightClr       = this.uniforms["lightClr"] as Uniform4f;
    this._emissionTxt    = this.uniforms["emissionTxt"] as UniformSampler2D;
    this._emissionClr    = this.uniforms["emissionClr"] as Uniform4f;
    this._ambientTxt     = this.uniforms["ambientTxt"] as UniformSampler2D;
    this._ambientClr     = this.uniforms["ambientClr"] as Uniform4f;
    this._diffuseTxt     = this.uniforms["diffuseTxt"] as UniformSampler2D;
    this._diffuseClr     = this.uniforms["diffuseClr"] as Uniform4f;
    this._specularTxt    = this.uniforms["specularTxt"] as UniformSampler2D;
    this._specularClr    = this.uniforms["specularClr"] as Uniform4f;
    this._shininess      = this.uniforms["shininess"] as Uniform1f;
    this._bumpTxt        = this.uniforms["bumpTxt"] as UniformSampler2D;
    this._viewObjMat     = this.uniforms["viewObjMat"] as UniformMat4;
    this._viewMat        = this.uniforms["viewMat"] as UniformMat4;
    this._projViewObjMat = this.uniforms["projViewObjMat"] as UniformMat4;
  }

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The normal vertex shader attribute.
  Attribute get normAttr => this._normAttr;

  /// The binormal vertex shader attribute.
  Attribute get binmAttr => this._binmAttr;

  /// The texture vertex shader attribute.
  Attribute get txtAttr => this._txtAttr;

  /// The direction the light is pointing.
  Math.Vector3 get lightVector => this._lightVec.getVector3();
  set lightVector(Math.Vector3 vec) => this._lightVec.setVector3(vec);

  /// The color of the light.
  Math.Color4 get lightColor => this._lightClr.getColor4();
  set lightColor(Math.Color4 clr) => this._lightClr.setColor4(clr);

  /// Sets the directional light's vector and color.
  void setLight(Lights.Directional light) {
    this.lightVector = light.direction;
    this.lightColor = light.color;
  }

  /// The emission texture of the object.
  set emissionTexture(Textures.Texture2D txt) =>
    this._emissionTxt.setTexture2D(txt);

  /// The ambient texture of the object.
  set ambientTexture(Textures.Texture2D txt) =>
    this._ambientTxt.setTexture2D(txt);

  /// The diffuse texture of the object.
  set diffuseTexture(Textures.Texture2D txt) =>
    this._diffuseTxt.setTexture2D(txt);

  /// The specular texture of the object.
  set specularTexture(Textures.Texture2D txt) =>
    this._specularTxt.setTexture2D(txt);

  /// The emission color scalar of the object.
  Math.Color4 get emissionColor => this._emissionClr.getColor4();
  set emissionColor(Math.Color4 clr) => this._emissionClr.setColor4(clr);

  /// The ambient color scalar of the object.
  Math.Color4 get ambientColor => this._ambientClr.getColor4();
  set ambientColor(Math.Color4 clr) => this._ambientClr.setColor4(clr);

  /// The diffuse color scalar of the object.
  Math.Color4 get diffuseColor => this._diffuseClr.getColor4();
  set diffuseColor(Math.Color4 clr) => this._diffuseClr.setColor4(clr);

  /// The specular color scalar of the object.
  Math.Color4 get specularColor => this._specularClr.getColor4();
  set specularColor(Math.Color4 clr) => this._specularClr.setColor4(clr);

  /// The normal distortion texture of the object.
  set bumpTexture(Textures.Texture2D txt) =>
    this._bumpTxt.setTexture2D(txt);

  /// The shininess value of the specualr.
  double get shininess => this._shininess.getValue();
  set shininess(double value) => this._shininess.setValue(value);

  /// Sets the material's colors.
  void setMaterial(Materials.BumpyTexture2D material) {
    this.emissionTexture = material.emissionTexture;
    this.ambientTexture = material.ambientTexture;
    this.diffuseTexture = material.diffuseTexture;
    this.specularTexture = material.specularTexture;
    this.emissionColor = material.emissionColor;
    this.ambientColor = material.ambientColor;
    this.diffuseColor = material.diffuseColor;
    this.specularColor = material.specularColor;
    this.bumpTexture = material.bumpMap;
    this.shininess = material.shininess;
  }

  /// The view matrix multiplied by the object matrix.
  Math.Matrix4 get viewObjectMatrix => this._viewObjMat.getMatrix4();
  set viewObjectMatrix(Math.Matrix4 mat) => this._viewObjMat.setMatrix4(mat);

  /// The view matrix.
  Math.Matrix4 get viewMatrix => this._viewMat.getMatrix4();
  set viewMatrix(Math.Matrix4 mat) => this._viewMat.setMatrix4(mat);

  /// The product of the projection matrix, view matrix, and object matrix.
  Math.Matrix4 get projectViewObjectMatrix => this._projViewObjMat.getMatrix4();
  set projectViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMat.setMatrix4(mat);
}
