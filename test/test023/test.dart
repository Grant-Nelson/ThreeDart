// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test023;

import 'dart:html';
import 'dart:math';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 023", ["shapes"],
    "Test of a textured directional light. Use Ctrl plus the mouse to move the light.");

  Movers.UserRotater viewRotater = new Movers.UserRotater();
  Movers.UserRotater objRotater = new Movers.UserRotater()
    ..ctrlPressed = true;

  Lights.TexturedDirectional txtDir = new Lights.TexturedDirectional(
    mover: objRotater,
    color: new Math.Color3(0.6, 0.9, 1.0));

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(txtDir)
    ..emissionColor = new Math.Color3.black()
    ..ambientColor = new Math.Color3.gray(0.0)
    ..diffuseColor = new Math.Color3.gray(0.7)
    ..specularColor = new Math.Color3.gray(0.3)
    ..shininess = 100.0;

  ThreeDart.Entity centerObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant(new Math.Matrix4.scale(3.0, 3.0, 3.0))
    ..shape = (Shapes.cube()..flip());

  Movers.Group camMover = new Movers.Group()
  ..add(viewRotater)
  ..add(new Movers.Constant(new Math.Matrix4.rotateX(PI)))
  ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(centerObj)
    ..children.add(room)
    ..camara.mover = camMover;

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  txtDir.texture = td.textureLoader.load2DFromFile("../resources/WaterShine3.png", wrapEdges: true);

  new common.RadioGroup("shapes")
    ..add("Cube",     () { centerObj.shape = Shapes.cube(); })
    ..add("Cylinder", () { centerObj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",     () { centerObj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("Sphere",   () { centerObj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Toroid",   () { centerObj.shape = Shapes.toroid(); }, true)
    ..add("Knot",     () { centerObj.shape = Shapes.knot(); });

  viewRotater.attach(td.userInput);
  objRotater.attach(td.userInput);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
