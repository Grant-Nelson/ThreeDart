part of ThreeDart.Techniques;

/// A material light color component which allows a specular value to be assigned.
class MaterialLightSpecularComponent extends MaterialLightColorComponent {
  double _shininess;

  /// Creates a new specular component for the given [owner].
  MaterialLightSpecularComponent._(MaterialLight owner, String name):
    this._shininess = 100.0,
    super._(owner, name);

  /// Handles setting the shininess specular member.
  void _setShininess(double shininess) {
    if (!Math.Comparer.equals(this._shininess, shininess)) {
      double prev = this._shininess;
      this._shininess = shininess;
      this._onChanged(new Events.ValueChangedEventArgs(this, this._name+'.shininess', prev, this._shininess));
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
    if (value <= 0.0) {
      this._setNewType(this._type.enableSolid(false));
      this._setShininess(0.0);
    } else {
      this._setNewType(this._type.enableSolid(true));
      this._setShininess(value);
    }
  }
}
