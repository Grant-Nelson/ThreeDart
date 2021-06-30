part of ThreeDart.Scenes;

/// A scene which is a composite of several other scenes used as passes.
class Compound extends Collections.Collection<Scene> implements Scene {

  /// Indicates if the scene is rendered or not.
  bool _enabled = true;

  /// The control to stop infinite loops by a compound containing itself.
  bool _loopProtection = false;

  /// Emits when any scene in the list changes.
  Events.Event? _changed = null;

  /// Creates a new compound scene.
  Compound({bool enabled: true, List<Scene>? passes: null}) {
    this._enabled        = enabled;
    this._loopProtection = false;
    this._changed        = null;

    this.setHandlers(
      onAddedHndl:   this._onSceneAdded,
      onRemovedHndl: this._onSceneRemoved);
    if (passes != null) this.addAll(passes);
  }

  /// The event emitted when the scene has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles changes to the scene.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// Called when one or more scenes are added.
  void _onSceneAdded(int index, Iterable<Scene> scenes) {
    for (Scene scene in scenes)
      scene.changed.add(this._onChanged);
    this._onChanged(new Events.ItemsAddedEventArgs(this, index, scenes));
  }

  /// Called when scenes are removed.
  void _onSceneRemoved(int index, Iterable<Scene> scenes) {
    for (Scene scene in scenes)
      scene.changed.remove(this._onChanged);
    this._onChanged(new Events.ItemsRemovedEventArgs(this, index, scenes));
  }

  /// Indicates if this scene should be rendered or not.
  bool get enabled => this._enabled;
  set enabled(bool enable) {
    if (this._enabled != enable) {
      bool prev = this._enabled;
      this._enabled = enable;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'enabled', prev, this._enabled));
    }
  }

  /// Renders the scenes with the given [state].
  void render(Core.RenderState state) {
    if (!this._enabled) return;
    if (this._loopProtection) return;
    this._loopProtection = true;

    for (Scene pass in this)
      pass.render(state);

    this._loopProtection = false;
  }
}
