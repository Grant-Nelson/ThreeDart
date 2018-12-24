library craft;

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

part 'blockInfo.dart';
part 'blockType.dart';
part 'checkersGenerator.dart';
part 'chunk.dart';
part 'constants.dart';
part 'generator.dart';
part 'materials.dart';
part 'player.dart';
part 'randomGenerator.dart';
part 'shaper.dart';
part 'world.dart';


/// Starts up the 3Dart Craft example
void main() {
  new common.ShellPage("3Dart Craft")
    ..addPar(["This example is in development and may still have a few issues and glitches."])
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
    ..addPar(["• *O* to return the starting location"])
    ..addHeader(1, "Help wanted")
    ..addPar(["There is still much to be done, many cool new features, and several little bugs. ",
      "If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ",
      "check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ",
      "[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."])
    ..addPar(["There are tons of ways to contribute. You could even start your own example. ",
      "See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."]);

  Timer.run(startCraft);
}

/// Start the craft game.
/// This is deferred so that if loading takes a while the page is at least loaded.
void startCraft() {
  int seed = _getSeed();
  if (seed < 0) seed = _navigateToSeededUrl();

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("targetCanvas");
  Materials mats = new Materials(td);
  RandomGenerator gen = new RandomGenerator(seed);
  World world = new World(mats, gen);
  Player player = new Player(td.userInput, world);

  Scenes.EntityPass scene = new Scenes.EntityPass(
    clearColor: new Math.Color4(0.576, 0.784, 0.929))
    ..onPreUpdate.add(world.update)
    ..camera.mover = player.camera;

  for (ThreeDart.Entity entity in world.entities)
    scene.children.add(entity);
  scene.children.add(player.entity);

  world.player = player;
  td.scene = scene;
  player.goHome();
  
  // Start timer for periodically generating chunks and animate.
  new Timer.periodic(const Duration(milliseconds: Constants.worldTickMs), world.worldTick);
  new Timer.periodic(const Duration(milliseconds: Constants.generateTickMs), world.generateTick);
  new Timer.periodic(const Duration(milliseconds: Constants.animationTickMs), world.animationTick);
  
  // Start debug output
  new Timer.periodic(const Duration(milliseconds: Constants.debugPrintTickMs), (Timer time) {
    String fps = td.fps.toStringAsFixed(2);
    print("$fps fps, "+world.debugString());
  });
}

/// Returns the seed provided by the URL's query parameters, or -1 if no seed is found.
int _getSeed() {
  String seedQueryParam = Uri.base.queryParameters["seed"];
  if (seedQueryParam == null) return -1;
  return int.tryParse(seedQueryParam) ?? -1;
}

/// Navigates the browser to a Url with a seed parameter and returns the seed.
int _navigateToSeededUrl() {
  int seed = new math.Random().nextInt(Constants.maxSeed);
  Uri newUri = Uri.base.replace(queryParameters: {"seed": "$seed"});
  html.window.history.pushState(null, null, newUri.toString());
  return seed;
}
