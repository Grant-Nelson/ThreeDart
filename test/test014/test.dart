// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test014;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Materials.dart' as Materials;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 014", ["controls"],
    "Test of reflection and refraction.");

  Movers.UserRotater rotater = new Movers.UserRotater();
  Movers.UserZoom zoom = new Movers.UserZoom();
  Movers.UserRoller roller = new Movers.UserRoller()
    ..ctrlPressed = true;

  Views.FrontTarget target = new Views.FrontTarget()
    ..clearColor = false;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..light = new Lights.Directional(
          direction: new Math.Vector3(-1.0, -1.0, -1.0),
          color: new Math.Color4.white());

  Movers.Group mover = new Movers.Group()
    ..add(rotater)
    ..add(roller)
    ..add(zoom)
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));

  Views.Perspective camara = new Views.Perspective(mover: mover);

  Scenes.CoverPass skybox = new Scenes.CoverPass()
    ..target = target
    ..camara = camara;

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..camara = camara
    ..tech = tech
    ..target = target
    ..children.add(obj);
  (pass.target as Views.FrontTarget).clearColor = false;

  Scenes.Compound compound = new Scenes.Compound(passes: [skybox, pass]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = compound;

  rotater.attach(td.userInput);
  zoom.attach(td.userInput);
  roller.attach(td.userInput);

  skybox.tech = new Techniques.Skybox()
    ..boxColor = new Math.Color4.white()
    ..boxTexture = td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg");

  Materials.ReflSolid material = new Materials.ReflSolid(
    emission: new Math.Color4.black(),
    ambient: new Math.Color4(0.1, 0.1, 0.1),
    diffuse: new Math.Color4(0.1, 0.1, 0.1),
    specular: new Math.Color4(0.0, 0.0, 0.0, 0.0),
    shininess: 10.0,
    environment: td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"),
    refraction: 0.6,
    refractScalar: new Math.Color4(0.2, 0.3, 1.0),
    reflectScalar: new Math.Color4(0.6, 0.6, 0.6)
  );
  tech.material = material;

  new common.RadioGroup("controls")
    ..add("Silver", () {
      material.refractScalar = new Math.Color4.transparent();
      material.reflectScalar = new Math.Color4(1.0, 1.0, 1.0);
    }, true)
    ..add("Gold", () {
      material.refractScalar = new Math.Color4.transparent();
      material.reflectScalar = new Math.Color4(1.0, 0.9, 0.5);
    })
    ..add("Glass", () {
      material.refraction    = 0.4;
      material.refractScalar = new Math.Color4(0.6, 0.6, 0.6);
      material.reflectScalar = new Math.Color4(0.4, 0.4, 0.4);
    })
    ..add("Blue Glass", () {
      material.refraction    = 0.4;
      material.refractScalar = new Math.Color4(0.2, 0.3, 1.0);
      material.reflectScalar = new Math.Color4(0.3, 0.3, 0.3);
    })
    ..add("Water Bubble", () {
      material.refraction    = 0.6;
      material.refractScalar = new Math.Color4(0.8, 0.8, 0.8);
      material.reflectScalar = new Math.Color4(0.2, 0.2, 0.2);
    })
    ..add("No Reflection", () {
      material.refraction    = 0.6;
      material.refractScalar = new Math.Color4(1.0, 1.0, 1.0);
      material.reflectScalar = new Math.Color4.transparent();
    })
    ..add("Pink Distort", () {
      material.refraction    = 0.9;
      material.refractScalar = new Math.Color4(1.0, 0.8, 0.8);
      material.reflectScalar = new Math.Color4.transparent();
    })
    ..add("Cloak", () {
      material.refraction    = 1.0;
      material.refractScalar = new Math.Color4(1.0, 1.0, 1.0);
      material.reflectScalar = new Math.Color4.transparent();
    });





  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
