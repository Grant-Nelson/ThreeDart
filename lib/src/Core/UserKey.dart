part of ThreeDart.Core;

/// A keyboard key press or release value with modifiers.
class UserKey {
  static const int backspace    = 8;
  static const int tab          = 9;
  static const int enter        = 13;
  static const int spacebar     = 32;
  static const int leftArrow    = 37;
  static const int upArrow      = 38;
  static const int rightArrow   = 39;
  static const int downArrow    = 40;
  static const int backSlash    = 120;
  static const int semicolon    = 186;
  static const int equal        = 187;
  static const int comma        = 188;
  static const int minus        = 189;
  static const int period       = 190;
  static const int slash        = 191;
  static const int backQuote    = 192;
  static const int bracketLeft  = 219;
  static const int bracketRight = 221;
  static const int quote        = 222;

  static const int keyF1  = 112;
  static const int keyF2  = 113;
  static const int keyF3  = 114;
  static const int keyF4  = 115;
  static const int keyF5  = 116;
  static const int keyF6  = 117;
  static const int keyF7  = 118;
  static const int keyF8  = 119;
  static const int keyF9  = 120;
  static const int keyF10 = 121;
  static const int keyF11 = 122;
  static const int keyF12 = 123;

  static const int keyA = 65;
  static const int keyB = 66;
  static const int keyC = 67;
  static const int keyD = 68;
  static const int keyE = 69;
  static const int keyF = 70;
  static const int keyG = 71;
  static const int keyH = 72;
  static const int keyI = 73;
  static const int keyJ = 74;
  static const int keyK = 75;
  static const int keyL = 76;
  static const int keyM = 77;
  static const int keyN = 78;
  static const int keyO = 79;
  static const int keyP = 80;
  static const int keyQ = 81;
  static const int keyR = 82;
  static const int keyS = 83;
  static const int keyT = 84;
  static const int keyU = 85;
  static const int keyV = 86;
  static const int keyW = 87;
  static const int keyX = 88;
  static const int keyY = 89;
  static const int keyZ = 90;

  static const int key0 = 48;
  static const int key1 = 49;
  static const int key2 = 50;
  static const int key3 = 51;
  static const int key4 = 52;
  static const int key5 = 53;
  static const int key6 = 54;
  static const int key7 = 55;
  static const int key8 = 56;
  static const int key9 = 57;

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
