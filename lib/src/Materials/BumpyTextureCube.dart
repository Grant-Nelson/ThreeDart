part of ThreeDart.Materials;

/// Storage for bumpy texture cube material data.
class BumpyTextureCube extends TextureCube {

  /// Creates a new bumpy texture cube material data.
  BumpyTextureCube({
      Textures.TextureCube emissionTexture: null,
      Textures.TextureCube ambientTexture: null,
      Textures.TextureCube diffuseTexture: null,
      Textures.TextureCube specularTexture: null,
      Math.Color4 emissionColor: null,
      Math.Color4 ambientColor: null,
      Math.Color4 diffuseColor: null,
      Math.Color4 specularColor: null,
      Textures.TextureCube bumpMap: null,
      double shininess: null}) :
    super(emissionTexture: emissionTexture, ambientTexture: ambientTexture,
          diffuseTexture: diffuseTexture, specularTexture: specularTexture,
          emissionColor: emissionColor, ambientColor: ambientColor,
          diffuseColor: diffuseColor, specularColor: specularColor,
          shininess: shininess) {
    this.bumpMap = bumpMap;
  }

  /// The bumpmap texture of the material.
  Textures.TextureCube get bumpMap => this._bumpMap;
  set bumpMap(Textures.TextureCube bumpMap) => this._bumpMap = bumpMap;
  Textures.TextureCube _bumpMap;

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
