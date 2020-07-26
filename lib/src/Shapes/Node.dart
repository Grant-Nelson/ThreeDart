part of ThreeDart.Shapes;

/// The node is the base type for an octree.
abstract class Node {
  Path _path;
  int _depth;
  Math.Cube _cube;
  BranchNode _parent;

  /// Creates a new node.
  Node._(Path path, int depth, Math.Cube cube) {
    this._setLoc(path, depth, cube);
    this._parent = null;
  }
  
  /// Gets the path to this node.
  Path get path => this._path;
  
  /// Gets the depth to this node.
  int get depth => this._depth;

  /// Gets the cube to this node.
  Math.Cube get cube => this._cube;

  /// Gets the parent to this node.
  BranchNode get parent => this._parent;

  /// Sets the location of this node.
  void _setLoc(Path path, int depth, Math.Cube cube) {
    assert(path != null);
    assert(depth >= 0);
    assert(depth <= Path.maxDepth);
    assert(cube != null);
    this._path = path;
    this._depth = depth;
    this._cube = cube;
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
  void _validate(Debug.Logger log, Shape shape, Node parent, Path expPath, int expDepth);
}
