part of hypersphere;

void startup2D(String targetName) {
  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId(targetName);

  Techniques.MaterialLight squareTech = new Techniques.MaterialLight()
    ..emission.color = new Math.Color3(0.4, 0.6, 0.8);

  Techniques.MaterialLight sliceTech = new Techniques.MaterialLight()
    ..emission.color = new Math.Color3(0.8, 0.6, 0.4)
    ..alpha.value = 0.3;

  Techniques.MaterialLight projTech = new Techniques.MaterialLight()
    ..emission.color = new Math.Color3(0.4, 0.6, 0.8)
    ..alpha.value = 0.3;

  Movers.Constant sliceMover = new Movers.Constant();

  Movers.Constant sphereScalar = new Movers.Constant();

  ThreeDart.Entity squareCircle = new ThreeDart.Entity()
    ..technique = squareTech
    ..shape = (new Shapes.Shape()
      ..merge(Shapes.square(frameOnly: true))
      ..merge(Shapes.disk(sides: 36, frameOnly: true)));

  ThreeDart.Entity slice = new ThreeDart.Entity()
    ..technique = sliceTech
    ..shape = Shapes.line()
    ..mover = (new Movers.Group()
      ..add(new Movers.Constant.scale(1.3, 1.3, 1.3))
      ..add(new Movers.Constant.rotateX(-Math.PI_2))
      ..add(sliceMover));

  ThreeDart.Entity squareLine = new ThreeDart.Entity()
    ..shape = Shapes.line()
    ..mover = (new Movers.Group()
      ..add(new Movers.Constant.translate(0.0, 0.0, 0.1)));

  ThreeDart.Entity circleLine = new ThreeDart.Entity()
    ..shape = Shapes.line()
    ..mover = (new Movers.Group()
      ..add(sphereScalar));

  // Create left pass
  Scenes.EntityPass slicePass = new Scenes.EntityPass()
    ..target = new Views.FrontTarget(clearColor: false)
    ..camera = (new Views.Perspective()
      ..premover = new Movers.Constant.translate(-0.5, 0.0, 0.0)
      ..mover = new Movers.Constant.translate(0.0, 0.0, 5.0))
    ..children.add(slice)
    ..children.add(squareCircle);

  // Create right pass
  Scenes.EntityPass projPass = new Scenes.EntityPass()
    ..camera =  (new Views.Perspective()
      ..premover = new Movers.Constant.translate(0.5, 0.0, 0.0)
      ..mover = new Movers.Constant.translate(0.0, 0.0, 5.0))
    ..technique = projTech
    ..children.add(circleLine)
    ..children.add(squareLine);

  // Add the left side slider control.
  double wOffset = 0.5;
  bool startInside = false;
  td.userInput.mouse.down.add((_){ startInside = true; });
  td.userInput.mouse.up.add((_){ startInside = false; });
  td.userInput.mouse.move.add((Events.EventArgs e) {
    Input.MouseEventArgs ms = e as Input.MouseEventArgs;
    if (!startInside) return;

    wOffset += ms.adjustedDelta.dy;
    wOffset = Math.clampVal(wOffset, -0.1, 1.1);

    sliceMover.matrix = new Math.Matrix4.translate(0.0, 1.0-2.0*wOffset, 0.0);

    if ((wOffset <= 0.0) || (wOffset >= 1.0)) {
      squareLine.enabled = false;
      circleLine.enabled = false;
    } else {
      double r = sin(wOffset*Math.PI);
      sphereScalar.matrix = new Math.Matrix4.scale(r, r, r);
      squareLine.enabled = true;
      circleLine.enabled = true;
    }
  });

  // Add the two parts of the scene to the ouput.
  td.scene = new Scenes.Compound(passes: [projPass, slicePass]);
}