library ThreeDart.test.test038;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Events.dart' as Events;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../../common/common.dart' as common;

ThreeDart.Entity createFloor(ThreeDart.ThreeDart td) {
  Textures.Texture2D floorTxt =
    td.textureLoader.load2DFromFile("../resources/Grass.png", wrapEdges: true, mipMap: true);

  Movers.Mover floorMover =
    new Movers.Constant(
      new Math.Matrix4.translate(0.0, -3.0, 0.0)*
      new Math.Matrix4.scale(1000.0, 1.0, 1000.0)*
      new Math.Matrix4.rotateX(-Math.PI_2));

  Techniques.MaterialLight tech =
    new Techniques.MaterialLight()
      ..texture2DMatrix = new Math.Matrix3.scale(1000.0, 1000.0, 1.0)
      ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(1.0, -3.0, -1.0),
          color: new Math.Color3.white()))
      ..ambient.color = new Math.Color3(0.5, 0.5, 0.5)
      ..diffuse.color = new Math.Color3(0.5, 0.5, 0.5)
      ..ambient.texture2D = floorTxt
      ..diffuse.texture2D = floorTxt;

  return new ThreeDart.Entity()
    ..shape = Shapes.grid(widthDiv: 20, heightDiv: 20)
    ..mover = floorMover
    ..technique = tech;
}

ThreeDart.Entity createObjects(ThreeDart.ThreeDart td) {
  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(1.0, -3.0, -1.0),
          color: new Math.Color3(0.4, 0.4, 1.0)))
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(0.0, 1.0, 0.0),
          color: new Math.Color3(0.0, 0.2, 0.1)))
    ..ambient.color = new Math.Color3.gray(0.2)
    ..diffuse.color = new Math.Color3.gray(0.7)
    ..specular.color = new Math.Color3.white()
    ..specular.shininess = 10.0;

  ThreeDart.Entity group = new ThreeDart.Entity()
    ..technique = tech;

  Shapes.Shape shape = Shapes.cube();
  final double range = 60.0;
  final double spacing = 12.0;
  for (double x = -range; x <= range; x += spacing) {
    for (double z = -range; z <= range; z += spacing) {
      ThreeDart.Entity obj = new ThreeDart.Entity()
        ..shape = shape
        ..mover = new Movers.Group([
          new Movers.Rotater(yaw: x/10.0, pitch: z/10.0, deltaYaw: x/10.0, deltaPitch: z/10.0),
          new Movers.Constant.translate(x, 0.0, z)
        ]);
      group.children.add(obj);
    }
  }

  return group;
}

void main() {
  new common.ShellPage("Test 038")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A test of basic 3D movement around a room similar to a first person view. ",
      "A and D (left and right arrow keys) strifes left and right. ",
      "W and S (up and down arrow keys) moves forward and backward. ",
      "Q and E moves up and down. Mouse looks around with left mouse button pressed."])
    ..addControlBoxes(["options"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  ThreeDart.Entity group = new ThreeDart.Entity()
    ..children.add(createFloor(td))
    ..children.add(createObjects(td));

  // Setup the First person camera
  Movers.UserTranslator trans = new Movers.UserTranslator(input: td.userInput);
  Movers.UserRotater rot = new Movers.UserRotater.flat(input: td.userInput);
  rot.changed.add((Events.EventArgs args) {
    trans.velocityRotation = new Math.Matrix3.rotateY(-rot.yaw.location);
  });
  Movers.Group camera = new Movers.Group([trans, rot]);

  td.scene = new Scenes.EntityPass()
    ..children.add(group)
    ..camera.mover = camera;

  new common.CheckGroup("options")
    ..add("Mouse Locking", (bool enable) { td.userInput.lockOnClick = enable; }, false);

  common.showFPS(td);
}
