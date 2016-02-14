part of ThreeDart.Materials;

/// Storage for texture 2D material data.
class Texture2D implements Material {

  /// Creates a new texture 2D material data.
  Texture2D({
      Textures.Texture2D emission: null,
      Textures.Texture2D ambient: null,
      Textures.Texture2D diffuse: null,
      Textures.Texture2D specular: null,
      Textures.Texture2D bumpMap: null,
      double shininess: null}) {
    this.emission = emission;
    this.ambient = ambient;
    this.diffuse = diffuse;
    this.specular = specular;
    this.bumpMap = bumpMap;
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

  /// The bumpmap texture of the material.
  Textures.Texture2D get bumpMap => this._bumpMap;
  set bumpMap(Textures.Texture2D bumpMap) => this._bumpMap = bumpMap;
  Textures.Texture2D _bumpMap;

  /// The phong shininess value of the matrial.
  double get shininess => this._shininess;
  set shininess(double shininess) {
    this._shininess = (shininess == null)? 1.0: (shininess < 1.0e-6)? 1.0e-6: shininess;
  }
  double _shininess;

  /// Binds this material to the given [state].
  void bind(Core.RenderState state) {
    if (this._emission != null) this._emission.bind(state);
    if (this._ambient != null) this._ambient.bind(state);
    if (this._diffuse != null) this._diffuse.bind(state);
    if (this._specular != null) this._specular.bind(state);
    if (this._bumpMap != null) this._bumpMap.bind(state);
  }

  /// Unbinds this material from the given [state].
  void unbind(Core.RenderState state) {
    if (this._emission != null) this._emission.unbind(state);
    if (this._ambient != null) this._ambient.unbind(state);
    if (this._diffuse != null) this._diffuse.unbind(state);
    if (this._specular != null) this._specular.unbind(state);
    if (this._bumpMap != null) this._bumpMap.unbind(state);
  }
}
