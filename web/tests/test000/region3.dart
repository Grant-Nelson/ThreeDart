part of ThreeDart.test.test000;

void addRegion3Tests(TestManager tests) {

  tests.add("Region3 Point Expand Test", (TestArgs args) {
    Math.Region3 reg1 = Math.Region3.zero;
    _expandReg3(args, reg1,   0.0,  0.0,  0.0,   0.0,  0.0,  0.0,   0.0,  0.0,  0.0);
    _expandReg3(args, reg1,   1.0,  2.0,  3.0,   0.0,  0.0,  0.0,   1.0,  2.0,  3.0);
    _expandReg3(args, reg1,  -1.0, -2.0, -3.0,  -1.0, -2.0, -3.0,   1.0,  2.0,  3.0);

    Math.Region3 reg2 = new Math.Region3(0.0,  0.0,  0.0,   1.0,  2.0,  3.0);
    _expandReg3(args, reg2,  -1.0, -2.0, -3.0,  -1.0, -2.0, -3.0,   2.0,  4.0,  6.0);

    Math.Region3 reg3 = new Math.Region3(-1.0, -2.0, -3.0,   2.0,  4.0,  6.0);
    _expandReg3(args, reg3,   1.0,  1.0,  1.0,  -1.0, -2.0, -3.0,   2.0,  4.0,  6.0);
    _expandReg3(args, reg3,   4.0,  4.0,  4.0,  -1.0, -2.0, -3.0,   5.0,  6.0,  7.0);
  });
}

Math.Region3 _expandReg3(TestArgs args, Math.Region3 reg, double newX, double newY, double newZ,
  double x, double y, double z, double dx, double dy, double dz) {
  Math.Point3 input = new Math.Point3(newX, newY, newZ);
  Math.Region3 newReg = reg.expandWithPoint(input);
  Math.Region3 expReg = new Math.Region3(x, y, z, dx, dy, dz);
  if (newReg != expReg) {
    args.error("Unexpected result from expand:\n"+
      "   Original: $reg\n"+
      "   Point:    $input\n"+
      "   Expected: $expReg\n"+
      "   Result:   $newReg\n");
  } else {
    args.info("[$reg] + [$input] => [$newReg]\n");
  }
  return newReg;
}
