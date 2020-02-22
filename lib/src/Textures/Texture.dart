part of ThreeDart.Textures;

/// The base for all texture and surface types.
abstract class Texture extends Core.Bindable implements Events.Changeable {

  /// The index of the texture when bound to the rendering context.
  int get index;
  set index(int index);
}
