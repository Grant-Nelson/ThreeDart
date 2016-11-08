// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.web;

import 'common/common.dart' as common;
import 'tutorials/tutorials.dart' as tutorials;

String get tutorialNum => Uri.base.queryParameters['tutorial']??"";

void main() {
  try {
    if (tutorialNum == "1") {
      tutorials.tutorial1();
      print("FLAG 1");
    }
    else mainPage();
  } catch (ex) {
    print(ex);
  }
}

void mainPage() {
  new common.ShellPage()
    ..addImage("3Dart", "resources/ThreeDart.png")
    ..addPar(["Currently 3Dart is still in beta."])
    ..addPar(["Please visit the [3Dart GitHub repository|https://github.com/Grant-Nelson/ThreeDart] ",
      "were you can download and play with 3Dart right now. Feel free to help ",
      "develop and contribute to the 3Dart code and community."])
    ..addHeader(2, "Examples")
    ..addPar(["Currently there are no examples written. ",
      "To see 3Dart in action see tests in repository."])
    ..addHeader(2, "Tutorials")
    ..addPar(["[Getting Started|./?tutorial=1]"])
    ..addHeader(6, "Tutorials still need to be written", "")
    ..addPar(["Material Lighting"])
    ..addPar(["Advanced Movers"])
    ..addPar(["Advanced Shapes"])
    ..addPar(["Advanced Techniques"])
    ..addPar(["Scene Compositing"]);
}
