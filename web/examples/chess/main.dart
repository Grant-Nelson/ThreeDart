library chess;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/IO.dart' as IO;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Techniques.dart' as Techniques;

import 'dart:async';

import '../../common/common.dart' as common;

part 'bishop.dart';
part 'board.dart';
part 'edge.dart';
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
    ..addPar(["Just started, WIP"])
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

  Scenes.EntityPass scene = new Scenes.EntityPass()
    ..camera.mover = new Movers.Group([
      new Movers.UserRotater(input: td.userInput),
      new Movers.UserTranslator(input: td.userInput),
      new Movers.UserZoom(input: td.userInput),
      new Movers.Constant.translate(0.0, 0.0, 15.0)
    ]);
  td.scene = scene;
  
  Board board = new Board(td);
  scene.children.add(board);

  common.showFPS(td);
}
