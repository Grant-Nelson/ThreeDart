part of ThreeDart.Scenes;

/// Interface for any class which can be used to generate a scene.
abstract class Scene implements Events.Changable {

  /// Render the scene with the given [state].
  void render(Core.RenderState state);
}
