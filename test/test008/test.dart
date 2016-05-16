// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test008;

import 'dart:html';
import 'dart:web_gl' as WebGL;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Shaders.dart' as Shaders;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Data.dart' as Data;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../common/common.dart' as common;

part 'BumpyShader.dart';
part 'BumpyTechnique.dart';

void main() {
  common.shellTest("Test 008", ["bumpMaps"],
    "A custom shader for testing and fixing the normal distortion "+
    "equation used for bump maps. This displays the normal vectors "+
    "across a surface.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  Shapes.Shape shape = Shapes.grid(widthDiv: 50, heightDiv: 50);
  shape.calculateNormals();
  shape.calculateBinormals();
  shape.faces.removeAll();
  for (int i = shape.vertices.length-1; i >= 0; i--) {
    Shapes.Vertex ver1 = shape.vertices[i]..weight = 0.0;
    Shapes.Vertex ver2 = ver1.copy()..weight = 1.0;
    shape.vertices.add(ver2);
    shape.lines.add(ver1, ver2);
  }

  BumpyTechnique tech = new BumpyTechnique()
    ..offsetScalar = 0.5;

  ThreeDart.Entity objTech = new ThreeDart.Entity()
    ..shape = shape
    ..technique = tech;

  ThreeDart.Entity group = new ThreeDart.Entity()
    ..children.add(objTech)
    ..mover = (new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput)));

  td.scene = new Scenes.RenderPass()
    ..children.add(group)
    ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  new common.Texture2DGroup("bumpMaps", (String fileName) {
    tech.bumpyTexture = td.textureLoader.load2DFromFile(fileName);
  })
    ..add("../resources/BumpMap1.png", true)
    ..add("../resources/BumpMap2.png")
    ..add("../resources/BumpMap3.png")
    ..add("../resources/BumpMap4.png")
    ..add("../resources/BumpMap5.png")
    ..add("../resources/ScrewBumpMap.png")
    ..add("../resources/CtrlPnlBumpMap.png");

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
