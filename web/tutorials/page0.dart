// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

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
    ..addPar(["This is an example of a paragraph. This is an example of a ",
      "paragraph. This is an example of a paragraph. This is an example of ",
      "a paragraph. This is an example of a paragraph. This is an example ",
      "of a paragraph. This is an example of a paragraph."])
    ..addCode("dart", [
      "void thisIsATest() {",
      "  print(\"Hello World\");",
      "}"]);
}
