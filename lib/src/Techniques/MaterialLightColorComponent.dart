part of ThreeDart.Techniques;

/// A material light component which allows a solid color.
class MaterialLightColorComponent extends MaterialLightBaseComponent {
  Math.Color3? _color = null;

  /// Creates a new material light color component for the given [owner].
  MaterialLightColorComponent._(MaterialLight owner, String name): super._(owner, name) {
    this._color = new Math.Color3.black();
  }

  /// Handles setting the color member if it has changed.
  void _setColor(Math.Color3? color) {
    if (this._color != color) {
      Math.Color3? prev = this._color;
      this._color = color;
      this._onChanged(new Events.ValueChangedEventArgs(this, this._name+'.color', prev, this._color));
    }
  }

  /// Handles clearing the color when the component is being cleared.
  void _onClear() {
    super._onClear();
    this._setColor(new Math.Color3.black());
  }

  /// Handles the component being set from None to some other source type.
  void _onComponentSet() {
    super._onComponentSet();
    this._setColor(new Math.Color3.white());
  }

  /// The color or scalar on the texture for the material component.
  Math.Color3? get color => this._color;
  set color(Math.Color3? clr) {
    this._setNewType(this._type.enableSolid(clr != null));
    this._setColor(clr);
  }
}