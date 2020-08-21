part of ThreeDart.Input;

/// A mouse event argument.
class MouseEventArgs extends PointEventArgs {

  /// The mouse buttons which are pressed, false otherwise.
  final Button button;

  /// The point, in pixels, at which the mouse button was last pressed or released.
  final Math.Point2 startRawPoint;

  /// The point, in pixels, of the last mouse event.
  final Math.Point2 previousRawPoint;

  /// The start time at which the mouse button was last pressed or released.
  final DateTime startTime;

  /// The time of the last mouse event.
  final DateTime previousTime;

  /// Creates a mouse event argument.
  MouseEventArgs(Object sender, this.button, Math.Region2 size,
    this.startRawPoint, this.previousRawPoint, Math.Point2 rawPoint,
    this.startTime, this.previousTime, DateTime currentTime):
    super(sender, size, rawPoint, currentTime);

  /// The start point adjusted into the region.
  Math.Point2 get adjustedStartPoint => this.size.adjustPoint(this.startRawPoint);

  /// The previous point adjusted into the region.
  Math.Point2 get adjustedPreviousPoint => this.size.adjustPoint(this.previousRawPoint);

  /// The change, in pixels, between the previous point and this point.
  Math.Vector2 get rawDelta => this.previousRawPoint.vectorTo(this.rawPoint);

  /// The change, in pixels, between the start point and this point.
  Math.Vector2 get rawOffset => this.startRawPoint.vectorTo(this.rawPoint);

  /// The change from the previous point and this point adjusted into the region.
  Math.Vector2 get adjustedDelta => this.size.adjustVector(this.rawDelta);

  /// The change from the start point and this point adjusted into the region.
  Math.Vector2 get adjustedOffset => this.size.adjustVector(this.rawOffset);

  /// The change in time, in seconds, from the previous time to this time.
  double get dt => this.currentTime.difference(this.previousTime).inMilliseconds*0.001;

  /// The change in time, in seconds, from the start time to this time.
  double get dtTotal => this.currentTime.difference(this.startTime).inMilliseconds*0.001;
}
