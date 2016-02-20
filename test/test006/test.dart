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

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = (Shapes.square()..adjustNormals())
    ..mover = (new Movers.Group()
      ..add(rotater)
      ..add(zoom));

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..light = new Lights.Directional(
          direction: new Math.Vector3(1.0, 1.0, -2.0),
          color: new Math.Color3.white());

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  tech.material = new Materials.BumpyTexture2D(
    emission: td.textureLoader.load2DFromFile("./Emission.png"),
    ambient: new Math.Color3(0.2, 0.2, 0.2),
    diffuse: new Math.Color3(0.8, 0.8, 0.8),
    color: td.textureLoader.load2DFromFile("./Color.png"),
    bumpMap: td.textureLoader.load2DFromFile("./BumpMap.png"),
    specular: td.textureLoader.load2DFromFile("./Specular.png"),
    shininess: 100.0);

  rotater.attach(td.userInput);
  zoom.attach(td.userInput);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
