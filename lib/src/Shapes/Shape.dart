part of ThreeDart.Shapes;

/// A shape defining the renderable shape and collision detection.
class Shape {
  VertexCollection _vertices;
  ShapePointCollection _points;
  ShapeLineCollection _lines;
  ShapeFaceCollection _faces;
  Core.Event _changed;

  /// Creates a new shape.
  Shape() {
    this._vertices = new VertexCollection._(this);
    this._points = new ShapePointCollection._(this);
    this._lines = new ShapeLineCollection._(this);
    this._faces = new ShapeFaceCollection._(this);
    this._changed = new Core.Event();
  }

  /// Creates a copy of the given [other] shape.
  factory Shape.copy(Shape other) {
    return new Shape()..merge(other);
  }

  /// The collection of vertices for the shape.
  VertexCollection get vertices => this._vertices;

  /// The collection of renderable points for the shape.
  ShapePointCollection get points => this._points;

  /// The collection of renderable lines for the shape.
  ShapeLineCollection get lines => this._lines;

  /// The collection of renderable faces for the shape.
  ShapeFaceCollection get faces => this._faces;

  /// The changed event to signal when ever the shape is modified.
  Core.Event get changed => this._changed;

  /// Merges the given shape into this shape.
  /// No vertices nor seams are joined, this is a simple copy
  /// of all the given shape's information into this shape.
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

  /// Calculates the normals for the vertices and favces.
  /// True if successful, false on error.
  bool calculateNormals() {
    bool success = true;
    this._changed.suspend();
    if (!this._faces.calculateNormals()) success = false;
    if (!this._vertices.calculateNormals()) success = false;
    this._changed.resume();
    return success;
  }

  /// Calculates the binormals for the vertices and favces.
  /// Typically the normals should be calculated first.
  /// True if successful, false on error.
  bool calculateBinormals() {
    bool success = true;
    this._changed.suspend();
    if (!this._faces.calculateBinormals()) success = false;
    if (!this._vertices.calculateBinormals()) success = false;
    this._changed.resume();
    return success;
  }

  /// Calculates the cube texture coordinate for the vertices and favces.
  /// The normals should be calculated first.
  /// True if successful, false on error.
  bool calculateCubeTextures() {
    bool success = true;
    this._changed.suspend();
    if (!this._vertices.calculateCubeTextures()) success = false;
    this._changed.resume();
    return success;
  }

  /// Calculates the axial alligned bounding box of the shape.
  Math.Region3 calculateAABB() {
    final int count = this._vertices.length;
    if (count <= 0) return new Math.Region3.zero();
    Math.Region3 result = new Math.Region3.fromPoint(this._vertices[0].location);
    for (int i = count-1; i >= 1; i--)
      result.expand(this._vertices[i].location);
    return result;
  }

  /// Finds the first index of the vertex which matches the given vertex.
  /// If no match is found then -1 is returned.
  int findFirstIndex(Vertex ver, [VertexMatcher matcher = null, int startIndex = 0]) {
    if (matcher == null) matcher = new FullVertexMatcher();
    final int count = this._vertices.length;
    for (int i = startIndex; i < count; ++i) {
      Vertex ver2 = this._vertices[i];
      if (ver2 != null) {
        if (matcher.matches(ver, ver2)) {
          return i;
        }
      }
    }
    return -1;
  }

  /// Gets the first vertex in this shape which matches the given vertex.
  /// If no match is found then null is returned.
  Vertex findFirst(Vertex ver, [VertexMatcher matcher = null, int startIndex = 0]) {
    if (matcher == null) matcher = new FullVertexMatcher();
    final int count = this._vertices.length;
    for (int i = startIndex; i < count; ++i) {
      Vertex ver2 = this._vertices[i];
      if (ver2 != null) {
        if (matcher.matches(ver, ver2)) {
          return ver2;
        }
      }
    }
    return null;
  }

