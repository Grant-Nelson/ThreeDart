part of ThreeDart.Tokenizer;

/// Creates a range matcher.
class RangeMatcher implements Matcher {
  int _low;
  int _high;

  /// Creates a new range matcher for the given inclusive range.
  /// The given strings may only contain one character.
  factory RangeMatcher(String lowChar, String highChar) {
    if ((lowChar.length != 1) || (highChar.length != 1))
      throw new Exception("The given low and high character strings for a RangeMatcher must have one and only one characters.");
    int low  = lowChar.codeUnitAt(0);
    int high = highChar.codeUnitAt(0);
    return new RangeMatcher.fromCodeUnits(low, high);
  }

  /// Creates a new range matcher for the given inclusive range.
  /// The given values are the code units for the characters.
  RangeMatcher.fromCodeUnits(int low, int high) {
    if (low > high) {
      int temp = low;
      low = high;
      high = temp;
    }
    this._low = low;
    this._high = high;
  }

  /// Determines if this matcher matches the given character, [c].
  /// Returns true if the caracter is inclusively in the given range, false otherwise.
  bool match(int c) => (this._low <= c) && (this._high >= c);

  /// Returns the string for this matcher.
  String toString() {
    String low = new String.fromCharCode(this._low);
    String high = new String.fromCharCode(this._high);
    return "$low..$high";
  }
}
