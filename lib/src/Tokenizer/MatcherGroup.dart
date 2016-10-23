part of ThreeDart.Tokenizer;

/// A group of matchers for matching complicated sets of characters.
class MatcherGroup implements Matcher {
  List<Matcher> _matchers;

  /// Creates a new matcher group.
  MatcherGroup() {
    this._matchers = new List<Matcher>();
  }

  /// Determines if this matcher matches the given character, [c].
  /// If any matcher matches the given character true is returned.
  bool match(int c) {
    for (Matcher matcher in this._matchers) {
      if (matcher.match(c)) return true;
    }
    return false;
  }

  /// Adds a matcher to this group.
  Matcher add(Matcher matcher) {
    this._matchers.add(matcher);
    return matcher;
  }

  /// Adds a character set matcher to this group.
  SetMatcher addSet(String charSet) =>
    this.add(new SetMatcher(charSet));

  /// Adds a range of characters to match to this group.
  RangeMatcher addRange(String lowChar, String highChar) =>
    this.add(new RangeMatcher(lowChar, highChar));

  /// Adds a matcher to match all characters.
  AllMatcher addAll() => this.add(new AllMatcher());

  /// Adds a not matcher group.
  NotMatcher addNot() => this.add(new NotMatcher());

  /// Returns the string for this matcher.
  String toString() {
    String str = "";
    for (Matcher matcher in this._matchers) {
      if (str.isNotEmpty) str += ", ";
      str += matcher.toString();
    }
    return str;
  }
}
