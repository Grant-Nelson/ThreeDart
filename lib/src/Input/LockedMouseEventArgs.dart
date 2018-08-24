part of ThreeDart.Input;

/// A locked mouse movement event argument.
class LockedMouseEventArgs extends Events.EventArgs {

  /// True if the mouse button is pressed, false otherwise.
  final bool pressed;

  /// The size of the canvas or region.
  /// This is used to adjust the raw points into the region's normalized space.
  final Math.Region2 size;

  /// The point, in pixels, at which the mouse button was last pressed or released.
  final Math.Vector2 movement;

  /// The start time at which the mouse button was last pressed or released.
  final DateTime startTime;

  /// The time of the last mouse event.
  final DateTime previousTime;

  /// The current wall time that the event started on.
  final DateTime currentTime;

  /// Creates a mouse event argument.
  LockedMouseEventArgs(Object sender,
    this.pressed,
    this.size,
    this.movement,
    this.startTime,
    this.previousTime,
    this.currentTime):
    super(sender);

  /// The change in time, in seconds, from the previous time to this time.
  double get dt => this.currentTime.difference(this.previousTime).inMilliseconds*0.001;

  /// The change in time, in seconds, from the start time to this time.
  double get dtTotal => this.currentTime.difference(this.startTime).inMilliseconds*0.001;
}
