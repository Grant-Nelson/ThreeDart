part of ThreeDart.Shaders;

/// A shader for cover pass Gaussian blurring rendering.
class GaussianBlur extends Shader {

  GaussianBlurConfig _cfg;

  Attribute _posAttr;
  Attribute _txtAttr;

  UniformMat4 _projViewObjMat;
  UniformMat3 _txt2DMat;

  UniformSampler2D _colorTxt;
  Uniform1i _nullColorTxt;

  UniformSampler2D _blurTxt;
  Uniform1i _nullBlurTxt;
  Uniform1f _blurValue;

  Uniform1f _width;
  Uniform1f _height;
  Uniform1f _minBlur;
  Uniform1f _blurWidth;
  Uniform1f _highOffset;
  Uniform1f _lowOffset;
  Uniform1f _blurLimit;

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

    // print(this._cfg.toString());
    // print(numberLines(vertexSource));
    // print(numberLines(fragmentSource));

    this.initialize(vertexSource, fragmentSource);
    this._posAttr        = this.attributes["posAttr"];
    this._txtAttr        = this.attributes["txtAttr"];
    this._projViewObjMat = this.uniforms["projViewObjMat"] as UniformMat4;
    this._txt2DMat       = this.uniforms["txt2DMat"] as UniformMat3;
    this._colorTxt       = this.uniforms["colorTxt"] as UniformSampler2D;
    this._nullColorTxt   = this.uniforms["nullColorTxt"] as Uniform1i;
    this._width          = this.uniforms["width"] as Uniform1f;
    this._height         = this.uniforms["height"] as Uniform1f;

    if (cfg.blurTxt) {
      this._blurTxt     = this.uniforms["blurTxt"] as UniformSampler2D;
      this._nullBlurTxt = this.uniforms["nullBlurTxt"] as Uniform1i;
      this._minBlur     = this.uniforms["minBlur"] as Uniform1f;
      this._blurWidth   = this.uniforms["blurWidth"] as Uniform1f;
      this._highOffset  = this.uniforms["highOffset"] as Uniform1f;
      this._lowOffset   = this.uniforms["lowOffset"] as Uniform1f;
      this._blurLimit   = this.uniforms["blurLimit"] as Uniform1f;
    } else {
      this._blurValue = this.uniforms["blurValue"] as Uniform1f;
    }
  }

  /// Sets the tcxture 2D and null texture indicator for the shader.
  void _setTexture2D(UniformSampler2D txt2D, Uniform1i nullTxt, Textures.Texture2D txt) {
    if ((txt == null) || !txt.loaded) {
      nullTxt.setValue(1);
    } else {
      txt2D.setTexture2D(txt);
      nullTxt.setValue(0);
    }
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

  /// The color texture to cover with.
  set colorTexture(Textures.Texture2D txt) =>
    this._setTexture2D(this._colorTxt, this._nullColorTxt, txt);

  /// The blur texture to cover with.
  set blurTexture(Textures.Texture2D txt) =>
    this._setTexture2D(this._blurTxt, this._nullBlurTxt, txt);

  /// The blur value to use when not using a texture.
  double get blurValue => this._blurValue.getValue();
  set blurValue(double value) => this._blurValue.setValue(value);

  /// The width of the target in pixels.
  double get width => this._width.getValue();
  set width(double value) => this._width.setValue(value);

  /// The height of the target in pixels.
  double get height => this._height.getValue();
  set height(double value) => this._height.setValue(value);

  /// The offset value for the blur at it's highest value.
  double get highOffset => this._highOffset.getValue();
  set highOffset(double value) => this._highOffset.setValue(value);

  /// The offset value for the blur at it's lowest value.
  double get lowOffset => this._lowOffset.getValue();
  set lowOffset(double value) => this._lowOffset.setValue(value);

  /// The value of blur to be used for the lowest offset.
  double get minBlur => this._minBlur.getValue();
  set minBlur(double value) => this._minBlur.setValue(value);
  
  /// The range of blue to be used between the lowest and highest offset.
  double get blurWidth => this._blurWidth.getValue();
  set blurWidth(double value) => this._blurWidth.setValue(value);

  /// The limit for higher blur to be excluded from the blur.
  double get blurLimit => this._blurLimit.getValue();
  set blurLimit(double value) => this._blurLimit.setValue(value);
}
