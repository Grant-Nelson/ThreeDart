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
  
  tests.add("Simple Shapes Octree Test", (TestArgs args) {
    Shapes.Shape shape = new Shapes.Shape();

    args.info("Empty Shape:\n");
    checkOctree(args, shape, [
      "--Octree"]);

    args.info("One Point Shape:\n");
    shape.vertices.addNewLoc(0.0, 0.0, 0.0);
    checkOctree(args, shape, []);

    args.info("Two Point Shape:\n");
    shape.vertices.addNewLoc(1.0, 0.0, 0.0);
    checkOctree(args, shape, []);
    
    args.info("Three Point Shape:\n");
    shape.vertices.addNewLoc(1.0, 1.0, 0.0);
    checkOctree(args, shape, []);
    
    args.info("Four Point Shape:\n");
    shape.vertices.addNewLoc(0.0, 1.0, 0.0);
    checkOctree(args, shape, []);
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

void checkOctree(TestArgs args, Shapes.Shape shape, List<String> expLines) {
  String result = shape.octree.toString();
  String exp = expLines.join("\n");
  if (result != exp) {
    args.error("Unexpected Octree String Tree:" +
      "\n   Result:   " + result.replaceAll("\n", "\n             ") +
      "\n   Expected: " + exp.replaceAll("\n", "\n             ") + "\n\n");
  }
}
