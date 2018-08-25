part of ThreeDart.Input;

/// A touch event argument.
class TouchEventArgs extends PointEventArgs {

  /// All the touched points.
  final List<Math.Point2> points;

  /// The point, in pixels, at which the mouse button was last pressed or released.
  final Math.Point2 startRawPoint;

  /// The point, in pixels, of the last mouse event.
  final Math.Point2 previousRawPoint;

  /// The start time at which the mouse button was last pressed or released.
  final DateTime startTime;

  /// The time of the last mouse event.
  final DateTime previousTime;

  /// Creates a touch event argument.
  TouchEventArgs(Object sender, this.points, Math.Region2 size,
    this.startRawPoint, this.previousRawPoint, Math.Point2 rawPoint,
    this.startTime, this.previousTime, DateTime currentTime):
    super(sender, size, rawPoint, currentTime);

  /// The start point adjusted into the region.
  Math.Point2 get adjustedStartPoint => this.size.adjustPoint(this.startRawPoint);

  /// The previous point adjusted into the region.
  Math.Point2 get adjustedPreviousPoint => this.size.adjustPoint(this.previousRawPoint);

  /// The change, in pixels, between the previous point and this point.
  Math.Vector2 get rawDelta => new Math.Vector2.fromPoint2(this.rawPoint - this.previousRawPoint);

  /// The change, in pixels, between the start point and this point.
  Math.Vector2 get rawOffset => new Math.Vector2.fromPoint2(this.rawPoint - this.startRawPoint);

  /// The change from the previous point and this point adjusted into the region.
  Math.Vector2 get adjustedDelta => this.size.adjustVector(this.rawDelta);

  /// The change from the start point and this point adjusted into the region.
  Math.Vector2 get adjustedOffset => this.size.adjustVector(this.rawOffset);

  /// The change in time, in seconds, from the previous time to this time.
  double get dt => this.currentTime.difference(this.previousTime).inMilliseconds*0.001;

  /// The change in time, in seconds, from the start time to this time.
  double get dtTotal => this.currentTime.difference(this.startTime).inMilliseconds*0.001;
}
