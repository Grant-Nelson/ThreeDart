// Copyright (c) 2015, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test000;

import 'dart:html' as html;
import 'dart:async' as async;

import 'package:ThreeDart/Shapes.dart' as Shapes;

part 'testTools.dart';
part 'math.dart';
part 'shape.dart';

void main() {
  TestManager tests = new TestManager.byId("output");
  tests.add(shapeTest1, "Shape 1");
}
