part of ThreeDart.test.test000;

void addTechniqueTests(TestManager tests) {

  tests.add("Matrix4 Point Transposition Test", (TestArgs args) {
    ThreeDart.Entity obj = new ThreeDart.Entity()
      ..shape = Shapes.square()
      ..mover = new Movers.Constant(new Math.Matrix4.identity());

    StringBuffer buf = new StringBuffer();
    Techniques.Debugger tech = new Techniques.Debugger(buf);
    Scenes.RenderPass pass = new Scenes.RenderPass()
      ..tech = tech
      ..children.add(obj)
      ..camara.mover = new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, -5.0));

    new ThreeDart.ThreeDart.fromCanvas(new html.CanvasElement())
      ..scene = pass;

    String result = "";
    for (int i = 0; i < tech.results.length; i++) {
      result += "\n   " + tech.results[i].toString(1, 3);
    }

    String exp = "\n" +
      "   [ -0.3,   0.3,   0.4]\n" +
      "   [  0.3,   0.3,   0.4]\n" +
      "   [  0.3,  -0.3,   0.4]\n" +
      "   [ -0.3,  -0.3,   0.4]";

    args.info(buf.toString());
    if (result != exp) {
      args.error("Unexpected result from debugging technique: "+
        "\n   Expected: $exp"+
        "\n   Gotten:   $result\n\n");
      args.fail();
    }
  });
}
