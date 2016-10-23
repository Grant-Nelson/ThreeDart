part of ThreeDart.Tokenizer;

/// A matcher which matches all characters.
/// Since tranitions are called in the order they are added
/// this matcher can be used as an "else" matcher.
class AllMatcher implements Matcher {

  /// Creates a new all character matcher.
  AllMatcher();

  /// Determines if this matcher matches the given character, [c].
  /// In this case it always returns true.
  bool match(int c) => true;

  /// Returns the string for this matcher.
  String toString() => "all";
}
