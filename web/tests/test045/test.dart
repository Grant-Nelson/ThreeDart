library ThreeDart.test.test045;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Views.dart' as Views;
import '../../common/common.dart' as common;

void main() {
  common.ShellPage page = new common.ShellPage("Test 045")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of the Material Lighting shader with a textured spot light. ",
      "Use Ctrl plus the mouse to move the light."])
    ..addControlBoxes(["shapes"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Views.BackTarget shadow = new Views.BackTarget();

  Movers.Group lightMover = new Movers.Group()
    ..add(new Movers.Constant.translate(0.0, 0.0, -4.0))
    //..add(new Movers.Rotator())
    ..add(new Movers.UserRotator(input: td.userInput, ctrl: true));

  Lights.Spot spot = new Lights.Spot(
    mover:        lightMover,
    shadow:       shadow.colorTexture,
    texture:      td.textureLoader.load2DFromFile("../resources/Test.png"),
    color:        new Math.Color3.white(),
    enableCutOff: false,
    fov:          0.5,
    ratio:        1.0,
    attenuation0: 0.0,
    attenuation1: 0.1,
    attenuation2: 0.0);

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(spot)
    ..ambient.color = new Math.Color3.gray(0.1)
    ..diffuse.color = new Math.Color3.gray(0.7)
    ..specular.color = new Math.Color3.gray(0.3)
    ..specular.shininess = 100.0;

  ThreeDart.Entity centerObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant.scale(5.0, 5.0, 5.0)
    ..shape = (Shapes.cube()..flip());

  Movers.Group camMover = new Movers.Group()
    ..add(new Movers.UserRotator(input: td.userInput))
    ..add(new Movers.Constant.rotateX(Math.PI))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));

  ThreeDart.Entity lightSource = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
                ..add(new Movers.Constant.scale(0.1, 0.1, 0.1))
                ..add(lightMover))
    ..shape = Shapes.cylinder(bottomRadius: 0.0, sides: 40, capBottom: false)
    ..technique = new Techniques.MaterialLight.glow();

  Scenes.EntityPass colorPass = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(centerObj)
    ..children.add(room)
    ..children.add(lightSource)
    ..camera.mover = camMover;

  // TODO: Determine how to setup camera without the hardcoded constants.
  Views.Perspective shadowCam = new Views.Perspective(
    mover: (new Movers.Group()
            ..add(Movers.Constant.scale(-1.0, 1.0, -1.0))
            ..add(Movers.Invert(lightMover))
            ..add(Movers.Constant.rotateZ(Math.PI))
            ..add(Movers.Constant.translate(0.0, 0.0, 2.0))
          ),
    fov: 0.5);
  
  Scenes.EntityPass shadowPass = new Scenes.EntityPass()
    ..target = shadow
    ..technique = new Techniques.Depth(start: 1.0, stop: 20.0, focus: true)
    ..children.add(centerObj)
    ..children.add(room)
    ..camera = shadowCam;

  td.scene = new Scenes.Compound(passes: [shadowPass, colorPass]);

  new common.RadioGroup("shapes")
    ..add("Cube",     () { centerObj.shape = Shapes.cube(); })
    ..add("Cylinder", () { centerObj.shape = Shapes.cylinder(sides: 40); })
    ..add("Bar",      () { centerObj.shape = Shapes.cylinder(topRadius: 0.2, bottomRadius: 0.2, sides: 40); })
    ..add("Cone",     () { centerObj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("Sphere",   () { centerObj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Toroid",   () { centerObj.shape = Shapes.toroid(); }, true)
    ..add("Knot",     () { centerObj.shape = Shapes.knot(); });

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
