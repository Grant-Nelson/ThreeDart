part of ThreeDart.web.common;

/// The shell page is a tool for creating pages quickly and
/// easily which will have a consistent look and feel.
class ShellPage {
  html.DivElement _page;
  Tokenizer.Tokenizer _parTokenizer;

  /// Creates a new shell page with an optional [title].
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

    this._page = new html.DivElement();
    pageCenter.append(this._page);
    this._parTokenizer = null;

    html.document.onScroll.listen((_) {
    	scrollTop.style.top = "${-0.05*body.scrollTop}px";
    });
  }

  /// The page element to append new data to.
  html.DivElement get page => this._page;

  /// Adds a section header with the give [text] into the page.
  /// The [level] defines its weight where it is 0, largest to 4, smallest.
  /// The optional [id] is a custom link identifier for this header,
  /// if left blank the id will be auto-generated.
  void addHeader(int level, String text, [String id = ""]) {
    level = level.clamp(0, 4);
    if (id.isEmpty) id = Uri.encodeFull(text);
    html.DivElement textHeaderElem = new html.DivElement()
      ..className = "textHeader"
      ..id = id
      ..style.fontSize = "${28 - level*3}px";
    html.AnchorElement anchor = new html.AnchorElement()
      ..href = "#${id}"
      ..text = text;
    textHeaderElem.append(anchor);
    this._page.append(textHeaderElem);
  }

  /// Adds a paragraph to the page. The body of the paragraph
  /// can be split across several lines as several entries into the list.
  /// If the text is wrapped by asterisks the text will be bolded.
  /// If the text is wrapped by underscores the text will be italic.
  /// If the text is wrapped by back ticks the text will be syled like code.
  /// If the text has square brackets around the text it will be a link.
  /// The link can have a custom location after a vertical bar.
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
    this._page.append(parElem);
  }

  /// Gets the code parser for the given [lang].
  CodeParser getCodeParser(String lang) {
    // Full list of parsers, add more as needed.
    List<CodeParser> parsers = [
      new DartParser(),
      new GLSLParser(),
      new HTMLParser()
    ];

    CodeParser parser = parsers.firstWhere((CodeParser parser) => parser.name == lang);
    if (parser != null) return parser;
    return new PlainParser();
  }

  /// Adds a code box with the given [title] to the page.
  /// The given [lang] is the language to color the code with.
  /// Currently it supports HTML, Dart, GLSL, and other.
  /// The [lines] are the lines of the code for the box.
  /// If any line starts with a + or - then a diff is shown.
  /// The [firstLineNo] is the offset for the first line number.
  void addCode(String title, String lang, int firstLineNo, List<String> lines) {
    List<int> diff = [];
    bool showDiff = false;
    for (int i = 0; i < lines.length; ++i) {
      String line = lines[i];
      if (line.startsWith("+")) {
        lines[i] = line.substring(1);
        diff.add(1);
        showDiff = true;
      } else if (line.startsWith("-")) {
        lines[i] = line.substring(1);
        diff.add(-1);
        showDiff = true;
      } else diff.add(0);
    }

    CodeParser colorCode = this.getCodeParser(lang);
    colorCode.parse(lines);

    html.DivElement codeTableScroll = new html.DivElement()
      ..className = "codeTableScroll";
    html.TableElement codeTable = new html.TableElement()
      ..className = "codeTable";
    codeTableScroll.append(codeTable);
    this._page.append(codeTableScroll);

    String id = Uri.encodeFull(title);
    html.TableRowElement headerElem = new html.TableRowElement()
      ..className = "headerRow";
    html.TableCellElement headerCellElem = new html.TableCellElement()
      ..className = "headerCell"
      ..colSpan = showDiff? 3: 2;
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

    if (showDiff) {
      int lineNoSub = firstLineNo, lineNoAdd = firstLineNo;
      for (int i = 0; i < colorCode.lineList.length; ++i) {
        List<html.DivElement> line = colorCode.lineList[i];
        html.TableRowElement rowElem = new html.TableRowElement()
          ..className = "codeTableRow";
        html.TableCellElement cell1Elem = new html.TableCellElement()
          ..className = "codeLineNums codeLineLight";
        html.TableCellElement cell2Elem = new html.TableCellElement()
          ..className = "codeLineNums";

        int value = diff[i];
        if (value == 0) {
          lineNoSub++;
          lineNoAdd++;
          cell1Elem.text = "$lineNoSub";
          cell2Elem.text = "$lineNoAdd";
        } else if (value > 0) {
          rowElem.className = "codeTableRow codeLineLightGreen";
          cell1Elem.className = "codeLineNums codeLineGreen codeLineCenter";
          cell2Elem.className = "codeLineNums codeLineGreen";
          lineNoAdd++;
          cell1Elem.text = "+";
          cell2Elem.text = "$lineNoAdd";
        } else if (value < 0) {
          rowElem.className = "codeTableRow codeLineLightRed";
          cell1Elem.className = "codeLineNums codeLineRed";
          cell2Elem.className = "codeLineNums codeLineRed codeLineCenter";
          lineNoSub++;
          cell1Elem.text = "$lineNoSub";
          cell2Elem.text = "-";
        }

        html.TableCellElement cell3Elem = new html.TableCellElement()
          ..className = "codeLineText";
        for (html.DivElement partElem in line) {
          cell3Elem.append(partElem);
        }
        rowElem.append(cell1Elem);
        rowElem.append(cell2Elem);
        rowElem.append(cell3Elem);
        codeTable.append(rowElem);
      }
    } else {
      int lineNo = firstLineNo;
      for (List<html.DivElement> line in colorCode.lineList) {
        html.TableRowElement rowElem = new html.TableRowElement()
          ..className = "codeTableRow";
        html.TableCellElement cell1Elem = new html.TableCellElement()
          ..className = "codeLineNums"
          ..text = "${lineNo+1}";

        html.TableCellElement cell2Elem = new html.TableCellElement()
          ..className = "codeLineText";
        for (html.DivElement partElem in line) {
          cell2Elem.append(partElem);
        }
        rowElem.append(cell1Elem);
        rowElem.append(cell2Elem);
        codeTable.append(rowElem);
        lineNo++;
      }
    }
  }

  /// Adds an image to the page with the given [id].
  void addImage(String id, String path) {
    html.DivElement pageImageElem = new html.DivElement()
      ..className = "pageImage"
      ..id = id;
    html.AnchorElement anchor = new html.AnchorElement()
      ..href = "#${id}";
    html.ImageElement image = new html.ImageElement()
      ..src = path;
    anchor.append(image);
    pageImageElem.append(anchor);
    this._page.append(pageImageElem);
  }

  /// Adds a canvas to the page with the given [id]
  /// which can be used to host a ThreeDart
  void addCanvas(String id) {
    html.CanvasElement canvas = new html.CanvasElement()
      ..className = "pageCanvas"
      ..id = id;
    this._page.append(canvas);
  }

  /// Constructs the paragraph tokenizer if the tokenizer hasn't been setup yet.
  /// The paragraph tokenizer breaks up a paragraph to label tokens for
  /// bold, italic, code, links, and normal.
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
}
