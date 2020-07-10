part of ThreeDart.Shapes;

/// A shape defining the renderable shape and collision detection.
/// This uses an octree for storing a shape.
class Shape implements ShapeBuilder {
  /// The maximum cube that the shape can occupy.
  final Math.Cube maxCube;

  Node _root;
  Path _rootPath;
  int _rootPathDepth;

  int _vertexCount;
  int _pointCount;
  int _lineCount;
  int _faceCount;

  bool _vertexIndicesNeedUpdate;
  Events.Event _changed;

  /// Creates a new shape.
  Shape._(Math.Cube this.maxCube) {
    this._root = null;
    this._rootPath = null;
    this._rootPathDepth = 0;

    this._vertexCount = 0;
    this._pointCount = 0;
    this._lineCount = 0;
    this._faceCount = 0;

    this._vertexIndicesNeedUpdate = false;
    this._changed = null;
  }

  /// Creates a new shape with an optional maximum cube for a shape.
  factory Shape([Math.Cube maxCube = null]) =>
    new Shape._(maxCube ?? new Math.Cube(-5000.0, -5000.0, -5000.0, 10000.0));

  /// Creates a copy of the given [other] shape.
  factory Shape.copy(Shape other) =>
    new Shape(other.maxCube)..merge(other);

  /// The octree for the shape.
  Octree get octree => new Octree._(this);

  /// The collection of vertices for the shape.
  ShapeVertexCollection get vertices => new ShapeVertexCollection._(this);

  /// The collection of renderable points for the shape.
  ShapePointCollection get points => new ShapePointCollection._(this);

  /// The collection of renderable lines for the shape.
  ShapeLineCollection get lines => new ShapeLineCollection._(this);

  /// The collection of renderable faces for the shape.
  ShapeFaceCollection get faces => new ShapeFaceCollection._(this);

  /// The changed event to signal when ever the shape is modified.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Merges the given shape into this shape.
  /// No vertices nor seams are joined, this is a simple copy
  /// of all the given shape's information into this shape.
  void merge(Shape other) {
    this._changed?.suspend();
    ShapeVertexCollection otherVCol = other.vertices;
    otherVCol._updateIndices();
    
    List<Vertex> vertices = new List<Vertex>(otherVCol.length);
    ShapeVertexCollection vcol = this.vertices;
    for (Vertex vertex in otherVCol.iterable) {
      Vertex copy = vertex.copy();
      vertices.add(copy);
      vcol.add(copy);
    }

    ShapePointCollection pcol = this.points;
    for (Point point in other.points.iterable) {
      Vertex vertex = vertices[point.vertex.index];
      pcol.add(vertex);
    }

    ShapeLineCollection lcol = this.lines;
    for (Line line in other.lines.iterable) {
      Vertex ver1 = vertices[line.vertex1.index];
      Vertex ver2 = vertices[line.vertex2.index];
      lcol.add(ver1, ver2);
    }

    ShapeFaceCollection fcol = this.faces;
    for (Face face in other.faces.iterable) {
      Vertex ver1 = vertices[face.vertex1.index];
      Vertex ver2 = vertices[face.vertex2.index];
      Vertex ver3 = vertices[face.vertex3.index];
      fcol.add(ver1, ver2, ver3);
    }
    this._changed?.resume();
  }

  /// Calculates the normals for the vertices and faces.
  /// True if successful, false on error.
  bool calculateNormals() {
    bool success = true;
    this._changed?.suspend();
    if (!this.faces.calculateNormals()) success = false;
    if (!this.vertices.calculateNormals()) success = false;
    this._changed?.resume();
    return success;
  }

  /// Calculates the binormals for the vertices and faces.
  /// Typically the normals should be calculated first.
  /// True if successful, false on error.
  bool calculateBinormals() {
    bool success = true;
    this._changed?.suspend();
    if (!this.faces.calculateBinormals()) success = false;
    if (!this.vertices.calculateBinormals()) success = false;
    this._changed?.resume();
    return success;
  }

  /// Calculates the cube texture coordinate for the vertices and faces.
  /// The normals should be calculated first.
  /// True if successful, false on error.
  bool calculateCubeTextures() {
    bool success = true;
    this._changed?.suspend();
    if (!this.vertices.calculateCubeTextures()) success = false;
    this._changed?.resume();
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
    for (Vertex ver in this.vertices.iterable) {
      ver.weight = measure.measure(ver);
    }
  }

  /// Calculates the axial aligned bounding box of the shape.
  Math.Region3 calculateAABB() {
    Iterator<Vertex> it = this.vertices.iterable.iterator;
    if (!it.moveNext()) return Math.Region3.zero;
    Math.Region3 result = new Math.Region3.fromPoint(it.current.location);
    while (it.moveNext())
      result = result.expandWithPoint(it.current.location);
    return result;
  }

  /// Apply the given [height] map to offset the vertices of the shape.
  /// Use the [scalar] to adjust the amount of offset the height moves the vertices.
  /// The height is pulled from the map using the texture 2D values of the vertices and
  /// the offset is applied in the direction of the normal vector.
  void applyHeightMap(Textures.TextureReader height, [double scalar = 1.0]) {
    this._changed?.suspend();
    for (Vertex ver in this.vertices.iterable) {
      if ((ver != null) || (ver.location != null) ||
          (ver.normal != null) || (ver.texture2D != null)) {
        Math.Color4 clr = height.atLoc(ver.texture2D);
        double length = (clr.red + clr.green + clr.blue)*scalar/3.0;
        ver.location += new Math.Point3.fromVector3(ver.normal*length);
      }
    }
    this._changed?.resume();
  }

