part of ThreeDart.test.test000;

void addTechniqueTests(TestManager tests) {

  tests.add("Matrix4 Point Transposition Test", (TestArgs args) {
    testTechnique(args,
      Shapes.square(),
      new Math.Matrix4.identity(),
      new Math.Matrix4.translate(0.0, 0.0, -5.0),
      ["[  0.3,   0.3,   0.6]",
       "[ -0.3,   0.3,   0.6]",
       "[ -0.3,  -0.3,   0.6]",
       "[  0.3,  -0.3,   0.6]"]);
  });
}

void testTechnique(TestArgs args, Shapes.Shape shape, Math.Matrix4 objMat, Math.Matrix4 camMat, List<String> expParts) {
  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..shape = shape
    ..mover = new Movers.Constant(objMat);

  StringBuffer buf = new StringBuffer();
  Techniques.Debugger tech = new Techniques.Debugger(buf);
  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(obj)
    ..camara.mover = new Movers.Constant(camMat);

  new ThreeDart.ThreeDart.fromCanvas(new html.CanvasElement())
    ..scene = pass;

  args.info(buf.toString());

  String result = "";
  for (int i = 0; i < tech.results.length; i++) {
    result += "\n   " + tech.results[i].toString(1, 3);
  }

  String exp = "";
  for (int i = 0; i < expParts.length; i++) {
    exp += "\n   " + expParts[i];
  }

  if (result != exp) {
    args.error("Unexpected result from debugging technique: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n\n");
    args.fail();
  }
}
