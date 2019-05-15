part of ThreeDart.Scenes;

/// A scene for applying a vertical and horizontal blur to the given texture.
class GaussianBlur implements Scene {

  /// Emits when any scene in the list chagnes.
  Events.Event _changed;

  /// The target to render the horizontal blur to.
  Views.BackTarget _horzBlurTarget;

  /// The horizontal blur technique.
  Techniques.GaussianBlur _horzBlurTech;

  /// The horizontal blur pass.
  CoverPass _horzBlurPass;

  /// The vertical blur techinque.
  Techniques.GaussianBlur _vertBlurTech;

  /// The vertical blur pass.
  CoverPass _vertBlurPass;

  /// Creates a new gaussian blue scene.
  GaussianBlur({double             blurValue: 0.0,
                Textures.Texture2D colorTxt:  null,
                Textures.Texture2D blurTxt:   null,
                Math.Matrix3       txtMatrix: null,
                Math.Vector4       blurAdj:   null,
                Views.Target       target:    null}) {
    this._changed = null;

    this._horzBlurTarget = new Views.BackTarget(autoResize: true, clearColor: false);

    this._horzBlurTech = new Techniques.GaussianBlur()
      ..changed.add(this._onChanged);

    this._horzBlurPass = new CoverPass(
      target: this._horzBlurTarget,
      tech: this._horzBlurTech);

    this._vertBlurTech = new Techniques.GaussianBlur(
      colorTxt: this._horzBlurTarget.colorTexture,
      blurDir: Math.Vector2.posY)
      ..changed.add(this._onChanged);

    this._vertBlurPass = new CoverPass(tech: this._vertBlurTech);

    this.blurValue     = blurValue;
    this.colorTexture  = colorTxt;
    this.blurTexture   = blurTxt;
    this.textureMatrix = txtMatrix;
    this.blurAdjust    = blurAdj;
    this.target        = target;
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
    this._vertBlurTech.blurValue = value;
  }

  /// The color texture.
  Textures.Texture2D get colorTexture => this._horzBlurTech.colorTexture;
  void set colorTexture(Textures.Texture2D txt) =>
    this._horzBlurTech.colorTexture = txt;

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
  
  /// The target defining the storage to render to.
  /// If null is set, the target is set to an FrontTarget.
  Views.Target get target => this._vertBlurPass.target;
  void set target(Views.Target target) =>
    this._vertBlurPass.target = target;

  /// Renders the scenes with the given [state].
  void render(Core.RenderState state) {
    this._horzBlurPass?.render(state);
    this._vertBlurPass?.render(state);
  }
}
