part of ThreeDart.Core;

/// A keyboard key press or release value with modifiers.
class UserKey {

  /// The key code for the pressed or released value.
  final int key;

  /// The control key modifier.
  final bool ctrl;

  /// The alternate key modifier.
  final bool alt;

  /// The shift key modifier.
  final bool shift;

  /// Creates a new key.
  UserKey(int this.key, {bool this.ctrl: false, bool this.alt: false, bool this.shift: false});

  /// Checks the equality of this key to the given object.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! UserKey) return false;
    UserKey key = other as UserKey;
    if (this.key   != key.key)   return false;
    if (this.ctrl  != key.ctrl)  return false;
    if (this.alt   != key.alt)   return false;
    if (this.shift != key.shift) return false;
    return true;
  }

  /// The string for this key.
  String toString() =>
    '${this.ctrl?"Ctrl+":""}${this.alt?"Alt+":""}'+
    '${this.shift?"Shift+":""}${this.key}';
}
