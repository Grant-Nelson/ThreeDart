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

    this._horzBlurTarget = new Views.BackTarget.autoResize()
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

  /// Renders the scenes with the given [state].
  void render(Core.RenderState state) {
    if (this._loopProtection) return;
    this._loopProtection = true;

    this._horzBlurPass?.render(state);
    this._vertBlurPass?.render(state);

    this._loopProtection = false;
  }
}
