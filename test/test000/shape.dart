part of ThreeDart.test.test000;

void shapeTest1(TestArgs args) {
  Shapes.Shape cube = _faceNormals(new Shapes.Shape.cube());
  Data.BufferStore data = cube.build(new Data.TestBufferBuilder(),
    Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Clr3);
  args.info(data.toString());

  // TODO: Finish Implementing
}

Shapes.Shape _faceNormals(Shapes.Shape shape) {
  shape.calculateNormals();
  shape.calculateBinormals();
  shape.updateIndices();
  Shapes.Shape result = new Shapes.Shape();
  Math.Color4 color = new Math.Color4(1.0, 1.0, 0.3);
  for (Shapes.Face face in shape.faces) {
    Shapes.Vertex ver1 = face.vertex1.copy()..color = new Math.Color4(1.0, 0.0, 0.0);
    Shapes.Vertex ver2 = face.vertex2.copy()..color = new Math.Color4(0.0, 1.0, 0.0);
    Shapes.Vertex ver3 = face.vertex3.copy()..color = new Math.Color4(0.0, 0.0, 1.0);
    result.vertices.add(ver1);
    result.vertices.add(ver2);
    result.vertices.add(ver3);

    Shapes.Vertex cen1 = new Shapes.Vertex(
      loc: (face.vertex1.location + face.vertex2.location + face.vertex3.location)/3.0,
      norm: face.normal,
      clr: color);

    Shapes.Vertex cen2 = cen1.copy();
    cen2.location = cen2.location + new Math.Point3.fromVector3(cen2.normal);
    cen2.color = new Math.Color4.white();
    result.vertices.add(cen1);
    result.vertices.add(cen2);
    result.lines.add(new Shapes.Line(cen1, cen2));

    result.lines.add(new Shapes.Line(cen1, ver1));
    result.lines.add(new Shapes.Line(cen1, ver2));
    result.lines.add(new Shapes.Line(cen1, ver3));
  }
  result.updateIndices();
  return result;
}
