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

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.cuboid(widthDiv: 20, heightDiv: 20)
    ..mover = new Movers.Rotater();
  obj.shape.calculateBending();

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(1.0, 1.0, -3.0)),
          color: new Math.Color3.white()))
    ..ambientColor = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuseColor = new Math.Color3(0.0, 1.0, 0.0)
    ..specularColor = new Math.Color3(1.0, 0.0, 0.0)
    ..shininess = 10.0
    ..blendMatrices.add(new Math.Matrix4.identity());

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
