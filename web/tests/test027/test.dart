library ThreeDart.test.test027;

import 'dart:math';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../../common/common.dart' as common;

void main() {
  common.ShellPage page = new common.ShellPage("Test 027")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of a back buffer target for rendering to a texture. ",
      "That back buffer texture is applied to a box."])
    ..addControlBoxes(["shapes"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Movers.Group firstMover =new Movers.Group()
    ..add(new Movers.Rotator())
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));
  Views.Perspective rotatorCamera = new Views.Perspective(mover: firstMover);

  Views.BackTarget backTarget = new Views.BackTarget(width: 512, height: 512, clearColor: false);

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"))
    ..target = backTarget
    ..camera = rotatorCamera;

  ThreeDart.Entity firstObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  Techniques.MaterialLight firstTech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(0.0, -1.0, -1.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuse.color = new Math.Color3(0.0, 1.0, 0.0)
    ..specular.color = new Math.Color3(1.0, 0.0, 0.0)
    ..specular.shininess = 10.0;

  Scenes.EntityPass firstPass = new Scenes.EntityPass()
    ..camera = rotatorCamera
    ..technique = firstTech
    ..target = backTarget
    ..children.add(firstObj);

  Movers.Group secondMover = new Movers.Group()
    ..add(new Movers.UserRotator(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));
  Views.Perspective userCamera = new Views.Perspective(mover: secondMover);

  ThreeDart.Entity secondObj = new ThreeDart.Entity()
    ..shape = Shapes.cube();

  Techniques.MaterialLight secondTech = new Techniques.MaterialLight()
    ..emission.texture2D = backTarget.colorTexture;

  Scenes.EntityPass secondPass = new Scenes.EntityPass()
    ..camera = userCamera
    ..technique = secondTech
    ..children.add(secondObj);

  td.scene = new Scenes.Compound(passes: [skybox, firstPass, secondPass]);

  new common.RadioGroup("shapes")
    ..add("Cube",          () { secondObj.shape = Shapes.cube(); }, true)
    ..add("Cuboid",        () { secondObj.shape = Shapes.cuboid(widthDiv: 15, heightDiv: 15,
                                vertexHndl: (Shapes.Vertex ver, double u, double v) {
                                  double height = cos(v*4.0*Math.PI+Math.PI)*0.1 + cos(u*4.0*Math.PI+Math.PI)*0.1;
                                  var loc = ver.location ?? Math.Point3.zero;
                                  Math.Vector3 vec = new Math.Vector3.fromPoint3(loc).normal();
                                  ver.location = loc + new Math.Point3.fromVector3(vec*height);
                                });
                              })
    ..add("Cylinder",      () { secondObj.shape = Shapes.cylinder(sides: 30); })
    ..add("Cone",          () { secondObj.shape = Shapes.cylinder(topRadius: 0.0, sides: 30, div: 5, capTop: false); })
    ..add("Cylindrical",   () { secondObj.shape = Shapes.cylindrical(sides: 50, div: 25,
                                radiusHndl: (double u, double v) => cos(v*4.0*Math.PI + Math.PI)*0.2 + cos(u*6.0*Math.PI)*0.3 + 0.8); })
    ..add("Sphere",        () { secondObj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Spherical",     () { secondObj.shape = Shapes.sphere(widthDiv: 10, heightDiv: 10,
                                heightHndl: (double u, double v) => cos(sqrt((u-0.5)*(u-0.5) + (v-0.5)*(v-0.5))*Math.PI)*0.3); })
    ..add("Toroid",        () { secondObj.shape = Shapes.toroid(); })
    ..add("Knot",          () { secondObj.shape = Shapes.knot(); });

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader", "glsl", 0, secondTech.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader", "glsl", 0, secondTech.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
