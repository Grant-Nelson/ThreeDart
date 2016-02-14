part of ThreeDart.Materials;

/// Storage for texture cube material data.
class TextureCube implements Material {

  /// Creates a new texture cube material data.
  TextureCube({
      Textures.TextureCube emission: null,
      Textures.TextureCube ambient: null,
      Textures.TextureCube diffuse: null,
      Textures.TextureCube specular: null,
      Textures.TextureCube bumpMap: null,
      double shininess: null}) {
    this.emission = emission;
    this.ambient = ambient;
    this.diffuse = diffuse;
    this.specular = specular;
    this.shininess = shininess;
    this.bumpMap = bumpMap;
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

  /// The bumpmap texture of the material.
  Textures.TextureCube get bumpMap => this._bumpMap;
  set bumpMap(Textures.TextureCube bumpMap) => this._bumpMap = bumpMap;
  Textures.TextureCube _bumpMap;

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
