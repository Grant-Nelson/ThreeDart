library ThreeDart.test.test019;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Views.dart' as Views;
import '../../common/common.dart' as common;

void main() {
  common.ShellPage page = new common.ShellPage("Test 019")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A test of the Material Lighting shader with an alpha texture. ",
      "There are no mapped reflections, this is actually transparent."])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.cube();

  Views.FrontTarget target = new Views.FrontTarget()
    ..clearColor = false;

  Textures.TextureCube environment =
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg");
  Textures.Texture2D color = td.textureLoader.load2DFromFile("../resources/AlphaWeave.png");
  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(1.0, -2.0, -3.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.5, 0.5, 0.5)
    ..diffuse.color = new Math.Color3(0.6, 0.6, 0.6)
    ..ambient.texture2D = color
    ..diffuse.texture2D = color
    ..alpha.texture2D = color;

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.UserRotator(input: td.userInput))
    ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));

  Views.Perspective camera = new Views.Perspective(mover: mover);

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(environment)
    ..target = target
    ..camera = camera;

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..camera = camera
    ..technique = tech
    ..target = target
    ..children.add(obj);

  td.scene = new Scenes.Compound(passes: [skybox, pass]);

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
