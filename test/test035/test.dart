// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test035;

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
  common.shellTest("Test 035", ["shapes"],
    "A test of the bending a shape with the Material Light Shader.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = new Movers.Constant();

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(1.0, 1.0, -3.0)),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuse.color = new Math.Color3(0.0, 1.0, 0.0)
    ..specular.color = new Math.Color3(1.0, 0.0, 0.0)
    ..specular.shininess = 10.0
    ..bendMatrices.add(new Math.Matrix4.identity())
    ..bendMatrices.add(new Math.Matrix4.identity())
    ;

  Movers.Group camMover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));

  Movers.Mover mover1 = new Movers.Group()
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: -1.7))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.25, 0.0, 0.0)))
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: 1.7));

  Movers.Mover mover2 = new Movers.Group()
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: -1.4))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.25, 0.0, 0.0)))
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: 1.4));

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..tech = tech
    ..children.add(obj)
    ..camera.mover = camMover
    ..onPreUpdate.add((ThreeDart.StateEventArgs args) {
      tech.bendMatrices[0] = mover1.update(args.state, null);
      tech.bendMatrices[1] = mover2.update(args.state, null);
    });
  td.scene = pass;

  // Techniques.Inspection inspTech = new Techniques.Inspection()
  //   ..showWireFrame = true
  //   ..showAxis = true;
  //
  // Shapes.Shape inspShap = Shapes.cube()
  //   ..applyPositionMatrix(new Math.Matrix4.scale(0.1, 0.1, 0.1));
  //
  // pass.children.add(new ThreeDart.Entity(
  //   mover: new Movers.Constant(), shape: inspShap, tech: inspTech));
  //
  // pass.children.add(new ThreeDart.Entity(
  //   mover: mover1, shape: inspShap, tech: inspTech));
  //
  // pass.children.add(new ThreeDart.Entity(
  //   mover: mover2, shape: inspShap, tech: inspTech));

  void setShape(Shapes.Shape shape) {
    shape.calculateNormals();
    obj.shape = shape;
  }

  new common.RadioGroup("shapes")
    ..add("Cuboid",   () { setShape(Shapes.cuboid(widthDiv: 30, heightDiv: 30)); }, true)
    ..add("Cylinder", () { setShape(Shapes.cylinder(div: 100, sides: 20)); })
    ..add("Cone",     () { setShape(Shapes.cylinder(topRadius: 0.0, sides: 12, capTop: false, div: 30)); })
    ..add("Sphere",   () { setShape(Shapes.sphere(widthDiv: 20, heightDiv: 20)); })
    ..add("Toroid",   () { setShape(Shapes.toroid(minorRadius: 0.25, majorRadius: 1.5)); })
    ..add("Knot",     () { setShape(Shapes.knot(minorRadius: 0.1)); });

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
