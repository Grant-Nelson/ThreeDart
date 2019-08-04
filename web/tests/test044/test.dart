library ThreeDart.test.test044;

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

part 'DeepTextureShader.dart';
part 'DeepTextureTechnique.dart';

void main() {
  common.ShellPage page = new common.ShellPage("Test 044")
    ..addLargeCanvas("testCanvas")
    ..addPar(["TBD"]) // TODO: Add descriptions
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  DeepTextureTechnique tech = new DeepTextureTechnique()
    ..colorTexture = td.textureLoader.load2DFromFile("../resources/Dirt.png")
    ..depthTexture = td.textureLoader.load2DFromFile("../resources/HeightMap4.png");

  ThreeDart.Entity objTech = new ThreeDart.Entity()
    ..shape = Shapes.square()
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

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
