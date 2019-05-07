part of ThreeDart.Input;

/// The user mouse input object for changing HTML Element events
/// into 3Dart events for user mouse input.
class MouseInput {

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

  /// The horizontal mouse wheel movement sensitivity.
  double _whSensitivity;

  /// The vertical mouse wheel movement sensitivity.
  double _wvSensitivity;

  /// Creates a new user mouse input.
  MouseInput._(this._input) {
    this._down = null;
    this._up = null;
    this._move = null;
    this._wheel = null;

    this._buttons = 0;
    this._startTime = null;
    this._startPnt = Math.Point2.zero;
    this._prevTime = null;
    this._prevPnt = Math.Point2.zero;

    this._whSensitivity = 1.0;
    this._wvSensitivity = 1.0;
  }

  /// Gets the mouse arguments.
  /// If [setStart] is true then the start point and time are set.
  MouseEventArgs _getMouseArgs(Button button, Math.Point2 pnt, bool setStart) {
    final DateTime curTime = new DateTime.now();
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

  // Performs a mouse press down event.
  // This also sets the button code currently pressed.
  // Returns true if any events were called, false if none were called.
  bool performDown(Button button, Math.Point2 pnt) {
    this._buttons = button.code;
    if (this._down == null) return false;
    this._down.emit(this._getMouseArgs(button, pnt, true));
    return true;
  }

  // Performs a mouse press up event.
  // This also unsets the button code currently pressed.
  // Returns true if any events were called, false if none were called.
  bool performUp(Button button, Math.Point2 pnt) {
    this._buttons &= ~button.code;
    if (this._up == null) return false;
    this._up.emit(this._getMouseArgs(button, pnt, true));
    return true;
  }

  // Performs a mouse move event.
  // Returns true if any events were called, false if none were called.
  bool performMove(Button button, Math.Point2 pnt) {
    if (this._move == null) return false;
    this._move.emit(this._getMouseArgs(button, pnt, false));
    return true;
  }

  // Performs a mouse wheel event.
  // Returns true if any events were called, false if none were called.
  bool performWheel(Math.Vector2 wheel, Math.Point2 pnt) {
    if (this._wheel == null) return false;
    this._wheel.emit(new MouseWheelEventArgs(this, this._input.clientRect, pnt,
      new DateTime.now(), new Math.Vector2(wheel.dx*this._whSensitivity, wheel.dy*this._wvSensitivity)));
    return true;
  }

  /// The horizontal mouse wheel movement sensitivity.
  double get wheelHorizontalSensitivity => this._whSensitivity;
  void set wheelHorizontalSensitivity(double sensitivity) => this._whSensitivity = sensitivity;

  /// The vertical mouse wheel movement sensitivity.
  double get wheelVerticalSensitivity => this._wvSensitivity;
  void set wheelVerticalSensitivity(double sensitivity) => this._wvSensitivity = sensitivity;

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

  /// Indicates the mouse buttons which are currently pressed.
  int get buttons => this._buttons;
}
