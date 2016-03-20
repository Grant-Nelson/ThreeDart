// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test009;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Materials.dart' as Materials;

void main() {

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();
  Movers.UserRoller roller = new Movers.UserRoller()
    ..ctrlPressed = true;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();
    //..mover = new Movers.Rotater();

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..light = new Lights.Directional(
          direction: new Math.Vector3(-1.0, -1.0, -1.0),
          color: new Math.Color4.white())
    ..material = new Materials.Solid(
          emission: new Math.Color4.black(),
          ambient: new Math.Color4(0.0, 0.0, 1.0),
          diffuse: new Math.Color4(0.0, 1.0, 0.0),
          specular: new Math.Color4(1.0, 0.0, 0.0),
          shininess: 10.0);

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = (new Movers.Group()
      ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)))
      ..add(rotater)
      ..add(roller)
      ..add(zoom));

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

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
