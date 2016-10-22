part of ThreeDart.web.tutorials;

class ShellPage {

  convert.HtmlEscape _escape;
  html.DivElement _elem;
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

  void addHeader(int level, String text) {
    html.DivElement textHeaderElem = new html.DivElement()
      ..className = "textHeader"
      ..text = text
      ..style.fontSize = "${28 - level*4}px";
    this._elem.append(textHeaderElem);
  }

  void addPar(List<String> text) {
    html.DivElement textElem = new html.DivElement()
      ..className = "textPar"
      ..text = text.join();
    this._elem.append(textElem);
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
      ..replace("DOCTYPE", "Reserved")
      ..replace("html", "Reserved")
      ..replace("head", "Reserved")
      ..replace("meta", "Reserved")
      ..replace("link", "Reserved")
      ..replace("title", "Reserved")
      ..replace("body", "Reserved")
      ..replace("script", "Reserved");
    tok.setToken("Attr", "Attr");
    tok.setToken("Other", "Other");
    this._htmlTokenizer = tok;
  }

  void _setupDartTokenizer() {
    if (this._dartTokenizer != null) return;
    Tokenizer.Tokenizer tok = new Tokenizer.Tokenizer();



    this._dartTokenizer = tok;
  }

  void _setupGlslTokenizer() {
    if (this._glslTokenizer != null) return;
    Tokenizer.Tokenizer tok = new Tokenizer.Tokenizer();




    this._glslTokenizer = tok;
  }

  void addCode(String lang, List<String> lines) {
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
    List<Tokenizer.Token> tokens = this._htmlTokenizer.tokenize(code);
    for (Tokenizer.Token token in tokens) {
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
    //this._addLineParts(code, "#191", parent);
  }

  void _colorGlsl(String code, List<List<html.DivElement>> lineList) {
    this._setupGlslTokenizer();
    //this._addLineParts(code, "#119", parent);
  }

  void _colorPlain(String code, List<List<html.DivElement>> lineList) {
    this._addLineParts(code, "#111", lineList);
  }

  void addImage(String id, String path) {

  }
}
