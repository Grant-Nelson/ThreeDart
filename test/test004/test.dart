// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test004;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 004", [],
    "Test of repeat use of a single mover and shape. There are 9 rings "+
    "moving at the same speed, however the second one is attached to "+
    "the first, the third to the second, and so on.");

  Movers.Rotater rotater = new Movers.Rotater()
    ..deltaYaw = 0.51
    ..deltaPitch = 0.71
    ..deltaRoll = 0.92;

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.Constant(new Math.Matrix4.scale(0.8, 0.8, 0.8)))
    ..add(rotater);

  Shapes.Shape shape = Shapes.toroid(minorRadius: 0.2, majorRadius: 2.0);

  ThreeDart.Entity obj0 = new ThreeDart.Entity(shape: shape, mover: mover);
  ThreeDart.Entity obj1 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj0);
  ThreeDart.Entity obj2 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj1);
  ThreeDart.Entity obj3 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj2);
  ThreeDart.Entity obj4 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj3);
  ThreeDart.Entity obj5 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj4);
  ThreeDart.Entity obj6 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj5);
  ThreeDart.Entity obj7 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj6);
  ThreeDart.Entity obj8 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj7);

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0)
    ..children.add(obj8)
    ..camera.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  common.showFPS(td);
}
