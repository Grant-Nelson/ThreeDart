// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

part of ThreeDart.web.tutorials;

class ShellPage {

  html.DivElement _elem;

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

    this._elem = new html.DivElement();
    pageCenter.append(this._elem);

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

  void addCode(String lang, List<String> code) {
    html.TableElement tblElem = new html.TableElement();
    tblElem.style
      ..border        = "solid 3 black"
      ..paddingLeft   = "20px"
      ..paddingBottom = "10px"
      ..textAlign     = "left"
      ..color         = "#111"
      ..font          = "14px Consolas, Sans-Serif";
    html.TableRowElement rowElem = new html.TableRowElement();
    html.TableCellElement cell1Elem = new html.TableCellElement();
    for (int lineNo = 0; lineNo < code.length; lineNo++) {
      html.DivElement lineElem = new html.DivElement()
        ..text = "${lineNo+1}";
      cell1Elem.append(lineElem);
    }
    rowElem.append(cell1Elem);
    html.TableCellElement cell2Elem = new html.TableCellElement();
    for (String line in code) {
      html.DivElement lineElem = new html.DivElement();
      lineElem.style
        ..paddingLeft = "10px";
      cell2Elem.append(lineElem);
      if (lang == "html") {
        this._parseHtmlLine(line, lineElem);
      } else if (lang == "dart") {
        this._parseDartLine(line, lineElem);
      } else if (lang == "glsl") {
        this._parseGlslLine(line, lineElem);
      } else {
        this._addLinePart(line, "#111", lineElem);
      }
    }
    rowElem.append(cell2Elem);
    tblElem.append(rowElem);
    this._elem.append(tblElem);
  }

  String _escapeText(String text) {
    return text.replaceAll(" ", "&nbsp;");
  }

  void _addLinePart(String part, String color, html.DivElement parent) {
    html.DivElement lineElem = new html.DivElement()
      ..innerHtml = this._escapeText(part);
    lineElem.style
      ..float = "left"
      ..color = color;
    parent.append(lineElem);
  }

  void _parseHtmlLine(String line, html.DivElement parent) {
    this._addLinePart(line, "#911", parent);
  }

  void _parseDartLine(String line, html.DivElement parent) {
    this._addLinePart(line, "#191", parent);
  }

  void _parseGlslLine(String line, html.DivElement parent) {
    this._addLinePart(line, "#119", parent);
  }

  void addImage(String id, String path) {

  }
}
