// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test002;

import 'dart:html';
import 'dart:math';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 002", ["controls", "shapes"],
    "The inspection test is used to check that shapes are built correctly "+
    "and for checking the data privided by the shapes. "+
    "Also it is useful for testing out new shape configurations.");

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();
  Movers.UserRoller roller = new Movers.UserRoller()
    ..ctrlPressed = true;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
      ..add(rotater)
      ..add(roller)
      ..add(zoom));

  Techniques.Inspection tech = new Techniques.Inspection()
    ..vectorScale = 0.4;

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  rotater.attach(td.userInput);
  zoom.attach(td.userInput);
  roller.attach(td.userInput);

  _addCheckBox("Filled",          true,  (bool show) { tech.showFilled         = show; });
  _addCheckBox("Wire Frame",      true,  (bool show) { tech.showWireFrame      = show; });
  _addCheckBox("Vertices",        false, (bool show) { tech.showVertices       = show; });
  _addCheckBox("Normals",         false, (bool show) { tech.showNormals        = show; });
  _addCheckBox("Binormals",       false, (bool show) { tech.showBinormals      = show; });
  _addCheckBox("Tangentals",      false, (bool show) { tech.showTangentals     = show; });
  _addCheckBox("Face Centers",    false, (bool show) { tech.showFaceCenters    = show; });
  _addCheckBox("Face Normals",    false, (bool show) { tech.showFaceNormals    = show; });
  _addCheckBox("Face Binormals",  false, (bool show) { tech.showFaceBinormals  = show; });
  _addCheckBox("Face Tangentals", false, (bool show) { tech.showFaceTangentals = show; });
  _addCheckBox("Colors",          false, (bool show) { tech.showColorFill      = show; });
  _addCheckBox("Textures2D",      false, (bool show) { tech.showTxt2DColor     = show; });
  _addCheckBox("TexturesCube",    false, (bool show) { tech.showTxtCube        = show; });
  _addCheckBox("Axis",            true,  (bool show) { tech.showAxis           = show; });
  _addCheckBox("AABB",            false, (bool show) { tech.showAABB           = show; });

  _addRadioButton("Square",        () { obj.shape = Shapes.square(); }, true);
  _addRadioButton("Cube",          () { obj.shape = Shapes.cube(); });
  _addRadioButton("Cuboid",        () { obj.shape = Shapes.cuboid(); });
  _addRadioButton("Cuboid+",       () { obj.shape = Shapes.cuboid(widthDiv: 15, heightDiv: 15,
                                        vertexHndl: (Shapes.Vertex ver, double u, double v) {
                                        double height = cos(v*4.0*PI+PI)*0.1 + cos(u*4.0*PI+PI)*0.1;
                                        Math.Vector3 vec = new Math.Vector3.fromPoint3(ver.location).normal();
                                        ver.location += new Math.Point3.fromVector3(vec*height);
                                      }); });
  _addRadioButton("Disk",          () { obj.shape = Shapes.disk(); });
  _addRadioButton("Disk+",         () { obj.shape = Shapes.disk(sides: 30); });
  _addRadioButton("Cylinder",      () { obj.shape = Shapes.cylinder(); });
  _addRadioButton("Cylinder+",     () { obj.shape = Shapes.cylinder(sides: 16, div: 4); });
  _addRadioButton("Cone",          () { obj.shape = Shapes.cylinder(topRadius: 0.0, sides: 12, capTop: false); });
  _addRadioButton("Cylindrical",   () { obj.shape = Shapes.cylindrical(sides: 50, div: 25,
                                        radiusHndl: (double u, double v) => cos(v*4.0*PI + PI)*0.2 + cos(u*6.0*PI)*0.3 + 0.8); });
  _addRadioButton("LatLonSphere",  () { obj.shape = Shapes.latLonSphere(10, 20); });
  _addRadioButton("LatLonSphere+", () { obj.shape = Shapes.latLonSphere(20, 40); });
  _addRadioButton("IsoSphere",     () { obj.shape = Shapes.isosphere(2); });
  _addRadioButton("IsoSphere+",    () { obj.shape = Shapes.isosphere(3); });
  _addRadioButton("Sphere",        () { obj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); });
  _addRadioButton("Sphere+",       () { obj.shape = Shapes.sphere(widthDiv: 10, heightDiv: 10); });
  _addRadioButton("Spherical",     () { obj.shape = Shapes.sphere(widthDiv: 10, heightDiv: 10,
                                        heightHndl: (double u, double v) => cos(sqrt((u-0.5)*(u-0.5) + (v-0.5)*(v-0.5))*PI)*0.3); });
  _addRadioButton("Toroid",        () { obj.shape = Shapes.toroid(); });
  _addRadioButton("Knot",          () { obj.shape = Shapes.knot(); });
  _addRadioButton("Grid",          () { obj.shape = Shapes.grid(); });
  _addRadioButton("Grid+",         () { obj.shape = Shapes.grid(widthDiv: 16, heightDiv: 16,
                                        heightHndl: (double u, double v) => sin(u*8.0)*cos(v*8.0)*0.3 ); });

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}

typedef void selectionHndl(bool);

typedef void setShapeHndl();

void _addCheckBox(String text, bool checked, selectionHndl hndl) {
  hndl(checked);
  Element elem = document.getElementById("controls");
  LabelElement label = new LabelElement()
    ..style.whiteSpace = "nowrap";
  elem.children.add(label);
  CheckboxInputElement checkBox = new CheckboxInputElement()
    ..checked = checked;
  checkBox.onChange.listen((_) {
      hndl(checkBox.checked);
    });
  label.children.add(checkBox);
  SpanElement span = new SpanElement()
    ..text = text;
  label.children.add(span);
  elem.children.add(new BRElement());
}

void _addRadioButton(String text, setShapeHndl hndl, [bool selected = false]) {
  if (selected) hndl();
  Element elem = document.getElementById("shapes");
  LabelElement label = new LabelElement()
    ..style.whiteSpace = "nowrap";
  elem.children.add(label);
  RadioButtonInputElement checkBox = new RadioButtonInputElement()
    ..checked = selected
    ..name = "shape";
  checkBox.onChange.listen((_) {
      if (checkBox.checked) hndl();
    });
  label.children.add(checkBox);
  SpanElement span = new SpanElement()
    ..text = text;
  label.children.add(span);
  elem.children.add(new BRElement());
}
