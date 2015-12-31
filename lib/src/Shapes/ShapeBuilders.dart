part of ThreeDart.Shapes;

typedef double func1Handle(double a);

typedef double func2Handle(double a, double b);

typedef Math.Point3 func1PntHandle(double a);

typedef Math.Point3 func2PntHandle(double a, double b);

Shape square() {
  Shape shape = new Shape();
  Vertex ver1 = shape.vertices.addNew(
    loc:  new Math.Point3(-1.0, -1.0, 0.0),
    norm: new Math.Vector3(0.0, 0.0, 1.0),
    txt:  new Math.Point2(0.0, 0.0),
    clr:  new Math.Color4(1.0, 0.0, 0.0, 1.0));

  Vertex ver2 = shape.vertices.addNew(
    loc:  new Math.Point3(-1.0, 1.0, 0.0),
    norm: new Math.Vector3(0.0, 0.0, 1.0),
    txt:  new Math.Point2(0.0, 1.0),
    clr:  new Math.Color4(1.0, 1.0, 0.0, 1.0));

  Vertex ver3 = shape.vertices.addNew(
    loc:  new Math.Point3(1.0, 1.0, 0.0),
    norm: new Math.Vector3(0.0, 0.0, 1.0),
    txt:  new Math.Point2(1.0, 1.0),
    clr:  new Math.Color4(0.0, 1.0, 0.0, 1.0));

  Vertex ver4 = shape.vertices.addNew(
    loc:  new Math.Point3(1.0, -1.0, 0.0),
    norm: new Math.Vector3(0.0, 0.0, 1.0),
    txt:  new Math.Point2(1.0, 0.0),
    clr:  new Math.Color4(0.0, 0.0, 1.0, 1.0));

  shape.faces.addFan([ver1, ver2, ver3, ver4]);
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

void _addCubeSide(Shape shape, double nx, double ny, double nz) {
  Vertex ver1 = shape.vertices.addNew(
    loc:  new Math.Point3(nx+ny+nz, ny+nz+nx, nz+nx+ny),
    norm: new Math.Vector3(nx, ny, nz),
    txt:  new Math.Point2(0.0, 0.0),
    clr:  new Math.Color4(nx+ny+nz, ny+nz+nx, nz+nx+ny, 1.0));

  Vertex ver2 = shape.vertices.addNew(
    loc:  new Math.Point3(nx-ny+nz, ny-nz+nx, nz-nx+ny),
    norm: new Math.Vector3(nx, ny, nz),
    txt:  new Math.Point2(0.0, 1.0),
    clr:  new Math.Color4(nx-ny+nz, ny-nz+nx, nz-nx+ny, 1.0));

  Vertex ver3 = shape.vertices.addNew(
    loc:  new Math.Point3(nx+ny-nz, ny+nz-nx, nz+nx-ny),
    norm: new Math.Vector3(nx, ny, nz),
    txt:  new Math.Point2(1.0, 0.0),
    clr:  new Math.Color4(nx+ny-nz, ny+nz-nx, nz+nx-ny, 1.0));

  Vertex ver4 = shape.vertices.addNew(
    loc:  new Math.Point3(nx-ny-nz, ny-nz-nx, nz-nx-ny),
    norm: new Math.Vector3(nx, ny, nz),
    txt:  new Math.Point2(1.0, 1.0),
    clr:  new Math.Color4(nx-ny-nz, ny-nz-nx, nz-nx-ny, 1.0));

  if (nx+ny+nz > 0.0) {
    shape.faces.addFan([ver1, ver2, ver4, ver3]);
  } else {
    shape.faces.addFan([ver1, ver3, ver4, ver2]);
  }
}

Shape disk({int sides: 8, double height: 0.0, bool flip: true, func1Handle radiusHndl: _constantRediusHandle}) {
  if (sides < 3) return null;
  Shape shape = new Shape();
  double sign = flip? -1.0: 1.0;
  double step = 2.0*PI/sides.toDouble();
  List<Vertex> vers = new List<Vertex>();
  vers.add(shape.vertices.addNew(
    loc:  new Math.Point3(0.0, height, 0.0),
    norm: new Math.Vector3(0.0, -sign, 0.0),
    txt:  new Math.Point2(0.5, 0.5),
    clr:  new Math.Color4(1.0, 1.0, 1.0)));
  for (int i = 0; i <= sides; i++) {
    double angle = step*i.toDouble();
    double x = sign*sin(angle), z = cos(angle);
    double radius = radiusHndl(i.toDouble()/sides.toDouble());
    vers.add(shape.vertices.addNew(
      loc:  new Math.Point3(x*radius, height, z*radius),
      norm: new Math.Vector3(0.0, -sign, 0.0),
      txt:  new Math.Point2(x*0.5+0.5, z*0.5+0.5),
      clr:  new Math.Color4(x, z, z)));
  }
  shape.faces.addFan(vers);
  return shape;
}

double _constantRediusHandle(double a) => 1.0;

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

Shape latLonSphere([int latitudeDiv = 12, int longitudeDiv = 12]) {
  Shape shape = surface(latitudeDiv, longitudeDiv, (double u, double v) {
    double r = sin(v*PI);
    Math.Vector3 vec = new Math.Vector3(-cos(u*2.0*PI)*r,
                                        cos(v*PI),
                                        sin(u*2.0*PI)*r);
    return new Math.Point3.fromVector3(vec.normal());
  });
  shape.faces.removeCollapsed();
  shape.calculateNormals();
  shape.adjustNormals();
  return shape;
}

Shape isosphere([int iterations = 4]) {
  Shape shape = new Shape();

  // TODO: Implement

  return shape;
}

Shape sphere({int widthDiv: 8, int heightDiv: 8, func2Handle heightHndl: _flatGridHeightHandle}) {
  Shape shape = new Shape();
  _addSphereSide(shape, heightHndl, widthDiv, heightDiv,  1.0,  0.0,  0.0);
  _addSphereSide(shape, heightHndl, widthDiv, heightDiv,  0.0,  1.0,  0.0);
  _addSphereSide(shape, heightHndl, widthDiv, heightDiv,  0.0,  0.0,  1.0);
  _addSphereSide(shape, heightHndl, widthDiv, heightDiv, -1.0,  0.0,  0.0);
  _addSphereSide(shape, heightHndl, widthDiv, heightDiv,  0.0, -1.0,  0.0);
  _addSphereSide(shape, heightHndl, widthDiv, heightDiv,  0.0,  0.0, -1.0);
  shape.calculateNormals();
  shape.adjustNormals();
  return shape;
}

void _addSphereSide(Shape shape, func2Handle heightHndl, int widthDiv, int heightDiv, double nx, double ny, double nz) {
  Math.Vector3 vec1 = new Math.Vector3(nx+ny+nz, ny+nz+nx, nz+nx+ny);
  Math.Vector3 vec2 = new Math.Vector3(nx-ny+nz, ny-nz+nx, nz-nx+ny);
  Math.Vector3 vec3 = new Math.Vector3(nx-ny-nz, ny-nz-nx, nz-nx-ny);
  Math.Vector3 vec4 = new Math.Vector3(nx+ny-nz, ny+nz-nx, nz+nx-ny);
  if (nx+ny+nz <= 0.0) {
    Math.Vector3 t = vec4;
    vec4 = vec2;
    vec2 = t;
  }
  Shape face = surface(widthDiv, heightDiv, (double u, double v) {
    Math.Vector3 vec5 = vec1.lerp(vec2, u);
    Math.Vector3 vec6 = vec4.lerp(vec3, u);
    Math.Vector3 vec7 = vec5.lerp(vec6, v);
    double height = 1.0+heightHndl(u, v);
    return new Math.Point3.fromVector3(vec7.normal()*height);
  });
  if (face != null) shape.merge(face);
}

Shape toroid({double majorRadius: 1.0, double minorRadius: 0.3, int majorCount: 40, int minorCount: 20}) {
  return cylindicalPath(majorCount, minorCount, majorRadius, minorRadius, (double t) {
    return new Math.Point3(cos(t), sin(t), 0.0);
  });
}

Shape knot({int majorCount: 16, int minorCount: 150, double majorRadius: 1.0, double minorRadius: 0.3,
    double minorTurns: 3.0, double majorTurns: 2.0}) {
  return cylindicalPath(majorCount, minorCount, majorRadius, minorRadius, (double t) {
    double scalar = 2.0 + cos(minorTurns*t);
    return new Math.Point3(scalar*cos(majorTurns*t)/2.0,
                           scalar*sin(majorTurns*t)/2.0,
                           sin(minorTurns*t)/2.0);
  });
}

Shape cylindicalPath(int majorCount, int minorCount, double majorRadius, double minorRadius, func1PntHandle pathHndl) {
  Shape shape = surface(majorCount, minorCount, (double u, double v) {
    double majorAngle = u*2.0*PI;
    Math.Point3 cur = pathHndl(majorAngle)*majorRadius;
    Math.Point3 next = pathHndl(majorAngle + PI/majorCount)*majorRadius;
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

double _flatGridHeightHandle(double u, double v) => 0.0;

Shape surface(int widthDiv, int heightDiv, func2PntHandle locHndl) {
  if (widthDiv < 1) return null;
  if (heightDiv < 1) return null;
  Shape shape = new Shape();
  List<Vertex> vers = new List<Vertex>();
  for (int i = 0; i <= heightDiv; i++) {
    double u = i.toDouble()/heightDiv.toDouble();
    vers.add(shape.vertices.addNew(
      loc: locHndl(u, 0.0),
      txt: new Math.Point2(u, 0.0),
      clr: new Math.Color4(u, 0.0, 0.0)));
  }
  for (int i = 1; i <= widthDiv; i++) {
    double v = i.toDouble()/widthDiv.toDouble();
    for (int j = 0; j <= heightDiv; j++) {
      double u = j.toDouble()/heightDiv.toDouble();
      vers.add(shape.vertices.addNew(
        loc: locHndl(u, v),
        txt: new Math.Point2(u, v),
        clr: new Math.Color4(u, v, v)));
    }
  }
  shape.faces.addGrid(widthDiv+1, heightDiv+1, vers);
  return shape;
}
