// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.Tokenizer;

part 'Matchers.dart';
part 'State.dart';
part 'Token.dart';
part 'TokenState.dart';
part 'Transition.dart';

class Tokenizer {
  Map<String, State> _states;
  Map<String, TokenState> _token;
  State _start;

  Tokenizer() {
    this._states = new Map<String, State>();
    this._token = new Map<String, TokenState>();
    this._start = null;
  }

  State start(String stateName) {
    State start = this.state(stateName);
    this._start = start;
    return this._start;
  }

  State state(String stateName) {
    State state = this._states[stateName];
    if (state == null) {
      state = new State._(this, stateName);
      this._states[stateName] = state;
    }
    return state;
  }

  TokenState token(String tokenName) {
    TokenState token = this._token[tokenName];
    if (token == null) {
      token = new TokenState._(this, tokenName);
      this._token[tokenName] = token;
    }
    return token;
  }

  List<Token> tokenize(String input) {
    List<Token> tokens = new List<Token>();
    List<int> chars = input.codeUnits;
    Token lastToken = null;
    State state = this._start;
    int index = 0;
    List<int> prevText = [];
    while(true) {
      if (index >= chars.length) {
        if (lastToken != null) tokens.add(lastToken);
        break;
      }
      int c = chars[index];
      prevText.add(c);

      State next = state.findNext(c);
      if (next == null) {
        if (lastToken == null) {
          String text = new String.fromCharCodes(prevText);
          throw new Exception("Untokenizable string [state: ${state.name}, index $index]: $text");
        }

        tokens.add(lastToken);
        index = lastToken.index+1;
        lastToken = null;
        prevText = [];
        state = this._start;
        continue;
      }

      state = next;
      if (state.token != null) {
        String text = new String.fromCharCodes(prevText);
        lastToken = state.token.getToken(text, index);
      }
      index++;
    }

    return tokens;
  }
}
