part of ThreeDart.Input;

/// The keyboard input object for changing HTML Element events
/// into 3Dart events for user input.
class KeyInput {

  /// The event to emit when a key is released.
  Events.Event _up;

  /// The event to emit when a key is pressed.
  Events.Event _down;

  /// Indicates the modifiers which have been pressed.
  Modifiers _mods;

  /// The set of key codes which are currently pressed.
  Set<int> _pressed;

  /// Creates a new user input for the given [_elem].
  KeyInput._() {
    this._up = null;
    this._down = null;

    this._mods = new Modifiers.none();
    this._pressed = new Set<int>();
  }

  /// Programmatically performs the key up event.
  bool performUp(Key key) {
    this._mods = key.modifiers;
    this._pressed.add(key.code);
    if (this._up == null) return false;
    return this._up.emit(new KeyEventArgs(this, key));
  }

  /// Programmatically performs the key down event.
  bool performDown(Key key) {
    this._mods = key.modifiers;
    this._pressed.remove(key.code);
    if (this._down == null) return false;
    return this._down.emit(new KeyEventArgs(this, key));
  }

  /// The keyboard key released event.
  Events.Event get up {
    this._up ??= new Events.Event();
    return this._up;
  }

  /// The keyboard key pressed event.
  Events.Event get down {
    this._down ??= new Events.Event();
    return this._down;
  }

  /// The set of key codes which are currently pressed.
  Set<int> get pressed => this._pressed;

  /// Indicates if the modifier keys currently pressed.
  Modifiers get modifiers => this._mods;

  /// Indicates if the control or meta key is currently pressed.
  bool get ctrl => this._mods.ctrl;

  /// Indicates if the alt key is currently pressed.
  bool get alt => this._mods.alt;

  /// Indicates if the shift key is currently pressed.
  bool get shift => this._mods.shift;
}
