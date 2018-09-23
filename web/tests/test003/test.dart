library ThreeDart.test.test003;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Test 003")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A test of the Material Light Shader with a solid color directional lighting."])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.toroid()
    ..mover = new Movers.Rotater();

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(1.0, 1.0, -3.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuse.color = new Math.Color3(0.0, 1.0, 0.0)
    ..specular.color = new Math.Color3(1.0, 0.0, 0.0)
    ..specular.shininess = 10.0;

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(obj)
    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas")
    ..scene = pass;

  common.showFPS(td);
}
