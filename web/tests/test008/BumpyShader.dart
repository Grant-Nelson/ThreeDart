part of ThreeDart.test.test008;

/// A shader for rendering and testing bumpy normals.
class BumpyShader extends Shaders.Shader {

  /// The name for this shader.
  static const String defaultName = "Bumpy Debugging Shader";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 objMat;                                     \n"+
      "uniform mat4 viewMat;                                    \n"+
      "uniform mat4 projMat;                                    \n"+
      "uniform sampler2D bumpTxt;                               \n"+
      "uniform float offsetScalar;                              \n"+
      "                                                         \n"+
      "attribute vec3 posAttr;                                  \n"+
      "attribute vec3 normAttr;                                 \n"+
      "attribute vec3 binmAttr;                                 \n"+
      "attribute vec2 txtAttr;                                  \n"+
      "attribute float weightAttr;                              \n"+
      "                                                         \n"+
      "varying vec3 color;                                      \n"+
      "                                                         \n"+
      "vec3 bumpyNormal(vec3 color)                             \n"+
      "{                                                        \n"+
      "   vec3 n = normalize(objMat*vec4(normAttr, 0.0)).xyz;   \n"+
      "   vec3 b = normalize(objMat*vec4(binmAttr, 0.0)).xyz;   \n"+
      "   vec3 c = cross(b, n);                                 \n"+
      "   b = cross(n, c);                                      \n"+
      "   mat3 mat = mat3( b.x,  b.y,  b.z,                     \n"+
      "                   -c.x, -c.y, -c.z,                     \n"+
      "                    n.x,  n.y,  n.z);                    \n"+
      "   return mat * normalize(2.0*color - 1.0);              \n"+
      "}                                                        \n"+
      "                                                         \n"+
      "void main()                                              \n"+
      "{                                                        \n"+
      "   color = texture2D(bumpTxt, txtAttr).rgb;              \n"+
      "   vec4 pnt = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n"+
      "   if (weightAttr > 0.5)                                 \n"+
      "   {                                                     \n"+
      "     pnt += vec4(bumpyNormal(color)*offsetScalar, 0.0);  \n"+
      "   }                                                     \n"+
      "   gl_Position = pnt;                                    \n"+
      "}                                                        \n";

  /// The fragment shader source code in glsl.
  static String _fragmentSource =
      "precision mediump float;            \n"+
      "                                    \n"+
      "varying vec3 color;                 \n"+
      "                                    \n"+
      "void main()                         \n"+
      "{                                   \n"+
      "   gl_FragColor = vec4(color, 1.0); \n"+
      "}                                   \n";

  Shaders.Attribute _posAttr;
  Shaders.Attribute _normAttr;
  Shaders.Attribute _binmAttr;
  Shaders.Attribute _txtAttr;
  Shaders.Attribute _weightAttr;

  Shaders.UniformSampler2D _bumpTxt;
  Shaders.UniformMat4 _objMat;
  Shaders.UniformMat4 _viewMat;
  Shaders.UniformMat4 _projMat;
  Shaders.Uniform1f _offsetScalar;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory BumpyShader.cached(ThreeDart.RenderState state) {
    BumpyShader shader = state.shader(defaultName);
    if (shader == null) {
      shader = new BumpyShader(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  BumpyShader(WebGL.RenderingContext2 gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr      = this.attributes["posAttr"];
    this._normAttr     = this.attributes["normAttr"];
    this._binmAttr     = this.attributes["binmAttr"];
    this._txtAttr      = this.attributes["txtAttr"];
    this._weightAttr   = this.attributes["weightAttr"];
    this._bumpTxt      = this.uniforms["bumpTxt"] as Shaders.UniformSampler2D;
    this._objMat       = this.uniforms["objMat"] as Shaders.UniformMat4;
    this._viewMat      = this.uniforms["viewMat"] as Shaders.UniformMat4;
    this._projMat      = this.uniforms["projMat"] as Shaders.UniformMat4;
    this._offsetScalar = this.uniforms["offsetScalar"] as Shaders.Uniform1f;
  }

  /// The position vertex shader attribute.
  Shaders.Attribute get posAttr => this._posAttr;

  /// The normal vertex shader attribute.
  Shaders.Attribute get normAttr => this._normAttr;

  /// The binormal vertex shader attribute.
  Shaders.Attribute get binmAttr => this._binmAttr;

  /// The texture vertex shader attribute.
  Shaders.Attribute get txtAttr => this._txtAttr;

  /// The weight vertex shader attribute.
  Shaders.Attribute get weightAttr => this._weightAttr;

  /// The normal distortion texture of the object.
  set bumpTexture(Textures.Texture2D txt) {
    if (txt != null) this._bumpTxt.setTexture2D(txt);
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

  /// The offset scalar for the length of the line to create.
  double get offsetScalar => this._offsetScalar.getValue();
  set offsetScalar(double offset) => this._offsetScalar.setValue(offset);
}
