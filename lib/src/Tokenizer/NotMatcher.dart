part of ThreeDart.Tokenizer;

/// A group of matchers which returns the opposite of the contained group of matchers.
class NotMatcher extends MatcherGroup {

  /// Creates a not matcher group.
  NotMatcher(): super();

  /// Determines if this matcher matches the given character, [c].
  /// Returns the opposite of the matches in the group.
  bool match(int c) => !super.match(c);

  /// Returns the string for this matcher.
  String toString() => "![${super.toString()}]";
}
