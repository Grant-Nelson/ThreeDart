part of ThreeDart.Materials;

/// Storage for texture cube material data.
class TextureCube implements Material {

  /// Creates a new texture cube material data.
  TextureCube({
      Textures.TextureCube emissionTexture: null,
      Textures.TextureCube ambientTexture: null,
      Textures.TextureCube diffuseTexture: null,
      Textures.TextureCube specularTexture: null,
      Math.Color4 emissionColor: null,
      Math.Color4 ambientColor: null,
      Math.Color4 diffuseColor: null,
      Math.Color4 specularColor: null,
      double shininess: null}) {
    this.emissionTexture = emissionTexture;
    this.ambientTexture = ambientTexture;
    this.diffuseTexture = diffuseTexture;
    this.specularTexture = specularTexture;
    this.emissionColor = emissionColor;
    this.ambientColor = ambientColor;
    this.diffuseColor = diffuseColor;
    this.specularColor = specularColor;
    this.shininess = shininess;
  }

  /// The emission texture of the material.
  Textures.TextureCube get emissionTexture => this._emissionTxt;
  set emissionTexture(Textures.TextureCube emission) => this._emissionTxt = emission;
  Textures.TextureCube _emissionTxt;

  /// The ambient texture of the material.
  Textures.TextureCube get ambientTexture => this._ambientTxt;
  set ambientTexture(Textures.TextureCube ambient) => this._ambientTxt = ambient;
  Textures.TextureCube _ambientTxt;

  /// The diffuse texture of the material.
  Textures.TextureCube get diffuseTexture => this._diffuseTxt;
  set diffuseTexture(Textures.TextureCube diffuse) => this._diffuseTxt = diffuse;
  Textures.TextureCube _diffuseTxt;

  /// The specular texture of the material.
  Textures.TextureCube get specularTexture => this._specularTxt;
  set specularTexture(Textures.TextureCube specular) => this._specularTxt = specular;
  Textures.TextureCube _specularTxt;

  /// The emission color scalar of the material.
  Math.Color4 get emissionColor => this._emissionClr;
  set emissionColor(Math.Color4 color) =>
    this._emissionClr = (color == null)? new Math.Color4.white(): color;
  Math.Color4 _emissionClr;

  /// The ambient color scalar of the material.
  Math.Color4 get ambientColor => this._ambientClr;
  set ambientColor(Math.Color4 color) =>
    this._ambientClr = (color == null)? new Math.Color4.white(): color;
  Math.Color4 _ambientClr;

  /// The diffuse color scalar of the material.
  Math.Color4 get diffuseColor => this._diffuseClr;
  set diffuseColor(Math.Color4 color) =>
    this._diffuseClr = (color == null)? new Math.Color4.white(): color;
  Math.Color4 _diffuseClr;

  /// The specular color scalar of the material.
  Math.Color4 get specularColor => this._specularClr;
  set specularColor(Math.Color4 color) =>
    this._specularClr = (color == null)? new Math.Color4.white(): color;
  Math.Color4 _specularClr;

  /// The phong shininess value of the matrial.
  double get shininess => this._shininess;
  set shininess(double shininess) {
    this._shininess = (shininess == null)? 1.0: (shininess < 1.0e-6)? 1.0e-6: shininess;
  }
  double _shininess;

  /// Binds this material to the given [state].
  void bind(Core.RenderState state) {
    if (this._emissionTxt != null) this._emissionTxt.bind(state);
    if (this._ambientTxt != null) this._ambientTxt.bind(state);
    if (this._diffuseTxt != null) this._diffuseTxt.bind(state);
    if (this._specularTxt != null) this._specularTxt.bind(state);
  }

  /// Unbinds this material from the given [state].
  void unbind(Core.RenderState state) {
    if (this._emissionTxt != null) this._emissionTxt.unbind(state);
    if (this._ambientTxt != null) this._ambientTxt.unbind(state);
    if (this._diffuseTxt != null) this._diffuseTxt.unbind(state);
    if (this._specularTxt != null) this._specularTxt.unbind(state);
  }
}
