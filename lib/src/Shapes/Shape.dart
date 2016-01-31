part of ThreeDart.Shapes;

class Shape {
  VertexCollection _vertices;
  ShapePointCollection _points;
  ShapeLineCollection _lines;
  ShapeFaceCollection _faces;
  Core.Event _changed;

  Shape() {
    this._vertices = new VertexCollection._(this);
    this._points = new ShapePointCollection._(this);
    this._lines = new ShapeLineCollection._(this);
    this._faces = new ShapeFaceCollection._(this);
    this._changed = new Core.Event();
  }

  factory Shape.copy(Shape other) {
    return new Shape()..merge(other);
  }

  VertexCollection get vertices => this._vertices;
  ShapePointCollection get points => this._points;
  ShapeLineCollection get lines => this._lines;
  ShapeFaceCollection get faces => this._faces;
  Core.Event get changed => this._changed;

  void merge(Shape other) {
    this._changed.suspend();
    other._vertices._updateIndices();
    int offset = this._vertices.length;
    for (Vertex vertex in other._vertices._vertices) {
      this.vertices.add(vertex.copy());
    }
    this._vertices._updateIndices();
    for (Point point in other._points._points) {
      Vertex ver = this._vertices[point.vertex.index + offset];
      this._points.add(ver);
    }
    for (Line line in other._lines._lines) {
      Vertex ver1 = this._vertices[line.vertex1.index + offset];
      Vertex ver2 = this._vertices[line.vertex2.index + offset];
      this._lines.add(ver1, ver2);
    }
    for (Face face in other._faces._faces) {
      Vertex ver1 = this._vertices[face.vertex1.index + offset];
      Vertex ver2 = this._vertices[face.vertex2.index + offset];
      Vertex ver3 = this._vertices[face.vertex3.index + offset];
      this._faces.add(ver1, ver2, ver3);
    }
    this._changed.resume();
  }

  bool calculateNormals() {
    bool success = true;
    this._changed.suspend();
    if (!this._faces.calculateNormals()) success = false;
    if (!this._vertices.calculateNormals()) success = false;
    this._changed.resume();
    return success;
  }

  bool calculateBinormals() {
    bool success = true;
    this._changed.suspend();
    if (!this._faces.calculateBinormals()) success = false;
    if (!this._vertices.calculateBinormals()) success = false;
    this._changed.resume();
    return success;
  }

  int findFirstIndex(Vertex ver, [VertexMatcher matcher = null]) {
    if (matcher == null) matcher = new FullMatcher();
    final int count = this._vertices.length;
    for (int i = 0; i < count; ++i) {
      Vertex ver2 = this._vertices[i];
      if (ver2 != null) {
        if (matcher.matches(ver, ver2)) {
          return i;
        }
      }
    }
    return -2;
  }

  Vertex findFirst(Vertex ver, [VertexMatcher matcher = null]) {
    if (matcher == null) matcher = new FullMatcher();
    final int count = this._vertices.length;
    for (int i = 0; i < count; ++i) {
      Vertex ver2 = this._vertices[i];
      if (ver2 != null) {
        if (matcher.matches(ver, ver2)) {
          return ver2;
        }
      }
    }
    return null;
  }

  List<Vertex> findAll(Vertex ver, [VertexMatcher matcher = null]) {
    if (matcher == null) matcher = new FullMatcher();
    List<Vertex> results = new List<Vertex>();
    final int count = this._vertices.length;
    for (int i = 0; i < count; ++i) {
      Vertex ver2 = this._vertices[i];
      if (ver2 != null) {
        if (matcher.matches(ver, ver2)) {
          results.add(ver2);
        }
      }
    }
    return results;
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
    this.vertices.add(newVer);
    for (int i = indices.length-1; i >= 0; --i) {
      int index = indices[i];
      Vertex ver = this.vertices[index];
      while (ver.faces.length > 0)
        ver.faces[0].replaceVertex(ver, newVer);
      while (ver.lines.length > 0)
        ver.lines[0].replaceVertex(ver, newVer);
      while (ver.points.length > 0)
        ver.points[0].replaceVertex(ver, newVer);
      this.vertices.removeAt(index);
    }
  }

  void mergeVertices(VertexMatcher matcher, VertexMerger merger) {
    this._changed.suspend();
    for (int i = this._vertices.length-1; i >= 0; --i) {
      Vertex ver = this._vertices[i];
      if (ver != null) {
        List<Vertex> matches = new List<Vertex>();
        List<int> indices = new List<int>();
        if (this._findMatching(matcher, ver, i, matches, indices)) {
          Vertex newVer = merger.merge(matches);
          if (newVer != null) {
            this._replaceVertices(newVer, indices);
            i -= indices.length;
          }
        }
      }
    }

    this._vertices._updateIndices();
    this._lines.removeCollapsed();
    this._faces.removeCollapsed();
    this._points.removeRepeats();
    this._lines.removeRepeats(new UndirectedLineMatcher());
    this._faces.removeRepeats(new SimilarFaceMatcher());
    this._changed.resume();
  }

