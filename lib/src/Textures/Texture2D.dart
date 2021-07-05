part of ThreeDart.Textures;

/// An interface for 2D texture.
abstract class Texture2D extends Texture {

  /// The internal texture instance.
  WebGL.Texture? get texture;

  /// The loaded state of the texture.
  bool get loaded;

  /// Ths width of the image in pixels as requested or loaded from file.
  int get width;

  /// Ths height of the image in pixels as requested or loaded from file.
  int get height;

  /// The width of the image in pixels allowed by this machine's architecture.
  int get actualWidth;

  /// The height of the image in pixels allowed by this machine's architecture.
  int get actualHeight;
}
