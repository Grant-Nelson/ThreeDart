part of hypersphere;

void startup4D(String targetName) {
  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId(targetName);

  Techniques.MaterialLight hypercubeTech = new Techniques.MaterialLight()
    ..emission.color = new Math.Color3(0.4, 0.6, 0.8);

  Techniques.MaterialLight sliceTech = new Techniques.MaterialLight()
    ..emission.color = new Math.Color3(0.8, 0.6, 0.4)
    ..alpha.value = 0.3;

  Techniques.Inspection projTech = new Techniques.Inspection()
    ..showWireFrame = true
    ..showFilled = true
    ..diffuse1 = new Math.Color4(0.2, 0.3, 0.4, 0.2)
    ..ambient1 = new Math.Color4(0.1, 0.2, 0.3, 0.2);

  Movers.Constant sliceMover = new Movers.Constant();

  Movers.Constant sphereScalar = new Movers.Constant();

  Movers.Group sliceRotation = new Movers.Group()
    ..add(new Movers.Constant.rotateX(0.4))
    ..add(new Movers.Constant.rotateY(0.4));

  Movers.Group projUserMover = new Movers.Group();

  Shapes.Shape shape = new Shapes.Shape();
  Shapes.Vertex v1 = shape.vertices.addNewLoc( 1.0, -1.0,  1.0);
  Shapes.Vertex v2 = shape.vertices.addNewLoc( 1.0,  1.0,  1.0);
  Shapes.Vertex v3 = shape.vertices.addNewLoc( 1.0,  1.0, -1.0);
  Shapes.Vertex v4 = shape.vertices.addNewLoc( 1.0, -1.0, -1.0);

  Shapes.Vertex v5 = shape.vertices.addNewLoc(-1.0, -1.0,  1.0);
  Shapes.Vertex v6 = shape.vertices.addNewLoc(-1.0,  1.0,  1.0);
  Shapes.Vertex v7 = shape.vertices.addNewLoc(-1.0,  1.0, -1.0);
  Shapes.Vertex v8 = shape.vertices.addNewLoc(-1.0, -1.0, -1.0);

  Shapes.Vertex v9 = shape.vertices.addNewLoc( 0.5, -0.5,  0.5);
  Shapes.Vertex v10 = shape.vertices.addNewLoc( 0.5,  0.5,  0.5);
  Shapes.Vertex v11 = shape.vertices.addNewLoc( 0.5,  0.5, -0.5);
  Shapes.Vertex v12 = shape.vertices.addNewLoc( 0.5, -0.5, -0.5);

  Shapes.Vertex v13 = shape.vertices.addNewLoc(-0.5, -0.5,  0.5);
  Shapes.Vertex v14 = shape.vertices.addNewLoc(-0.5,  0.5,  0.5);
  Shapes.Vertex v15 = shape.vertices.addNewLoc(-0.5,  0.5, -0.5);
  Shapes.Vertex v16 = shape.vertices.addNewLoc(-0.5, -0.5, -0.5);

  shape.lines.addLines([
    v1,  v2,  v2,  v3,  v3,  v4,  v4,  v1,
    v5,  v6,  v6,  v7,  v7,  v8,  v8,  v5,
    v9,  v10, v10, v11, v11, v12, v12, v9,
    v13, v14, v14, v15, v15, v16, v16, v13,
    v1,  v5,  v2,  v6,  v3,  v7,  v4,  v8,
    v9,  v13, v10, v14, v11, v15, v12, v16,
    v1,  v9,  v2,  v10, v3,  v11, v4,  v12,
    v5,  v13, v6,  v14, v7,  v15, v8,  v16]);

  ThreeDart.Entity hypercube = new ThreeDart.Entity()
    ..technique = hypercubeTech
    ..shape = shape
    ..mover = sliceRotation;

  ThreeDart.Entity slice = new ThreeDart.Entity()
    ..technique = sliceTech
    ..shape = Shapes.square()
    ..mover = (new Movers.Group()
      ..add(new Movers.Constant.scale(1.1, 1.1, 1.1))
      ..add(new Movers.Constant.rotateX(-Math.PI_2))
      ..add(sliceMover)
      ..add(sliceRotation));

  ThreeDart.Entity cube = new ThreeDart.Entity()
    ..shape = Shapes.cube()
    ..mover = projUserMover;

  ThreeDart.Entity sphere = new ThreeDart.Entity()
    ..shape = Shapes.isosphere(2)
    ..mover = (new Movers.Group()
      ..add(sphereScalar)
      ..add(projUserMover));

  // Create left pass
  Scenes.EntityPass slicePass = new Scenes.EntityPass()
    ..target = new Views.FrontTarget(clearColor: false)
    ..camera = (new Views.Perspective()
      ..premover = new Movers.Constant.translate(-0.5, 0.0, 0.0)
      ..mover = new Movers.Constant.translate(0.0, 0.0, 5.0))
    ..children.add(hypercube)
    ..children.add(slice);

  // Create right pass
  Scenes.EntityPass projPass = new Scenes.EntityPass()
    ..camera =  (new Views.Perspective()
      ..premover = new Movers.Constant.translate(0.5, 0.0, 0.0)
      ..mover = new Movers.Constant.translate(0.0, 0.0, 5.0))
    ..technique = projTech
    ..children.add(sphere)
    ..children.add(cube);

  // Add the left side slider control.
  double wOffset = 0.5;
  bool startInside = false;
  td.userInput.mouse.down.add((_){ startInside = true; });
  td.userInput.mouse.up.add((_){ startInside = false; });
  td.userInput.mouse.move.add((Events.EventArgs e) {
    Input.MouseEventArgs ms = e as Input.MouseEventArgs;
    if (!startInside) return;
    // If on the right size, don't move the slider.
    if (ms.adjustedPoint.x > 0.0) return;

    wOffset += ms.adjustedDelta.dy;
    wOffset = Math.clampVal(wOffset, -0.1, 1.1);

    sliceMover.matrix = new Math.Matrix4.translate(0.0, 1.0-2.0*wOffset, 0.0);

    if ((wOffset <= 0.0) || (wOffset >= 1.0)) {
      cube.enabled = false;
      sphere.enabled = false;
    } else {
      double r = sin(wOffset*Math.PI);
      sphereScalar.matrix = new Math.Matrix4.scale(r, r, r);
      cube.enabled = true;
      sphere.enabled = true;
    }

    // On the left side so don't let mouse move continue to rotator.
    ms.propagate = false;
  });

  // Add the right side user rotator after the left side.
  projUserMover
    ..add(new Movers.UserRotator(input: td.userInput, invertY: true))
    ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
    ..add(new Movers.UserZoom(input: td.userInput));

  // Add the two parts of the scene to the ouput.
  td.scene = new Scenes.Compound(passes: [projPass, slicePass]);
}