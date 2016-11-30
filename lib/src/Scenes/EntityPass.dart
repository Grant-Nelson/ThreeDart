part of ThreeDart.Scenes;

/// The render pass renders a single scene.
class EntityPass implements RenderPass {

  /// The camera describing the view of the scene.
  Views.Camera _camera;

  /// The target defining the storage to render to.
  Views.Target _target;

  /// The default technique to render with.
  Techniques.Technique _tech;

  /// The children entities to render.
  Core.Collection<Core.Entity> _children;

  /// Event emitted before an update for this pass.
  Core.Event _onPreUpdate;

  /// Event emitted after an update for this pass.
  Core.Event _onPostUpdate;

  /// Event emitted on an render for this pass.
  Core.Event _onRender;

  /// Event emitted on an render for this pass.
  Core.Event _changed;

  /// Creates a new render pass.
  EntityPass({
      Views.Camera camera: null,
      Views.Target target: null,
      Techniques.Technique tech: null,
      List<Core.Entity> children: null
    }) {
    this._camera = null;
    this._target = null;
    this._tech = null;
    this._children = new Core.Collection<Core.Entity>();
    this._children.setHandlers(
      onAddedHndl: this._onChildrenAdded,
      onRemovedHndl: this._onChildrenRemoved);
    this._onPreUpdate = null;
    this._onPostUpdate = null;
    this._onRender = null;
    this._changed = null;

    this.camera = camera;
    this.target = target;
    this.technique = tech;
    if (children != null)  this._children.addAll(children);
  }

  /// Handles a change in this pass.
  void _onChange([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Called when one or more child is added.
  void _onChildrenAdded(int index, Iterable<Core.Entity> entities) {
    for (Core.Entity entity in entities) {
      if (entity != null) entity.changed.add(this._onChange);
    }
    this._onChange();
  }

  /// Called when a child is removed.
  void _onChildrenRemoved(int index, Iterable<Core.Entity> entities) {
    for (Core.Entity entity in entities) {
      if (entity != null) entity.changed.remove(this._onChange);
    }
    this._onChange();
  }

  /// The camera describing the view of the scene.
  /// If null is set, the camera is set to a Perspective.
  Views.Camera get camera => this._camera;
  void set camera(Views.Camera camera) {
    camera = camera ?? new Views.Perspective();
    if (this._camera != camera) {
      this._camera = camera;
      this._onChange();
    }
  }

  /// The target defining the storage to render to.
  /// If null is set, the target is set to an FrontTarget.
  Views.Target get target => this._target;
  void set target(Views.Target target) {
    target = target ?? new Views.FrontTarget();
    if (this._target != target) {
      this._target = target;
      this._onChange();
    }
  }

  /// The default technique to render with.
  Techniques.Technique get technique => this._tech;
  void set technique(Techniques.Technique tech) {
    if (this._tech != tech) {
      this._tech = tech;
      this._onChange();
    }
  }

  /// The children entities to render.
  Core.Collection<Core.Entity> get children => this._children;

  /// Event emitted before an update for this pass.
  Core.Event get onPreUpdate {
    if (this._onPreUpdate == null) this._onPreUpdate = new Core.Event();
    return this._onPreUpdate;
  }

  /// Event emitted after an update for this pass.
  Core.Event get onPostUpdate {
    if (this._onPostUpdate == null) this._onPostUpdate = new Core.Event();
    return this._onPostUpdate;
  }

  /// Event emitted on an render for this pass.
  Core.Event get onRender {
    if (this._onRender == null) this._onRender = new Core.Event();
    return this._onRender;
  }

  /// Event emitted on a the pass or a child entity has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Render the scene with the given [state].
  void render(Core.RenderState state) {
    Core.StateEventArgs args = new Core.StateEventArgs(this, state);
    this._onPreUpdate?.emit(args);

    state.pushTechnique(this._tech);
    this._target.bind(state);
    this._camera.bind(state);

    if (this._tech != null) this._tech.update(state);
    for (Core.Entity child in this._children) {
      child.update(state);
    }
    this._onPostUpdate?.emit(args);

    for (Core.Entity child in this._children) {
      child.render(state);
    }
    this._onRender?.emit(args);

    this._camera.unbind(state);
    this._target.unbind(state);
    state.popTechnique();
  }
}
