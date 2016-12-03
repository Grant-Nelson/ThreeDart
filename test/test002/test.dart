// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test002;

import 'dart:math';
import 'dart:async';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 002", ["controls", "shapes", "scalars"],
    "The inspection test is used to check that shapes are built correctly "+
    "and for checking the data privided by the shapes. "+
    "Also it is useful for testing out new generated shape configurations. "+
    "For loaded shape testing see test032.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput)));

  Techniques.Inspection tech = new Techniques.Inspection()
    ..vectorScale = 0.4;

  td.scene = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(obj)
    ..camera.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0));

  new common.CheckGroup("controls")
    ..add("Filled",          (bool show) { tech.showFilled         = show; }, true)
    ..add("Wire Frame",      (bool show) { tech.showWireFrame      = show; }, true)
    ..add("Vertices",        (bool show) { tech.showVertices       = show; })
    ..add("Normals",         (bool show) { tech.showNormals        = show; })
    ..add("Binormals",       (bool show) { tech.showBinormals      = show; })
    ..add("Tangentals",      (bool show) { tech.showTangentals     = show; })
    ..add("Face Centers",    (bool show) { tech.showFaceCenters    = show; })
    ..add("Face Normals",    (bool show) { tech.showFaceNormals    = show; })
    ..add("Face Binormals",  (bool show) { tech.showFaceBinormals  = show; })
    ..add("Face Tangentals", (bool show) { tech.showFaceTangentals = show; })
    ..add("Colors",          (bool show) { tech.showColorFill      = show; })
    ..add("Textures2D",      (bool show) { tech.showTxt2DColor     = show; })
    ..add("TexturesCube",    (bool show) { tech.showTxtCube        = show; })
    ..add("Weight",          (bool show) { tech.showWeight         = show; })
    ..add("Bend",            (bool show) { tech.showBend           = show; })
    ..add("Axis",            (bool show) { tech.showAxis           = show; }, true)
    ..add("AABB",            (bool show) { tech.showAABB           = show; });

  void setShape(Shapes.Shape shape) {
    shape.calculateWeights();
    obj.shape = shape;
  }

  new common.RadioGroup("shapes")
    ..add("Square",        () { setShape(Shapes.square()); }, true)
    ..add("Cube",          () { setShape(Shapes.cube()); })
    ..add("Cuboid",        () { setShape(Shapes.cuboid()); })
    ..add("Cuboid+",       () { setShape(Shapes.cuboid(widthDiv: 15, heightDiv: 15,
                                vertexHndl: (Shapes.Vertex ver, double u, double v) {
                                  double height = cos(v*4.0*PI+PI)*0.1 + cos(u*4.0*PI+PI)*0.1;
                                  Math.Vector3 vec = new Math.Vector3.fromPoint3(ver.location).normal();
                                  ver.location += new Math.Point3.fromVector3(vec*height);
                                }));
                              })
    ..add("Disk",          () { setShape(Shapes.disk()); })
    ..add("Disk+",         () { setShape(Shapes.disk(sides: 30)); })
    ..add("Cylinder",      () { setShape(Shapes.cylinder()); })
    ..add("Cylinder+",     () { setShape(Shapes.cylinder(sides: 16, div: 8)); })
    ..add("Cone",          () { setShape(Shapes.cylinder(topRadius: 0.0, sides: 12, capTop: false)); })
    ..add("Cylindrical",   () { setShape(Shapes.cylindrical(sides: 50, div: 25,
                                radiusHndl: (double u, double v) => cos(v*4.0*PI + PI)*0.2 + cos(u*6.0*PI)*0.3 + 0.8)); })
    ..add("LatLonSphere",  () { setShape(Shapes.latLonSphere(10, 20)); })
    ..add("LatLonSphere+", () { setShape(Shapes.latLonSphere(20, 40)); })
    ..add("IsoSphere",     () { setShape(Shapes.isosphere(2)); })
    ..add("IsoSphere+",    () { setShape(Shapes.isosphere(3)); })
    ..add("Sphere",        () { setShape(Shapes.sphere(widthDiv: 6, heightDiv: 6)); })
    ..add("Sphere+",       () { setShape(Shapes.sphere(widthDiv: 10, heightDiv: 10)); })
    ..add("Spherical",     () { setShape(Shapes.sphere(widthDiv: 10, heightDiv: 10,
                                heightHndl: (double u, double v) => cos(sqrt((u-0.5)*(u-0.5) + (v-0.5)*(v-0.5))*PI)*0.3)); })
    ..add("Toroid",        () { setShape(Shapes.toroid()); })
    ..add("Knot",          () { setShape(Shapes.knot()); })
    ..add("Grid",          () { setShape(Shapes.grid()); })
    ..add("Grid+",         () { setShape(Shapes.grid(widthDiv: 16, heightDiv: 16,
                                heightHndl: (double u, double v) => sin(u*8.0)*cos(v*8.0)*0.3 )); });

  new common.RadioGroup("scalars")
    ..add("0.01", () { tech.vectorScale = 0.01; })
    ..add("0.02", () { tech.vectorScale = 0.02; })
    ..add("0.04", () { tech.vectorScale = 0.04; })
    ..add("0.06", () { tech.vectorScale = 0.06; })
    ..add("0.08", () { tech.vectorScale = 0.08; })
    ..add("0.1", () { tech.vectorScale = 0.1; })
    ..add("0.2", () { tech.vectorScale = 0.2; })
    ..add("0.4", () { tech.vectorScale = 0.4; }, true)
    ..add("0.6", () { tech.vectorScale = 0.6; })
    ..add("0.8", () { tech.vectorScale = 0.8; })
    ..add("1.0", () { tech.vectorScale = 1.0; });

  new Timer.periodic(const Duration(milliseconds: 1000), (Timer time) { print(td.fps); });
}
