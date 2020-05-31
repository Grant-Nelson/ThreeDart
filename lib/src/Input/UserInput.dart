part of ThreeDart.Input;

/// The user input object for changing HTML Element events
/// into 3Dart events for user input.
class UserInput {
  html.Element _elem;
  KeyInput _key;
  MouseInput _mouse;
  LockedMouseInput _locked;
  TouchInput _touch;
  bool _focused;
  bool _lockOnClick;
  bool _pointerLocked;
  html.MouseEvent _msEventOnLock;
  List<async.StreamSubscription<Object>> _eventStreams;
  double _wheelScalar;

  /// Creates a new user input for the given [_elem].
  UserInput(this._elem) {
    this._key = new KeyInput._();
    this._mouse = new MouseInput._(this);
    this._locked = new LockedMouseInput._(this);
    this._touch = new TouchInput._(this);
    this._focused = false;
    this._lockOnClick = false;
    this._pointerLocked = false;
    this._msEventOnLock = null;
    this._eventStreams = new List<async.StreamSubscription<Object>>();
    this._wheelScalar = (Core.Environment.browser == Core.Browser.firefox)? 1.0/6.0: 1.0/180.0;
  
    this._eventStreams.add(html.document.onContextMenu.listen(this._onContentMenu));
    this._eventStreams.add(this._elem.onFocus.listen(this._onFocus));
    this._eventStreams.add(this._elem.onBlur.listen(this._onBlur));
    this._eventStreams.add(html.document.onKeyUp.listen(this._onKeyUp));
    this._eventStreams.add(html.document.onKeyDown.listen(this._onKeyDown));
    this._eventStreams.add(this._elem.onMouseDown.listen(this._onMouseDown));
    this._eventStreams.add(this._elem.onMouseUp.listen(this._onMouseUp));
    this._eventStreams.add(this._elem.onMouseMove.listen(this._onMouseMove));
    this._eventStreams.add(this._elem.onMouseWheel.listen(this._onMouseWheel));
    this._eventStreams.add(html.document.onMouseMove.listen(this._onDocMouseMove));
    this._eventStreams.add(html.document.onMouseUp.listen(this._onDocMouseUp));
    this._eventStreams.add(html.document.onPointerLockChange.listen(this._onPointerLockChanged));
    this._eventStreams.add(this._elem.onTouchStart.listen(this._onTouchStart));
    this._eventStreams.add(this._elem.onTouchEnd.listen(this._onTouchEnd));
    this._eventStreams.add(this._elem.onTouchMove.listen(this._onTouchMove));
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

  /// Key handler for the user keyboard input.
  KeyInput get key => this._key;

  /// Mouse handler for the user mouse input.
  MouseInput get mouse => this._mouse;

  /// Locked mouse handler for the user locked mouse input.
  LockedMouseInput get locked => this._locked;

  /// Touch pad handler for the user touch or mobile input.
  TouchInput get touch => this._touch;

  /// Gets or sets if the mouse should lock the pointer on click.
  bool get lockOnClick => this._lockOnClick;
  void set lockOnClick(bool enable) { this._lockOnClick = enable; }

  /// Determines if this element is focused.
  bool get hasFocus => this._focused;

  // Indicates if the mouse is locked.
  bool get pointerLocked => this._pointerLocked;

  /// Determines the rectangle for the client of the element being watched.
  Math.Region2 get clientRect => new Math.Region2(0.0, 0.0,
    this._elem.client.width.toDouble(), this._elem.client.height.toDouble());

  /// Converts the html key into the 3Dart key.
  Key _convertKey(html.KeyboardEvent kEvent) =>
    new Key(kEvent.keyCode, ctrl: kEvent.ctrlKey||kEvent.metaKey, alt: kEvent.altKey, shift: kEvent.shiftKey);

  /// Sets the modifier keys for a mouse event.
  void _setMouseModifiers(html.MouseEvent msEvent) {
    this._key._mods = new Modifiers(msEvent.ctrlKey||msEvent.metaKey, msEvent.altKey, msEvent.shiftKey);
  }

  /// Sets the modifier keys for a touch event.
  void _setTouchModifiers(html.TouchEvent tEvent) {
    this._key._mods = new Modifiers(tEvent.ctrlKey||tEvent.metaKey, tEvent.altKey, tEvent.shiftKey);
  }

  /// Gets the raw mouse point relative to the client rectangle in pixels.
  Math.Point2 _rawPoint(html.MouseEvent msEvent) {
    html.Rectangle rect = this._elem.getBoundingClientRect();
    return new Math.Point2((msEvent.page.x-rect.left).toDouble(), (msEvent.page.y-rect.top).toDouble());
  }

  /// Gets the raw movement on the client in delta pixels.
  Math.Vector2 _rawMove(html.MouseEvent msEvent) {
    return new Math.Vector2(msEvent.movement.x, msEvent.movement.y);
  }

  /// Gets the raw touch points relative to the client rectangle in pixels.
  List<Math.Point2> _rawTouchPoints(html.TouchEvent tEvent) {
    html.Rectangle rect = this._elem.getBoundingClientRect();
    List<Math.Point2> pnts = new List<Math.Point2>();
    for (html.Touch touch in tEvent.touches) {
      pnts.add(new Math.Point2((touch.page.x-rect.left).toDouble(), (touch.page.y-rect.top).toDouble()));
    }
    return pnts;
  }

  /// Converts the html button into the 3Dart button.
  Button _convertButton(html.MouseEvent msEvent) =>
    new Button(msEvent.buttons, ctrl: msEvent.ctrlKey||msEvent.metaKey, alt: msEvent.altKey, shift: msEvent.shiftKey);

  /// Determines if the given mouse location is contained in the canvas.
  bool _mouseContained(html.MouseEvent msEvent) {
    html.Rectangle rect = this._elem.getBoundingClientRect();
    final num x = msEvent.page.x - rect.left;
    if (x < 0) return false;
    final num y = msEvent.page.y - rect.top;
    if (y < 0) return false;
    return (x < rect.width) && (y < rect.height);
  }

  /// Handles focus of the canvas.
  void _onFocus(html.Event _) {
    this._focused = true;
  }

  /// Handles blur (focus lost) of the canvas.
  void _onBlur(html.Event _) {
    this._focused = false;
  }

  /// Handles cancelling the content menu for the canvas.
  void _onContentMenu(html.MouseEvent msEvent) {
    if (this.hasFocus && this._mouseContained(msEvent))
      msEvent.preventDefault();
  }

  /// Handles a keyboard key being released.
  void _onKeyUp(html.KeyboardEvent kEvent) {
    if (!this.hasFocus) return;
    final Key key = this._convertKey(kEvent);
    if (this._key.performUp(key))
      kEvent.preventDefault();
  }

  /// Handles a keyboard key being pressed.
  void _onKeyDown(html.KeyboardEvent kEvent) {
    if (!this.hasFocus) return;
    final Key key = this._convertKey(kEvent);
    if (this._key.performDown(key))
      kEvent.preventDefault();
  }

  /// Handles the mouse down in canvas event.
  void _onMouseDown(html.MouseEvent msEvent) {
    this._elem.focus();
    this._focused = true; // This is here because focus/blur doesn't work right now.

    this._setMouseModifiers(msEvent);

    if (this._pointerLocked) {
      final Button button = this._convertButton(msEvent);
      final Math.Vector2 vec = this._rawMove(msEvent);
      if (this._locked.performDown(button, vec))
        msEvent.preventDefault();
      return;
    }

    if (this._lockOnClick) {
      this._msEventOnLock = msEvent;
      this._elem.requestPointerLock();
      return;
    }

    final Button button = this._convertButton(msEvent);
    final Math.Point2 pnt = this._rawPoint(msEvent);
    if (this._mouse.performDown(button, pnt))
      msEvent.preventDefault();
  }

  /// Handles the mouse up in canvas event.
  void _onMouseUp(html.MouseEvent msEvent) {
    this._setMouseModifiers(msEvent);
    final Button button = this._convertButton(msEvent);

    if (this._pointerLocked) {
      final Math.Vector2 vec = this._rawMove(msEvent);
      if (this._locked.performUp(button, vec))
        msEvent.preventDefault();
      return;
    }
    if (this._lockOnClick) return;

    final Math.Point2 pnt = this._rawPoint(msEvent);
    if (this._mouse.performUp(button, pnt))
      msEvent.preventDefault();
  }

  /// Handles the mouse up outside the canvas event
  /// when the mouse was pressed while over the canvas.
  void _onDocMouseUp(html.MouseEvent msEvent) {
    if (!this._mouseContained(msEvent)) {
      this._setMouseModifiers(msEvent);
      final Button button = this._convertButton(msEvent);

      if (this._pointerLocked) {
        final Math.Vector2 vec = this._rawMove(msEvent);
        if (this._locked.performUp(button, vec))
          msEvent.preventDefault();
        return;
      }
      if (this._lockOnClick) return;

      final Math.Point2 pnt = this._rawPoint(msEvent);
      if (this._mouse.performUp(button, pnt))
        msEvent.preventDefault();
    }
  }

  /// Handles the mouse move on the canvas event.
  void _onMouseMove(html.MouseEvent msEvent) {
    this._setMouseModifiers(msEvent);
    final Button button = this._convertButton(msEvent);

    if (this._pointerLocked) {
      final Math.Vector2 vec = this._rawMove(msEvent);
      if (this._locked.performMove(button, vec))
        msEvent.preventDefault();
      return;
    }
    if (this._lockOnClick) return;

    final Math.Point2 pnt = this._rawPoint(msEvent);
    if (this._mouse.performMove(button, pnt))
      msEvent.preventDefault();
  }

  /// Handles the mouse move off the canvas event
  /// when the mouse was pressed while over the canvas.
  void _onDocMouseMove(html.MouseEvent msEvent) {
    if (!this._mouseContained(msEvent)) {
      this._setMouseModifiers(msEvent);
      final Button button = this._convertButton(msEvent);

      if (this._pointerLocked) {
        final Math.Vector2 vec = this._rawMove(msEvent);
        if (this._locked.performMove(button, vec))
          msEvent.preventDefault();
        return;
      }
      if (this._lockOnClick) return;

      final Math.Point2 pnt = this._rawPoint(msEvent);
      if (this._mouse.performMove(button, pnt))
        msEvent.preventDefault();
    }
  }

  /// Handles the mouse wheel being moved over the canvas.
  void _onMouseWheel(html.WheelEvent msEvent) {
    this._setMouseModifiers(msEvent);
    final Math.Vector2 wheel = new Math.Vector2(msEvent.deltaX, msEvent.deltaY)*this._wheelScalar;

    if (this._pointerLocked) {
      if (this._locked.performWheel(wheel))
        msEvent.preventDefault();
      return;
    }
    if (this._lockOnClick) return;

    final Math.Point2 pnt = this._rawPoint(msEvent);
    if (this._mouse.performWheel(wheel, pnt))
      msEvent.preventDefault();
  }

  /// Handles the mouse lock and unlock on the canvas.
  void _onPointerLockChanged(html.Event _) {
    bool locked = (html.document.pointerLockElement == this._elem);
    if (locked != this._pointerLocked) {
      this._pointerLocked = locked;
      final Button button = this._convertButton(this._msEventOnLock);
      final Math.Point2 pnt = this._rawPoint(this._msEventOnLock);
      this._locked._onLockChanged(button, pnt, locked);
    }
  }

  // Handles touch screen point presses starting on the canvas.
  void _onTouchStart(html.TouchEvent tEvent) {
    this._elem.focus();
    this._focused = true; // TODO: Fix focus. This is here because focus/blur doesn't work right now.

    this._setTouchModifiers(tEvent);
    final List<Math.Point2> pnts = this._rawTouchPoints(tEvent);
    if (this._touch.performStart(pnts))
      tEvent.preventDefault();
  }

  // Handles touch screen point presses ending.
  void _onTouchEnd(html.TouchEvent tEvent) {
    this._setTouchModifiers(tEvent);
    final List<Math.Point2> pnts = this._rawTouchPoints(tEvent);
    if (this._touch.performEnd(pnts))
      tEvent.preventDefault();
  }

  // Handles touch screen points moving.
  void _onTouchMove(html.TouchEvent tEvent) {
    this._setTouchModifiers(tEvent);
    final List<Math.Point2> pnts = this._rawTouchPoints(tEvent);
    if (this._touch.performMove(pnts))
      tEvent.preventDefault();
  }
}
