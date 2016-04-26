// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test022;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 022", ["shapes"],
    "Test of multiple moving point lights.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");
  Textures.TextureCube texture = td.textureLoader.loadCubeFromPath("../resources/earthColor");

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();
  Movers.UserRoller roller = new Movers.UserRoller()
    ..ctrlPressed = true;
  rotater.attach(td.userInput);
  zoom.attach(td.userInput);
  roller.attach(td.userInput);

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 2.0)))
    ..add(new Movers.Rotater(deltaYaw: 0.5, deltaPitch: 0.5, deltaRoll: 0.0));

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
                ..add(new Movers.Constant(new Math.Matrix4.scale(0.2, 0.2, 0.2)))
                ..add(mover))
    ..shape = Shapes.sphere()
    ..technique = (new Techniques.MaterialLight()
                ..emissionTextureCube = texture);

  Lights.TexturedPoint objPoint = new Lights.TexturedPoint(
    mover: mover,
    texture: texture,
    attenuation0: 1.0,
    attenuation1: 0.15,
    attenuation2: 0.05);

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(objPoint)
    ..ambientColor = new Math.Color3.gray(0.2)
    ..diffuseColor = new Math.Color3.gray(1.0)
    ..specularColor = new Math.Color3.gray(1.0)
    ..shininess = 100.0;

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant(new Math.Matrix4.scale(3.0, 3.0, 3.0))
    ..shape = (Shapes.cube()..flip());

  ThreeDart.Entity centerObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  Movers.Group camMover = new Movers.Group()
  ..add(rotater)
  ..add(roller)
  ..add(zoom)
  ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(room)
    ..children.add(centerObj)
    ..children.add(obj)
    ..camara.mover = camMover;
  td.scene = pass;

  new common.RadioGroup("shapes")
    ..add("Cube",     () { centerObj.shape = Shapes.cube(); })
    ..add("Cylinder", () { centerObj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",     () { centerObj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("Sphere",   () { centerObj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Toroid",   () { centerObj.shape = Shapes.toroid(); }, true)
    ..add("Knot",     () { centerObj.shape = Shapes.knot(); });

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
