library ThreeDart.test.test045;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Shaders.dart' as Shaders;
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

  Movers.Group lightMover = new Movers.Group()
    ..add(new Movers.Constant.translate(0.0, 0.0, -4.0))
    ..add(new Movers.UserRotater(input: td.userInput, ctrl: true));

  Lights.Spot spot = new Lights.Spot(
    mover:        lightMover,
    color:        new Math.Color3.white(),
    enableCutOff: true,
    fov:          0.5,
    ratio:        1.0,
    attenuation0: 0.0,
    attenuation1: 0.1,
    attenuation2: 0.0,
    texture:      td.textureLoader.load2DFromFile("../resources/Test.png"));

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(spot)
    ..ambient.color = new Math.Color3.gray(0.1)
    ..diffuse.color = new Math.Color3.gray(0.7)
    ..specular.color = new Math.Color3.gray(0.3)
    ..specular.shininess = 100.0;

  ThreeDart.Entity centerObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant.scale(8.0, 8.0, 8.0)
    ..shape = (Shapes.cube()..flip());

  Movers.Group camMover = new Movers.Group()
  ..add(new Movers.UserRotater(input: td.userInput))
  ..add(new Movers.Constant.rotateX(Math.PI))
  ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));

  ThreeDart.Entity lightSource = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
                ..add(new Movers.Constant.scale(0.1, 0.1, 0.1))
                ..add(lightMover))
    ..shape = Shapes.cylinder(bottomRadius: 0.0, sides: 40, capBottom: false)
    ..technique = new Techniques.MaterialLight.glow();

  Views.BackTarget colorTarget = new Views.BackTarget();

  Scenes.EntityPass colorPass = new Scenes.EntityPass()
    ..target = colorTarget
    ..technique = tech
    ..children.add(centerObj)
    ..children.add(room)
    ..children.add(lightSource)
    ..camera.mover = camMover;

  Views.BackTarget shadow = new Views.BackTarget();

  Views.Perspective shadowCam = new Views.Perspective(
    mover: (new Movers.Group()
            ..add(Movers.Constant.scale(-1.0, 1.0, -1.0))
            ..add(Movers.Invert(lightMover))
            ..add(Movers.Constant.rotateZ(Math.PI))
          ),
    fov: 0.8);
  
  Scenes.EntityPass shadowPass = new Scenes.EntityPass()
    ..target = shadow
    ..technique = tech
    ..children.add(centerObj)
    ..children.add(room)
    ..children.add(lightSource)
    ..camera = shadowCam;

  //spot.shadow = shadow.colorTexture;

  Techniques.TextureLayout layoutTech = new Techniques.TextureLayout()
    ..blend = Shaders.ColorBlendType.Overwrite
    ..entries.add(new Techniques.TextureLayoutEntry(
      texture: shadow.colorTexture,
      destination: new Math.Region2(0.0, 0.0, 0.5, 1.0)))
    ..entries.add(new Techniques.TextureLayoutEntry(
      texture: colorTarget.colorTexture,
      destination: new Math.Region2(0.5, 0.0, 0.5, 1.0)));

  Scenes.CoverPass layout = new Scenes.CoverPass()
    ..target = new Views.FrontTarget(clearColor: false)
    ..technique = layoutTech;

  td.scene = new Scenes.Compound(passes: [shadowPass, colorPass, layout]);

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
