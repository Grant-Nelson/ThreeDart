part of ThreeDart.test.test000;

void addCraftTests(TestManager tests) {

  tests.add("Test of craft example world getBlock", (TestArgs args) {
    craft.World world = new craft.World(null, new craft.CheckersGenerator());

    void check(double x, double y, double z,
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

    check( 0.0,    0.0,    0.0,      0,   0,   0,  0,  0);
    check( 0.001,  0.0,    0.0,      0,   0,   0,  0,  0);
    check( 0.0,    0.001,  0.0,      0,   0,   0,  0,  0);
    check( 0.0,    0.0,    0.001,    0,   0,   0,  0,  0);
    check( 0.999,  0.0,    0.0,      0,   0,   0,  0,  0);
    check( 0.0,    0.999,  0.0,      0,   0,   0,  0,  0);
    check( 0.0,    0.0,    0.999,    0,   0,   0,  0,  0);
    check( 0.999,  0.999,  0.999,    0,   0,   0,  0,  0);

    check(-0.001,  0.0,    0.0,    -16,   0,  15,  0,  0);
    check(-0.999,  0.0,    0.0,    -16,   0,  15,  0,  0);
    check(-0.001,  0.0,    0.0,    -16,   0,  15,  0,  0);
    check(-0.001,  0.0,    0.001,  -16,   0,  15,  0,  0);
    check(-0.999,  0.0,    0.999,  -16,   0,  15,  0,  0);

    check( 0.0,    0.0,   -0.001,    0, -16,   0,  0, 15);
    check( 0.001,  0.0,   -0.001,    0, -16,   0,  0, 15);
    check( 0.0,    0.0,   -0.999,    0, -16,   0,  0, 15);
    check( 0.999,  0.0,   -0.999,    0, -16,   0,  0, 15);
 
    check(-0.001,  0.0,   -0.001,  -16, -16,  15,  0, 15);
    check(-0.999,  0.0,   -0.999,  -16, -16,  15,  0, 15);
    check(-0.999,  0.0,   -0.001,  -16, -16,  15,  0, 15);
    check(-0.001,  0.0,   -0.999,  -16, -16,  15,  0, 15);

    check( 1.0,    0.0,    0.0,      0,   0,   1,  0,  0);
    check( 0.0,    1.0,    0.0,      0,   0,   0,  1,  0);
    check( 0.0,    0.0,    1.0,      0,   0,   0,  0,  1);
    check( 1.001,  0.0,    0.0,      0,   0,   1,  0,  0);
    check( 0.0,    0.0,    1.001,    0,   0,   0,  0,  1);

    check(-1.0,    0.0,    0.0,    -16,   0,  15,  0,  0);
    check( 0.0,   -1.0,    0.0,      0,   0,   0, -1,  0);
    check( 0.0,    0.0,   -1.0,      0, -16,   0,  0, 15);
    check(-1.001,  0.0,    0.0,    -16,   0,  14,  0,  0);
    check( 0.0,    0.0,   -1.001,    0, -16,   0,  0, 14);
    
    check( 0.0,    0.0,  -14.157,    0, -16,   0,  0,  1);
    check( 0.0,    0.0,  -15.157,    0, -16,   0,  0,  0);
    check( 0.0,    0.0,  -16.157,    0, -32,   0,  0, 15);

    check( 0.0,    0.0,   18.0,      0,  16,   0,  0,  2);
    check( 0.0,    0.0,   17.0,      0,  16,   0,  0,  1);
    check( 0.0,    0.0,   16.0,      0,  16,   0,  0,  0);
    check( 0.0,    0.0,   15.0,      0,   0,   0,  0, 15);
    check( 0.0,    0.0,   14.0,      0,   0,   0,  0, 14);
    check( 0.0,    0.0,   13.0,      0,   0,   0,  0, 13);
    check( 0.0,    0.0,   12.0,      0,   0,   0,  0, 12);
    check( 0.0,    0.0,   11.0,      0,   0,   0,  0, 11);
    check( 0.0,    0.0,   10.0,      0,   0,   0,  0, 10);
    check( 0.0,    0.0,    9.0,      0,   0,   0,  0,  9);
    check( 0.0,    0.0,    8.0,      0,   0,   0,  0,  8);
    check( 0.0,    0.0,    7.0,      0,   0,   0,  0,  7);
    check( 0.0,    0.0,    6.0,      0,   0,   0,  0,  6);
    check( 0.0,    0.0,    5.0,      0,   0,   0,  0,  5);
    check( 0.0,    0.0,    4.0,      0,   0,   0,  0,  4);
    check( 0.0,    0.0,    3.0,      0,   0,   0,  0,  3);
    check( 0.0,    0.0,    2.0,      0,   0,   0,  0,  2);
    check( 0.0,    0.0,    1.0,      0,   0,   0,  0,  1);
    check( 0.0,    0.0,    0.0,      0,   0,   0,  0,  0);
    check( 0.0,    0.0,   -1.0,      0, -16,   0,  0, 15);
    check( 0.0,    0.0,   -2.0,      0, -16,   0,  0, 14);
    check( 0.0,    0.0,   -3.0,      0, -16,   0,  0, 13);
    check( 0.0,    0.0,   -4.0,      0, -16,   0,  0, 12);
    check( 0.0,    0.0,   -5.0,      0, -16,   0,  0, 11);
    check( 0.0,    0.0,   -6.0,      0, -16,   0,  0, 10);
    check( 0.0,    0.0,   -7.0,      0, -16,   0,  0,  9);
    check( 0.0,    0.0,   -8.0,      0, -16,   0,  0,  8);
    check( 0.0,    0.0,   -9.0,      0, -16,   0,  0,  7);
    check( 0.0,    0.0,  -10.0,      0, -16,   0,  0,  6);
    check( 0.0,    0.0,  -11.0,      0, -16,   0,  0,  5);
    check( 0.0,    0.0,  -12.0,      0, -16,   0,  0,  4);
    check( 0.0,    0.0,  -13.0,      0, -16,   0,  0,  3);
    check( 0.0,    0.0,  -14.0,      0, -16,   0,  0,  2);
    check( 0.0,    0.0,  -15.0,      0, -16,   0,  0,  1);
    check( 0.0,    0.0,  -16.0,      0, -16,   0,  0,  0);
    check( 0.0,    0.0,  -17.0,      0, -32,   0,  0, 15);
    check( 0.0,    0.0,  -18.0,      0, -32,   0,  0, 14);
    check( 0.0,    0.0,  -19.0,      0, -32,   0,  0, 13);
  });
}
