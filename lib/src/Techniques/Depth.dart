part of ThreeDart.Techniques;

class Depth extends Technique {

  Shaders.Depth _shader;
  Math.Color3 _objClr;
  Math.Color3 _fogClr;
  double _fogStart;
  double _fogStop;

  Depth({
      Math.Color3 objClr: null,
      Math.Color3 fogClr: null,
      double fogStart: 1.0,
      double fogStop: 10.0}) {
    this._shader = null;
    this._objClr = (objClr != null)? objClr: new Math.Color3(1.0, 1.0, 1.0);
    this._fogClr = (fogClr != null)? fogClr: new Math.Color3.black();
    this._fogStart = fogStart;
    this._fogStop = fogStop;
  }

  Math.Color3 get objectColor => this._objClr;
  set objectColor(Math.Color3 clr) => this._objClr = clr;

  Math.Color3 get fogColor => this._fogClr;
  set fogColor(Math.Color3 clr) => this._fogClr = clr;

  double get fogStart => this._fogStart;
  set fogStart(double start) => this._fogStart = start;

  double get fogStop => this._fogStop;
  set fogStop(double stop) => this._fogStop = stop;

  void render(Core.RenderState state, Core.Object obj) {
    if (this._shader == null)
      this._shader = new Shaders.Depth.cached(state);

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc;
    }

    this._shader
      ..bind(state)
      ..objectColor = this._objClr
      ..fogColor = this._fogClr
      ..fogStart = this._fogStart
      ..fogStop = this._fogStop
      ..projectMatrix = state.projection.matrix
      ..viewObjectMatrix = state.object.matrix*state.view.matrix;

    if (obj.cache is Data.BufferStore) {
      (obj.cache as Data.BufferStore)
        ..bind(state)
        ..render(state)
        ..unbind(state);
    } else obj.clearCache();

    this._shader.unbind(state);
  }
}
