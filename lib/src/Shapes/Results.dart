part of ThreeDart.Shapes;

/// The result from a leaf insertion into the tree.
class _InsertLeafResult {

  /// The inserted leaf.
  final LeafNode leaf;

  /// True if the leaf existed, false if the leaf is new.
  final bool existed;

  /// Creates a new insert leaf result.
  _InsertLeafResult(LeafNode this.leaf, bool this.existed);
}

/// Results from finding a node in the octree.
class _FindNodeResult {

  /// The node which was found or null if none found.
  final Node node;
  
  /// The path to the node which was found.
  final Path path;

  /// The depth of the node which was found.
  final int depth;

  /// Creates a new node result.
  _FindNodeResult(Node this.node, Path this.path, int this.depth);
}
