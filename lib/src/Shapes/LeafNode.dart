part of ThreeDart.Shapes;

/// A leaf node to contain all vertices which are near
/// and equal to this node's coordinates.
class LeafNode extends Node {
  Path _path;
  List<Vertex> _vertices;
  List<Line> _lines;
  List<Face> _faces;

  /// Creates a new leaf node.
  LeafNode._(Path path, Shape shape, [Vertex vertex = null]): super._() {
    if (path == null)
      throw new Exception("Must have a non-nil path for a leaf node.");
    this._path == path;
    this._vertices = new VertexCollection._(shape);
    if (vertex != null) this._vertices.add(vertex);
  }

  /// All the vertices which map tho this leaf node's path.
  VertexCollection get vertices => this._vertices;

  /// Gets the path to this leaf.
  Path get path => this._path;

  /// Adds a vertex to this node.
  /// Returns the node that should be the new root of the
  /// subtree that was defined by this node.
  Node _insertVertex(Shape shape, Vertex vertex, Path path, int depth) {
    if (path == this._path) {
      this._vertices.add(vertex);
      return this;
    }

    // Make this node and set is as a child of the new branch.
    int oldIndex = this._path.childIndexAt(depth);
    BranchNode branch = new BranchNode._();
    branch._setChild(oldIndex, this);

    // Copy lines to new siblings, keep any non-empty sibling.
    int childIndex = path.childIndexAt(depth);
    for (int i = 0; i < branch._children.length; i++) {
      if (i != childIndex) {
        PassNode pass = new PassNode._();
        // TODO: Add passing lines and faces to pass.
        if (!pass.isEmpty) branch._setChild(i, pass);
      }
    }

    // Remove any edges which no longer pass through this vertex.
    // TODO: Remove passing lines and faces whicn no longer pass in the point.

    // Add the vertex to the new branch node, return new node.
    // This allows the branch to grow as needed.
    return branch._insertVertex(shape, vertex, path, depth);
  }

  void _copyOver(PassNode pass) {
    // TODO: Implement 
    // Add all passing lines to point node unless the line starts or ends
    // on the point node, since the line will already be in the start or end line lists.
    // for (EdgeNode edge in node.passEdges) {
    //   if ((edge.startNode != point) && (edge.endNode != point)) point.passEdges.add(edge);
    // }
  }
}
