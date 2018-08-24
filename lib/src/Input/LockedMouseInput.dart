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
    this._prevTime = null;

    // TODO: Implement touch as a mouse event.
    //this._elem.onTouchStart
    //this._elem.onTouchMove
    //this._elem.onTouchEnd
  }

  /// Indicates the mouse buttons which are currently pressed.
  int get buttons => this._buttons;

  /*
  /// Gets the mouse arguments for the given [msEvent].
  /// If [setStart] is true then the start point and time are set.
  MouseEventArgs _getMouseArgs(html.MouseEvent msEvent, bool setStart) {
    html.Rectangle rect = this._elem.getBoundingClientRect();
    final Math.Point2 pnt = new Math.Point2(msEvent.page.x-rect.left, msEvent.page.y-rect.top);
    // new Math.Point2(msEvent.movement.x, msEvent.movement.y):
    final DateTime curTime = new DateTime.now();
    final Math.Region2 size = new Math.Region2(0.0, 0.0, this._elem.client.width, this._elem.client.height);
    this._key._modPressed = new Modifiers(msEvent.ctrlKey||msEvent.metaKey, msEvent.altKey, msEvent.shiftKey);
    MouseEventArgs args = new MouseEventArgs(this, this._mousePressed, size,
      this._startPnt, this._prevPnt, pnt, this._startTime, this._prevTime, curTime);
    if (setStart) {
      this._startTime = curTime;
      this._startPnt = pnt;
    }
    this._prevTime = curTime;
    this._prevPnt = pnt;
    return args;
  }

  /// Handles the mouse down in canvas event.
  void _onMouseDown(html.MouseEvent msEvent) {
    if (this._lockOnClick && !this._pointerLocked) {
      this._msEventOnLock = msEvent;
      this._elem.requestPointerLock();
      return;
    }

    this._elem.focus();
    this._mousePressed = true;
    if (this._mouseDown != null) {
      this._mouseDown.emit(this._getMouseArgs(msEvent, true));
      msEvent.preventDefault();
    }
  }

  /// Handles the mouse up in canvas event.
  void _onMouseUp(html.MouseEvent msEvent) {
    this._mousePressed = false;
    if (this._mouseUp != null) {
      this._mouseUp.emit(this._getMouseArgs(msEvent, true));
      msEvent.preventDefault();
    }
  }

  /// Handles the mouse up ouside the canvas event
  /// when the mouse was pressed while over the canvas.
  void _onDocMouseUp(html.MouseEvent msEvent) {
    if (this._mousePressed && !this._elem.client.containsPoint(msEvent.client)) {
      this._mousePressed = false;
      if (this._mouseUp != null) {
        this._mouseUp.emit(this._getMouseArgs(msEvent, true));
        msEvent.preventDefault();
      }
    }
  }

  /// Handles the mouse move on the canvas event.
  void _onMouseMove(html.MouseEvent msEvent) {
    if (this._mouseMove != null) {
      this._mouseMove.emit(this._getMouseArgs(msEvent, false));
      msEvent.preventDefault();
    }
  }

  /// Handles the mouse move off the canvas event
  /// when the mouse was pressed while over the canvas.
  void _onDocMouseMove(html.MouseEvent msEvent) {
    if (this._pointerLocked || (this._mousePressed && !this._elem.client.containsPoint(msEvent.client))) {
      if (this._mouseMove != null) {
        this._mouseMove.emit(this._getMouseArgs(msEvent, false));
        msEvent.preventDefault();
      }
    }
  }

  /// Handles the mouse wheel being moved over the canvas.
  void _onMouseWheel(html.WheelEvent msEvent) {
    this._key._modPressed = new Modifiers(msEvent.ctrlKey||msEvent.metaKey, msEvent.altKey, msEvent.shiftKey);
    if (this._mouseWheel != null) {
      final Math.Point2 pnt = new Math.Point2(msEvent.offset.x, msEvent.offset.y);
      final DateTime curTime = new DateTime.now();
      final Math.Region2 size = new Math.Region2(0.0, 0.0, this._elem.client.width, this._elem.client.height);
      final Math.Vector2 wheel = new Math.Vector2(msEvent.deltaX, msEvent.deltaY)/180.0;
      this._mouseWheel.emit(new MouseWheelEventArgs(this, size, pnt, curTime, wheel));
      msEvent.preventDefault();
    }
  }

  /// Handles the mouse lock and unlock on the canvas.
  void _onPointerLockChanged(html.Event event) {
    bool locked = (html.document.pointerLockElement == this._elem);
    if (locked != this._pointerLocked) {
      this._pointerLocked = locked;
      if (this._pointerLockChanged != null) {
        this._pointerLockChanged.emit(this._getMouseArgs(this._msEventOnLock, true));
      }
    }
  }
  */
  
  // TODO: Comment
  bool performDown(Button button, Math.Vector2 vec) {
    return false;
  }

  // TODO: Comment
  bool performUp(Button button, Math.Vector2 vec) {
    return false;
  }

  // TODO: Comment
  bool performMove(Button button, Math.Vector2 vec) {
    return false;
  }

  // TODO: Comment
  bool performWheel(Math.Vector2 wheel) {
    return false;
  }
  
  // TODO: Comment
  bool _onLockChanged(Button button, Math.Point2 pnt) {
  }

  /// The mouse down event.
  Events.Event get mouseDown {
    this._down ??= new Events.Event();
    return this._down;
  }

  /// The mouse up event.
  Events.Event get mouseUp {
    this._up ??= new Events.Event();
    return this._up;
  }

  /// The mouse move event.
  Events.Event get mouseMove {
    this._move ??= new Events.Event();
    return this._move;
  }

  /// The mouse wheel move event.
  Events.Event get mouseWheel {
    this._wheel ??= new Events.Event();
    return this._wheel;
  }

  /// The mouse has been locked or unlocked.
  Events.Event get pointerLockChanged {
    this._lockChanged ??= new Events.Event();
    return this._lockChanged;
  }
}
