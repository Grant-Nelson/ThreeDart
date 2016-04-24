// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test016;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Views.dart' as Views;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 016", [],
    "A test of the Cube Texture Color Directional Lighting Shader with a Cube Texture Bump Map.");

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();
  Movers.UserRoller roller = new Movers.UserRoller()
    ..ctrlPressed = true;

  Views.FrontTarget target = new Views.FrontTarget()
    ..clearColor = false;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.cube();

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(1.0, -1.0, -3.0)),
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
  (pass.target as Views.FrontTarget).clearColor = false;

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = new Scenes.Compound(passes: [skybox, pass]);

  Textures.TextureCube environment =
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg");
  skybox.tech = new Techniques.Skybox()
    ..boxTexture = environment;

  Textures.TextureCube color = td.textureLoader.loadCubeFromPath("../resources/diceColor");
  tech
    ..ambientColor = new Math.Color3(0.2, 0.2, 0.2)
    ..diffuseColor = new Math.Color3(0.7, 0.7, 0.7)
    ..specularColor = new Math.Color3(0.7, 0.7, 0.7)
    ..ambientTextureCube = color
    ..diffuseTextureCube = color
    ..specularTextureCube = td.textureLoader.loadCubeFromPath("../resources/diceSpecular")
    ..shininess = 10.0
    ..bumpyTextureCube = td.textureLoader.loadCubeFromPath("../resources/diceBumpMap")
    ..environmentTexture = environment
    ..reflectionColor = new Math.Color3(0.3, 0.3, 0.3);

  rotater.attach(td.userInput);
  zoom.attach(td.userInput);
  roller.attach(td.userInput);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
