// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test015;

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
    "Test of Material Lighting shader with bump mapping, reflections, refractions.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  Views.FrontTarget target = new Views.FrontTarget()
    ..clearColor = false;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.cube();

  Textures.TextureCube environment =
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg");
  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(-1.0, -1.0, -1.0))))
    ..ambient.color = new Math.Color3(0.1, 0.1, 0.1)
    ..diffuse.color = new Math.Color3(0.1, 0.1, 0.1)
    ..specular.color = new Math.Color3.black()
    ..specular.shininess = 10.0
    ..environment = environment
    ..refraction.deflection = 0.6
    ..refraction.color = new Math.Color3(0.2, 0.3, 1.0)
    ..reflection.color = new Math.Color3(0.6, 0.6, 0.6);

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));

  Views.Perspective camera = new Views.Perspective(mover: mover);

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(environment)
    ..target = target
    ..camera = camera;

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..camera = camera
    ..technique = tech
    ..target = target
    ..children.add(obj);
  (pass.target as Views.FrontTarget).clearColor = false;

  td.scene = new Scenes.Compound(passes: [skybox, pass]);

  new common.RadioGroup("controls")
    ..add("Silver", () {
      tech
        ..ambient.color    = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color    = new Math.Color3(0.2, 0.2, 0.2)
        ..refraction.color = new Math.Color3.black()
        ..reflection.color = new Math.Color3(1.0, 1.0, 1.0);
    }, true)
    ..add("Gold", () {
      tech
        ..ambient.color    = new Math.Color3(0.11, 0.11, 0.1)
        ..diffuse.color    = new Math.Color3(0.21, 0.21, 0.2)
        ..refraction.color = new Math.Color3.black()
        ..reflection.color = new Math.Color3(1.0, 0.9, 0.5);
    })
    ..add("Glass", () {
      tech
        ..ambient.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction.deflection = 0.4
        ..refraction.color      = new Math.Color3(0.6, 0.6, 0.6)
        ..reflection.color      = new Math.Color3(0.4, 0.4, 0.4);
    })
    ..add("Blue Glass", () {
      tech
        ..ambient.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction.deflection = 0.4
        ..refraction.color      = new Math.Color3(0.2, 0.3, 1.0)
        ..reflection.color      = new Math.Color3(0.3, 0.3, 0.3);
    })
    ..add("Water Bubble", () {
      tech
        ..ambient.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction.deflection = 0.6
        ..refraction.color      = new Math.Color3(0.8, 0.8, 0.8)
        ..reflection.color      = new Math.Color3(0.2, 0.2, 0.2);
    })
    ..add("No Reflection", () {
      tech
        ..ambient.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction.deflection = 0.6
        ..refraction.color      = new Math.Color3(1.0, 1.0, 1.0)
        ..reflection.color      = new Math.Color3.black();
    })
    ..add("Pink Distort", () {
      tech
        ..ambient.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction.deflection = 0.9
        ..refraction.color      = new Math.Color3(1.0, 0.8, 0.8)
        ..reflection.color      = new Math.Color3.black();
    })
    ..add("Cloak", () {
      tech
        ..ambient.color         = new Math.Color3(0.0, 0.0, 0.0)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction.deflection = 0.99
        ..refraction.color      = new Math.Color3(0.95, 0.95, 0.95)
        ..reflection.color      = new Math.Color3.black();
    })
    ..add("White and Shiny", () {
      tech
        ..ambient.color    = new Math.Color3(0.3, 0.3, 0.3)
        ..diffuse.color    = new Math.Color3(0.5, 0.5, 0.5)
        ..refraction.color = new Math.Color3.black()
        ..reflection.color = new Math.Color3(0.3, 0.3, 0.3);
    });

  new common.Texture2DGroup("bumpMaps", (String fileName) {
    tech.bump.texture2D = td.textureLoader.load2DFromFile(fileName);
  })
    ..add("../resources/BumpMap1.png", true)
    ..add("../resources/BumpMap2.png")
    ..add("../resources/BumpMap3.png")
    ..add("../resources/BumpMap4.png")
    ..add("../resources/BumpMap5.png")
    ..add("../resources/ScrewBumpMap.png")
    ..add("../resources/CtrlPnlBumpMap.png");

  common.showFPS(td);
}