  /// Finds all vertices in this shape which matches the given vertex.
  List<Vertex> findAll(Vertex ver, [VertexMatcher matcher = null, int startIndex = 0]) {
    if (matcher == null) matcher = new FullVertexMatcher();
    List<Vertex> results = new List<Vertex>();
    final int count = this._vertices.length;
    for (int i = startIndex; i < count; ++i) {
      Vertex ver2 = this._vertices[i];
      if (ver2 != null) {
        if (matcher.matches(ver, ver2)) {
          results.add(ver2);
        }
      }
    }
    return results;
  }

  /// Finds the matching vertex below the given index and puts the result
  /// matches and indices into the given lists.
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

  /// Replaces the vertices at the given indices with the given new vertex.
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

  /// Merges with the given merger all the vertices which match with the given matcher.
  /// This may also be used to process vertices without replacing them if the
  /// merger returns null for a merge.
  /// After merger collapsed lines and faces are removed and
  /// repeat points, lines, and faces are removed.
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

  /// Joins seams in the shape by joining vertices.
  /// By joining vertices the edges will be smoothed hiding seams.
  /// This is useful if you wrap a flat grid into a cylinder and want
  /// to smooth where the opposite edges touch.
  void joinSeams([VertexMatcher matcher = null]) {
    if (matcher == null) matcher = new VertexLocationMatcher();
    this.mergeVertices(matcher, new VertexJoiner());
  }

  /// Adjust normals by summing all the normals for matching vertices.
  /// This is similar to joinging seams because it will smooth out edges
  /// however the edges will still have seperate vertices meaning the surface
  /// can have texturing without a texture seam.
  void adjustNormals([VertexMatcher matcher = null]) {
    if (matcher == null) matcher = new VertexLocationMatcher();
    this.mergeVertices(matcher, new NormalAdjuster());
  }

  /// Adjust binormals by summing all the binormals for matching vertices.
  /// This is similar to joinging seams because it will smooth out edges
  /// however the edges will still have seperate vertices meaning the surface
  /// can have texturing without a texture seam.
  void adjustBinormals([VertexMatcher matcher = null]) {
    if (matcher == null) matcher = new VertexLocationMatcher();
    this.mergeVertices(matcher, new BinormalAdjuster());
  }

  /// Flips the shape insize out.
  void flip() {
    this._changed.suspend();
    this._faces.flip();
    for (int i = this._vertices.length-1; i >= 0; --i) {
      Vertex ver = this._vertices[i];
      if (ver != null) {
        if (ver.normal != null) ver.normal = -ver.normal;
        if (ver.binormal != null) ver.binormal = -ver.binormal;
      }
    }
    this._changed.resume();
  }

  /// Builds a buffer store for caching the shape for rendering.
  /// This requires the buffer [builder] for WebGL or testing,
  /// and the vertex [type] required for technique.
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

  /// Gets the string for the shape with and optional [indent].
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

  /// Called when any change has occurred.
  /// This emits the [changed] event.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChanged() {
    this._changed.emit(new Core.EventArgs(this));
  }

  /// Called when the given [vertex] has been added.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onVertexAdded(Vertex vertex) {
    this.onChanged();
  }

  /// Called when the given [vertex] has been modified.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onVertexModified(Vertex vertex) {
    this.onChanged();
  }

  /// Called when the given [vertex] has been removed.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onVertexRemoved(Vertex vertex) {
    this.onChanged();
  }

  /// Called when the given [face] has been added.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onFaceAdded(Face face) {
    this.onChanged();
  }

  /// Called when the given [face] has been modified.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onFaceModified(Face face) {
    this.onChanged();
  }

  /// Called when the given [face] has been removed.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onFaceRemoved(Face face) {
    this.onChanged();
  }

  /// Called when the given [line] has been added.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onLineAdded(Line line) {
    this.onChanged();
  }

  /// Called when the given [line] has been modified.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onLineModified(Line line) {
    this.onChanged();
  }

  /// Called when the given [line] has been removed.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onLineRemoved(Line line) {
    this.onChanged();
  }

  /// Called when the given [point] has been added.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onPointAdded(Point point) {
    this.onChanged();
  }

  /// Called when the given [point] has been modified.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onPointModified(Point point) {
    this.onChanged();
  }

  /// Called when the given [point] has been removed.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onPointRemoved(Point point) {
    this.onChanged();
  }
}
