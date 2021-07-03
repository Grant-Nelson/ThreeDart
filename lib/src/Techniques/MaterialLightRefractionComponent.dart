part of ThreeDart.Techniques;

/// A material light component which allows refraction to be assigned.
class MaterialLightRefractionComponent extends MaterialLightColorComponent {
  double _refraction = 1.0;

  /// Creates a new refraction material light component for the given [owner].
  MaterialLightRefractionComponent._(MaterialLight owner, String name): super._(owner, name);

  /// Handles setting the refraction member if it has changed.
  void _setRefraction(double refraction) {
    if (!Math.Comparer.equals(this._refraction, refraction)) {
      double prev = this._refraction;
      this._refraction = refraction;
      this._onChanged(new Events.ValueChangedEventArgs(this, this._name+'.refraction', prev, this._refraction));
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
    if (value <= 0.0) {
      this._setNewType(this._type.enableSolid(false));
      this._setRefraction(0.0);
    } else {
      this._setNewType(this._type.enableSolid(true));
      this._setRefraction(value);
    }
  }
}
