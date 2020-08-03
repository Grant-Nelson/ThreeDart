part of ThreeDart.test.test000;

void addShapeTests(TestManager tests) {
  
  tests.add("Shapes Octree Simple Test", (TestArgs args) {
    Math.Cube maxCube = new Math.Cube(-10.0, -10.0, -10.0, 20.0);
    Shapes.Shape shape = new Shapes.Shape(useOctree: true, octreeMaxCube: maxCube);

    args.info("Empty Shape:\n");
    checkOctree(args, shape, [
      "--Octree"]);
    shape.validate(args);

    args.info("One Point Shape:\n");
    Shapes.Vertex ver0 = shape.vertices.addNewLoc(0.0, 0.0, 0.0);
    shape.validate(args);
    checkOctree(args, shape, [
      "--Octree",
      "  +-vertex count: 1",
      "  +-depth: 32",
      "  +-path: [0000 0000 0000 0000 0000 0000 0000 0007]",
      "  '-root: leaf",
      "    +-path: [0000 0000 0000 0000 0000 0000 0000 0007]",
      "    '-vertices (1)",
      "      '-{0, [0.000, 0.000, 0.000], -, -, -, -, -, 0.000, -}"]);

    args.info("Two Point Shape:\n");
    shape.vertices.addNewLoc(1.0, 0.0, 0.0);
    shape.validate(args);
    
    args.info("Three Point Shape:\n");
    shape.vertices.addNewLoc(1.0, 1.0, 0.0);
    shape.validate(args);
    
    args.info("Four Point Shape:\n");
    Shapes.Vertex ver1 = shape.vertices.addNewLoc(0.0, 1.0, 0.0);
    shape.validate(args);
    checkOctree(args, shape, [
      "--Octree",
      "  +-vertex count: 4",
      "  +-depth: 0",
      "  +-path: []",
      "  '-root: branch",
      "    +-0. leaf",
      "    | +-path: [0000 0000 0000 0000 0000 0000 0000 0007]",
      "    | '-vertices (1)",
      "    |   '-{0, [0.000, 0.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    +-1. leaf",
      "    | +-path: [1011 0011 0011 0011 0011 0011 0011 0007]",
      "    | '-vertices (1)",
      "    |   '-{1, [1.000, 0.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    +-2. leaf",
      "    | +-path: [2022 0022 0022 0022 0022 0022 0022 0007]",
      "    | '-vertices (1)",
      "    |   '-{3, [0.000, 1.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    '-3. leaf",
      "      +-path: [3033 0033 0033 0033 0033 0033 0033 0007]",
      "      '-vertices (1)",
      "        '-{2, [1.000, 1.000, 0.000], -, -, -, -, -, 0.000, -}"]);
      
    args.info("Inner Point Shape:\n");
    Shapes.Vertex ver2 = shape.vertices.addNewLoc(0.1, 0.0, 0.0);
    shape.validate(args);
    checkOctree(args, shape, [
      "--Octree",
      "  +-vertex count: 5",
      "  +-depth: 0",
      "  +-path: []",
      "  '-root: branch",
      "    +-0. branch",
      "    | '-0. branch",
      "    |   +-0. leaf",
      "    |   | +-path: [0000 0000 0000 0000 0000 0000 0000 0007]",
      "    |   | '-vertices (1)",
      "    |   |   '-{0, [0.000, 0.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    |   '-1. leaf",
      "    |     +-path: [0010 1000 0111 0101 1110 0010 1000 0007]",
      "    |     '-vertices (1)",
      "    |       '-{4, [0.100, 0.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    +-1. leaf",
      "    | +-path: [1011 0011 0011 0011 0011 0011 0011 0007]",
      "    | '-vertices (1)",
      "    |   '-{1, [1.000, 0.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    +-2. leaf",
      "    | +-path: [2022 0022 0022 0022 0022 0022 0022 0007]",
      "    | '-vertices (1)",
      "    |   '-{3, [0.000, 1.000, 0.000], -, -, -, -, -, 0.000, -}",
      "    '-3. leaf",
      "      +-path: [3033 0033 0033 0033 0033 0033 0033 0007]",
      "      '-vertices (1)",
      "        '-{2, [1.000, 1.000, 0.000], -, -, -, -, -, 0.000, -}"]);

      shape.vertices.remove(ver0);
      shape.validate(args);
      shape.vertices.remove(ver1);
      shape.validate(args);
      shape.vertices.remove(ver2);
      shape.validate(args);
      checkOctree(args, shape, [
        "--Octree",
        "  +-vertex count: 2",
        "  +-depth: 0",
        "  +-path: []",
        "  '-root: branch",
        "    +-1. leaf",
        "    | +-path: [1011 0011 0011 0011 0011 0011 0011 0007]",
        "    | '-vertices (1)",
        "    |   '-{1, [1.000, 0.000, 0.000], -, -, -, -, -, 0.000, -}",
        "    '-3. leaf",
        "      +-path: [3033 0033 0033 0033 0033 0033 0033 0007]",
        "      '-vertices (1)",
        "        '-{2, [1.000, 1.000, 0.000], -, -, -, -, -, 0.000, -}"]);
  });

  tests.add("Shapes Octree Validate Cube Test", (TestArgs args) {
    Shapes.Shape cube = Shapes.cube(useOctree: true);
    cube.validate(args);
    args.info(cube.octree.toString());
  });

  tests.add("Shapes Delayed Octree Validate Cube Test", (TestArgs args) {
    Shapes.Shape cube = Shapes.cube(useOctree: false);
    cube.enableOctree(cube.calculateAACube());
    cube.validate(args);
    args.info(cube.octree.toString());
  });

  tests.add("Shapes Octree Validate Sphere Test", (TestArgs args) {
    Shapes.Shape sphere = Shapes.sphere(useOctree: true);
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
