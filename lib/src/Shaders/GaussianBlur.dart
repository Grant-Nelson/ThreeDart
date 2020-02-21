part of ThreeDart.Shaders;

/// A shader for cover pass Gaussian blurring rendering.
class GaussianBlur extends Shader {

  GaussianBlurConfig _cfg;

  Attribute _posAttr;
  Attribute _txtAttr;

  UniformMat4 _projViewObjMat;
  UniformMat3 _txt2DMat;
  Uniform4f _blurAdj;
  Uniform2f _blurScale;

  UniformSampler2D _colorTxt;
  UniformSampler2D _blurTxt;
  Uniform1f _blurValue;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory GaussianBlur.cached(GaussianBlurConfig cfg, Core.RenderState state) {
    GaussianBlur shader = state.shader(cfg.name);
    if (shader == null) {
      shader = new GaussianBlur(cfg, state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  GaussianBlur(GaussianBlurConfig cfg, WebGL.RenderingContext2 gl): super(gl, cfg.name) {
    this._cfg = cfg;
    String vertexSource = this._cfg.createVertexSource();
    String fragmentSource = this._cfg.createFragmentSource();

    this.initialize(vertexSource, fragmentSource);
    this._posAttr        = this.attributes["posAttr"];
    this._txtAttr        = this.attributes["txtAttr"];
    this._projViewObjMat = this.uniforms["projViewObjMat"] as UniformMat4;
    this._txt2DMat       = this.uniforms["txt2DMat"] as UniformMat3;
    this._colorTxt       = this.uniforms["colorTxt"] as UniformSampler2D;
    this._blurScale      = this.uniforms["blurScale"] as Uniform2f;

    if (cfg.blurTxt) {
      this._blurTxt = this.uniforms["blurTxt"] as UniformSampler2D;
      this._blurAdj = this.uniforms["blurAdj"] as Uniform4f;
    } else {
      this._blurValue = this.uniforms["blurValue"] as Uniform1f;
    }
  }

  /// Sets the tcxture 2D and null texture indicator for the shader.
  void _setTexture2D(UniformSampler2D txt2D, Textures.Texture2D txt) {
    if ((txt != null) && txt.loaded) txt2D.setTexture2D(txt);
  }

  /// The configuration the shader is built for.
  GaussianBlurConfig get configuration => this._cfg;

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The texture vertex shader attribute.
  Attribute get txtAttr => this._txtAttr;

  /// The width of the target in pixels.
  Math.Matrix4 get projectViewObjectMatrix => this._projViewObjMat.getMatrix4();
  set projectViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMat.setMatrix4(mat);

  /// The width of the target in pixels.
  Math.Matrix3 get textureMatrix => this._txt2DMat.getMatrix3();
  set textureMatrix(Math.Matrix3 mat) => this._txt2DMat.setMatrix3(mat);

  /// The color adjustment to apply to the blur texture colors to get the blur value with a texture.
  Math.Vector4 get blurAdjust => this._blurAdj.getVector4();
  set blurAdjust(Math.Vector4 vec) => this._blurAdj.setVector4(vec);

  /// The direction of the blur divided by the textures width and height.
  Math.Vector2 get blurScalar => this._blurScale.getVector2();
  set blurScalar(Math.Vector2 vec) => this._blurScale.setVector2(vec);

  /// The color texture to cover with.
  set colorTexture(Textures.Texture2D txt) =>
    this._setTexture2D(this._colorTxt, txt);

  /// The blur texture to cover with.
  set blurTexture(Textures.Texture2D txt) =>
    this._setTexture2D(this._blurTxt, txt);

  /// The blur value to use when not using a texture.
  double get blurValue => this._blurValue.getValue();
  set blurValue(double value) => this._blurValue.setValue(value);
}
