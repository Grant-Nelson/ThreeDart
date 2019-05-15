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
    ..add(new Movers.Rotater(deltaYaw: yaw, deltaPitch: pitch, deltaRoll: roll));

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
  new common.ShellPage("Test 041")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of the Gaussian blur technique with a solid blur value for the whole image."])
    ..addControlBoxes(["blurValue"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");
  
  Movers.Group mover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));
  Views.Perspective userCamera = new Views.Perspective(mover: mover);

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..ambient.color = new Math.Color3.gray(0.3)
    ..diffuse.color = new Math.Color3.gray(0.8)
    ..diffuse.texture2D = td.textureLoader.load2DFromFile("../resources/Test.png");

  Views.BackTarget backTarget = new Views.BackTarget.autoResize()
    ..clearColor = false;

  Scenes.EntityPass colorPass = new Scenes.EntityPass()
    ..children.add(new ThreeDart.Entity(shape: Shapes.cube()))
    ..technique = tech
    ..target = backTarget
    ..camera = userCamera;

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"))
    ..target = backTarget
    ..camera = userCamera;

  Views.BackTarget horzBlurTarget = new Views.BackTarget.autoResize()
    ..clearColor = false;

  Techniques.GaussianBlur horzBlurTech = new Techniques.GaussianBlur(
      colorTxt: backTarget.colorTexture);

  Scenes.CoverPass horzBlurPass = new Scenes.CoverPass()
    ..target = horzBlurTarget
    ..technique = horzBlurTech;
  
Techniques.GaussianBlur vertBlurTech = new Techniques.GaussianBlur(
      colorTxt: horzBlurTarget.colorTexture,
      blurDir: Math.Vector2.posY);

  Scenes.CoverPass vertBlurPass = new Scenes.CoverPass()
    ..technique = vertBlurTech;

  td.scene = new Scenes.Compound(passes: [skybox, colorPass, horzBlurPass, vertBlurPass]);

  var setBlur = (double blurValue) {
    horzBlurTech.blurValue = blurValue;
    vertBlurTech.blurValue = blurValue;
  };

  new common.RadioGroup("blurValue")
    ..add("0.0",  () { setBlur(0.0); }, true)
    ..add("0.25", () { setBlur(0.25); })
    ..add("0.5",  () { setBlur(0.5); })
    ..add("0.75", () { setBlur(0.75); })
    ..add("1.0",  () { setBlur(1.0); });

  common.showFPS(td);
}
