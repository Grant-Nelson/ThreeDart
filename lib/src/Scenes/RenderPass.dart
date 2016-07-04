part of ThreeDart.Scenes;

/// The render pass renders a single scene.
abstract class RenderPass extends Scene {

  /// The camara describing the view of the scene.
  Views.Camara get camara;
  set camara(Views.Camara camara);

  /// The target defining the storage to render to.
  Views.Target get target;
  set target(Views.Target target);

  /// The default technique to render with.
  Techniques.Technique get tech;
  set tech(Techniques.Technique tech);

  /// Event emitted on an redner for this pass.
  Core.Event get onRender;
}
