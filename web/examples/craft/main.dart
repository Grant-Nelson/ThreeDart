library craft;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Data.dart' as Data;
import 'package:ThreeDart/Input.dart' as Input;
import 'package:ThreeDart/Events.dart' as Events;

import 'package:OpenSimplexNoiseDart/OpenSimplexNoise.dart' as simplex;

import 'dart:math' as math;
import 'dart:typed_data' as data;
import 'dart:async';

import '../../common/common.dart' as common;

part 'blockInfo.dart';
part 'blockType.dart';
part 'chunk.dart';
part 'generator.dart';
part 'materials.dart';
part 'player.dart';
part 'shaper.dart';
part 'world.dart';

/// Starts up the 3Dart Craft example
void main() {
  new common.ShellPage("3Dart Craft")
    ..addPar(["Please wait, this example may take a while to load."])
    ..addLargeCanvas("targetCanvas")
    ..addHeader(1, "About")
    ..addPar(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ",
      "to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ",
      "This example has no server backing it so none of the changes are persisted. It would take very little ",
      "to turn this into a simple online game."])
    ..addPar(["«[Back to Examples List|../../]"])
    ..addHeader(1, "Controls")
    ..addPar(["• _Currently there are no controls for mobile browsers_"])
    ..addPar(["• *Esc* to release the mouse capture"])
    ..addPar(["• *W* or *Up arrow* to move forward"])
    ..addPar(["• *S* or *Down arrow* to move backward"])
    ..addPar(["• *A* or *Left arrow* to strife left"])
    ..addPar(["• *D* or *Right arror* to strife right"])
    ..addPar(["• *Space bar* to jump"])
    ..addPar(["• *Tab* cycles the block selected which can be placed"])
    ..addPar(["• *Shift-Tab* cycles the selection in the reverse direction"])
    ..addPar(["• *Left click* or *Q* removes the currently highlighted block"])
    ..addPar(["• *Right click* or *E* places the selected block on the highlighted block"])
    ..addHeader(1, "Help wanted")
    ..addPar(["There is still much to be done, many cool new features, and several little bugs. ",
      "If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ",
      "check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ",
      "[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."])
    ..addPar(["There are tons of ways to contribute. You could even start your own example. ",
      "See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."]);

    Timer.run(startCraft);
}

void startCraft() {
  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("targetCanvas");
  Materials mats = new Materials(td);
  World world = new World(mats);
  Player player = new Player(td, world);

  Scenes.EntityPass scene = new Scenes.EntityPass()
    ..onPreUpdate.add(world.update)
    ..camera.mover = player.camera;

  for (ThreeDart.Entity entity in world.entities)
    scene.children.add(entity);
  scene.children.add(player.entity);

  world.player = player;
  td.scene = scene;
  player.goHome();

  // Set background color to sky blue
  (scene.target as Views.FrontTarget).color = new Math.Color4(0.576, 0.784, 0.929);

  // Start fps output
  new Timer.periodic(const Duration(milliseconds: 5000), (Timer time) {
    String fps = td.fps.toStringAsFixed(2);
    print("$fps fps");
  });
}
