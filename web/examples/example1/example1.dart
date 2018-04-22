// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library example1;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Data.dart' as Data;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'dart:math' as math;
import '../../common/common.dart' as common;

part 'blockType.dart';
part 'chunk.dart';

void show() {
  new common.ShellPage("Example 1")
    ..addLargeCanvas("example1")
    ..addPar(["WIP"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("example1");
  Textures.Texture2D blockTxt =
    td.textureLoader.load2DFromFile("./examples/example1/blocks.png", wrapEdges: false, nearest: true);

  Techniques.MaterialLight matLit = new Techniques.MaterialLight()
    ..emission.texture2D = blockTxt;

  ThreeDart.Entity group = new ThreeDart.Entity();

  for (int x = -32; x <= 32; x+=Chunk.chunkXSize) {
    for (int z = -32; z <= 32; z+=Chunk.chunkZSize) {
      Chunk chunk = new Chunk(x, -8, z)
        ..updateShape()
        ..entity.technique = matLit;
      group.children.add(chunk.entity);
    }
  }

  // Setup the First person camera
  Movers.UserTranslator trans = new Movers.UserTranslator(input: td.userInput);
  Movers.UserRotater rot = new Movers.UserRotater(input: td.userInput)
    ..pitch.maximumLocation = Math.PI_2
    ..pitch.minimumLocation = -Math.PI_2
    ..pitch.dampening = 1.0
    ..yaw.dampening   = 1.0
    ..pitch.wrap = false;
  rot.changed.add((ThreeDart.EventArgs args) {
    trans.velocityRotation = new Math.Matrix3.rotateY(-rot.yaw.location);
  });
  Movers.Group camera = new Movers.Group([trans, rot]);

  td.scene = new Scenes.EntityPass()
    ..children.add(group)
    ..camera.mover = camera;
}
