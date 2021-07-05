part of ThreeDart.test.test000;

void addTechniqueTests(TestManager tests) {

  tests.add("Matrix4 Point Transposition Test", (TestArgs args) {
    testTechnique(args,
      Math.Matrix4.identity,
      new Math.Matrix4.translate(0.0, 0.0, -5.0),
      [new pointPair( 0.0,  0.0,  0.0,    0.0,                 0.0,                1.020051002550127),
       new pointPair( 1.0,  0.0,  0.0,   -0.3464101615137755,  0.0,                1.020051002550127),
       new pointPair(-1.0,  0.0,  0.0,    0.3464101615137755,  0.0,                1.020051002550127),
       new pointPair( 0.0,  1.0,  0.0,    0.0,                -0.3464101615137755, 1.020051002550127),
       new pointPair( 0.0, -1.0,  0.0,    0.0,                 0.3464101615137755, 1.020051002550127),
       new pointPair( 0.0,  0.0,  1.0,    0.0,                 0.0,                1.016717502541794),
       new pointPair( 0.0,  0.0, -1.0,    0.0,                 0.0,                1.025051252562628),
       new pointPair( 1.0,  1.0,  1.0,   -0.2886751345948129, -0.2886751345948129, 1.016717502541794),
       new pointPair( 1.0, -1.0,  1.0,   -0.2886751345948129,  0.2886751345948129, 1.016717502541794),
       new pointPair( 1.0,  1.0, -1.0,   -0.4330127018922194, -0.4330127018922194, 1.025051252562628),
       new pointPair( 1.0, -1.0, -1.0,   -0.4330127018922194,  0.4330127018922194, 1.025051252562628),
       new pointPair(-1.0,  1.0,  1.0,    0.2886751345948129, -0.2886751345948129, 1.016717502541794),
       new pointPair(-1.0, -1.0,  1.0,    0.2886751345948129,  0.2886751345948129, 1.016717502541794),
       new pointPair(-1.0,  1.0, -1.0,    0.4330127018922194, -0.4330127018922194, 1.025051252562628),
       new pointPair(-1.0, -1.0, -1.0,    0.4330127018922194,  0.4330127018922194, 1.025051252562628)]);
  });
}

class pointPair {
  Math.Point3 inPoint;
  Math.Point3 outPoint;

  pointPair(double inX, double inY, double inZ,
            double outX, double outY, double outZ):
    this.inPoint = new Math.Point3(inX, inY, inZ),
    this.outPoint = new Math.Point3(outX, outY, outZ);
}

void testTechnique(TestArgs args, Math.Matrix4 objMat, Math.Matrix4 camMat, List<pointPair> pairs) {
  Shapes.Shape shape = new Shapes.Shape();
  for (int i = 0; i < pairs.length; i++)
    shape.vertices.addNew(loc: pairs[i].inPoint);

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = shape
    ..mover = new Movers.Constant(objMat);

  StringBuffer buf = new StringBuffer();
  Techniques.Debugger tech = new Techniques.Debugger(buf);
  Scenes.EntityPass pass = new Scenes.EntityPass()
    ..technique = tech
    ..children.add(obj)
    ..camera?.mover = new Movers.Constant(camMat);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromCanvas(new html.CanvasElement())
    ..autoRefresh = false
    ..scene = pass;
  td.render();

  args.info(buf.toString());

  if (tech.results.length != pairs.length) {
    String result = "";
    for (int i = 0; i < tech.results.length; i++) {
      result += "\n   " + tech.results[i].format(1, 3);
    }
    String expStr = "";
    for (int i = 0; i < pairs.length; i++) {
      expStr += "\n   " + pairs[i].outPoint.format(1, 3);
    }
    args.error("Unexpected number of results from debugging technique: " +
      "\n   Expected: $expStr" +
      "\n   Gotten:   $result\n\n");
    args.fail();
  } else {
    for (int i = 0; i < tech.results.length; i++) {
      Math.Point3 expPnt = pairs[i].outPoint;
      Math.Point3 result = tech.results[i];
      if (expPnt != result) {
        args.error("Unexpected result from debugging technique at $i: " +
          "\n   Expected: $expPnt" +
          "\n   Gotten:   ${result.x}, ${result.y}, ${result.z}\n\n");
      }
    }
  }
}
