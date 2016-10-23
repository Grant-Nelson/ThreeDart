part of ThreeDart.Tokenizer;

/// A [Matcher] is the interface used by transitions to determine is
/// a character will transition the tokenizer from one state to another.
abstract class Matcher {

  /// Determines if this matcher matches the given character, [c].
  /// It returns true if it is a match and false otherwise.
  bool match(int c);
}
