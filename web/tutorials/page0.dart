part of ThreeDart.web.tutorials;

void page0() {
  new ShellPage("Getting Started")
    ..addHeader(1, "1 Test")
    ..addHeader(2, "2 Test")
    ..addHeader(3, "3 Test")
    ..addPar(["This is an example of a paragraph. This is an example of a ",
      "paragraph. *This is an example of a bold paragraph.* This is an example of ",
      "a paragraph. _This is an example of an italics paragraph._ `This is an example ",
      "of a code paragraph.` This is an example of a paragraph."])
    ..addCode("Test of HTML code", "html", [
      '<!DOCTYPE html>',
      '<html>',
      '  <head>',
      '  	<meta charset="utf-8">',
      '  	<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '    <link rel="stylesheet" href="styles.css">',
      '    <title>Loading Dart...</title>',
      '  </head>',
      '  <body>',
      '    <script type="application/dart" src="main.dart"></script>',
      '    <script src="packages/browser/dart.js"></script>',
      '  </body>',
      '</html>'])
    ..addPar(["This is an example of a paragraph. This is an example of a ",
      "paragraph. This is an example of the [1 Test] link. This is an example of ",
      "a paragraph. This is an example of a [google|http://www.google.com] link. This is an example ",
      "of a paragraph. This is an example of a paragraph."])
    ..addCode("Test of Dart code", "dart", [
      "// This is a test of the dart coloring",
      "void thisIsATest() {",
      "  print(\"Hello World\");",
      "}"])
    ..addPar(["This is an example of a paragraph. This is an example of a ",
      "paragraph. This is an example of a paragraph. This is an example of ",
      "a paragraph. This is an example of a paragraph. This is an example ",
      "of a paragraph. This is an example of a paragraph."])
    ..addCode("Test of GLSL code", "glsl", [
      "uniform mat4 viewObjMat;",
      "uniform mat4 projMat;",
      "",
      "attribute vec3 posAttr;",
      "",
      "varying float depth;",
      "",
      "void main()",
      "{",
      "  vec4 pos = viewObjMat*vec4(posAttr, 1.0);",
      "  depth = pos.z;",
      "  gl_Position = projMat*pos;",
      "}"])
    ..addPar(["This is an example of a paragraph. This is an example of a ",
      "paragraph. This is an example of a paragraph. This is an example of ",
      "a paragraph. This is an example of a paragraph. This is an example ",
      "of a paragraph. This is an example of a paragraph."]);
}
