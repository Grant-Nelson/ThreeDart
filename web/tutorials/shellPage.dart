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
      ..text = text;
    textElem.style
      ..paddingLeft   = "20px"
      ..paddingBottom = "10px"
      ..textAlign     = "left"
      ..color         = "#111"
      ..font          = "14px Tahoma, Helvetica, Arial, Sans-Serif";
    this._elem.append(textElem);
  }

  void addCode(String text) {

  }

  void addImage(String id, String path) {

  }
}
