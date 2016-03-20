part of ThreeDart.Materials;

/// Storage for texture 2D material data.
class Texture2D implements Material {

  /// Creates a new texture 2D material data.
  Texture2D({
      Textures.Texture2D emissionTexture: null,
      Textures.Texture2D ambientTexture: null,
      Textures.Texture2D diffuseTexture: null,
      Textures.Texture2D specularTexture: null,
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
  Textures.Texture2D get emissionTexture => this._emissionTxt;
  set emissionTexture(Textures.Texture2D emission) => this._emissionTxt = emission;
  Textures.Texture2D _emissionTxt;

  /// The ambient texture of the material.
  Textures.Texture2D get ambientTexture => this._ambientTxt;
  set ambientTexture(Textures.Texture2D ambient) => this._ambientTxt = ambient;
  Textures.Texture2D _ambientTxt;

  /// The diffuse texture of the material.
  Textures.Texture2D get diffuseTexture => this._diffuseTxt;
  set diffuseTexture(Textures.Texture2D diffuse) => this._diffuseTxt = diffuse;
  Textures.Texture2D _diffuseTxt;

  /// The specular texture of the material.
  Textures.Texture2D get specularTexture => this._specularTxt;
  set specularTexture(Textures.Texture2D specular) => this._specularTxt = specular;
  Textures.Texture2D _specularTxt;

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
