part of ThreeDart.web.tutorials;

void tutorial1() {
  new ShellPage("Tutorial 1")
    ..addPar(["This tutorial will walk you through creating the \"Hello World\" ",
      "of 3D graphics, a rotating cube. After this tutorial you should know how ",
      "to create a [ThreeDart|https://github.com/Grant-Nelson/ThreeDart] project. ",
      "However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ",
      "and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ",
      "before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ",
      "nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ",
      "tutorials."])
    ..addCanvas("tutorial1")
    ..addHeader(0, "Getting Started")
    ..addPar(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ",
      "that we will explore in this tutorial."])
    ..addPar(["ThreeDart must have a ",
      "[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ",
      "render graphics to. In this example the canvas is provided by [index.html|#index.html] ",
      "and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ",
      "is created an attached to that canvas using its identifier. Below that is ",
      "the render loop using the browser's `requestAnimationFrame`."])
    ..addCode("index.html", "html", 0, [
      '<!DOCTYPE html>',
      '<html>',
      '  <head>',
      '  	<meta charset="utf-8">',
      '  	<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '   <title>Tutorial 1</title>',
      '  </head>',
      '  <body>',
      '    <canvas id="tutorial1" width="800" height="600"></canvas>'
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
      "import 'package:ThreeDart/Movers.dart' as Movers;",
      "import 'package:ThreeDart/Math.dart' as Math;",
      "import 'package:ThreeDart/Techniques.dart' as Techniques;",
      "import 'package:ThreeDart/Scenes.dart' as Scenes;",
      "",
      "void main() {",
      "  ThreeDart.Entity obj = new ThreeDart.Entity()",
      "    ..shape = Shapes.cube()",
      "    ..mover = new Movers.Rotater();",
      "",
      "  Scenes.EntityPass pass = new Scenes.EntityPass()",
      "    ..children.add(obj)",
      "    ..tech = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0)",
      "    ..camera.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));",
      "",
      "  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId(\"tutorial1\")",
      "    ..scene = pass;",
      "",
      "  var update;",
      "  update = (num t) {",
      "    td.render();",
      "    window.requestAnimationFrame(update);",
      "  };",
      "  window.requestAnimationFrame(update);",
      "}"]);

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.cube()
    ..mover = new Movers.Rotater();

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..children.add(obj)
    ..tech = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0)
    ..camera.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("tutorial1")
    ..scene = pass;

  var update;
  update = (num t) {
    td.render();
    html.window.requestAnimationFrame(update);
  };
  html.window.requestAnimationFrame(update);
}
