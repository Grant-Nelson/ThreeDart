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

