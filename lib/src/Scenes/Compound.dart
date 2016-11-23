part of ThreeDart.Scenes;

/// A scene which is a composite of several other scenes used as passes.
class Compound implements Scene {

  /// The passes in the order to render them.
  List<Scene> _passes;

  /// The control to stop infinite loops by a compound containing itself.
  bool _loopProtection;

  /// Emits when any scene in the list chagnes.
  Core.Event _changed;

  /// The event emitted when one or more scene is added.
  Core.Event _sceneAdded;

  /// The event emitted when one or more scene is removed.
  Core.Event _sceneRemoved;

  /// Creates a new compound scene.
  Compound({List<Scene> passes: null}) {
    this._passes = new List<Scene>();
    this._loopProtection = false;
    this._changed        = null;
    this._sceneAdded     = null;
    this._sceneRemoved   = null;
    if (passes != null) this.addAll(passes);
  }

  /// The event emitted when the scene has chagned.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// The event emitted when one or more scene is added.
  Core.Event get sceneAdded {
    if (this._sceneAdded == null) this._sceneAdded = new Core.Event();
    return this._sceneAdded;
  }

  /// The event emitted when one or more scene is removed.
  Core.Event get sceneRemoved {
    if (this._sceneRemoved == null) this._sceneRemoved = new Core.Event();
    return this._sceneRemoved;
  }

  /// Handles changes to the scene.
  void onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Handles a change in the child scenes.
  void onSceneModified([Core.EventArgs args = null]) {
    this.onChanged(args);
  }

  /// Called when one or more scenes are added.
  void onSceneAdded(List<Scene> scenes) {
    this.sceneAdded?.emit();
    for (Scene scene in scenes) {
      if (scene == null) scene.changed.add(this.onSceneModified);
    }
    this.onChanged();
  }

  /// Called when scenes are removed.
  void onSceneRemoved(List<Scene> scenes) {
    this._sceneRemoved?.emit();
    for (Scene scene in scenes) {
      if (scene == null) scene.changed.remove(this.onSceneModified);
    }
    this.onChanged();
  }

  /// Adds the given [passes] to this collection.
  void add(Scene pass) {
    this._passes.add(pass);
    this.onSceneAdded([pass]);
  }

  /// Adds the given [passes] to this collection.
  void addAll(Iterable<Scene> passes) {
    this._passes.addAll(passes);
    this.onSceneAdded(passes);
  }

  /// Removes all the passes.
  void clear() {
    if (this._passes.length > 0) {
      List<Scene> passes = this._passes;
      this._passes = new List<Scene>();
      this.onSceneRemoved(passes);
    }
  }

  /// Determines if the collection is empty.
  bool get isEmpty => this._passes.isEmpty;

  /// The number of entities in the collection.
  int get length => this._passes.length;

  /// Gets the pass at the given [index].
  Scene operator[](int index) => this._passes[index];

  /// Gets the index of the given [pass].
  int indexOf(Scene pass) => this._passes.indexOf(pass);

  /// Calls the given function handler, [funcHndl], foreach pass.
  void forEach(void funcHndl(Scene pass)) => this._passes.forEach(funcHndl);

  /// Removes the pass at the given [index] in this collection.
  /// The removed pass is returned.
  Scene removeAt(int index) {
    Scene pass = this._passes.removeAt(index);
    if (pass != null) this.onSceneRemoved([pass]);
    return pass;
  }

  /// Removed the first instance of the given [pass] from this collection.
  /// True is returned if the pass was found and removed, false if not found.
  bool remove(Scene pass) {
    if (this._passes.remove(pass)) {
      this.onSceneRemoved([pass]);
      return true;
    }
    return false;
  }

  /// Renders the scenes with the given [state].
  void render(Core.RenderState state) {
    if (this._loopProtection) return;
    this._loopProtection = true;

    for (Scene pass in this._passes) {
      pass?.render(state);
    }

    this._loopProtection = false;
  }
}
