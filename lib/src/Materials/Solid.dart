part of ThreeDart.Materials;

/// Storage for solid color material data.
class Solid implements Material {

  /// Creates a new solid color material data.
  Solid({
      Math.Color4 emission: null,
      Math.Color4 ambient: null,
      Math.Color4 diffuse: null,
      Math.Color4 specular: null,
      double shininess: null}) {
    this.emission = emission;
    this.ambient = ambient;
    this.diffuse = diffuse;
    this.specular = specular;
    this.shininess = shininess;
  }

  /// The emission color of the material.
  Math.Color4 get emission => this._emission;
  set emission(Math.Color4 color) =>
    this._emission = (color == null)? new Math.Color4.transparent(): color;
  Math.Color4 _emission;

  /// The ambient color of the material.
  Math.Color4 get ambient => this._ambient;
  set ambient(Math.Color4 color) =>
    this._ambient = (color == null)? new Math.Color4.transparent(): color;
  Math.Color4 _ambient;

  /// The diffuse color of the material.
  Math.Color4 get diffuse => this._diffuse;
  set diffuse(Math.Color4 color) =>
    this._diffuse = (color == null)? new Math.Color4.transparent(): color;
  Math.Color4 _diffuse;

  /// The specular color of the material.
  Math.Color4 get specular => this._specular;
  set specular(Math.Color4 color) =>
    this._specular = (color == null)? new Math.Color4.transparent(): color;
  Math.Color4 _specular;

  /// The phong shininess value of the matrial.
  double get shininess => this._shininess;
  set shininess(double shininess) {
    this._shininess = (shininess == null)? 1.0: (shininess < 1.0e-6)? 1.0e-6: shininess;
  }
  double _shininess;

  /// Binds this material to the given [state].
  void bind(Core.RenderState state) {
    // Do Nothing
  }

  /// Unbinds this material from the given [state].
  void unbind(Core.RenderState state) {
    // Do Nothing
  }
}
