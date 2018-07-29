library ThreeDart.test.test014;

import 'dart:math';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 014", ["controls", "shapes"],
    "Test of Material Lighting shader with different reflections and refractions. "+
    "No alpha is being used. The background cube maps is being painted onto the object.");

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart");

  Views.FrontTarget target = new Views.FrontTarget()
    ..clearColor = false;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  Textures.TextureCube environment =
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg");

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(-1.0, -1.0, -1.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.1, 0.1, 0.1)
    ..diffuse.color = new Math.Color3(0.1, 0.1, 0.1)
    ..specular.color = new Math.Color3(1.0, 1.0, 1.0)
    ..specular.shininess = 10.0
    ..environment = environment
    ..refraction.deflection = 0.6
    ..refraction.color = new Math.Color3(0.2, 0.3, 1.0)
    ..reflection.color = new Math.Color3(0.6, 0.6, 0.6);

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));

  Views.Perspective camera = new Views.Perspective(mover: mover);

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(environment)
    ..target = target
    ..camera = camera;

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..camera = camera
    ..technique = tech
    ..target = target
    ..children.add(obj);
  (pass.target as Views.FrontTarget).clearColor = false;

  td.scene = new Scenes.Compound(passes: [skybox, pass]);

  new common.RadioGroup("controls")
    ..add("Silver", () {
      tech
        ..ambient.color    = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color    = new Math.Color3(0.2, 0.2, 0.2)
        ..specular.color   = new Math.Color3(1.0, 1.0, 1.0)
        ..refraction.color = new Math.Color3.black()
        ..reflection.color = new Math.Color3(1.0, 1.0, 1.0);
    }, true)
    ..add("Gold", () {
      tech
        ..ambient.color    = new Math.Color3(0.11, 0.11, 0.1)
        ..diffuse.color    = new Math.Color3(0.21, 0.21, 0.2)
        ..specular.color   = new Math.Color3(1.0, 1.0, 1.0)
        ..refraction.color = new Math.Color3.black()
        ..reflection.color = new Math.Color3(1.0, 0.9, 0.5);
    })
    ..add("Glass", () {
      tech
        ..ambient.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..specular.color        = new Math.Color3(1.0, 1.0, 1.0)
        ..refraction.deflection = 0.4
        ..refraction.color      = new Math.Color3(0.6, 0.6, 0.6)
        ..reflection.color      = new Math.Color3(0.4, 0.4, 0.4);
    })
    ..add("Blue Glass", () {
      tech
        ..ambient.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..specular.color        = new Math.Color3(1.0, 1.0, 1.0)
        ..refraction.deflection = 0.4
        ..refraction.color      = new Math.Color3(0.2, 0.3, 1.0)
        ..reflection.color      = new Math.Color3(0.3, 0.3, 0.3);
    })
    ..add("Water Bubble", () {
      tech
        ..ambient.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..specular.color        = new Math.Color3(1.0, 1.0, 1.0)
        ..refraction.deflection = 0.6
        ..refraction.color      = new Math.Color3(0.8, 0.8, 0.8)
        ..reflection.color      = new Math.Color3(0.2, 0.2, 0.2);
    })
    ..add("No Reflection", () {
      tech
        ..ambient.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..specular.color        = new Math.Color3(1.0, 1.0, 1.0)
        ..refraction.deflection = 0.6
        ..refraction.color      = new Math.Color3(1.0, 1.0, 1.0)
        ..reflection.color      = new Math.Color3.black();
    })
    ..add("Pink Distort", () {
      tech
        ..ambient.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..specular.color        = new Math.Color3(1.0, 1.0, 1.0)
        ..refraction.deflection = 0.9
        ..refraction.color      = new Math.Color3(1.0, 0.8, 0.8)
        ..reflection.color      = new Math.Color3.black();
    })
    ..add("Cloak", () {
      tech
        ..ambient.color         = new Math.Color3(0.0, 0.0, 0.0)
        ..diffuse.color         = new Math.Color3(0.1, 0.1, 0.1)
        ..specular.color        = new Math.Color3(0.1, 0.1, 0.1)
        ..refraction.deflection = 0.99
        ..refraction.color      = new Math.Color3(0.95, 0.95, 0.95)
        ..reflection.color      = new Math.Color3.black();
    })
    ..add("White and Shiny", () {
      tech
        ..ambient.color    = new Math.Color3(0.3, 0.3, 0.3)
        ..diffuse.color    = new Math.Color3(0.5, 0.5, 0.5)
        ..specular.color   = new Math.Color3(1.0, 1.0, 1.0)
        ..refraction.color = new Math.Color3.black()
        ..reflection.color = new Math.Color3(0.3, 0.3, 0.3);
    });

  new common.RadioGroup("shapes")
    ..add("Cube",          () { obj.shape = Shapes.cube(); })
    ..add("Cuboid",        () { obj.shape = Shapes.cuboid(widthDiv: 15, heightDiv: 15,
                                vertexHndl: (Shapes.Vertex ver, double u, double v) {
                                  double height = cos(v*4.0*PI+PI)*0.1 + cos(u*4.0*PI+PI)*0.1;
                                  Math.Vector3 vec = new Math.Vector3.fromPoint3(ver.location).normal();
                                  ver.location += new Math.Point3.fromVector3(vec*height);
                                });
                              })
    ..add("Cylinder",      () { obj.shape = Shapes.cylinder(sides: 30); })
    ..add("Cone",          () { obj.shape = Shapes.cylinder(topRadius: 0.0, sides: 30, capTop: false); })
    ..add("Cylindrical",   () { obj.shape = Shapes.cylindrical(sides: 50, div: 25,
                                radiusHndl: (double u, double v) => cos(v*4.0*PI + PI)*0.2 + cos(u*6.0*PI)*0.3 + 0.8); })
    ..add("Sphere",        () { obj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Spherical",     () { obj.shape = Shapes.sphere(widthDiv: 10, heightDiv: 10,
                                heightHndl: (double u, double v) => cos(sqrt((u-0.5)*(u-0.5) + (v-0.5)*(v-0.5))*PI)*0.3); })
    ..add("Toroid",        () { obj.shape = Shapes.toroid(); }, true)
    ..add("Knot",          () { obj.shape = Shapes.knot(); });

  common.showFPS(td);
}
