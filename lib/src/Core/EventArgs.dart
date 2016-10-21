part of ThreeDart.Core;

/// The event argument for carrying an event's additional information.
class EventArgs {

  /// The sender of the event.
  final Object sender;

  /// Creates a new event argument.
  EventArgs(this.sender);
}

/// The event argument for event's with information about entities changing.
class EntityEventArgs extends EventArgs {

  /// The list of entities which have been changed.
  /// Typically this will be entities added or removed.
  final List<Entity> entities;

  /// Creates a entity event argument.
  EntityEventArgs(Object sender, this.entities):
    super(sender);
}

/// The event argument for event's with information about a point on a region.
class PointEventArgs extends EventArgs {

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

/// A mouse event argument.
class MouseEventArgs extends PointEventArgs {

  /// True if the mouse button is pressed, false otherwise.
  final bool pressed;

  /// The point, in pixels, at which the mouse button was last pressed or released.
  final Math.Point2 startRawPoint;

  /// The point, in pixels, of the last mouse event.
  final Math.Point2 previousRawPoint;

  /// The start time at which the mouse button was last pressed or released.
  final DateTime startTime;

  /// The time of the last mouse event.
  final DateTime previousTime;

  /// Creates a mouse event argument.
  MouseEventArgs(Object sender, this.pressed, Math.Region2 size,
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

/// The mouse wheel event argument.
class MouseWheelEventArgs extends PointEventArgs {

  /// The amount the wheel has changed, typically only the y axis has changed.
  final Math.Vector2 wheel;

  /// Creates a mouse wheel event argument.
  MouseWheelEventArgs(Object sender, Math.Region2 size,
    Math.Point2 rawPoint, DateTime currentTime, this.wheel):
    super(sender, size, rawPoint, currentTime);
}

/// The key event arguments for events from the keyboard.
class KeyEventArgs extends EventArgs {

  /// The code for the key which was pressed.
  final int keyCode;

  /// Creates a new key event argument.
  KeyEventArgs(Object sender, this.keyCode):
    super(sender);
}

/// The state event arguments for update and render events.
class StateEventArgs extends EventArgs {

  /// The render state for an update or render.
  final RenderState state;

  /// Creates a new state event argument.
  StateEventArgs(Object sender, this.state):
    super(sender);
}
