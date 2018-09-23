library ThreeDart.test.test030;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Views.dart' as Views;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Test 030")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A test of the Normal shader for dynamically rendering normal maps."])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.cube()
    ..mover = (new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput)));

  Techniques.Normal tech = new Techniques.Normal()
    ..bumpyTextureCube = td.textureLoader.loadCubeFromPath("../resources/diceBumpMap");

  Views.FrontTarget target = new Views.FrontTarget()
    ..color = new Math.Color4(0.5, 0.5, 1.0, 1.0);

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..technique = tech
    ..target = target
    ..children.add(obj)
    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);
  td.scene = pass;

  common.showFPS(td);
}
