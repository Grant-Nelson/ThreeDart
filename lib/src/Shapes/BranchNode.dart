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

  /// This iterates through each node in order.
  /// This will still return a child even if it is null.
  Iterable<Node> get children => this._children;
  
  /// Gets an iterable which steps through all of the leaves in this node.
  Iterable<LeafNode> get _leafIterable sync* {
     for (Node child in this._children) {
       if (child != null) yield* child._leafIterable;
     }
  }

  /// Gets an iterable which steps through all of the leaves between these two paths.
  Iterable<LeafNode> _leafIterablePaths(Path min, Path max, int depth) sync* {
    int childDepth = depth+1;
    int minIndex = min.childIndexAt(childDepth);
    int maxIndex = max.childIndexAt(childDepth);
    for (int i = minIndex & 4; i <= maxIndex & 4; i+=4) {
      for (int j = minIndex & 2; j <= maxIndex & 2; j+=2) {
        for (int k = minIndex & 1; k <= maxIndex & 1; k++) {
          Node child = this._children[i+j+k];
          if (child != null) yield* child._leafIterablePaths(min, max, childDepth);
        } 
      }
    }
  }

  /// Gets an iterable which steps through all of the nodes in the octree.
  Iterable<NodeDescriptor> _nodeIterable(Path path, int depth) sync* {
    yield new NodeDescriptor(this, path, depth);
    int index = 0;
    for (Node child in this._children) {
      if (child != null) {
        Path childPath = path.redirect(index, depth+1);
        yield* child._nodeIterable(childPath, depth+1);
      }
      index++;
    }
  }

  /// Adds a leaf to this node. Returns the node that should
  /// be the new root of the subtree that was defined by this node.
  /// The depth is the depth of this node which the leaf is being added into.
  Node _insertLeaf(LeafNode leaf, int depth) {
    int index = leaf.path.childIndexAt(depth+1);
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
    Debug.StringTree root = new Debug.StringTree("branch");
    int index = 0;
    for (Node node in this._children) {
      if (node != null) {
        Debug.StringTree child = node._stringTree();
        child.text = "$index. "+child.text;
        root.append(child);
      }
      index++;
    }
    return root;
  }
}
