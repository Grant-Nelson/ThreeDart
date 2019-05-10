library ThreeDart.test.test021;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Textures.dart' as Textures;
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
    ..addPar(["Test of the Blum effect technique."])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");
  
  Movers.Group mover = new Movers.Group()
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: 0.5))
    ..add(new Movers.Constant.rotateX(Math.PI_2));

  ThreeDart.Entity bulbObj = new ThreeDart.Entity()
    ..mover = mover
    ..shape = Shapes.sphere()
    ..technique = (new Techniques.MaterialLight()
                ..emission.color = Math.Color3.white());
  
  Textures.TextureCube shadeTxt = td.textureLoader.loadCubeFromFiles(
    "../resources/StarsCan.png", "../resources/StarsCan.png", "../resources/StarsCan.png",
    "../resources/StarsCan.png", "../resources/StarsCan.png", "../resources/StarsCan.png");
  ThreeDart.Entity shadeObj = new ThreeDart.Entity()
    ..mover = mover
    ..shape = Shapes.cylinder(topRadius: 1.2, bottomRadius: 1.2, sides: 16)
    ..technique = (new Techniques.MaterialLight()
                ..diffuse.textureCube = shadeTxt
                ..alpha.textureCube = shadeTxt);

  Textures.TextureCube lightTxt = td.textureLoader.loadCubeFromFiles(
    "../resources/Stars.png", "../resources/Stars.png", "../resources/Stars.png",
    "../resources/Stars.png", "../resources/Stars.png", "../resources/Stars.png");
  Lights.TexturedPoint lightPoint = new Lights.TexturedPoint(
    mover: mover,
    texture: lightTxt,
    attenuation0: 0.5,
    attenuation1: 0.05,
    attenuation2: 0.025);

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant.scale(10.0, 10.0, 10.0)
    ..shape = (Shapes.cube()..flip());

  Movers.Group camMover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(lightPoint)
    ..ambient.color = new Math.Color3.white()
    ..diffuse.color = new Math.Color3.white()
    ..specular.color = new Math.Color3.black() // TODO: Fix No specular in this setup.
    ..specular.shininess = 100.0;

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(room)
    ..children.add(bulbObj)
    ..children.add(shadeObj)
    ..camera.mover = camMover;
  td.scene = pass;

  common.showFPS(td);
}
