part of ThreeDart.Shapes;

/// The node is the base type for an octree.
abstract class Node {
  BranchNode _parent;

  /// Creates a new node.
  Node._() {
    this._parent = null;
  }

  /// Gets the parent to this node.
  BranchNode get parent => this._parent;

  /// Adds a leaf to this node. Returns the node that should
  /// be the new root of the subtree that was defined by this node.
  /// The depth is the depth of this node which the leaf is being added into.
  Node _insertLeaf(LeafNode leaf, int depth);
  
  /// Gets an iterable which steps through all of the leaves in this node.
  Iterable<LeafNode> get leafIterable;

  /// Gets the string for this node and any children to this node.
  String toString();

  /// Gets a string tree for debugging, testing, and printing this node.
  Debug.StringTree _stringTree();
  
  /// Validates the node to make sure the nodes' have been setup correctly.
  void _validate(Debug.Logger log, Shape shape, Node parent, Path expPath, int expDepth);
}
