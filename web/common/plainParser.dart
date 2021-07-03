part of ThreeDart.web.common;

/// A parser for coloring plain code.
class PlainParser extends CodeParser {

  /// Creates a new plain parser.
  PlainParser(): super._("plain");

  /// Adds color for the given plain code.
  void parse(List<String> lines) {
    this._lineList = [];
    String code = lines.join("\n");
    this.addLineParts(code, "#111");
  }

  /// Implmented but has no effect for the plain parser.
  void processToken(Tokenizer.Token token) {
    // Do Nothing
  }

  /// Implmented but has no effect for the plain parser.
  Tokenizer.Tokenizer? createTokenizer() {
    // Do Nothing
    return null;
  }
}
