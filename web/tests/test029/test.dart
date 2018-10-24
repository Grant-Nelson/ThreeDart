library ThreeDart.test.test029;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../../common/common.dart' as common;

void main() {
  common.ShellPage page = new common.ShellPage("Test 029")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of bump distort pass. It renders the scene to a back buffer then ",
      "paints that back buffer texture to the front buffer with a distortion."])
    ..addControlBoxes(["bumpMaps"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));
  Views.Perspective userCamera = new Views.Perspective(mover: mover);

  Views.BackTarget colorTarget = new Views.BackTarget(800, 600, autoResize: true)
    ..clearColor = false;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(0.0, -1.0, -1.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuse.color = new Math.Color3(0.0, 1.0, 0.0)
    ..specular.color = new Math.Color3(1.0, 0.0, 0.0)
    ..specular.shininess = 10.0;

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"))
    ..target = colorTarget
    ..camera = userCamera;

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..camera = userCamera
    ..technique = tech
    ..target = colorTarget
    ..children.add(obj);

  Techniques.Distort distortTech = new Techniques.Distort()
    ..colorTexture = colorTarget.colorTexture
    ..bumpMatrix = new Math.Matrix4.scale(0.05, 0.05, 0.05);
  Scenes.CoverPass distortPass = new Scenes.CoverPass()
    ..technique = distortTech;

  td.scene = new Scenes.Compound(passes: [skybox, pass, distortPass]);

  new common.Texture2DGroup("bumpMaps", (String fileName) {
    distortTech.bumpTexture = td.textureLoader.load2DFromFile(fileName);
  })
    ..add("../resources/BumpMap1.png", true)
    ..add("../resources/BumpMap2.png")
    ..add("../resources/BumpMap3.png")
    ..add("../resources/BumpMap4.png")
    ..add("../resources/BumpMap5.png")
    ..add("../resources/ScrewBumpMap.png")
    ..add("../resources/CtrlPnlBumpMap.png");

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader for distort", "glsl", 0, distortTech.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader for distort", "glsl", 0, distortTech.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
