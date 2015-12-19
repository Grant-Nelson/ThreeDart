part of ThreeDart.Shapes;

class Shape {
  List<Face> _faces;
  List<Line> _lines;
  List<Vertex> _points;
  List<Vertex> _vertices;

  Shape() {
      this._faces = new List<Face>();
      this._lines = new List<Line>();
      this._points = new List<Vertex>();
      this._vertices = new List<Vertex>();
  }

  factory Shape.copy(Shape other) {
    return new Shape()
      ..merge(other);
  }

  factory Shape.cube() {
    return new Shape()
      .._addCubeSide( 1.0,  0.0,  0.0)  // x+
      .._addCubeSide(-1.0,  0.0,  0.0)  // X-
      .._addCubeSide( 0.0,  1.0,  0.0)  // Y+
      .._addCubeSide( 0.0, -1.0,  0.0)  // Y-
      .._addCubeSide( 0.0,  0.0,  1.0)  // Z+
      .._addCubeSide( 0.0,  0.0, -1.0); // Z-
  }

  factory Shape.disk([int sides = 8]) {
    Shape shape = new Shape();
    double step = 2.0*PI/sides.toDouble();
    List<Vertex> vers = new List<Vertex>();
    for (int i = 0; i < sides; i++) {
      double angle = step*i.toDouble();
      double x = sin(angle);
      double z = cos(angle);
      Vertex ver = shape.addVertex()
        ..location = new Math.Point3(x, 0.0, z)
        ..normal = new Math.Vector3(0.0, 1.0, 0.0)
        ..texture = new Math.Point2(x*0.5+0.5, z*0.5+0.5);
      vers.add(ver);
    }
    shape.addFan(vers);
    return shape;
  }

  factory Shape.cylander([double topRadius = 1.0, double bottomRadius = 1.0,
      int sides = 8, int div = 1, bool capTop = true, bool capBottom = true]) {
    Shape shape = new Shape();

    // TODO: Implement

    return shape;
  }

  factory Shape.sphere([int latitudeDiv = 12, int longitudeDiv = 12]) {
    Shape shape = new Shape();

    // TODO: Implement

    return shape;
  }

  factory Shape.isosphere([int iterations = 4]) {
    Shape shape = new Shape();

    // TODO: Implement

    return shape;
  }

  //factory Shape.grid([int widthDiv = 4, int heightDiv = 4, GridHeightHandle hndl]) {
  //Shape shape = new Shape();

    // TODO: Implement

  //  return shape;
  //}

  List<Face> get faces => this._faces;
  List<Line> get lines => this._lines;
  List<Vertex> get points => this._points;
  List<Vertex> get vertices => this._vertices;

  Vertex addVertex([Math.Point3 loc = null, Math.Vector3 norm = null, Math.Vector3 binm = null,
                    Math.Point2 txt = null, Math.Color4 clr = null, double weight = 0.0]) {
    Vertex ver = new Vertex(loc: loc, norm: norm, binm: binm, txt: txt, clr: clr, weight: weight);
    ver._index = this._vertices.length;
    this._vertices.add(ver);
    return ver;
  }

  List<Vertex> addPoints(List<Vertex> vertices) {
    this._points.addAll(vertices);
    return vertices;
  }

  Line addLine(Vertex ver1, Vertex ver2) {
    Line line = new Line(ver1, ver2);
    this._lines.add(line);
    return line;
  }

  List<Line> addLineStrip(List<Vertex> vertices) {
    List<Line> lines = new List<Line>();
    final int count = vertices.length;
    for (int i = 1; i < count; i++)
      lines.add(this.addLine(vertices[i-1], vertices[i]));
    return lines;
  }

  List<Line> addLineLoop(List<Vertex> vertices) {
    List<Line> lines = new List<Line>();
    final int count = vertices.length;
    if (count > 0) {
      for (int i = 1; i < count; i++)
        lines.add(this.addLine(vertices[i-1], vertices[i]));
      lines.add(this.addLine(vertices[count-1], vertices[0]));
    }
    return lines;
  }

  List<Line> addLines(List<Vertex> vertices) {
    List<Line> lines = new List<Line>();
    final int count = vertices.length;
    for (int i = 1; i < count; i += 2)
      lines.add(this.addLine(vertices[i-1], vertices[i]));
    return lines;
  }

  Face addFace(Vertex ver1, Vertex ver2, Vertex ver3) {
    Face face = new Face(ver1, ver2, ver3);
    this._faces.add(face);
    return face;
  }

  List<Face> addFan(List<Vertex> vertices) {
    List<Face> faces = new List<Face>();
    final int count = vertices.length;
    if (count > 0) {
      Vertex ver0 = vertices[0];
      for (int i = 2; i < count; i++)
        faces.add(this.addFace(ver0, vertices[i-1], vertices[i]));
    }
    return faces;
  }

