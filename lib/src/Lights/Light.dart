part of ThreeDart.Lights;

/// The interface for any light.
abstract class Light implements Movers.Movable, Core.Bindable {

  /// Updates the light with the current state.
  void update(Core.RenderState state);
}
