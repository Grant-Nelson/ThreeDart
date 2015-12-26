part of ThreeDart.Shapes;

typedef double func1Handle(double a);

typedef double func2Handle(double a, double b);

typedef Math.Point3 func1PntHandle(double a);

typedef Math.Point3 func2PntHandle(double a, double b);

Shape square() {
  Shape shape = new Shape();
  Vertex ver1 = shape.addVertex()
    ..location = new Math.Point3(-1.0, -1.0, 0.0)
    ..normal = new Math.Vector3(0.0, 0.0, 1.0)
    ..texture = new Math.Point2(0.0, 0.0)
    ..color = new Math.Color4(1.0, 0.0, 0.0, 1.0);

  Vertex ver2 = shape.addVertex()
    ..location = new Math.Point3(-1.0, 1.0, 0.0)
    ..normal = new Math.Vector3(0.0, 0.0, 1.0)
    ..texture = new Math.Point2(0.0, 1.0)
    ..color = new Math.Color4(1.0, 1.0, 0.0, 1.0);

  Vertex ver3 = shape.addVertex()
    ..location = new Math.Point3(1.0, 1.0, 0.0)
    ..normal = new Math.Vector3(0.0, 0.0, 1.0)
    ..texture = new Math.Point2(1.0, 1.0)
    ..color = new Math.Color4(0.0, 1.0, 0.0, 1.0);

  Vertex ver4 = shape.addVertex()
    ..location = new Math.Point3(1.0, -1.0, 0.0)
    ..normal = new Math.Vector3(0.0, 0.0, 1.0)
    ..texture = new Math.Point2(1.0, 0.0)
    ..color = new Math.Color4(0.0, 0.0, 1.0, 1.0);

  shape.addFan([ver1, ver2, ver3, ver4]);
  return shape;
}

Shape cube() {
  Shape shape = new Shape();
  _addCubeSide(shape,  1.0,  0.0,  0.0); // x+
  _addCubeSide(shape, -1.0,  0.0,  0.0); // X-
  _addCubeSide(shape,  0.0,  1.0,  0.0); // Y+
  _addCubeSide(shape,  0.0, -1.0,  0.0); // Y-
  _addCubeSide(shape,  0.0,  0.0,  1.0); // Z+
  _addCubeSide(shape,  0.0,  0.0, -1.0); // Z-
  return shape;
}

Shape disk({int sides: 8, double height: 0.0, bool flip: true, func1Handle radiusHndl: _constantRediusHandle}) {
  if (sides < 3) return null;
  Shape shape = new Shape();
  double sign = flip? -1.0: 1.0;
  double step = 2.0*PI/sides.toDouble();
  List<Vertex> vers = new List<Vertex>();
  vers.add(shape.addVertex()
    ..location = new Math.Point3(0.0, height, 0.0)
    ..normal = new Math.Vector3(0.0, -sign, 0.0)
    ..texture = new Math.Point2(0.5, 0.5)
    ..color = new Math.Color4(1.0, 1.0, 1.0));
  for (int i = 0; i <= sides; i++) {
    double angle = step*i.toDouble();
    double x = sign*sin(angle), z = cos(angle);
    double radius = radiusHndl(i.toDouble()/sides.toDouble());
    vers.add(shape.addVertex()
      ..location = new Math.Point3(x*radius, height, z*radius)
      ..normal = new Math.Vector3(0.0, -sign, 0.0)
      ..texture = new Math.Point2(x*0.5+0.5, z*0.5+0.5)
      ..color = new Math.Color4(x, z, z));
  }
  shape.addFan(vers);
  return shape;
}

Shape cylinder({double topRadius: 1.0, double bottomRadius: 1.0,
    int sides: 8, int div: 1, bool capTop: true, bool capBottom: true}) {
  return cylindical(sides: sides, div: div, capTop: capTop, capBottom: capBottom,
    radiusHndl: (double _, double v) => Math.lerpVal(topRadius, bottomRadius, v));
}

Shape cylindical({func2Handle radiusHndl: null, int sides: 8, int div: 1, bool capTop: true, bool capBottom: true}) {
  if (radiusHndl == null)  return null;
  if (sides < 3) return null;
  if (div < 1) return null;
  Shape shape = surface(div, sides, (double u, double v) {
    double angle = 2.0*PI*u;
    double x = -sin(angle), z = cos(angle);
    double y = Math.lerpVal(-1.0, 1.0, v);
    double radius = radiusHndl(u, v);
    return new Math.Point3(x*radius, y, z*radius);
  });
  if (shape == null) return null;
  shape.calculateNormals();
  shape.adjustNormals();
  if (capTop) {
    Shape top = disk(sides: sides, height: 1.0, flip: true,
      radiusHndl: (double u) => radiusHndl(u, 1.0));
    shape.merge(top);
  }
  if (capBottom) {
    Shape bottom = disk(sides: sides, height: -1.0, flip: false,
      radiusHndl: (double u) => radiusHndl(1.0-u, 0.0));
    shape.merge(bottom);
  }
  return shape;
}

Shape sphere([int latitudeDiv = 12, int longitudeDiv = 12]) {
  Shape shape = new Shape();

  // TODO: Implement

  return shape;
}

Shape isosphere([int iterations = 4]) {
  Shape shape = new Shape();

  // TODO: Implement

  return shape;
}