  List<Face> addStrip(List<Vertex> vertices) {
    List<Face> faces = new List<Face>();
    final int count = vertices.length;
    bool flip = false;
    for (int i = 2; i < count; i++) {
      if (flip) {
        faces.add(this.addFace(vertices[i-2], vertices[i-1], vertices[i]));
        flip = false;
      } else {
        faces.add(this.addFace(vertices[i-1], vertices[i-2], vertices[i]));
        flip = true;
      }
    }
    return faces;
  }

  List<Face> addLoop(List<Vertex> vertices) {
    List<Face> faces = new List<Face>();
    final int count = vertices.length;
    bool flip = false;
    for (int i = 2; i < count+2; i++) {
      int j = i % count;
      if (flip) {
        faces.add(this.addFace(vertices[j-2], vertices[j-1], vertices[j]));
        flip = false;
      } else {
        faces.add(this.addFace(vertices[j-1], vertices[j-2], vertices[j]));
        flip = true;
      }
    }
    return faces;
  }

  List<Face> addTriangles(List<Vertex> vertices) {
    List<Face> faces = new List<Face>();
    final int count = vertices.length;
    for (int i = 2; i < count; i += 3)
      faces.add(this.addFace(vertices[i-2], vertices[i-1], vertices[i]));
    return faces;
  }

  void updateIndices() {
    for(int i = this.vertices.length - 1; i >= 0; --i)
      this.vertices[i]._index = i;
  }

  void merge(Shape other) {
    other.updateIndices();
    int offset = this._vertices.length;
    for (Vertex vertex in other._vertices) {
      this._vertices.add(vertex.copy());
    }
    this.updateIndices();
    for (Vertex point in other._points) {
      Vertex pnt = this._vertices[point.index + offset];
      this._points.add(pnt);
    }
    for (Line line in other._lines) {
      Vertex ver1 = this._vertices[line.vertex1.index + offset];
      Vertex ver2 = this._vertices[line.vertex2.index + offset];
      this._lines.add(new Line(ver1, ver2));
    }
    for (Face face in other._faces) {
      Vertex ver1 = this._vertices[face.vertex1.index + offset];
      Vertex ver2 = this._vertices[face.vertex2.index + offset];
      Vertex ver3 = this._vertices[face.vertex3.index + offset];
      this._faces.add(new Face(ver1, ver2, ver3));
    }
  }

  void calculateNormals() {
    for (Face face in this._faces)
      face.calculateNormal();
    for (Vertex vertex in this._vertices)
      vertex.calculateNormal();
  }

  void calculateBinormals() {
    for (Face face in this._faces)
      face.calculateBinormal();
    for (Vertex vertex in this._vertices)
      vertex.calculateBinormal();
  }

  bool _findMatching(VertexMatcher matcher, Vertex ver, int index, List<Vertex> matches, List<int> indices) {
    matches.add(ver);
    indices.add(index);
    for (int i = index - 1; i >= 0; --i) {
      Vertex ver2 = this._vertices[i];
      if (ver2 != null) {
        if (matcher.matches(ver, ver2)) {
          matches.add(ver2);
          indices.add(i);
        }
      }
    }
    return vertices.length > 1;
  }

  void _replaceVertices(Vertex newVer, List<int> indices) {
    indices.sort();
    for (int i = indices.length-1; i >= 0; --i) {
      int index = indices[i];
      Vertex ver = this.vertices[index];
      for (int j = ver.faces.length - 1; j >= 0; --j)
        ver.faces[j].replaceVertex(ver, newVer);
      for (int j = ver.lines.length - 1; j >= 0; --j)
        ver.lines[j].replaceVertex(ver, newVer);
      for (int j = this._points.length - 1; j >= 0; --j) {
        if (this._points[j] == ver) this._points[j] = newVer;
      }
      this.vertices[index] = null;
    }
    this.vertices.add(newVer);
  }

  void mergeVertices(VertexMatcher matcher, VertexMerger merger) {
    for (int i = this._vertices.length-1; i >= 0; --i) {
      Vertex ver = this._vertices[i];
      if (ver != null) {
        List<Vertex> matches = new List<Vertex>();
        List<int> indices = new List<int>();
        if (this._findMatching(matcher, ver, i, matches, indices)) {
          Vertex vec = merger.merge(matches);
          if (vec != null) this._replaceVertices(vec, indices);
        }
      }
    }
    for (int i = this._vertices.length-1; i >= 0; --i) {
      if (this._vertices[i] == null) this._vertices.removeAt(i);
    }
    for (int i = this._lines.length-1; i >= 0; --i) {
      if (this._lines[i].collapsed) this._lines.removeAt(i);
    }
    for (int i = this._faces.length-1; i >= 0; --i) {
      if (this._faces[i].collapsed) this._faces.removeAt(i);
    }
    // TODO: Need to check for repeat points, lines, and faces.
    this.updateIndices();
  }

  void joinSeams([VertexMatcher matcher = null]) {
    if (matcher == null) matcher = new LocationMatcher();
    this.mergeVertices(matcher, new VertexJoiner());
  }

  void adjustNormals([VertexMatcher matcher = null]) {
    if (matcher == null) matcher = new LocationMatcher();
    this.mergeVertices(matcher, new NormalAdjuster());
  }

