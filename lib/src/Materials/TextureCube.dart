part of ThreeDart.Materials;

/// Storage for texture cube material data.
class TextureCube implements Material {

  /// Creates a new texture cube material data.
  TextureCube({
      Textures.TextureCube emission: null,
      Textures.TextureCube ambient: null,
      Textures.TextureCube diffuse: null,
      Textures.TextureCube specular: null,
      double shininess: null}) {
    this.emission = emission;
    this.ambient = ambient;
    this.diffuse = diffuse;
    this.specular = specular;
    this.shininess = shininess;
  }

  /// The emission texture of the material.
  Textures.TextureCube get emission => this._emission;
  set emission(Textures.TextureCube emission) => this._emission = emission;
  Textures.TextureCube _emission;

  /// The ambient texture of the material.
  Textures.TextureCube get ambient => this._ambient;
  set ambient(Textures.TextureCube ambient) => this._ambient = ambient;
  Textures.TextureCube _ambient;

  /// The diffuse texture of the material.
  Textures.TextureCube get diffuse => this._diffuse;
  set diffuse(Textures.TextureCube diffuse) => this._diffuse = diffuse;
  Textures.TextureCube _diffuse;

  /// The specular texture of the material.
  Textures.TextureCube get specular => this._specular;
  set specular(Textures.TextureCube specular) => this._specular = specular;
  Textures.TextureCube _specular;

  /// The phong shininess value of the matrial.
  double get shininess => this._shininess;
  set shininess(double shininess) =>
    this._shininess = (shininess == null)? 1.0:
    (shininess < 1.0e-6)? 1.0e-6: shininess;
  double _shininess;
}
