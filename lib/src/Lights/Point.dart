part of ThreeDart.Lights;

/// Storage for point light data.
class Point implements Light {
  Math.Point3 _position;
  Movers.Mover _mover;
  Math.Color3 _color;
  double _attenuation0;
  double _attenuation1;
  double _attenuation2;
  Core.Event _changed;

  /// Creates a new point light data.
  Point({
      Movers.Mover mover: null,
      Math.Color3 color: null,
      double attenuation0: null,
      double attenuation1: null,
      double attenuation2: null}) {
    this.mover        = mover;
    this.color        = color;
    this.attenuation0 = attenuation0;
    this.attenuation1 = attenuation1;
    this.attenuation2 = attenuation2;
    this._position    = new Math.Point3(0.0, 0.0, 0.0);
    this._changed     = null;
  }

  /// Emits when the light is changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Updates the light with the current state.
  void update(Core.RenderState state) {
    this._position = new Math.Point3(0.0, 0.0, 0.0);
    if (this._mover != null) {
      Math.Matrix4 mat = this._mover.update(state, this);
      if (mat != null) {
        this._position = mat.transPnt3(this._position);
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

  /// The location the light.
  Math.Point3 get position => this._position;

  /// The mover to position this light.
  Movers.Mover get mover => this._mover;
  void set mover(Movers.Mover mover) {
    this._mover = mover;
  }

  /// The color of the light.
  Math.Color3 get color => this._color;
  void set color(Math.Color3 color) {
    this._color = color ?? new Math.Color3.white();
  }

  /// The constant attenuation factor of the light.
  double get attenuation0 => this._attenuation0;
  void set attenuation0(double attenuation0) {
    this._attenuation0 = attenuation0 ?? 0.0;
  }

  /// The linear attenuation factor of the light.
  double get attenuation1 => this._attenuation1;
  void set attenuation1(double attenuation1) {
    this._attenuation1 = attenuation1 ?? 0.0;
  }

  /// The quadratic attenuation factor of the light.
  double get attenuation2 => this._attenuation2;
  void set attenuation2(double attenuation2) {
    this._attenuation2 = attenuation2 ?? 0.0;
  }
}
