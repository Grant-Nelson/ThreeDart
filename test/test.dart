// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.tests;

import 'dart:html' as html;

import 'common/common.dart' as common;

void main() {
  html.DivElement elem = new html.DivElement();

  // Add all tests in the format: addTest(elem, "test000");
  for (int i = 0; i <= 38; i++)
    addTest(elem, "test"+"$i".padLeft(3, '0'));

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
