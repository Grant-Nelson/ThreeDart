library ThreeDart.test.test039;

import 'dart:async';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Textures.dart' as Textures;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Test 039")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of an animated texture on a square."])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = (Shapes.cube()..adjustNormals())
    ..mover = new Movers.Rotater();

  Textures.Texture2DChanger color = new Textures.Texture2DChanger(
    textures:List<Textures.Texture2D>.from([
      td.textureLoader.load2DFromFile("../resources/diceColor/posx.png"),
      td.textureLoader.load2DFromFile("../resources/diceColor/posz.png"),
      td.textureLoader.load2DFromFile("../resources/diceColor/negx.png"),
      td.textureLoader.load2DFromFile("../resources/diceColor/negy.png"),
      td.textureLoader.load2DFromFile("../resources/diceColor/posy.png"),
      td.textureLoader.load2DFromFile("../resources/diceColor/negz.png"),
    ]));

  Timer.periodic(new Duration(milliseconds: 500), (_) => color.nextTexture());

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(1.0, -1.0, -3.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.2, 0.2, 0.2)
    ..diffuse.color = new Math.Color3(0.8, 0.8, 0.8)
    ..ambient.texture2D = color
    ..diffuse.texture2D = color;

  td.scene = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(obj)
    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);

  common.showFPS(td);
}
