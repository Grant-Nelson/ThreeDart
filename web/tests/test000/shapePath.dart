part of ThreeDart.test.test000;

void addShapePathTests(TestManager tests) {

  tests.add("Shape Octree Path Test", (TestArgs args) {
    //                                                                   |< MSB                           LSB >|
    checkPathStr(args, new Shapes.Path(0, 0, 0), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0000]");
    checkPathStr(args, new Shapes.Path(1, 0, 0), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0001]");
    checkPathStr(args, new Shapes.Path(0, 1, 0), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0002]");
    checkPathStr(args, new Shapes.Path(1, 1, 0), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0003]");

    checkPathStr(args, new Shapes.Path(0, 0, 1), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0004]");
    checkPathStr(args, new Shapes.Path(1, 0, 1), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0005]");
    checkPathStr(args, new Shapes.Path(0, 1, 1), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0006]");
    checkPathStr(args, new Shapes.Path(1, 1, 1), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0007]");

    checkPathStr(args, new Shapes.Path(2, 2, 2), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0070]");
    checkPathStr(args, new Shapes.Path(3, 3, 3), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0077]");
    checkPathStr(args, new Shapes.Path(4, 4, 4), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0700]");
    checkPathStr(args, new Shapes.Path(5, 5, 5), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0707]");
    
    checkPathStr(args, new Shapes.Path(   10, 0, 0), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 1010]");
    checkPathStr(args, new Shapes.Path(  100, 0, 0), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0110 0100]");
    checkPathStr(args, new Shapes.Path( 1000, 0, 0), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0011 1110 1000]");
    checkPathStr(args, new Shapes.Path(10000, 0, 0), Shapes.Path.maxDepth, "[0000 0000 0000 0000 0010 0111 0001 0000]");
  });
  
  tests.add("Shape Octree Path Component Conversions Test", (TestArgs args) {
    Math.Cube maxCube = new Math.Cube(-5000.0, -5000.0, -5000.0, 10000.0);
    checkPathCoordConv(args, maxCube,   0.0, 2147483648);

    checkPathCoordConv(args, maxCube,   1.0, 2147913145);
    checkPathCoordConv(args, maxCube,   2.0, 2148342641);
    checkPathCoordConv(args, maxCube,   3.0, 2148772138);

    checkPathCoordConv(args, maxCube,  -1.0, 2147054151);
    checkPathCoordConv(args, maxCube,  -2.0, 2146624655);
    checkPathCoordConv(args, maxCube,  -3.0, 2146195158);

    checkPathCoordConv(args, maxCube,  10.0, 2151778615);
    checkPathCoordConv(args, maxCube,  30.0, 2160368550);
    checkPathCoordConv(args, maxCube, -10.0, 2143188681);
    checkPathCoordConv(args, maxCube, -30.0, 2134598746);

    checkPathCoordConv(args, maxCube,  5000.0, 4294967295);
    checkPathCoordConv(args, maxCube, -5000.0, 0);
  });
  
  tests.add("Shape Octree Path Redirect and Comparison Test", (TestArgs args) {
    Shapes.Path path0 = new Shapes.Path(0, 0, 0);
    Shapes.Path path1 = path0.redirect(7, 1);
    checkPathStr(args, path0, Shapes.Path.maxDepth, "[0000 0000 0000 0000 0000 0000 0000 0000]");
    checkPathStr(args, path1, Shapes.Path.maxDepth, "[7000 0000 0000 0000 0000 0000 0000 0000]");
    checkPathCompare(args, path0, path1, 0);
    
    Shapes.Path path2 = new Shapes.Path(1234, 4321, 5656);
    Shapes.Path path3 = path2.redirect(1, 5);
    checkPathStr(args, path2, Shapes.Path.maxDepth, "[0000 0000 0000 0000 0006 0540 3325 4012]");
    checkPathStr(args, path3, Shapes.Path.maxDepth, "[0000 1000 0000 0000 0000 0000 0000 0000]");
    checkPathCompare(args, path2, path3, 4);
    checkPathCompare(args, path2, path2, Shapes.Path.maxDepth);

    Shapes.Path path4 = path2.redirect(4, 8);
    checkPathStr(args, path4, Shapes.Path.maxDepth, "[0000 0004 0000 0000 0000 0000 0000 0000]");
    checkPathCompare(args, path2, path4, 7);

    Shapes.Path path5 = path2.redirect(5, 29);
    checkPathStr(args, path5, Shapes.Path.maxDepth, "[0000 0000 0000 0000 0006 0540 3325 5000]");
    checkPathCompare(args, path2, path5, 28);

    Shapes.Path path6 = path5.redirect(2, 32);
    checkPathStr(args, path6, Shapes.Path.maxDepth, "[0000 0000 0000 0000 0006 0540 3325 5002]");
    checkPathCompare(args, path5, path6, 31);
  });
}

void checkPathStr(TestArgs args, Shapes.Path path, int depth, String exp) {
  String result = path.toString(depth);
  if (result != exp) {
    args.error("Unexpected Octree Path String:" +
      "\n   Depth:    $depth" +
      "\n   Result:   " + result +
      "\n   Expected: " + exp + "\n\n");
  } else args.info("Pass: $result\n");
}

void checkPathCoordConv(TestArgs args, Math.Cube maxCube, double x, int v) {
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

void checkPathCompare(TestArgs args, Shapes.Path left, Shapes.Path right, int expDepth) {
  bool passed = true;
  for (int d = 0; d <= Shapes.Path.maxDepth; d++) {
    bool result = left.sameUpto(right, d);
    bool exp = d <= expDepth;
    if (exp != result) {
      passed = false;
      args.error("Unexpected Path sameUpto:" +
        "\n   Depth:          $d" +
        "\n   Expected Depth: $expDepth" +
        "\n   Result:         $result" +
        "\n   Expected:       $exp" +
        "\n   Left Path:      $left" +
        "\n   Right Path:     $right\n\n");
    }
  }

  int depth = left.commonDepth(right);
  if (depth != expDepth) {
    passed = false;
    args.error("Unexpected Path commonDepth:" +
      "\n   Depth:          $depth" +
      "\n   Expected Depth: $expDepth" +
      "\n   Left Path:      $left" +
      "\n   Right Path:     $right\n\n");
  }

  if ((left == right) != (expDepth == Shapes.Path.maxDepth)) {
    passed = false;
    args.error("Unexpected Path equals:" +
      "\n   Expected Depth: $expDepth" +
      "\n   Left Path:      $left" +
      "\n   Right Path:     $right\n\n");
  }

  if (passed) {
    args.info("Passed comparison of paths at depth:" +
      "\n   Depth:      $expDepth" +
      "\n   Left Path:  $left" +
      "\n   Right Path: $right\n\n");
  }
}
