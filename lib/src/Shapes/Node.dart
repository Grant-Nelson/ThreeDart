part of ThreeDart.Shapes;

/// The node is the base type for an octree.
abstract class Node {
  Node _parent;

  /// Creates a new node.
  Node._() {
    this._parent = null;
  }

  /// Gets the parent to this node.
  Node get parent => this._parent;

  /// Adds a vertex to this node.
  /// Returns the node that should be the new root of the
  /// subtree that was defined by this node.
  Node _insertVertex(Shape shape, Vertex vertex, Path path, int depth);
}
