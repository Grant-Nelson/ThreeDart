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
    this._leaf._vertices.add(vertex);
    this.shape._vertexCount++;
    this.shape._vertexIndicesNeedUpdate = true;
    this.shape.onVertexAdded(vertex);
  }

  /// Gets the vertex at the at given [index].
  Vertex operator[](int index) => this._leaf._vertices[index];

  /// Gets the index of the given [vertex] or -1 if not found.
  int indexOf(Vertex vertex) => this._leaf._vertices.indexOf(vertex);

  /// Gets an iterable which steps through all of the vertices in the collection.
  Iterable<Vertex> get iterable sync* {
    List<Vertex> vertices = this._leaf._vertices.toList(growable: false);
    for (Vertex vertex in vertices) {
      if (vertex.shape == this.shape) yield vertex;
    }
  }

  /// Removes the vertex with at the given [index].
  /// The removed vertex is disposed and returned or null if none removed.
  Vertex removeAt(int index) {
    Vertex vertex = this._leaf._vertices[index];
    this.remove(vertex);
    return vertex;
  }

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

  // TODO: Add Merge to Average
  // TODO: Add Snap to Leaf

  /// Gets to string for all the vertices.
  String toString() => this.format();

  /// Gets the formatted string for all the vertices with and optional [indent].
  String format([String indent = ""]) {
    this.shape?.vertices?._updateIndices();
    List<String> parts = new List<String>();
    for (Vertex vertex in this.iterable) {
      parts.add(vertex.format(indent));
    }
    return parts.join('\n');
  }
}
