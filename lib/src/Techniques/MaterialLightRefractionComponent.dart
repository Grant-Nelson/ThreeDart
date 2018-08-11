part of ThreeDart.Techniques;

/// A material light component which allows refraction to be assigned.
class MaterialLightRefractionComponent extends MaterialLightColorComponent {
  double _refraction;

  /// Creates a new refraction material light component for the given [owner].
  MaterialLightRefractionComponent._(MaterialLight owner, String name): super._(owner, name) {
    this._refraction = 1.0;
  }

  /// Handles setting the refraction member if it has changed.
  void _setRefraction(double refraction) {
    if (!Math.Comparer.equals(this._refraction, refraction)) {
      double prev = this._refraction;
      this._refraction = refraction;
      this._onChanged(new Events.ValueChangedEventArgs(this, "${this._name}.refraction", prev, this._refraction));
    }
  }

  /// Handles clearing the refraction when the component is being cleared.
  void _onClear() {
    super._onClear();
    this._setRefraction(1.0);
  }

  /// Handles the component being set from None to some other source type.
  void _onComponentSet() {
    super._onComponentSet();
    this._setRefraction(1.0);
  }

  /// The refraction scalar for the distortion for the material.
  double get deflection => this._refraction;
  set deflection(double value) {
    value = value ?? 1.0;
    if (value <= 0.0) this.clear();
    else if (this._type == Shaders.ColorSourceType.None) {
      this._type = Shaders.ColorSourceType.Solid;
      this._onComponentSet();
      this._onTypeChanged();
    }
    this._setRefraction(value);
  }
}
