part of engine;

class Room {
  ThreeDart.ThreeDart _td;
  Views.BackTarget _backgroundTarget;
  Views.BackTarget _backNormalTarget;
  Views.BackTarget _mainTarget;
  Views.BackTarget _mainNormalTarget;
  Views.FrontTarget _frontTarget;

  Layer _background;
  Layer _backDistort;
  Scenes.CoverPass _distortBack;
  Layer _main;
  Layer _mainDistort;
  Scenes.CoverPass _distortMain;
  Layer _foreground;

  Lights.Directional _globalLight;

  Room(ThreeDart.ThreeDart this._td) {
    Math.Color4 defaultNormal = new Math.Color4(0.5, 0.5, 1.0, 1.0);

    this._backgroundTarget = new Views.BackTarget(autoResize: true, clearColor: false);
    this._backNormalTarget = new Views.BackTarget(autoResize: true, color: defaultNormal);
    this._mainTarget       = new Views.BackTarget(autoResize: true, clearColor: false);
    this._mainNormalTarget = new Views.BackTarget(autoResize: true, color: defaultNormal);
    this._frontTarget      = new Views.FrontTarget(clearColor: true, color: Math.Colors.blue);

    Techniques.Distort distortBackTech = new Techniques.Distort()
      ..colorTexture = this._backgroundTarget.colorTexture
      ..bumpTexture = this._backNormalTarget.colorTexture
      ..bumpMatrix = new Math.Matrix4.scale(0.05, 0.05, 0.05);

    Techniques.Distort distortMainTech = new Techniques.Distort()
      ..colorTexture = this._mainTarget.colorTexture
      ..bumpTexture = this._mainNormalTarget.colorTexture
      ..bumpMatrix = new Math.Matrix4.scale(0.05, 0.05, 0.05);

    this._background = new Layer._(this)
      ..target = this._backgroundTarget;
    this._backDistort = new Layer._(this)
      ..target = this._backNormalTarget;
    this._distortBack = new Scenes.CoverPass()
      ..target = this._mainTarget
      ..technique = distortBackTech;
    this._main = new Layer._(this)
      ..target = this._mainTarget;
    this._mainDistort = new Layer._(this)
      ..target = this._mainNormalTarget;
    this._distortMain = new Scenes.CoverPass()
      ..target = this._frontTarget
      ..technique = distortMainTech;
    this._foreground = new Layer._(this)
      ..target = this._frontTarget;

    this._td.scene = new Scenes.Compound(passes: [
      this._background,
      this._backDistort,
      this._distortBack,
      this._main,
      this._mainDistort,
      this._distortMain,
      this._foreground]);

    this._globalLight = new Lights.Directional(
      color: Math.Color3.white());
  }

  ThreeDart.ThreeDart get td => this._td;
  Layer get background  => this._background;
  Layer get backDistort => this._backDistort;
  Layer get main        => this._main;
  Layer get mainDistort => this._mainDistort;
  Layer get foreground  => this._foreground;
  Lights.Directional get globalLight => this._globalLight;
}
