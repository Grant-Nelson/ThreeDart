// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test038;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 038", [],
    "A test of basic 3D movement around a room.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(1.0, 1.0, -3.0)),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuse.color = new Math.Color3(0.0, 1.0, 0.0)
    ..specular.color = new Math.Color3(1.0, 0.0, 0.0)
    ..specular.shininess = 10.0;

  ThreeDart.Entity obj1 = new ThreeDart.Entity()
    ..shape = Shapes.cube()
    ..technique = tech
    ..mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, -10.0));

  Textures.Texture2D floorTxt = td.textureLoader.load2DFromFile("../resources/Grass.png", wrapEdges: true);
  ThreeDart.Entity floor = new ThreeDart.Entity()
    ..shape = Shapes.grid(widthDiv: 10, heightDiv: 10)
    ..technique = tech
    ..mover = (new Movers.Constant(
      new Math.Matrix4.translate(0.0, -3.0, 0.0)*
      new Math.Matrix4.scale(100.0, 1.0, 100.0)*
      new Math.Matrix4.rotateX(-Math.PI_2)))
    ..technique = (new Techniques.MaterialLight()
      ..texture2DMatrix = new Math.Matrix3.scale(100.0, 100.0, 1.0)
      ..lights.add(new Lights.Directional(
            mover: new Movers.Constant(new Math.Matrix4.vectorTowards(0.0, -3.0, 0.0)),
            color: new Math.Color3.white()))
      ..ambient.color = new Math.Color3(0.5, 0.5, 0.5)
      ..diffuse.color = new Math.Color3(0.5, 0.5, 0.5)
      ..ambient.texture2D = floorTxt
      ..diffuse.texture2D = floorTxt);

  ThreeDart.Entity group = new ThreeDart.Entity()
    ..children.add(floor)
    ..children.add(obj1);

  Movers.Group camera = (new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput)));

  td.scene = new Scenes.EntityPass()
    ..children.add(group)
    ..camera.mover = camera;

  common.showFPS(td);
}
