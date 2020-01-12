library ThreeDart.test.test034;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Events.dart' as Events;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Views.dart' as Views;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Test 043")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of the color picker, used to read the color of a pixel from a texture. "+
      "It uses a back buffer with solid colored entities to pick which one to move. "+
      "Also testing out the ability to screen shot a back buffer."])
    ..addControlBoxes(["buttons"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Movers.Group mover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));
  Views.Perspective userCamera = new Views.Perspective(mover: mover);

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

  List<Movers.Rotater> cubeMovers = new List<Movers.Rotater>();
  List<Math.Color4> pickerColors = new List<Math.Color4>();
  final int cubeCount = 125;

  ThreeDart.Entity cubeEntity  = new ThreeDart.Entity(shape: Shapes.cube());
  ThreeDart.Entity colorGroup  = new ThreeDart.Entity();
  ThreeDart.Entity pickerGroup = new ThreeDart.Entity();
  for (double x = -1.6; x <= 1.7; x += 0.8) {
    for (double y = -1.6; y <= 1.7; y += 0.8) {
      for (double z = -1.6; z <= 1.7; z += 0.8) {
        Math.Matrix4 mat = new Math.Matrix4.translate(x, y, z)*
                           new Math.Matrix4.scale(0.2, 0.2, 0.2);
        Movers.Mover mover = new Movers.Rotater(deltaPitch: 0.0, deltaRoll: 0.0, deltaYaw: 0.0);
        cubeMovers.add(mover);

        Movers.Group group = new Movers.Group()
          ..add(mover)
          ..add(new Movers.Constant(mat));

        ThreeDart.Entity colorEntity = new ThreeDart.Entity()
          ..technique = colorTech
          ..mover = group
          ..children.add(cubeEntity);
        colorGroup.children.add(colorEntity);

        Math.Color4 color = Math.Color4.fromHVS(pickerColors.length/cubeCount, 1.0, 1.0).trim32();
        pickerColors.add(color);

        ThreeDart.Entity pickEntity = new ThreeDart.Entity()
          ..technique = new Techniques.SolidColor(color: color)
          ..mover = group
          ..children.add(cubeEntity);
        pickerGroup.children.add(pickEntity);
      }
    }
  }

  Views.BackTarget backTarget = new Views.BackTarget(
    autoResizeScalarX: 0.5, autoResizeScalarY: 0.5, autoResize: true);
  Scenes.EntityPass pickerPass = new Scenes.EntityPass()
    ..children.add(pickerGroup)
    ..target = backTarget
    ..camera = userCamera;

  Views.FrontTarget frontTarget = new Views.FrontTarget(clearColor: false);
  Scenes.EntityPass colorPass = new Scenes.EntityPass()
    ..children.add(colorGroup)
    ..target = frontTarget
    ..camera = userCamera;

  Scenes.CoverPass skybox = new Scenes.CoverPass.skybox(
    td.textureLoader.loadCubeFromPath("../resources/maskonaive", ext: ".jpg"))
    ..target = frontTarget
    ..camera = userCamera;

  Techniques.TextureLayout layout = new Techniques.TextureLayout();
  layout.entries.add(new Techniques.TextureLayoutEntry()
    ..destination = new Math.Region2(0.0, 0.75, 0.25, 0.25)
    ..texture = backTarget.colorTexture);

  Scenes.CoverPass layoutCover = new Scenes.CoverPass()
    ..technique = layout
    ..target = frontTarget;

  td.prerender.add((_) {
      for (int i = 0; i < cubeMovers.length; ++i) {
        Movers.Rotater mover = cubeMovers[i];
        mover.deltaPitch = 0.99*mover.deltaPitch;
        mover.deltaRoll = 0.99*mover.deltaRoll;
      }
  });

  new Textures.ColorPicker(td.textureLoader, input: td.userInput, txt: backTarget.colorTexture)
    ..colorPicked.add((Events.EventArgs args) {
      Textures.ColorPickerEventArgs pickArgs = args as Textures.ColorPickerEventArgs;
      Math.Color4 color = pickArgs.color.trim32();
      for (int i = 0; i < pickerColors.length; ++i) {
        if (pickerColors[i] == color) {
          Movers.Rotater mover = cubeMovers[i];
          mover.deltaPitch = 1.21;
          mover.deltaRoll = 1.31;
          break;
        }
      }
    });

  td.scene = new Scenes.Compound(passes: [pickerPass, skybox, colorPass, layoutCover]);

  new common.ButtonGroup("buttons")
    ..add("Back target snapshot", () {
        td.textureLoader.readAll(backTarget.colorTexture, true).savePng("backBuffer.png");
      });

  common.showFPS(td);
}
