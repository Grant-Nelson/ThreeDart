// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test021;

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
  common.shellTest("Test 021", ["shapes"],
    "Test of multiple moving point lights.");

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();
  Movers.UserRoller roller = new Movers.UserRoller()
    ..ctrlPressed = true;

  Movers.Group redMover = new Movers.Group()
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 2.0)))
    ..add(new Movers.Rotater(deltaYaw: 0.3, deltaPitch: 0.0, deltaRoll: 0.0));

  ThreeDart.Entity redObj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
                ..add(new Movers.Constant(new Math.Matrix4.scale(0.1, 0.1, 0.1)))
                ..add(redMover))
    ..shape = Shapes.sphere()
    ..technique = (new Techniques.MaterialLight()
                ..emissionColor = new Math.Color3(1.0, 0.0, 0.0));

  Lights.Point redPoint = new Lights.Point(
    mover: redMover,
    color: new Math.Color3(1.0, 0.0, 0.0),
    attenuation0: 1.0,
    attenuation1: 0.5,
    attenuation2: 0.15);

  Movers.Group greenMover = new Movers.Group()
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 2.0)))
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.4, deltaRoll: 0.0));

  ThreeDart.Entity greenObj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
                ..add(new Movers.Constant(new Math.Matrix4.scale(0.1, 0.1, 0.1)))
                ..add(greenMover))
    ..shape = Shapes.sphere()
    ..technique = (new Techniques.MaterialLight()
                ..emissionColor = new Math.Color3(0.0, 1.0, 0.0));

  Lights.Point greenPoint = new Lights.Point(
    mover: greenMover,
    color: new Math.Color3(0.0, 1.0, 0.0),
    attenuation0: 1.0,
    attenuation1: 0.5,
    attenuation2: 0.15);

  Movers.Group blueMover = new Movers.Group()
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 2.0)))
    ..add(new Movers.Rotater(deltaYaw: 0.5, deltaPitch: 0.5, deltaRoll: 0.0));

  ThreeDart.Entity blueObj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
                ..add(new Movers.Constant(new Math.Matrix4.scale(0.1, 0.1, 0.1)))
                ..add(blueMover))
    ..shape = Shapes.sphere()
    ..technique = (new Techniques.MaterialLight()
                ..emissionColor = new Math.Color3(0.0, 0.0, 1.0));

  Lights.Point bluePoint = new Lights.Point(
    mover: blueMover,
    color: new Math.Color3(0.0, 0.0, 1.0),
    attenuation0: 1.0,
    attenuation1: 0.5,
    attenuation2: 0.15);

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(redPoint)
    ..lights.add(greenPoint)
    ..lights.add(bluePoint)
    ..ambientColor = new Math.Color3.gray(0.5)
    ..diffuseColor = new Math.Color3.gray(0.7)
    ..specularColor = new Math.Color3.gray(0.3)
    ..shininess = 100.0;

  ThreeDart.Entity centerObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant(new Math.Matrix4.scale(3.0, 3.0, 3.0))
    ..shape = (Shapes.cube()..flip());

  Movers.Group camMover = new Movers.Group()
  ..add(rotater)
  ..add(roller)
  ..add(zoom)
  ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(room)
    ..children.add(centerObj)
    ..children.add(redObj)
    ..children.add(greenObj)
    ..children.add(blueObj)
    ..camara.mover = camMover;

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  new common.RadioGroup("shapes")
    ..add("Cube",     () { centerObj.shape = Shapes.cube(); })
    ..add("Cylinder", () { centerObj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",     () { centerObj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("Sphere",   () { centerObj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Toroid",   () { centerObj.shape = Shapes.toroid(); }, true)
    ..add("Knot",     () { centerObj.shape = Shapes.knot(); });

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
