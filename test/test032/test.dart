// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test032;

import 'dart:async';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/IO.dart' as IO;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 032", ["controls", "shapes", "scalars"],
    "The inspection test for shapes loaders. "+
    "For generated shapes see test002. "+
    "Note: Some shapes will take time to load.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  bool showMtrl = true;
  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput)));

  Techniques.Inspection tech = new Techniques.Inspection()
    ..vectorScale = 0.4;

  td.scene = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(obj)
    ..camera.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  new common.CheckGroup("controls")
    ..add("Material", (bool show) {
      showMtrl = show;
      if (obj.children.length > 1) obj.children[0].enabled = showMtrl;
    }, true)
    ..add("Filled",          (bool show) { tech.showFilled         = show; })
    ..add("Wire Frame",      (bool show) { tech.showWireFrame      = show; }, true)
    ..add("Vertices",        (bool show) { tech.showVertices       = show; })
    ..add("Normals",         (bool show) { tech.showNormals        = show; })
    ..add("Binormals",       (bool show) { tech.showBinormals      = show; })
    ..add("Tangentals",      (bool show) { tech.showTangentals     = show; })
    ..add("Face Centers",    (bool show) { tech.showFaceCenters    = show; })
    ..add("Face Normals",    (bool show) { tech.showFaceNormals    = show; })
    ..add("Face Binormals",  (bool show) { tech.showFaceBinormals  = show; })
    ..add("Face Tangentals", (bool show) { tech.showFaceTangentals = show; })
    ..add("Colors",          (bool show) { tech.showColorFill      = show; })
    ..add("Textures2D",      (bool show) { tech.showTxt2DColor     = show; })
    ..add("TexturesCube",    (bool show) { tech.showTxtCube        = show; })
    ..add("Weight",          (bool show) { tech.showWeight         = show; })
    ..add("Axis",            (bool show) { tech.showAxis           = show; }, true)
    ..add("AABB",            (bool show) { tech.showAABB           = show; });

  ThreeDart.Entity copyEntity(ThreeDart.Entity entity) {
    ThreeDart.Entity copy = new ThreeDart.Entity();
    copy.shape = entity.shape;
    entity.children.forEach((ThreeDart.Entity child) {
      copy.children.add(copyEntity(child));
    });
    return copy;
  }

  Future setEntity(String objFile) async {
    ThreeDart.Entity entity = await IO.ObjLoader.fromFile(objFile, td.textureLoader);
    entity.resizeCenter(3.5);
    obj.children.clear();
    obj.children.add(entity);
    entity.enabled = showMtrl;
    ThreeDart.Entity other = copyEntity(entity);
    other.technique = tech;
    obj.children.add(other);
  }

  new common.RadioGroup("shapes")
    ..add("Cube",          () async { setEntity("../resources/Cube.obj");         }, true)
    ..add("Low Poly Tree", () async { setEntity("../resources/tree/tree.obj");    })
    ..add("Low Poly Wolf", () async { setEntity("../resources/Wolf.obj");         })
    ..add("Plant",         () async { setEntity("../resources/plant/plant.obj");  });

  new common.RadioGroup("scalars")
    ..add("0.01", () { tech.vectorScale = 0.01; })
    ..add("0.02", () { tech.vectorScale = 0.02; })
    ..add("0.04", () { tech.vectorScale = 0.04; })
    ..add("0.06", () { tech.vectorScale = 0.06; })
    ..add("0.08", () { tech.vectorScale = 0.08; })
    ..add("0.1", () { tech.vectorScale = 0.1; })
    ..add("0.2", () { tech.vectorScale = 0.2; })
    ..add("0.4", () { tech.vectorScale = 0.4; }, true)
    ..add("0.6", () { tech.vectorScale = 0.6; })
    ..add("0.8", () { tech.vectorScale = 0.8; })
    ..add("1.0", () { tech.vectorScale = 1.0; });

  common.showFPS(td);
}
