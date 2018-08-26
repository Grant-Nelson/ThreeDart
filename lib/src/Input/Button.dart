part of ThreeDart.Input;

/// A mouse button press or release value with modifiers.
class Button {
  static const int none   = 0;
  static const int left   = 1;
  static const int right  = 2;
  static const int middle = 4;
  static const int fourth = 8;
  static const int fifth  = 16;

  /// The mouse button code for the pressed or released value.
  final int code;

  /// Determines if the given code exists in this button code.
  bool has(int code) => this.code & code == code;

  /// The key modifiers.
  final Modifiers modifiers;
  
  /// The control key modifier.
  bool get ctrl => this.modifiers.ctrl;

  /// The alternate key modifier.
  bool get alt => this.modifiers.alt;

  /// The shift key modifier.
  bool get shift => this.modifiers.shift;

  /// Creates a new mouse button.
  factory Button(int code, {bool ctrl: false, bool alt: false, bool shift: false}) =>
    new Button.fromMod(code, new Modifiers(ctrl, alt, shift));

  /// Creates a new mouse button with the given modifiers.
  Button.fromMod(int this.code, Modifiers this.modifiers);

  /// Checks the equality of this mouse button to the given object.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Button) return false;
    Button key = other as Button;
    if (this.code      != key.code)  return false;
    if (this.modifiers != key.modifiers)  return false;
    return true;
  }

  /// The string for this mouse button.
  String toString() =>"${this.modifiers}${this.code}";
}
