part of ThreeDart.Tokenizer;

/// A state in the tokenizer used as a character
/// point in the tokenizer state machine.
class State {
  Tokenizer _tokenizer;
  String _name;
  List<Transition> _trans;
  TokenState _token;

  /// Creates a new state for this given tokenizer.
  State._(Tokenizer this._tokenizer, String this._name) {
    this._trans = new List<Transition>();
    this._token = null;
  }

  /// Gets the name of the state.
  String get name => this._name;

  /// Gets the acceptance token for this state if this state
  /// accepts the input at this point.
  /// If this isn't an accepting state thie will return null.
  TokenState get token => this._token;

  /// Sets the acceptance token for this state to the token with
  /// the given [tokenName]. If no token by that name exists it
  /// will be created. The new token is returned.
  TokenState setToken(String tokenName) {
    this._token = this._tokenizer.token(tokenName);
    return this._token;
  }

  /// Joins this state to another state by the given [endStateName]
  /// with a new transition. If a trasnition already exists between
  /// these two states that transition is returned,
  /// otherise the new transition is returned.
  Transition join(String endStateName) {
    for (Transition trans in this._trans) {
      if (trans.target.name == endStateName) return trans;
    }
    State target = this._tokenizer.state(endStateName);
    Transition trans = new Transition._(target);
    this._trans.add(trans);
    return trans;
  }

  /// Finds the next state given a character. This will search the transitions
  /// to find a transition which matches this character then returns the
  /// target of that transition.
  /// If no transition matches a null state is returned.
  State findNext(int c) {
    for (Transition trans in this._trans) {
      if (trans.match(c)) return trans.target;
    }
    return null;
  }

  /// Gets the name for this state.
  String toString() => this._name;
}
