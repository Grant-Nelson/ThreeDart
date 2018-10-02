library hypersphere;

import 'dart:math';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Hypersphere")
    ..addLargeCanvas("targetCanvas")
    ..addPar([
      "The inspection test is used to check that shapes are built correctly ",
      "and for checking the data privided by the shapes. ",
      "Also it is useful for testing out new generated shape configurations. ",
      "For loaded shape testing see test032."])
    ..addPar(["«[Back to Examples|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("targetCanvas");

  Movers.Group userMover = new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput, invertY: true))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput));

  ThreeDart.Entity obj1 = new ThreeDart.Entity()
    ..shape = Shapes.isosphere(2)
    ..mover = userMover;
      
  ThreeDart.Entity obj2 = new ThreeDart.Entity()
    ..shape = Shapes.cube()
    ..mover = userMover;

  Techniques.Inspection tech = new Techniques.Inspection()
    ..showWireFrame = true
    ..diffuse1 = new Math.Color4(0.4, 0.6, 0.8, 0.2)
    ..ambient1 = new Math.Color4(0.2, 0.4, 0.6, 0.2);

  td.scene = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(obj1)
    ..children.add(obj2)
    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);

  common.showFPS(td);
}
