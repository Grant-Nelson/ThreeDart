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
    ..addPar(["Test of the Gaussian blur technique."])
    ..addControlBoxes(["blurValue"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");
  
  Movers.Group firstMover =new Movers.Group()
    ..add(new Movers.Rotater())
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));

  Views.Perspective rotaterCamera = new Views.Perspective(mover: firstMover);

  Views.BackTarget backTarget = new Views.BackTarget(1024, 1024, autoResize: true)
    ..clearColor = false;

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"))
    ..target = backTarget
    ..camera = rotaterCamera;

  ThreeDart.Entity firstObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  Techniques.MaterialLight firstTech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(0.0, -1.0, -1.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuse.color = new Math.Color3(0.0, 1.0, 0.0)
    ..specular.color = new Math.Color3(1.0, 0.0, 0.0)
    ..specular.shininess = 10.0;

  Scenes.EntityPass firstPass = new Scenes.EntityPass()
    ..camera = rotaterCamera
    ..technique = firstTech
    ..target = backTarget
    ..children.add(firstObj);

  Techniques.GaussianBlur blurTech = new Techniques.GaussianBlur(
      colorTxt: backTarget.colorTexture,
      blurValue: 0.0,
      lowBlur: 0.0,
      highBlur: 5.0);

  Scenes.CoverPass blurPass = new Scenes.CoverPass()
    ..technique = blurTech;

  td.scene = new Scenes.Compound(passes: [skybox, firstPass, blurPass]);

  new common.RadioGroup("blurValue")
    ..add("0", () { blurTech.blurValue = 0.0; }, true)
    ..add("1", () { blurTech.blurValue = 0.2; })
    ..add("2", () { blurTech.blurValue = 0.4; })
    ..add("3", () { blurTech.blurValue = 0.6; })
    ..add("4", () { blurTech.blurValue = 0.8; })
    ..add("5", () { blurTech.blurValue = 1.0; });

  common.showFPS(td);
}
