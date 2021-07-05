part of ThreeDart.Input;

/// The modifiers on the keyboard.
class Modifiers {

  /// Indicates the control or meta key pressed.
  final bool ctrl;

  /// Indicates the alt key pressed.
  final bool alt;

  /// Indicates the shift key pressed.
  final bool shift;

  /// Creates a new modifier's group.
  Modifiers(this.ctrl, this.alt, this.shift);

  /// Creates a new modifier with nothing set yet.
  factory Modifiers.none() => new Modifiers(false, false, false);

  /// Creates a new control or meta key pressed modifier.
  factory Modifiers.ctrlKey() => new Modifiers(true, false, false);

  /// Creates a new alt key pressed modifier.
  factory Modifiers.altKey() => new Modifiers(false, true, false);

  /// Creates a new shirt key pressed modifier.
  factory Modifiers.shiftKey() => new Modifiers(false, false, true);

  /// Checks the equality of these modifiers to the given object.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Modifiers) return false;
    if (this.ctrl  != other.ctrl)  return false;
    if (this.alt   != other.alt)   return false;
    if (this.shift != other.shift) return false;
    return true;
  }

  /// Gets the string for the the modifiers.
  /// Will be an empty string if no modifiers are true.
  String toString() {
    var parts = [];
    if (this.ctrl)  parts.add('Ctrl');
    if (this.alt)   parts.add('Alt');
    if (this.shift) parts.add('Shift');
    return parts.join('+');
  }
}
