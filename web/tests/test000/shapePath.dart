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

  tests.add("Shape Octree Path Cube Test", (TestArgs args) {
    Math.Cube maxCube = new Math.Cube(-10000.0, -10000.0, -10000.0, 20000.0);
    Shapes.Path path0 = new Shapes.Path(0, 0, 0);
    checkShapePathCube(args, maxCube, path0, 0);
    checkShapePathCube(args, maxCube, path0, 1);
    checkShapePathCube(args, maxCube, path0, 2);
    checkShapePathCube(args, maxCube, path0, 4);
    checkShapePathCube(args, maxCube, path0, 8);
    checkShapePathCube(args, maxCube, path0, 16);
    checkShapePathCube(args, maxCube, path0, 30);
    checkShapePathCube(args, maxCube, path0, 31);

    Shapes.Path path1 = new Shapes.Path(111111111, 222222222, 333333333);
    checkShapePathCube(args, maxCube, path1, 0);
    checkShapePathCube(args, maxCube, path1, 1);
    checkShapePathCube(args, maxCube, path1, 2);
    checkShapePathCube(args, maxCube, path1, 16);
    checkShapePathCube(args, maxCube, path1, 20);
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

Math.Point3 corner(Math.Cube cube, int index) =>
  new Math.Point3(
    cube.x + ((index & 1 != 0)? cube.size: 0.0),
    cube.y + ((index & 2 != 0)? cube.size: 0.0),
    cube.z + ((index & 4 != 0)? cube.size: 0.0));

void pointsShouldMatch(TestArgs args, int group, double x, double y, double z, List<Math.Cube> cubes, List<int> indices) {
  bool passed = true;
  Math.Point3 exp = new Math.Point3(x, y, z);
  for (int i = 0; i < indices.length; i++) {
    Math.Cube cube = cubes[indices[i]];
    int cornerIndex = indices[indices.length-i-1];
    Math.Point3 point = corner(cube, cornerIndex);
    if (exp != point) {
      passed = false;
      args.error("Points did not match: Group: $group, Index: $i, Corner: $cornerIndex,\n"
                 "  Cube: $cube, Got: ${point}, Exp: $exp\n");
    }
  }
  if (passed) args.info("Group $group passed: $exp\n");
}

void checkShapePathCube(TestArgs args, Math.Cube maxCube, Shapes.Path base, int depth) {
    args.notice("Test Cube: ($depth) $base\n");

    Shapes.Path path0 = base.redirect(0, depth + 1);
    Shapes.Path path1 = base.redirect(1, depth + 1);
    Shapes.Path path2 = base.redirect(2, depth + 1);
    Shapes.Path path3 = base.redirect(3, depth + 1);
    Shapes.Path path4 = base.redirect(4, depth + 1);
    Shapes.Path path5 = base.redirect(5, depth + 1);
    Shapes.Path path6 = base.redirect(6, depth + 1);
    Shapes.Path path7 = base.redirect(7, depth + 1);

    Math.Cube cubeB = base.cube(maxCube, depth);
    Math.Cube cube0 = path0.cube(maxCube, depth + 1);
    Math.Cube cube1 = path1.cube(maxCube, depth + 1);
    Math.Cube cube2 = path2.cube(maxCube, depth + 1);
    Math.Cube cube3 = path3.cube(maxCube, depth + 1);
    Math.Cube cube4 = path4.cube(maxCube, depth + 1);
    Math.Cube cube5 = path5.cube(maxCube, depth + 1);
    Math.Cube cube6 = path6.cube(maxCube, depth + 1);
    Math.Cube cube7 = path7.cube(maxCube, depth + 1);
    List<Math.Cube> cubes = [cube0, cube1, cube2, cube3, cube4, cube5, cube6, cube7];

    double posX = cubeB.x+cubeB.size, midX = cubeB.x+cubeB.size*0.5, negX = cubeB.x;
    double posY = cubeB.y+cubeB.size, midY = cubeB.y+cubeB.size*0.5, negY = cubeB.y;
    double posZ = cubeB.z+cubeB.size, midZ = cubeB.z+cubeB.size*0.5, negZ = cubeB.z;

    pointsShouldMatch(args,  0, negX, negY, negZ, cubes, [0]);
    pointsShouldMatch(args,  1, midX, negY, negZ, cubes, [0, 1]);
    pointsShouldMatch(args,  2, posX, negY, negZ, cubes, [1]);
    pointsShouldMatch(args,  3, negX, midY, negZ, cubes, [0, 2]);
    pointsShouldMatch(args,  4, midX, midY, negZ, cubes, [0, 1, 2, 3]);
    pointsShouldMatch(args,  5, posX, midY, negZ, cubes, [1, 3]);
    pointsShouldMatch(args,  6, negX, posY, negZ, cubes, [2]);
    pointsShouldMatch(args,  7, midX, posY, negZ, cubes, [2, 3]);
    pointsShouldMatch(args,  8, posX, posY, negZ, cubes, [3]);

    pointsShouldMatch(args,  9, negX, negY, midZ, cubes, [0, 4]);
    pointsShouldMatch(args, 10, midX, negY, midZ, cubes, [0, 1, 4, 5]);
    pointsShouldMatch(args, 11, posX, negY, midZ, cubes, [1, 5]);
    pointsShouldMatch(args, 12, negX, midY, midZ, cubes, [0, 2, 4, 6]);
    pointsShouldMatch(args, 13, midX, midY, midZ, cubes, [0, 1, 2, 3, 4, 5, 6, 7]);
    pointsShouldMatch(args, 14, posX, midY, midZ, cubes, [1, 3, 5, 7]);
    pointsShouldMatch(args, 15, negX, posY, midZ, cubes, [2, 6]);
    pointsShouldMatch(args, 16, midX, posY, midZ, cubes, [2, 3, 6, 7]);
    pointsShouldMatch(args, 17, posX, posY, midZ, cubes, [3, 7]);

    pointsShouldMatch(args, 18, negX, negY, posZ, cubes, [4]);
    pointsShouldMatch(args, 19, midX, negY, posZ, cubes, [4, 5]);
    pointsShouldMatch(args, 20, posX, negY, posZ, cubes, [5]);
    pointsShouldMatch(args, 21, negX, midY, posZ, cubes, [4, 6]);
    pointsShouldMatch(args, 22, midX, midY, posZ, cubes, [4, 5, 6, 7]);
    pointsShouldMatch(args, 23, posX, midY, posZ, cubes, [5, 7]);
    pointsShouldMatch(args, 24, negX, posY, posZ, cubes, [6]);
    pointsShouldMatch(args, 25, midX, posY, posZ, cubes, [6, 7]);
    pointsShouldMatch(args, 26, posX, posY, posZ, cubes, [7]);
}
