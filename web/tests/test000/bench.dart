part of ThreeDart.test.test000;

void addBench(TestManager tests) {

  tests.add("Uint8List bench timing", (TestArgs args) {
    data.Uint8List temp = new data.Uint8List(1000);
    for (int i = 0; i < 400; i++) {
      for (int k = 0; k < 1000; k++) temp[k]=0;

      for (int j = 0; j < 100; j++) {
        for (int k = 0; k < 1000; k++) temp[k]++;
      }
    }
    args.info("$temp");
  });
  
  tests.add("List int bench timing", (TestArgs args) {
    List<int> temp = new List<int>.filled(1000, 0);
    for (int i = 0; i < 400; i++) {
      for (int k = 0; k < 1000; k++) temp[k]=0;

      for (int j = 0; j < 100; j++) {
        for (int k = 0; k < 1000; k++) temp[k]++;
      }
    }
    args.info("$temp");
  });
}
