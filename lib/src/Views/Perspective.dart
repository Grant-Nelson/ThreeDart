part of ThreeDart.Views;

/// A camera for a perspective rendering of a scene.
class Perspective implements Camera {

  static Math.Matrix4 _lookMat = null;

  Movers.Mover _premover;
  Movers.Mover _mover;
  double _fov;
  double _near;
  double _far;
  Events.Event _changed;

  /// Creates a new perspective camera.
  Perspective({Movers.Mover premover: null,
               Movers.Mover mover: null,
               double fov:  Math.PI_3,
               double near: 0.1,
               double far:  2000.0}) {
    this._premover = null;
    this._mover    = null;
    this._fov      = Math.PI_3;
    this._near     = 0.1;
    this._far      = 2000.0;
    this._changed  = null;

    this.premover = premover;
    this.mover    = mover;
    this.fov      = fov;
    this.near     = near;
    this.far      = far;
  }

  /// Indicates that this target has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles a change in this target.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Feild of view vertically in radians of the camera.
  double get fov => this._fov;
  void set fov(double fov) {
    fov ??= Math.PI_3;
    if (!Math.Comparer.equals(this._fov, fov)) {
      double prev = this._fov;
      this._fov = fov;
      this._onChanged(new Events.ValueChangedEventArgs(this, "fov", prev, this._fov));
    }
  }

  /// The near depth, distance from the camera, to start rendering at.
  double get near => this._near;
  void set near(double near) {
    near ??= 0.1;
    if (!Math.Comparer.equals(this._near, near)) {
      double prev = this._near;
      this._near = near;
      this._onChanged(new Events.ValueChangedEventArgs(this, "near", prev, this._near));
    }
  }

  /// The far depth, distance from the camera, to stop rendering at.
  double get far => this._far;
  void set far(double far) {
    far ??= 2000.0;
    if (!Math.Comparer.equals(this._far, far)) {
      double prev = this._far;
      this._far = far;
      this._onChanged(new Events.ValueChangedEventArgs(this, "far", prev, this._far));
    }
  }

  /// The mover to position this camera.
  Movers.Mover get mover => this._mover;
  void set mover(Movers.Mover mover) {
    if (this._mover != mover) {
      if (this._mover != null) this._mover.changed.remove(this._onChanged);
      Movers.Mover prev = this._mover;
      this._mover = mover;
      if (this._mover != null) this._mover.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "mover", prev, this._mover));
    }
  }

  /// The mover to offset the focal point of the world prior to the camera projection.
  Movers.Mover get premover => this._premover;
  void set premover(Movers.Mover mover) {
    if (this._premover != mover) {
      if (this._premover != null) this._premover.changed.remove(this._onChanged);
      Movers.Mover prev = this._premover;
      this._premover = mover;
      if (this._premover != null) this._premover.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "premover", prev, this._premover));
    }
  }

  /// Binds this camera to the state.
  void bind(Core.RenderState state) {
    double aspect = state.width.toDouble() / state.height.toDouble();
    Math.Matrix4 proj = new Math.Matrix4.perspective(this._fov, aspect, this._near, this._far);
    if (this._premover != null) {
      Math.Matrix4 mat = this._premover.update(state, this);
      if (mat != null) proj = mat * proj;
    }
    state.projection.push(proj);

    _lookMat ??= new Math.Matrix4.lookTowards(
      Math.Point3.zero,
      Math.Vector3.posY,
      Math.Vector3.negZ);

    Math.Matrix4 look = _lookMat;
    if (this._mover != null) {
      Math.Matrix4 mat = this._mover.update(state, this);
      if (mat != null) look = mat * look;
    }
    state.view.push(look);
  }

  /// Unbinds this camera and returns to the previous camera.
  void unbind(Core.RenderState state) {
    state.projection.pop();
    state.view.pop();
  }
}
