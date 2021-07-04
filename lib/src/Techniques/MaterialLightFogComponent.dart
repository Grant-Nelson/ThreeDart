part of ThreeDart.Techniques;

/// A material light component for fog.
class MaterialLightFogComponent {
  MaterialLight _owner;
  Math.Color4? _clr;
  double _start;
  double _stop;
  bool _enabled;

  /// Creates a new fog component for the given [owner].
  MaterialLightFogComponent._(this._owner):
    this._clr = Math.Color4.transparent(),
    this._start = 1.0,
    this._stop  = 10.0,
    this._enabled = false;

  /// Handles changes in the component.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._owner._onChanged(args);

  /// Handles type changes to the component.
  void _onTypeChanged() =>
    this._owner._resetShader();

  /// Gets or sets if fog should be enabled.
  bool get enabled => this._enabled;
  set enabled(bool enabled) {
    if (this._enabled != enabled) {
      this._enabled = enabled;
      this._onTypeChanged();
    }
  }

  /// The color for the material component fog.
  Math.Color4? get color => this._clr;
  set color(Math.Color4? color) {
    color ??= Math.Color4.transparent();
    if (this._clr != color) {
      this.enabled = true;
      this._clr = color;
      this._onChanged();
    }
  }

  /// The maximum depth at which only the fog color would be drawn.
 double get start => this._start;
  set start(double start) {
    if (this._start != start) {
      this.enabled = true;
      this._start = start;
      this._onChanged();
    }
  }
  
  /// The minimum depth at which the fog was not drawn.
  double get stop => this._stop;
  set stop(double stop) {
    if (this._stop != stop) {
      this.enabled = true;
      this._stop = stop;
      this._onChanged();
    }
  }
}