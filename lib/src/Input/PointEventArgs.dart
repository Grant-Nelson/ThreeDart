part of ThreeDart.Input;

/// The event argument for event's with information about a point on a region.
class PointEventArgs extends Events.EventArgs {

  /// The size of the canvas or region.
  /// This is used to adjust the raw points into the region's normalized space.
  final Math.Region2 size;

  /// The raw point, in pixels, on the region.
  final Math.Point2 rawPoint;

  /// The current wall time that the event started on.
  final DateTime currentTime;

  /// Creates a new point event argument.
  PointEventArgs(Object sender, this.size, this.rawPoint, this.currentTime):
    super(sender);

  /// The adjusted point normalized to the region.
  Math.Point2 get adjustedPoint => this.size.adjustPoint(this.rawPoint);
}
