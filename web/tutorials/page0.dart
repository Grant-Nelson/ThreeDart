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
      "<body>",
      "  Hello World 1345",
      "</body>"])
    ..addPar(["This is an example of a paragraph. This is an example of a ",
      "paragraph. This is an example of a paragraph. This is an example of ",
      "a paragraph. This is an example of a paragraph. This is an example ",
      "of a paragraph. This is an example of a paragraph."])
    ..addCode("dart", [
      "void thisIsATest() {",
      "  print(\"Hello World\");",
      "}"]);
}
