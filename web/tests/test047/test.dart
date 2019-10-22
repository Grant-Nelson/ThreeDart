library ThreeDart.test.test021;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../../common/common.dart' as common;

void main() {
  common.ShellPage page = new common.ShellPage("Test 047")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of the Material Lighting shader with multiple moving point lights. ",
      "Emissive spheres are added at the lights sources."])
    ..addControlBoxes(["shapes"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  ThreeDart.Entity centerObj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput, ctrl: true)))
    ..shape = Shapes.toroid();

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant.scale(3.0, 3.0, 3.0)
    ..shape = (Shapes.cube()..flip());

  Movers.Group camMover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..ambient.color = new Math.Color3.gray(0.15)
    ..diffuse.color = new Math.Color3.gray(0.4)
    ..specular.color = new Math.Color3.gray(0.3)
    ..specular.shininess = 100.0;

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(room)
    ..children.add(centerObj)
    ..camera.mover = camMover;
  td.scene = pass;

  Math.Color3 clr = new Math.Color3(1.0, 0.0, 0.0);

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
                ..add(new Movers.Constant.scale(0.01, 0.01, 3.0)))
    ..shape = Shapes.cylinder()
    ..technique = (new Techniques.MaterialLight()
                ..emission.color = clr);

  Movers.Group startMover = new Movers.Group()
    ..add(new Movers.Constant.translate(0.0, 0.0, 3.0));
    
  Movers.Group endMover = new Movers.Group()
    ..add(new Movers.Constant.translate(0.0, 0.0, -3.0));

  Lights.Bar point = new Lights.Bar(
    startMover: startMover,
    endMover: endMover,
    color: clr,
    attenuation0: 1.0,
    attenuation1: 0.5,
    attenuation2: 0.15);

  tech.lights.add(point);
  pass.children.add(obj);


  new common.RadioGroup("shapes")
    ..add("Cube",     () { centerObj.shape = Shapes.cube(); })
    ..add("Cylinder", () { centerObj.shape = Shapes.cylinder(sides: 40); })
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
