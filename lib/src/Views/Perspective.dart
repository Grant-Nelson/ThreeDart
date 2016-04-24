part of ThreeDart.Views;

/// A camara for a perspective rendering of a scene.
class Perspective implements Camara {

  static Math.Matrix4 _lookMat = null;

  Movers.Mover _mover;
  double _fov;
  double _near;
  double _far;

  /// Creates a new perspective camara.
  Perspective({Movers.Mover mover: null,
               double fov:  math.PI/3.0,
               double near: 0.1,
               double far:  2000.0}) {
    this._mover = mover;
    this._fov = fov;
    this._near = near;
    this._far = far;
  }

  /// Feild of view vertically in radians of the camara.
  double get fov => this._fov;
  set fov(double fov) => this._fov = fov;

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
    double aspect = state.gl.drawingBufferWidth / state.gl.drawingBufferHeight;
    state.projection.push(new Math.Matrix4.perspective(this._fov, aspect, this._near, this._far));

    if (_lookMat == null) {
      _lookMat = new Math.Matrix4.lookTowards(
        new Math.Point3(0.0, 0.0, 0.0),
        new Math.Vector3(0.0, 1.0, 0.0),
        new Math.Vector3(0.0, 0.0, -1.0));
    }
    Math.Matrix4 look = _lookMat;
    if (mover != null) {
      Math.Matrix4 mat = mover.update(state, this);
      if (mat != null) {
        look = mat * look;
      }
    }
    state.view.push(look);
  }

  /// Unbinds this camara and returns to the previous camara.
  void unbind(Core.RenderState state) {
    state.projection.pop();
    state.view.pop();
  }
}
