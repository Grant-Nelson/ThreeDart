part of ThreeDart.Tokenizer;

class Token {
  final String name;
  final String text;
  final int index;

  Token._(String this.name, String this.text, int this.index);

  String toString() {
    String txt = this.text.replaceAll("\n", "\\n").replaceAll("\t", "\\t");
    return "$name:$index:\"$txt\"";
  }
}
