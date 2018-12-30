part of ThreeDart.test.test000;

void addCraftTests(TestManager tests) {

  tests.add("Test of craft example world getBlock", (TestArgs args) {
    craft.World world = new craft.World(null, new craft.CheckersGenerator());

    _checkGetBlock(args, world,  0.0,    0.0,    0.0,      0,   0,   0,  0,  0);
    _checkGetBlock(args, world,  0.001,  0.0,    0.0,      0,   0,   0,  0,  0);
    _checkGetBlock(args, world,  0.0,    0.001,  0.0,      0,   0,   0,  0,  0);
    _checkGetBlock(args, world,  0.0,    0.0,    0.001,    0,   0,   0,  0,  0);
    _checkGetBlock(args, world,  0.999,  0.0,    0.0,      0,   0,   0,  0,  0);
    _checkGetBlock(args, world,  0.0,    0.999,  0.0,      0,   0,   0,  0,  0);
    _checkGetBlock(args, world,  0.0,    0.0,    0.999,    0,   0,   0,  0,  0);
    _checkGetBlock(args, world,  0.999,  0.999,  0.999,    0,   0,   0,  0,  0);

    _checkGetBlock(args, world, -0.001,  0.0,    0.0,    -16,   0,  15,  0,  0);
    _checkGetBlock(args, world, -0.999,  0.0,    0.0,    -16,   0,  15,  0,  0);
    _checkGetBlock(args, world, -0.001,  0.0,    0.0,    -16,   0,  15,  0,  0);
    _checkGetBlock(args, world, -0.001,  0.0,    0.001,  -16,   0,  15,  0,  0);
    _checkGetBlock(args, world, -0.999,  0.0,    0.999,  -16,   0,  15,  0,  0);

    _checkGetBlock(args, world,  0.0,    0.0,   -0.001,    0, -16,   0,  0, 15);
    _checkGetBlock(args, world,  0.001,  0.0,   -0.001,    0, -16,   0,  0, 15);
    _checkGetBlock(args, world,  0.0,    0.0,   -0.999,    0, -16,   0,  0, 15);
    _checkGetBlock(args, world,  0.999,  0.0,   -0.999,    0, -16,   0,  0, 15);
 
    _checkGetBlock(args, world, -0.001,  0.0,   -0.001,  -16, -16,  15,  0, 15);
    _checkGetBlock(args, world, -0.999,  0.0,   -0.999,  -16, -16,  15,  0, 15);
    _checkGetBlock(args, world, -0.999,  0.0,   -0.001,  -16, -16,  15,  0, 15);
    _checkGetBlock(args, world, -0.001,  0.0,   -0.999,  -16, -16,  15,  0, 15);

    _checkGetBlock(args, world,  1.0,    0.0,    0.0,      0,   0,   1,  0,  0);
    _checkGetBlock(args, world,  0.0,    1.0,    0.0,      0,   0,   0,  1,  0);
    _checkGetBlock(args, world,  0.0,    0.0,    1.0,      0,   0,   0,  0,  1);
    _checkGetBlock(args, world,  1.001,  0.0,    0.0,      0,   0,   1,  0,  0);
    _checkGetBlock(args, world,  0.0,    0.0,    1.001,    0,   0,   0,  0,  1);

    _checkGetBlock(args, world, -1.0,    0.0,    0.0,    -16,   0,  15,  0,  0);
    _checkGetBlock(args, world,  0.0,   -1.0,    0.0,      0,   0,   0, -1,  0);
    _checkGetBlock(args, world,  0.0,    0.0,   -1.0,      0, -16,   0,  0, 15);
    _checkGetBlock(args, world, -1.001,  0.0,    0.0,    -16,   0,  14,  0,  0);
    _checkGetBlock(args, world,  0.0,    0.0,   -1.001,    0, -16,   0,  0, 14);
    
    _checkGetBlock(args, world,  0.0,    0.0,  -14.157,    0, -16,   0,  0,  1);
    _checkGetBlock(args, world,  0.0,    0.0,  -15.157,    0, -16,   0,  0,  0);
    _checkGetBlock(args, world,  0.0,    0.0,  -16.157,    0, -32,   0,  0, 15);

    _checkGetBlock(args, world,  0.0,    0.0,   18.0,      0,  16,   0,  0,  2);
    _checkGetBlock(args, world,  0.0,    0.0,   17.0,      0,  16,   0,  0,  1);
    _checkGetBlock(args, world,  0.0,    0.0,   16.0,      0,  16,   0,  0,  0);
    _checkGetBlock(args, world,  0.0,    0.0,   15.0,      0,   0,   0,  0, 15);
    _checkGetBlock(args, world,  0.0,    0.0,   14.0,      0,   0,   0,  0, 14);
    _checkGetBlock(args, world,  0.0,    0.0,   13.0,      0,   0,   0,  0, 13);
    _checkGetBlock(args, world,  0.0,    0.0,   12.0,      0,   0,   0,  0, 12);
    _checkGetBlock(args, world,  0.0,    0.0,   11.0,      0,   0,   0,  0, 11);
    _checkGetBlock(args, world,  0.0,    0.0,   10.0,      0,   0,   0,  0, 10);
    _checkGetBlock(args, world,  0.0,    0.0,    9.0,      0,   0,   0,  0,  9);
    _checkGetBlock(args, world,  0.0,    0.0,    8.0,      0,   0,   0,  0,  8);
    _checkGetBlock(args, world,  0.0,    0.0,    7.0,      0,   0,   0,  0,  7);
    _checkGetBlock(args, world,  0.0,    0.0,    6.0,      0,   0,   0,  0,  6);
    _checkGetBlock(args, world,  0.0,    0.0,    5.0,      0,   0,   0,  0,  5);
    _checkGetBlock(args, world,  0.0,    0.0,    4.0,      0,   0,   0,  0,  4);
    _checkGetBlock(args, world,  0.0,    0.0,    3.0,      0,   0,   0,  0,  3);
    _checkGetBlock(args, world,  0.0,    0.0,    2.0,      0,   0,   0,  0,  2);
    _checkGetBlock(args, world,  0.0,    0.0,    1.0,      0,   0,   0,  0,  1);
    _checkGetBlock(args, world,  0.0,    0.0,    0.0,      0,   0,   0,  0,  0);
    _checkGetBlock(args, world,  0.0,    0.0,   -1.0,      0, -16,   0,  0, 15);
    _checkGetBlock(args, world,  0.0,    0.0,   -2.0,      0, -16,   0,  0, 14);
    _checkGetBlock(args, world,  0.0,    0.0,   -3.0,      0, -16,   0,  0, 13);
    _checkGetBlock(args, world,  0.0,    0.0,   -4.0,      0, -16,   0,  0, 12);
    _checkGetBlock(args, world,  0.0,    0.0,   -5.0,      0, -16,   0,  0, 11);
    _checkGetBlock(args, world,  0.0,    0.0,   -6.0,      0, -16,   0,  0, 10);
    _checkGetBlock(args, world,  0.0,    0.0,   -7.0,      0, -16,   0,  0,  9);
    _checkGetBlock(args, world,  0.0,    0.0,   -8.0,      0, -16,   0,  0,  8);
    _checkGetBlock(args, world,  0.0,    0.0,   -9.0,      0, -16,   0,  0,  7);
    _checkGetBlock(args, world,  0.0,    0.0,  -10.0,      0, -16,   0,  0,  6);
    _checkGetBlock(args, world,  0.0,    0.0,  -11.0,      0, -16,   0,  0,  5);
    _checkGetBlock(args, world,  0.0,    0.0,  -12.0,      0, -16,   0,  0,  4);
    _checkGetBlock(args, world,  0.0,    0.0,  -13.0,      0, -16,   0,  0,  3);
    _checkGetBlock(args, world,  0.0,    0.0,  -14.0,      0, -16,   0,  0,  2);
    _checkGetBlock(args, world,  0.0,    0.0,  -15.0,      0, -16,   0,  0,  1);
    _checkGetBlock(args, world,  0.0,    0.0,  -16.0,      0, -16,   0,  0,  0);
    _checkGetBlock(args, world,  0.0,    0.0,  -17.0,      0, -32,   0,  0, 15);
    _checkGetBlock(args, world,  0.0,    0.0,  -18.0,      0, -32,   0,  0, 14);
    _checkGetBlock(args, world,  0.0,    0.0,  -19.0,      0, -32,   0,  0, 13);
  }, skip: true);

  tests.add("Test of craft example world basic collide with floor", (TestArgs args) {
    craft.World world = new craft.World(null, new craft.FlatGenerator());

    Math.Point3 at12 = new Math.Point3(0.0, 12.0, 0.0);
    Math.Point3 at11 = new Math.Point3(0.0, 11.0, 0.0);
    Math.Point3 at10 = new Math.Point3(0.0, 10.0, 0.0);
    Math.Point3 at9 = new Math.Point3(0.0, 9.0, 0.0);
    Math.Point3 at8 = new Math.Point3(0.0, 8.0, 0.0);
    Math.Vector3 go1 = new Math.Vector3(0.0, -1.0, 0.0);
    Math.Vector3 go2 = new Math.Vector3(0.0, -2.0, 0.0);
    Math.Vector3 go3 = new Math.Vector3(0.0, -3.0, 0.0);

    _checkCollide(args, world, [at12], go1, at11);
    _checkCollide(args, world, [at12], go2, at10);
    _checkCollide(args, world, [at12], go3, at10);
    _checkCollide(args, world, [at11], go3, at10);
    _checkCollide(args, world, [at10], go3, at10);
    _checkCollide(args, world, [at9], go3, at10);
    _checkCollide(args, world, [at11, at10], go3, at11);
    _checkCollide(args, world, [at9, at8], go1, at11);
  }, skip: true);

  tests.add("Test of craft example world collide with floor", (TestArgs args) {
    craft.World world = new craft.World(null, new craft.TestGenerator());

    _checkCollide(args, world, [new Math.Point3(0.5, 69.0, 0.5), new Math.Point3(0.5, 67.0, 0.5)],
      new Math.Vector3(0.0, -1.0, 0.0), new Math.Point3(0.5, 68.0, 0.5));

  });
}

