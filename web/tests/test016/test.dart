library ThreeDart.test.test016;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Views.dart' as Views;
import '../../common/common.dart' as common;

void main() {
  common.ShellPage page = new common.ShellPage("Test 016")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A test of the Material Lighting shader with cube texturing, ",
      "bump mapping, and a color directional light."])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Views.FrontTarget target = new Views.FrontTarget()
    ..clearColor = false;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.cube();

  Textures.TextureCube environment =
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg");
  Textures.TextureCube color = td.textureLoader.loadCubeFromPath("../resources/diceColor");
  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(1.0, -1.0, -3.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.2, 0.2, 0.2)
    ..diffuse.color = new Math.Color3(0.7, 0.7, 0.7)
    ..specular.color = new Math.Color3(0.7, 0.7, 0.7)
    ..ambient.textureCube = color
    ..diffuse.textureCube = color
    ..specular.textureCube = td.textureLoader.loadCubeFromPath("../resources/diceSpecular")
    ..specular.shininess = 10.0
    ..bump.textureCube = td.textureLoader.loadCubeFromPath("../resources/diceBumpMap")
    ..environment = environment
    ..reflection.color = new Math.Color3(0.3, 0.3, 0.3);

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
  (pass.target as Views.FrontTarget).clearColor = false;

  td.scene = new Scenes.Compound(passes: [skybox, pass]);

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
