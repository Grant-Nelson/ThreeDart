library ThreeDart.test.test000;

import 'dart:html' as html;
import 'dart:async' as asy;
import 'dart:convert' as convert;
import 'dart:typed_data' as data;

import 'package:ThreeDart/Data.dart' as Data;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;

import '../../common/common.dart' as common;
//import '../../examples/craft/main.dart' as craft;

part 'bench.dart';
part 'craft.dart';
part 'testTools.dart';
part 'matrix2.dart';
part 'matrix3.dart';
part 'matrix4.dart';
part 'region2.dart';
part 'region3.dart';
part 'technique.dart';
part 'vertexType.dart';

void main() {
  html.DivElement elem = new html.DivElement();
  TestManager tests = new TestManager(elem);

  //addBench(tests);
  //addVertexTypeTests(tests);
  //addMatrix2Tests(tests);
  //addMatrix3Tests(tests);
  //addMatrix4Tests(tests);
  //addRegion2Tests(tests);
  addRegion3Tests(tests);
  //addTechniqueTests(tests);
  //addCraftTests(tests);

  new common.ShellPage("Unit-tests", false)
    ..addElem(elem)
    ..addPar(["«[Back to Tests|../]"]);
}
