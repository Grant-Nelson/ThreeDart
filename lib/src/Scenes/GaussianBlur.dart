part of ThreeDart.Scenes;

/// A scene which is a composite of several other scenes used as passes.
class GaussianBlur implements Scene {

  /// The control to stop infinite loops by a compound containing itself.
  bool _loopProtection;

  /// Emits when any scene in the list chagnes.
  Events.Event _changed;

  Views.BackTarget _horzBlurTarget;

  Techniques.GaussianBlur _horzBlurTech;

  CoverPass _horzBlurPass;
    
  Techniques.GaussianBlur _vertBlurTech;

  CoverPass _vertBlurPass;

  /// Creates a new compound scene.
  GaussianBlur() {
    this._loopProtection = false;
    this._changed        = null;

    this._horzBlurTarget = new Views.BackTarget(autoResize: true)
      ..clearColor = false;

    this._horzBlurTech = new Techniques.GaussianBlur();
    //    colorTxt: backTarget.colorTexture);

    this._horzBlurPass = new CoverPass()
      ..target = this._horzBlurTarget
      ..technique = this._horzBlurTech;
    
    this._vertBlurTech = new Techniques.GaussianBlur(
        colorTxt: this._horzBlurTarget.colorTexture,
        blurDir: Math.Vector2.posY);

    this._vertBlurPass = new CoverPass()
      ..technique = this._vertBlurTech;
  }

  /// The event emitted when the scene has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles changes to the scene.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The blur value, this will overrided by blur texture.
  double get blurValue => this._horzBlurTech.blurValue;
  void set blurValue(double value) {
    this._horzBlurTech.blurValue = value;
  }

  /// The color texture.
  Textures.Texture2D get colorTexture => this._horzBlurTech.colorTexture;
  void set colorTexture(Textures.Texture2D txt) {
    this._horzBlurTech.colorTexture = txt;
  }

  /// The blur texture, this will override the blur value.
  Textures.Texture2D get blurTexture => this._horzBlurTech.blurTexture;
  void set blurTexture(Textures.Texture2D txt) {
    this._horzBlurTech.blurTexture = txt;
    this._vertBlurTech.blurTexture = txt;
  }

  /// The texture modification matrix.
  Math.Matrix3 get textureMatrix => this._horzBlurTech.textureMatrix;
  void set textureMatrix(Math.Matrix3 mat) {
    this._horzBlurTech.textureMatrix = mat;
    this._vertBlurTech.textureMatrix = mat;
  }

  /// The blur value modification vector.
  /// This is the vector to apply to the color from the blur texture
  /// to get the blur value from the blur texture, by default it just uses red.
  Math.Vector4 get blurAdjust => this._horzBlurTech.blurAdjust;
  void set blurAdjust(Math.Vector4 vec) {
    this._horzBlurTech.blurAdjust = vec;
    this._vertBlurTech.blurAdjust = vec;
  }

  /// Renders the scenes with the given [state].
  void render(Core.RenderState state) {
    if (this._loopProtection) return;
    this._loopProtection = true;

    this._horzBlurPass?.render(state);
    this._vertBlurPass?.render(state);

    this._loopProtection = false;
  }
}
