library ThreeDart.test.test037;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Data.dart' as Data;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Test 037")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A test of applying a height map to an image. ",
      "Some shapes will take a bit to calculate depending on quality of mapping."])
    ..addControlBoxes(["heightMaps", "shapes", "scalars"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(1.0, 1.0, -3.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuse.color = new Math.Color3(0.0, 1.0, 0.0)
    ..specular.color = new Math.Color3(1.0, 0.0, 0.0)
    ..specular.shininess = 10.0;

  ThreeDart.Entity objTech = new ThreeDart.Entity()
    ..technique = tech;

  ThreeDart.Entity group = new ThreeDart.Entity()
    ..children.add(objTech)
    ..mover = (new Movers.Group()
      ..add(new Movers.UserRotator(input: td.userInput))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput)));

  td.scene = new Scenes.EntityPass()
    ..children.add(group)
    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);

  Shapes.Shape baseShape = null;
  String textureFile = "";
  double scalar = 1.0;
  var updateShape = () {
    if ((baseShape != null) && (textureFile.isNotEmpty)) {
      Textures.Texture2D heightMap = td.textureLoader.load2DFromFile(textureFile);
      heightMap.changed.add((_) {
        Textures.TextureReader heightReader = td.textureLoader.readAll(heightMap);
        Shapes.Shape shape = new Shapes.Shape.copy(baseShape);
        shape.calculateNormals();
        shape.applyHeightMap(heightReader, scalar);
        shape.trimVertices(~Data.VertexType.Norm);
        shape.trimFaces(norm: false);
        shape.calculateNormals();
        objTech.shape = shape;
      });
    }
  };

  var setTextureFile = (String fileName) {
    textureFile = fileName;
    updateShape();
  };
  new common.Texture2DGroup("heightMaps", setTextureFile)
    ..add("../resources/HeightMap1.png", true)
    ..add("../resources/HeightMap2.png")
    ..add("../resources/HeightMap3.png")
    ..add("../resources/HeightMap4.png")
    ..add("../resources/ScrewHeightMap.png");

  var setShape = (Shapes.Shape shape) {
    baseShape = shape;
    updateShape();
  };
  new common.RadioGroup("shapes")
    ..add("Cuboid",       () { setShape(Shapes.cuboid(widthDiv: 50, heightDiv: 50)); })
    ..add("Cylinder",     () { setShape(Shapes.cylinder(sides: 80, div: 80, capTop: false, capBottom: false)); })
    ..add("LatLonSphere", () { setShape(Shapes.latLonSphere(80, 80)); })
    ..add("Sphere",       () { setShape(Shapes.sphere(widthDiv: 50, heightDiv: 50)); })
    ..add("Toroid",       () { setShape(Shapes.toroid(minorCount: 50, majorCount: 50)); })
    ..add("Grid Small",   () { setShape(Shapes.grid(widthDiv: 50, heightDiv: 50)); })
    ..add("Grid Medium",  () { setShape(Shapes.grid(widthDiv: 100, heightDiv: 100)); }, true)
    ..add("Grid Large",   () { setShape(Shapes.grid(widthDiv: 150, heightDiv: 150)); });

  var setScalar = (double s) {
    scalar = s;
    updateShape();
  };
  new common.RadioGroup("scalars")
    ..add("0.1", () { setScalar(0.1); })
    ..add("0.2", () { setScalar(0.2); })
    ..add("0.4", () { setScalar(0.4); })
    ..add("0.6", () { setScalar(0.6); }, true)
    ..add("0.8", () { setScalar(0.8); })
    ..add("1.0", () { setScalar(1.0); });

  common.showFPS(td);
}
