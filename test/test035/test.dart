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
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 035", [],
    "A test of the Material Light Shader with a solid color directional lighting.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  Shapes.Shape shape = Shapes.cuboid(widthDiv: 100, heightDiv: 100)
    ..calculateBending(new Shapes.ExpVertexMeasure(
      new Shapes.DirectionalVertexMeasure(
        center: new Math.Point3(0.0, 0.0, -1.0),
        vector: new Math.Vector3(0.0, 0.0, 2.0)),
      1.0, 3.0))
    ..applyPositionMatrix(new Math.Matrix4.scale(0.25, 0.25, 2.0));

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = shape
    ..mover = new Movers.Constant();

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(1.0, 1.0, -3.0)),
          color: new Math.Color3.white()))
    ..ambientColor = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuseColor = new Math.Color3(0.0, 1.0, 0.0)
    ..specularColor = new Math.Color3(1.0, 0.0, 0.0)
    ..shininess = 10.0
    ..bendMatrices.add(new Math.Matrix4.identity())
    ..bendMatrices.add(new Math.Matrix4.identity())
    ..bendMatrices.add(new Math.Matrix4.identity());

  Movers.Group camMover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));

  Movers.Mover mover1 = new Movers.Group()
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: -0.7))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.5, 0.0, 0.0)))
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: 0.7));

  Movers.Mover mover2 = new Movers.Group()
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: -1.0))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.5, 0.0, 0.0)))
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: 1.0));

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = camMover
    ..onPreUpdate.add((ThreeDart.StateEventArgs args) {
      tech.bendMatrices[0] = mover1.update(args.state, null);
      tech.bendMatrices[1] = mover2.update(args.state, null);
      tech.bendMatrices[2] = new Math.Matrix4.identity();
    });
  td.scene = pass;

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
