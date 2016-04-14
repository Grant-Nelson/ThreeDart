// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test005;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Textures.dart' as Textures;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 005", [],
    "A test of the Texture 2D Directional Lighting Shader.");

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = (Shapes.cube()..adjustNormals())
    ..mover = new Movers.Rotater();

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..light = new Lights.Directional(
          direction: new Math.Vector3(1.0, -1.0, -3.0),
          color: new Math.Color4.white());

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  Textures.Texture2D color = td.textureLoader.load2DFromFile("../resources/CtrlPnlColor.png");
  tech
    ..emissionTexture2D = td.textureLoader.load2DFromFile("../resources/CtrlPnlEmission.png")
    ..ambientColor = new Math.Color4(0.2, 0.2, 0.2)
    ..diffuseColor = new Math.Color4(0.8, 0.8, 0.8)
    ..ambientTexture2D = color
    ..diffuseTexture2D = color
    ..specularTexture2D = td.textureLoader.load2DFromFile("../resources/CtrlPnlSpecular.png")
    ..shininess = 10.0;

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
