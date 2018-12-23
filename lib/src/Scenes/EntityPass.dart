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
  Collections.Collection<Core.Entity> _children;

  /// Event emitted before an update for this pass.
  Events.Event _onPreUpdate;

  /// Event emitted after an update for this pass.
  Events.Event _onPostUpdate;

  /// Event emitted on an render for this pass.
  Events.Event _onRender;

  /// Event emitted on an render for this pass.
  Events.Event _changed;

  /// Creates a new render pass.
  /// The given clear color is only used if target is null or a FrontTarget.
  EntityPass({
      Views.Camera camera: null,
      Views.Target target: null,
      Techniques.Technique tech: null,
      List<Core.Entity> children: null,
      Math.Color4 clearColor: null,
    }) {
    this._camera = null;
    this._target = null;
    this._tech   = null;
    this._children = new Collections.Collection<Core.Entity>();
    this._children.setHandlers(
      onAddedHndl: this._onChildrenAdded,
      onRemovedHndl: this._onChildrenRemoved);
    this._onPreUpdate  = null;
    this._onPostUpdate = null;
    this._onRender = null;
    this._changed  = null;

    if (target == null) {
      target = new Views.FrontTarget(color: clearColor);
    } else if (target is Views.FrontTarget) {
      target.color = clearColor;
    }
    
    this.camera = camera;
    this.target = target;
    this.technique = tech;
    if (children != null) this._children.addAll(children);
  }

  /// Handles a change in this pass.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Called when one or more child is added.
  void _onChildrenAdded(int index, Iterable<Core.Entity> entities) {
    for (Core.Entity entity in entities) {
      if (entity != null) entity.changed.add(this._onChanged);
    }
    this._onChanged(new Events.ItemsAddedEventArgs(this, index, entities));
  }

  /// Called when a child is removed.
  void _onChildrenRemoved(int index, Iterable<Core.Entity> entities) {
    for (Core.Entity entity in entities) {
      if (entity != null) entity.changed.remove(this._onChanged);
    }
    this._onChanged(new Events.ItemsRemovedEventArgs(this, index, entities));
  }

  /// The camera describing the view of the scene.
  /// If null is set, the camera is set to a Perspective.
  Views.Camera get camera => this._camera;
  void set camera(Views.Camera camera) {
    camera ??= new Views.Perspective();
    if (this._camera != camera) {
      if (this._camera != null) this._camera.changed.remove(this._onChanged);
      Views.Camera prev = this._camera;
      this._camera = camera;
      if (this._camera != null) this._camera.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "camera", prev, this._camera));
    }
  }

  /// The target defining the storage to render to.
  /// If null is set, the target is set to an FrontTarget.
  Views.Target get target => this._target;
  void set target(Views.Target target) {
    target ??= new Views.FrontTarget();
    if (this._target != target) {
      if (this._target != null) this._target.changed.remove(this._onChanged);
      Views.Target prev = this._target;
      this._target = target;
      if (this._target != null) this._target.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "target", prev, this._target));
    }
  }

  /// The default technique to render with.
  Techniques.Technique get technique => this._tech;
  void set technique(Techniques.Technique tech) {
    if (this._tech != tech) {
      if (this._tech != null) this._tech.changed.remove(this._onChanged);
      Techniques.Technique prev = this._tech;
      this._tech = tech;
      if (this._tech != null) this._tech.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "technique", prev, this._tech));
    }
  }

  /// The children entities to render.
  Collections.Collection<Core.Entity> get children => this._children;

  /// Event emitted before an update for this pass.
  Events.Event get onPreUpdate {
    this._onPreUpdate ??= new Events.Event();
    return this._onPreUpdate;
  }

  /// Event emitted after an update for this pass.
  Events.Event get onPostUpdate {
    this._onPostUpdate ??= new Events.Event();
    return this._onPostUpdate;
  }

  /// Event emitted on an render for this pass.
  Events.Event get onRender {
    this._onRender ??= new Events.Event();
    return this._onRender;
  }

  /// Event emitted on a the pass or a child entity has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
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
