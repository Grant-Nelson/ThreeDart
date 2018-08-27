library ThreeDart.test.test020;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Test 020")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of the Matrial Lighting shader with multiple moving directional lights."])
    ..addControlBoxes(["shapes"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Lights.Directional redDir = new Lights.Directional(
    mover: new Movers.Rotater(deltaYaw: 0.3, deltaPitch: 0.0, deltaRoll: 0.0),
    color: new Math.Color3(1.0, 0.0, 0.0));

  Lights.Directional greenDir = new Lights.Directional(
    mover: new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.4, deltaRoll: 0.0),
    color: new Math.Color3(0.0, 1.0, 0.0));

  Lights.Directional blueDir = new Lights.Directional(
    mover: new Movers.Rotater(deltaYaw: 0.5, deltaPitch: 0.5, deltaRoll: 0.0),
    color: new Math.Color3(0.0, 0.0, 1.0));

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(redDir)
    ..lights.add(greenDir)
    ..lights.add(blueDir)
    ..emission.color = new Math.Color3.black()
    ..ambient.color = new Math.Color3.gray(0.1)
    ..diffuse.color = new Math.Color3.gray(0.7)
    ..specular.color = new Math.Color3.gray(0.3)
    ..specular.shininess = 100.0;

  ThreeDart.Entity centerObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant.scale(3.0, 3.0, 3.0)
    ..shape = (Shapes.cube()..flip());

  Movers.Group camMover = new Movers.Group()
  ..add(new Movers.UserRotater(input: td.userInput))
  ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
  ..add(new Movers.UserZoom(input: td.userInput))
  ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));

  td.scene = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(centerObj)
    ..children.add(room)
    ..camera.mover = camMover;

  new common.RadioGroup("shapes")
    ..add("Cube",     () { centerObj.shape = Shapes.cube(); })
    ..add("Cylinder", () { centerObj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",     () { centerObj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("Sphere",   () { centerObj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Toroid",   () { centerObj.shape = Shapes.toroid(); }, true)
    ..add("Knot",     () { centerObj.shape = Shapes.knot(); });

  common.showFPS(td);
}
