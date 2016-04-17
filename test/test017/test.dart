// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test011;

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
  common.shellTest("Test 017", ["shapes"],
    "A test of the Solid Color Directional Lighting Shader with a cube texture bump map.");

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();
  Movers.UserRoller roller = new Movers.UserRoller()
    ..ctrlPressed = true;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.sphere();

  Views.FrontTarget target = new Views.FrontTarget()
    ..clearColor = false;

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..light = new Lights.Directional(
          direction: new Math.Vector3(-1.0, -1.0, -1.0),
          color: new Math.Color3.white());

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

  Textures.TextureCube specular = td.textureLoader.loadCubeFromPath("../resources/earthSpecular");
  Textures.TextureCube color = td.textureLoader.loadCubeFromPath("../resources/earthColor");
  tech
    ..ambientColor=  new Math.Color3(0.5, 0.5, 0.5)
    ..diffuseColor = new Math.Color3(0.5, 0.5, 0.5)
    ..ambientTextureCube = color
    ..diffuseTextureCube = color
    ..specularTextureCube = specular
    ..environmentTexture = environment
    ..reflectionTextureCube = specular
    ..reflectionColor = new Math.Color3(0.5, 0.5, 0.5)
    ..shininess = 10.0;

  new common.RadioGroup("shapes")
    ..add("Cube",         () { obj.shape = Shapes.cube(); })
    ..add("Cuboid",       () { obj.shape = Shapes.cuboid(); })
    ..add("Cylinder",     () { obj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",         () { obj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("LatLonSphere", () { obj.shape = Shapes.latLonSphere(10, 20); })
    ..add("IsoSphere",    () { obj.shape = Shapes.isosphere(2); })
    ..add("Sphere",       () { obj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); }, true )
    ..add("Toroid",       () { obj.shape = Shapes.toroid(); })
    ..add("Knot",         () { obj.shape = Shapes.knot(); });

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
