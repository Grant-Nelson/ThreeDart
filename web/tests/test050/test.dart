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

part 'ParallaxShader.dart';
part 'ParallaxTechnique.dart';

void main() {
  common.ShellPage page = new common.ShellPage("Test 050")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A test of a parallax mapper shader."])
    ..addControlBoxes(["heightMaps", "bumpMaps", "colorMaps", "scalars"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Shapes.Shape shape = Shapes.cube();
  shape.calculateNormals();
  shape.calculateBinormals();

  ParallaxTechnique tech = new ParallaxTechnique()
    ..shininess = 10.0
    ..ambientColor  = new Math.Color3(0.2, 0.2, 0.2)
    ..diffuseColor  = new Math.Color3(0.8, 0.8, 0.8)
    ..specularColor = new Math.Color3.white();

  ThreeDart.Entity objTech = new ThreeDart.Entity()
    ..shape = shape
    ..technique = tech;

  ThreeDart.Entity group = new ThreeDart.Entity()
    ..children.add(objTech)
    ..mover = (new Movers.Group()
      ..add(new Movers.UserRotator(input: td.userInput, invertY: true))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput)));

  td.scene = new Scenes.EntityPass()
    ..children.add(group)
    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);

  new common.Texture2DGroup("heightMaps", (String fileName) {
    tech.heightTexture = td.textureLoader.load2DFromFile(fileName);
  })
    ..add("../resources/HeightMap1.png")
    ..add("../resources/HeightMap2.png")
    ..add("../resources/HeightMap3.png")
    ..add("../resources/HeightMap4.png")
    ..add("../resources/HeightMap5.png", true)
    ..add("../resources/ScrewHeightMap.png");

  new common.Texture2DGroup("bumpMaps", (String fileName) {
    tech.bumpTexture = td.textureLoader.load2DFromFile(fileName);
  })
    ..add("../resources/BumpMapFlat.png")
    ..add("../resources/BumpMap1.png")
    ..add("../resources/BumpMap2.png")
    ..add("../resources/BumpMap3.png")
    ..add("../resources/BumpMap4.png")
    ..add("../resources/BumpMap5.png")
    ..add("../resources/BumpMap6.png", true)
    ..add("../resources/ScrewBumpMap.png");
    
  new common.Texture2DGroup("colorMaps", (String fileName) {
    tech.colorTexture = td.textureLoader.load2DFromFile(fileName);
  })
    ..add("../resources/Dirt.png")
    ..add("../resources/Grass.png")
    ..add("../resources/ScrewColor.png")
    ..add("../resources/LightWood.png", true)
    ..add("../resources/DarkWood.png")
    ..add("../resources/Test.png");

  new common.RadioGroup("scalars")
    ..add("0.1", () { tech.heightScale = 0.1; })
    ..add("0.2", () { tech.heightScale = 0.2; })
    ..add("0.3", () { tech.heightScale = 0.3; })
    ..add("0.4", () { tech.heightScale = 0.4; })
    ..add("0.5", () { tech.heightScale = 0.5; })
    ..add("0.6", () { tech.heightScale = 0.6; })
    ..add("0.7", () { tech.heightScale = 0.7; })
    ..add("0.8", () { tech.heightScale = 0.8; })
    ..add("0.9", () { tech.heightScale = 0.9; })
    ..add("1.0", () { tech.heightScale = 1.0; }, true);

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
