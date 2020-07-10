part of ThreeDart.Shapes;

/// A collection of vertices for the shapes.
class NodeVertexCollection {
  final LeafNode _leaf;

  /// Creates a new vertex collection of a shape.
  NodeVertexCollection._(LeafNode this._leaf);

  /// The leaf node which owns this collection.
  LeafNode get leafNode => this._leaf;

  /// The shape which owns the vertex which owns this collection.
  Shape get shape => this._leaf?._shape;

  /// Determines if the collection has any vertices in it.
  bool get isEmpty => this.length <= 0;

  /// Determines the number of vertices in the collection.
  int get length => this._leaf._vertices.length;

  /// Adds the vertex to this leaf and updates the tree.
  void _add(Vertex vertex) {
    vertex._index = this.shape._vertexCount;
    vertex._leaf = this._leaf;
    this.shape._vertexCount++;
    this.shape._vertexIndicesNeedUpdate = true;
    this.shape.onVertexAdded(vertex);
  }

  /// Runs the given function handler for every vertex in the shape.
  void forEach(void funcHndl(Vertex vertex)) =>
    this._leaf._vertices.forEach(funcHndl);
  
  /// Gets an iterable which steps through all of the vertices in the collection.
  Iterable<Vertex> get iterable => this._leaf._vertices;

  /// Removes the given [vertex].
  /// Returns true if vertex was removed, false otherwise.
  bool remove(Vertex vertex) {
    if (vertex == null) return false;
    if (vertex.shape != this.shape) return false;
    if (!vertex.isEmpty)
      throw new Exception("May not remove a vertex without first making it empty.");
    vertex._leaf = null;
    
    // TODO: Implement remove
    //this._vertices.remove(vertex);

    this.shape?.onVertexRemoved(vertex);
    this.shape?._vertexIndicesNeedUpdate = true;
    return true;
  }

  /// Calculates the normals for all the faces in the shape.
  /// Returns true if faces' normals are calculated, false on error.
  bool calculateNormals() {
    bool success = true;
    this.forEach((Vertex vertex) {
      if (!vertex.calculateNormal()) success = false;
    });
    return success;
  }

  /// Calculates the binormals for all the vertices in the shape.
  /// Returns true if vertices' binormals are calculated, false on error.
  bool calculateBinormals() {
    bool success = true;
    this.forEach((Vertex vertex) {
      if (!vertex.calculateBinormal()) success = false;
    });
    return success;
  }

  /// Calculates the cube texture coordinate for the vertices and faces.
  /// True if successful, false on error.
  bool calculateCubeTextures() {
    this.forEach((Vertex vertex) {
      if (vertex.textureCube == null) {
        vertex.textureCube = vertex.normal.normal();
      }
    });
    return true;
  }

  /// Gets a copy of the vertices as a list.
  List<Vertex> toList({bool growable = true}) =>
    this.iterable.toList(growable: growable);

  /// Gets to string for all the vertices.
  String toString() => this.format();

  /// Gets the formatted string for all the vertices with and optional [indent].
  String format([String indent = ""]) {
    this.shape?.vertices?._updateIndices();
    List<String> parts = new List<String>();
    this.forEach((Vertex vertex) {
      parts.add(vertex.format(indent));
    });
    return parts.join('\n');
  }
}
