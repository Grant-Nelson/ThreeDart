part of ThreeDart.web.tutorials;

void page0() {
  new ShellPage("Getting Started")
    ..addHeader(1, "1 Test")
    ..addHeader(2, "2 Test")
    ..addHeader(3, "3 Test")
    ..addPar(["This is an example of a paragraph. This is an example of a ",
      "paragraph. This is an example of a paragraph. This is an example of ",
      "a paragraph. This is an example of a paragraph. This is an example ",
      "of a paragraph. This is an example of a paragraph."])
    ..addCode("html", [
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
      "paragraph. This is an example of a paragraph. This is an example of ",
      "a paragraph. This is an example of a paragraph. This is an example ",
      "of a paragraph. This is an example of a paragraph."])
    ..addCode("dart", [
      "void thisIsATest() {",
      "  print(\"Hello World\");",
      "}"]);
}
