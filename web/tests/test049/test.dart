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

class Ball extends ThreeDart.Entity {
  static Math.Vector3 gravity;
  static Shapes.Shape ballShape;

  Movers.Constant ballMover;
  Math.Vector3 velocity;
  Math.Vector3 rotVec;
  bool active;

  Ball() {
    gravity ??= new Math.Vector3(0.0, -9.8, 0.0);
    ballShape ??= Shapes.sphere(radius: 1.0, widthDiv: 3, heightDiv: 3);
    this.shape = ballShape;
    this.ballMover = new Movers.Constant();
    this.mover = this.ballMover;
  }
}

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

class Collider extends Movers.Mover {

  Events.Event _changed;
  Collider() {

  }

  Math.Matrix4 update(ThreeDart.RenderState state, Movers.Movable obj) {


    // The collider doesn't move so just return the identity.
    return Math.Matrix4.identity;
  }

  /// Emits when the mover has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }
}

void main() {
  new common.ShellPage("Test 049")
    ..addLargeCanvas("testCanvas")
    ..addPar([""])
    ..addControlBoxes(["options"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  ThreeDart.Entity group = new ThreeDart.Entity()
    ..children.add(createFloor(td));

  // Setup the First person camera
  Movers.UserTranslator trans = new Movers.UserTranslator(input: td.userInput);
  Movers.UserRotator rot = new Movers.UserRotator.flat(input: td.userInput);
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
