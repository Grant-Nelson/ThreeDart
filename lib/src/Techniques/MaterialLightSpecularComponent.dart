part of ThreeDart.Techniques;

/// A material light color component which allows a specular value to be assigned.
class MaterialLightSpecularComponent extends MaterialLightColorComponent {
  double _shininess;

  /// Creates a new specular component for the given [owner].
  MaterialLightSpecularComponent._(MaterialLight owner, String name): super._(owner, name) {
    this._shininess = 100.0;
  }

  /// Handles setting the shininess specular member.
  void _setShininess(double shininess) {
    if (!Math.Comparer.equals(this._shininess, shininess)) {
      double prev = this._shininess;
      this._shininess = shininess;
      this._onChanged(new Events.ValueChangedEventArgs(this, "${this._name}.shininess", prev, this._shininess));
    }
  }

  /// Handles clearing the shininess when the component is being cleared.
  void _onClear() {
    super._onClear();
    this._setShininess(100.0);
  }

  /// Handles the component being set from None to some other source type.
  void _onComponentSet() {
    super._onComponentSet();
    this._setShininess(100.0);
  }

  /// The specular color or scalar on the specular texture for the material.
  double get shininess => this._shininess;
  set shininess(double value) {
    value = value ?? 100.0;
    if (value <= 0.0) this.clear();
    else if (this._type == Shaders.ColorSourceType.None) {
      this._type = Shaders.ColorSourceType.Solid;
      this._onComponentSet();
      this._onTypeChanged();
    }
    this._setShininess(value);
  }
}
