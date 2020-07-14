part of ThreeDart.Shapes;

/// An octree for storing a shape.
class Octree {
  final Shape _shape;

  /// Creates a new octree for accessing a shape.
  Octree._(Shape this._shape);

  /// Gets an iterable which steps through all of the leaves in the octree.
  Iterable<LeafNode> get leafIterable sync* {
    if (this._shape?._root != null)
      yield* this._shape._root.leafIterable;
  }

  /// Adds a vertex to this octree.
  void _addVertex(Vertex vertex) {
    Path path = new Path.fromPoint(vertex.location, this._shape.maxCube);
    _InsertLeafResult result = this._tryInsertLeaf(path);
    result.leaf.vertices._add(vertex);
  }

  /// This will locate the smallest non-empty node containing the given path.
  /// If no non-empty node could be found from this node then null is returned.
  _FindNodeResult _findNode(Path path) {
    if (this._shape._rootPath == null) return null;
    int depth = this._shape._rootPathDepth;
    if (!this._shape._rootPath.sameUpto(path, depth)) return null;
    Node node = this._shape._root;
    while (true) {
      if (node == null) return null;
      else if (node is BranchNode) {
        BranchNode branch = node as BranchNode;
        int index = path.childIndexAt(depth);
        Node child = branch.getChild(index);
        if (child == null) return new _FindNodeResult(branch, depth);
        node = child;
        depth++;
      } else return new _FindNodeResult(node, depth); // pass, leaf, or empty
    }
  }

  /// This inserts a leaf or finds an existing leaf in the quad-tree.
  /// [path] is the location to insert into the tree.
  /// Returns a pair containing the leaf node in the tree, and true if the
  /// leaf is new or false if the leaf already existed in the tree.
  _InsertLeafResult _tryInsertLeaf(Path path) {
    print("Flag 1: "+path.toString());
    _FindNodeResult findResult = this._findNode(path);
    if (findResult != null) {
      Node node = findResult.node;
      int depth = findResult.depth;
      print("FLAG 2");

      // A node containing the leaf has been found.
      if (node is LeafNode) {
        if (node.path == path) {
          return new _InsertLeafResult(node, true);
        }
      }
      print("FLAG 3");

      // Node leaf did not exist but is within the root.
      LeafNode leaf = new LeafNode._(path, this._shape);
      BranchNode parent = node.parent;
      if (parent != null) {
        // Node was not the root.
        int index = parent.getChildIndex(node);
        Node replacement = node._insertLeaf(leaf, depth);
        parent._setChild(index, replacement);
        replacement = parent._reduce();
        this._reduceBranch(parent, replacement, path, depth);
      } else {
        // Node was the root.
        Node replacement = node._insertLeaf(leaf, depth);
        this._setRoot(replacement, path, this._shape._rootPathDepth);
      }
      this._reduceFootprint();
      return new _InsertLeafResult(leaf, false);
    }
    
    // Check if a tree is empty, then create a new tree.
    if (this._shape._root == null) {
      print("FLAG 10");
      LeafNode leaf = new LeafNode._(path, this._shape);
      this._setRoot(leaf, path, Path.maxDepth-1);
      this._reduceFootprint();
      return new _InsertLeafResult(leaf, false);
    }

    // Point outside of tree, expand the tree.
    this._expandFootprint(path);
    LeafNode leaf = new LeafNode._(path, this._shape);
    Node newRoot = this._shape._root._insertLeaf(leaf, this._shape._rootPathDepth);
    this._setRoot(newRoot, this._shape._rootPath, this._shape._rootPathDepth);
    this._reduceFootprint();
    return new _InsertLeafResult(leaf, false);
  }
  
  /// This reduces the root to the smallest branch needed.
  /// [node] is the original node to reduce.
  /// [replacement] is the node to replace the original node with.
  void _reduceBranch(Node node, Node replacement, Path path, int depth) {
    while (replacement != node) {
      BranchNode parent = node.parent;
      depth--;
      if (parent == null) {
        this._setRoot(replacement, path, depth);
        break;
      }
      int index = parent.getChildIndex(node);
      parent._setChild(index, replacement);
      node = parent;
      replacement = parent._reduce();
    }
  }

  /// This sets the root node of this tree.
  /// [node] is the node to set as the root.
  /// Returns true if root changed, false if no change.
  bool _setRoot(Node node, Path path, int depth) {
    if (this._shape._root == node) return false;
    this._shape._root = node;
    this._shape._rootPath = path;
    this._shape._rootPathDepth = depth;
    if (this._shape._root != null)
      this._shape._root._parent = null;
    return true;
  }
  
  /// This expands the foot print of the tree to include the given point.
  /// [root] is the original root to expand.
  /// Returns the new expanded root.
  void _expandFootprint(Path path) {
    Node root = this._shape._root;
    Path rootPath = this._shape._rootPath;
    int depth = this._shape._rootPathDepth;
    while (!rootPath.sameUpto(path, depth)) {
      BranchNode newRoot = new BranchNode._();
      int index = rootPath.childIndexAt(depth);
      newRoot._setChild(index, root);
      root = newRoot._reduce();
      depth--;
      this._setRoot(root, rootPath, depth);
    }
  }

  /// This reduces the footprint to the smallest root needed.
  void _reduceFootprint() {
    while (true) {
      Node root = this._shape._root;
      if ((root == null) || (root is! BranchNode)) return;
      BranchNode broot = root as BranchNode;
      Path path = this._shape._rootPath;
      int depth = this._shape._rootPathDepth;

      Node onlyChild = null;
      int index = 0;
      for (Node node in broot._children) {
        if (node != null) {
          if (onlyChild != null) return;
          onlyChild = node;
          path = path.redirect(index, depth+1);
        }
        index++;
      }

      this._setRoot(onlyChild, path, depth+1);
    }
  }

  /// Gets the string for the whole octree.
  @override
  String toString() {
    Collections.StringTree tree = new Collections.StringTree("Octree");
    if ((this._shape._rootPath != null) && (this._shape._rootPathDepth >= 0)) {
      tree.add("depth: ${this._shape._rootPathDepth}");
      tree.add("path: "+this._shape._rootPath.toString(this._shape._rootPathDepth));
    }
    if (this._shape._root != null) {
      Collections.StringTree root = this._shape._root._stringTree();
      root.text = "root: "+root.text;
      tree.append(root);
    }
    return tree.toString();
  }
}
