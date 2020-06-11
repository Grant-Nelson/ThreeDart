part of ThreeDart.Shapes;

/// A shape defining the renderable shape and collision detection.
class Shape extends BaseShape implements ShapeBuilder {
  VertexCollection _vertices;
  ShapePointCollection _points;
  ShapeLineCollection _lines;
  ShapeFaceCollection _faces;

  /// Creates a new shape.
  Shape() {
    this._vertices = new VertexCollection._(this);
    this._points = new ShapePointCollection._(this);
    this._lines = new ShapeLineCollection._(this);
    this._faces = new ShapeFaceCollection._(this);
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

  /// Merges the given shape into this shape.
  /// No vertices nor seams are joined, this is a simple copy
  /// of all the given shape's information into this shape.
  void merge(Shape other) {
    this.suspendChanged();
    other._vertices.updateIndices();
    int offset = this._vertices.length;
    for (Vertex vertex in other.vertices._vertices) {
      this.vertices.add(vertex.copy());
    }
    this._vertices.updateIndices();
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
    this.resumeChanged();
  }

  /// Calculates the normals for the vertices and faces.
  /// True if successful, false on error.
  bool calculateNormals() {
    bool success = true;
    this.suspendChanged();
    if (!this._faces.calculateNormals()) success = false;
    if (!this._vertices.calculateNormals()) success = false;
    this.resumeChanged();
    return success;
  }

  /// Calculates the binormals for the vertices and faces.
  /// Typically the normals should be calculated first.
  /// True if successful, false on error.
  bool calculateBinormals() {
    bool success = true;
    this.suspendChanged();
    if (!this._faces.calculateBinormals()) success = false;
    if (!this._vertices.calculateBinormals()) success = false;
    this.resumeChanged();
    return success;
  }

  /// Calculates the cube texture coordinate for the vertices and faces.
  /// The normals should be calculated first.
  /// True if successful, false on error.
  bool calculateCubeTextures() {
    bool success = true;
    this.suspendChanged();
    if (!this._vertices.calculateCubeTextures()) success = false;
    this.resumeChanged();
    return success;
  }

  /// Calculate the weight using a vertex measuring tool.
  void calculateWeights([VertexMeasure measure = null]) {
    if (measure == null) {
      Math.Region3 aabb = calculateAABB();
      double length = new Math.Vector3(aabb.dx, aabb.dy, aabb.dz).length();
      if (length <= 0.0) length = 1.0;
      measure = new RadialVertexMeasure(
        center: new Math.Point3(aabb.x, aabb.y, aabb.z),
        scalar: 1.0/length);
    }
    final int count = this._vertices.length;
    for (int i = count-1; i >= 0; i--) {
      Vertex ver = this._vertices[i];
      ver.weight = measure.measure(ver);
    }
  }

  /// Calculates the axial aligned bounding box of the shape.
  Math.Region3 calculateAABB() {
    final int count = this._vertices.length;
    if (count <= 0) return Math.Region3.zero;
    Math.Region3 result = new Math.Region3.fromPoint(this._vertices[0].location);
    for (int i = count-1; i >= 1; i--)
      result = result.expandWithPoint(this._vertices[i].location);
    return result;
  }

  /// Apply the given [height] map to offset the vertices of the shape.
  /// Use the [scalar] to adjust the amount of offset the height moves the vertices.
  /// The height is pulled from the map using the texture 2D values of the vertices and
  /// the offset is applied in the direction of the normal vector.
  void applyHeightMap(Textures.TextureReader height, [double scalar = 1.0]) {
    this.suspendChanged();
    for (int i = this._vertices.length-1; i >= 0; --i) {
      Vertex ver = this._vertices[i];
      if ((ver != null) || (ver.location != null) ||
          (ver.normal != null) || (ver.texture2D != null)) {
        Math.Color4 clr = height.atLoc(ver.texture2D);
        double length = (clr.red + clr.green + clr.blue)*scalar/3.0;
        ver.location += new Math.Point3.fromVector3(ver.normal*length);
      }
    }
    this.resumeChanged();
  }

  /// Trims all the vertices down to the given vertex types,
  /// everything else is nulled out.
  void trimVertices(Data.VertexType type) {
    this.suspendChanged();
    for (int i = this._vertices.length-1; i >= 0; --i) {
      Vertex ver = this._vertices[i];
      if (ver != null) ver.trim(type);
    }
    this.resumeChanged();
  }

  /// Trims all the faces down to have the given true values,
  /// everything else is nulled out.
  void trimFaces({bool norm: true, bool binm: true}) {
    this.suspendChanged();
    for (int i = this._faces.length-1; i >= 0; --i) {
      Face face = this._faces[i];
      if (face != null) face.trim(norm: norm, binm: binm);
    }
    this.resumeChanged();
  }

  /// Finds the first index of the vertex which matches the given vertex.
  /// If no match is found then -1 is returned.
  int findFirstIndex(Vertex ver, [VertexMatcher matcher = null, int startIndex = 0]) {
    matcher ??= new FullVertexMatcher();
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
    matcher ??= new FullVertexMatcher();
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
    matcher ??= new FullVertexMatcher();
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

  /// Replaces the vertices at the given indices with the given new vertex.
  void _replaceVertices(Vertex newVer, List<Vertex> replacedVers) {
    this.vertices.add(newVer);
    for (Vertex ver in replacedVers) {
      while (ver.faces.length > 0)
        ver.faces[0].replaceVertex(ver, newVer);
      while (ver.lines.length > 0)
        ver.lines[0].replaceVertex(ver, newVer);
      while (ver.points.length > 0)
        ver.points[0].replaceVertex(ver, newVer);
        this.vertices.remove(ver);
    }
  }

  /// Merges with the given merger all the vertices which match with the given matcher.
  /// This may also be used to process vertices without replacing them if the
  /// merger returns null for a merge.
  /// After merger collapsed lines and faces are removed and
  /// repeat points, lines, and faces are removed.
  void mergeVertices(VertexMatcher matcher, VertexMerger merger) {
    this.suspendChanged();
    List<Vertex> vertices = this._vertices.copyToList();
    while (vertices.isNotEmpty) {
      Vertex ver = vertices.first;
      vertices.removeAt(0);

      if (ver != null) {
        // Find all matches
        List<Vertex> matches = new List<Vertex>();
        matches.add(ver);
        for (int i = vertices.length-1; i >= 0; i--) {
          Vertex otherVer = vertices[i];
          if ((otherVer != null) && matcher.matches(ver, otherVer)) {
            matches.add(otherVer);
            vertices.removeAt(i);
          }
        }

        // If there are any matches, merge them.
        if (matches.length > 1) {
          Vertex newVer = merger.merge(matches);
          if (newVer != null) {
            this._replaceVertices(newVer, matches);
            vertices.add(newVer);
          }
        }
      }
    }

    this._vertices.updateIndices();
    this._lines.removeCollapsed();
    this._faces.removeCollapsed();
    this._points.removeRepeats();
    this._lines.removeVertexRepeats(new UndirectedLineMatcher());
    this._faces.removeVertexRepeats(new SimilarFaceMatcher());
    this.resumeChanged();
  }

  /// Joins seams in the shape by joining vertices.
  /// By joining vertices the edges will be smoothed hiding seams.
  /// This is useful if you wrap a flat grid into a cylinder and want
  /// to smooth where the opposite edges touch.
  void joinSeams([VertexMatcher matcher = null]) {
    matcher ??= new VertexLocationMatcher();
    this.mergeVertices(matcher, new VertexJoiner());
  }

  /// Adjust normals by summing all the normals for matching vertices.
  /// This is similar to joining seams because it will smooth out edges
  /// however the edges will still have separate vertices meaning the surface
  /// can have texturing without a texture seam.
  void adjustNormals([VertexMatcher matcher = null]) {
    matcher ??= new VertexLocationMatcher();
    this.mergeVertices(matcher, new NormalAdjuster());
  }

  /// Adjust binormals by summing all the binormals for matching vertices.
  /// This is similar to joining seams because it will smooth out edges
  /// however the edges will still have separate vertices meaning the surface
  /// can have texturing without a texture seam.
  void adjustBinormals([VertexMatcher matcher = null]) {
    matcher ??= new VertexLocationMatcher();
    this.mergeVertices(matcher, new BinormalAdjuster());
  }

  /// Flips the shape inside out.
  void flip() {
    this.suspendChanged();
    this._faces.flip();
    for (int i = this._vertices.length-1; i >= 0; --i) {
      Vertex ver = this._vertices[i];
      if (ver != null) {
        if (ver.normal != null) ver.normal = -ver.normal;
        if (ver.binormal != null) ver.binormal = -ver.binormal;
      }
    }
    this.resumeChanged();
  }

  /// Scales the AABB so that the longest size the given [size],
  /// and the shape is centered then offset by the given [offset].
  void resizeCenter([double size = 2.0, Math.Point3 offset = null]) {
    Math.Region3 aabb = this.calculateAABB();
    offset ??= Math.Point3.zero;
    offset = offset - aabb.center;
    double maxSize = aabb.dx;
    if (aabb.dy > maxSize) maxSize = aabb.dy;
    if (aabb.dz > maxSize) maxSize = aabb.dz;
    if (maxSize == 0.0) return;
    double invSize = size/maxSize;
    this.applyPositionMatrix(
      new Math.Matrix4.scale(invSize, invSize, invSize)*
      new Math.Matrix4.translate(offset.x, offset.y, offset.z));
  }

  /// Modifies the position, normal, and binormal
  /// by translating it with the given [mat].
  void applyPositionMatrix(Math.Matrix4 mat) {
    for (int i = this._vertices.length-1; i >= 0; --i) {
      Vertex ver = this._vertices[i];
      if (ver != null) {
        if (ver.location != null) ver.location = mat.transPnt3(ver.location);
        if (ver.normal   != null) ver.normal   = mat.transVec3(ver.normal);
        if (ver.binormal != null) ver.binormal = mat.transVec3(ver.binormal);
      }
    }
  }

  /// Modifies the color by translating it with the given [mat].
  void applyColorMatrix(Math.Matrix3 mat) {
    for (int i = this._vertices.length-1; i >= 0; --i) {
      Vertex ver = this._vertices[i];
      if ((ver != null) && (ver.color != null)) {
        ver.color = mat.transClr4(ver.color);
      }
    }
  }

  /// Modifies the 2D texture by translating it with the given [mat].
  void applyTexture2DMatrix(Math.Matrix3 mat) {
    for (int i = this._vertices.length-1; i >= 0; --i) {
      Vertex ver = this._vertices[i];
      if ((ver != null) && (ver.color != null)) {
        ver.texture2D = mat.transPnt2(ver.texture2D);
      }
    }
  }

  /// Modifies the cube texture by translating it with the given [mat].
  void applyTextureCubeMatrix(Math.Matrix4 mat) {
    for (int i = this._vertices.length-1; i >= 0; --i) {
      Vertex ver = this._vertices[i];
      if (ver != null) ver.textureCube = mat.transVec3(ver.textureCube);
    }
  }

  /// Builds a buffer store for caching the shape for rendering.
  /// This requires the buffer [builder] for WebGL or testing,
  /// and the vertex [type] required for technique.
  Data.BufferStore build(Data.BufferBuilder builder, Data.VertexType type) {
    final int length = this._vertices.length;
    final int count = type.count;
    final int stride = type.size;
    final int byteStride = stride*Typed.Float32List.bytesPerElement;
    List<double> vertices = new List<double>(length*stride);
    List<Data.BufferAttr> attrs = new List<Data.BufferAttr>(count);
    int offset = 0;
    for (int i = 0; i < count; ++i) {
      Data.VertexType local = type.at(i);
      final int size = local.size;
      attrs[i] = new Data.BufferAttr(local, size,
        offset*Typed.Float32List.bytesPerElement, byteStride);
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

    Data.Buffer vertexBuf = builder.fromDoubleList(WebGL.WebGL.ARRAY_BUFFER, vertices);
    Data.BufferStore store = new Data.BufferStore(vertexBuf, attrs, type);
    if (!this._points.isEmpty) {
      List<int> indices = new List<int>();
      for (int i = 0; i < this._points.length; ++i) {
        indices.add(this._points[i].vertex.index);
      }
      Data.Buffer indexBuf = builder.fromIntList(WebGL.WebGL.ELEMENT_ARRAY_BUFFER, indices);
      store.indexObjects.add(new Data.IndexObject(WebGL.WebGL.POINTS, indices.length, indexBuf));
    }

    if (!this._lines.isEmpty) {
      List<int> indices = new List<int>();
      for (int i = 0; i < this._lines.length; ++i) {
        indices.add(this._lines[i].vertex1.index);
        indices.add(this._lines[i].vertex2.index);
      }
      Data.Buffer indexBuf = builder.fromIntList(WebGL.WebGL.ELEMENT_ARRAY_BUFFER, indices);
      store.indexObjects.add(new Data.IndexObject(WebGL.WebGL.LINES, indices.length, indexBuf));
    }

    if (!this._faces.isEmpty) {
      List<int> indices = new List<int>();
      for (int i = 0; i < this._faces.length; i++) {
        indices.add(this._faces[i].vertex1.index);
        indices.add(this._faces[i].vertex2.index);
        indices.add(this._faces[i].vertex3.index);
      }
      Data.Buffer indexBuf = builder.fromIntList(WebGL.WebGL.ELEMENT_ARRAY_BUFFER, indices);
      store.indexObjects.add(new Data.IndexObject(WebGL.WebGL.TRIANGLES, indices.length, indexBuf));
    }

    return store;
  }

  /// Gets the string for the shape
  String toString() => this.format();

  /// Gets the formatted string for this shape with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = new List<String>();
    if (!this._vertices.isEmpty) {
      parts.add("${indent}Vertices:");
      parts.add(this._vertices.format("${indent}   "));
    }
    if (!this._points.isEmpty) {
      parts.add('${indent}Points:');
      parts.add(this._points.format("${indent}   "));
    }
    if (!this._lines.isEmpty) {
      parts.add('${indent}Lines:');
      parts.add(this._lines.format("${indent}   "));
    }
    if (!this._faces.isEmpty) {
      parts.add('${indent}Faces:');
      parts.add(this._faces.format("${indent}   "));
    }
    return parts.join('\n');
  }

  void updateVertexIndices() =>
    this._vertices.updateIndices();

  void internalAddVertices(Vertex vertex) {
    this._vertices.add(vertex);
  }

  void internalAddPoint(Point point) {
    this._points._points.add(point);
    this.onPointAdded(point);
  }

  void internalRemovePoint(Point point) {
    this._points._points.remove(point);
    this.onPointRemoved(point);
  }

  void internalAddLine(Line line) {
    this._lines._lines.add(line);
    this.onLineAdded(line);
  }

  void internalRemoveLine(Line line) {
    this._lines._lines.remove(line);
    this.onLineRemoved(line);
  }

  void internalAddFace(Face face) {
    this._faces._faces.add(face);
    this.onFaceAdded(face);
  }

  void internalRemoveFace(Face face) {
    this._faces._faces.remove(face);
    this.onFaceRemoved(face);
  }
}