  /// Trims all the vertices down to the given vertex types,
  /// everything else is nulled out.
  void trimVertices(Data.VertexType type) {
    this._changed?.suspend();
    for (Vertex ver in this.vertices.iterable)
      ver.trim(type);
    this._changed?.resume();
  }

  /// Trims all the faces down to have the given true values,
  /// everything else is nulled out.
  void trimFaces({bool norm: true, bool binm: true}) {
    this._changed?.suspend();
    for (Face face in this.faces.iterable)
      face.trim(norm: norm, binm: binm);
    this._changed?.resume();
  }

  /// Gets the first vertex in this shape which matches the given vertex.
  /// If no match is found then null is returned.
  Vertex findFirst(Vertex ver, [VertexMatcher matcher = null, int startIndex = 0]) {
    matcher ??= new FullVertexMatcher();
    for(Vertex ver2 in this.vertices.iterable) {
      if (matcher.matches(ver, ver2)) {
        return ver2;
      }
    }
    return null;
  }

  /// Finds all vertices in this shape which matches the given vertex.
  List<Vertex> findAll(Vertex ver, [VertexMatcher matcher = null, int startIndex = 0]) {
    matcher ??= new FullVertexMatcher();
    List<Vertex> results = new List<Vertex>();
    for(Vertex ver2 in this.vertices.iterable) {
      if (matcher.matches(ver, ver2)) {
        results.add(ver2);
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
    this._changed?.suspend();
    List<Vertex> vertices = this.vertices.toList();
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

    this.vertices._updateIndices();
    this.lines.removeCollapsed();
    this.faces.removeCollapsed();
    this.points.removeRepeats();
    this.lines.removeVertexRepeats(new UndirectedLineMatcher());
    this.faces.removeVertexRepeats(new SimilarFaceMatcher());
    this._changed?.resume();
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
    this._changed?.suspend();
    this.faces.flip();
    for (Vertex ver in this.vertices.iterable) {
      if (ver.normal   != null) ver.normal   = -ver.normal;
      if (ver.binormal != null) ver.binormal = -ver.binormal;
    }
    this._changed?.resume();
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
    for (Vertex ver in this.vertices.iterable) {
      if (ver.location != null) ver.location = mat.transPnt3(ver.location);
      if (ver.normal   != null) ver.normal   = mat.transVec3(ver.normal);
      if (ver.binormal != null) ver.binormal = mat.transVec3(ver.binormal);
    }
  }

  /// Modifies the color by translating it with the given [mat].
  void applyColorMatrix(Math.Matrix3 mat) {
    for (Vertex ver in this.vertices.iterable) {
      if (ver.color != null) ver.color = mat.transClr4(ver.color);
    }
  }

  /// Modifies the 2D texture by translating it with the given [mat].
  void applyTexture2DMatrix(Math.Matrix3 mat) {
    for (Vertex ver in this.vertices.iterable) {
      if (ver.texture2D != null) ver.texture2D = mat.transPnt2(ver.texture2D);
    }
  }

  /// Modifies the cube texture by translating it with the given [mat].
  void applyTextureCubeMatrix(Math.Matrix4 mat) {
    for (Vertex ver in this.vertices.iterable) {
      if (ver.textureCube != null) ver.textureCube = mat.transVec3(ver.textureCube);
    }
  }

  /// Builds a buffer store for caching the shape for rendering.
  /// This requires the buffer [builder] for WebGL or testing,
  /// and the vertex [type] required for technique.
  Data.BufferStore build(Data.BufferBuilder builder, Data.VertexType type) {
    this.vertices._updateIndices();
    List<Vertex> data = this.vertices.toList(growable: false);
    final int length = data.length;
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
        Vertex ver = data[j];
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
    if (!this.points.isEmpty) {
      List<int> indices = new List<int>();
      for (Point point in this.points.iterable) {
        indices.add(point.vertex.index);
      }
      Data.Buffer indexBuf = builder.fromIntList(WebGL.WebGL.ELEMENT_ARRAY_BUFFER, indices);
      store.indexObjects.add(new Data.IndexObject(WebGL.WebGL.POINTS, indices.length, indexBuf));
    }

    if (!this.lines.isEmpty) {
      List<int> indices = new List<int>();
      for (Line line in this.lines.iterable) {
        indices.add(line.vertex1.index);
        indices.add(line.vertex2.index);
      }
      Data.Buffer indexBuf = builder.fromIntList(WebGL.WebGL.ELEMENT_ARRAY_BUFFER, indices);
      store.indexObjects.add(new Data.IndexObject(WebGL.WebGL.LINES, indices.length, indexBuf));
    }

    if (!this.faces.isEmpty) {
      List<int> indices = new List<int>();
      for (Face face in this.faces.iterable) {
        indices.add(face.vertex1.index);
        indices.add(face.vertex2.index);
        indices.add(face.vertex3.index);
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
    if (!this.vertices.isEmpty) {
      parts.add("${indent}Vertices:");
      parts.add(this.vertices.format("${indent}   "));
    }
    if (!this.points.isEmpty) {
      parts.add('${indent}Points:');
      parts.add(this.points.format("${indent}   "));
    }
    if (!this.lines.isEmpty) {
      parts.add('${indent}Lines:');
      parts.add(this.lines.format("${indent}   "));
    }
    if (!this.faces.isEmpty) {
      parts.add('${indent}Faces:');
      parts.add(this.faces.format("${indent}   "));
    }
    return parts.join('\n');
  }

  /// Handles any change to this shape.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
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
