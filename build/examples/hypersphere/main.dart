library hypersphere;

import 'dart:math';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Events.dart' as Events;
import 'package:ThreeDart/Input.dart' as Input;
import '../../common/common.dart' as common;

part 'example2D.dart';
part 'example3D.dart';
part 'example4D.dart';

void main() {
  new common.ShellPage("Hypersphere")
    ..addPar([
      "This is a simple example to help demonstrate why a hypersphere takes up ",
      "so little space of the hypercube."])
    ..addHeader(3, "2D: circle and square")
    ..addPar([
      "Imagine taking slices out of a circle inscribed in a square. Each slice is ",
      "two lines, one from the circle and one from the square. When the slices ",
      "are near the top, the line caused by the circle is small compared to the square. ",
      "The corners of the square aren't covered by the circle."])
    ..addLargeCanvas("target2D")
    ..addPar([
      "_Click and drag to move the location of the slice._"])

    ..addHeader(3, "3D: sphere and cube")
    ..addPar([
      "Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ",
      "a circle inside a square. When the slice is in the middle, the circle touches ",
      "the sides of the square. When the slice is near a side, the circle is almost a ",
      "point but the square is still the same size. That is a lot of extra space for ",
      "for the square not used by the circle."])
    ..addLargeCanvas("target3D")
    ..addPar([
      "_Click and drag to move the location of the slice._"])

    ..addHeader(3, "4D: hypersphere and hypercube")
    ..addPar([
      "Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ",
      "Each slice is a sphere and a cube (as shown in the graphics below). ",
      "When the slice is near the edges, the sphere is a small point in the middle ",
      "of a cube. As the slice moves down the sphere gets bigger until it touches all ",
      "the sides of the cube, then it shrinks again. Once again, that's a lot of ",
      "space in the cube not filled by the sphere."])
    ..addLargeCanvas("target4D")
    ..addPar([
      "_The shape on the left is an artistic representation of a 4D hypercube._ ",
      "_Click and drag on the left to move the location of the slice._",
      "_Click and drag on the right to rotate the resulting 3D slice._"])
    ..addPar([
      "With each new dimension the hypersphere is small near the edges and only touching ",
      "the sides of the hypersphere in the very middle."])
    ..addPar(["«[Back to Examples|../]"]);

  startup2D("target2D");
  startup3D("target3D");
  startup4D("target4D");
}
