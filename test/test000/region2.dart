part of ThreeDart.test.test000;

void addRegion2Tests(TestManager tests) {

  tests.add("Region2 Point Expand Test", (TestArgs args) {
    Math.Region2 reg1 = new Math.Region2.zero();
    _expandReg2(args, reg1,   0.0,  0.0,    0.0,  0.0,   0.0,  0.0);
    _expandReg2(args, reg1,   1.0,  2.0,    0.0,  0.0,   1.0,  2.0);
    _expandReg2(args, reg1,  -1.0, -2.0,   -1.0, -2.0,   1.0,  2.0);

    Math.Region2 reg2 = new Math.Region2(0.0,  0.0,   1.0,  2.0);
    _expandReg2(args, reg2,  -1.0, -2.0,   -1.0, -2.0,   2.0,  4.0);

    Math.Region2 reg3 = new Math.Region2(-1.0, -2.0, 2.0,  4.0);
    _expandReg2(args, reg3,   1.0,  1.0,   -1.0, -2.0,   2.0,  4.0);
    _expandReg2(args, reg3,   4.0,  4.0,   -1.0, -2.0,   5.0,  6.0);
  });

  tests.add("Region2 Ray Intersect", (TestArgs args) {
    Math.Region2 reg1 = new Math.Region2(1.0, 1.0, 1.0, 1.0);
    _ray2Intersect(args, reg1,  1.5,  1.5,  0.1,  0.1, "[1.500, 1.500] 0 Intersect2DType.Inside");
    _ray2Intersect(args, reg1,  0.5,  1.5,  1.0,  0.0, "[1.000, 1.500] 0.5 Intersect2DType.VerticalEdge");
    _ray2Intersect(args, reg1,  1.5,  0.5,  0.0,  1.0, "[1.500, 1.000] 0.5 Intersect2DType.HorizontalEdge");
    _ray2Intersect(args, reg1,  2.5,  1.5, -1.0,  0.0, "[2.000, 1.500] 0.5 Intersect2DType.VerticalEdge");
    _ray2Intersect(args, reg1,  1.5,  2.5,  0.0, -1.0, "[1.500, 2.000] 0.5 Intersect2DType.HorizontalEdge");
    _ray2Intersect(args, reg1,  0.5,  1.4,  1.0,  1.0, "[1.000, 1.900] 0.5 Intersect2DType.VerticalEdge");
    _ray2Intersect(args, reg1,  0.5,  1.5,  0.4,  0.0, "null");
    _ray2Intersect(args, reg1,  0.5,  1.5,  0.5,  0.0, "[1.000, 1.500] 1 Intersect2DType.VerticalEdge");
    _ray2Intersect(args, reg1,  0.5,  0.5,  1.0,  1.0, "[1.000, 1.000] 0.5 Intersect2DType.HorizontalEdge");
    _ray2Intersect(args, reg1,  0.5,  0.5,  1.0,  2.0, "[1.000, 1.500] 0.5 Intersect2DType.VerticalEdge");
    _ray2Intersect(args, reg1,  0.5,  0.5,  2.0,  1.0, "[1.500, 1.000] 0.5 Intersect2DType.HorizontalEdge");
    _ray2Intersect(args, reg1,  0.5,  0.5,  10.0,  1.0, "[5.500, 1.000] 0.5 Intersect2DType.None");
  });
}

Math.Region2 _expandReg2(TestArgs args, Math.Region2 reg, double newX, double newY,
  double x, double y, double dx, double dy) {
  Math.Point2 input = new Math.Point2(newX, newY);
  Math.Region2 newReg = reg.expandWithPoint(input);
  Math.Region2 expReg = new Math.Region2(x, y, dx, dy);
  if (newReg != expReg) {
    args.error("Unexpected result from expand:\n"+
      "   Original: $reg\n"+
      "   Point:    $input\n"+
      "   Expected: $expReg\n"+
      "   Result:   $newReg\n");
  } else {
    args.info("$reg + $input => $newReg\n");
  }
  return newReg;
}

void _ray2Intersect(TestArgs args, Math.Region2 reg, double x, double y, double dx, double dy, String exp) {
  Math.Ray2 ray = new Math.Ray2(x, y, dx, dy);
  Math.Intersect2D hit = reg.ray2Intersect(ray);
  String result = (hit != null) ? hit.toString() : "null";
  if (result != exp) {
    args.error("Unexpected result from expand:\n"+
      "   Region:   $reg\n"+
      "   Ray:      $ray\n"+
      "   Expected: $exp\n"+
      "   Result:   $result\n");
  } else {
    args.info("$reg + $ray => $result\n");
  }
}
