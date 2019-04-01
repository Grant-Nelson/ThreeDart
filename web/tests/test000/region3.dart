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

  tests.add("Region3 Collision Test", (TestArgs args) {
    _region3Collision(args,
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 2.0, 2.0, 1.0, 1.0, 1.0),
      new Math.Vector3(0.0, 0.0, 0.0),
      null);
    _region3Collision(args,
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(0.5, 0.0, 0.0),
      null);
    _region3Collision(args,
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(1.0, 0.0, 0.0),
      new Math.IntersectionBetweenMovingRegions(1.0, Math.HitRegion.XPos));
    _region3Collision(args,
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(4.0, 0.0, 0.0),
      new Math.IntersectionBetweenMovingRegions(0.25, Math.HitRegion.XPos));
    _region3Collision(args,
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(-4.0, 0.0, 0.0),
      null);
    _region3Collision(args,
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(4.0, 0.0, 0.0),
      null);
    _region3Collision(args,
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(-4.0, 0.0, 0.0),
      new Math.IntersectionBetweenMovingRegions(0.25, Math.HitRegion.XNeg));
    _region3Collision(args,
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 2.0, 2.0, 1.0, 1.0, 1.0),
      new Math.Vector3(4.0, 0.0, 0.0),
      null);
    _region3Collision(args,
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 2.0, 2.0, 1.0, 1.0, 1.0),
      new Math.Vector3(2.0, 2.4, 2.8),
      new Math.IntersectionBetweenMovingRegions(0.5, Math.HitRegion.XPos));
    _region3Collision(args,
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 2.0, 2.0, 1.0, 1.0, 1.0),
      new Math.Vector3(2.8, 2.0, 2.4),
      new Math.IntersectionBetweenMovingRegions(0.5, Math.HitRegion.YPos));
    _region3Collision(args,
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 2.0, 2.0, 1.0, 1.0, 1.0),
      new Math.Vector3(2.4, 2.8, 2.0),
      new Math.IntersectionBetweenMovingRegions(0.5, Math.HitRegion.ZPos));
    _region3Collision(args,
      new Math.Region3(0.0, 11.13, 0.0, 0.0, 1.5, 0.0),
      new Math.Region3(0.0,  8.0,  0.0, 0.0, 1.0, 0.0),
      new Math.Vector3(0.0, -2.45, 0.0),
      new Math.IntersectionBetweenMovingRegions(0.869387755102041, Math.HitRegion.YNeg));
    _region3Collision(args,
      new Math.Region3(0.25, 10.0, 0.1, 0.25, 2.0, 0.25),
      new Math.Region3(0.0, 9.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(0.0, -1.0, -0.3),
      new Math.IntersectionBetweenMovingRegions(0.0, Math.HitRegion.YNeg));
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

void _region3Collision(TestArgs args, Math.Region3 reg, Math.Region3 target,
  Math.Vector3 vec, Math.IntersectionBetweenMovingRegions exp) {
  Math.IntersectionBetweenMovingRegions result = reg.collision(target, vec);
  if (exp == null) {
    if (result == null) {
      args.info("Results from collision:\n"+
        "   Original: $reg\n"+
        "   Target:   $target\n"+
        "   Vector:   $vec\n"+
        "   Result:   null\n");
      return;
    }
    args.error("Unexpected result from collision:\n"+
      "   Original: $reg\n"+
      "   Target:   $target\n"+
      "   Vector:   $vec\n"+
      "   Expected: null\n"+
      "   Result:   $result\n");
  } else if (result == null) {
    args.error("Unexpected result from collision:\n"+
      "   Original: $reg\n"+
      "   Target:   $target\n"+
      "   Vector:   $vec\n"+
      "   Expected: $exp\n"+
      "   Result:   null\n");
  } else if (!Math.Comparer.equals(result.parametric, exp.parametric) || (result.region != exp.region)) {
    args.error("Unexpected result from collision:\n"+
      "   Original: $reg\n"+
      "   Target:   $target\n"+
      "   Vector:   $vec\n"+
      "   Expected: $exp\n"+
      "   Result:   $result\n");
  } else {
    args.info("Results from collision:\n"+
      "   Original: $reg\n"+
      "   Target:   $target\n"+
      "   Vector:   $vec\n"+
      "   Result:   $result\n");
  }
}
