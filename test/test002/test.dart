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
    ..add("Axis",            (bool show) { tech.showAxis           = show; }, true)
    ..add("AABB",            (bool show) { tech.showAABB           = show; });

  new common.RadioGroup("shapes")
    ..add("Square",        () { obj.shape = Shapes.square(); }, true)
    ..add("Cube",          () { obj.shape = Shapes.cube(); })
    ..add("Cuboid",        () { obj.shape = Shapes.cuboid(); })
    ..add("Cuboid+",       () { obj.shape = Shapes.cuboid(widthDiv: 15, heightDiv: 15,
                                vertexHndl: (Shapes.Vertex ver, double u, double v) {
                                  double height = cos(v*4.0*PI+PI)*0.1 + cos(u*4.0*PI+PI)*0.1;
                                  Math.Vector3 vec = new Math.Vector3.fromPoint3(ver.location).normal();
                                  ver.location += new Math.Point3.fromVector3(vec*height);
                                });
                              })
    ..add("Disk",          () { obj.shape = Shapes.disk(); })
    ..add("Disk+",         () { obj.shape = Shapes.disk(sides: 30); })
    ..add("Cylinder",      () { obj.shape = Shapes.cylinder(); })
    ..add("Cylinder+",     () { obj.shape = Shapes.cylinder(sides: 16, div: 4); })
    ..add("Cone",          () { obj.shape = Shapes.cylinder(topRadius: 0.0, sides: 12, capTop: false); })
    ..add("Cylindrical",   () { obj.shape = Shapes.cylindrical(sides: 50, div: 25,
                                radiusHndl: (double u, double v) => cos(v*4.0*PI + PI)*0.2 + cos(u*6.0*PI)*0.3 + 0.8); })
    ..add("LatLonSphere",  () { obj.shape = Shapes.latLonSphere(10, 20); })
    ..add("LatLonSphere+", () { obj.shape = Shapes.latLonSphere(20, 40); })
    ..add("IsoSphere",     () { obj.shape = Shapes.isosphere(2); })
    ..add("IsoSphere+",    () { obj.shape = Shapes.isosphere(3); })
    ..add("Sphere",        () { obj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Sphere+",       () { obj.shape = Shapes.sphere(widthDiv: 10, heightDiv: 10); })
    ..add("Spherical",     () { obj.shape = Shapes.sphere(widthDiv: 10, heightDiv: 10,
                                heightHndl: (double u, double v) => cos(sqrt((u-0.5)*(u-0.5) + (v-0.5)*(v-0.5))*PI)*0.3); })
    ..add("Toroid",        () { obj.shape = Shapes.toroid(); })
    ..add("Knot",          () { obj.shape = Shapes.knot(); })
    ..add("Grid",          () { obj.shape = Shapes.grid(); })
    ..add("Grid+",         () { obj.shape = Shapes.grid(widthDiv: 16, heightDiv: 16,
                                heightHndl: (double u, double v) => sin(u*8.0)*cos(v*8.0)*0.3 ); });

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
