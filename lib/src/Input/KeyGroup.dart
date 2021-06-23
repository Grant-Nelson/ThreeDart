part of ThreeDart.Input;

/// A group of keyboard keys for user interactions.
class KeyGroup extends Collections.Collection<Key> implements Interactable, Events.Changeable {
  Events.Event? _changed = null;
  UserInput? _input = null;
  bool _pressed = false;
  Events.Event? _keyUp = null;
  Events.Event? _keyDown = null;

  /// Creates a new user key group.
  KeyGroup() {
    this.setHandlers(onPreaddHndl:  this._onPreadd,
                     onAddedHndl:   this._onAdded,
                     onRemovedHndl: this._onRemoved);
  }

  /// Emits when the group has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Emits when one of the contained keys is pressed.
  Events.Event get keyUp =>
    this._keyUp ??= new Events.Event();

  /// Emits when one of the contained keys is released.
  Events.Event get keyDown =>
    this._keyDown ??= new Events.Event();

  /// Adds a key to this collection.
  void addKey(int key, {bool ctrl: false, bool alt: false, bool shift: false}) {
    this.add(new Key(key, ctrl: ctrl, alt: alt, shift: shift));
  }

  /// Handles emitting a change.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// Indicated if a contained key is pressed.
  bool get pressed => this._pressed;

  /// Forces the key release signal.
  /// Returns true if released, false if not pressed.
  bool release() {
    if (!this._pressed) return false;
    this._pressed = false;
    this._keyUp?.emit();
    return true;
  }

  /// Handles a key being added to make sure there are no repeats.
  bool _onPreadd(Iterable<Key> keys) {
    for(Key key in keys) {
      if (this.contains(key)) return false;
    }
    return true;
  }

  /// Handles a new key being added.
  void _onAdded(int index, Iterable<Key> items) =>
    this._onChanged(new Events.ItemsAddedEventArgs<Key>(this, index, items));

  /// Handles a key bring removed.
  void _onRemoved(int index, Iterable<Key> items) =>
    this._onChanged(new Events.ItemsRemovedEventArgs<Key>(this, index, items));

  /// Handles a key bring pressed.
  void _onKeyDown(Events.EventArgs args) {
    if (!this._pressed && (args is KeyEventArgs)) {
      if (this.contains(args.key)) {
        this._pressed = true;
        this._keyDown?.emit(args);
      }
    }
  }

  /// Handles a key bring released.
  void _onKeyUp(Events.EventArgs args) {
    if (this._pressed && (args is KeyEventArgs)) {
      if (this.contains(args.key)) {
        this._pressed = false;
        this._keyUp?.emit(args);
      }
    }
  }

  /// Attaches this object onto the given [UserInput].
  /// Returns true if this object is attached, false otherwise.
  bool attach(UserInput? input) {
    if (input == null) return false;
    if (this._input != null) return false;
    this._input = input;
    input.key
      ..down.add(this._onKeyDown)
      ..up.add(this._onKeyUp);
    return true;
  }

  /// Detaches this object from it's attached [UserInput].
  void detach() {
    var input = this._input;
    if (input != null) {
      input.key
        ..down.remove(this._onKeyDown)
        ..up.remove(this._onKeyUp);
      this._input = null;
    }
  }
}
