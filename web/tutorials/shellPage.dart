part of ThreeDart.web.tutorials;

class ShellPage {

  convert.HtmlEscape _escape;
  html.DivElement _elem;
  Tokenizer.Tokenizer _parTokenizer;
  Tokenizer.Tokenizer _htmlTokenizer;
  Tokenizer.Tokenizer _dartTokenizer;
  Tokenizer.Tokenizer _glslTokenizer;

  ShellPage([String title = ""]) {
    html.BodyElement body = html.document.body;

    html.DivElement scrollTop = new html.DivElement()
      ..className = "scrollTop";
    body.append(scrollTop);

    html.DivElement scrollPage = new html.DivElement()
      ..className = "scrollPage";
    body.append(scrollPage);

    html.DivElement pageCenter = new html.DivElement()
      ..className = "pageCenter";
    scrollPage.append(pageCenter);

    if (title.isNotEmpty) {
      html.document.title = title;
      html.DivElement titleElem = new html.DivElement()
        ..className = "pageTitle"
        ..text = title;
      pageCenter.append(titleElem);
    }

    this._escape = new convert.HtmlEscape(convert.HtmlEscapeMode.ELEMENT);
    this._elem = new html.DivElement();
    pageCenter.append(this._elem);
    this._htmlTokenizer = null;
    this._dartTokenizer = null;
    this._glslTokenizer = null;

    html.document.onScroll.listen((_) {
    	scrollTop.style.top = "${-0.05*body.scrollTop}px";
    });
  }

  void addHeader(int level, String text, [String id = ""]) {
    if (id.isEmpty) id = Uri.encodeFull(text);
    html.DivElement textHeaderElem = new html.DivElement()
      ..className = "textHeader"
      ..id = id
      ..style.fontSize = "${28 - level*4}px";
    html.AnchorElement anchor = new html.AnchorElement()
      ..href = "#${id}"
      ..text = text;
    textHeaderElem.append(anchor);
    this._elem.append(textHeaderElem);
  }

  void addPar(List<String> text) {
    this._setupParTokenizer();
    html.DivElement parElem = new html.DivElement()
      ..className = "textPar";
    for (Tokenizer.Token token in this._parTokenizer.tokenize(text.join())) {
      switch(token.name) {
        case "Bold":
          html.DivElement textElem = new html.DivElement()
            ..className = "boldPar"
            ..text = token.text;
          parElem.append(textElem);
          break;
        case "Italic":
          html.DivElement textElem = new html.DivElement()
            ..className = "italicPar"
            ..text = token.text;
          parElem.append(textElem);
          break;
        case "Code":
          html.DivElement textElem = new html.DivElement()
            ..className = "codePar"
            ..text = token.text;
          parElem.append(textElem);
          break;
        case "Link":
          if (token.text.contains("|")) {
            List<String> parts = token.text.split("|");
            html.AnchorElement anchor = new html.AnchorElement()
              ..className = "linkPar"
              ..href = parts[1]
              ..text = parts[0];
            parElem.append(anchor);
          } else {
            String id = Uri.encodeFull(token.text);
            html.AnchorElement anchor = new html.AnchorElement()
              ..className = "linkPar"
              ..href = "#${id}"
              ..text = token.text;
            parElem.append(anchor);
          }
          break;
        case "Other":
          html.DivElement textElem = new html.DivElement()
            ..className = "normalPar"
            ..text = token.text;
          parElem.append(textElem);
          break;
      }
    }
    this._elem.append(parElem);
  }

  void addCode(String title, String lang, List<String> lines) {
    List<List<html.DivElement>> lineList = [];
    String code = lines.join("\n");
    if (lang == "html")      this._colorHtml(code, lineList);
    else if (lang == "dart") this._colorDart(code, lineList);
    else if (lang == "glsl") this._colorGlsl(code, lineList);
    else                     this._colorPlain(code, lineList);

    html.DivElement codeTableScroll = new html.DivElement()
      ..className = "codeTableScroll";
    html.TableElement codeTable = new html.TableElement()
      ..className = "codeTable";

    String id = Uri.encodeFull(title);
    html.TableRowElement headerElem = new html.TableRowElement()
      ..className = "headerRow";
    html.TableCellElement headerCellElem = new html.TableCellElement()
      ..className = "headerCell"
      ..colSpan = 2;
    html.DivElement tableHeaderElem = new html.DivElement()
      ..className = "tableHeader"
      ..id = id;
    html.AnchorElement anchor = new html.AnchorElement()
      ..href = "#${id}"
      ..text = title;
    tableHeaderElem.append(anchor);
    headerCellElem.append(tableHeaderElem);
    headerElem.append(headerCellElem);
    codeTable.append(headerElem);

    int lineNo = 0;
    for (List<html.DivElement> line in lineList) {
      html.TableRowElement rowElem = new html.TableRowElement()
        ..className = "codeTableRow";
      html.TableCellElement cell1Elem = new html.TableCellElement()
        ..className = "codeLineNums"
        ..text = "${lineNo+1}";
      rowElem.append(cell1Elem);

      html.TableCellElement cell2Elem = new html.TableCellElement()
        ..className = "codeLineText";
      for (html.DivElement partElem in line) {
        cell2Elem.append(partElem);
      }
      rowElem.append(cell2Elem);
      codeTable.append(rowElem);
      lineNo++;
    }
    codeTableScroll.append(codeTable);
    this._elem.append(codeTableScroll);
  }

