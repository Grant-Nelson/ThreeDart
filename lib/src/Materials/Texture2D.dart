part of ThreeDart.Materials;

/// Storage for texture 2D material data.
class Texture2D implements Material {

  /// Creates a new texture 2D material data.
  Texture2D({
      Textures.Texture2D emission: null,
      Textures.Texture2D ambient: null,
      Textures.Texture2D diffuse: null,
      Textures.Texture2D specular: null,
      double shininess: null}) {
    this.emission = emission;
    this.ambient = ambient;
    this.diffuse = diffuse;
    this.specular = specular;
    this.shininess = shininess;
  }

  /// The emission texture of the material.
  Textures.Texture2D get emission => this._emission;
  set emission(Textures.Texture2D emission) => this._emission = emission;
  Textures.Texture2D _emission;

  /// The ambient texture of the material.
  Textures.Texture2D get ambient => this._ambient;
  set ambient(Textures.Texture2D ambient) => this._ambient = ambient;
  Textures.Texture2D _ambient;

  /// The diffuse texture of the material.
  Textures.Texture2D get diffuse => this._diffuse;
  set diffuse(Textures.Texture2D diffuse) => this._diffuse = diffuse;
  Textures.Texture2D _diffuse;

  /// The specular texture of the material.
  Textures.Texture2D get specular => this._specular;
  set specular(Textures.Texture2D specular) => this._specular = specular;
  Textures.Texture2D _specular;

  /// The phong shininess value of the matrial.
  double get shininess => this._shininess;
  set shininess(double shininess) =>
    this._shininess = (shininess == null)? 1.0:
    (shininess < 1.0e-6)? 1.0e-6: shininess;
  double _shininess;
}
