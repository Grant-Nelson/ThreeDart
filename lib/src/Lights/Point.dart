part of ThreeDart.Lights;

/// Storage for point light data.
class Point implements Light {
  Math.Point3 _position;
  Movers.Mover _mover;
  Math.Color3 _color;
  double _attenuation0;
  double _attenuation1;
  double _attenuation2;
  Events.Event _changed;

  /// Creates a new point light data.
  Point({
      Movers.Mover mover: null,
      Math.Color3  color: null,
      double attenuation0: 1.0,
      double attenuation1: 0.0,
      double attenuation2: 0.0}) {
    this._mover        = null;
    this._color        = new Math.Color3.white();
    this._attenuation0 = 1.0;
    this._attenuation1 = 0.0;
    this._attenuation2 = 0.0;
    this._position     = Math.Point3.zero;
    this._changed      = null;

    this.mover        = mover;
    this.color        = color;
    this.attenuation0 = attenuation0;
    this.attenuation1 = attenuation1;
    this.attenuation2 = attenuation2;
  }

  /// Emits when the light is changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles changes to the light.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Updates the light with the current state.
  void update(Core.RenderState state) {
    this._position = Math.Point3.zero;
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
    if (this._mover != mover) {
      if (this._mover != null) this._mover.changed.remove(this._onChanged);
      Movers.Mover prev = this._mover;
      this._mover = mover;
      if (this._mover != null) this._mover.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "mover", prev, this._mover));
    }
  }

  /// The color of the light.
  Math.Color3 get color => this._color;
  void set color(Math.Color3 color) {
    this._color = color ?? new Math.Color3.white();
    if (this._color != color) {
      Math.Color3 prev = this._color;
      this._color = color;
      this._onChanged(new Events.ValueChangedEventArgs(this, "color", prev, this._color));
    }
  }

  /// The constant attenuation factor of the light.
  double get attenuation0 => this._attenuation0;
  void set attenuation0(double attenuation0) {
    attenuation0 = attenuation0 ?? 1.0;
    if (!Math.Comparer.equals(this._attenuation0, attenuation0)) {
      double prev = this._attenuation0;
      this._attenuation0 = attenuation0;
      this._onChanged(new Events.ValueChangedEventArgs(this, "attenuation0", prev, this._attenuation0));
    }
  }

  /// The linear attenuation factor of the light.
  double get attenuation1 => this._attenuation1;
  void set attenuation1(double attenuation1) {
    attenuation1 = attenuation1 ?? 0.0;
    if (!Math.Comparer.equals(this._attenuation1, attenuation1)) {
      double prev = this._attenuation1;
      this._attenuation1 = attenuation1;
      this._onChanged(new Events.ValueChangedEventArgs(this, "attenuation1", prev, this._attenuation1));
    }
  }

  /// The quadratic attenuation factor of the light.
  double get attenuation2 => this._attenuation2;
  void set attenuation2(double attenuation2) {
    attenuation2 = attenuation2 ?? 0.0;
    if (!Math.Comparer.equals(this._attenuation2, attenuation2)) {
      double prev = this._attenuation2;
      this._attenuation2 = attenuation2;
      this._onChanged(new Events.ValueChangedEventArgs(this, "attenuation2", prev, this._attenuation2));
    }
  }
}
