part of ThreeDart.test.test008;

/// A shader for rendering and testing parallax texturing.
class ParallaxShader extends Shaders.Shader {

  /// The name for this shader.
  static const String defaultName = "Parallax Debugging Shader";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 objMat;                                              \n"+
      "uniform mat4 viewObjMat;                                          \n"+
      "uniform mat4 projViewObjMat;                                      \n"+
      "                                                                  \n"+
      "attribute vec3 posAttr;                                           \n"+
      "attribute vec3 normAttr;                                          \n"+
      "attribute vec3 binmAttr;                                          \n"+
      "attribute vec2 txt2DAttr;                                         \n"+
      "                                                                  \n"+
      "varying vec3 normalVec;                                           \n"+
      "varying vec3 binormalVec;                                         \n"+
      "varying vec2 txt2D;                                               \n"+
      "varying vec3 objPos;                                              \n"+
      "varying vec3 viewPos;                                             \n"+
      "                                                                  \n"+
      "void main()                                                       \n"+
      "{                                                                 \n"+
      "   normalVec   = normalize((viewObjMat*vec4(normAttr, 0.0)).xyz); \n"+
      "   binormalVec = normalize((viewObjMat*vec4(binmAttr, 0.0)).xyz); \n"+
      "   txt2D = txt2DAttr;                                             \n"+
      "   objPos  = (objMat    *vec4(posAttr, 1.0)).xyz;                 \n"+
      "   viewPos = (viewObjMat*vec4(posAttr, 1.0)).xyz;                 \n"+
      "   gl_Position = projViewObjMat*vec4(posAttr, 1.0);               \n"+
      "}                                                                 \n";

