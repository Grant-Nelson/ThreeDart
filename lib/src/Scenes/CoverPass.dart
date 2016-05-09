part of ThreeDart.Scenes;

/// The render pass renders a cover over the whole scene.
class CoverPass implements Scene {

  /// The camera describing the view of the scene.
  Views.Camara _camara;

  /// The target defining the storage to render to.
  Views.Target _target;

  /// The default technique to render with.
  Techniques.Technique _tech;

  /// The box entity to render.
  Core.Entity _box;

  /// Creates a new cover render pass.
  CoverPass() {
    this._camara = new Views.IdentityCamara();
    this._target = new Views.FrontTarget();
    this._tech = null;
    this._box = new Core.Entity()
      ..shape = Shapes.square();
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

  /// Render the scene with the given [state].
  void render(Core.RenderState state) {
    state.pushTechnique(this._tech);
    this._target.bind(state);
    this._camara.bind(state);

    if (this._tech != null) this._tech.update(state);
    this._box.update(state);
    this._box.render(state);

    this._camara.unbind(state);
    this._target.unbind(state);
    state.popTechnique();
  }
}
