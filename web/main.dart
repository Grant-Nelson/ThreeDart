library ThreeDart.web;

import 'common/common.dart' as common;

void main() {
  new common.ShellPage("3Dart", false)
    ..addImage("3Dart", "resources/ThreeDart.png")
    ..addPar(["Currently 3Dart is still in beta."])
    ..addPar(["Please visit the [3Dart GitHub repository|https://github.com/Grant-Nelson/ThreeDart] ",
      "were you can download and play with 3Dart right now. Please feel free to help ",
      "develop and contribute to the 3Dart code and community."])
    ..addHeader(2, "Examples")
    ..addPar(["[3Dart Craft|./examples/craft/]"])
    ..addPar(["[3Dart Chess|./examples/chess/]"])
    ..addPar(["[3Dart Rift|./examples/rift/]"])
    ..addPar(["[Hypersphere|./examples/hypersphere/]"])
    ..addHeader(2, "Tutorials")
    ..addPar(["[Getting Started|./tutorials/tutorial1/]"])
    ..addHeader(6, "Tutorials still need to be written", "")
    ..addPar(["Material Lighting"])
    ..addPar(["Advanced Movers"])
    ..addPar(["Advanced Shapes"])
    ..addPar(["Advanced Techniques"])
    ..addPar(["Scene Compositing"])
    ..addHeader(2, "Tests")
    ..addPar(["[Tests|./tests/]"]);
}
