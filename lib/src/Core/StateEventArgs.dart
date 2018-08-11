part of ThreeDart.Core;

/// The state event arguments for update and render events.
class StateEventArgs extends Events.EventArgs {

  /// The render state for an update or render.
  final RenderState state;

  /// Creates a new state event argument.
  StateEventArgs(Object sender, this.state):
    super(sender);
}
