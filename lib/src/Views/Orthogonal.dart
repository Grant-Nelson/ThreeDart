part of ThreeDart.Views;

/// A camera for an orthogonal rendering of a scene.
class Orthogonal implements Camera {
  Movers.Mover _mover;
  double _near;
  double _far;
  Core.Event _changed;

  /// Creates a new orthogonal camera.
  Orthogonal() {
    this._mover   = null;
    this._near    = 1.0;
    this._far     = 100.0;
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

  /// Unbinds this camera and returns to the previous camera.
  void unbind(Core.RenderState state) {
    state.projection.pop();
    state.view.pop();
  }
}
