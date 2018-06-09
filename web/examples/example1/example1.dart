// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library example1;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Data.dart' as Data;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:OpenSimplexNoiseDart/OpenSimplexNoise.dart' as simplex;

import 'dart:math' as math;
import 'dart:typed_data' as data;
import 'dart:async';

import '../../common/common.dart' as common;

part 'blockInfo.dart';
part 'blockType.dart';
part 'chunk.dart';
part 'player.dart';
part 'world.dart';

void show() {
  new common.ShellPage("3Dart Craft")
    ..addLargeCanvas("targetCanvas")
    ..addPar(["WIP"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("targetCanvas");
  World world = new World(td);
  Player player = new Player(td, world);
  player.goHome();

  Scenes.EntityPass scene = new Scenes.EntityPass()
    ..onPreUpdate.add(world.update)
    ..children.add(world.group)
    ..children.add(player.entity)
    ..camera.mover = player.camera;
    //..camera.mover = new Movers.Constant(new Math.Matrix4.rotateX(-Math.PI_2)*new Math.Matrix4.translate(0.0, -50.0, 0.0));
  world.player = player;
  // Set background color to sky blue
  (scene.target as Views.FrontTarget).color = new Math.Color4(0.576, 0.784, 0.929);
  td.scene = scene;

  new Timer.periodic(const Duration(milliseconds: 5000), (Timer time) {
    String fps = td.fps.toStringAsFixed(2);
    print("${fps} fps");
  });
}
