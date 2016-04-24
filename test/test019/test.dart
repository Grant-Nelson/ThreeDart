// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test019;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Views.dart' as Views;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 019", [],
    "A test of the Bumpy Texture 2D Directional Lighting Shader.");

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();
  Movers.UserRoller roller = new Movers.UserRoller()
    ..ctrlPressed = true;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.cube();

  Views.FrontTarget target = new Views.FrontTarget()
    ..clearColor = false;

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(1.0, -2.0, -3.0)),
          color: new Math.Color3.white()));

  Movers.Group mover = new Movers.Group()
    ..add(rotater)
    ..add(roller)
    ..add(zoom)
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));

  Views.Perspective camara = new Views.Perspective(mover: mover);

  Scenes.CoverPass skybox = new Scenes.CoverPass()
    ..target = target
    ..camara = camara;

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..camara = camara
    ..tech = tech
    ..target = target
    ..children.add(obj);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = new Scenes.Compound(passes: [skybox, pass]);

  Textures.TextureCube environment =
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg");
  skybox.tech = new Techniques.Skybox()
    ..boxTexture = environment;

  Textures.Texture2D color = td.textureLoader.load2DFromFile("../resources/AlphaWeave.png");
  tech
    ..ambientColor = new Math.Color3(0.5, 0.5, 0.5)
    ..diffuseColor = new Math.Color3(0.6, 0.6, 0.6)
    ..ambientTexture2D = color
    ..diffuseTexture2D = color
    ..alphaTexture2D = color;

  rotater.attach(td.userInput);
  zoom.attach(td.userInput);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
