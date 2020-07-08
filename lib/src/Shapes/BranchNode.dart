part of ThreeDart.Shapes;

/// A branch is a node in the tree which contains one or more children.
class BranchNode extends Node {

  /// Gets a weighting which indicates the minimum amount of leaves
  /// which can be in the node assuming this node has been reduced.
  static int _leafWeight(Node node) {
    if (node == null)       return 0;
    if (node is LeafNode)   return 1;
    if (node is BranchNode) return 2;
    return 0; // for pass
  }

  /// The 8 children of the branch.
  List<Node> _children;

  /// Creates the new branch node.
  BranchNode._(): super._() {
    this._children = new List<Node>.filled(8, null, growable: false);
  }

  /// Gets a child at the given index.
  /// The index must be between 0 and 7 inclusively.
  /// Use a Path object to determine the index.
  Node getChild(int index) => this._children[index];

  /// This sets the child at a given index.
  /// Returns true if the child was changed, false if there was not change.
  bool _setChild(int index, Node node) {
    if (this._children[index] == node) return false;
    this._children[index] = node;
    if (node != null) node._parent = this;
    return true;
  }

  /// This handles each node in order.
  /// This will call the handle with any null children.
  void forEach(bool hndl(Node)) => this._children.forEach(hndl);

  /// Adds a vertex to this node.
  /// Returns the node that should be the new root of the
  /// subtree that was defined by this node.
  Node _insertVertex(Shape shape, Vertex vertex, Path path, int depth) {
    int index = path.childIndexAt(depth);
    Node node = this._children[index];

    if (node == null)
      node = new LeafNode._(path, shape, vertex);
    else node = node._insertVertex(shape, vertex, path, depth+1);

    if (this._setChild(index, node)) return this._reduce();
    return this;
  }

  /// Determine if this node can be reduced.
  /// Returns this branch node if not reduced,
  /// or the reduced node to replace this node with.
  Node _reduce() {
    // A branch node can be reduced any time the all of the children
    // contain no leaves or only one leaf.
    int weight = 0;
    for (Node node in this._children) {
      weight += _leafWeight(node);
      // If 2 or more then this cannot be reduced so return this node.
      if (weight >= 2) return this;
    }

    if (weight == 0) return this._reduceToPass();
    return this._reduceToLeaf();
  }

  /// This is part of [_reduce] were there are no leaves.
  /// This collects all passes and copy the information over to a new pass node.
  /// Returns either the found pass node or null for no node.
  Node _reduceToPass() {
    PassNode pass = null;
    for (int index = 0; index < this._children.length; index++) {
      Node node = this._children[index];
      if (node is PassNode) {
        if (pass == null) {
          // Take found pass node child to make as the replacement of this node.
          pass = node;
          pass._parent = null;
          this._children[index] = null;
        } else {
          // Copy all edges from this pass node into the already found pass node.
          pass._copyOver(node);
        }
      }
    }
    return pass;
  }

  /// This is part of [_reduce] where was only one leaf node.
  /// This finds the leaf node and reduce to it or return null.
  Node _reduceToLeaf() {
    LeafNode leaf = null;
    for (int index = 0; index < this._children.length; index++) {
      Node node = this._children[index];
      if (node is LeafNode) {
        // Leaf node found, relocate and remove the node
        // from this parent node so that it isn't deleted later.
        leaf = node;
        leaf._parent = null;
        this._children[index] = null;
        break;
      }
    }
    if (leaf == null) return null;

    // Find any pass nodes and copy all lines into the leaf node.
    for (int index = 0; index < this._children.length; index++) {
      Node node = this._children[index];
      if (node is PassNode) leaf._copyOver(node);
    }
    return leaf;
  }
}
