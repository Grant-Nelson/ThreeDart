part of ThreeDart.Input;

/// A locked mouse movement event argument.
class LockedEventArgs extends PointEventArgs {

  /// True if the mouse is now locked, false otherwise.
  final bool locked;

  /// The mouse buttons which are pressed, false otherwise.
  final Button button;

  /// Creates a mouse point lock/unlock event argument.
  LockedEventArgs(Object sender,
    this.locked,
    this.button,
    Math.Region2 size,
    Math.Point2 rawPoint,
    DateTime currentTime):
    super(sender, size, rawPoint, currentTime);
}
