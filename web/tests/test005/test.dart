library ThreeDart.test.test005;

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
  common.ShellPage page = new common.ShellPage("Test 005")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A test of the Material Lighting shader with 2D textures and directional ",
      "lighting. This test has texturing for emission, ambient, diffuse, and ",
      "specular. The same texture is used for ambient and diffuse. ",
      "The emission texture makes the lights on the panel glow. ",
      "The specular texture makes specific parts shiny and other parts not."])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = (Shapes.cube()..adjustNormals())
    ..mover = new Movers.Rotator();

  Textures.Texture2D color = td.textureLoader.load2DFromFile("../resources/CtrlPnlColor.png");
  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(1.0, -1.0, -3.0),
          color: new Math.Color3.white()))
    ..emission.texture2D = td.textureLoader.load2DFromFile("../resources/CtrlPnlEmission.png")
    ..ambient.color = new Math.Color3(0.2, 0.2, 0.2)
    ..diffuse.color = new Math.Color3(0.8, 0.8, 0.8)
    ..ambient.texture2D = color
    ..diffuse.texture2D = color
    ..specular.texture2D = td.textureLoader.load2DFromFile("../resources/CtrlPnlSpecular.png")
    ..specular.shininess = 10.0;

  td.scene = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(obj)
    ..camera?.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
