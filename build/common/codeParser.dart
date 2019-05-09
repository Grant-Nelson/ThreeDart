part of ThreeDart.web.common;

/// An abstract class for parsing code into colored lines of code.
abstract class CodeParser {
  String _name;
  convert.HtmlEscape _escape;
  Tokenizer.Tokenizer _tokenizer;
  List<List<html.DivElement>> _lineList;

  /// Constructs a new code parser.
  /// The lowercase [name] of the type of code to parse, e.g. html, dart, or glsl
  CodeParser._(String this._name) {
    this._escape = new convert.HtmlEscape(convert.HtmlEscapeMode.element);
    this._tokenizer = null;
    this._lineList = [];
  }

  /// The name of type of code this parser can parse.
  String get name => this._name;

  /// The parsed and colored code grouped by lines.
  List<List<html.DivElement>> get lineList => _lineList;

  /// Escapes the given [text] for html.
  String _escapeText(String text) {
    return this._escape.convert(text).replaceAll(" ", "&nbsp;");
  }

  /// Adds line parts to the list of code lines, the [lineList].
  /// The given [code] to add as lines in the given [color].
  void addLineParts(String code, String color) {
    if (this._lineList.isEmpty) this._lineList.add(new List<html.DivElement>());
    List<String> lines = code.split("\n");
    bool first = true;
    for (String line in lines) {
      if (first) first = false;
      else this._lineList.add(new List<html.DivElement>());
      html.DivElement partElem = new html.DivElement()
        ..className = "codePart"
        ..innerHtml = this._escapeText(line)
        ..style.color = color;
      this._lineList.last.add(partElem);
    }
  }

  /// Parses the given lines into colored code.
  /// This clears the previously parsed lines.
  void parse(List<String> lines) {
    this._lineList = [];
    String code = lines.join("\n");
    this._tokenizer ??= this.createTokenizer();
    for (Tokenizer.Token token in this._tokenizer.tokenize(code)) {
      this.processToken(token);
    }
  }

  /// Processes a token during a parse.
  /// This needs to be implemented by the inheriting class.
  void processToken(Tokenizer.Token token);

  /// Creates the tokenizer to parse the code with.
  /// This needs to be implemented by the inheriting class.
  Tokenizer.Tokenizer createTokenizer();
}
