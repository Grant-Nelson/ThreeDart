part of ThreeDart.Tokenizer;

/// A transition is a matcher group which connects two states together.
/// When at one state this transition should be taken to the next if
/// the next character in the input is a match.
class Transition extends MatcherGroup {
  State _target;

  /// Creates a new transition.
  Transition._(State this._target): super();

  /// Gets the state to goto if a character matches this transition.
  State get target => this._target;

  /// Gets the string for this transition.
  String toString() => "${this._target.name}: ${super.toString()}";
}
