part of ThreeDart.Materials;

/// Storage for solid color reflective material data.
class ReflSolid extends Solid {

  /// Creates a new solid color reflective material data.
  ReflSolid({
      Math.Color4 emission: null,
      Math.Color4 ambient: null,
      Math.Color4 diffuse: null,
      Math.Color4 specular: null,
      double shininess: null,
      Textures.TextureCube environment: null,
      double refraction: null,
      Math.Color4 reflectScalar: null,
      Math.Color4 refractScalar: null}) {
    this.emission = emission;
    this.ambient = ambient;
    this.diffuse = diffuse;
    this.specular = specular;
    this.shininess = shininess;
    this.environment = environment;
    this.refraction = refraction;
    this.reflectScalar = reflectScalar;
    this.refractScalar = refractScalar;
  }

  /// The environment cube texture of the world of the material.
  Textures.TextureCube get environment => this._envMap;
  set environment(Textures.TextureCube environment) => this._envMap = environment;
  Textures.TextureCube _envMap;

  /// The refraction weight of the matrial.
  double get refraction => this._refraction;
  void set refraction(double refraction) {
    this._refraction = (refraction == null)? 1.0: Math.clampVal(refraction);
  }
  double _refraction;

  /// The reflection color scalar of the matrial.
  Math.Color4 get reflectScalar => this._reflectScalar;
  void set reflectScalar(Math.Color4 color) {
    this._reflectScalar = (color == null)? new Math.Color4.transparent(): color;
  }
  Math.Color4 _reflectScalar;

  /// The refraction color scalar of the matrial.
  Math.Color4 get refractScalar => this._refractScalar;
  void set refractScalar(Math.Color4 color) {
    this._refractScalar = (color == null)? new Math.Color4.transparent(): color;
  }
  Math.Color4 _refractScalar;

  /// Binds this material to the given [state].
  void bind(Core.RenderState state) {
    super.bind(state);
    if (this._envMap != null) this._envMap.bind(state);
  }

  /// Unbinds this material from the given [state].
  void unbind(Core.RenderState state) {
    super.unbind(state);
    if (this._envMap != null) this._envMap.unbind(state);
  }
}
