part of ThreeDart.test.test000;

void addShapeTests(TestManager tests) {

  tests.add("Shape Octree Path Test", (TestArgs args) {
    checkPathStr(args, new Shapes.Path(0, 0, 0), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0000]");

    checkPathStr(args, new Shapes.Path(0, 0, 0), 4, "[0000]");
    checkPathStr(args, new Shapes.Path(1, 0, 0), 4, "[1000]");
    checkPathStr(args, new Shapes.Path(0, 1, 0), 4, "[2000]");
    checkPathStr(args, new Shapes.Path(1, 1, 0), 4, "[3000]");

    checkPathStr(args, new Shapes.Path(0, 0, 1), 4, "[4000]");
    checkPathStr(args, new Shapes.Path(1, 0, 1), 4, "[5000]");
    checkPathStr(args, new Shapes.Path(0, 1, 1), 4, "[6000]");
    checkPathStr(args, new Shapes.Path(1, 1, 1), 4, "[7000]");

    checkPathStr(args, new Shapes.Path(2, 0, 0), 4, "[0100]");
    checkPathStr(args, new Shapes.Path(3, 0, 0), 4, "[1100]");
    checkPathStr(args, new Shapes.Path(4, 0, 0), 4, "[0010]");
    checkPathStr(args, new Shapes.Path(5, 0, 0), 4, "[1010]");
    
    checkPathStr(args, new Shapes.Path(0, 2, 0), 4, "[0200]");
    checkPathStr(args, new Shapes.Path(0, 3, 0), 4, "[2200]");
    checkPathStr(args, new Shapes.Path(0, 4, 0), 4, "[0020]");
    checkPathStr(args, new Shapes.Path(0, 5, 0), 4, "[2020]");
    
    checkPathStr(args, new Shapes.Path(0, 0, 2), 4, "[0400]");
    checkPathStr(args, new Shapes.Path(0, 0, 3), 4, "[4400]");
    checkPathStr(args, new Shapes.Path(0, 0, 4), 4, "[0040]");
    checkPathStr(args, new Shapes.Path(0, 0, 5), 4, "[4040]");
  });
  
  tests.add("Shape Octree Path Component Conversions Test", (TestArgs args) {
    Math.Cube maxCube = new Math.Cube(-5000.0, -5000.0, -5000.0, 10000.0);
    checkPathCompConv(args, maxCube,   0.0, 1073741824);

    checkPathCompConv(args, maxCube,   1.0, 1073956572);
    checkPathCompConv(args, maxCube,   2.0, 1074171320);
    checkPathCompConv(args, maxCube,   3.0, 1074386069);

    checkPathCompConv(args, maxCube,  -1.0, 1073527075);
    checkPathCompConv(args, maxCube,  -2.0, 1073312327);
    checkPathCompConv(args, maxCube,  -3.0, 1073097578);

    checkPathCompConv(args, maxCube,  10.0, 1075889307);
    checkPathCompConv(args, maxCube,  20.0, 1078036791);
    checkPathCompConv(args, maxCube,  30.0, 1080184274);

    checkPathCompConv(args, maxCube, -10.0, 1071594340);
    checkPathCompConv(args, maxCube, -20.0, 1069446856);
    checkPathCompConv(args, maxCube, -30.0, 1067299373);

    checkPathCompConv(args, maxCube,  5000.0, 2147483647);
    checkPathCompConv(args, maxCube, -5000.0, 0);
  });
  
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
      "  +-path: [0000 0000 0000 0000 0000 0000 0000 0070]",
      "  '-root: leaf",
      "    +-path: [0000 0000 0000 0000 0000 0000 0000 0070]",
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
}

void checkPathStr(TestArgs args, Shapes.Path path, int depth, String exp) {
  String result = path.toString(depth);
  if (result != exp) {
    args.error("Unexpected Octree Path String:" +
      "\n   Depth:    $depth" +
      "\n   Result:   " + result.replaceAll("\n", "\n             ") +
      "\n   Expected: " + exp.replaceAll("\n", "\n             ") + "\n\n");
  }
}

void checkPathCompConv(TestArgs args, Math.Cube maxCube, double x, int v) {
  Shapes.Path path = new Shapes.Path.fromPoint(new Math.Point3(x, 0.0, 0.0), maxCube);
  double x2 = path.location(maxCube).x;
  Shapes.Path path2 = new Shapes.Path.fromPoint(new Math.Point3(x2, 0.0, 0.0), maxCube);
  if ((path.x != v) || (path2.x != v)) {
    args.error("Unexpected Path Coordinate Conversion:" +
      "\n   Component:  $x" +
      "\n   Nearest:    $x2" +
      "\n   Expected.X: $v" +
      "\n   Path.X:     ${path.x}" +
      "\n   Path2.X:    ${path2.x}\n\n");
  } else args.info("$x => $v\n\n");
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
