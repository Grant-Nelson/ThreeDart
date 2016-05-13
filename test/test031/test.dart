// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test030;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 030", [],
    "A test of the Solid Color Directional Lighting Shader with a cube texture bump map.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  ThreeDart.Entity normalObj = new ThreeDart.Entity()
    ..shape = Shapes.cube()
    ..mover = (new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput))
      ..add(new Movers.UserZoom(input: td.userInput)));

  Techniques.Normal normalTech = new Techniques.Normal()
    ..bumpyTextureCube = td.textureLoader.loadCubeFromPath("../resources/diceBumpMap");

  Views.BackTarget normalTarget = new Views.BackTarget(1024, 1024)
    ..color = new Math.Color4(0.5, 0.5, 1.0, 1.0);

  Scenes.RenderPass normalPass = new Scenes.RenderPass()
    ..tech = normalTech
    ..target = normalTarget
    ..children.add(normalObj)
    ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  Movers.Group secondMover = new Movers.Group()
  ..add(new Movers.UserRotater(ctrl: true, input: td.userInput))
  ..add(new Movers.UserZoom(ctrl: true, input: td.userInput))
  ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));
  Views.Perspective userCamara = new Views.Perspective(mover: secondMover);

  Views.BackTarget colorTarget = new Views.BackTarget(512, 512)
    ..clearColor = false;

  ThreeDart.Entity colorObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  Techniques.MaterialLight colorTech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(0.0, -1.0, -1.0)),
          color: new Math.Color3.white()))
    ..ambientColor = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuseColor = new Math.Color3(0.0, 1.0, 0.0)
    ..specularColor = new Math.Color3(1.0, 0.0, 0.0)
    ..shininess = 10.0;

  Scenes.CoverPass skybox = new Scenes.CoverPass()
    ..target = colorTarget
    ..camara = userCamara
    ..tech = new Techniques.Skybox(
        boxTexture: td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"));

  Scenes.RenderPass colorPass = new Scenes.RenderPass()
    ..camara = userCamara
    ..tech = colorTech
    ..target = colorTarget
    ..children.add(colorObj);

  Techniques.Distort distortTech = new Techniques.Distort()
    ..colorTexture = colorTarget.colorTexture
    ..bumpTexture = normalTarget.colorTexture
    ..bumpMatrix = new Math.Matrix4.scale(0.05, 0.05, 0.05);
  Scenes.CoverPass distortPass = new Scenes.CoverPass()
    ..tech = distortTech;

  td.scene = new Scenes.Compound(passes: [skybox, colorPass, normalPass, distortPass]);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
