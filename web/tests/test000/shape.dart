part of ThreeDart.test.test000;

void addShapeTests(TestManager tests) {
  
  tests.add("Simple Shapes Octree Test", (TestArgs args) {
    Math.Cube maxCube = new Math.Cube(-10.0, -10.0, -10.0, 20.0);
    Shapes.Shape shape = new Shapes.Shape(maxCube);

    args.info("Empty Shape:\n");
    checkOctree(args, shape, [
      "--Octree"]);

    args.info("One Point Shape:\n");
    shape.vertices.addNewLoc(0.0, 0.0, 0.0);
    checkOctree(args, shape, [
      "--Octree",
      "  +-vertex count: 1",
      "  +-depth: 32",
      "  +-path: [0000 0000 0000 0000 0000 0000 0000 0007]",
      "  '-root: leaf",
      "    +-path:  [0000 0000 0000 0000 0000 0000 0000 0007]",
      "    +-depth: 32",
      "    +-cube:  [0.000, 0.000, 0.000, 0.000]",
      "    '-vertices",
      "      '-{0, [0.000, 0.000, 0.000], -, -, -, -, -, 0.000, -}"]);

    args.info("Four Point Shape:\n");
    shape.vertices.addNewLoc(1.0, 0.0, 0.0);
    shape.vertices.addNewLoc(1.0, 1.0, 0.0);
    shape.vertices.addNewLoc(0.0, 1.0, 0.0);
    checkOctree(args, shape, [
      "--Octree",
      "  +-vertex count: 4",
      "  +-depth: 1",
      "  +-path: [0]",
      "  '-root: branch",
      "    +-0. leaf",
      "    | +-path: [0000 0000 0000 0000 0000 0000 0000 0070]",
      "    | '-vertices",
      "    |   '-{0, [0.000, 0.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    +-1. leaf",
      "    | +-path: [0110 0110 0110 0110 0110 0110 0110 0070]",
      "    | '-vertices",
      "    |   '-{1, [1.000, 0.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    +-2. leaf",
      "    | +-path: [0220 0220 0220 0220 0220 0220 0220 0070]",
      "    | '-vertices",
      "    |   '-{3, [0.000, 1.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    '-3. leaf",
      "      +-path: [0330 0330 0330 0330 0330 0330 0330 0070]",
      "      '-vertices",
      "        '-{2, [1.000, 1.000, 0.000], -, -, -, -, -, 0.000, -}"]);
      
    args.info("Inner Point Shape:\n");
    shape.vertices.addNewLoc(0.1, 0.0, 0.0);
    checkOctree(args, shape, [
      "--Octree",
      "  +-vertex count: 5",
      "  +-depth: 1",
      "  +-path: [0]",
      "  '-root: branch",
      "    +-0. leaf",
      "    | +-path: [0000 0000 0000 0000 0000 0000 0000 0070]",
      "    | '-vertices",
      "    |   '-{0, [0.000, 0.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    +-1. branch",
      "    | +-0. leaf",
      "    | | +-path: [0101 0000 1110 1011 1100 0101 0000 0070]",
      "    | | '-vertices",
      "    | |   '-{4, [0.100, 0.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    | '-1. leaf",
      "    |   +-path: [0110 0110 0110 0110 0110 0110 0110 0070]",
      "    |   '-vertices",
      "    |     '-{1, [1.000, 0.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    +-2. leaf",
      "    | +-path: [0220 0220 0220 0220 0220 0220 0220 0070]",
      "    | '-vertices",
      "    |   '-{3, [0.000, 1.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    '-3. leaf",
      "      +-path: [0330 0330 0330 0330 0330 0330 0330 0070]",
      "      '-vertices",
      "        '-{2, [1.000, 1.000, 0.000], -, -, -, -, -, 0.000, -}"]);
  });

  tests.add("Validate Cube Test", (TestArgs args) {
    Shapes.Shape cube = Shapes.cube();
    cube.validate(args);
    args.info(cube.octree.toString());
  });

  tests.add("Validate Sphere Test", (TestArgs args) {
    Shapes.Shape sphere = Shapes.sphere();
    sphere.validate(args);
    args.info(sphere.octree.toString());
  });
}

void checkOctree(TestArgs args, Shapes.Shape shape, List<String> expLines) {
  String result = shape.octree.toString();
  String exp = expLines.join("\n");
  if (result != exp) {
    args.error("Unexpected Octree String Tree:" +
      "\n   Result:   " + result.replaceAll("\n", "\n             ") +
      "\n   Expected: " + exp.replaceAll("\n", "\n             ") + "\n\n");
  } else args.info(result+"\n\n");
}
