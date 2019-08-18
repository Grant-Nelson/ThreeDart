library ThreeDart.test.test028;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Shaders.dart' as Shaders;
import '../../common/common.dart' as common;

void main() {
  common.ShellPage page = new common.ShellPage("Test 028")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of a Gaussian blur cover pass. ",
      "Notice the depth of field causing things further away to be blurry."])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Movers.Group secondMover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));
  Views.Perspective userCamera = new Views.Perspective(mover: secondMover);

  ThreeDart.Entity cubeEntity = new ThreeDart.Entity(shape: Shapes.cube());
  ThreeDart.Entity group = new ThreeDart.Entity();
  for (double x = -1.6; x <= 1.7; x += 0.8) {
    for (double y = -1.6; y <= 1.7; y += 0.8) {
      for (double z = -1.6; z <= 1.7; z += 0.8) {
        Math.Matrix4 mat = new Math.Matrix4.translate(x, y, z)*
                           new Math.Matrix4.scale(0.2, 0.2, 0.2);
        ThreeDart.Entity entity = new ThreeDart.Entity()
          ..mover = new Movers.Constant(mat)
          ..children.add(cubeEntity);
        group.children.add(entity);
      }
    }
  }

  Textures.TextureCube color = td.textureLoader.loadCubeFromPath("../resources/diceColor");
  Techniques.MaterialLight colorTech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(-1.0, -1.0, -1.0),
          color: new Math.Color3(1.0, 0.9, 0.9)))
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(1.0, 1.0, 2.0),
          color: new Math.Color3(0.2, 0.2, 0.35)))
    ..ambient.color = new Math.Color3(0.2, 0.2, 0.2)
    ..ambient.textureCube = color
    ..diffuse.color = new Math.Color3(0.8, 0.8, 0.8)
    ..diffuse.textureCube = color
    ..specular.color = new Math.Color3(0.7, 0.7, 0.7)
    ..specular.shininess = 10.0
    ..bump.textureCube = td.textureLoader.loadCubeFromPath("../resources/diceBumpMap");

  Views.BackTarget colorTarget = new Views.BackTarget(autoResize: true, clearColor: false);

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"))
    ..camera = userCamera
    ..target = colorTarget;

  Scenes.EntityPass colorPass = new Scenes.EntityPass()
    ..camera = userCamera
    ..target = colorTarget
    ..technique = colorTech
    ..children.add(group);

  Views.BackTarget depthTarget = new Views.BackTarget(autoResize: true,
    autoResizeScalarX: 0.5, autoResizeScalarY: 0.5);
  Scenes.EntityPass depthPass = new Scenes.EntityPass()
    ..camera = userCamera
    ..target = depthTarget
    ..technique = new Techniques.Depth(start: 3.5, stop: 5.5)
    ..children.add(group);
  
  Scenes.GaussianBlur blurPass = new Scenes.GaussianBlur(
    blurAdj: new Math.Vector4(-1.0, 0.0, 0.0, 1.0),
    colorTxt: colorTarget.colorTexture,
    blurTxt: depthTarget.colorTexture);

  Techniques.TextureLayout layoutTech = new Techniques.TextureLayout()
    ..blend = Shaders.ColorBlendType.Overwrite
    ..entries.add(new Techniques.TextureLayoutEntry(
      texture: depthTarget.colorTexture,
      destination: new Math.Region2(0.0, 0.8, 0.2, 0.2)))
    ..entries.add(new Techniques.TextureLayoutEntry(
      texture: colorTarget.colorTexture,
      destination: new Math.Region2(0.0, 0.6, 0.2, 0.2)));
  Scenes.CoverPass layout = new Scenes.CoverPass()
    ..target = new Views.FrontTarget(clearColor: false)
    ..technique = layoutTech;

  td.scene = new Scenes.Compound(passes: [skybox, colorPass, depthPass, blurPass, layout]);

  common.showFPS(td);
}