  void _addCubeSide(double nx, double ny, double nz) {
    Vertex ver1 = this.addVertex()
      ..location = new Math.Point3(nx+ny+nz, ny+nz+nx, nz+nx+ny)
      ..normal = new Math.Vector3(nx, ny, nz)
      ..texture = new Math.Point2(0.0, 0.0)
      ..color = new Math.Color4(nx+ny+nz, ny+nz+nx, nz+nx+ny, 1.0);

    Vertex ver2 = this.addVertex()
      ..location = new Math.Point3(nx-ny+nz, ny-nz+nx, nz-nx+ny)
      ..normal = new Math.Vector3(nx, ny, nz)
      ..texture = new Math.Point2(0.0, 1.0)
      ..color = new Math.Color4(nx-ny+nz, ny-nz+nx, nz-nx+ny, 1.0);

    Vertex ver3 = this.addVertex()
      ..location = new Math.Point3(nx+ny-nz, ny+nz-nx, nz+nx-ny)
      ..normal = new Math.Vector3(nx, ny, nz)
      ..texture = new Math.Point2(1.0, 0.0)
      ..color = new Math.Color4(nx+ny-nz, ny+nz-nx, nz+nx-ny, 1.0);

    Vertex ver4 = this.addVertex()
      ..location = new Math.Point3(nx-ny-nz, ny-nz-nx, nz-nx-ny)
      ..normal = new Math.Vector3(nx, ny, nz)
      ..texture = new Math.Point2(1.0, 1.0)
      ..color = new Math.Color4(nx-ny-nz, ny-nz-nx, nz-nx-ny, 1.0);

    if (nx+ny+nz > 0.0) {
      this.addFan([ver1, ver2, ver4, ver3]);
    } else {
      this.addFan([ver1, ver3, ver4, ver2]);
    }
  }

  Data.BufferStore build(WebGL.RenderingContext gl, Data.VertexType type) {
    int length = this._vertices.length;
    int count = type.count;
    int stride = type.size;
    int offset = 0;
    List<double> vertices = new List<double>(length*stride);
    List<Data.BufferAttr> attrs = new List<Data.BufferAttr>(count);
    for (int i = 0; i < count; ++i) {
      Data.VertexType local = type.at(i);
      int size = local.size;
      Data.BufferAttr attr = new Data.BufferAttr(local, size,
        offset*Typed.Float32List.BYTES_PER_ELEMENT,
        stride*Typed.Float32List.BYTES_PER_ELEMENT);
      attrs[i] = attr;
      for (int j = 0; j < length; ++j) {
        Vertex ver = this._vertices[j];
        List<double> list = ver.listFor(local);
        int index = offset + j*stride;
        for (int k = 0; k < list.length; ++k) {
          vertices[index] = list[k];
          index++;
        }
      }
      offset += size;
    }

    WebGL.Buffer buffer = gl.createBuffer();
    gl.bindBuffer(WebGL.ARRAY_BUFFER, buffer);
    gl.bufferData(WebGL.ARRAY_BUFFER, new Typed.Float32List.fromList(vertices), WebGL.STATIC_DRAW);
    gl.bindBuffer(WebGL.ARRAY_BUFFER, null);
    Data.BufferStore store = new Data.BufferStore(buffer, attrs);

    this.updateIndices();
    if (this._points.length > 0) {
      List<int> indices = new List<int>();
      for (int i = 0; i < this._points.length; ++i) {
        indices.add(this._points[i].index);
      }
      store.indexObjects.add(new Data.IndexObject.pack(gl, WebGL.POINTS, indices));
    }

    if (this._lines.length > 0) {
      List<int> indices = new List<int>();
      for (int i = 0; i < this._lines.length; ++i) {
        indices.add(this._lines[i].vertex1.index);
        indices.add(this._lines[i].vertex2.index);
      }
      store.indexObjects.add(new Data.IndexObject.pack(gl, WebGL.LINES, indices));
    }

    if (this._faces.length > 0) {
      List<int> indices = new List<int>();
      for (int i = 0; i < this._faces.length; i++) {
        indices.add(this._faces[i].vertex1.index);
        indices.add(this._faces[i].vertex2.index);
        indices.add(this._faces[i].vertex3.index);
      }
      store.indexObjects.add(new Data.IndexObject.pack(gl, WebGL.TRIANGLES, indices));
    }

    return store;
  }

  String toString() {
    this.updateIndices();
    List<String> parts = new List<String>();
    if (this.vertices.length > 0) {
      parts.add('Vertices:');
      for (Vertex vertex in this.vertices) {
        parts.add('   '+vertex.toString());
      }
    }
    if (this.points.length > 0) {
      parts.add('Points:');
      for (Line point in this.points) {
        parts.add('   '+point.toString());
      }
    }
    if (this.lines.length > 0) {
      parts.add('Lines:');
      for (Line line in this.lines) {
        parts.add('   '+line.toString());
      }
    }
    if (this.faces.length > 0) {
      parts.add('Faces:');
      for (Face face in this.faces) {
        parts.add('   '+face.toString());
      }
    }
    return parts.join('\n');
  }
}
