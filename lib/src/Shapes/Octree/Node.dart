part of ThreeDart.Shapes.Octree;

/// The node is the base type for an octree.
class Node {
  Node _parent;

  /// Creates a new node.
  Node._() {
    this._parent = null;
  }

  /// Gets the parent to this node.
  Node get parent => this._parent;
}
