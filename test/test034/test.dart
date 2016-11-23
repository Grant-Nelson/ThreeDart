// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test001;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Views.dart' as Views;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 034", [],
    "Test of resizing the render target.");

  Element canvas = document.getElementById("threeDart");
  canvas.style
    ..width = "100%"
    ..height = "100%"
    ..margin = "-2px";
  Element div = new DivElement();
  div.style
    ..border = "2px solid"
    ..padding = "10px"
    ..resize = "both"
    ..overflow = "auto";
  canvas.replaceWith(div);
  div.children.add(canvas);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));
  Views.Perspective userCamera = new Views.Perspective(mover: mover);

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..ambient.color = new Math.Color3.gray(0.3)
    ..diffuse.color = new Math.Color3.gray(0.8)
    ..diffuse.texture2D = td.textureLoader.load2DFromFile("../resources/Test.png");

  Views.FrontTarget target = new Views.FrontTarget()
    ..clearColor = false;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.cube();

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..children.add(obj)
    ..technique = tech
    ..target = target
    ..camera = userCamera;

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"))
  ..target = target
  ..camera = userCamera;

  td.scene = new Scenes.Compound(passes: [skybox, pass]);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
