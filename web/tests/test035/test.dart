library ThreeDart.test.test035;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Events.dart' as Events;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Test 035")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A test of the bending a shape with the Material Light Shader. ",
      "Not all of the shapes have predefined bend values."])
    ..addControlBoxes(["shapes"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = new Movers.Constant();

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(1.0, 1.0, -3.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuse.color = new Math.Color3(0.0, 1.0, 0.0)
    ..specular.color = new Math.Color3(1.0, 0.0, 0.0)
    ..specular.shininess = 10.0
    ..bendMatrices.add(Math.Matrix4.identity)
    ..bendMatrices.add(Math.Matrix4.identity)
    ..bendMatrices.add(Math.Matrix4.identity)
    ..bendMatrices.add(Math.Matrix4.identity)
    ..bendMatrices.add(Math.Matrix4.identity)
    ..bendMatrices.add(Math.Matrix4.identity)
    ..bendMatrices.add(Math.Matrix4.identity)
    ..bendMatrices.add(Math.Matrix4.identity);

  Movers.Group camMover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));

  Movers.Mover mover1 = new Movers.Group()
    ..add(new Movers.Constant.translate(0.5, 0.0, 0.0))
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: 1.7))
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.5, deltaRoll: 0.0))
    ..add(new Movers.Constant.rotateX(0.35))
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: -0.5, deltaRoll: 0.0))
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: -1.7))
    ..add(new Movers.Constant.translate(-0.5, 0.0, 0.0));

  Movers.Mover mover2 = new Movers.Group()
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: -1.4))
    ..add(new Movers.Constant.translate(0.5, 0.0, 0.0))
    ..add(new Movers.Rotater(deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: 1.4));

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(obj)
    ..camera.mover = camMover
    ..onPreUpdate.add((Events.EventArgs args) {
      ThreeDart.RenderState state = (args as ThreeDart.StateEventArgs).state;
      Math.Matrix4 mat1 = mover1.update(state, null);
      Math.Matrix4 mat2 = mover2.update(state, null);
      tech.bendMatrices[0] = mat1;
      tech.bendMatrices[1] = mat2;
      tech.bendMatrices[2] = mat1;
      tech.bendMatrices[3] = mat2;
      tech.bendMatrices[4] = mat1;
      tech.bendMatrices[5] = mat2;
      tech.bendMatrices[6] = mat1;
      tech.bendMatrices[7] = mat2;
    });
  td.scene = pass;

  void setShape(Shapes.Shape shape) {
    shape.calculateNormals();
    obj.shape = shape;
  }

  new common.RadioGroup("shapes")
    ..add("Cuboid",   () { setShape(Shapes.cuboid(widthDiv: 30, heightDiv: 30)); }, true)
    ..add("Cylinder", () { setShape(Shapes.cylinder(div: 100, sides: 20)); })
    ..add("Cone",     () { setShape(Shapes.cylinder(topRadius: 0.0, sides: 12, capTop: false, div: 30)); })
    ..add("Sphere",   () { setShape(Shapes.sphere(widthDiv: 20, heightDiv: 20)); })
    ..add("Toroid",   () { setShape(Shapes.toroid(minorRadius: 0.25, majorRadius: 1.5)); })
    ..add("Knot",     () { setShape(Shapes.knot(minorRadius: 0.1)); })
    ..add("Grid",     () { setShape(Shapes.grid()); });

  common.showFPS(td);
}
