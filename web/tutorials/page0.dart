part of ThreeDart.web.tutorials;

void page0() {
  new ShellPage("Tutorial 1")
    ..addPar(["This tutorial will walk you through creating the \"Hello World\" ",
      "of 3D graphics, a rotating cube. After this tutorial you should know how ",
      "to create a [ThreeDart|https://github.com/Grant-Nelson/ThreeDart] project. ",
      "However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ",
      "and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ",
      "before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ",
      "nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ",
      "tutorials."])
    ..addHeader(0, "Getting Started")
    ..addPar(["First, let's setup a canvas and Dart."])

    ..addCode("index.html", "html", 0, [
      '<!DOCTYPE html>',
      '<html>',
      '  <head>',
      '  	<meta charset="utf-8">',
      '  	<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '   <title>Tutorial 1</title>',
      '  </head>',
      '  <body>',
      '    <script type="application/dart" src="main.dart"></script>',
      '    <script src="packages/browser/dart.js"></script>',
      '  </body>',
      '</html>'])
    ..addCode("main.dart", "dart", 0, [
      "library threeDartTutorial1;",
      "",
      "import 'dart:html';",
      "import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;",
      "import 'package:ThreeDart/Shapes.dart' as Shapes;",
      "import 'package:ThreeDart/Scenes.dart' as Scenes;",
      "",
      "void main() {",
      "  ThreeDart.Entity obj = new ThreeDart.Entity()",
      "    ..shape = Shapes.cube()",
      "",
      "  Scenes.EntityPass pass = new Scenes.EntityPass()",
      "    ..children.add(obj);",
      "",
      "  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId('threeDart')",
      "    ..scene = pass;",
      "",
      "  var update;",
      "  update = (num t) {",
      "    td.render();",
      "    window.requestAnimationFrame(update);",
      "  };",
      "  window.requestAnimationFrame(update);",
      "}"]);
}