Shape hexsphere([int divides = 4]) {
  Shape shape = new Shape();

  // TODO: Implement

  return shape;
}

Shape toroid({double majorRadius: 0.5, double minorRadius: 0.2, int majorCount: 40, int minorCount: 20}) {
  Shape shape = new Shape();

  // TODO: Implement

  return shape;
}

Shape knot({int sides: 16, int div: 150, double majorRadius: 1.0, double minorRadius: 0.3,
    double minorTurns: 3.0, double majorTurns: 2.0}) {
  return cylindicalPath(sides, div, majorRadius, minorRadius, (double t) {
    double scalar = 2.0 + cos(minorTurns*t);
    return new Math.Point3(scalar*cos(majorTurns*t)/2.0,
                           scalar*sin(majorTurns*t)/2.0,
                           sin(minorTurns*t)/2.0);
  });
}

Shape cylindicalPath(int sides, int div, double majorRadius, double minorRadius, func1PntHandle pathHndl) {
  Shape shape = surface(sides, div, (double u, double v) {
    double majorAngle = u*2.0*PI;
    Math.Point3 cur = pathHndl(majorAngle)*majorRadius;
    Math.Point3 next = pathHndl(majorAngle + PI/div)*majorRadius;
    Math.Vector3 heading = new Math.Vector3.fromPoint3(next - cur).normal();

    Math.Vector3 other = new Math.Vector3(1.0, 0.0, 0.0);
    if (heading != other) {
      other = new Math.Vector3(0.0, 0.0, 1.0);
    }
    Math.Vector3 cross = heading.cross(other).normal();
    other = cross.cross(heading).normal();

    var minorAngle = v*2.0*PI;
    var minorCos = cos(minorAngle)*minorRadius;
    var minorSin = sin(minorAngle)*minorRadius;
    return cur + new Math.Point3.fromVector3(other*minorCos + cross*minorSin);
  });
  if (shape == null) return null;
  shape.calculateNormals();
  shape.adjustNormals();
  return shape;
}

Shape grid({int widthDiv: 4, int heightDiv: 4, func2Handle heightHndl: _flatGridHeightHandle}) {
  return surface(widthDiv, heightDiv, (double u, double v) =>
    new Math.Point3(u*2.0-1.0, heightHndl(u, 0.0), v*2.0-1.0));
}

Shape surface(int widthDiv, int heightDiv, func2PntHandle locHndl) {
  if (widthDiv < 1) return null;
  if (heightDiv < 1) return null;
  Shape shape = new Shape();
  List<Vertex> vers = new List<Vertex>();
  for (int i = 0; i <= heightDiv; i++) {
    double u = i.toDouble()/heightDiv.toDouble();
    vers.add(shape.addVertex()
      ..location = locHndl(u, 0.0)
      ..texture = new Math.Point2(u, 0.0)
      ..color = new Math.Color4(u, 0.0, 0.0));
  }
  for (int i = 1; i <= widthDiv; i++) {
    double v = i.toDouble()/widthDiv.toDouble();
    for (int j = 0; j <= heightDiv; j++) {
      double u = j.toDouble()/heightDiv.toDouble();
      vers.add(shape.addVertex()
        ..location = locHndl(u, v)
        ..texture = new Math.Point2(u, v)
        ..color = new Math.Color4(u, v, v));
    }
  }
  shape.addGrid(widthDiv+1, heightDiv+1, vers);
  return shape;
}

void _addCubeSide(Shape shape, double nx, double ny, double nz) {
  Vertex ver1 = shape.addVertex()
    ..location = new Math.Point3(nx+ny+nz, ny+nz+nx, nz+nx+ny)
    ..normal = new Math.Vector3(nx, ny, nz)
    ..texture = new Math.Point2(0.0, 0.0)
    ..color = new Math.Color4(nx+ny+nz, ny+nz+nx, nz+nx+ny, 1.0);

  Vertex ver2 = shape.addVertex()
    ..location = new Math.Point3(nx-ny+nz, ny-nz+nx, nz-nx+ny)
    ..normal = new Math.Vector3(nx, ny, nz)
    ..texture = new Math.Point2(0.0, 1.0)
    ..color = new Math.Color4(nx-ny+nz, ny-nz+nx, nz-nx+ny, 1.0);

  Vertex ver3 = shape.addVertex()
    ..location = new Math.Point3(nx+ny-nz, ny+nz-nx, nz+nx-ny)
    ..normal = new Math.Vector3(nx, ny, nz)
    ..texture = new Math.Point2(1.0, 0.0)
    ..color = new Math.Color4(nx+ny-nz, ny+nz-nx, nz+nx-ny, 1.0);

  Vertex ver4 = shape.addVertex()
    ..location = new Math.Point3(nx-ny-nz, ny-nz-nx, nz-nx-ny)
    ..normal = new Math.Vector3(nx, ny, nz)
    ..texture = new Math.Point2(1.0, 1.0)
    ..color = new Math.Color4(nx-ny-nz, ny-nz-nx, nz-nx-ny, 1.0);

  if (nx+ny+nz > 0.0) {
    shape.addFan([ver1, ver2, ver4, ver3]);
  } else {
    shape.addFan([ver1, ver3, ver4, ver2]);
  }
}

double _constantRediusHandle(double a) {
  return 1.0;
}

double _flatGridHeightHandle(double u, double v) {
  return 0.0;
}
