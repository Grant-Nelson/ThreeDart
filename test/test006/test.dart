// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test006;

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

  Shapes.Shape shape = (Shapes.square()..adjustNormals());

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..light = new Lights.Directional(
        direction: new Math.Vector3(0.0, 0.0, -1.0),
        color: new Math.Color4.white());

  ThreeDart.Entity objTech = new ThreeDart.Entity()
    ..shape = shape
    ..technique = tech;

  ThreeDart.Entity objInspecTech = new ThreeDart.Entity()
    ..shape = shape
    ..technique = (new Techniques.Inspection()
        ..vectorScale = 0.4
        ..showWireFrame = true
        ..showAxis = true
        ..showNormals = true
        ..showBinormals = true);

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();

  ThreeDart.Entity group = new ThreeDart.Entity()
    ..children.add(objInspecTech)
    ..children.add(objTech)
    ..mover = (new Movers.Group()
      ..add(rotater)
      ..add(zoom));

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..children.add(group)
    ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  tech.material = new Materials.BumpySolid(
    emission: new Math.Color4.transparent(),
    ambient: new Math.Color4(0.0, 0.0, 1.0),
    diffuse: new Math.Color4(0.0, 1.0, 0.0),
    specular: new Math.Color4(1.0, 0.0, 0.0),
    bumpMap: td.textureLoader.load2DFromFile("./BumpMap.png"),
    shininess: 10.0);

  rotater.attach(td.userInput);
  zoom.attach(td.userInput);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
