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

// TODO: Comment
class _FindNodeResult {
  final Node node;
  final Path path;
  final int depth;

  _FindNodeResult(Node this.node, Path this.path, int this.depth);
}
