part of engine;

class Room {
  ThreeDart.ThreeDart _td;
  Views.FrontTarget _frontTarget;

  Layer _layer;
  Layer _debugging;
  Colliders _colliders;

  Lights.Directional _globalLight;

  Room(ThreeDart.ThreeDart this._td) {
    this._frontTarget = new Views.FrontTarget(clearColor: false, color: Math.Colors.black);

    Views.Camera camera = new Views.Orthogonal();

    this._layer = new Layer._(this, 1.0, 1.0);
    this._debugging = new Layer._(this, 1.0, 1.0);
    this._colliders = new Colliders._(this, this._debugging);

    this._td.scene = new Scenes.EntityPass(children: [
      this._layer,
      this._debugging,
    ], 
      target: this._frontTarget,
      camera: camera);

    this._globalLight = new Lights.Directional(
      mover: new Movers.Constant.scale(-1.0, -1.0, -1.0),
      color: Math.Color3.white());
  }

  void setView(Math.Point2 loc) {
    this._layer.setView(loc);
    this._debugging.setView(loc);
  }

  ThreeDart.ThreeDart get td => this._td;
  Layer get main      => this._layer;
  Layer get debugging => this._debugging;
  Colliders get colliders => this._colliders;
  Lights.Directional get globalLight => this._globalLight;
}
