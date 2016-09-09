// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test028;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 028", [],
    "Test of a Gaussian blur cover pass. "+
    "Notice the depth of field causing things further away to be blurry.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  Movers.Group secondMover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));
  Views.Perspective userCamara = new Views.Perspective(mover: secondMover);

  ThreeDart.Entity cubeEntity = new ThreeDart.Entity(shape: Shapes.cube());
  ThreeDart.Entity group = new ThreeDart.Entity();
  for (double x = -1.6; x <= 1.7; x += 0.8) {
    for (double y = -1.6; y <= 1.7; y += 0.8) {
      for (double z = -1.6; z <= 1.7; z += 0.8) {
        Math.Matrix4 mat = new Math.Matrix4.translate(x, y, z)*
                           new Math.Matrix4.scale(0.2, 0.2, 0.2);
        ThreeDart.Entity entity = new ThreeDart.Entity()
          ..mover = new Movers.Constant(mat)
          ..children.add(cubeEntity);
        group.children.add(entity);
      }
    }
  }

  Textures.TextureCube color = td.textureLoader.loadCubeFromPath("../resources/diceColor");
  Techniques.MaterialLight colorTech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(-1.0, -1.0, -1.0)),
          color: new Math.Color3(1.0, 0.9, 0.9)))
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant(new Math.Matrix4.vectorTowards(1.0, 1.0, 2.0)),
          color: new Math.Color3(0.2, 0.2, 0.35)))
    ..ambient.color = new Math.Color3(0.2, 0.2, 0.2)
    ..ambient.textureCube = color
    ..diffuse.color = new Math.Color3(0.8, 0.8, 0.8)
    ..diffuse.textureCube = color
    ..specular.color = new Math.Color3(0.7, 0.7, 0.7)
    ..specular.shininess = 10.0
    ..bump.textureCube = td.textureLoader.loadCubeFromPath("../resources/diceBumpMap");

  Views.BackTarget colorTarget = new Views.BackTarget(800, 600)
    ..clearColor = false;

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"))
    ..camara = userCamara
    ..target = colorTarget;

  Scenes.EntityPass colorPass = new Scenes.EntityPass()
    ..camara = userCamara
    ..target = colorTarget
    ..tech = colorTech
    ..children.add(group);

  Views.BackTarget depthTarget = new Views.BackTarget(400, 300);
  Scenes.EntityPass depthPass = new Scenes.EntityPass()
    ..camara = userCamara
    ..target = depthTarget
    ..tech = new Techniques.Depth(fogStart: 3.5, fogStop: 5.5)
    ..children.add(group);

  Scenes.CoverPass blurPass = new Scenes.CoverPass()
    ..tech = new Techniques.GaussianBlur(
      colorTxt: colorTarget.colorTexture,
      depthTxt: depthTarget.colorTexture,
      highOffset: 0.0,
      lowOffset: 8.0,
      depthLimit: 0.001);

  Techniques.TextureLayout layoutTech = new Techniques.TextureLayout()
    ..entries.add(new Techniques.TextureLayoutEntry(
      texture: depthTarget.colorTexture,
      destination: new Math.Region2(0.0, 0.8, 0.2, 0.2)))
    ..entries.add(new Techniques.TextureLayoutEntry(
      texture: colorTarget.colorTexture,
      destination: new Math.Region2(0.0, 0.6, 0.2, 0.2)));
  Scenes.CoverPass layout = new Scenes.CoverPass()
    ..target = new Views.FrontTarget(clearColor: false)
    ..tech = layoutTech;

  td.scene = new Scenes.Compound(passes: [skybox, colorPass, depthPass, blurPass, layout]);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
