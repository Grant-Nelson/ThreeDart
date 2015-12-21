// Copyright (c) 2015, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test002;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;

void main() {

  ThreeDart.Object obj = new ThreeDart.Object()
    ..shape = new Shapes.Shape.cube()
    ..mover = new Movers.Rotater();

  Techniques.Inspection tech = new Techniques.Inspection();

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  _addCheckBox("Filled",         true,  (bool show) { tech.showFilled        = show; });
  _addCheckBox("Wire Frame",     true,  (bool show) { tech.showWireFrame     = show; });
  _addCheckBox("Vertices",       true,  (bool show) { tech.showVertices      = show; });
  _addCheckBox("Normals",        false, (bool show) { tech.showNormals       = show; });
  _addCheckBox("Binormals",      false, (bool show) { tech.showBinormals     = show; });
  _addCheckBox("Face Normals",   false, (bool show) { tech.showFaceNormals   = show; });
  _addCheckBox("Face Binormals", false, (bool show) { tech.showFaceBinormals = show; });
  _addCheckBox("Colors",         false, (bool show) { tech.showColorFill     = show; });
  _addCheckBox("Textures",       false, (bool show) { tech.showTxtColor      = show; });

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}

typedef selectionHndl(bool);

void _addCheckBox(String text, bool checked, selectionHndl hndl) {
  hndl(checked);
  Element elem = document.getElementById("controls");
  CheckboxInputElement checkBox = new CheckboxInputElement()
    ..checked = checked;
  checkBox.onChange.listen((_) {
      hndl(checkBox.checked);
    });
  elem.children.add(checkBox);
  SpanElement span = new SpanElement()
    ..text = text;
  elem.children.add(span);
  elem.children.add(new BRElement());
}
