part of ThreeDart.Shapes;

/// The description of a nodes location in the Octree.
class NodeDescriptor {

  /// The node being described.
  final Node node;

  /// The path to this node.
  final Path path;

  /// Ths depth to this node.
  final int depth;

  /// Creates a new node descriptor.
  NodeDescriptor(Node this.node, Path this.path, int this.depth);
}
