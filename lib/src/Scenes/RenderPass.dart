part of ThreeDart.Scenes;

/// The render pass renders a single scene.
abstract class RenderPass extends Scene {

  /// The camera describing the view of the scene.
  Views.Camera get camera;
  set camera(Views.Camera camera);

  /// The target defining the storage to render to.
  Views.Target get target;
  set target(Views.Target target);

  /// The default technique to render with.
  Techniques.Technique get technique;
  set technique(Techniques.Technique tech);

  /// Event emitted on an render for this pass.
  Core.Event get onRender;
}
