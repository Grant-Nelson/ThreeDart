part of ThreeDart.Scenes;

/// The render pass renders a cover over the whole scene.
class CoverPass implements RenderPass {

  /// Indicates if the scene is rendered or not.
  bool _enabled;

  /// The camera describing the view of the scene.
  Views.Camera? _camera;

  /// The target defining the storage to render to.
  Views.Target? _target;

  /// The default technique to render with.
  Techniques.Technique? _tech;

  /// The box entity to render.
  Core.Entity _box;

  /// Event emitted on an render for this pass.
  Events.Event? _onRender;

  /// Emits when the cover changes.
  Events.Event? _changed;

  /// Creates a new cover render pass.
  CoverPass({
    bool enabled: true,
    Views.Camera? camera: null,
    Views.Target? target: null,
    Techniques.Technique? tech: null}):
    this._enabled = enabled,
    this._camera = null,
    this._target = null,
    this._tech   = null,
    this._box = new Core.Entity(),
    this._onRender = null,
    this._changed  = null {
    this._box.shape = Shapes.square();
    this.camera     = camera;
    this.target     = target;
    this.technique  = tech;
  }

  /// Creates a new cover render pass preset with a skybox technique.
  /// The given [boxTexture] is the cube texture of the skybox.
  factory CoverPass.skybox(Textures.TextureCube boxTexture) =>
    new CoverPass()
      ..technique = new Techniques.Skybox(boxTexture: boxTexture);

  /// Event emitted on an render for this pass.
  Events.Event get onRender =>
    this._onRender ??= new Events.Event();

  /// The event emitted when the scene has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles changes to the scene.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// Indicates if this scene should be rendered or not.
  bool get enabled => this._enabled;
  set enabled(bool enable) {
    if (this._enabled != enable) {
      bool prev = this._enabled;
      this._enabled = enable;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'enabled', prev, this._enabled));
    }
  }

  /// The camera describing the view of the scene.
  /// If null is set, the camera is set to an IdentityCamera.
  Views.Camera? get camera => this._camera;
  set camera(Views.Camera? camera) {
    camera ??= new Views.IdentityCamera();
    if (this._camera != camera) {
      this._camera?.changed.remove(this._onChanged);
      Views.Camera? prev = this._camera;
      this._camera = camera;
      this._camera?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'camera', prev, this._camera));
    }
  }

  /// The target defining the storage to render to.
  /// If null is set, the target is set to an FrontTarget.
  Views.Target? get target => this._target;
  set target(Views.Target? target) {
    target ??= new Views.FrontTarget();
    if (this._target != target) {
      this._target?.changed.remove(this._onChanged);
      Views.Target? prev = this._target;
      this._target = target;
      this._target?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'target', prev, this._target));
    }
  }

  /// The default technique to render with.
  Techniques.Technique? get technique => this._tech;
  set technique(Techniques.Technique? tech) {
    if (this._tech != tech) {
      this._tech?.changed.remove(this._onChanged);
      Techniques.Technique? prev = this._tech;
      this._tech = tech;
      this._tech?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'technique', prev, this._tech));
    }
  }

  /// Render the scene with the given [state].
  void render(Core.RenderState state) {
    if (!this._enabled) return;
    state.pushTechnique(this._tech);
    this._target?.bind(state);
    this._camera?.bind(state);

    this._tech?.update(state);
    this._box.update(state);
    this._box.render(state);

    Core.StateEventArgs args = new Core.StateEventArgs(this, state);
    this._onRender?.emit(args);

    this._camera?.unbind(state);
    this._target?.unbind(state);
    state.popTechnique();
  }
}
