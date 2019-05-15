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
import 'package:ThreeDart/Views.dart' as Views;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Test 040")
    ..addLargeCanvas("testCanvas")
    ..addPar(["A combination of bump mapping with height map and specular map."])
    ..addControlBoxes(["controls"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Textures.Texture2D colorTxt = td.textureLoader.load2DFromFile("../resources/gravel/colorLarge.png");
  Textures.Texture2D bump     = td.textureLoader.load2DFromFile("../resources/gravel/bumpLarge.png");
  Textures.Texture2D spec     = td.textureLoader.load2DFromFile("../resources/gravel/specularSmall.png");
  Textures.Texture2D height   = td.textureLoader.load2DFromFile("../resources/gravel/heightSmall.png");

  Movers.Group mover = new Movers.Group([
    new Movers.Constant.translate(0.0, 0.0, 2.0),
    new Movers.Rotater(deltaYaw: 0.6, deltaPitch: 0.1, deltaRoll: 0.0)
  ]);

  ThreeDart.Entity bulb = new ThreeDart.Entity(shape: Shapes.sphere(radius: 0.03))
    ..mover = mover
    ..technique = new Techniques.MaterialLight.glow();

  Lights.Point light = new Lights.Point(color: new Math.Color3.white(),
    mover: mover, attenuation0: 0.5, attenuation1: 0.1, attenuation2: 0.0);

  Shapes.Shape flatShape = Shapes.square();
  ThreeDart.Entity entity = new ThreeDart.Entity(shape: flatShape);

  Shapes.Shape heightShape;
  height.changed.add((_) {
    Textures.TextureReader heightReader = td.textureLoader.readAll(height);
    heightShape = Shapes.grid(widthDiv: 150, heightDiv: 150);
    heightShape.calculateNormals();
    heightShape.applyHeightMap(heightReader, 0.05);
    heightShape.trimVertices(~Data.VertexType.Norm);
    heightShape.trimFaces(norm: false);
    heightShape.calculateNormals();
  });

  Views.Perspective userCamera = new Views.Perspective()
    ..mover = new Movers.Group([
      new Movers.UserRotater(input: td.userInput),
      new Movers.UserZoom(input: td.userInput),
      new Movers.Constant.translate(0.0, 0.0, 5.0)
    ]);

  Techniques.MaterialLight colorTech = new Techniques.MaterialLight()
    ..lights.add(light)
    ..ambient.color = new Math.Color3.gray(0.3)
    ..diffuse.color = new Math.Color3.white()
    ..specular.shininess = 40.0;

  Views.BackTarget colorTarget = new Views.BackTarget(autoResize: true);
  Scenes.EntityPass colorPass = new Scenes.EntityPass(children: [entity, bulb])
    ..technique = colorTech
    ..camera = userCamera
    ..target = colorTarget;

  Views.BackTarget depthTarget = new Views.BackTarget(autoResize: true,
    autoResizeScalarX: 0.5, autoResizeScalarY: 0.5);

  Scenes.EntityPass depthPass = new Scenes.EntityPass(children: [entity, bulb])
    ..camera = userCamera
    ..target = depthTarget
    ..technique = new Techniques.Depth(fogStart: 0.5, fogStop: 5.5);

  Math.Vector4 blurAdj = new Math.Vector4(-1.0, 0.0, 0.0, 1.0);
  Views.BackTarget horzBlurTarget = new Views.BackTarget(autoResize: true);
  Techniques.GaussianBlur horzBlurTech = new Techniques.GaussianBlur(
    blurAdj: blurAdj,
    colorTxt: colorTarget.colorTexture,
    blurTxt: depthTarget.colorTexture);
  Scenes.CoverPass horzBlurPass = new Scenes.CoverPass()
    ..target = horzBlurTarget
    ..technique = horzBlurTech;
    
  Techniques.GaussianBlur vertBlurTech = new Techniques.GaussianBlur(
    blurAdj: blurAdj,
    colorTxt: horzBlurTarget.colorTexture,
    blurTxt: depthTarget.colorTexture);
  Scenes.CoverPass vertBlurPass = new Scenes.CoverPass()
    ..technique = vertBlurTech;

  Techniques.TextureLayout layoutTech = new Techniques.TextureLayout()
    ..entries.add(new Techniques.TextureLayoutEntry(
      texture: depthTarget.colorTexture,
      destination: new Math.Region2(0.0, 0.8, 0.2, 0.2)))
    ..entries.add(new Techniques.TextureLayoutEntry(
      texture: colorTarget.colorTexture,
      destination: new Math.Region2(0.0, 0.6, 0.2, 0.2)));

  Scenes.CoverPass layout = new Scenes.CoverPass()
    ..target = new Views.FrontTarget(clearColor: false)
    ..technique = layoutTech;

  td.scene = new Scenes.Compound(passes: [colorPass, depthPass, horzBlurPass, vertBlurPass, layout]);

  new common.CheckGroup("controls")
    ..add("Color",
      (bool show) {
        colorTech
          ..ambient.texture2D = show? colorTxt: null
          ..diffuse.texture2D = show? colorTxt: null;
      }, true)
    ..add("Specular",
      (bool show) {
        colorTech.specular.texture2D = show? spec: null;
      }, false)
    ..add("Bump",
      (bool show) {
        colorTech.bump.texture2D = show? bump: null;
      }, false)
    ..add("Height",
      (bool show) {
        entity.shape = show? heightShape: flatShape;
      }, false)
    ..add("Blur",
      (bool show) {
        horzBlurTech.blurTexture = show? depthTarget.colorTexture: null;
        vertBlurTech.blurTexture = show? depthTarget.colorTexture: null;
      }, false)
    ..add("Passes",
      (bool show) {
        layout.technique = show? layoutTech: null;
      }, false);

  common.showFPS(td);
}