  void addImage(String id, String path) {
    // TODO: Implement
  }


  String _escapeText(String text) {
    return this._escape.convert(text).replaceAll(" ", "&nbsp;");
  }

  void _addLineParts(String code, String color, List<List<html.DivElement>> lineList) {
    if (lineList.isEmpty) lineList.add(new List<html.DivElement>());
    List<String> lines = code.split("\n");
    bool first = true;
    for (String line in lines) {
      if (first) first = false;
      else lineList.add(new List<html.DivElement>());
      html.DivElement partElem = new html.DivElement()
        ..className = "codePart"
        ..innerHtml = this._escapeText(line)
        ..style.color = color;
      lineList.last.add(partElem);
    }
  }

  void _colorHtml(String code, List<List<html.DivElement>> lineList) {
    this._setupHtmlTokenizer();
    for (Tokenizer.Token token in this._htmlTokenizer.tokenize(code)) {
      switch(token.name) {
        case "Symbol":   this._addLineParts(token.text, "#616", lineList); break;
        case "String":   this._addLineParts(token.text, "#191", lineList); break;
        case "Id":       this._addLineParts(token.text, "#111", lineList); break;
        case "Attr":
          this._addLineParts(token.text.substring(0, token.text.length-1), "#911", lineList);
          this._addLineParts("=", "#111", lineList);
          break;
        case "Reserved": this._addLineParts(token.text, "#119", lineList); break;
        case "Other":    this._addLineParts(token.text, "#111", lineList); break;
      }
    }
  }

  void _colorDart(String code, List<List<html.DivElement>> lineList) {
    this._setupDartTokenizer();
    for (Tokenizer.Token token in this._dartTokenizer.tokenize(code)) {
      switch(token.name) {
        case "Symbol":     this._addLineParts(token.text, "#616", lineList); break;
        case "String":     this._addLineParts(token.text, "#191", lineList); break;
        case "Id":         this._addLineParts(token.text, "#111", lineList); break;
        case "Whitespace": this._addLineParts(token.text, "#111", lineList); break;
        case "Num":        this._addLineParts(token.text, "#191", lineList); break;
        case "Reserved":   this._addLineParts(token.text, "#119", lineList); break;
        case "Type":       this._addLineParts(token.text, "#419", lineList); break;
        case "Comment":    this._addLineParts(token.text, "#777", lineList); break;
      }
    }
  }

  void _colorGlsl(String code, List<List<html.DivElement>> lineList) {
    this._setupGlslTokenizer();
    for (Tokenizer.Token token in this._glslTokenizer.tokenize(code)) {
      switch(token.name) {
        case "Symbol":     this._addLineParts(token.text, "#611", lineList); break;
        case "Id":         this._addLineParts(token.text, "#111", lineList); break;
        case "Whitespace": this._addLineParts(token.text, "#111", lineList); break;
        case "Num":        this._addLineParts(token.text, "#191", lineList); break;
        case "Reserved":   this._addLineParts(token.text, "#119", lineList); break;
        case "Type":       this._addLineParts(token.text, "#191", lineList); break;
        case "Comment":    this._addLineParts(token.text, "#777", lineList); break;
        case "Preprocess": this._addLineParts(token.text, "#737", lineList); break;
        case "Builtin":    this._addLineParts(token.text, "#411", lineList); break;
      }
    }
  }

  void _colorPlain(String code, List<List<html.DivElement>> lineList) {
    this._addLineParts(code, "#111", lineList);
  }

  void _setupParTokenizer() {
    if (this._parTokenizer != null) return;
    Tokenizer.Tokenizer tok = new Tokenizer.Tokenizer();
    tok.start("Start");
    tok.join("Start", "Bold")
      ..addSet("*")
      ..consume = true;
    tok.join("Bold", "Bold")
      ..addNot().addSet("*");
    tok.join("Bold", "BoldEnd")
      ..addSet("*")
      ..consume = true;
    tok.join("Start", "Italic")
      ..addSet("_")
      ..consume = true;
    tok.join("Italic", "Italic")
      ..addNot().addSet("_");
    tok.join("Italic", "ItalicEnd")
      ..addSet("_")
      ..consume = true;
    tok.join("Start", "Code")
      ..addSet("`")
      ..consume = true;
    tok.join("Code", "Code")
      ..addNot().addSet("`");
    tok.join("Code", "CodeEnd")
      ..addSet("`")
      ..consume = true;
    tok.join("Start", "LinkHead")
      ..addSet("[")
      ..consume = true;
    tok.join("LinkHead", "LinkTail")
      ..addSet("|");
    tok.join("LinkHead", "LinkEnd")
      ..addSet("]")
      ..consume = true;
    tok.join("LinkHead", "LinkHead")
      ..addNot().addSet("|]");
    tok.join("LinkTail", "LinkEnd")
      ..addSet("]")
      ..consume = true;
    tok.join("LinkTail", "LinkTail")
      ..addNot().addSet("|]");
    tok.join("Start", "Other")
      ..addAll();
    tok.join("Other", "Other")
      ..addNot().addSet("*_`[");
    tok.setToken("BoldEnd", "Bold");
    tok.setToken("ItalicEnd", "Italic");
    tok.setToken("CodeEnd", "Code");
    tok.setToken("LinkEnd", "Link");
    tok.setToken("Other", "Other");
    this._parTokenizer = tok;
  }

