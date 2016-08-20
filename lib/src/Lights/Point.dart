part of ThreeDart.Lights;

/// Storage for point light data.
class Point implements Light {

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
  void bind(Core.RenderState state){
    // Do Nothing
  }

  /// Unbinds the bound the light  from the given [state].
  void unbind(Core.RenderState state) {
    // Do Nothing
  }

  /// The location the light.
  Math.Point3 get position => this._position;
  Math.Point3 _position;

  /// The mover to position this light.
  Movers.Mover get mover => this._mover;
  set mover(Movers.Mover mover) => this._mover = mover;
  Movers.Mover _mover;

  /// The color of the light.
  Math.Color3 get color => this._color;
  set color(Math.Color3 color) => this._color = color ?? new Math.Color3.white();
  Math.Color3 _color;

  /// The constant attenuation factor of the light.
  double get attenuation0 => this._attenuation0;
  set attenuation0(double attenuation0) => this._attenuation0 = attenuation0 ?? 0.0;
  double _attenuation0;

  /// The linear attenuation factor of the light.
  double get attenuation1 => this._attenuation1;
  set attenuation1(double attenuation1) => this._attenuation1 = attenuation1 ?? 0.0;
  double _attenuation1;

  /// The quadratic attenuation factor of the light.
  double get attenuation2 => this._attenuation2;
  set attenuation2(double attenuation2) => this._attenuation2 = attenuation2 ?? 0.0;
  double _attenuation2;
}
