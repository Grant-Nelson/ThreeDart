// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test032;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/IO.dart' as IO;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 032", ["controls", "shapes"],
    "The inspection test for shapes loaders. "+
    "For generated shapes see test002. "+
    "Note: Some shapes will take time to load and WireFrame takes longer.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  bool showMtrl = true;
  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput)));

  Techniques.Inspection tech = new Techniques.Inspection()
    ..vectorScale = 0.4;

  td.scene = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

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

  void setEntity(ThreeDart.Entity entity) {
    entity.resizeCenter();
    obj.children.clear();
    obj.children.add(entity);
    entity.enabled = showMtrl;
    ThreeDart.Entity other = copyEntity(entity);
    other.technique = tech;
    obj.children.add(other);
  }

  new common.RadioGroup("shapes")
    ..add("Cube.obj",  () async { setEntity(await IO.ObjLoader.fromFile("../resources/Cube.obj"));        }, true)
    ..add("Tree.obj",  () async { setEntity(await IO.ObjLoader.fromFile("../resources/Tree.obj"));        }, false)
    ..add("Wolf.obj",  () async { setEntity(await IO.ObjLoader.fromFile("../resources/Wolf.obj"));        }, false)
    ..add("plant.obj", () async { setEntity(await IO.ObjLoader.fromFile("../resources/plant/plant.obj")); }, false);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
