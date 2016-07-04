// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test028;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 033", [],
    "Test of a sterioscopic scene.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  ThreeDart.Entity cubeEntity = new ThreeDart.Entity(shape: Shapes.cube());
  ThreeDart.Entity shapeEntity = new ThreeDart.Entity();
  for (double x = -1.6; x <= 1.7; x += 0.8) {
    for (double y = -1.6; y <= 1.7; y += 0.8) {
      for (double z = -1.6; z <= 1.7; z += 0.8) {
        Math.Matrix4 mat = new Math.Matrix4.translate(x, y, z)*
                           new Math.Matrix4.scale(0.2, 0.2, 0.2);
        ThreeDart.Entity entity = new ThreeDart.Entity()
          ..mover = new Movers.Constant(mat)
          ..children.add(cubeEntity);
        shapeEntity.children.add(entity);
      }
    }
  }

  Textures.TextureCube color = td.textureLoader.loadCubeFromPath("../resources/diceColor");
  Techniques.MaterialLight colorTech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(-1.0, -1.0, -1.0)),
          color: new Math.Color3(1.0, 0.9, 0.9)))
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(1.0, 1.0, 2.0)),
          color: new Math.Color3(0.2, 0.2, 0.35)))
    ..ambientColor = new Math.Color3(0.2, 0.2, 0.2)
    ..ambientTextureCube = color
    ..diffuseColor = new Math.Color3(0.8, 0.8, 0.8)
    ..diffuseTextureCube = color
    ..specularColor = new Math.Color3(0.7, 0.7, 0.7)
    ..shininess = 10.0
    ..bumpyTextureCube = td.textureLoader.loadCubeFromPath("../resources/diceBumpMap");

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 6.0)));

  Views.FrontTarget target = new Views.FrontTarget()
    ..clearColor = false;

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"));

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..tech = colorTech
    ..children.add(shapeEntity);

  td.scene = new Scenes.Sterioscopic(mover: mover, passes: [skybox, pass], target: target);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
