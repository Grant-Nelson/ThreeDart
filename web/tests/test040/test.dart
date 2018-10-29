library ThreeDart.test.test040;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Data.dart' as Data;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Test 040")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A combination of bump mapping with height map and specular map."])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Textures.Texture2D txt = td.textureLoader.load2DFromFile("../resources/gravel/colorLarge.png");
  Textures.Texture2D bump = td.textureLoader.load2DFromFile("../resources/gravel/bumpSmall.png");
  Textures.Texture2D spec = td.textureLoader.load2DFromFile("../resources/gravel/specularSmall.png");
  Textures.Texture2D height = td.textureLoader.load2DFromFile("../resources/gravel/heightSmall.png");
  
  Movers.Group mover = new Movers.Group([
    new Movers.Constant.translate(0.0, 0.0, 2.0),
    new Movers.Rotater(deltaYaw: 0.6, deltaPitch: 0.1, deltaRoll: 0.0)
  ]);
  
  ThreeDart.Entity bulb = new ThreeDart.Entity(shape: Shapes.sphere(radius: 0.03))
    ..mover = mover
    ..technique = new Techniques.MaterialLight.glow();

  Lights.Point light = new Lights.Point(color: new Math.Color3.white(),
    mover: mover, attenuation0: 0.5, attenuation1: 0.1, attenuation2: 0.0);

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(light)
    ..ambient.color = new Math.Color3.gray(0.3)
    ..ambient.texture2D = txt
    ..diffuse.texture2D = txt
    ..specular.shininess = 100.0
    ..specular.texture2D = spec
    ..bump.texture2D = bump;
    
  ThreeDart.Entity entity = new ThreeDart.Entity(tech: tech);
  height.changed.add((_) {
    Textures.TextureReader heightReader = td.textureLoader.readAll(height);
    Shapes.Shape shape = Shapes.grid(widthDiv: 150, heightDiv: 150);
    shape.calculateNormals();
    shape.applyHeightMap(heightReader, 0.05);
    shape.trimVertices(~Data.VertexType.Norm);
    shape.trimFaces(norm: false);
    shape.calculateNormals();
    entity.shape = shape;
  });

  Scenes.EntityPass pass = new Scenes.EntityPass(children: [entity, bulb])
    ..camera.mover = new Movers.Group([
      new Movers.UserRotater(input: td.userInput),
      new Movers.UserZoom(input: td.userInput),
      new Movers.Constant.translate(0.0, 0.0, 5.0)
    ]);

  td.scene = pass;

  common.showFPS(td);
}
