// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test000;

import 'dart:html' as html;
import 'dart:async' as async;
import 'dart:convert' as convert;

import 'package:ThreeDart/Data.dart' as Data;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Math.dart' as Math;

part 'testTools.dart';
part 'math.dart';
part 'shape.dart';
part 'vertexType.dart';

void main() {
  TestManager tests = new TestManager.byId("output");
  tests.add(vertexTypeTest1, "Vertex Test 1");
  tests.add(vertexTypeTest2, "Vertex Test 2");
  tests.add(vertexTypeTest3, "Vertex Test 3");
  tests.add(shapeTest1, "Shape Build Test 1");
}
