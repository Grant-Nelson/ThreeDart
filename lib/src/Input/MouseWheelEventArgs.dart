part of ThreeDart.Input;

/// The mouse wheel event argument.
class MouseWheelEventArgs extends PointEventArgs {

  /// The amount the wheel has changed, typically only the y axis has changed.
  final Math.Vector2 wheel;

  /// Creates a mouse wheel event argument.
  MouseWheelEventArgs(Object sender, Math.Region2 size,
    Math.Point2 rawPoint, DateTime currentTime, this.wheel):
    super(sender, size, rawPoint, currentTime);
}
