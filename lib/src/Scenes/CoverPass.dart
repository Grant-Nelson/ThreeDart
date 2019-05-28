part of ThreeDart.Scenes;

/// The render pass renders a cover over the whole scene.
class CoverPass implements RenderPass {

  /// The camera describing the view of the scene.
  Views.Camera _camera;

  /// The target defining the storage to render to.
  Views.Target _target;

  /// The default technique to render with.
  Techniques.Technique _tech;

  /// The box entity to render.
  Core.Entity _box;

  /// Event emitted on an render for this pass.
  Events.Event _onRender;

  /// Emits when the cover changes.
  Events.Event _changed;

  /// Creates a new cover render pass.
  CoverPass({
      Views.Camera camera: null,
      Views.Target target: null,
      Techniques.Technique tech: null
  }) {
    this._changed  = null;
    this._camera   = null;
    this._target   = null;
    this._tech     = null;
    this._box      = new Core.Entity()
      ..shape      = Shapes.square();
    this._onRender = null;
    
    this.camera    = camera;
    this.target    = target;
    this.technique = tech;
  }

  /// Creates a new cover render pass preset with a skybox technique.
  /// The given [boxTexture] is the cube texture of the skybox.
  factory CoverPass.skybox(Textures.TextureCube boxTexture) {
    return new CoverPass()
      ..technique = new Techniques.Skybox(boxTexture: boxTexture);
  }

  /// Event emitted on an render for this pass.
  Events.Event get onRender {
    this._onRender ??= new Events.Event();
    return this._onRender;
  }

  /// The event emitted when the scene has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles changes to the scene.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The camera describing the view of the scene.
  /// If null is set, the camera is set to an IdentityCamera.
  Views.Camera get camera => this._camera;
  void set camera(Views.Camera camera) {
    camera ??= new Views.IdentityCamera();
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

  /// Render the scene with the given [state].
  void render(Core.RenderState state) {
    state.pushTechnique(this._tech);
    this._target.bind(state);
    this._camera.bind(state);

    if (this._tech != null) this._tech.update(state);
    this._box.update(state);
    this._box.render(state);

    Core.StateEventArgs args = new Core.StateEventArgs(this, state);
    this._onRender?.emit(args);

    this._camera.unbind(state);
    this._target.unbind(state);
    state.popTechnique();
  }
}
