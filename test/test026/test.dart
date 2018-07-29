library ThreeDart.test.test026;

import 'dart:math';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 026", ["shapes"],
    "Test of the Material Lighting shader with a textured directional light. "+
    "The texturing of the directional light is being modified with a matrix. "+
    "The texture metrix is updated using the pre-update mathods. "+
    "Use Ctrl plus the mouse to move the center object.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  Lights.Directional dir1 = new Lights.Directional()
    ..mover = new Movers.Constant.vectorTowards(0.3, 0.4, 1.0);

  Lights.Directional dir2 = new Lights.Directional()
    ..mover = new Movers.Constant.vectorTowards(-0.3, -0.4, -1.0)
    ..color = new Math.Color3(0.125, 0.125, 0.125);

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(dir1)
    ..lights.add(dir2)
    ..emission.color = new Math.Color3.black()
    ..ambient.color = new Math.Color3.gray(0.1)
    ..diffuse.color = new Math.Color3.gray(0.8)
    ..specular.color = new Math.Color3.gray(0.2)
    ..specular.shininess = 100.0
    ..diffuse.texture2D = td.textureLoader.load2DFromFile("../resources/Test.png", wrapEdges: true);

  ThreeDart.Entity centerObj = new ThreeDart.Entity()
    ..mover = new Movers.UserRotater(input: td.userInput, ctrl: true)
    ..shape = Shapes.toroid();

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant.scale(3.0, 3.0, 3.0)
    ..shape = (Shapes.cube()..flip());

  Movers.Group camMover = new Movers.Group()
  ..add(new Movers.UserRotater(input: td.userInput))
  ..add(new Movers.Constant.rotateX(PI))
  ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));

  Movers.Rotater colorMover = new Movers.Rotater(deltaYaw: 0.3, deltaPitch: 0.5, deltaRoll: 0.7);
  Movers.Rotater txtMover   = new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: 0.1);
  td.scene = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(centerObj)
    ..children.add(room)
    ..camera.mover = camMover
    ..onPreUpdate.add((ThreeDart.StateEventArgs args) {
      tech.colorMatrix = colorMover.update(args.state, null);
      tech.texture2DMatrix = new Math.Matrix3.fromMatrix4(txtMover.update(args.state, null));
    });

  new common.RadioGroup("shapes")
    ..add("Cube",     () { centerObj.shape = Shapes.cube(); })
    ..add("Cylinder", () { centerObj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",     () { centerObj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("Sphere",   () { centerObj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Toroid",   () { centerObj.shape = Shapes.toroid(); }, true)
    ..add("Knot",     () { centerObj.shape = Shapes.knot(); });

  common.showFPS(td);
}
