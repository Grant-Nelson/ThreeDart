library rift;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Data.dart' as Data;
import 'package:ThreeDart/Input.dart' as Input;
import 'package:ThreeDart/Events.dart' as Events;
import 'package:ThreeDart/Scenes.dart' as Scenes;

import 'package:OpenSimplexNoiseDart/OpenSimplexNoise.dart' as simplex;

import 'dart:math' as math;
import 'dart:async';
import 'dart:html' as html;
import 'dart:typed_data' as data;

import '../../common/common.dart' as common;

part 'constants.dart';
part 'layer.dart';
part 'room.dart';

/// Starts up the 3Dart Rift example
void main() {
  new common.ShellPage("3Dart Rift")
    ..addPar(["This example is in development and may still have a few issues and glitches."])
    ..addLargeCanvas("targetCanvas")
    ..addControlBoxes(["buttons"])
    ..addHeader(1, "About")
    ..addPar(["3Dart Rift is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] ",
      "can be used to create a 2D game environment for browser driven video games. ",
      "This example has no server backing it so none of the changes are persisted. It would take very little ",
      "to turn this into a simple online game."])
    ..addPar(["«[Back to Examples List|../../]"])
    ..addHeader(1, "Controls")
    ..addPar(["• _Currently there are no controls for mobile browsers_"])
    ..addPar(["• *Esc* to release the mouse capture or fullscreen"])
    ..addPar(["• *W* or *Up arrow* to move forward"])
    ..addPar(["• *S* or *Down arrow* to move backward"])
    ..addPar(["• *A* or *Left arrow* to strife left"])
    ..addPar(["• *D* or *Right arror* to strife right"])
    ..addPar(["• *Space bar* to jump"])
    ..addHeader(1, "Help wanted")
    ..addPar(["There is still much to be done, many cool new features, and several little bugs. ",
      "If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ",
      "check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ",
      "[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/rift]."])
    ..addPar(["There are tons of ways to contribute. You could even start your own example. ",
      "See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."]);

  Timer.run(startRift);
}

/// Start the rift game.
/// This is deferred so that if loading takes a while the page is at least loaded.
void startRift() {
  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("targetCanvas");

  // TODO: Fill out

  
  // Add fullscreen button
  html.Element elem = html.document.getElementById("buttons");
  html.ButtonElement button = new html.ButtonElement()
    ..text = "Fullscreen"
    ..onClick.listen((_) => td.fullscreen());
  elem.children.add(button);

  // Start debug output
  new Timer.periodic(const Duration(milliseconds: Constants.debugPrintTickMs), (Timer time) {
    String fps = td.fps.toStringAsFixed(2);
    print("$fps fps");
  });
}
