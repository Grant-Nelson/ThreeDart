library hypersphere;

import 'dart:math';
import 'dart:async';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../../common/common.dart' as common;

part 'projection.dart';

void main() {
  new common.ShellPage("Hypersphere")
    ..addLargeCanvas("targetCanvas")
    ..addPar([
      ""])
    ..addPar(["«[Back to Examples|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("targetCanvas");

  Projection proj = new Projection(td);

  td.scene = new Scenes.EntityPass()
    ..children.add(proj.entity)
    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);

  double wOffset = 0.0;
  new Timer.periodic(const Duration(milliseconds: 50), (_) {
    wOffset += 0.01;
    if (wOffset >= Math.PI) wOffset = 0.0;
    proj.setWOffset(wOffset);
  });

  common.showFPS(td);
}