void _checkGetBlock(TestArgs args, craft.World world, double x, double y, double z,
  int expChunkX, int expChunkZ, int expBlockX, int expBlockY, int expBlockZ) {
  craft.BlockInfo block = world.getBlock(x, y, z);

  if (block.chunkX != expChunkX || block.chunkZ != expChunkZ ||
      block.x != expBlockX || block.y != expBlockY || block.z != expBlockZ) {
    args.error("Testing getBlock($x, $y, $z): Failed\n");
    args.notice("  Expected: $expChunkX, $expChunkZ, $expBlockX, $expBlockY, $expBlockZ\n");
    args.notice("  Gotten:   ${block.chunkX}, ${block.chunkZ}, ${block.x}, ${block.y}, ${block.z}\n");
    if (block.chunkX != expChunkX) args.error("  Chunk X value ${block.chunkX} should be $expChunkX.\n");
    if (block.chunkZ != expChunkZ) args.error("  Chunk Z value ${block.chunkZ} should be $expChunkZ.\n");
    if (block.x != expBlockX) args.error("  Block X value ${block.x} should be $expBlockX.\n");
    if (block.y != expBlockY) args.error("  Block Y value ${block.y} should be $expBlockY.\n");
    if (block.z != expBlockZ) args.error("  Block Z value ${block.z} should be $expBlockZ.\n");
    args.info("\n");
  } else {
    args.info("Testing getBlock($x, $y, $z): Passed\n");
  }
}

void _checkCollide(TestArgs args, craft.World world, List<Math.Point3> starts, Math.Vector3 vector, Math.Point3 expOffset) {
  Math.Point3 offset = world.collide(starts, vector);

  if (offset != expOffset) {
    args.error("Testing collide($starts, $vector): Failed\n");
    args.error("  Expected: $expOffset\n");
    args.error("  Gotten:   $offset\n");
    args.info("\n");
  } else {
    args.info("Testing collide($starts, $vector): Passed\n");
    args.info("  Gotten:   $offset\n");
  }
}