  void joinSeams([VertexMatcher matcher = null]) {
    if (matcher == null) matcher = new LocationMatcher();
    this.mergeVertices(matcher, new VertexJoiner());
  }

  void adjustNormals([VertexMatcher matcher = null]) {
    if (matcher == null) matcher = new LocationMatcher();
    this.mergeVertices(matcher, new NormalAdjuster());
  }

  void flip() {
    this._changed.suspend();
    this._faces.flip();
    this._changed.resume();
  }

  Data.BufferStore build(Data.BufferBuilder builder, Data.VertexType type) {
    int length = this._vertices.length;
    int count = type.count;
    int stride = type.size;
    int offset = 0;
    List<double> vertices = new List<double>(length*stride);
    List<Data.BufferAttr> attrs = new List<Data.BufferAttr>(count);
    for (int i = 0; i < count; ++i) {
      Data.VertexType local = type.at(i);
      int size = local.size;
      attrs[i] = new Data.BufferAttr(local, size,
        offset*Typed.Float32List.BYTES_PER_ELEMENT,
        stride*Typed.Float32List.BYTES_PER_ELEMENT);
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

    Data.Buffer vertexBuf = builder.fromDoubleList(WebGL.ARRAY_BUFFER, vertices);
    Data.BufferStore store = new Data.BufferStore(vertexBuf, attrs);
    if (!this._points.isEmpty) {
      List<int> indices = new List<int>();
      for (int i = 0; i < this._points.length; ++i) {
        indices.add(this._points[i].vertex.index);
      }
      Data.Buffer indexBuf = builder.fromIntList(WebGL.ELEMENT_ARRAY_BUFFER, indices);
      store.indexObjects.add(new Data.IndexObject(WebGL.POINTS, indices.length, indexBuf));
    }

    if (!this._lines.isEmpty) {
      List<int> indices = new List<int>();
      for (int i = 0; i < this._lines.length; ++i) {
        indices.add(this._lines[i].vertex1.index);
        indices.add(this._lines[i].vertex2.index);
      }
      Data.Buffer indexBuf = builder.fromIntList(WebGL.ELEMENT_ARRAY_BUFFER, indices);
      store.indexObjects.add(new Data.IndexObject(WebGL.LINES, indices.length, indexBuf));
    }

    if (!this._faces.isEmpty) {
      List<int> indices = new List<int>();
      for (int i = 0; i < this._faces.length; i++) {
        indices.add(this._faces[i].vertex1.index);
        indices.add(this._faces[i].vertex2.index);
        indices.add(this._faces[i].vertex3.index);
      }
      Data.Buffer indexBuf = builder.fromIntList(WebGL.ELEMENT_ARRAY_BUFFER, indices);
      store.indexObjects.add(new Data.IndexObject(WebGL.TRIANGLES, indices.length, indexBuf));
    }

    return store;
  }

  String toString([String indent = ""]) {
    List<String> parts = new List<String>();
    if (!this._vertices.isEmpty) {
      parts.add("${indent}Vertices:");
      parts.add(this._vertices.toString("${indent}   "));
    }
    if (!this._points.isEmpty) {
      parts.add('${indent}Points:');
      parts.add(this._points.toString("${indent}   "));
    }
    if (!this._lines.isEmpty) {
      parts.add('${indent}Lines:');
      parts.add(this._lines.toString("${indent}   "));
    }
    if (!this._faces.isEmpty) {
      parts.add('${indent}Faces:');
      parts.add(this._faces.toString("${indent}   "));
    }
    return parts.join('\n');
  }

  void onChanged() {
    this._changed.emit(new Core.EventArgs(this));
  }

  void onVertexAdded(Vertex vertex) {
    this.onChanged();
  }

  void onVertexModified(Vertex vertex) {
    this.onChanged();
  }

  void onVertexRemoved(Vertex vertex) {
    this.onChanged();
  }

  void onFaceAdded(Face face) {
    this.onChanged();
  }

  void onFaceModified(Face face) {
    this.onChanged();
  }

  void onFaceRemoved(Face face) {
    this.onChanged();
  }

  void onLineAdded(Line line) {
    this.onChanged();
  }

  void onLineModified(Line line) {
    this.onChanged();
  }

  void onLineRemoved(Line line) {
    this.onChanged();
  }

  void onPointAdded(Point point) {
    this.onChanged();
  }

  void onPointModified(Point point) {
    this.onChanged();
  }

  void onPointRemoved(Point point) {
    this.onChanged();
  }
}
