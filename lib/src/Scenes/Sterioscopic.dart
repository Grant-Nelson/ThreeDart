part of ThreeDart.Scenes;

/// The render pass renders a single scene.
class Sterioscopic implements Scene {

  /// Indicates if the scene is rendered or not.
  bool _enabled;

  /// The left constant for offseting the camera.
  Movers.Constant _leftConstMat;

  /// The right constant for offseting the camera.
  Movers.Constant _rightConstMat;

  /// The left camera's main mover group.
  Movers.Group _leftMovGroup;

  /// The right camera's main mover group.
  Movers.Group _rightMovGroup;

  /// The left camera describing the view of the scene.
  Views.Perspective _leftCamera;

  /// The right camera describing the view of the scene.
  Views.Perspective _rightCamera;

  /// The left target region.
  Math.Region2 _leftRegion;

  /// The right target region.
  Math.Region2 _rightRegion;

  /// The target defining the storage to render to.
  Views.Target _target;

  /// The set of passes to run on each side.
  Collections.Collection<RenderPass> _passes;

  /// The distance between the left and right eye.
  double _eyeSpacing;

  /// The distance to when the left and right image cross.
  double _focusDistance;

  /// Event emitted on an render for this pass.
  Events.Event _onRender;

  /// Event emitted when a pass has changed.
  Events.Event _changed;

  /// Creates a new render pass.
  Sterioscopic({
    bool             enabled: true,
    Movers.Mover     mover:   null,
    Views.Target     target:  null,
    List<RenderPass> passes:  null,
    double           eyeSpacing:    0.1,
    double           focusDistance: 12.0
  }) {
    this._enabled       = enabled;
    this._leftConstMat  = new Movers.Constant();
    this._rightConstMat = new Movers.Constant();
    this._leftMovGroup  = new Movers.Group([null, this._leftConstMat]);
    this._rightMovGroup = new Movers.Group([null, this._rightConstMat]);
    this._leftCamera    = new Views.Perspective(mover: this._leftMovGroup);
    this._rightCamera   = new Views.Perspective(mover: this._rightMovGroup);
    this._leftRegion    = new Math.Region2(0.0, 0.0, 0.5, 1.0);
    this._rightRegion   = new Math.Region2(0.5, 0.0, 0.5, 1.0);
    this._target = null;
    this._passes = new Collections.Collection<RenderPass>();
    this._passes.setHandlers(
      onAddedHndl: this._onAddedRenderPass,
      onRemovedHndl: this._onRemovedRenderPass);
    if (passes != null) this._passes.addAll(passes);
    this._eyeSpacing    = 0.1;
    this._focusDistance = 12.0;
    this._onRender = null;
    this._changed  = null;

    this.cameraMover = mover;
    this.target      = target;
    if (passes != null) this._passes.addAll(passes);
    this._eyeSpacing    = eyeSpacing;
    this._focusDistance = focusDistance;
    this._updateConstMats();
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

  /// Handles a change in this pass.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Handles render passes being added.
  void _onAddedRenderPass(int index, Iterable<RenderPass> passes) {
    for (RenderPass pass in passes) {
      if (pass != null) pass.changed.add(this._onChanged);
    }
    this._onChanged(new Events.ItemsAddedEventArgs(this, index, passes));
  }

  /// Handles render passes being removed.
  void _onRemovedRenderPass(int index, Iterable<RenderPass> passes) {
    for (RenderPass pass in passes) {
      if (pass != null) pass.changed.remove(this._onChanged);
    }
    this._onChanged(new Events.ItemsRemovedEventArgs(this, index, passes));
  }

  /// Indicates if this scene should be rendered or not.
  bool get enabled => this._enabled;
  set enabled(bool enable) {
    enable ??= true;
    if (this._enabled != enable) {
      bool prev = this._enabled;
      this._enabled = enable;
      this._onChanged(new Events.ValueChangedEventArgs(this, "enabled", prev, this._enabled));
    }
  }

  /// The camera mover describing the view of the scene.
  Movers.Mover get cameraMover => this._leftMovGroup[0];
  set cameraMover(Movers.Mover camMover) {
    if (this._leftMovGroup[0] != camMover) {
      Movers.Mover prev = this._leftMovGroup[0];
      this._leftMovGroup[0] = camMover;
      this._rightMovGroup[0] = camMover;
      this._onChanged(new Events.ValueChangedEventArgs(this, "cameraMover", prev, camMover));
    }
  }

  /// The target defining the storage to render to.
  Views.Target get target => this._target;
  set target(Views.Target target) {
    target ??= new Views.FrontTarget();
    if (this._target != target) {
      if (this._target != null) this._target.changed.remove(this._onChanged);
      Views.Target prev = this._target;
      this._target = target;
      if (this._target != null) this._target.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "target", prev, this._target));
    }
  }

  /// The passes in the order to render them.
  Collections.Collection<RenderPass> get passes => this._passes;

  /// The distance between the left and right eye.
  double get eyeSpacing => this._eyeSpacing;
  set eyeSpacing(double eyeSpacing) {
    eyeSpacing ??= 0.1;
    if (!Math.Comparer.equals(this._eyeSpacing, eyeSpacing)) {
      double prev = this._eyeSpacing;
      this._eyeSpacing = eyeSpacing;
      this._updateConstMats();
      this._onChanged(new Events.ValueChangedEventArgs(this, "eyeSpacing", prev, this._eyeSpacing));
    }
  }

  /// The distance to when the left and right image cross.
  double get focusDistance => this._focusDistance;
  set focusDistance(double focusDistance) {
    focusDistance ??= 12.0;
    if (!Math.Comparer.equals(this._focusDistance, focusDistance)) {
      double prev = this._focusDistance;
      this._focusDistance = focusDistance;
      this._updateConstMats();
      this._onChanged(new Events.ValueChangedEventArgs(this, "focusDistance", prev, this._focusDistance));
    }
  }

  /// Updates the camera offset constant matrices.
  void _updateConstMats() {
    double tanAngle = math.atan2(this._eyeSpacing, this._focusDistance);
    this._leftConstMat.matrix =
      new Math.Matrix4.translate(-eyeSpacing, 0.0, 0.0)*
      new Math.Matrix4.rotateY(tanAngle);
    this._rightConstMat.matrix =
      new Math.Matrix4.translate(eyeSpacing, 0.0, 0.0)*
      new Math.Matrix4.rotateY(-tanAngle);
  }

  /// Render the scene with the given [state].
  void render(Core.RenderState state) {
    if (!this._enabled) return;

    this.target.region = this._leftRegion;
    for (RenderPass pass in this._passes) {
      pass.target = this.target;
      pass.camera = this._leftCamera;
      pass.render(state);
    }

    this.target.region = this._rightRegion;
    for (RenderPass pass in this._passes) {
      pass.target = this.target;
      pass.camera = this._rightCamera;
      pass.render(state);
    }

    Core.StateEventArgs args = new Core.StateEventArgs(this, state);
    this._onRender?.emit(args);
  }
}
