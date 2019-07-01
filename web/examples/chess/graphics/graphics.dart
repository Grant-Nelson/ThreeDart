library graphics;

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

import '../../../common/common.dart' as common;
import '../game/game.dart' as game;

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

void startGraphics(game.Game game) {
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

  Board board = new Board(td, game);

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
      board.pick(pickArgs.color.trim32());
    });

  td.scene = new Scenes.Compound(passes: [skybox, mainScene]);

  game.changedSelected.add((_) {
    board.clearSelections();
    board.setSelection(game.selected);
  });
  game.changedState.add((_) {
    board.setLocations(game.state);
  });
  game.changedMovements.add((_) {
    board.clearHighlights();
    board.setHighlights(game.movements);
  });
  game.changedCondition.add((_) {
    // TODO: Implement use for this event.
  });
  // Initialize board locations
  board.setLocations(game.state);

  common.showFPS(td);
}
