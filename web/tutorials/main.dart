// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.web.tutorials;

import 'dart:html' as html;
import 'dart:convert' as convert;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Tokenizer.dart' as Tokenizer;

part 'shellPage.dart';

part 'tutorial1.dart';

void main() {
  try {
    tutorial1();
  } catch (ex) {
    print(ex);
  }
}
