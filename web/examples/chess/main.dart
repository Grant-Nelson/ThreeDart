library chess;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/IO.dart' as IO;
import 'package:ThreeDart/Events.dart' as Events;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Views.dart' as Views;

import 'dart:async';

import '../../common/common.dart' as common;

part 'bishop.dart';
part 'board.dart';
part 'edge.dart';
part 'game.dart';
part 'king.dart';
part 'knight.dart';
part 'materials.dart';
part 'pawn.dart';
part 'piece.dart';
part 'queen.dart';
part 'rook.dart';
part 'tile.dart';

/// Starts up the 3Dart Chess example
void main() {
  new common.ShellPage("3Dart Chess")
    ..addPar(["This example is in development and may still have a few issues and glitches."])
    ..addLargeCanvas("targetCanvas")
    ..addHeader(1, "About")
    ..addPar(["Just started (WIP). Currently you can rotate the camera but game piece selection ",
      "and movement have not been implemented yet. Click and drag with mouse to see the board from ",
      "different angles."])
    ..addPar(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ",
      "to create simple browser driven video games. ",
      "This example has no server backing it so currently there is no networked two player mode. ",
      "It would take very little to turn this into a simple online game."])
    ..addPar(["«[Back to Examples List|../../]"])
    ..addHeader(1, "Help wanted")
    ..addPar(["There is still much to be done, many cool new features, and several little bugs. ",
      "If you would like to contribute to this example, have an idea, find a bug, or just want ",
      "to learn more about it, check out the ",
      "[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."])
    ..addPar(["There are tons of ways to contribute. You could even start your own example. ",
      "See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."]);

    Timer.run(startChess);
}

/// Start the chess game.
/// This is deferred so that if loading takes a while the page is at least loaded.
void startChess() {
  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("targetCanvas");

  Views.Perspective camera = new Views.Perspective(
    mover: new Movers.Group([
      new Movers.UserRotater(input: td.userInput)
        ..pitch.minimumLocation = -Math.PI_2
        ..pitch.maximumLocation = 0.0
        ..pitch.location = -0.5
        ..pitch.wrap = false,
      new Movers.Constant.scale(1.75, 1.75, 1.75),
      new Movers.Constant.translate(0.0, 0.0, 15.0)
    ]));

  Views.FrontTarget frontTarget = new Views.FrontTarget()
    ..clearColor = false;

  Board board = new Board(td);
  Game game = new Game(board);

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(board.materials.environment)
    ..target = frontTarget
    ..camera = camera;

  Scenes.EntityPass mainScene = new Scenes.EntityPass()
    ..target = frontTarget
    ..camera = camera
    ..children.add(board);
  
  Views.BackTarget pickTarget = new Views.BackTarget(autoResize: true,
    autoResizeScalarX: 0.5, autoResizeScalarY: 0.5);
  Scenes.EntityPass pickScene = new Scenes.EntityPass()
    ..target = pickTarget
    ..camera = camera
    ..children.add(board);

  new Textures.ColorPicker(td.textureLoader, input: td.userInput, txt: pickTarget.colorTexture)
    ..onPreUpdate.add((_) {
      board.showPick = true;
      td.render(pickScene);
      board.showPick = false;
      td.requestRender();
    })
    ..colorPicked.add((Events.EventArgs args) {
      Textures.ColorPickerEventArgs pickArgs = args as Textures.ColorPickerEventArgs;
      game.pick(pickArgs.color.trim32());
    });

  td.scene = new Scenes.Compound(passes: [skybox, mainScene]);

  common.showFPS(td);
}
