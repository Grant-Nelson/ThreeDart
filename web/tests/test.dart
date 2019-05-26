library ThreeDart.tests;

import 'dart:html' as html;

import '../common/common.dart' as common;

void main() {
  html.DivElement elem = new html.DivElement();

  // Add all tests in the format: addTest(elem, "test000");
  for (int i = 0; i <= 43; i++)
    addTest(elem, "test"+"$i".padLeft(3, '0'));

  new common.ShellPage("3Dart Tests")
    ..addElem(elem)
    ..addPar(["«[Back to Home|../]"]);
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
