part of ThreeDart.Techniques;

/// Base class for a material light component.
/// A material light component is the color, texture, and values
/// for a specific setting for the material light technique,
/// such as ambient, diffuse, specular, etc.
abstract class MaterialLightBaseComponent {
  MaterialLight _owner;
  String _name;
  Shaders.ColorSourceType _type;
  Textures.Texture2D _txt2D;
  Textures.TextureCube _txtCube;

  /// Creates a new base component for the given [owner] and [name].
  MaterialLightBaseComponent._(this._owner, this._name) {
    this._type = new Shaders.ColorSourceType();
    this._txt2D = null;
    this._txtCube = null;
  }

  /// Handles changes in the component.
  void _onChanged([Events.EventArgs args = null]) =>
    this._owner._onChanged(args);

  /// Handles type changes to the component.
  void _onTypeChanged() =>
    this._owner._resetShader();

  /// Is called when the component is cleared.
  void _onClear() {
    // Do Nothing
  }

  /// Is called when the component is set from the
  /// source type None to anyother source type.
  void _onComponentSet() {
    // Do Nothing
  }

  /// Sets the 2D texture member if it has changed.
  /// This will connect the changed events and call changed.
  void _setTxt2D(Textures.Texture2D txt2D) {
    if (this._txt2D != txt2D) {
      if (this._txt2D != null) this._txt2D.changed.remove(this._onChanged);
      Textures.Texture2D prev = this._txt2D;
      this._txt2D = txt2D;
      if (this._txt2D != null) this._txt2D.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "${this._name}.texture2D", prev, this._txt2D));
    }
  }

  /// Sets the Cube texture member if it has changed.
  /// This will connect the changed events and call changed.
  void _setTxtCube(Textures.TextureCube txtCube) {
    if (this._txtCube != txtCube) {
      if (this._txtCube != null) this._txtCube.changed.remove(this._onChanged);
      Textures.TextureCube prev = this._txtCube;
      this._txtCube = txtCube;
      if (this._txtCube != null) this._txtCube.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "${this._name}.textureCube", prev, this._txtCube));
    }
  }

  /// The type of source this component will get it's color from.
  Shaders.ColorSourceType get type => this._type;

  /// Sets the type of the source type component will get it's color from.
  void _setNewType(Shaders.ColorSourceType newType) {
    if (this._type != newType) {
      bool componentChange = this._type.hasNone || newType.hasNone;
      this._type = newType;
      if (componentChange) this._onComponentSet();
      this._onTypeChanged();
    }
  }

  /// Removes any of this component from the material.
  void clear() {
    this._setNewType(new Shaders.ColorSourceType());
    this._onClear();
    this._setTxt2D(null);
    this._setTxtCube(null);
    this._onChanged();
  }

  /// The 2D texture for the material component.
  Textures.Texture2D get texture2D => this._txt2D;
  set texture2D(Textures.Texture2D txt) {
    if (txt == null)
      this._setNewType(this._type.enableTxt2D(false));
    else if (!this._type.hasTxt2D) {
      this._setNewType(this._type.enableTxt2D(true));
      this._setTxtCube(null);
    }
    this._setTxt2D(txt);
  }

  /// The cube texture for the material component.
  Textures.TextureCube get textureCube => this._txtCube;
  set textureCube(Textures.TextureCube txt) {
    if (txt == null) {
      this._setNewType(this._type.enableTxtCube(false));
    } else if (!this._type.hasTxtCube) {
      this._setNewType(this._type.enableTxtCube(true));
      this._setTxt2D(null);
    }
    this._setTxtCube(txt);
  }
}