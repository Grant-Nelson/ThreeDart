part of ThreeDart.Scenes;

class Compound implements Scene {

  List<Scene> _passes;

  Compound() {
    this._passes = new List<Scene>();
  }

  List<Scene> get passes => this._passes;

  void render(Core.RenderState state) {
    for (Scene pass in this._passes) {
      pass.render(state);
    }
  }

  // TODO: Add JSON load methods.
}
