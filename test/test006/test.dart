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
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 006", ["bumpMaps"],
    "A test of the Bumpy Texture 2D Directional Lighting Shader.");

  Shapes.Shape shape = Shapes.cube();

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
  Movers.UserRoller roller = new Movers.UserRoller()
    ..ctrlPressed = true;

  ThreeDart.Entity group = new ThreeDart.Entity()
    ..children.add(objInspecTech)
    ..children.add(objTech)
    ..mover = (new Movers.Group()
      ..add(rotater)
      ..add(roller)
      ..add(zoom));

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..children.add(group)
    ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  Materials.BumpySolid material = new Materials.BumpySolid(
    emission: new Math.Color4.transparent(),
    ambient: new Math.Color4(0.0, 0.0, 1.0),
    diffuse: new Math.Color4(0.0, 1.0, 0.0),
    specular: new Math.Color4(1.0, 0.0, 0.0),
    bumpMap: null,
    shininess: 10.0);
  tech.material = material;

  rotater.attach(td.userInput);
  zoom.attach(td.userInput);
  roller.attach(td.userInput);

  _addBumpMap("../resources/BumpMap1.png", td, material, true);
  _addBumpMap("../resources/BumpMap2.png", td, material);
  _addBumpMap("../resources/BumpMap3.png", td, material);
  _addBumpMap("../resources/BumpMap4.png", td, material);
  _addBumpMap("../resources/BumpMap5.png", td, material);
  _addBumpMap("../resources/ScrewBumpMap.png", td, material);
  _addBumpMap("../resources/CtrlPnlBumpMap.png", td, material);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}

void _addBumpMap(String fileName, ThreeDart.ThreeDart td,
                 Materials.BumpySolid material, [bool checked = false]) {
  Element elem = document.getElementById("bumpMaps");
  ImageElement imgElem = new ImageElement()
    ..src = fileName
    ..width = 64
    ..height = 64
    ..style.border = "solid 2px white";
  imgElem.onClick.listen((_) {
      elem.children.forEach((Element elem) {
        if (elem is ImageElement) {
          elem.style.border = "solid 2px white";
        }
      });
      imgElem.style.border = "solid 2px black";
      material.bumpMap = td.textureLoader.load2DFromFile(fileName);
    });
  elem.children.add(imgElem);
  elem.children.add(new BRElement());
  if (checked) imgElem.click();
}
