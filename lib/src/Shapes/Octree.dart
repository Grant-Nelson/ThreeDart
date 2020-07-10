part of ThreeDart.Shapes;

/// An octree for storing a shape.
class Octree {
  final Shape _shape;

  /// Creates a new octree for accessing a shape.
  Octree._(Shape this._shape);

  /// Adds a vertex to this octree.
  /// Returns the node that should be the new root of the
  /// subtree that was defined by this node.
  Node _addVertex(Node root, Path path, Vertex vertex) {

    // TODO: Implement

  }

  /// Runs the given function handler for every leaf in the octree.
  void forEachLeaf(void funcHndl(LeafNode leaf)) {
    for (LeafNode leaf in this.leafIterable) funcHndl(leaf);
  }

  /// Gets an iterable which steps through all of the leaves in the octree.
  Iterable<LeafNode> get leafIterable sync* {
    // TODO: Implement
  }
}
