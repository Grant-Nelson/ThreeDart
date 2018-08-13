part of ThreeDart.Input;

/// The keyboard input object for changing HTML Element events
/// into 3Dart events for user input.
class KeyInput {

  /// The HTML element the user input is driven from.
  html.Element _elem;

  /// The event to emit when a key is released.
  Events.Event _keyUp;

  /// The event to emit when a key is pressed.
  Events.Event _keyDown;

  /// Indicates the modifiers which have been pressed.
  Modifiers _modPressed;

  /// The set of key codes which arecurrently pressed.
  Set<int> _pressed;

  /// The event streams being listened to.
  List<async.StreamSubscription<Object>> _eventStreams;

  /// Creates a new user input for the given [_elem].
  KeyInput(this._elem) {
    this._keyUp = null;
    this._keyDown = null;

    this._modPressed = new Modifiers.none();
    this._pressed = new Set<int>();

    this._eventStreams = new List<async.StreamSubscription<Object>>();
    this._eventStreams.add(html.document.onKeyUp.listen(this._onKeyUp));
    this._eventStreams.add(html.document.onKeyDown.listen(this._onKeyDown));
  }

  /// Disposes the user input.
  void dispose() {
    for (async.StreamSubscription<Object> stream in this._eventStreams) {
      stream.cancel();
    }
    this._eventStreams.clear();
  }

  /// Converts the html key into the 3Dart key.
  Key _convertKey(html.KeyboardEvent kEvent) =>
    new Key(kEvent.keyCode, ctrl: kEvent.ctrlKey||kEvent.metaKey, alt: kEvent.altKey, shift: kEvent.shiftKey);

  /// Handles a keyboard key being released.
  void _onKeyUp(html.KeyboardEvent kEvent) {
    Key key = this._convertKey(kEvent);
    this.performKeyUp(key);
    if (this._keyUp != null) kEvent.preventDefault();
  }

  /// Handles a keyboard key being pressed.
  void _onKeyDown(html.KeyboardEvent kEvent) {
    Key key = this._convertKey(kEvent);
    this.performKeyDown(key);
    if (this._keyDown != null) kEvent.preventDefault();
  }

  /// Programmatically performs the key up event.
  void performKeyUp(Key key) {
    this._modPressed = key.modifiers;
    this._pressed.add(key.code);
    if (this._keyUp != null)
      this._keyUp.emit(new KeyEventArgs(this, key));
  }

  /// Programmatically performs the key down event.
  void performKeyDown(Key key) {
    this._modPressed = key.modifiers;
    this._pressed.remove(key.code);
    if (this._keyDown != null)
      this._keyDown.emit(new KeyEventArgs(this, key));
  }

  /// The keyboard key released event.
  Events.Event get keyUp {
    this._keyUp ??= new Events.Event();
    return this._keyUp;
  }

  /// The keyboard key pressed event.
  Events.Event get keyDown {
    this._keyDown ??= new Events.Event();
    return this._keyDown;
  }

  /// The set of key codes which arecurrently pressed.
  Set<int> get pressedKeyCodes => this._pressed;
  
  /// Indicates if the modifier keys currently pressed.
  Modifiers get modifiers => this._modPressed;

  /// Indicates if the control or meta key is currently pressed.
  bool get ctrlPressed => this._modPressed.ctrl;

  /// Indicates if the alt key is currently pressed.
  bool get altPressed => this._modPressed.alt;

  /// Indicates if the shift key is currently pressed.
  bool get shiftPressed => this._modPressed.shift;
}
