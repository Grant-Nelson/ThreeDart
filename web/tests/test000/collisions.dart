part of ThreeDart.test.test000;

void addCollisionTests(TestManager tests) {
  tests.add("Collision Between Two AABB Test", (TestArgs args) {
    _aabb3Collision1(args, "Not moving, not touching",
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 2.0, 2.0, 1.0, 1.0, 1.0),
      new Math.Vector3(0.0, 0.0, 0.0),
      Collisions.Type.NoCollision, 0.0, Math.HitRegion.None);
    _aabb3Collision1(args, "Moving right but not enough to touch",
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(0.5, 0.0, 0.0),
      Collisions.Type.NoCollision, 0.0, Math.HitRegion.None);
    _aabb3Collision1(args, "Moving right until they just touch on edge",
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(1.0, 0.0, 0.0),
      Collisions.Type.Collision, 1.0, Math.HitRegion.XNeg);
    _aabb3Collision1(args, "Moving to pass eachother and hit early",
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(4.0, 0.0, 0.0),
      Collisions.Type.Collision, 0.25, Math.HitRegion.XNeg);
    _aabb3Collision1(args, "Moving away from eachother backwards",
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(-4.0, 0.0, 0.0),
      Collisions.Type.NoCollision, 0.0, Math.HitRegion.None);
    _aabb3Collision1(args, "Moving away from eachother already passed",
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(4.0, 0.0, 0.0),
      Collisions.Type.NoCollision, 0.0, Math.HitRegion.None);
    _aabb3Collision1(args, "Moving backwards past eachother and hit early",
      new Math.Region3(2.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(-4.0, 0.0, 0.0),
      Collisions.Type.Collision, 0.25, Math.HitRegion.XPos);
    _aabb3Collision1(args, "Moving right but offset to pass eachother",
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 2.0, 2.0, 1.0, 1.0, 1.0),
      new Math.Vector3(4.0, 0.0, 0.0),
      Collisions.Type.NoCollision, 0.0, Math.HitRegion.None);
    _aabb3Collision1(args, "Moving almost diagnally at an angle to collide",
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 2.0, 2.0, 1.0, 1.0, 1.0),
      new Math.Vector3(2.0, 2.4, 2.8),
      Collisions.Type.Collision, 0.5, Math.HitRegion.XNeg);
    _aabb3Collision1(args, "Moving almost diagnally at a different angle to collide",
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 2.0, 2.0, 1.0, 1.0, 1.0),
      new Math.Vector3(2.8, 2.0, 2.4),
      Collisions.Type.Collision, 0.5, Math.HitRegion.YNeg);
    _aabb3Collision1(args, "Moving almost diagnally at another different angle to collide",
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 2.0, 2.0, 1.0, 1.0, 1.0),
      new Math.Vector3(2.4, 2.8, 2.0),
      Collisions.Type.Collision, 0.5, Math.HitRegion.ZNeg);
    _aabb3Collision1(args, "Moving diagnally to collide",
      new Math.Region3(0.0, 0.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Region3(2.0, 2.0, 2.0, 1.0, 1.0, 1.0),
      new Math.Vector3(2.0, 2.0, 2.0),
      Collisions.Type.Collision, 0.5, Math.HitRegion.XNeg);
    _aabb3Collision1(args, "Moving down and colliding",
      new Math.Region3(0.0, 11.13, 0.0, 0.0, 1.5, 0.0),
      new Math.Region3(0.0,  8.0,  0.0, 0.0, 1.0, 0.0),
      new Math.Vector3(0.0, -2.45, 0.0),
      Collisions.Type.Collision, 0.869387755102041, Math.HitRegion.YPos);
    _aabb3Collision1(args, "Moving up at an agle and already touching on edge",
      new Math.Region3(0.25, 10.0, 0.1, 0.25, 2.0, 0.25),
      new Math.Region3(0.0, 9.0, 0.0, 1.0, 1.0, 1.0),
      new Math.Vector3(0.0, -1.0, -0.3),
      Collisions.Type.Collision, 0.0, Math.HitRegion.YPos);
    _aabb3Collision1(args, "One already contains the other",
      new Math.Region3(-2.0, -2.0, -2.0, 4.0, 4.0, 4.0),
      new Math.Region3(-1.0, -1.0, -1.0, 2.0, 2.0, 2.0),
      new Math.Vector3(2.0, 2.0, 2.0),
      Collisions.Type.Intesected, 0.0, Math.HitRegion.None);
    _aabb3Collision1(args, "Partually overlapping",
      new Math.Region3(-2.0, -2.0, -2.0, 2.0, 2.0, 2.0),
      new Math.Region3(-1.0, -1.0, -1.0, 2.0, 2.0, 2.0),
      new Math.Vector3(2.0, 2.0, 2.0),
      Collisions.Type.Intesected, 0.0, Math.HitRegion.None);
  });

  tests.add("Collision Between Two Spheres Test", (TestArgs args) {
    _twoSphereCollision(args, "Same sized spheres colliding after B moves left",
      new Math.Sphere(0.0, 0.0, 0.0, 1.0),
      new Math.Sphere(3.0, 0.0, 0.0, 1.0),
      Math.Vector3.zero,
      new Math.Vector3(-1.0, 0.0, 0.0),
      Collisions.Type.Collision, 1.0);
    _twoSphereCollision(args, "Same sized spheres colliding after A moves left",
      new Math.Sphere(3.0, 0.0, 0.0, 1.0),
      new Math.Sphere(0.0, 0.0, 0.0, 1.0),
      new Math.Vector3(-1.0, 0.0, 0.0),
      Math.Vector3.zero,
      Collisions.Type.Collision, 1.0);
    _twoSphereCollision(args, "Same sized spheres already touching and A moves left",
      new Math.Sphere(0.0, 0.0, 0.0, 1.0),
      new Math.Sphere(2.0, 0.0, 0.0, 1.0),
      new Math.Vector3(-1.0, 0.0, 0.0),
      Math.Vector3.zero,
      Collisions.Type.NoCollision, 0.0);
    _twoSphereCollision(args, "Same sized spheres already touching and A moves right",
      new Math.Sphere(0.0, 0.0, 0.0, 1.0),
      new Math.Sphere(2.0, 0.0, 0.0, 1.0),
      Math.Vector3.zero,
      new Math.Vector3(-1.0, 0.0, 0.0),
      Collisions.Type.Collision, 0.0);
  });
}

