part of ThreeDart.Techniques;

/// A techinque for rendering an entity.
abstract class Technique {

  /// Renders the technique for the given state and entity.
  /// The shape cache for this technique may
  /// be updated or set during this call.
  void render(Core.RenderState state, Core.Entity obj);
}
