part of ThreeDart.Materials;

/// Storage for bumpy texture 2D material data.
class BumpyTexture2D extends Texture2D {

  /// Creates a new bumpy texture 2D material data.
  BumpyTexture2D({
      Textures.Texture2D emissionTexture: null,
      Textures.Texture2D ambientTexture: null,
      Textures.Texture2D diffuseTexture: null,
      Textures.Texture2D specularTexture: null,
      Math.Color4 emissionColor: null,
      Math.Color4 ambientColor: null,
      Math.Color4 diffuseColor: null,
      Math.Color4 specularColor: null,
      Textures.Texture2D bumpMap: null,
      double shininess: null}) :
    super(emissionTexture: emissionTexture, ambientTexture: ambientTexture,
          diffuseTexture: diffuseTexture, specularTexture: specularTexture,
          emissionColor: emissionColor, ambientColor: ambientColor,
          diffuseColor: diffuseColor, specularColor: specularColor,
          shininess: shininess) {
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
