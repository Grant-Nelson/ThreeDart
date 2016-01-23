part of ThreeDart.Core;

class UserInput {

  html.Element _elem;
  Event _mouseDown;
  Event _mouseUp;
  Event _mouseMove;
  Event _mouseWheel;
  Event _keyUp;
  Event _keyDown;

  bool _mousePressed;
  Math.Point2 _startPnt;
  Math.Point2 _prevPnt;
  DateTime _startTime;
  DateTime _prevTime;
  bool _ctrlPressed;
  bool _altPressed;
  bool _shiftPressed;

  UserInput(html.Element this._elem) {
    this._mouseDown = new Event(this);
    this._mouseUp = new Event(this);
    this._mouseMove = new Event(this);
    this._mouseWheel = new Event(this);
    this._keyUp = new Event(this);
    this._keyDown = new Event(this);

    this._mousePressed = false;
    this._startTime = null;
    this._startPnt = null;
    this._prevTime = null;
    this._prevPnt = null;
    this._ctrlPressed = false;
    this._altPressed = false;
    this._shiftPressed = false;

    this._elem.onMouseDown.listen(this._onMouseDown);
    this._elem.onMouseUp.listen(this._onMouseUp);
    this._elem.onMouseMove.listen(this._onMouseMove);
    this._elem.onMouseWheel.listen(this._onMouseWheel);
    html.document.onMouseMove.listen(this._onDocMouseMove);
    html.document.onMouseUp.listen(this._onDocMouseUp);
    this._elem.onKeyUp.listen(this._onKeyUp);
    this._elem.onKeyDown.listen(this._onKeyDown);

    // TODO: Implement touch as a mouse event.
    //this._elem.onTouchStart
    //this._elem.onTouchMove
    //this._elem.onTouchEnd
  }

  void dispose() {
    // TODO: Remove event listeners.
  }

  MouseEventArgs _getMouseArgs(html.MouseEvent msEvent, bool setStart) {
    final Math.Point2 pnt = new Math.Point2(msEvent.offset.x, msEvent.offset.y);
    final DateTime curTime = new DateTime.now();
    final Math.Point2 size = new Math.Point2(this._elem.client.width, this._elem.client.height);
    this._ctrlPressed = msEvent.ctrlKey||msEvent.metaKey;
    this._altPressed = msEvent.altKey;
    this._shiftPressed = msEvent.shiftKey;
    MouseEventArgs args = new MouseEventArgs(this._mousePressed, size,
      this._startPnt, this._prevPnt, pnt, this._startTime, this._prevTime, curTime);
    if (setStart) {
      this._startTime = curTime;
      this._startPnt = pnt;
    }
    this._prevTime = curTime;
    this._prevPnt = pnt;
    return args;
  }

  void _onMouseDown(html.MouseEvent msEvent) {
    this._mousePressed = true;
    this._mouseDown.emit(this._getMouseArgs(msEvent, true));
    msEvent.preventDefault();
  }

  void _onMouseUp(html.MouseEvent msEvent) {
    this._mousePressed = false;
    this._mouseUp.emit(this._getMouseArgs(msEvent, true));
    msEvent.preventDefault();
  }

  void _onDocMouseUp(html.MouseEvent msEvent) {
    if (this._mousePressed && !this._elem.client.containsPoint(msEvent.client)) {
      this._mousePressed = false;
      this._mouseUp.emit(this._getMouseArgs(msEvent, true));
    }
  }

  void _onMouseMove(html.MouseEvent msEvent) {
    this._mouseMove.emit(this._getMouseArgs(msEvent, false));
    msEvent.preventDefault();
  }

  void _onDocMouseMove(html.MouseEvent msEvent) {
    if (this._mousePressed && !this._elem.client.containsPoint(msEvent.client)) {
      this._mouseMove.emit(this._getMouseArgs(msEvent, false));
    }
  }

  void _onMouseWheel(html.WheelEvent msEvent) {
    final Math.Point2 pnt = new Math.Point2(msEvent.offset.x, msEvent.offset.y);
    final DateTime curTime = new DateTime.now();
    final Math.Point2 size = new Math.Point2(this._elem.client.width, this._elem.client.height);
    final Math.Vector2 wheel = new Math.Vector2(msEvent.deltaX, msEvent.deltaY)/180.0;
    this._ctrlPressed = msEvent.ctrlKey||msEvent.metaKey;
    this._altPressed = msEvent.altKey;
    this._shiftPressed = msEvent.shiftKey;
    this._mouseWheel.emit(new MouseWheelEventArgs(size, pnt, curTime, wheel));
    msEvent.preventDefault();
  }

  void _onKeyUp(html.KeyboardEvent msEvent) {
    this._ctrlPressed = msEvent.ctrlKey||msEvent.metaKey;
    this._altPressed = msEvent.altKey;
    this._shiftPressed = msEvent.shiftKey;
    this._mouseDown.emit(new KeyEventArgs(msEvent.keyCode));
  }

  void _onKeyDown(html.KeyboardEvent msEvent) {
    this._ctrlPressed = msEvent.ctrlKey||msEvent.metaKey;
    this._altPressed = msEvent.altKey;
    this._shiftPressed = msEvent.shiftKey;
    this._mouseDown.emit(new KeyEventArgs(msEvent.keyCode));
  }

  Event get mouseDown => this._mouseDown;
  Event get mouseUp => this._mouseUp;
  Event get mouseMove => this._mouseMove;
  Event get mouseWheel => this._mouseWheel;
  Event get keyUp => this._keyUp;
  Event get keyDown => this._keyDown;

  bool get mousePressed => this._mousePressed;
  bool get ctrlPressed => this._ctrlPressed;
  bool get altPressed => this._altPressed;
  bool get shiftPressed => this._shiftPressed;
}
