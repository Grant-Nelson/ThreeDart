// Copyright (c) 2015, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test001;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as TD;

void main() {

  TD.Object obj = new TD.Object()
    ..shape = new TD.Shape.cube()
    ..mover = new TD.Rotater();

  TD.Depth tech = new TD.Depth()
    ..fogStart = 3.0
    ..fogStop = 6.0;

  TD.RenderPass pass = new TD.RenderPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = new TD.Constant(new TD.Matrix4.translate(0.0, 0.0, 5.0));

  TD.ThreeDart td = new TD.ThreeDart.fromId("threeDart")
    ..scene = pass;

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
