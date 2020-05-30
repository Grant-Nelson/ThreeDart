library ThreeDart.test.test011;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../../common/common.dart' as common;

void main() {
  common.ShellPage page = new common.ShellPage("Test 011")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A test of the Material Lighting shader with cube textures and ",
      "a directional light. The cube textures are for ambient, diffuse, ",
      "and specular."])
    ..addControlBoxes(["shapes"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.sphere()
    ..mover = (new Movers.Group()
      ..add(new Movers.UserRotator(input: td.userInput, invertY: true))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput)));

  Textures.TextureCube color = td.textureLoader.loadCubeFromPath("../resources/earthColor");
  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(-1.0, -1.0, -1.0),
          color: new Math.Color3.white()))
    ..ambient.color =  new Math.Color3(0.2, 0.2, 0.2)
    ..diffuse.color = new Math.Color3(0.8, 0.8, 0.8)
    ..ambient.textureCube = color
    ..diffuse.textureCube = color
    ..specular.textureCube = td.textureLoader.loadCubeFromPath("../resources/earthSpecular")
    ..specular.shininess = 10.0;

  td.scene = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(obj)
    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 3.0);

  new common.RadioGroup("shapes")
    ..add("Cube",         () { obj.shape = Shapes.cube(); })
    ..add("Cuboid",       () { obj.shape = Shapes.cuboid(); })
    ..add("Cylinder",     () { obj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",         () { obj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("LatLonSphere", () { obj.shape = Shapes.latLonSphere(10, 20); })
    ..add("IsoSphere",    () { obj.shape = Shapes.isosphere(2); })
    ..add("Sphere",       () { obj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); }, true )
    ..add("Toroid",       () { obj.shape = Shapes.toroid(); })
    ..add("Knot",         () { obj.shape = Shapes.knot(); });

  td.postrender.once((_){
    page
      ..addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode.split("\n"))
      ..addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode.split("\n"));
  });
  common.showFPS(td);
}
