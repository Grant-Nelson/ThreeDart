part of ThreeDart.Shapes.Shared;

/// A collection of vertices for the shapes.
class VertexCollection {
  BaseShape _shape;
  bool _indicesNeedUpdate;
  List<Vertex> _vertices;

  /// Creates a new vertex collection of a shape.
  VertexCollection(BaseShape this._shape) {
    this._indicesNeedUpdate = false;
    this._vertices = new List<Vertex>();
  }

  /// Updates the indices of all vertices.
  void updateIndices() {
    if (this._indicesNeedUpdate) {
      int index = 0;
      int count = this._vertices.length;
      for(int i = 0; i < count; ++i) {
        Vertex ver = this._vertices[i];
        if (ver == null) {
          this._vertices.removeAt(i);
          --count;
        } else {
          ver._index = index;
          ++index;
        }
      }
      this._indicesNeedUpdate = false;
    }
  }

  /// Adds a new [vertex] to this collection.
  /// True if it was added, false otherwise.
  bool add(Vertex vertex) {
    if (vertex.shape != null) {
      if (vertex.shape == this._shape) return false;
      throw new Exception("May not add a vertex already attached to another shape to this shape.");
    }
    vertex._index = this._vertices.length;
    vertex._shape = this._shape;
    this._vertices.add(vertex);
    this._shape.onVertexAdded(vertex);
    return true;
  }

  /// Creates and adds a new vertex to this collection with the default values.
  Vertex addNew({Data.VertexType type: null,
                 Math.Point3 loc: null, Math.Vector3 norm: null, Math.Vector3 binm: null,
                 Math.Point2 txt2D: null, Math.Vector3 txtCube: null, Math.Color4 clr: null,
                 double weight: 0.0, Math.Point4 bending: null}) {
    Vertex ver = new Vertex(type: type, loc: loc, norm: norm, binm: binm, txt2D: txt2D,
      txtCube: txtCube, clr: clr, weight: weight, bending: bending);
    this.add(ver);
    return ver;
  }

  /// Creates and adds a new vertex with the given location values.
  Vertex addNewLoc(double locX, double locY, double locZ) {
    Vertex ver = new Vertex(loc: new Math.Point3(locX, locY, locZ));
    this.add(ver);
    return ver;
  }

  /// Adds a list of vertices to the collection.
  void addList(List<Vertex> verList) {
    for (Vertex ver in verList) this.add(ver);
  }
  
  /// The shape which owns this collection.
  BaseShape get shape => this._shape;

  /// Determines if the collection has any vertices in it.
  bool get isEmpty => this._vertices.isEmpty;

  /// Determines the number of vertices in the collection.
  int get length => this._vertices.length;

  /// Gets the vertex at the given [index].
  Vertex operator[](int index) => this._vertices[index];

  /// Gets the index of the [vertex], or -1 if not found.
  int indexOf(Vertex vertex) => this._vertices.indexOf(vertex);

  /// Runs the given function handler for every vertex in the shape.
  void forEach(void funcHndl(Vertex vertex)) => this._vertices.forEach(funcHndl);

  /// Removes the vertex with at the given index.
  /// The removed vertex is disposed and returned or null if none removed.
  Vertex removeAt(int index) {
    Vertex vertex = this._vertices[index];
    if (vertex != null) {
      if (!vertex.isEmpty)
        throw new Exception("May not remove a vertex without first making it empty.");
      vertex._shape = null;
    }
    this._vertices.removeAt(index);
    this._shape.onVertexRemoved(vertex);
    this._indicesNeedUpdate = true;
    return vertex;
  }

  /// Removes the given [vertex].
  /// Returns true if vertex was removed, false otherwise.
  bool remove(Vertex vertex) {
    if (vertex == null) return false;
    if (vertex._shape != this._shape) return false;
    if (!vertex.isEmpty)
      throw new Exception("May not remove a vertex without first making it empty.");
    vertex._shape = null;
    this._vertices.remove(vertex);
    this._shape.onVertexRemoved(vertex);
    this._indicesNeedUpdate = true;
    return true;
  }

  /// Calculates the normals for all the faces in the shape.
  /// Returns true if faces' normals are calculated, false on error.
  bool calculateNormals() {
    bool success = true;
    for (Vertex vertex in this._vertices) {
      if (!vertex.calculateNormal()) success = false;
    }
    return success;
  }

  /// Calculates the binormals for all the vertices in the shape.
  /// Returns true if vertices' binormals are calculated, false on error.
  bool calculateBinormals() {
    bool success = true;
    for (Vertex vertex in this._vertices) {
      if (!vertex.calculateBinormal()) success = false;
    }
    return success;
  }

  /// Calculates the cube texture coordinate for the vertices and faces.
  /// True if successful, false on error.
  bool calculateCubeTextures() {
    for (Vertex vertex in this._vertices) {
      if (vertex.textureCube == null) {
        vertex.textureCube = vertex.normal.normal();
      }
    }
    return true;
  }

  /// Gets a copy of the vertices as a list.
  List<Vertex> copyToList() => this._vertices.toList();

  /// Gets to string for all the vertices.
  String toString() => this.format();

  /// Gets the formatted string for all the vertices with and optional [indent].
  String format([String indent = ""]) {
    this.updateIndices();
    List<String> parts = new List<String>();
    for (Vertex vertex in this._vertices) {
      parts.add(vertex.format(indent));
    }
    return parts.join('\n');
  }
}
