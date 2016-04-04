part of ThreeDart.Scenes;

/// A scene which is a composite of several other scenes used as passes.
class Compound implements Scene {

  /// The passes in the order to render them.
  List<Scene> _passes;

  /// The control to stop infinite loops by a compound containing itself.
  bool _loopProtection;

  /// Creates a new compound scene.
  Compound({List<Scene> passes: null}) {
    this._passes = new List<Scene>();
    if (passes != null) this._passes.addAll(passes);
    this._loopProtection = false;
  }

  /// The passes in the order to render them.
  List<Scene> get passes => this._passes;

  /// Renders the scenes with the given [state].
  void render(Core.RenderState state) {
    if (this._loopProtection) return;
    this._loopProtection = true;

    for (Scene pass in this._passes) {
      pass.render(state);
    }

    this._loopProtection = false;
  }
}
