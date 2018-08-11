library ThreeDart.web;

import 'common/common.dart' as common;
import 'examples/craft/craft.dart' as craft;
import 'tutorials/tutorials.dart' as tutorials;

String get exampleName => Uri.base.queryParameters['example']??"";
String get tutorialNum => Uri.base.queryParameters['tutorial']??"";

void main() {
  try {
    if (exampleName == "craft") craft.show();
    else if (tutorialNum == "1") tutorials.tutorial1();
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
      "were you can download and play with 3Dart right now. Please feel free to help ",
      "develop and contribute to the 3Dart code and community."])
    ..addHeader(2, "Examples")
    ..addPar(["[3Dart Craft|./?example=craft]"])
    ..addHeader(2, "Tutorials")
    ..addPar(["[Getting Started|./?tutorial=1]"])
    ..addHeader(6, "Tutorials still need to be written", "")
    ..addPar(["Material Lighting"])
    ..addPar(["Advanced Movers"])
    ..addPar(["Advanced Shapes"])
    ..addPar(["Advanced Techniques"])
    ..addPar(["Scene Compositing"])
    ..addHeader(2, "Tests")
    ..addPar(["[Tests|/tests]"]);
}
