library ThreeDart.test.test027;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 027", [],
    "Test of a back buffer target for rendering to a texture. "+
    "That back buffer texture is applied to a box.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  Movers.Group firstMover =new Movers.Group()
    ..add(new Movers.Rotater())
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));
  Views.Perspective rotaterCamera = new Views.Perspective(mover: firstMover);

  Views.BackTarget backTarget = new Views.BackTarget(512, 512)
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

  Movers.Group secondMover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));
  Views.Perspective userCamera = new Views.Perspective(mover: secondMover);

  ThreeDart.Entity secondObj = new ThreeDart.Entity()
    ..shape = Shapes.cube();

  Techniques.MaterialLight secondTech = new Techniques.MaterialLight()
    ..emission.texture2D = backTarget.colorTexture;

  Scenes.EntityPass secondPass = new Scenes.EntityPass()
    ..camera = userCamera
    ..technique = secondTech
    ..children.add(secondObj);

  td.scene = new Scenes.Compound(passes: [skybox, firstPass, secondPass]);

  common.showFPS(td);
}
