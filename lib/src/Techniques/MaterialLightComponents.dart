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
    this._type = Shaders.ColorSourceType.None;
    this._txt2D = null;
    this._txtCube = null;
  }

  /// Handles changes in the component.
  void _onChanged([Core.EventArgs args = null]) {
    this._owner._onChanged(args);
  }

  /// Handles type changes to the component.
  void _onTypeChanged() {
    this._owner._resetShader();
  }

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
      if (this._txt2D != null) this._txt2D.loadFinished.remove(this._onChanged);
      Textures.Texture2D prev = this._txt2D;
      this._txt2D = txt2D;
      if (this._txt2D != null) this._txt2D.loadFinished.add(this._onChanged);
      this._onChanged(new Core.ValueChangedEventArgs(this, "${this._name}.texture2D", prev, this._txt2D));
    }
  }

  /// Sets the Cube texture member if it has changed.
  /// This will connect the changed events and call changed.
  void _setTxtCube(Textures.TextureCube txtCube) {
    if (this._txtCube != txtCube) {
      if (this._txtCube != null) this._txtCube.loadFinished.remove(this._onChanged);
      Textures.TextureCube prev = this._txtCube;
      this._txtCube = txtCube;
      if (this._txtCube != null) this._txtCube.loadFinished.add(this._onChanged);
      this._onChanged(new Core.ValueChangedEventArgs(this, "${this._name}.textureCube", prev, this._txtCube));
    }
  }

  /// The type of source this component will get it's color from.
  Shaders.ColorSourceType get type => this._type;

  /// Removes any of this component from the material.
  void clear() {
    if (this._type != Shaders.ColorSourceType.None) {
      this._type = Shaders.ColorSourceType.None;
      this._onTypeChanged();
    }
    this._onClear();
    this._setTxt2D(null);
    this._setTxtCube(null);
    this._onChanged();
  }

  /// The 2D texture for the material component.
  Textures.Texture2D get texture2D => this._txt2D;
  set texture2D(Textures.Texture2D txt) {
    if (txt == null) {
      if (this._type == Shaders.ColorSourceType.Texture2D) {
        this._type = Shaders.ColorSourceType.Solid;
        this._onTypeChanged();
      }
    } else if (this._type != Shaders.ColorSourceType.Texture2D) {
      if (this._type == Shaders.ColorSourceType.None)
        this._onComponentSet();
      this._type = Shaders.ColorSourceType.Texture2D;
      this._setTxtCube(null);
      this._onTypeChanged();
    }
    this._setTxt2D(txt);
  }

  /// The cube texture for the material component.
  Textures.TextureCube get textureCube => this._txtCube;
  set textureCube(Textures.TextureCube txt) {
    if (txt == null) {
      if (this._type == Shaders.ColorSourceType.TextureCube) {
        this._type = Shaders.ColorSourceType.Solid;
        this._onTypeChanged();
      }
    } else if (this._type != Shaders.ColorSourceType.TextureCube) {
      if (this._type == Shaders.ColorSourceType.None)
        this._onComponentSet();
      this._type = Shaders.ColorSourceType.TextureCube;
      this._setTxt2D(null);
      this._onTypeChanged();
    }
    this._setTxtCube(txt);
  }
}

//===============================================

/// A material light component which allows a solid color.
class MaterialLightColorComponent extends MaterialLightBaseComponent {
  Math.Color3 _color;

  /// Creates a new material light color component for the given [owner].
  MaterialLightColorComponent._(MaterialLight owner, String name): super._(owner, name) {
    this._color = new Math.Color3.black();
  }

  /// Handles setting the color member if it has changed.
  void _setColor(Math.Color3 color) {
    if (this._color != color) {
      Math.Color3 prev = this._color;
      this._color = color;
      this._onChanged(new Core.ValueChangedEventArgs(this, "${this._name}.color", prev, this._color));
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
  Math.Color3 get color => this._color;
  set color(Math.Color3 clr) {
    if (clr == null) this.clear();
    else if (this._type == Shaders.ColorSourceType.None) {
      this._type = Shaders.ColorSourceType.Solid;
      this._onComponentSet();
      this._onTypeChanged();
    }
    this._setColor(clr);
  }
}

//===============================================

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
      this._onChanged(new Core.ValueChangedEventArgs(this, "${this._name}.shininess", prev, this._shininess));
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

//===============================================

/// A material light component for assigning a bump map.
class MaterialLightBumpComponent extends MaterialLightBaseComponent {

  /// Creates a new bump map material light component for the given [owner].
  MaterialLightBumpComponent._(MaterialLight owner, String name): super._(owner, name) {
    // Do Nothing
  }
}

//===============================================

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
      this._onChanged(new Core.ValueChangedEventArgs(this, "${this._name}.refraction", prev, this._refraction));
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

//===============================================

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
      this._onChanged(new Core.ValueChangedEventArgs(this, this._name, prev, this._alpha));
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
    value = value ?? 1.0;
    if (value <= 0.0) this.clear();
    else if (this._type == Shaders.ColorSourceType.None) {
      this._type = Shaders.ColorSourceType.Solid;
      this._onComponentSet();
      this._onTypeChanged();
    }
    this._setAlpha(value);
  }
}
