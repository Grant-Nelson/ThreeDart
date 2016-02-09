part of ThreeDart.Views;

/// A camara for an orthogonal rendering of a scene.
class Orthogonal implements Camara {
  Movers.Mover _mover;
  double _near;
  double _far;

  /// Creates a new orthogonal camara.
  Orthogonal() {
    this._mover = null;
    this._near = 1.0;
    this._far = 100.0;
  }

  /// The near depth, distance from the camara, to start rendering at.
  double get near => this._near;
  set near(double near) => this._near = near;

  /// The far depth, distance from the camara, to stop rendering at.
  double get far => this._far;
  set far(double far) => this._far = far;

  /// The mover to position this camara.
  Movers.Mover get mover => this._mover;
  set mover(Movers.Mover mover) => this._mover = mover;

  /// Binds this camara to the state.
  void bind(Core.RenderState state) {
    double width = state.width.toDouble()*0.5;
    double height = state.height.toDouble()*0.5;
    state.projection.push(new Math.Matrix4.ortho(-width, width, -height, height, this._near, this._far));

    Math.Matrix4 look = new Math.Matrix4.lookTowards(new Math.Point3.zero(),
        new Math.Vector3(0.0, 1.0, 0.0), new Math.Vector3(0.0, 0.0, 1.0));
    if (mover != null) {
      Math.Matrix4 mat = mover.update(state, this);
      if (mat != null) look = look*mat;
    }
    state.view.push(look);
  }

  /// Unbinds this camara and returns to the previous camara.
  void unbind(Core.RenderState state) {
    state.projection.pop();
    state.view.pop();
  }
}
