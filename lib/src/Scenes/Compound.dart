part of ThreeDart.Scenes;

/// A scene which is a composite of several other scenes used as passes.
class Compound extends Core.Collection<Scene> implements Scene {

  /// The control to stop infinite loops by a compound containing itself.
  bool _loopProtection;

  /// Emits when any scene in the list chagnes.
  Core.Event _changed;

  /// Creates a new compound scene.
  Compound({List<Scene> passes: null}) {
    this._loopProtection = false;
    this._changed        = null;

    this.setHandlers(
      onAddedHndl:   this._onSceneAdded,
      onRemovedHndl: this._onSceneRemoved);
    if (passes != null) this.addAll(passes);
  }

  /// The event emitted when the scene has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Handles changes to the scene.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Called when one or more scenes are added.
  void _onSceneAdded(int index, Iterable<Scene> scenes) {
    for (Scene scene in scenes) {
      if (scene != null) scene.changed.add(this._onChanged);
    }
    this._onChanged(new Core.ItemsAddedEventArgs(this, index, scenes));
  }

  /// Called when scenes are removed.
  void _onSceneRemoved(int index, Iterable<Scene> scenes) {
    for (Scene scene in scenes) {
      if (scene != null) scene.changed.remove(this._onChanged);
    }
    this._onChanged(new Core.ItemsRemovedEventArgs(this, index, scenes));
  }

  /// Renders the scenes with the given [state].
  void render(Core.RenderState state) {
    if (this._loopProtection) return;
    this._loopProtection = true;

    for (Scene pass in this) {
      pass?.render(state);
    }

    this._loopProtection = false;
  }
}
