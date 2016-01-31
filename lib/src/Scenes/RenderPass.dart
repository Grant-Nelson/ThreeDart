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

  /// Creates a new render pass.
  RenderPass() {
    this._camara = new Views.Perspective();
    this._target = new Views.FrontTarget();
    this._tech = null;
    this._children = new List<Core.Entity>();
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

  /// Render the scene with the given [state].
  void render(Core.RenderState state) {
    this._target.bind(state);
    this._camara.bind(state);
    state.pushTechnique(this._tech);

    for (Core.Entity child in this._children) {
      child.render(state);
    }

    state.popTechnique();
    this._camara.unbind(state);
    this._target.unbind(state);
  }
}
