part of ThreeDart.Tokenizer;

class State {
  Tokenizer _tokenizer;
  String _name;
  List<Transition> _trans;
  TokenState _token;

  State._(Tokenizer this._tokenizer, String this._name) {
    this._trans = new List<Transition>();
    this._token = null;
  }

  String get name => this._name;
  TokenState get token => this._token;

  void setToken(String tokenName) {
    this._token = this._tokenizer.token(tokenName);
  }

  Transition join(String endStateName) {
    for (Transition trans in this._trans) {
      if (trans.end.name == endStateName) return trans;
    }
    State end = this._tokenizer.state(endStateName);
    Transition trans = new Transition._(this, end);
    this._trans.add(trans);
    return trans;
  }

  State findNext(int c) {
    for (Transition trans in this._trans) {
      if (trans.match(c)) return trans.end;
    }
    return null;
  }

  String toString() {
    return this._name;
  }
}
