part of ThreeDart.Materials;

/// Storage for bumpy texture 2D material data.
class BumpyTexture2D extends Texture2D {

  /// Creates a new bumpy texture 2D material data.
  BumpyTexture2D({
      Textures.Texture2D emission: null,
      Math.Color3 ambient: null,
      Math.Color3 diffuse: null,
      Textures.Texture2D color: null,
      Textures.Texture2D specular: null,
      Textures.Texture2D bumpMap: null,
      double shininess: null}) :
    super(emission: emission, ambient: ambient, diffuse: diffuse,
          color: color, specular: specular, shininess: shininess) {
    this.bumpMap = bumpMap;
  }

  /// The bumpmap texture of the material.
  Textures.Texture2D get bumpMap => this._bumpMap;
  set bumpMap(Textures.Texture2D bumpMap) => this._bumpMap = bumpMap;
  Textures.Texture2D _bumpMap;

  /// Binds this material to the given [state].
  void bind(Core.RenderState state) {
    super.bind(state);
    if (this._bumpMap != null) this._bumpMap.bind(state);
  }

  /// Unbinds this material from the given [state].
  void unbind(Core.RenderState state) {
    super.unbind(state);
    if (this._bumpMap != null) this._bumpMap.unbind(state);
  }
}
