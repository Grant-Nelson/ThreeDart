// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.Tokenizer;

part 'AllMatcher.dart';
part 'Matcher.dart';
part 'MatcherGroup.dart';
part 'NotMatcher.dart';
part 'RangeMatcher.dart';
part 'SetMatcher.dart';
part 'State.dart';
part 'Token.dart';
part 'TokenState.dart';
part 'Transition.dart';

/// A tokenizer for breaking a string into tokens.
class Tokenizer {
  Map<String, State> _states;
  Map<String, TokenState> _token;
  State _start;

  /// Creates a new tokenizer.
  Tokenizer() {
    this._states = new Map<String, State>();
    this._token = new Map<String, TokenState>();
    this._start = null;
  }

  /// Sets the start state for the tokenizer to a state with the name [stateName].
  /// If that state doesn't exist it will be created.
  State start(String stateName) {
    this._start = this.state(stateName);
    return this._start;
  }

  /// Creates and adds a state by the given name [stateName].
  /// If a state aleady exists it is returned,
  /// otherwise the new state is returned.
  State state(String stateName) {
    State state = this._states[stateName];
    if (state == null) {
      state = new State._(this, stateName);
      this._states[stateName] = state;
    }
    return state;
  }

  /// Creates and add an acceptance token with the given name [tokenName].
  /// A new acceptance token is not connected to any state.
  /// If a token by that name already exists it will be returned,
  /// otherwise the new token is returned.
  TokenState token(String tokenName) {
    TokenState token = this._token[tokenName];
    if (token == null) {
      token = new TokenState._(this, tokenName);
      this._token[tokenName] = token;
    }
    return token;
  }

  /// Joins the two given states and returns the new or
  /// already existing transition.
  Transition join(String startStateName, String endStateName) =>
    this.state(startStateName).join(endStateName);

  /// Sets the token for the given state and returns the acceptance token.
  TokenState setToken(String stateName, String tokenName) =>
    this.state(stateName).setToken(tokenName);

  /// Tokenizes the given input string with the current configured
  /// tokenizer and returns the list of tokens for the input.
  /// This will throw an exception if the input is not tokenizable.
  List<Token> tokenize(String input) {
    List<Token> tokens = new List<Token>();
    List<int> chars = input.codeUnits;
    Token lastToken = null;
    State state = this._start;
    int index = 0;
    List<int> prevText = [];
    while(true) {

      // Check for the end condition and add any left over tokens.
      if (index >= chars.length) {
        if (lastToken != null) tokens.add(lastToken);
        return tokens;
      }

      // Transition to the next state with the current character.
      int c = chars[index];
      prevText.add(c);
      State next = state.findNext(c);
      if (next == null) {
        // No transition found.
        if (lastToken == null) {
          // No previous found token state, therefore this part
          // of the input isn't tokenizable with this tokenizer.
          String text = new String.fromCharCodes(prevText);
          throw new Exception("Untokenizable string [state: ${state.name}, index $index]: $text");
        }

        // Reset to previous found token's state.
        tokens.add(lastToken);
        index = lastToken.index+1;
        lastToken = null;
        prevText = [];
        state = this._start;
      } else {
        // Transition to the next state and check if it is an acceptance state.
        // Store acceptance state to return to if needed.
        state = next;
        if (state.token != null) {
          String text = new String.fromCharCodes(prevText);
          lastToken = state.token.getToken(text, index);
        }
        index++;
      }
    }
  }
}
