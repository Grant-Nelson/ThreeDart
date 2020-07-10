part of ThreeDart.Shapes;

/// A collection of vertices for the shapes.
class ShapeVertexCollection {
  final Shape _shape;

  /// Creates a new vertex collection of a shape.
  ShapeVertexCollection._(Shape this._shape);

  /// Updates the indices of all vertices.
  /// This is only run when the indices need to be run.
  void _updateIndices() {
    if (this._shape._vertexIndicesNeedUpdate) {
      int index = 0;
      for (Vertex vertex in this.iterable) {
        vertex._index = index;
        ++index;
      }
      this._shape._vertexIndicesNeedUpdate = false;
    }
  }

  /// Adds a new [vertex] to this collection.
  /// True if it was added, false if already in this shape.
  bool add(Vertex vertex) {
    if (vertex.shape != null) {
      if (vertex.shape == this._shape) return false;
      throw new Exception("May not add a vertex already attached to another shape to this shape.");
    }
    Path path = new Path.fromPoint(vertex.location, this._shape.maxCube);
    this._shape._root = this._shape.octree._addVertex(this._shape._root, path, vertex);
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

  /// Determines if the collection has any vertices in it.
  bool get isEmpty => this.length <= 0;

  /// Determines the number of vertices in the collection.
  int get length => this._shape._vertexCount;
  
  /// Gets an iterable which steps through all of the vertices in the collection.
  Iterable<Vertex> get iterable sync* {
    for (LeafNode leaf in this._shape.octree.leafIterable) {
      List<Vertex> vertices = leaf._vertices.toList(growable: false);
      for (Vertex vertex in vertices) {
        if (vertex.shape == this._shape) yield vertex;
      }
    }
  }

  /// Removes the given [vertex].
  /// Returns true if vertex was removed, false otherwise.
  bool remove(Vertex vertex) {
    if (vertex == null) return false;
    if (vertex.shape != this._shape) return false;
    if (!vertex.isEmpty)
      throw new Exception("May not remove a vertex without first making it empty.");

    // TODO: Implement remove
    //vertex.shape = null;
    //this._vertices.remove(vertex);

    this._shape.onVertexRemoved(vertex);
    this._shape._vertexIndicesNeedUpdate = true;
    return true;
  }

  /// Calculates the normals for all the faces in the shape.
  /// Returns true if faces' normals are calculated, false on error.
  bool calculateNormals() {
    bool success = true;
    for (Vertex vertex in this.iterable) {
      if (!vertex.calculateNormal()) success = false;
    }
    return success;
  }

  /// Calculates the binormals for all the vertices in the shape.
  /// Returns true if vertices' binormals are calculated, false on error.
  bool calculateBinormals() {
    bool success = true;
    for (Vertex vertex in this.iterable) {
      if (!vertex.calculateBinormal()) success = false;
    }
    return success;
  }

  /// Calculates the cube texture coordinate for the vertices and faces.
  /// True if successful, false on error.
  bool calculateCubeTextures() {
    for (Vertex vertex in this.iterable) {
      if (vertex.textureCube == null) {
        vertex.textureCube = vertex.normal.normal();
      }
    }
    return true;
  }

  /// Gets a copy of the vertices as a list.
  List<Vertex> toList({bool growable = true}) =>
    this.iterable.toList(growable: growable);

  /// Gets to string for all the vertices.
  String toString() => this.format();

  /// Gets the formatted string for all the vertices with and optional [indent].
  String format([String indent = ""]) {
    this._updateIndices();
    List<String> parts = new List<String>();
    for (Vertex vertex in this.iterable) {
      parts.add(vertex.format(indent));
    }
    return parts.join('\n');
  }
}
