part of ThreeDart.Movers;

/// The interface for a moving an object.
abstract class Mover extends Events.Changeable {

  /// Updates the mover to the new matrix for the given object.
  ///
  /// This updates with the given [state] and the [obj] this mover is attached to.
  /// The returned matrix is applied to the object.
  Math.Matrix4 update(Core.RenderState state, Movable obj);
}
