part of ThreeDart.Techniques;

/// A techinque for rendering an entity.
abstract class Technique implements Core.Changable {

  /// Updates the technique for the given state .
  /// If this technique attached to multiple entities then the update
  /// is called for each entity prior to render. The update isn't
  /// called for every entity that render will be called on.
  void update(Core.RenderState state);

  /// Renders the technique for the given state and entity.
  /// The shape cache for this technique may
  /// be updated or set during this call.
  void render(Core.RenderState state, Core.Entity obj);
}
