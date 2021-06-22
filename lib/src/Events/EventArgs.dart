part of ThreeDart.Events;

/// The event argument for carrying an event's additional information.
class EventArgs {

  /// The sender of the event.
  final Object? sender;

  /// Indicates if the event should be passed onto the next event handler (true),
  /// or stopped being handled (false).
  bool propagate = true;

  /// Creates a new event argument.
  EventArgs(this.sender);
}
