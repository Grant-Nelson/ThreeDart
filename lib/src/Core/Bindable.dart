part of ThreeDart.Core;

/// The interface for a class which can bind and unbind state while rendering.
///
/// Classes which inherit [Bindable] can be bound to the [RenderState]
/// during a portion of the render until unbind is called or another
/// similar [Bindable] is bound to the [RenderState] overriding the first.
abstract class Bindable {

  /// Binds some data to the given [state].
  void bind(RenderState state);

  /// Unbinds the bound data from the given [state].
  void unbind(RenderState state);
}
