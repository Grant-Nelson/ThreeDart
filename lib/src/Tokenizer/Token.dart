part of ThreeDart.Tokenizer;

/// A token contains the text and information from a tokenizer.
class Token {

  /// The name of the token type.
  final String name;

  /// The text for this token.
  final String text;

  /// The index offset from the start of the input string.
  final int index;

  /// Creates a new token.
  Token(String this.name, String this.text, int this.index);

  /// Gets the string for this token.
  String toString() {
    String txt = this.text.replaceAll("\n", "\\n").replaceAll("\t", "\\t");
    return "$name:$index:\"$txt\"";
  }
}
