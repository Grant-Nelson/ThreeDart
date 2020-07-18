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

  /// Gets the index for the given child.
  /// This returns -1 if the node isn't found.
  int getChildIndex(Node node) {
    for (int i = 0; i < this._children.length; i++) {
      if (this._children[i] == node) return i;
    }
    return -1;
  }

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
  
  /// Gets an iterable which steps through all of the leaves in this node.
  Iterable<LeafNode> get leafIterable sync* {
     for (Node child in this._children) {
       if (child != null) yield* child.leafIterable;
     }
  }

  /// Adds a leaf to this node. Returns the node that should
  /// be the new root of the subtree that was defined by this node.
  Node _insertLeaf(LeafNode leaf, int depth) {
    int index = leaf.path.childIndexAt(depth);
    Node node = this._children[index];
    if (node == null) node = leaf;
    else node = node._insertLeaf(leaf, depth+1);
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

  /// Gets the string for the whole branch node.
  @override
  String toString() => this._stringTree().toString();
  
  /// Gets a string tree for debugging, testing, and printing this node.
  Debug.StringTree _stringTree() {
    Debug.StringTree subroot = new Debug.StringTree("branch");
    int index = 0;
    for (Node node in this._children) {
      if (node != null) {
        Debug.StringTree child = node._stringTree();
        child.text = "$index. "+child.text;
        index++;
        subroot.append(child);
      }
    }
    return subroot;
  }

  /// Validates the node to make sure the nodes' have been setup correctly.
  void _validate(Debug.Logger log, Shape shape, Node parent, Path path, int depth) {
    if (depth > Path.maxDepth) {
      log.error("Branch node was deeper than ${Path.maxDepth}, it was $depth.\n");
      return;
    }

    if (!identical(parent, this._parent))
      log.error("Parent of branch node at ${path.toString(depth)} does not match expected parent.\n");

    int index = 0;
    for (Node child in this._children) {
      if (child != null) {
        Path subPath = path.redirect(index, depth+1);
        child._validate(log, shape, this, subPath, depth+1);
      }
      index++;
    }
  }
}
