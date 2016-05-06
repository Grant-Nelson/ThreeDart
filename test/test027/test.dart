// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test027;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 027", [],
    "Test of a back buffer for rendering to a texture.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  Movers.Group firstMover =new Movers.Group()
    ..add(new Movers.Rotater())
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));
  Views.Perspective rotaterCamara = new Views.Perspective(mover: firstMover);

  Views.BackTarget backTarget = new Views.BackTarget(1024, 1024)
    ..clearColor = false;

  Scenes.CoverPass skybox = new Scenes.CoverPass()
    ..target = backTarget
    ..camara = rotaterCamara;

  ThreeDart.Entity firstObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  Techniques.MaterialLight firstTech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(0.0, -1.0, -1.0)),
          color: new Math.Color3.white()))
    ..ambientColor = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuseColor = new Math.Color3(0.0, 1.0, 0.0)
    ..specularColor = new Math.Color3(1.0, 0.0, 0.0)
    ..shininess = 10.0;

  Scenes.RenderPass firstPass = new Scenes.RenderPass()
    ..camara = rotaterCamara
    ..tech = firstTech
    ..target = backTarget
    ..children.add(firstObj);

  skybox.tech = new Techniques.Skybox()
    ..boxTexture = td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg");

  Movers.Group secondMover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));
  Views.Perspective userCamara = new Views.Perspective(mover: secondMover);

  ThreeDart.Entity secondObj = new ThreeDart.Entity()
    ..shape = Shapes.cube();

  Techniques.MaterialLight secondTech = new Techniques.MaterialLight()
    ..emissionTexture2D = backTarget.colorTexture;

  Scenes.RenderPass secondPass = new Scenes.RenderPass()
    ..camara = userCamara
    ..tech = secondTech
    ..children.add(secondObj);

  td.scene = new Scenes.Compound(passes: [skybox, firstPass, secondPass]);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
