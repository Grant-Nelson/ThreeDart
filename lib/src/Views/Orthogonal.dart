part of ThreeDart.Views;

/// A camera for an orthogonal rendering of a scene.
class Orthogonal implements Camera {
  Movers.Mover? _mover;
  double _near;
  double _far;
  Events.Event? _changed;

  /// Creates a new orthogonal camera.
  Orthogonal({
    Movers.Mover? mover = null,
    double near = 1.0,
    double far  = 100.0}):
    this._mover = mover,
    this._near  = near,
    this._far   = far,
    this._changed = null;

  /// Indicates that this target has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles a change in this target.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// The near depth, distance from the camera, to start rendering at.
  double get near => this._near;
  set near(double near) {
    if (!Math.Comparer.equals(this._near, near)) {
      double prev = this._near;
      this._near = near;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'near', prev, this._near));
    }
  }

  /// The far depth, distance from the camera, to stop rendering at.
  double get far => this._far;
  set far(double far) {
    if (!Math.Comparer.equals(this._far, far)) {
      double prev = this._far;
      this._far = far;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'far', prev, this._far));
    }
  }

  /// The mover to position this camera.
  Movers.Mover? get mover => this._mover;
  set mover(Movers.Mover? mover) {
    if (this._mover != mover) {
      this._mover?.changed.remove(this._onChanged);
      Movers.Mover? prev = this._mover;
      this._mover = mover;
      this._mover?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'mover', prev, this._mover));
    }
  }

  /// Binds this camera to the state.
  void bind(Core.RenderState state) {
    double width = state.width.toDouble()*0.5;
    double height = state.height.toDouble()*0.5;
    state.projection.push(new Math.Matrix4.ortho(-width, width, -height, height, this._near, this._far));

    Math.Matrix4 look = new Math.Matrix4.lookTowards(Math.Point3.zero,
        Math.Vector3.posY, Math.Vector3.posZ);
    var mover = this.mover;
    if (mover != null) {
      Math.Matrix4 mat = mover.update(state, this);
      look = look*mat;
    }
    state.view.push(look);
  }

  /// Unbinds this camera and returns to the previous camera.
  void unbind(Core.RenderState state) {
    state.projection.pop();
    state.view.pop();
  }
}
