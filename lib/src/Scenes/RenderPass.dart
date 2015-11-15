part of ThreeDart.Scenes;

class RenderPass implements Scene {

  Views.Camara _camara;

  Views.Target _target;

  Techniques.Technique _tech;

  List<Core.Object> _children;

  RenderPass() {
    this._camara = new Views.Perspective();
    this._target = new Views.FrontTarget();
    this._tech = null;
    this._children = new List<Core.Object>();
  }

  Views.Camara get camara => this._camara;
  set camara(Views.Camara camara) => this._camara = camara;

  Views.Target get target => this._target;
  set target(Views.Target target) => this._target = target;

  Techniques.Technique get tech => this._tech;
  set tech(Techniques.Technique tech) => this._tech = tech;

  List<Core.Object> get children => this._children;

  void render(Core.RenderState state) {
    this._target.bind(state);
    this._camara.bind(state);
    state.pushTechnique(this._tech);

    for (Core.Object child in this._children) {
      child.render(state);
    }

    state.popTechnique();
    this._camara.unbind(state);
    this._target.unbind(state);
  }

}
