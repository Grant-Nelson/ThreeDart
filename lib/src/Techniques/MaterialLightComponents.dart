part of ThreeDart.Techniques;

abstract class MaterialLightBaseComponent {
  MaterialLight _owner;
  Shaders.ColorSourceType _type;
  Textures.Texture2D _txt2D;
  Textures.TextureCube _txtCube;

  MaterialLightBaseComponent._(this._owner) {
    this._type = Shaders.ColorSourceType.None;
    this._txt2D = null;
    this._txtCube = null;
  }

  void _onTypeChanged() {
    this._owner._resetShader();
  }

  void _onClear() {
    // Do Nothing
  }

  void _onComponentSet() {
    // Do Nothing
  }

  Shaders.ColorSourceType get type => this._type;

  /// Removes any of this component from the material.
  void clear() {
    if (this._type != Shaders.ColorSourceType.None) {
      this._type = Shaders.ColorSourceType.None;
      this._onTypeChanged();
    }
    this._onClear();
    this._txt2D = null;
    this._txtCube = null;
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
      this._txtCube = null;
      this._onTypeChanged();
    }
    this._txt2D = txt;
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
      this._txt2D = null;
      this._onTypeChanged();
    }
    this._txtCube = txt;
  }
}

class MaterialLightColorComponent extends MaterialLightBaseComponent {
  Math.Color3 _color;

  MaterialLightColorComponent._(MaterialLight owner): super._(owner) {
    this._color = new Math.Color3.black();
  }

  void _onClear() {
    super._onClear();
    this._color = new Math.Color3.black();
  }

  void _onComponentSet() {
    super._onComponentSet();
    this._color = new Math.Color3.white();
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
    this._color = clr;
  }
}

class MaterialLightSpecularComponent extends MaterialLightColorComponent {
  double _shininess;

  MaterialLightSpecularComponent._(MaterialLight owner): super._(owner) {
    this._shininess = 100.0;
  }

  void _onClear() {
    super._onClear();
    this._shininess = 100.0;
  }

  void _onComponentSet() {
    super._onComponentSet();
    this._shininess = 100.0;
  }

  /// The specular color or scalar on the specular texture for the material.
  double get shininess => this._shininess;
  set shininess(double value) {
    if (value <= 0.0) this.clear();
    else if (this._type == Shaders.ColorSourceType.None) {
      this._type = Shaders.ColorSourceType.Solid;
      this._onComponentSet();
      this._onTypeChanged();
    }
    this._shininess = value;
  }
}

class MaterialLightBumpComponent extends MaterialLightBaseComponent {

  MaterialLightBumpComponent._(MaterialLight owner): super._(owner) {
    // Do Nothing
  }
}

class MaterialLightRefractionComponent extends MaterialLightColorComponent {
  double _refraction;

  MaterialLightRefractionComponent._(MaterialLight owner): super._(owner) {
    this._refraction = 1.0;
  }

  void _onClear() {
    super._onClear();
    this._refraction = 1.0;
  }

  void _onComponentSet() {
    super._onComponentSet();
    this._refraction = 1.0;
  }

  /// The refraction scalar for the distortion for the material.
  double get deflection => this._refraction;
  set deflection(double value) {
    if (value <= 0.0) this.clear();
    else if (this._type == Shaders.ColorSourceType.None) {
      this._type = Shaders.ColorSourceType.Solid;
      this._onComponentSet();
      this._onTypeChanged();
    }
    this._refraction = value;
  }
}

class MaterialLightAlphaComponent extends MaterialLightBaseComponent {
  double _alpha;

  MaterialLightAlphaComponent._(MaterialLight owner): super._(owner) {
    this._alpha = 1.0;
  }

  void _onClear() {
    super._onClear();
    this._alpha = 1.0;
  }

  void _onComponentSet() {
    super._onComponentSet();
    this._alpha = 1.0;
  }

  /// The alpha scalar for the color for the material.
  double get value => this._alpha;
  set value(double value) {
    if (value <= 0.0) this.clear();
    else if (this._type == Shaders.ColorSourceType.None) {
      this._type = Shaders.ColorSourceType.Solid;
      this._onComponentSet();
      this._onTypeChanged();
    }
    this._alpha = value;
  }
}
