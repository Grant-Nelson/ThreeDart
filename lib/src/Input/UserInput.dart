part of ThreeDart.Input;

/// The user input object for changing HTML Element events
/// into 3Dart events for user input.
class UserInput {

  /// The HTML element the user input is driven from.
  html.Element _elem;

  /// The event to emit when the mouse button is pressed.
  Event _mouseDown;

  /// The event to emit when the mouse button is released.
  Event _mouseUp;

  /// The event to emit when the mouse is moved.
  Event _mouseMove;

  /// The event to emit when the mouse wheel is moved.
  Event _mouseWheel;

  /// The event to emit when the mouse is locked or unlocked.
  Event _pointerLockChanged;

  /// The event to emit when a key is released.
  Event _keyUp;

  /// The event to emit when a key is pressed.
  Event _keyDown;

  /// Indicates if the mouse button is pressed or not.
  bool _mousePressed;

  /// Indicates if the mouse should lock on click.
  bool _lockOnClick;

  /// The point, in pixels, in which the mouse button was last pressed or released.
  Math.Point2 _startPnt;

  /// The point, in pixels, of the last mouse event.
  Math.Point2 _prevPnt;

  /// The time in which the mouse button was last pressed or released.
  DateTime _startTime;

  /// The time of the last mouse event.
  DateTime _prevTime;

  /// Indicates the control or meta key has been pressed.
  bool _ctrlPressed;

  /// Indicates the alt key has been pressed.
  bool _altPressed;

  /// Indicates the shift key has been pressed.
  bool _shiftPressed;

  /// Indicates the mouse is currently locked.
  bool _pointerLocked;

  /// The mouse event when the lock request is made.
  html.MouseEvent _msEventOnLock;

  /// The event streams being listened to.
  List<async.StreamSubscription<Object>> _eventStreams;

  /// Creates a new user input for the given [_elem].
  UserInput(this._elem) {
    this._mouseDown = null;
    this._mouseUp = null;
    this._mouseMove = null;
    this._mouseWheel = null;
    this._pointerLockChanged = null;
    this._keyUp = null;
    this._keyDown = null;

    this._mousePressed = false;
    this._lockOnClick = false;
    this._startTime = null;
    this._startPnt = null;
    this._prevTime = null;
    this._prevPnt = null;
    this._ctrlPressed = false;
    this._altPressed = false;
    this._shiftPressed = false;
    this._pointerLocked = false;
    this._msEventOnLock = null;
    this._eventStreams = new List<async.StreamSubscription<Object>>();

    this._eventStreams.add(this._elem.onMouseDown.listen(this._onMouseDown));
    this._eventStreams.add(this._elem.onMouseUp.listen(this._onMouseUp));
    this._eventStreams.add(this._elem.onMouseMove.listen(this._onMouseMove));
    this._eventStreams.add(this._elem.onMouseWheel.listen(this._onMouseWheel));
    this._eventStreams.add(html.document.onMouseMove.listen(this._onDocMouseMove));
    this._eventStreams.add(html.document.onMouseUp.listen(this._onDocMouseUp));
    this._eventStreams.add(html.document.onKeyUp.listen(this._onKeyUp));
    this._eventStreams.add(html.document.onKeyDown.listen(this._onKeyDown));
    this._eventStreams.add(html.document.onPointerLockChange.listen(this._onPointerLockChanged));

    // TODO: Implement touch as a mouse event.
    //this._elem.onTouchStart
    //this._elem.onTouchMove
    //this._elem.onTouchEnd
  }

  /// Disposes the user input.
  void dispose() {
    for (async.StreamSubscription<Object> stream in this._eventStreams) {
      stream.cancel();
    }
    this._eventStreams.clear();

    if (this._pointerLocked) {
      this._pointerLocked = false;
      html.document.exitPointerLock();
    }
  }

  /// Gets or sets if the mouse should lock the pointer on click.
  bool get lockOnClick => this._lockOnClick;
  void set lockOnClick(bool enable) { this._lockOnClick = enable; }

  /// Gets the mouse arguments for the given [msEvent].
  /// If [setStart] is true then the start point and time are set.
  MouseEventArgs _getMouseArgs(html.MouseEvent msEvent, bool setStart) {
    html.Rectangle rect = this._elem.getBoundingClientRect();
    final Math.Point2 pnt = new Math.Point2(msEvent.page.x-rect.left, msEvent.page.y-rect.top);

      
      new Math.Point2(msEvent.movement.x, msEvent.movement.y):
    final DateTime curTime = new DateTime.now();
    final Math.Region2 size = new Math.Region2(0.0, 0.0, this._elem.client.width, this._elem.client.height);
    this._ctrlPressed = msEvent.ctrlKey||msEvent.metaKey;
    this._altPressed = msEvent.altKey;
    this._shiftPressed = msEvent.shiftKey;
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
    this._ctrlPressed = msEvent.ctrlKey||msEvent.metaKey;
    this._altPressed = msEvent.altKey;
    this._shiftPressed = msEvent.shiftKey;
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

  /// Handles a keyboard key being released.
  void _onKeyUp(html.KeyboardEvent kEvent) {
    this._ctrlPressed = kEvent.ctrlKey||kEvent.metaKey;
    this._altPressed = kEvent.altKey;
    this._shiftPressed = kEvent.shiftKey;
    if (this._keyUp != null) {
      this._keyUp.emit(new KeyEventArgs(this, new UserKey(kEvent.keyCode,
        ctrl: this._ctrlPressed, alt: this._altPressed, shift: this._shiftPressed)));
      kEvent.preventDefault();
    }
  }

  /// Handles a keyboard key being pressed.
  void _onKeyDown(html.KeyboardEvent kEvent) {
    this._ctrlPressed = kEvent.ctrlKey||kEvent.metaKey;
    this._altPressed = kEvent.altKey;
    this._shiftPressed = kEvent.shiftKey;
    if (this._keyDown != null) {
      this._keyDown.emit(new KeyEventArgs(this, new UserKey(kEvent.keyCode,
        ctrl: this._ctrlPressed, alt: this._altPressed, shift: this._shiftPressed)));
      kEvent.preventDefault();
    }
  }

  /// The mouse down event.
  Event get mouseDown {
    this._mouseDown ??= new Event();
    return this._mouseDown;
  }

  /// The mouse up event.
  Event get mouseUp {
    this._mouseUp ??= new Event();
    return this._mouseUp;
  }

  /// The mouse move event.
  Event get mouseMove {
    this._mouseMove ??= new Event();
    return this._mouseMove;
  }

  /// The mouse wheel move event.
  Event get mouseWheel {
    this._mouseWheel ??= new Event();
    return this._mouseWheel;
  }

  /// The mouse has been locked or unlocked.
  Event get pointerLockChanged {
    this._pointerLockChanged ??= new Event();
    return this._pointerLockChanged;
  }

  /// The keyboard key released event.
  Event get keyUp {
    this._keyUp ??= new Event();
    return this._keyUp;
  }

  /// The keyboard key pressed event.
  Event get keyDown {
    this._keyDown ??= new Event();
    return this._keyDown;
  }

  /// Indicates if the mouse button is currently pressed.
  bool get mousePressed => this._mousePressed;

  /// Indicates if the control or meta key is currently pressed.
  bool get ctrlPressed => this._ctrlPressed;

  /// Indicates if the alt key is currently pressed.
  bool get altPressed => this._altPressed;

  /// Indicates if the shift key is currently pressed.
  bool get shiftPressed => this._shiftPressed;

  /// Indicates if the mouse is currently locked.
  bool get pointerLocked => this._pointerLocked;
}
