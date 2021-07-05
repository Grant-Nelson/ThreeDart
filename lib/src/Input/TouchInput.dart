part of ThreeDart.Input;

/// The touch screen user input object for changing HTML Element events
/// into 3Dart events for user input.
class TouchInput {

  /// The reference to the owner object.
  UserInput _input;

  /// The event to emit when a touch has started.
  Events.Event? _start;

  /// The event to emit when a touch has ended.
  Events.Event? _end ;

  /// The event to emit when the mouse is moved.
  Events.Event? _move;

  /// The point, in pixels, in which the mouse button was last pressed or released.
  Math.Point2 _startPnt;

  /// The point, in pixels, of the last mouse event.
  Math.Point2 _prevPnt;

  /// The time in which the mouse button was last pressed or released.
  DateTime _startTime;

  /// The time of the last mouse event.
  DateTime _prevTime;

  /// Creates a new user input for the given [_elem].
  TouchInput._(this._input):
    this._start = null,
    this._end   = null,
    this._move  = null,
    this._startPnt = Math.Point2.zero,
    this._prevPnt  = Math.Point2.zero,
    this._startTime = DateTime.now(),
    this._prevTime  = DateTime.now();

  /// Gets the locked mouse arguments.
  /// If [setStart] is true then the start point and time are set.
  TouchEventArgs _getMouseArgs(List<Math.Point2> pnts, bool setStart) {
    final DateTime curTime = new DateTime.now();
    Math.Point2 pnt = (pnts.length > 0)? pnts[0]: Math.Point2.zero;
    TouchEventArgs args = new TouchEventArgs(this, pnts, this._input.clientRect,
      this._startPnt, this._prevPnt, pnt, this._startTime, this._prevTime, curTime);

    if (setStart) {
      this._startTime = curTime;
      this._startPnt = pnt;
    }
    this._prevTime = curTime;
    this._prevPnt = pnt;
    return args;
  }

  // Performs a touch screen touch start.
  // Returns true if any events were called, false if none were called.
  bool performStart(List<Math.Point2> pnts) {
    if (this._start == null) return false;
    this._start?.emit(this._getMouseArgs(pnts, true));
    return true;
  }

  // Performs a touch screen touch end.
  // Returns true if any events were called, false if none were called.
  bool performEnd(List<Math.Point2> pnts) {
    if (this._end == null) return false;
    this._end?.emit(this._getMouseArgs(pnts, true));
    return true;
  }

  // Performs a touch screen touch movement.
  // Returns true if any events were called, false if none were called.
  bool performMove(List<Math.Point2> pnts) {
    if (this._move == null) return false;
    this._move?.emit(this._getMouseArgs(pnts, false));
    return true;
  }

  /// The mouse start event.
  Events.Event get start =>
    this._start ??= new Events.Event();

  /// The mouse up event.
  Events.Event get end =>
    this._end ??= new Events.Event();

  /// The mouse move event.
  Events.Event get move =>
    this._move ??= new Events.Event();
}
