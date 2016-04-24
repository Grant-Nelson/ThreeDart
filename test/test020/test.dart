// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test020;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 020", ["shapes"],
    "Test of multiple moving directional lights.");

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();
  Movers.UserRoller roller = new Movers.UserRoller()
    ..ctrlPressed = true;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  Lights.Directional redDir = new Lights.Directional(
    mover: new Movers.Rotater(deltaYaw: 0.3, deltaPitch: 0.0, deltaRoll: 0.0),
    color: new Math.Color3(1.0, 0.0, 0.0));

  Lights.Directional greenDir = new Lights.Directional(
    mover: new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.4, deltaRoll: 0.0),
    color: new Math.Color3(0.0, 1.0, 0.0));

  Lights.Directional blueDir = new Lights.Directional(
    mover: new Movers.Rotater(deltaYaw: 0.5, deltaPitch: 0.5, deltaRoll: 0.0),
    color: new Math.Color3(0.0, 0.0, 1.0));

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(redDir)
    ..lights.add(greenDir)
    ..lights.add(blueDir)
    ..emissionColor = new Math.Color3.black()
    ..ambientColor = new Math.Color3.gray(0.1)
    ..diffuseColor = new Math.Color3.gray(0.7)
    ..specularColor = new Math.Color3.gray(0.3)
    ..shininess = 100.0;

  Movers.Group camMover = new Movers.Group()
  ..add(rotater)
  ..add(roller)
  ..add(zoom)
  ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = camMover;

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  new common.RadioGroup("shapes")
    ..add("Cube",         () { obj.shape = Shapes.cube(); })
    ..add("Cylinder",     () { obj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",         () { obj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("Sphere",       () { obj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Toroid",       () { obj.shape = Shapes.toroid(); }, true)
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
