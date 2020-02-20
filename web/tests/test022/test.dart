library ThreeDart.test.test022;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../../common/common.dart' as common;

void main() {
  common.ShellPage page = new common.ShellPage("Test 022")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of the Material Lighting shader with a textured point light."])
    ..addControlBoxes(["shapes"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");
  Textures.TextureCube texture = td.textureLoader.loadCubeFromPath("../resources/earthColor");

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.Constant.translate(0.0, 0.0, 2.0))
    ..add(new Movers.Rotator(deltaYaw: 0.5, deltaPitch: 0.5, deltaRoll: 0.0));

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
                ..add(new Movers.Constant.scale(0.2, 0.2, 0.2))
                ..add(mover))
    ..shape = Shapes.sphere()
    ..technique = (new Techniques.MaterialLight()
                ..emission.textureCube = texture);

  Lights.Point objPoint = new Lights.Point(
    mover: mover,
    texture: texture,
    attenuation0: 1.0,
    attenuation1: 0.15,
    attenuation2: 0.05);

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(objPoint)
    ..ambient.color = new Math.Color3.gray(0.1)
    ..diffuse.color = new Math.Color3.gray(1.0)
    ..specular.color = new Math.Color3.gray(1.0)
    ..specular.shininess = 100.0;

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant.scale(3.0, 3.0, 3.0)
    ..shape = (Shapes.cube()..flip());

  ThreeDart.Entity centerObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  Movers.Group camMover = new Movers.Group()
  ..add(new Movers.UserRotator(input: td.userInput))
  ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
  ..add(new Movers.UserZoom(input: td.userInput))
  ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(room)
    ..children.add(centerObj)
    ..children.add(obj)
    ..camera.mover = camMover;
  td.scene = pass;

  new common.RadioGroup("shapes")
    ..add("Cube",     () { centerObj.shape = Shapes.cube(); })
    ..add("Cylinder", () { centerObj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",     () { centerObj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("Sphere",   () { centerObj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Toroid",   () { centerObj.shape = Shapes.toroid(); }, true)
    ..add("Knot",     () { centerObj.shape = Shapes.knot(); });

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
