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

  factory Modifiers.none() => new Modifiers(false, false, false);

  /// Checks the equality of these modifiers to the given object.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Modifiers) return false;
    Modifiers mods = other as Modifiers;
    if (this.ctrl  != mods.ctrl)  return false;
    if (this.alt   != mods.alt)   return false;
    if (this.shift != mods.shift) return false;
    return true;
  }

  /// Gets the string for the the modifiers.
  /// Will be an empty string if no modifiers are true.
  String toString() =>
    "${this.ctrl?"Ctrl+":""}"+
    "${this.alt?"Alt+":""}"+
    "${this.shift?"Shift+":""}";
}