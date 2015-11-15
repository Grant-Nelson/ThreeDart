part of ThreeDart.Core;

/// Interface for any class which can be rendered.
abstract class Renderable {

  /// Renders the implementing class with the given [state].
  void render(RenderState state);
}