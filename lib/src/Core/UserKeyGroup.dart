part of ThreeDart.Core;

/// A group of keyboard keys for user interactions.
class UserKeyGroup extends Collection<UserKey> implements UserInteractable, Changable {
  Event _changed;
  UserInput _input;
  bool _pressed;
  Event _keyUp;
  Event _keyDown;

  /// Creates a new user key group.
  UserKeyGroup() {
    this._changed = null;
    this._input   = null;
    this._pressed = false;
    this._keyUp = null;
    this._keyDown = null;
    this.setHandlers(onPreaddHndl:  this._onPreadd,
                     onAddedHndl:   this._onAdded,
                     onRemovedHndl: this._onRemoved);
  }

  /// Emits when the group has changed.
  Event get changed {
    if (this._changed == null) this._changed = new Event();
    return this._changed;
  }

  /// Emits when one of the contained keys is pressed.
  Event get keyUp {
    if (this._keyUp == null) this._keyUp = new Event();
    return this._keyUp;
  }

  /// Emits when one of the contained keys is released.
  Event get keyDown {
    if (this._keyDown == null) this._keyDown = new Event();
    return this._keyDown;
  }

  /// Handles emitting a change.
  void _onChange([EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Indicated if a contained key is pressed.
  bool get pressed => this._pressed;

  /// Foreces the key release signal.
  /// Returns true if released, false if not pressed.
  bool release() {
    if (!this._pressed) return false;
    this._pressed = false;
    this._keyUp?.emit();
    return true;
  }

  /// Handles a key being added to make sure there are no repeats.
  bool _onPreadd(Iterable<UserKey> keys) {
    for(UserKey key in keys) {
      if (this.contains(key)) return false;
    }
    return true;
  }

  /// Handles a new key being added.
  void _onAdded(int index, Iterable<UserKey> items) {
    this._onChange(new ItemsAddedEventArgs<UserKey>(this, index, items));
  }

  /// Handles a key bring removed.
  void _onRemoved(int index, Iterable<UserKey> items) {
    this._onChange(new ItemsRemovedEventArgs<UserKey>(this, index, items));
  }

  /// Handles a key bring pressed.
  void _onKeyDown(EventArgs args) {
    if (!this._pressed && (args is KeyEventArgs)) {
      if (this.contains(args.key)) {
        this._pressed = true;
        this._keyDown?.emit(args);
      }
    }
  }

  /// Handles a key bring released.
  void _onKeyUp(EventArgs args) {
    if (this._pressed && (args is KeyEventArgs)) {
      if (!this.contains(args.key)) {
        this._pressed = false;
        this._keyUp?.emit(args);
      }
    }
  }

  /// Attaches this object onto the given [UserInput].
  /// Returns true if this object is attached, false otherwise.
  bool attach(UserInput input) {
    if (input == null) return false;
    if (this._input != null) return false;
    this._input = input;
    this._input.keyDown.add(this._onKeyDown);
    this._input.keyUp.add(this._onKeyUp);
    return true;
  }

  /// Detaches this object from it's attached [UserInput].
  void detach() {
    if (this._input != null) {
      this._input.keyDown.remove(this._onKeyDown);
      this._input.keyUp.remove(this._onKeyUp);
      this._input = null;
    }
  }
}
