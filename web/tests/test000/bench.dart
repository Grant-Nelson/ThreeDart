part of ThreeDart.test.test000;

void addBench(TestManager tests) {

  tests.add("Benchmark Uint8List timing", (TestArgs args) {
    data.Uint8List temp = new data.Uint8List(1000);
    args.bench(1.0, () {
      for (int k = 0; k < 1000; k++) temp[k]=0;

      for (int j = 0; j < 100; j++) {
        for (int k = 0; k < 1000; k++) temp[k]++;
      }
    });
    args.info("\n$temp");
  });

  tests.add("Benchmark List int timing", (TestArgs args) {
    List<int> temp = new List<int>.filled(1000, 0);
    args.bench(1.0, () {
      for (int k = 0; k < 1000; k++) temp[k]=0;

      for (int j = 0; j < 100; j++) {
        for (int k = 0; k < 1000; k++) temp[k]++;
      }
    });
    args.info("\n$temp");
  });

  tests.add("Benchmark cuboid building", (TestArgs args) {
    Shapes.Shape shape;
    args.bench(1.0, () {
      shape = Shapes.cuboid();
    });
    //shape.validate(args);
  });

  tests.add("Benchmark cuboid building and getting normals", (TestArgs args) {
    Shapes.Shape shape;
    args.bench(1.0, () {
      shape = Shapes.sphere();
      shape.calculateNormals();
    });
    //shape.validate(args);
  });

  tests.add("Benchmark cuboid building and join seams", (TestArgs args) {
    Shapes.Shape shape;
    args.bench(1.0, () {
      shape = Shapes.sphere();
      shape.joinSeams(new Shapes.VertexLocationMatcher());
    });
    //shape.validate(args);
  });

  tests.add("Benchmark sphere building", (TestArgs args) {
    Shapes.Shape shape;
    args.bench(1.0, () {
      shape = Shapes.sphere();
    });
    //shape.validate(args);
  });
}
