part of ThreeDart.Techniques;

/// A material light component which allows setting an alpha value.
class MaterialLightAlphaComponent extends MaterialLightBaseComponent {
  double _alpha;

  /// Creates a new alpha meterial light component for the given [owner].
  MaterialLightAlphaComponent._(MaterialLight owner, String name): super._(owner, name) {
    this._alpha = 1.0;
  }

  /// Handles setting the alpha member if it has changed.
  void _setAlpha(double alpha) {
    if (!Math.Comparer.equals(this._alpha, alpha)) {
      double prev = this._alpha;
      this._alpha = alpha;
      this._onChanged(new Events.ValueChangedEventArgs(this, this._name, prev, this._alpha));
    }
  }

  /// Handles clearing the alpha when the component is being cleared.
  void _onClear() {
    super._onClear();
    this._setAlpha(1.0);
  }

  /// Handles the component being set from None to some other source type.
  void _onComponentSet() {
    super._onComponentSet();
    this._setAlpha(1.0);
  }

  /// The alpha scalar for the color for the material.
  double get value => this._alpha;
  set value(double value) {
    value ??= 1.0;
    if (value <= 0.0) this.clear();
    else if (this._type == Shaders.ColorSourceType.None) {
      this._type = Shaders.ColorSourceType.Solid;
      this._onComponentSet();
      this._onTypeChanged();
    }
    this._setAlpha(value);
  }
}
