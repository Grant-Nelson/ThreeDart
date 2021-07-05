part of ThreeDart.web.common;

/// A parser for coloring HTML code.
class HTMLParser extends CodeParser {

  /// Creates a new HTML parser.
  HTMLParser(): super._("html");

  /// Parses HTML code.
  void processToken(Tokenizer.Token token) {
    switch(token.name) {
      case "Attr":
        this.addLineParts(token.text, "#911");
        this.addLineParts("=", "#111");
        break;
      case "Id":       this.addLineParts(token.text, "#111"); break;
      case "Other":    this.addLineParts(token.text, "#111"); break;
      case "Reserved": this.addLineParts(token.text, "#119"); break;
      case "String":   this.addLineParts(token.text, "#171"); break;
      case "Symbol":   this.addLineParts(token.text, "#616"); break;
    }
  }

  /// Constructs the HTML code tokenizer.
  /// The HTML code tokenizer breaks up code to
  /// label tokens to color the code appropriately.
  Tokenizer.Tokenizer? createTokenizer() {
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
    tok.join("Id", "Attr")
      ..addSet("=")
      ..consume = true;
    tok.join("Start", "Sym")
      ..addSet("</\\-!>=");
    tok.join("Sym", "Sym")
      ..addSet("</\\-!>=");
    tok.join("Start", "OpenStr")
      ..addSet("\"");
    tok.join("OpenStr", "CloseStr")
      ..addSet("\"");
    tok.join("OpenStr", "EscStr")
      ..addSet("\\");
    tok.join("EscStr", "OpenStr")
      ..addSet("\"");
    tok.join("OpenStr", "OpenStr")
      ..addAll();
    tok.join("Start", "Other")
      ..addAll();
    tok.join("Other", "Other").addNot()
      ..addSet("</\\-!>=_\"")
      ..addRange("a", "z")
      ..addRange("A", "Z");
    tok.setToken("Sym", "Symbol");
    tok.setToken("CloseStr", "String");
    tok.setToken("Id", "Id")
      ..replace("Reserved", ["DOCTYPE", "html", "head", "meta",
                             "link", "title", "body", "script"]);
    tok.setToken("Attr", "Attr");
    tok.setToken("Other", "Other");
    return tok;
  }
}
