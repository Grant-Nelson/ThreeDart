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
void show() {
  new common.ShellPage("3Dart Craft")
    ..addLargeCanvas("targetCanvas")
    ..addPar(["WIP"]);

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
    print("${fps} fps");
  });
}
