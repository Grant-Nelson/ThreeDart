// Copyright (c) 2015, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test;

import 'dart:html' as html;

void main() {
  html.Element elem = html.document.getElementById("tests");
  addTest(elem, "test000");
  addTest(elem, "test001");
}

void addTest(html.Element elem, String testName) {
  html.ImageElement img = new html.ImageElement()
    ..alt = "$testName"
    ..src = "./$testName/test.png";

  html.AnchorElement a = new html.AnchorElement()
    ..className = "source"
    ..href = "./$testName/"
    ..children.add(img);

  html.DivElement box = new html.DivElement()
    ..className = "image-box"
    ..children.add(a);

  elem.children.add(box);
}
