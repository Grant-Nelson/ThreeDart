part of ThreeDart.Tokenizer;

class TokenState {
  Tokenizer _tokenizer;
  String _name;
  Map<String, String> _replace;

  TokenState._(Tokenizer this._tokenizer, String this._name) {
    this._replace = new Map<String, String>();
  }

  void replace(String text, String tokenName) {
    this._replace[text] = tokenName;
  }

  Token getToken(String text, int index) {
    return new Token._(this._replace[text]??this._name, text, index);
  }
}
