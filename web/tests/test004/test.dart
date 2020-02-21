library ThreeDart.test.test004;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../../common/common.dart' as common;

void main() {
  common.ShellPage page = new common.ShellPage("Test 004")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of repeat use of a single mover and shape. There are 9 rings ",
      "moving at the same speed, however the second one is attached to ",
      "the first, the third to the second, and so on."])
    ..addPar(["«[Back to Tests|../]"]);

  Movers.Rotator rotator = new Movers.Rotator()
    ..deltaYaw = 0.51
    ..deltaPitch = 0.71
    ..deltaRoll = 0.92;

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.Constant.scale(0.8, 0.8, 0.8))
    ..add(rotator);

  Shapes.Shape shape = Shapes.toroid(minorRadius: 0.2, majorRadius: 2.0);

  ThreeDart.Entity obj0 = new ThreeDart.Entity(shape: shape, mover: mover);
  ThreeDart.Entity obj1 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj0);
  ThreeDart.Entity obj2 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj1);
  ThreeDart.Entity obj3 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj2);
  ThreeDart.Entity obj4 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj3);
  ThreeDart.Entity obj5 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj4);
  ThreeDart.Entity obj6 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj5);
  ThreeDart.Entity obj7 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj6);
  ThreeDart.Entity obj8 = new ThreeDart.Entity(shape: shape, mover: mover)..children.add(obj7);

  Techniques.Depth tech = new Techniques.Depth(start: 3.0, stop: 6.0, grey: true);
  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(obj8)
    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas")
    ..scene = pass;

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
