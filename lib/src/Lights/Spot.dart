part of ThreeDart.Lights;

/// Storage for spot light data.
class Spot implements Light {
  Math.Point3 _position;
  Math.Vector3 _direction;
  Movers.Mover _mover;
  Math.Color3 _color;
  double _cutoff;
  double _coneAngle;
  double _attenuation0;
  double _attenuation1;
  double _attenuation2;
  Core.Event _changed;

  /// Creates a new spot light data.
  Spot({
      Movers.Mover mover: null,
      Math.Color3  color: null,
      double cutoff:    Math.PI,
      double coneAngle: Math.PI,
      double attenuation0: 1.0,
      double attenuation1: 0.0,
      double attenuation2: 0.0}) {
    this._mover        = null;
    this._color        = new Math.Color3.white();
    this._cutoff       = Math.PI;
    this._coneAngle    = Math.PI;
    this._attenuation0 = 1.0;
    this._attenuation1 = 0.0;
    this._attenuation2 = 0.0;
    this._position     = new Math.Point3(0.0, 0.0, 0.0);
    this._direction    = new Math.Vector3(0.0, 0.0, 1.0);
    this._changed      = null;

    this.mover        = mover;
    this.color        = color;
    this.cutoff       = cutoff;
    this.coneAngle    = coneAngle;
    this.attenuation0 = attenuation0;
    this.attenuation1 = attenuation1;
  }

  /// Updates the light with the current state.
  void update(Core.RenderState state) {
    this._position  = new Math.Point3(0.0, 0.0, 0.0);
    this._direction = new Math.Vector3(0.0, 0.0, 1.0);
    if (this._mover != null) {
      Math.Matrix4 mat = this._mover.update(state, this);
      if (mat != null) {
        this._position  = mat.transPnt3(this._position);
        this._direction = mat.transVec3(this._direction);
      }
    }
  }

  /// Binds the light to the given [state].
  void bind(Core.RenderState state) {
    // Do Nothing
  }

  /// Unbinds the bound the light from the given [state].
  void unbind(Core.RenderState state) {
    // Do Nothing
  }

  /// The event emitted when the light has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Handles changes to the light.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The location the light.
  Math.Point3 get position => this._position;

  /// The direction the light is pointing.
  Math.Vector3 get direction => this._direction;

  /// The mover to position this light.
  Movers.Mover get mover => this._mover;
  void set mover(Movers.Mover mover) {
    if (this._mover != mover) {
      if (this._mover != null) this._mover.changed.remove(this._onChanged);
      Movers.Mover prev = this._mover;
      this._mover = mover;
      if (this._mover != null) this._mover.changed.add(this._onChanged);
      this._onChanged(new Core.ValueChangedEventArgs(this, "mover", prev, this._mover));
    }
  }

  /// The color of the light.
  Math.Color3 get color => this._color;
  void set color(Math.Color3 color) {
    color = color ?? new Math.Color3.white();
    if (this._color != color) {
      Math.Color3 prev = this._color;
      this._color = color;
      this._onChanged(new Core.ValueChangedEventArgs(this, "color", prev, this._color));
    }
  }

  /// The cut-off angle, in radians, of the light cone.
  double get cutoff => this._cutoff;
  void set cutoff(double cutoff) {
    cutoff = Math.clampVal(cutoff ?? Math.PI, 0.0, Math.PI);
    if (!Math.Comparer.equals(this._cutoff, cutoff)) {
      double prev = this._cutoff;
      this._cutoff = cutoff;
      this._onChanged(new Core.ValueChangedEventArgs(this, "cutoff", prev, this._cutoff));
    }
  }

  /// The cone angle, in radians, of the light.
  double get coneAngle => this._coneAngle;
  void set coneAngle(double coneAngle) {
    coneAngle = Math.clampVal(coneAngle ?? Math.PI, 0.0, Math.PI);
    if (!Math.Comparer.equals(this._coneAngle, coneAngle)) {
      double prev = this._coneAngle;
      this._coneAngle = coneAngle;
      this._onChanged(new Core.ValueChangedEventArgs(this, "coneAngle", prev, this._coneAngle));
    }
  }

  /// The constant attenuation factor of the light.
  double get attenuation0 => this._attenuation0;
  void set attenuation0(double attenuation0) {
    attenuation0 = attenuation0 ?? 1.0;
    if (!Math.Comparer.equals(this._attenuation0, attenuation0)) {
      double prev = this._attenuation0;
      this._attenuation0 = attenuation0;
      this._onChanged(new Core.ValueChangedEventArgs(this, "attenuation0", prev, this._attenuation0));
    }
  }

  /// The linear attenuation factor of the light.
  double get attenuation1 => this._attenuation1;
  void set attenuation1(double attenuation1) {
    attenuation1 = attenuation1 ?? 0.0;
    if (!Math.Comparer.equals(this._attenuation1, attenuation1)) {
      double prev = this._attenuation1;
      this._attenuation1 = attenuation1;
      this._onChanged(new Core.ValueChangedEventArgs(this, "attenuation1", prev, this._attenuation1));
    }
  }

  /// The quadratic attenuation factor of the light.
  double get attenuation2 => this._attenuation2;
  void set attenuation2(double attenuation2) {
    attenuation2 = attenuation2 ?? 0.0;
    if (!Math.Comparer.equals(this._attenuation2, attenuation2)) {
      double prev = this._attenuation2;
      this._attenuation2 = attenuation2;
      this._onChanged(new Core.ValueChangedEventArgs(this, "attenuation2", prev, this._attenuation2));
    }
  }
}
