library ThreeDart.test.test008;

import 'dart:web_gl' as WebGL;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Shaders.dart' as Shaders;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Events.dart' as Events;
import 'package:ThreeDart/Data.dart' as Data;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../../common/common.dart' as common;

part 'BumpyShader.dart';
part 'BumpyTechnique.dart';

void main() {
  new common.ShellPage("Test 008")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A custom shader for testing and fixing the normal distortion ",
      "equation used for bump maps. This displays the normal vectors ",
      "across a surface."])
    ..addControlBoxes(["bumpMaps", "scalars"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Shapes.Shape shape = Shapes.grid(widthDiv: 50, heightDiv: 50);
  shape.calculateNormals();
  shape.calculateBinormals();
  shape.faces.removeAll();
  for (int i = shape.vertices.length-1; i >= 0; i--) {
    Shapes.Vertex ver1 = shape.vertices[i]..weight = 0.0;
    Shapes.Vertex ver2 = ver1.copy()..weight = 1.0;
    shape.vertices.add(ver2);
    shape.lines.add(ver1, ver2);
  }

  BumpyTechnique tech = new BumpyTechnique()
    ..offsetScalar = 0.5;

  ThreeDart.Entity objTech = new ThreeDart.Entity()
    ..shape = shape
    ..technique = tech;

  ThreeDart.Entity group = new ThreeDart.Entity()
    ..children.add(objTech)
    ..mover = (new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput, invertY: true))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput)));

  td.scene = new Scenes.EntityPass()
    ..children.add(group)
    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);

  new common.Texture2DGroup("bumpMaps", (String fileName) {
    tech.bumpyTexture = td.textureLoader.load2DFromFile(fileName);
  })
    ..add("../resources/BumpMap1.png", true)
    ..add("../resources/BumpMap2.png")
    ..add("../resources/BumpMap3.png")
    ..add("../resources/BumpMap4.png")
    ..add("../resources/BumpMap5.png")
    ..add("../resources/ScrewBumpMap.png")
    ..add("../resources/CtrlPnlBumpMap.png");

  new common.RadioGroup("scalars")
    ..add("0.1", () { tech.offsetScalar = 0.1; })
    ..add("0.2", () { tech.offsetScalar = 0.2; })
    ..add("0.3", () { tech.offsetScalar = 0.3; })
    ..add("0.4", () { tech.offsetScalar = 0.4; })
    ..add("0.5", () { tech.offsetScalar = 0.5; }, true)
    ..add("0.6", () { tech.offsetScalar = 0.6; })
    ..add("0.7", () { tech.offsetScalar = 0.7; })
    ..add("0.8", () { tech.offsetScalar = 0.8; })
    ..add("0.9", () { tech.offsetScalar = 0.9; })
    ..add("1.0", () { tech.offsetScalar = 1.0; });

  common.showFPS(td);
}
