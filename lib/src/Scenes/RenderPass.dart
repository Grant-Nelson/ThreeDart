part of ThreeDart.Scenes;

/// The render pass renders a single scene.
class RenderPass implements Scene {

  /// The camera describing the view of the scene.
  Views.Camara _camara;

  /// The target defining the storage to render to.
  Views.Target _target;

  /// The default technique to render with.
  Techniques.Technique _tech;

  /// The children entities to render.
  List<Core.Entity> _children;

  /// Event emitted before an update for this pass.
  Core.Event _onPreUpdate;

  /// Event emitted after an update for this pass.
  Core.Event _onPostUpdate;

  /// Event emitted on an redner for this pass.
  Core.Event _onRender;

  /// Creates a new render pass.
  RenderPass() {
    this._camara = new Views.Perspective();
    this._target = new Views.FrontTarget();
    this._tech = null;
    this._children = new List<Core.Entity>();
    this._onPreUpdate = new Core.Event();
    this._onPostUpdate = new Core.Event();
    this._onRender = new Core.Event();
  }

  /// The camera describing the view of the scene.
  Views.Camara get camara => this._camara;
  set camara(Views.Camara camara) => this._camara = camara;

  /// The target defining the storage to render to.
  Views.Target get target => this._target;
  set target(Views.Target target) => this._target = target;

  /// The default technique to render with.
  Techniques.Technique get tech => this._tech;
  set tech(Techniques.Technique tech) => this._tech = tech;

  /// The children entities to render.
  List<Core.Entity> get children => this._children;

  /// Event emitted before an update for this pass.
  Core.Event get onPreUpdate => this._onPreUpdate;

  /// Event emitted after an update for this pass.
  Core.Event get onPostUpdate => this._onPostUpdate;

  /// Event emitted on an redner for this pass.
  Core.Event get onRender => this._onRender;

  /// Render the scene with the given [state].
  void render(Core.RenderState state) {
    Core.StateEventArgs args = new Core.StateEventArgs(this, state);
    this._onPreUpdate.emit(args);

    state.pushTechnique(this._tech);
    this._target.bind(state);
    this._camara.bind(state);

    if (this._tech != null) this._tech.update(state);
    for (Core.Entity child in this._children) {
      child.update(state);
    }
    this._onPostUpdate.emit(args);

    for (Core.Entity child in this._children) {
      child.render(state);
    }
    this._onRender.emit(args);

    this._camara.unbind(state);
    this._target.unbind(state);
    state.popTechnique();
  }
}
