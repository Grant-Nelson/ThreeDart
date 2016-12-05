// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test021;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void addLightBall(Techniques.MaterialLight tech, Scenes.EntityPass pass,
    double r, double g, double b, double yaw, double pitch, double roll) {
  Math.Color3 clr = new Math.Color3(r, g, b);

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 2.0)))
    ..add(new Movers.Rotater(deltaYaw: yaw, deltaPitch: pitch, deltaRoll: roll));

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
                ..add(new Movers.Constant(new Math.Matrix4.scale(0.1, 0.1, 0.1)))
                ..add(mover))
    ..shape = Shapes.sphere()
    ..technique = (new Techniques.MaterialLight()
                ..emission.color = clr);

  Lights.Point point = new Lights.Point(
    mover: mover,
    color: clr,
    attenuation0: 1.0,
    attenuation1: 0.5,
    attenuation2: 0.15);

  tech.lights.add(point);
  pass.children.add(obj);
}

void main() {
  common.shellTest("Test 021", ["shapes"],
    "Test of the Material Lighting shader with multiple moving point lights. "+
    "Emissive spheres are added at the lights sources.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  ThreeDart.Entity centerObj = new ThreeDart.Entity()
    ..mover = new Movers.Constant(new Math.Matrix4.scale(1.0, 1.0, 1.0))
    ..shape = Shapes.toroid();

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant(new Math.Matrix4.scale(3.0, 3.0, 3.0))
    ..shape = (Shapes.cube()..flip());

  Movers.Group camMover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..ambient.color = new Math.Color3.gray(0.4)
    ..diffuse.color = new Math.Color3.gray(0.4)
    ..specular.color = new Math.Color3.gray(0.3)
    ..specular.shininess = 100.0;

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(room)
    ..children.add(centerObj)
    ..camera.mover = camMover;
  td.scene = pass;
  addLightBall(tech, pass, 1.0, 0.0, 0.0, 0.3, 0.0, 0.0);
  addLightBall(tech, pass, 0.0, 1.0, 0.0, 0.0, 0.4, 0.0);
  addLightBall(tech, pass, 0.0, 0.0, 1.0, 0.5, 0.5, 0.0);

  new common.RadioGroup("shapes")
    ..add("Cube",     () { centerObj.shape = Shapes.cube(); })
    ..add("Cylinder", () { centerObj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",     () { centerObj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("Sphere",   () { centerObj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Toroid",   () { centerObj.shape = Shapes.toroid(); }, true)
    ..add("Knot",     () { centerObj.shape = Shapes.knot(); });

  common.showFPS(td);
}
