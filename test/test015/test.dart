// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test015;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 015", ["bumpMaps", "controls"],
    "Test of bumpy reflection and refraction.");

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
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(-1.0, -1.0, -1.0))));

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

  Scenes.Compound compound = new Scenes.Compound(passes: [skybox, pass]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = compound;

  rotater.attach(td.userInput);
  zoom.attach(td.userInput);
  roller.attach(td.userInput);

  Textures.TextureCube environment =
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg");
  skybox.tech = new Techniques.Skybox()
    ..boxTexture = environment;

  tech
    ..ambientColor = new Math.Color3(0.1, 0.1, 0.1)
    ..diffuseColor = new Math.Color3(0.1, 0.1, 0.1)
    ..specularColor = new Math.Color3.black()
    ..shininess = 10.0
    ..environmentTexture = environment
    ..refraction = 0.6
    ..refractionColor = new Math.Color3(0.2, 0.3, 1.0)
    ..reflectionColor = new Math.Color3(0.6, 0.6, 0.6);

  new common.RadioGroup("controls")
    ..add("Silver", () {
      tech
        ..ambientColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuseColor    = new Math.Color3(0.2, 0.2, 0.2)
        ..refractionColor = new Math.Color3.black()
        ..reflectionColor = new Math.Color3(1.0, 1.0, 1.0);
    }, true)
    ..add("Gold", () {
      tech
        ..ambientColor    = new Math.Color3(0.11, 0.11, 0.1)
        ..diffuseColor    = new Math.Color3(0.21, 0.21, 0.2)
        ..refractionColor = new Math.Color3.black()
        ..reflectionColor = new Math.Color3(1.0, 0.9, 0.5);
    })
    ..add("Glass", () {
      tech
        ..ambientColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuseColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction      = 0.4
        ..refractionColor = new Math.Color3(0.6, 0.6, 0.6)
        ..reflectionColor = new Math.Color3(0.4, 0.4, 0.4);
    })
    ..add("Blue Glass", () {
      tech
        ..ambientColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuseColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction      = 0.4
        ..refractionColor = new Math.Color3(0.2, 0.3, 1.0)
        ..reflectionColor = new Math.Color3(0.3, 0.3, 0.3);
    })
    ..add("Water Bubble", () {
      tech
        ..ambientColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuseColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction      = 0.6
        ..refractionColor = new Math.Color3(0.8, 0.8, 0.8)
        ..reflectionColor = new Math.Color3(0.2, 0.2, 0.2);
    })
    ..add("No Reflection", () {
      tech
        ..ambientColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuseColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction      = 0.6
        ..refractionColor = new Math.Color3(1.0, 1.0, 1.0)
        ..reflectionColor = new Math.Color3.black();
    })
    ..add("Pink Distort", () {
      tech
        ..ambientColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuseColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction      = 0.9
        ..refractionColor = new Math.Color3(1.0, 0.8, 0.8)
        ..reflectionColor = new Math.Color3.black();
    })
    ..add("Cloak", () {
      tech
        ..ambientColor    = new Math.Color3(0.0, 0.0, 0.0)
        ..diffuseColor    = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction      = 0.99
        ..refractionColor = new Math.Color3(0.95, 0.95, 0.95)
        ..reflectionColor = new Math.Color3.black();
    })
    ..add("White and Shiny", () {
      tech
        ..ambientColor    = new Math.Color3(0.3, 0.3, 0.3)
        ..diffuseColor    = new Math.Color3(0.5, 0.5, 0.5)
        ..refractionColor = new Math.Color3.black()
        ..reflectionColor = new Math.Color3(0.3, 0.3, 0.3);
    });

  new common.Texture2DGroup("bumpMaps", (String fileName) {
    tech.bumpyTexture2D = td.textureLoader.load2DFromFile(fileName);
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
