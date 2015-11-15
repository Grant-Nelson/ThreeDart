part of ThreeDart.Core;

class Object implements Movers.Movable, Renderable {

  Shapes.Shape _shape;

  Data.BufferStore _store;

  Techniques.Technique _tech;

  List<Object> _children;

  Movers.Mover _mover;

  Object() {
    this._shape = null;
    this._store = null;
    this._tech = null;
    this._children = new List<Object>();
    this._mover = null;
  }

  bool get storeNeedsUpdate => this._store == null;
  void requestStoreUpdate() => this._store = null;
  set store(Data.BufferStore store) => _store = store;
  Data.BufferStore get store => this._store;

  List<Object> get children => _children;

  Movers.Mover get mover => this._mover;
  set mover(Movers.Mover mover) => this._mover = mover;

  Shapes.Shape get shape => this._shape;
  set shape(Shapes.Shape shape) {
    this._shape = shape;
    this._store = null;
  }

  Techniques.Technique get technique => this._tech;
  set technique(Techniques.Technique technique) {
    this._tech = technique;
    this._store = null;
  }

  void render(RenderState state) {
    Math.Matrix4 mat = null;
    if (this._mover != null) {
      mat = this._mover.update(state, this);
    }

    // Push state onto the renderer.
    state.pushMatrix(mat);
    state.pushTechnique(this._tech);

    // Render this object.
    Techniques.Technique tech = state.technique;
    if ((tech != null) && (this._shape != null)) {
      tech.render(state, this);
    }

    // Render all children.
    for (Object child in this._children) {
      child.render(state);
    }

    // Pop state from renderer.
    state.popTechnique();
    state.popMatrix();
  }
}
