part of ThreeDart.test.test000;

void addBench(TestManager tests) {

  tests.add("Benchmark Uint8List timing", (TestArgs args) {
    data.Uint8List temp = new data.Uint8List(1000);
    args.bench(0.5, () {
      for (int k = 0; k < 1000; k++) temp[k]=0;

      for (int j = 0; j < 100; j++) {
        for (int k = 0; k < 1000; k++) temp[k]++;
      }
    });
    args.info("\n$temp");
  });

  tests.add("Benchmark List int timing", (TestArgs args) {
    List<int> temp = new List<int>.filled(1000, 0);
    args.bench(0.5, () {
      for (int k = 0; k < 1000; k++) temp[k]=0;

      for (int j = 0; j < 100; j++) {
        for (int k = 0; k < 1000; k++) temp[k]++;
      }
    });
    args.info("\n$temp");
  });

  tests.add("Benchmark cuboid building only", (TestArgs args) {
    Shapes.Shape shape;
    args.info("With Octree:\n");
    args.bench(0.5, () {
      shape = Shapes.cuboid(useOctree: true);
    });
    shape.validate(args);
    
    args.info("\nWithout Octree:\n");
    args.bench(0.5, () {
      shape = Shapes.cuboid(useOctree: false);
    });
    shape.validate(args);
  });

  tests.add("Benchmark cuboid building and getting normals", (TestArgs args) {
    Shapes.Shape shape;
    args.info("With Octree:\n");
    args.bench(0.5, () {
      shape = Shapes.cuboid(useOctree: true);
      shape.calculateNormals();
    });
    shape.validate(args);
    
    args.info("\nWithout Octree:\n");
    args.bench(0.5, () {
      shape = Shapes.cuboid(useOctree: false);
      shape.calculateNormals();
    });
    shape.validate(args);
  });

  tests.add("Benchmark cuboid building and join seams", (TestArgs args) {
    Shapes.Shape shape;
    args.info("With Octree:\n");
    args.bench(0.5, () {
      shape = Shapes.cuboid(useOctree: true);
      shape.joinSeams(new Shapes.VertexLocationMatcher());
    });
    shape.validate(args);

    args.info("\nWithout Octree:\n");
    args.bench(0.5, () {
      shape = Shapes.cuboid(useOctree: false);
      shape.joinSeams(new Shapes.VertexLocationMatcher());
    });
    shape.validate(args);
  });

  tests.add("Benchmark sphere building", (TestArgs args) {
    Shapes.Shape shape;
    args.info("With Octree:\n");
    args.bench(0.5, () {
      shape = Shapes.sphere(useOctree: true);
    });
    shape.validate(args);

    args.info("\nWithout Octree:\n");
    args.bench(0.5, () {
      shape = Shapes.sphere(useOctree: false);
    });
    shape.validate(args);
  });
}
