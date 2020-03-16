library ThreeDart.test.test021;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../../common/common.dart' as common;

void addLightBall(Techniques.MaterialLight tech, Scenes.EntityPass pass,
    double r, double g, double b, double yaw, double pitch, double roll) {
  Math.Color3 clr = new Math.Color3(r, g, b);

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.Constant.translate(0.0, 0.0, 2.0))
    ..add(new Movers.Rotator(deltaYaw: yaw, deltaPitch: pitch, deltaRoll: roll));

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
                ..add(new Movers.Constant.scale(0.1, 0.1, 0.1))
                ..add(mover))
    ..shape = Shapes.sphere()
    ..technique = (new Techniques.MaterialLight()
                ..emission.color = clr);

  Lights.Point point = new Lights.Point(
    mover: mover,
    color: clr,
    attenuation0: 1.0,
    attenuation1: 0.5,
    attenuation2: 0.15);

  tech.lights.add(point);
  pass.children.add(obj);
}

void main() {
  common.ShellPage page = new common.ShellPage("Test 041")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of the Gaussian blur technique with a solid blur value for the whole image."])
    ..addControlBoxes(["blurValue"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.UserRotator(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));
  Views.Perspective userCamera = new Views.Perspective(mover: mover);

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..ambient.color = new Math.Color3.gray(0.3)
    ..diffuse.color = new Math.Color3.gray(0.8)
    ..diffuse.texture2D = td.textureLoader.load2DFromFile("../resources/Test.png");

  Views.BackTarget backTarget = new Views.BackTarget(autoResize: true, clearColor: false);

  Scenes.EntityPass colorPass = new Scenes.EntityPass()
    ..children.add(new ThreeDart.Entity(shape: Shapes.cube()))
    ..technique = tech
    ..target = backTarget
    ..camera = userCamera;

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"))
    ..target = backTarget
    ..camera = userCamera;

  Scenes.GaussianBlur blurPass = new Scenes.GaussianBlur(
      colorTxt: backTarget.colorTexture);

  td.scene = new Scenes.Compound(passes: [skybox, colorPass, blurPass]);

  var setBlur = (double blurValue) {
    blurPass.blurValue = blurValue;
  };

  new common.RadioGroup("blurValue")
    ..add("0.0", () { setBlur(0.0); }, true)
    ..add("0.1", () { setBlur(0.1); })
    ..add("0.2", () { setBlur(0.2); })
    ..add("0.3", () { setBlur(0.3); })
    ..add("0.4", () { setBlur(0.4); })
    ..add("0.5", () { setBlur(0.5); })
    ..add("0.6", () { setBlur(0.6); })
    ..add("0.7", () { setBlur(0.7); })
    ..add("0.8", () { setBlur(0.8); })
    ..add("0.9", () { setBlur(0.9); })
    ..add("1.0", () { setBlur(1.0); });

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader", "glsl", 0, blurPass.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader", "glsl", 0, blurPass.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
