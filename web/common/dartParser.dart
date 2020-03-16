part of ThreeDart.web.common;

/// A parser for coloring Dart code.
class DartParser extends CodeParser {

  /// Creates a new Dart parser.
  DartParser(): super._("dart");

  /// Parses Dart code.
  void processToken(Tokenizer.Token token) {
    switch(token.name) {
      case "Class":      this.addLineParts(token.text, "#551"); break;
      case "Comment":    this.addLineParts(token.text, "#777"); break;
      case "Id":         this.addLineParts(token.text, "#111"); break;
      case "Num":        this.addLineParts(token.text, "#191"); break;
      case "Reserved":   this.addLineParts(token.text, "#119"); break;
      case "String":     this.addLineParts(token.text, "#171"); break;
      case "Symbol":     this.addLineParts(token.text, "#616"); break;
      case "Type":       this.addLineParts(token.text, "#B11"); break;
      case "Whitespace": this.addLineParts(token.text, "#111"); break;
    }
  }

  /// Constructs the Dart code tokenizer.
  /// The Dart code tokenizer breaks up code to
  /// label tokens to color the code appropriately.
  Tokenizer.Tokenizer createTokenizer() {
    Tokenizer.Tokenizer tok = new Tokenizer.Tokenizer();
    tok.start("Start");
    tok.join("Start", "Id")
      ..addSet("_")
      ..addRange("a", "z")
      ..addRange("A", "Z");
    tok.join("Id", "Id")
      ..addSet("_")
      ..addRange("0", "9")
      ..addRange("a", "z")
      ..addRange("A", "Z");
    tok.join("Start", "Int")
      ..addRange("0", "9");
    tok.join("Int", "Int")
      ..addRange("0", "9");
    tok.join("Int", "FloatDot")
      ..addSet(".");
    tok.join("FloatDot", "Float")
      ..addRange("0", "9");
    tok.join("Float", "Float")
      ..addRange("0", "9");
    tok.join("Start", "Sym")
      ..addSet("<>{}()\\-+*%!&|=.,?:;");
    tok.join("Sym", "Sym")
      ..addSet("<>{}()\\-+*%!&|=.,?:;");
    tok.join("Start", "OpenDoubleStr")
      ..addSet("\"");
    tok.join("OpenDoubleStr", "CloseDoubleStr")
      ..addSet("\"");
    tok.join("OpenDoubleStr", "EscDoubleStr")
      ..addSet("\\");
    tok.join("EscDoubleStr", "OpenDoubleStr")
      ..addSet("\"");
    tok.join("OpenDoubleStr", "OpenDoubleStr")
      ..addAll();
    tok.join("Start", "OpenSingleStr")
      ..addSet("'");
    tok.join("OpenSingleStr", "CloseSingleStr")
      ..addSet("'");
    tok.join("OpenSingleStr", "EscSingleStr")
      ..addSet("\\");
    tok.join("EscSingleStr", "OpenSingleStr")
      ..addSet("'");
    tok.join("OpenSingleStr", "OpenSingleStr")
      ..addAll();
    tok.join("Start", "Slash")
      ..addSet("/");
    tok.join("Slash", "Comment")
      ..addSet("/");
    tok.join("Comment", "EndComment")
      ..addSet("\n");
    tok.join("Comment", "Comment")
      ..addNot().addSet("\n");
    tok.join("Slash", "MLComment")
      ..addSet("*");
    tok.join("MLComment", "MLCStar")
      ..addSet("*");
    tok.join("MLCStar", "MLComment")
      ..addNot().addSet("*");
    tok.join("MLCStar", "EndComment")
      ..addSet("/");
    tok.join("Start", "Whitespace")
      ..addSet(" \n\t");
    tok.join("Whitespace", "Whitespace")
      ..addSet(" \n\t");
    tok.setToken("Int", "Num");
    tok.setToken("Float", "Num");
    tok.setToken("Sym", "Symbol");
    tok.setToken("CloseDoubleStr", "String");
    tok.setToken("CloseSingleStr", "String");
    tok.setToken("EndComment", "Comment");
    tok.setToken("Whitespace", "Whitespace");
    tok.setToken("Id", "Id")
      ..replace("Class", ["Constant", "Depth", "Entity",
        "EntityPass", "Math", "Matrix4", "Movers", "Rotator",
        "Scenes", "Shapes", "Techniques", "ThreeDart"])
      ..replace("Type", ["bool", "double", "dynamic", "false", "int",
        "List", "Map", "null", "num", "Object", "String", "this",
        "true", "var", "void"])
      ..replace("Reserved", ["abstract", "as", "assert", "async", "await",
        "break", "case", "catch", "class", "continue", "const", "default",
        "deferred", "do", "else", "enum", "export", "extends", "external",
        "factory", "final", "finally", "for", "get", "if", "implements",
        "import", "in", "is", "library", "new", "operator", "part", "rethrow",
        "return", "set", "static", "super", "switch", "sync", "throw", "try",
        "typedef", "with", "while", "yield"]);
    return tok;
  }
}
