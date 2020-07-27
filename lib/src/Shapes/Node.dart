part of ThreeDart.Shapes;

/// The node is the base type for an octree.
abstract class Node {
  Path _path;
  int _depth;
  BranchNode _parent;

  /// Creates a new node.
  Node._(Path path, int depth) {
    if (path == null) throw new Exception("May not set a null path to a node.");
    this._path = path;
    this._setDepth(depth);
    this._parent = null;
  }
  
  /// Gets the path to this node.
  Path get path => this._path;
  
  /// Gets the depth to this node.
  int get depth => this._depth;

  /// Gets the parent to this node.
  BranchNode get parent => this._parent;

  /// Sets the depth of this node.
  void _setDepth(int depth) {
    if ((depth < 0) || (depth > Path.maxDepth))
      throw new Exception("May not set a node to depth $depth, it must be between [0 and ${Path.maxDepth}.");
    this._depth = depth;
  }

  /// Adds a leaf to this node. Returns the node that should
  /// be the new root of the subtree that was defined by this node.
  Node _insertLeaf(LeafNode leaf);
  
  /// Gets an iterable which steps through all of the leaves in this node.
  Iterable<LeafNode> get leafIterable;

  /// Gets the string for this node and any children to this node.
  String toString();

  /// Gets a string tree for debugging, testing, and printing this node.
  Debug.StringTree _stringTree();
  
  /// Validates the node to make sure the nodes' have been setup correctly.
  bool _validate(Debug.Logger log, Shape shape, Node parent, Path expPath, int expDepth) {
    if (this.path == null) {
      log.error("Node's path was null.\n");
      return false;
    }
    if ((this.depth < 0) || (this.depth > Path.maxDepth)) {
      log.error("Node's depth was not in [0 to ${Path.maxDepth}], it was ${this.depth}.\n");
      return false;
    }

    if (expDepth != this._depth)
      log.error("Node's depth was expected to be $expDepth but was ${this.depth}.\n");
    if (!path.sameUpto(this.path, depth))
      log.error("Node path, ${this.path.toString()}, doesn't match expected path, ${path.toString(expDepth)}, upto depth $expDepth.\n");
    if (!identical(parent, this._parent))
      log.error("Parent of node at ${path.toString(expDepth)} does not match expected parent.\n");
    
    return true;
  }
}
