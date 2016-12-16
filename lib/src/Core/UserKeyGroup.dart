part of ThreeDart.Core;

class UserKey {
  final int key;
  final bool ctrl;
  final bool alt;
  final bool shift;

  UserKey(int this.key, {bool this.ctrl: false, bool this.alt: false, bool this.shift: false});
}

/// A zoom mover which zooms on an object in response to user input.
class UserKeyGroup extends Collection<UserKey> implements UserInteractable {

  /// Attaches this object onto the given [UserInput].
  /// Returns true if this object is attached, false otherwise.
  bool attach(UserInput input) {

  }

  /// Detaches this object from it's attached [UserInput].
  void detach() {

  }
}