void _aabb3Collision1(TestArgs args, String msg, Math.Region3 reg, Math.Region3 target,
  Math.Vector3 vec, Collisions.Type expType, double expParametric, Math.HitRegion expHit) {
  Collisions.TwoAABB3Result result = Collisions.twoAABB3(reg, target, vec, Math.Vector3.zero);
  if ((result.type != expType) ||
    !Math.Comparer.equals(result.parametric, expParametric) ||
    (result.region != expHit)) {
    args.error("Unexpected result from twoAABB3 collision:\n"+
      "   Message:  $msg\n"+
      "   Original: $reg\n"+
      "   Target:   $target\n"+
      "   Vector:   $vec\n"+
      "   Expected: $expType $expParametric $expHit\n"+
      "   Result:   $result\n");
  } else {
    args.info("Results from twoAABB3 collision:\n"+
      "   Message:  $msg\n"+
      "   Original: $reg\n"+
      "   Target:   $target\n"+
      "   Vector:   $vec\n"+
      "   Result:   $result\n");
  }
}

void _twoSphereCollision(TestArgs args, String msg, Math.Sphere sphereA, Math.Sphere sphereB,
  Math.Vector3 vecA, Math.Vector3 vecB, Collisions.Type expType, double expParametric) {
  Collisions.TwoSphereResult result = Collisions.twoSphere(sphereA, sphereB, vecA, vecB);
  if ((result.type != expType) ||
    !Math.Comparer.equals(result.parametric, expParametric)) {
    args.error("Unexpected result from twoSphere collision:\n"+
      "   Message:  $msg\n"+
      "   Sphere A: $sphereA\n"+
      "   Sphere B: $sphereB\n"+
      "   Vector A: $vecA\n"+
      "   Vector B: $vecB\n"+
      "   Expected: $expType $expParametric\n"+
      "   Result:   ${result.type} ${result.parametric}\n"+
      "   ResultOb: $result\n");
  } else {
    args.info("Results from twoSphere collision:\n"+
      "   Message:  $msg\n"+
      "   Sphere A: $sphereA\n"+
      "   Sphere B: $sphereB\n"+
      "   Vector A: $vecA\n"+
      "   Vector B: $vecB\n"+
      "   Result:   $result\n");
  }
}
