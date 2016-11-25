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
  Core.Event _onRender;

  /// Emits when the cover changes.
  Core.Event _changed;

  /// Creates a new cover render pass.
  CoverPass({
      Views.Camera camera: null,
      Views.Target target: null,
      Techniques.Technique tech: null
    }) {
    this._changed  = null;
    this.camera    = camera;
    this.target    = target;
    this.technique = tech;
    this._box      = new Core.Entity()
      ..shape      = Shapes.square();
    this._onRender = new Core.Event();
  }

  /// Handles changes to the scene.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Creates a new cover render pass preset with a skybox technique.
  /// The given [boxTexture] is the cube texture of the skybox.
  factory CoverPass.skybox(Textures.TextureCube boxTexture) {
    return new CoverPass()
      ..technique = new Techniques.Skybox(boxTexture: boxTexture);
  }

  /// The camera describing the view of the scene.
  /// If null is set, the camera is set to an IdentityCamera.
  Views.Camera get camera => this._camera;
  void set camera(Views.Camera camera) {
    camera = camera ?? new Views.IdentityCamera();
    if (this._camera != camera) {
      if (this._camera != null) this._camera.changed.remove(this._onChanged);
      if (camera != null) camera.changed.add(this._onChanged);
      this._camera = camera;
      this._onChanged();
    }
  }

  /// The target defining the storage to render to.
  /// If null is set, the target is set to an FrontTarget.
  Views.Target get target => this._target;
  void set target(Views.Target target) {
    target = target ?? new Views.FrontTarget();
    if (this._target != target) {
      if (this._target != null) this._target.changed.remove(this._onChanged);
      if (target != null) target.changed.add(this._onChanged);
      this._target = target;
      this._onChanged();
    }
  }

  /// The default technique to render with.
  Techniques.Technique get technique => this._tech;
  void set technique(Techniques.Technique tech) {
    if (this._tech != tech) {
      if (this._tech != null) this._tech.changed.remove(this._onChanged);
      if (tech != null) tech.changed.add(this._onChanged);
      this._tech = tech;
      this._onChanged();
    }
  }

  /// Event emitted on an render for this pass.
  Core.Event get onRender => this._onRender;

  /// The event emitted when the scene has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
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
    this._onRender.emit(args);

    this._camera.unbind(state);
    this._target.unbind(state);
    state.popTechnique();
  }
}
