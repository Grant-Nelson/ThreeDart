part of ThreeDart.test.test000;

void addCraftTests(TestManager tests) {

  tests.add("Test of craft example world getBlock", (TestArgs args) {
    craft.World world = new craft.World(null, new craft.CheckersGenerator());

    void check(double x, double y, double z,
      int expChunkX, int expChunkZ, int expBlockX, int expBlockY, int expBlockZ) {
        args.info("Testing getBlock($x, $y, $z):");
        craft.BlockInfo block = world.getBlock(x, y, z);
        if (block.chunkX != expChunkX || block.chunkZ != expChunkZ) {
          args.error("The given chunk [${block.chunkX}, ${block.chunkZ}] does not "+
            "match the expected chunk [$expChunkX, $expChunkZ].");
        }
        if (block.x != expBlockX || block.y != expBlockY || block.z != expBlockZ) {
          args.error("The given block [${block.x}, ${block.y}, ${block.z}] does not "+
            "match the expected block [$expBlockX, $expBlockY, $expBlockZ].");
        }
      }

    check(0.0, 0.0, 0.0, 0, 0, 0, 0, 0);
  });

}
