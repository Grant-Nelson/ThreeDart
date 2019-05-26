library ThreeDart.test.test034;

import 'dart:html';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Views.dart' as Views;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Test 043")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of the color picker, used to read the color of a pixel from a texture"])
    ..addControlBoxes(["buttons"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));
  Views.Perspective userCamera = new Views.Perspective(mover: mover);

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..ambient.color = new Math.Color3.gray(0.3)
    ..diffuse.color = new Math.Color3.gray(0.8)
    ..diffuse.texture2D = td.textureLoader.load2DFromFile("../resources/Test.png");

  Views.BackTarget backTarget = new Views.BackTarget()
    ..autoResize = true
    ..clearColor = false;

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.cube();

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..children.add(obj)
    ..technique = tech
    ..target = backTarget
    ..camera = userCamera;

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"))
    ..target = backTarget
    ..camera = userCamera;

  Techniques.TextureLayout layout = new Techniques.TextureLayout(
    backColor: new Math.Color4.black());
  layout.entries.add(new Techniques.TextureLayoutEntry()
    ..texture = backTarget.colorTexture);

  Views.FrontTarget frontTarget = new Views.FrontTarget(color: new Math.Color4.black());
  Scenes.CoverPass layoutCover = new Scenes.CoverPass()
    ..technique = layout
    ..target = frontTarget;

  td.scene = new Scenes.Compound(passes: [skybox, pass, layoutCover]);

  new common.ButtonGroup("buttons")
    ..add("Back buffer snapshot", () {
        Textures.TextureReader img = td.textureLoader.readAll(backTarget.colorTexture);
        img.flipY();
        img.savePng("backBuffer.png");
      });

  common.showFPS(td);
}