  void _setupHtmlTokenizer() {
    if (this._htmlTokenizer != null) return;
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
      ..addSet("=");
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
    this._htmlTokenizer = tok;
  }

  void _setupDartTokenizer() {
    if (this._dartTokenizer != null) return;
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
      ..replace("Type", ["double", "dynamic", "false", "int", "List", "Map",
        "null", "num", "Object", "String", "this", "true", "var", "void"])
      ..replace("Reserved", ["abstract", "as", "assert", "async", "await",
        "break", "case", "catch", "class", "continue", "const", "default",
        "deferred", "do", "else", "enum", "export", "extends", "external",
        "factory", "final", "finally", "for", "get", "if", "implements",
        "import", "in", "is", "library", "new", "operator", "part", "rethrow",
        "return", "set", "static", "super", "switch", "sync", "throw", "try",
        "typedef", "with", "while", "yield"]);
    this._dartTokenizer = tok;
  }

  void _setupGlslTokenizer() {
    if (this._glslTokenizer != null) return;
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
    tok.join("Start", "Slash")
      ..addSet("/");
    tok.join("Slash", "Comment")
      ..addSet("/");
    tok.join("Comment", "EndComment")
      ..addSet("\n");
    tok.join("Comment", "Comment")
      ..addNot().addSet("\n");
    tok.join("Start", "Preprocess")
      ..addSet("#");
    tok.join("Preprocess", "Preprocess")
      ..addNot().addSet("\n");
    tok.join("Preprocess", "EndPreprocess")
      ..addSet("\n");
    tok.join("Start", "Whitespace")
      ..addSet(" \n\t");
    tok.join("Whitespace", "Whitespace")
      ..addSet(" \n\t");
    tok.setToken("Int", "Num");
    tok.setToken("Float", "Num");
    tok.setToken("Sym", "Symbol");
    tok.setToken("EndComment", "Comment");
    tok.setToken("EndPreprocess", "Preprocess");
    tok.setToken("Whitespace", "Whitespace");
    tok.setToken("Id", "Id")
      ..replace("Type", [
        "float", "double", "int", "void", "bool", "true", "false",
        "mat2", "mat3", "mat4", "dmat2", "dmat3", "dmat4",
        "mat2x2", "mat2x3", "mat2x4", "dmat2x2", "dmat2x3", "dmat2x4",
        "mat3x2", "mat3x3", "mat3x4", "dmat3x2", "dmat3x3", "dmat3x4",
        "mat4x2", "mat4x3", "mat4x4", "dmat4x2", "dmat4x3", "dmat4x4",
        "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3",
        "bvec4", "dvec2", "dvec3", "dvec4", "uint", "uvec2", "uvec3", "uvec4",
        "sampler1D", "sampler2D", "sampler3D", "samplerCube",
        "sampler1DShadow", "sampler2DShadow", "samplerCubeShadow",
        "sampler1DArray", "sampler2DArray",
        "sampler1DArrayShadow", "sampler2DArrayShadow",
        "isampler1D", "isampler2D", "isampler3D", "isamplerCube",
        "isampler1DArray", "isampler2DArray",
        "usampler1D", "usampler2D", "usampler3D", "usamplerCube",
        "usampler1DArray", "usampler2DArray",
        "sampler2DRect", "sampler2DRectShadow",
        "isampler2DRect", "usampler2DRect",
        "samplerBuffer", "isamplerBuffer", "usamplerBuffer",
        "sampler2DMS", "isampler2DMS", "usampler2DMS",
        "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray",
        "samplerCubeArray", "samplerCubeArrayShadow",
        "isamplerCubeArray", "usamplerCubeArray"])
      ..replace("Reserved", [
        "attribute", "break", "case", "centroid", "const",
        "continue", "default", "discard", "do", "else", "flat", "for",
        "highp", "if", "in", "inout", "invariant", "layout", "lowp",
        "mediump", "noperspective", "out", "patch", "precision", "return",
        "sample", "smooth", "struct", "subroutine", "switch", "uniform",
        "varying", "while"])
      ..replace("Builtin", ["gl_FragColor", "gl_Position"]);
    this._glslTokenizer = tok;
  }
}
