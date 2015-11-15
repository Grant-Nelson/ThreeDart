part of ThreeDart.Views;

class Orthogonal implements Camara {

  Movers.Mover _mover;

  double _near;
  double _far;

  Orthogonal() {
    this._near = 1.0;
    this._far = 100.0;
  }

  double get near => this._near;
  set near(double near) => this._near = near;

  double get far => this._far;
  set far(double far) => this._far = far;

  Movers.Mover get mover => this._mover;
  set mover(Movers.Mover mover) => this._mover = mover;

  void bind(Core.RenderState state) {
    double width = state.width.toDouble()*0.5;
    double height = state.height.toDouble()*0.5;
    state.projectionMatrix = new Math.Matrix4.ortho(-width, width, -height, height, this._near, this._far);

    Math.Matrix4 look = new Math.Matrix4.lookTowards(new Math.Point3.zero(),
        new Math.Vector3(0.0, 1.0, 0.0), new Math.Vector3(0.0, 0.0, 1.0));
    if (mover != null) {
      Math.Matrix4 mat = mover.update(state, this);
      if (mat != null){
        look = look*mat;
      }
    }
    state.viewMatrix = look;
  }

  void unbind(Core.RenderState state) {
    // Empty
  }
}
