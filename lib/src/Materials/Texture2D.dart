part of ThreeDart.Materials;

/// Storage for texture 2D material data.
class Texture2D implements Material {

  /// Creates a new texture 2D material data.
  Texture2D({
      Textures.Texture2D emission: null,
      Math.Color3 ambient: null,
      Math.Color3 diffuse: null,
      Textures.Texture2D color: null,
      Textures.Texture2D specular: null,
      double shininess: null}) {
    this.emission = emission;
    this.ambient = ambient;
    this.diffuse = diffuse;
    this.color = color;
    this.specular = specular;
    this.shininess = shininess;
  }

  /// The emission texture of the material.
  Textures.Texture2D get emission => this._emission;
  set emission(Textures.Texture2D emission) => this._emission = emission;
  Textures.Texture2D _emission;

  /// The ambient color scalar of the material.
  Math.Color3 get ambient => this._ambient;
  set ambient(Math.Color3 color) =>
    this._ambient = (color == null)? new Math.Color3.black(): color;
  Math.Color3 _ambient;

  /// The diffuse color scalar of the material.
  Math.Color3 get diffuse => this._diffuse;
  set diffuse(Math.Color3 color) =>
    this._diffuse = (color == null)? new Math.Color3.white(): color;
  Math.Color3 _diffuse;

  /// The ambient and diffuse texture of the material.
  Textures.Texture2D get color => this._color;
  set color(Textures.Texture2D color) => this._color = color;
  Textures.Texture2D _color;

  /// The specular texture of the material.
  Textures.Texture2D get specular => this._specular;
  set specular(Textures.Texture2D specular) => this._specular = specular;
  Textures.Texture2D _specular;

  /// The phong shininess value of the matrial.
  double get shininess => this._shininess;
  set shininess(double shininess) {
    this._shininess = (shininess == null)? 1.0: (shininess < 1.0e-6)? 1.0e-6: shininess;
  }
  double _shininess;

  /// Binds this material to the given [state].
  void bind(Core.RenderState state) {
    if (this._emission != null) this._emission.bind(state);
    if (this._color != null) this._color.bind(state);
    if (this._specular != null) this._specular.bind(state);
  }

  /// Unbinds this material from the given [state].
  void unbind(Core.RenderState state) {
    if (this._emission != null) this._emission.unbind(state);
    if (this._color != null) this._color.unbind(state);
    if (this._specular != null) this._specular.unbind(state);
  }
}
