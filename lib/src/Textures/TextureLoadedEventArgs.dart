part of ThreeDart.Textures;

/// The event argument for a texture finished loading.
class TextureLoadedEventArgs extends Events.EventArgs {

  /// Creates a texture event argument.
  TextureLoadedEventArgs(Object sender):
    super(sender);

  /// The string for this event argument.
  String toString() => "TextureLoaded";
}