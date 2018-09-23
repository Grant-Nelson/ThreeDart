library ThreeDart.test.test036;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Views.dart' as Views;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../../common/common.dart' as common;

void main() {
  new common.ShellPage("Test 036")
    ..addLargeCanvas("testCanvas")
    ..addPar(["Test of the texture layout cover technique."])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  Movers.Group secondMover = new Movers.Group()
    ..add(new Movers.UserRotater(input: td.userInput))
    ..add(new Movers.UserRoller(ctrl: true, input: td.userInput))
    ..add(new Movers.UserZoom(input: td.userInput))
    ..add(new Movers.Constant.translate(0.0, 0.0, 5.0));
  Views.Perspective userCamera = new Views.Perspective(mover: secondMover);

  Views.BackTarget back = new Views.BackTarget(800, 600, autoResize: true)
    ..color = new Math.Color4.transparent();

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(0.0, -1.0, -1.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.0, 0.0, 1.0)
    ..diffuse.color = new Math.Color3(0.0, 1.0, 0.0)
    ..specular.color = new Math.Color3(1.0, 0.0, 0.0)
    ..specular.shininess = 10.0;

  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..camera = userCamera
    ..technique = tech
    ..target = back
    ..children.add(obj);

  Techniques.TextureLayout layout = new Techniques.TextureLayout(
    backColor: new Math.Color4.black());
  final int count = 3;
  double scale = 1.0/count.toDouble();
  for (int i = 0; i < count; ++i) {
    double xOffset = i.toDouble()*scale;
    for (int j = 0; j < count; ++j) {
      double yOffset = j.toDouble()*scale;
      layout.entries.add(new Techniques.TextureLayoutEntry(
        texture: back.colorTexture,
        destination: new Math.Region2(xOffset, yOffset, scale, scale)));
    }
  }
  layout.entries.add(new Techniques.TextureLayoutEntry()
    ..texture = back.colorTexture);

  Views.FrontTarget front = new Views.FrontTarget(color: new Math.Color4.black());
  Scenes.CoverPass layoutCover = new Scenes.CoverPass()
    ..technique = layout
    ..target = front;

  td.scene = new Scenes.Compound(passes: [pass, layoutCover]);

  common.showFPS(td);
}