  /// The fragment shader source code in glsl.
  static String _fragmentSource =
      "precision mediump float;                                                 \n"+
      "                                                                         \n"+
      "varying vec3 normalVec;                                                  \n"+
      "varying vec3 binormalVec;                                                \n"+
      "varying vec2 txt2D;                                                      \n"+
      "varying vec3 objPos;                                                     \n"+
      "varying vec3 viewPos;                                                    \n"+
      "                                                                         \n"+
      "uniform vec3 ambientClr;                                                 \n"+
      "uniform vec3 diffuseClr;                                                 \n"+
      "uniform vec3 specularClr;                                                \n"+
      "uniform float shininess;                                                 \n"+
      "uniform sampler2D colorTxt;                                              \n"+
      "uniform sampler2D bumpTxt;                                               \n"+
      "uniform sampler2D heightTxt;                                             \n"+
      "uniform vec3 lightViewDir;                                               \n"+
      "uniform float heightScale;                                               \n"+
      "                                                                         \n"+
      "// === Parallax & Normal ===                                             \n"+
      "                                                                         \n"+
      "mat3 tbnMat;                                                             \n"+
      "void setTBNMatrix()                                                      \n"+
      "{                                                                        \n"+
      "   vec3 n = normalize(normalVec);                                        \n"+
      "   vec3 b = normalize(binormalVec);                                      \n"+
      "   vec3 c = normalize(cross(b, n));                                      \n"+
      "   b = cross(n, c);                                                      \n"+
      "   tbnMat = mat3( b.x,  b.y,  b.z,                                       \n"+
      "                 -c.x, -c.y, -c.z,                                       \n"+
      "                  n.x,  n.y,  n.z);                                      \n"+
      "}                                                                        \n"+
      "                                                                         \n"+
      "const float numLayers = 10.0;                                             \n"+
      "                                                                         \n"+
      "vec2 txtCoords;                                                          \n"+
      "void setParallaxMapping()                                                \n"+
      "{                                                                        \n"+
      "   //vec3 viewDir = normalize(tbnMat*viewPos);                             \n"+
      "   vec3 viewDir = normalize(tbnMat*vec3(0.0, 0.0, -1.0));                  \n"+
      "   float layerDepth = 1.0/numLayers;                                     \n"+
      "   vec2 txtOffset = -viewDir.xy * heightScale;                           \n"+
      "   vec2 deltaTxtCoords = txtOffset / numLayers;                          \n"+
      "                                                                         \n"+
      "   float curLayerDepth = 0.0;                                            \n"+
      "   vec2 curTxtCoords = txt2D;                                            \n"+
      "   float curDepthMapValue = 1.0-texture2D(heightTxt, curTxtCoords).r;        \n"+
      "                                                                         \n"+
      "   for(int i = 0; i < 10; ++i)                                           \n"+
      "   {                                                                     \n"+
      "      if(curLayerDepth >= curDepthMapValue) break;                       \n"+
      "      curTxtCoords -= deltaTxtCoords;                                    \n"+
      "      curDepthMapValue = 1.0-texture2D(heightTxt, curTxtCoords).r;           \n"+
      "      curLayerDepth += layerDepth;                                       \n"+
      "   }                                                                     \n"+
      "                                                                         \n"+
      "   txtCoords = curTxtCoords;                                             \n"+
      "   if(txtCoords.x > 1.0 || txtCoords.y > 1.0 ||                          \n"+
      "      txtCoords.x < 0.0 || txtCoords.y < 0.0)                            \n"+
      "      discard;                                                           \n"+
      "}                                                                        \n"+
      "                                                                         \n"+
      "vec3 normal()                                                            \n"+
      "{                                                                        \n"+
      "   vec3 color = texture2D(bumpTxt, txtCoords).rgb;                       \n"+
      "   return tbnMat * normalize(2.0*color - 1.0);                           \n"+
      "}                                                                        \n"+
      "                                                                         \n"+
      "// === Material ===                                                      \n"+
      "                                                                         \n"+
      "vec3 ambientColor;                                                       \n"+
      "vec3 diffuseColor;                                                       \n"+
      "vec3 specularColor;                                                      \n"+
      "void setMaterialColors()                                                 \n"+
      "{                                                                        \n"+
      "   vec3 txtClr = texture2D(colorTxt, txtCoords).rgb;                     \n"+
      "   ambientColor = ambientClr*txtClr;                                     \n"+
      "   diffuseColor = diffuseClr*txtClr;                                     \n"+
      "   specularColor = specularClr*txtClr;                                   \n"+
      "}                                                                        \n"+
      "                                                                         \n"+
      "vec3 diffuse(vec3 norm, vec3 litVec)                                     \n"+
      "{                                                                        \n"+
      "   float scalar = dot(norm, -litVec);                                    \n"+
      "   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);                          \n"+
      "   return diffuseColor*scalar;                                           \n"+
      "}                                                                        \n"+
      "                                                                         \n"+
      "vec3 specular(vec3 norm, vec3 litVec)                                    \n"+
      "{                                                                        \n"+
      "   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);              \n"+
      "   vec3 lightRef = normalize(reflect(litVec, norm));                     \n"+
      "   float scalar = dot(lightRef, -normalize(viewPos));                    \n"+
      "   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);                          \n"+
      "   return specularColor*pow(scalar, shininess);                          \n"+
      "}                                                                        \n"+
      "                                                                         \n"+
      "// === DirLight ===                                                      \n"+
      "                                                                         \n"+
      "vec3 dirLightValue(vec3 norm)                                            \n"+
      "{                                                                        \n"+
      "   vec3 highLight = vec3(0.0, 0.0, 0.0);                                 \n"+
      "   highLight = diffuse(norm, lightViewDir)                               \n"+
      "             + specular(norm, lightViewDir);                             \n"+
      "   return ambientColor + highLight;                                      \n"+
      "}                                                                        \n"+
      "                                                                         \n"+
      "// === Main ===                                                          \n"+
      "                                                                         \n"+
      "void main()                                                              \n"+
      "{                                                                        \n"+
      "   setTBNMatrix();                                                       \n"+
      "   setParallaxMapping();                                                 \n"+
      "   vec3 norm = normal();                                                 \n"+
      "   setMaterialColors();                                                  \n"+
      "   vec3 lightAccum = dirLightValue(norm);                                \n"+
      "   gl_FragColor = vec4(lightAccum, 1.0);                                 \n"+
      "}                                                                        \n";

  Shaders.Attribute _posAttr;
  Shaders.Attribute _normAttr;
  Shaders.Attribute _binmAttr;
  Shaders.Attribute _txt2DAttr;

  Shaders.UniformMat4 _objMat;
  Shaders.UniformMat4 _viewObjMat;
  Shaders.UniformMat4 _projViewObjMat;

  Shaders.UniformSampler2D _colorTxt;
  Shaders.UniformSampler2D _bumpTxt;
  Shaders.UniformSampler2D _heightTxt;

