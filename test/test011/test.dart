// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test011;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Materials.dart' as Materials;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 011", ["shapes"],
    "A test of the Solid Color Directional Lighting Shader with a cube texture bump map.");

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();
  Movers.UserRoller roller = new Movers.UserRoller()
    ..ctrlPressed = true;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.sphere()
    ..mover = (new Movers.Group()
      ..add(rotater)
      ..add(roller)
      ..add(zoom));

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..light = new Lights.Directional(
          direction: new Math.Vector3(-1.0, -1.0, -1.0),
          color: new Math.Color4.white());

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 3.0));

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  Textures.TextureCube color = td.textureLoader.loadCubeFromPath("../resources/earthColor");
  tech.material = new Materials.TextureCube(
    emissionColor: new Math.Color4.transparent(),
    ambientColor: new Math.Color4(0.2, 0.2, 0.2),
    diffuseColor: new Math.Color4(0.8, 0.8, 0.8),
    ambientTexture: color,
    diffuseTexture: color,
    specularTexture: td.textureLoader.loadCubeFromPath("../resources/earthSpecular"),
    shininess: 10.0);

  _addRadioButton("Cube",         obj, () => Shapes.cube());
  _addRadioButton("Cuboid",       obj, () => Shapes.cuboid());
  _addRadioButton("Cylinder",     obj, () => Shapes.cylinder(sides: 40));
  _addRadioButton("Cone",         obj, () => Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false));
  _addRadioButton("LatLonSphere", obj, () => Shapes.latLonSphere(10, 20));
  _addRadioButton("IsoSphere",    obj, () => Shapes.isosphere(2));
  _addRadioButton("Sphere",       obj, () => Shapes.sphere(widthDiv: 6, heightDiv: 6), true);
  _addRadioButton("Toroid",       obj, () => Shapes.toroid());
  _addRadioButton("Knot",         obj, () => Shapes.knot());

  rotater.attach(td.userInput);
  zoom.attach(td.userInput);
  roller.attach(td.userInput);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}

typedef Shapes.Shape getShapeHndl();

void _addRadioButton(String text, ThreeDart.Entity obj, getShapeHndl hndl, [bool selected = false]) {
  if (selected) hndl();
  Element elem = document.getElementById("shapes");
  LabelElement label = new LabelElement()
    ..style.whiteSpace = "nowrap";
  elem.children.add(label);
  RadioButtonInputElement checkBox = new RadioButtonInputElement()
    ..checked = selected
    ..name = "shape";
  checkBox.onChange.listen((_) {
      if (checkBox.checked) {
        Shapes.Shape shape = hndl();
        shape.calculateCubeTextures();
        obj.shape = shape;
      }
    });
  label.children.add(checkBox);
  SpanElement span = new SpanElement()
    ..text = text;
  label.children.add(span);
  elem.children.add(new BRElement());
}
