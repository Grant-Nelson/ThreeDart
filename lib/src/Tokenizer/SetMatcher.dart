part of ThreeDart.Tokenizer;

/// A matcher which matchs a set of characters.
class SetMatcher implements Matcher {
  Map<int, bool> _set;

  /// Creates a set matcher for all the characters in the given string.
  /// The set must contain at least one character.
  factory SetMatcher(String charSet) {
    return new SetMatcher.fromCodeUnits(charSet.codeUnits);
  }

  /// Creates a set matcher with a given list of code units.
  /// The set must contain at least one character.
  SetMatcher.fromCodeUnits(List<int> charSet) {
    if (charSet.length <= 0)
      throw new Exception("May not create a SetMatcher with zero characters.");
    Map<int, bool> map = new Map<int, bool>();
    for (int char in charSet) map[char] = true;
    this._set = map;
  }

  /// Determines if this matcher matches the given character, [c].
  /// Returns true if the given character is in the set, false otherwise.
  bool match(int c) => this._set.containsKey(c);

  /// Returns the string for this matcher.
  String toString() => new String.fromCharCodes(this._set.keys);
}
