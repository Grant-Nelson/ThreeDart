part of ThreeDart.Shapes;

/// A shape defining the renderable shape and collision detection.
class ReducedShape implements ShapeBuilder {

  /// The type of the vertex for this shape.
  final Data.VertexType _type;

  /// The number of base vertex types in the vertex type.
  int _typeCount;

  /// The stride between vertex data.
  int _stride;

  /// The current number of verties in this shape.
  int _vertexCount;

  /// The set of buffer attributes for setting up to render this shape.
  List<Data.BufferAttr> _attrs;

  /// The set of vertex data for the shape.
  List<double> _vertices;

  /// The set of indices for the points to render.
  List<int> _points;

  /// The set of indices to vertices in sets of two for each line to render.
  List<int> _lines;

  /// The set of indices to vertices in sets of three for each face to render.
  List<int> _faces;

  /// The calculated axial alligned bounding box.
  Math.Region3 _aabb;

  /// The event emitted when the shape has been changed.
  Events.Event _changed;

  /// Creates a new reduced shape with a specific vertex type.
  /// This isn't nearly as flexible as [Shape] and doesn't provides
  /// the ability to calculate values and change vertex types.
  /// The reduced shape uses much less memory and is faster.
  ReducedShape(Data.VertexType this._type) {
    this._typeCount = this._type.count;
    this._stride = this._type.size;
    this._vertexCount = 0;
    this._vertices = new List<double>();
    this._points = new List<int>();
    this._lines = new List<int>();
    this._faces = new List<int>();
    this._aabb = null;
    this._changed = null;
  }

  /// The changed event to signal when ever the shape is modified.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// The set of vertex data for the shape.
  List<double> get vertices => this._vertices;

  /// The set of indices for the points to render.
  List<int> get points => this._points;

  /// The set of indices to vertices in sets of two for each line to render.
  List<int> get lines => this._lines;

  /// The set of indices to vertices in sets of three for each face to render.
  List<int> get faces => this._faces;

  /// Adds the given vertices to the shape and returns the index
  /// to the first vertex added.
  int addVertices(List<Vertex> vertices) {
    final int length = vertices.length;
    List<double> data = new List<double>(length*this._stride);
    int offset = 0;
    for (int i = 0; i < this._typeCount; ++i) {
      Data.VertexType local = this._type.at(i);
      for (int j = 0; j < length; ++j) {
        Vertex ver = vertices[j];
        List<double> list = ver.listFor(local);
        int index = offset + j*this._stride;
        for (int k = 0; k < list.length; ++k) {
          data[index] = list[k];
          index++;
        }
      }
      offset += local.size;
    }

    if (this._type.has(Data.VertexType.Pos)) {
      this._aabb ??= new Math.Region3.fromPoint(vertices[0].location);
      for (int i = length-1; i >= 0; i--)
        this._aabb = this._aabb.expandWithPoint(vertices[i].location);
    }

    final int index = this._vertexCount;
    this._vertexCount += length;
    this._vertices.addAll(data);
    this.onChanged();
    return index;
  }

  /// Adds a new set of points with the given ndices for vertices
  void addPoints(List<int> indices) {
    this._points.addAll(indices);
    this.onChanged();
  }

  /// Adds a new strip of lines to the given indices for vertices.
  void addLineStrip(List<int> indices) {
    final int count = indices.length;
    if (count >= 2) {
      List<int> lines = new List<int>(count*2-1);
      for (int i = 1, j = 0; i < count; i++, j+=2) {
        lines[j  ] = indices[i-1];
        lines[j+1] = indices[i  ];
      }
      this._lines.addAll(lines);
      this.onChanged();
    }
  }

  /// Adds a new loop of lines to the given indices for vertices.
  void addLineLoop(List<int> indices) {
    final int count = indices.length;
    if (count >= 2) {
      List<int> lines = new List<int>(count*2);
      lines[0] = indices[count-1];
      lines[1] = indices[0];
      for (int i = 1, j = 2; i < count; i++, j+=2) {
        lines[j  ] = indices[i-1];
        lines[j+1] = indices[i  ];
      }
      this._lines.addAll(lines);
      this.onChanged();
    }
  }

  /// Adds a set of lines to the given indices for vertices.
  void addLines(List<int> indices) {
    this._lines.addAll(indices);
    this.onChanged();
  }

  /// Adds a fan of faces with the given indices for vertices.
  void addTriangleFan(List<int> indices) {
    final int count = indices.length;
    if (count >= 3) {
      List<int> tris = new List<int>((count-2)*3);
      int ver0 = indices[0];
      for (int i = 2, j = 0; i < count; i++, j+=3) {
        tris[j  ] = ver0;
        tris[j+1] = indices[i-1];
        tris[j+2] = indices[i  ];
      }
      this._faces.addAll(tris);
      this.onChanged();
    }
  }

