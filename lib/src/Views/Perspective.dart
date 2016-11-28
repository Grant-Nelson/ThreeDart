part of ThreeDart.Views;

/// A camera for a perspective rendering of a scene.
class Perspective implements Camera {

  static Math.Matrix4 _lookMat = null;

  Movers.Mover _mover;
  double _fov;
  double _near;
  double _far;
  Core.Event _changed;

  /// Creates a new perspective camera.
  Perspective({Movers.Mover mover: null,
               double fov:  math.PI/3.0,
               double near: 0.1,
               double far:  2000.0}) {
    this._mover   = mover;
    this._fov     = fov;
    this._near    = near;
    this._far     = far;
    this._changed = null;
  }

  /// Indicates that this target has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Handles a change in this target.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Feild of view vertically in radians of the camera.
  double get fov => this._fov;
  void set fov(double fov) {
    if (!Math.Comparer.equals(this._fov, fov)) {
      this._fov = fov;
      this._onChanged();
    }
  }

  /// The near depth, distance from the camera, to start rendering at.
  double get near => this._near;
  void set near(double near) {
    if (!Math.Comparer.equals(this._near, near)) {
      this._near = near;
      this._onChanged();
    }
  }

  /// The far depth, distance from the camera, to stop rendering at.
  double get far => this._far;
  void set far(double far) {
    if (!Math.Comparer.equals(this._far, far)) {
      this._far = far;
      this._onChanged();
    }
  }

  /// The mover to position this camera.
  Movers.Mover get mover => this._mover;
  void set mover(Movers.Mover mover) {
    if (this._mover != mover) {
      if (this._mover != null) this._mover.changed.remove(this._onChanged);
      this._mover = mover;
      if (this._mover != null) this._mover.changed.add(this._onChanged);
      this._onChanged();
    }
  }

  /// Binds this camera to the state.
  void bind(Core.RenderState state) {
    double aspect = state.width.toDouble() / state.height.toDouble();
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

  /// Unbinds this camera and returns to the previous camera.
  void unbind(Core.RenderState state) {
    state.projection.pop();
    state.view.pop();
  }
}