  Shaders.Uniform3f _lightViewDir;
  Shaders.Uniform3f _ambientClr;
  Shaders.Uniform3f _diffuseClr;
  Shaders.Uniform3f _specularClr;
  Shaders.Uniform1f _shininess;
  Shaders.Uniform1f _heightScale;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory ParallaxShader.cached(ThreeDart.RenderState state) {
    ParallaxShader shader = state.shader(defaultName);
    if (shader == null) {
      shader = new ParallaxShader(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  ParallaxShader(WebGL.RenderingContext2 gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr   = this.attributes["posAttr"];
    this._normAttr  = this.attributes["normAttr"];
    this._binmAttr  = this.attributes["binmAttr"];
    this._txt2DAttr = this.attributes["txt2DAttr"];

    this._objMat         = this.uniforms["objMat"] as Shaders.UniformMat4;
    this._viewObjMat     = this.uniforms["viewObjMat"] as Shaders.UniformMat4;
    this._projViewObjMat = this.uniforms["projViewObjMat"] as Shaders.UniformMat4;

    this._colorTxt  = this.uniforms["colorTxt"]  as Shaders.UniformSampler2D;
    this._bumpTxt   = this.uniforms["bumpTxt"]   as Shaders.UniformSampler2D;
    this._heightTxt = this.uniforms["heightTxt"] as Shaders.UniformSampler2D;

    this._lightViewDir = this.uniforms["lightViewDir"] as Shaders.Uniform3f;
    this._ambientClr   = this.uniforms["ambientClr"]   as Shaders.Uniform3f;
    this._diffuseClr   = this.uniforms["diffuseClr"]   as Shaders.Uniform3f;
    this._specularClr  = this.uniforms["specularClr"]  as Shaders.Uniform3f;
    this._shininess    = this.uniforms["shininess"]    as Shaders.Uniform1f;
    this._heightScale  = this.uniforms["heightScale"]  as Shaders.Uniform1f;
  }

  /// The position vertex shader attribute.
  Shaders.Attribute get posAttr => this._posAttr;

  /// The normal vertex shader attribute.
  Shaders.Attribute get normAttr => this._normAttr;

  /// The binormal vertex shader attribute.
  Shaders.Attribute get binmAttr => this._binmAttr;

  /// The texture 2D vertex shader attribute.
  Shaders.Attribute get txt2DAttr => this._txt2DAttr;

  /// The object matrix.
  Math.Matrix4 get objectMatrix => this._objMat.getMatrix4();
  set objectMatrix(Math.Matrix4 mat) => this._objMat.setMatrix4(mat);

  /// The view object matrix.
  Math.Matrix4 get viewObjectMatrix => this._viewObjMat.getMatrix4();
  set viewObjectMatrix(Math.Matrix4 mat) => this._viewObjMat.setMatrix4(mat);

  /// The projection view object matrix.
  Math.Matrix4 get projectionViewObjectMatrix => this._projViewObjMat.getMatrix4();
  set projectionViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMat.setMatrix4(mat);

  /// The color texture of the object.
  set colorTexture(Textures.Texture2D txt) {
    if (txt != null) this._colorTxt.setTexture2D(txt);
  }

  /// The bump texture of the object.
  set bumpTexture(Textures.Texture2D txt) {
    if (txt != null) this._bumpTxt.setTexture2D(txt);
  }

  /// The height texture of the object.
  set heightTexture(Textures.Texture2D txt) {
    if (txt != null) this._heightTxt.setTexture2D(txt);
  }

  /// The light view direction.
  Math.Vector3 get lightViewDirection => this._lightViewDir.getVector3();
  set lightViewDirection(Math.Vector3 vec) => this._lightViewDir.setVector3(vec);
  
  /// The ambient color for the material.
  Math.Color3 get ambientColor => this._ambientClr.getColor3();
  set ambientColor(Math.Color3 clr) => this._ambientClr.setColor3(clr);
  
  /// The diffuse color for the material.
  Math.Color3 get diffuseColor => this._diffuseClr.getColor3();
  set diffuseColor(Math.Color3 clr) => this._diffuseClr.setColor3(clr);
  
  /// The specular color for the material.
  Math.Color3 get specularColor => this._specularClr.getColor3();
  set specularColor(Math.Color3 clr) => this._specularClr.setColor3(clr);
  
  /// The shininess value.
  double get shininess => this._shininess.getValue();
  set shininess(double value) => this._shininess.setValue(value);
  
  /// The scalar for parallax height.
  double get heightScale => this._heightScale.getValue();
  set heightScale(double value) => this._heightScale.setValue(value);
}
