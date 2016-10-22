part of ThreeDart.web.tutorials;

class ShellPage {

  convert.HtmlEscape _escape;
  html.DivElement _elem;
  Tokenizer.Tokenizer _htmlTokenizer;
  Tokenizer.Tokenizer _dartTokenizer;
  Tokenizer.Tokenizer _glslTokenizer;

  ShellPage([String title = ""]) {
    html.BodyElement body = html.document.body;
    body.style
      ..backgroundColor = "#FFFFFF"
      ..margin  = "40px"
      ..padding = "0";

    html.DivElement scrollTop = new html.DivElement();
    scrollTop.style
      ..position = "fixed"
      ..width    = "100%"
      ..height   = "100%"
      ..left     = "0px"
      ..top      = "0px"
      ..zIndex   = "-1"
      ..backgroundImage  = "url('../resources/SnowTop.png')"
      ..backgroundRepeat = "no-repeat";
    body.append(scrollTop);

    html.DivElement scrollPage = new html.DivElement();
    scrollPage.style
      ..position  = "relative"
      ..textAlign = "center";
    body.append(scrollPage);

    html.DivElement pageCenter = new html.DivElement();
    pageCenter.style
      ..textAlign    = "center"
      ..marginLeft   = "auto"
      ..marginRight  = "auto"
      ..marginTop    = "40px"
      ..marginBottom = "40px"
      ..padding      = "40px"
      ..background   = "rgba(255,255,255,0.8)"
      ..boxShadow    = "3px 3px 4px 2px rgba(0,0,0,0.5)";
    scrollPage.append(pageCenter);

    if (title.isNotEmpty) {
      html.document.title = title;
      html.DivElement titleElem = new html.DivElement();
      titleElem.text = title;
      titleElem.style
        ..textAlign     = "center"
        ..paddingBottom = "40px"
        ..color         = "#222"
        ..textShadow    = "0px 2px 3px #555555"
        ..font          = "30px Tahoma, Helvetica, Arial, Sans-Serif";
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
    html.DivElement textElem = new html.DivElement()
      ..text = text;
    textElem.style
      ..textAlign     = "left"
      ..paddingBottom = "10px"
      ..color         = "#111"
      ..font          = "${28 - level*4}px Tahoma, Helvetica, Arial, Sans-Serif";
    this._elem.append(textElem);
  }

  void addPar(List<String> text) {
    html.DivElement textElem = new html.DivElement()
      ..text = text.join();
    textElem.style
      ..paddingLeft   = "20px"
      ..paddingBottom = "10px"
      ..textAlign     = "left"
      ..color         = "#111"
      ..font          = "14px Tahoma, Helvetica, Arial, Sans-Serif";
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
    html.TableElement tblElem = new html.TableElement();
    tblElem.style
      ..border       = "1px solid #888"
      ..marginLeft   = "20px"
      ..marginBottom = "10px"
      ..textAlign    = "left"
      ..color        = "#111"
      ..font         = "14px Consolas, Sans-Serif";
    html.TableRowElement rowElem = new html.TableRowElement();
    html.TableCellElement cell1Elem = new html.TableCellElement();
    cell1Elem.style
      ..padding         = "5px"
      ..backgroundColor = "#DDD";
    for (int lineNo = 0; lineNo < lines.length; lineNo++) {
      html.DivElement lineElem = new html.DivElement()
        ..text = "${lineNo+1}";
      cell1Elem.append(lineElem);
    }
    rowElem.append(cell1Elem);
    html.TableCellElement cell2Elem = new html.TableCellElement();
    cell2Elem.style
      ..padding         = "5px"
      ..backgroundColor = "#F8F8F8";
    String code = lines.join("\n");
    if (lang == "html")      this._colorHtml(code, cell2Elem);
    else if (lang == "dart") this._colorDart(code, cell2Elem);
    else if (lang == "glsl") this._colorGlsl(code, cell2Elem);
    else                     this._colorPlain(code, cell2Elem);
    rowElem.append(cell2Elem);
    tblElem.append(rowElem);
    this._elem.append(tblElem);
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
        ..innerHtml = this._escapeText(line);
      partElem.style
        ..float = "left"
        ..color = color;
      lineList.last.add(partElem);
    }
  }

  void _addAllLines(html.Element parent, List<List<html.DivElement>> lineList) {
    for (List<html.DivElement> line in lineList) {
      html.DivElement lineElem = new html.DivElement();
      lineElem.style
        ..whiteSpace = "nowrap";
      for (html.DivElement partElem in line) {
        lineElem.append(partElem);
      }
      parent.append(lineElem);
    }
  }

  void _colorHtml(String code, html.Element parent) {
    this._setupHtmlTokenizer();
    List<Tokenizer.Token> tokens = this._htmlTokenizer.tokenize(code);
    for (Tokenizer.Token token in tokens) {
      print(token.toString());
    }
    //this._addLineParts(code, "#911", parent);
  }

  void _colorDart(String code, html.Element parent) {
    this._setupDartTokenizer();
    //this._addLineParts(code, "#191", parent);
  }

  void _colorGlsl(String code, html.Element parent) {
    this._setupGlslTokenizer();
    //this._addLineParts(code, "#119", parent);
  }

  void _colorPlain(String code, html.Element parent) {
    List<List<html.DivElement>> lineList = [];
    this._addLineParts(code, "#111", lineList);
    this._addAllLines(parent, lineList);
  }

  void addImage(String id, String path) {

  }
}
