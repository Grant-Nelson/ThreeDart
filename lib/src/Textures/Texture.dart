part of ThreeDart.Textures;

/// The base for all texture and surface types.
abstract class Texture {

  /// The index of the texture.
  int _index;

  /// Creates a new base texture.
  Texture._(this._index);

  /// The index of the texture when bound to the rendering context.
  int get index => this._index;
  set index(int index) => this._index = index;
}
