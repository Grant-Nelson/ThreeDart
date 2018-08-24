part of ThreeDart.Input;

/// The user input object for changing HTML Element events
/// into 3Dart events for user input.
class LockedMouseInput {

  /// The reference to the owner object.
  UserInput _input;

  /// The event to emit when the mouse button is pressed.
  Events.Event _down;

  /// The event to emit when the mouse button is released.
  Events.Event _up;

  /// The event to emit when the mouse is moved.
  Events.Event _move;

  /// The event to emit when the mouse wheel is moved.
  Events.Event _wheel;

  /// The event to emit when the mouse is locked or unlocked.
  Events.Event _lockChanged;

  /// Indicates if the mouse buttons which are pressed or not.
  int _buttons;
  
  /// The point, in pixels, in which the mouse button was last pressed or released.
  Math.Point2 _startPnt;

  /// The point, in pixels, of the last mouse event.
  Math.Point2 _prevPnt;

  /// The time in which the mouse button was last pressed or released.
  DateTime _startTime;

  /// The time of the last mouse event.
  DateTime _prevTime;

  /// Creates a new user input for the given [_elem].
  LockedMouseInput._(this._input) {
    this._down = null;
    this._up = null;
    this._move = null;
    this._wheel = null;
    this._lockChanged = null;
    this._buttons = 0;
    this._startTime = null;
    this._startPnt = new Math.Point2.zero();
    this._prevTime = null;
    this._prevPnt = new Math.Point2.zero();
  }

  /// Indicates the mouse buttons which are currently pressed.
  int get buttons => this._buttons;

  /// Gets the locked mouse arguments.
  /// If [setStart] is true then the start point and time are set.
  MouseEventArgs _getMouseArgs(Button button, Math.Vector2 vec, bool setStart) {
    final DateTime curTime = new DateTime.now();
    final Math.Point2 pnt = this._prevPnt + Math.Point2.fromVector2(vec);
    MouseEventArgs args = new MouseEventArgs(this, button, this._input.clientRect,
      this._startPnt, this._prevPnt, pnt, this._startTime, this._prevTime, curTime);
    
    if (setStart) {
      this._startTime = curTime;
      this._startPnt = pnt;
    }
    this._prevTime = curTime;
    this._prevPnt = pnt;
    return args;
  }
  
  // TODO: Comment
  bool performDown(Button button, Math.Vector2 vec) {
    this._buttons = button.code;
    if (this._down == null) return false;
    this._down.emit(this._getMouseArgs(button, vec, true));
    return true;
  }

  // TODO: Comment
  bool performUp(Button button, Math.Vector2 vec) {
    this._buttons &= ~button.code;
    if (this._up == null) return false;
    this._up.emit(this._getMouseArgs(button, vec, true));
    return true;
  }

  // TODO: Comment
  bool performMove(Button button, Math.Vector2 vec) {
    if (this._move == null) return false;
    this._move.emit(this._getMouseArgs(button, vec, false));
    return true;
  }

  // TODO: Comment
  bool performWheel(Math.Vector2 wheel) {
    if (this._wheel == null) return false;
    this._wheel.emit(new MouseWheelEventArgs(this, this._input.clientRect, this._prevPnt, new DateTime.now(), wheel));
    return true;
  }
  
  /// Handles the mouse lock and unlock on the canvas.
  void _onLockChanged(Button button, Math.Point2 pnt, bool locked) {
    if (this._lockChanged == null) return;
    final DateTime curTime = new DateTime.now();
    this._lockChanged.emit(new LockedEventArgs(this, locked, button, this._input.clientRect, pnt, curTime));
  }

  /// The mouse down event.
  Events.Event get down {
    this._down ??= new Events.Event();
    return this._down;
  }

  /// The mouse up event.
  Events.Event get up {
    this._up ??= new Events.Event();
    return this._up;
  }

  /// The mouse move event.
  Events.Event get move {
    this._move ??= new Events.Event();
    return this._move;
  }

  /// The mouse wheel move event.
  Events.Event get wheel {
    this._wheel ??= new Events.Event();
    return this._wheel;
  }

  /// The mouse has been locked or unlocked.
  Events.Event get lockChanged {
    this._lockChanged ??= new Events.Event();
    return this._lockChanged;
  }
}