  /// Adds a strip of faces with the given indices for vertices.
  void addTriangleStrip(List<int> indices) {
    final int count = indices.length;
    if (count >= 3) {
      List<int> tris = new List<int>((count-2)*3);
      bool flip = false;
      for (int i = 2, j = 0; i < count; i++, j+=3) {
        if (flip) {
          tris[j  ] = indices[i-2];
          tris[j+1] = indices[i-1];
          tris[j+2] = indices[i  ];
          flip = false;
        } else {
          tris[j  ] = indices[i-1];
          tris[j+1] = indices[i-2];
          tris[j+2] = indices[i  ];
          flip = true;
        }
      }
      this._faces.addAll(tris);
      this.onChanged();
    }
  }

  /// Adds a looped strip of faces with the given indices for vertices.
  void addTriangleLoop(List<int> indices) {
    final int count = indices.length;
    if (count >= 3) {
      List<int> tris = new List<int>(count*3);
      bool flip = false;
      for (int i = 2, j = 0; i < count+2; i++, j+=3) {
        int k = i % count;
        if (flip) {
          tris[j  ] = indices[k-2];
          tris[j+1] = indices[k-1];
          tris[j+2] = indices[k  ];
          flip = false;
        } else {
          tris[j  ] = indices[k-1];
          tris[j+1] = indices[k-2];
          tris[j+2] = indices[k  ];
          flip = true;
        }
      }
      this._faces.addAll(tris);
      this.onChanged();
    }
  }

  /// Adds a set of seperate faces with the given indices for vertices.
  void addTriangles(List<int> indices) {
    this._faces.addAll(indices);
  }

  /// Handles any change to this shape.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Calculates the normals for the vertices and faces.
  /// True if successful, false on error.
  /// This always returns false because the reduces shape can't calculate normals.
  bool calculateNormals() => false;

  /// Calculates the binormals for the vertices and faces.
  /// Typically the normals should be calculated first.
  /// True if successful, false on error.
  /// This always returns false because the reduces shape can't calculate binormals.
  bool calculateBinormals() => false;

  /// Calculates the cube texture coordinate for the vertices and faces.
  /// The normals should be calculated first.
  /// True if successful, false on error.
  /// This always returns false because the reduces shape can't calculate cube textures.
  bool calculateCubeTextures() => false;

  /// Calculates the axial alligned bounding box of the shape.
  Math.Region3 calculateAABB() => this._aabb ?? Math.Region3.zero;

  /// Builds a buffer store for caching the shape for rendering.
  /// This requires the buffer [builder] for WebGL or testing,
  /// and the vertex [type] required for technique.
  Data.BufferStore build(Data.BufferBuilder builder, Data.VertexType type) {
    if (type != this._type) throw new Exception("Shape was reduced to ${this._type} so can not build for $type.");

    if (this._attrs == null) {
      final int byteStride = this._stride*Typed.Float32List.bytesPerElement;
      this._attrs = new List<Data.BufferAttr>(this._typeCount);
      int offset = 0;
      for (int i = 0; i < this._typeCount; ++i) {
        Data.VertexType local = this._type.at(i);
        final int size = local.size;
        this._attrs[i] = new Data.BufferAttr(local, size,
          offset*Typed.Float32List.bytesPerElement, byteStride);
        offset += size;
      }
    }

    Data.Buffer vertexBuf = builder.fromDoubleList(WebGL.WebGL.ARRAY_BUFFER, this._vertices);
    Data.BufferStore store = new Data.BufferStore(vertexBuf, this._attrs, this._type);

    if (this._points.isNotEmpty) {
      Data.Buffer indexBuf = builder.fromIntList(WebGL.WebGL.ELEMENT_ARRAY_BUFFER, this._points);
      store.indexObjects.add(new Data.IndexObject(WebGL.WebGL.POINTS, this._points.length, indexBuf));
    }

    if (this._lines.isNotEmpty) {
      Data.Buffer indexBuf = builder.fromIntList(WebGL.WebGL.ELEMENT_ARRAY_BUFFER, this._lines);
      store.indexObjects.add(new Data.IndexObject(WebGL.WebGL.LINES, this._lines.length, indexBuf));
    }

    if (this._faces.isNotEmpty) {
      Data.Buffer indexBuf = builder.fromIntList(WebGL.WebGL.ELEMENT_ARRAY_BUFFER, this._faces);
      store.indexObjects.add(new Data.IndexObject(WebGL.WebGL.TRIANGLES, this._faces.length, indexBuf));
    }

    return store;
  }
}