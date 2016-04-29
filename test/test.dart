// Copyright (c) 2015, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test;

import 'dart:html' as html;

import 'common/common.dart' as common;

void main() {
  html.DivElement elem = new html.DivElement();

  addTest(elem, "test000");
  addTest(elem, "test001");
  addTest(elem, "test002");
  addTest(elem, "test003");
  addTest(elem, "test004");
  addTest(elem, "test005");
  addTest(elem, "test006");
  addTest(elem, "test007");
  addTest(elem, "test008");
  addTest(elem, "test009");
  addTest(elem, "test010");
  addTest(elem, "test011");
  addTest(elem, "test012");
  addTest(elem, "test013");
  addTest(elem, "test014");
  addTest(elem, "test015");
  addTest(elem, "test016");
  addTest(elem, "test017");
  addTest(elem, "test018");
  addTest(elem, "test019");
  addTest(elem, "test020");
  addTest(elem, "test021");
  addTest(elem, "test022");
  addTest(elem, "test023");
  addTest(elem, "test024");

  common.shellPage("3Dart Tests", elem, true, "./resources/SnowTop.png");
}

void addTest(html.Element elem, String testName) {
  html.ImageElement img = new html.ImageElement()
    ..alt = "$testName"
    ..src = "./$testName/test.png";

  html.AnchorElement a = new html.AnchorElement()
    ..href = "./$testName/"
    ..children.add(img);

  html.DivElement innerBox = new html.DivElement()
    ..className = "test-link"
    ..children.add(a);

  html.DivElement outterBox = new html.DivElement()
    ..className = "test-box"
    ..children.add(innerBox);

  elem.children.add(outterBox);
}
