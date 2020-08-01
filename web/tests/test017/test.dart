library ThreeDart.test.test017;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Views.dart' as Views;
import '../../common/common.dart' as common;

void main() {
  common.ShellPage page = new common.ShellPage("Test 017")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A test of the Material Lighting shader with solid color directional "+
      "light, cube mapped textures, and a reflection map. The specular map is "+
      "also used to define where reflections are painted."])
    ..addControlBoxes(["shapes"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.sphere();

  Views.FrontTarget target = new Views.FrontTarget()
    ..clearColor = false;

  Textures.TextureCube environment =
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg");
  Textures.TextureCube specular = td.textureLoader.loadCubeFromPath("../resources/earthSpecular");
  Textures.TextureCube color = td.textureLoader.loadCubeFromPath("../resources/earthColor");
  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(-1.0, -1.0, -1.0),
          color: new Math.Color3.white()))
    ..ambient.color=  new Math.Color3(0.5, 0.5, 0.5)
    ..diffuse.color = new Math.Color3(0.5, 0.5, 0.5)
    ..ambient.textureCube = color
    ..diffuse.textureCube = color
    ..specular.textureCube = specular
    ..environment = environment
    ..reflection.textureCube = specular
    ..reflection.color = new Math.Color3(0.5, 0.5, 0.5)
    ..specular.shininess= 10.0;

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.UserRotator(input: td.userInput))
    ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
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

  td.scene = new Scenes.Compound(passes: [skybox, pass]);

  new common.RadioGroup("shapes")
    ..add("Cube",         () { obj.shape = Shapes.cube(); })
    ..add("Cuboid",       () { obj.shape = Shapes.cuboid(); })
    ..add("Cylinder",     () { obj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",         () { obj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("LatLonSphere", () { obj.shape = Shapes.latLonSphere(latitudeDiv: 10, longitudeDiv: 20); })
    ..add("IsoSphere",    () { obj.shape = Shapes.isosphere(iterations: 2); })
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
