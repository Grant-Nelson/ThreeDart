part of ThreeDart.Scenes;

/// Interface for any class which can be used to generate a scene.
abstract class Scene implements Events.Changable {

  /// Indicates if this scene should be rendered or not.
  bool get enabled;
  set enabled(bool enable);
  
  /// Render the scene with the given [state].
  void render(Core.RenderState state);
}
