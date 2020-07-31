part of ThreeDart.Shapes;

/// An octree for storing a shape.
class Octree {
  final Shape _shape;

  /// Creates a new octree for accessing a shape.
  Octree._(Shape this._shape);

  /// Gets an iterable which steps through all of the leaves in the octree.
  Iterable<LeafNode> get leafIterable sync* {
    if (this._shape?._root != null) {
      final bool lock = this._shape._iteratorLock;
      try {
        this._shape._iteratorLock = true;
        yield* this._shape._root._leafIterable;
      } finally {
        this._shape._iteratorLock = lock;
      }
    }
  }

  /// Iterates all the leafs found to at least partially overlap the region.
  Iterable<LeafNode> leafIterableInRegion(Math.Region3 region) sync* {
    if (this._shape?._root != null) {
      final bool lock = this._shape._iteratorLock;
      try {
        Path min = Path.fromPoint(region.minCorner, this._shape.maxCube);
        Path max = Path.fromPoint(region.maxCorner, this._shape.maxCube);
        this._shape._iteratorLock = true;
        yield* this._shape._root._leafIterablePaths(min, max, this._shape._rootPathDepth);
      } finally {
        this._shape._iteratorLock = lock;
      }
    }
  }

  /// Iterates all the leafs found to fall between the region created by the given paths.
  Iterable<LeafNode> leafIterablePaths(Path path1, Path path2) sync* {
    if (this._shape?._root != null) {
      final bool lock = this._shape._iteratorLock;
      try {
        Path min = Path.min(path1, path2);
        Path max = Path.max(path1, path2);
        this._shape._iteratorLock = true;
        yield* this._shape._root._leafIterablePaths(min, max, this._shape._rootPathDepth);
      } finally {
        this._shape._iteratorLock = lock;
      }
    }
  }

  /// Adds a vertex to this octree.
  void _addVertex(Vertex vertex) {
    Path path = new Path.fromPoint(vertex.location, this._shape.maxCube);
    _InsertLeafResult result = this._insertLeaf(path);
    result.leaf.vertices._add(vertex);
  }

  /// Removes a vertex from this octree.
  /// This assumes it has already been checked to be part of this octree.
  /// Will not update the passing nodes for the lines and faces, but will
  /// not remove the lines and faces. Make sure they are updated and/or removed.
  void _removeVertex(Vertex vertex) {
    LeafNode leaf = vertex.leafNode;
    leaf.vertices._remove(vertex);
    if (leaf._vertices.isEmpty)
      this._removeLeaf(leaf);
  }

  /// Updates the location of the current vertex. It checks if the location has
  /// changed enough to cause the leaf node to need to be changed.
  void _updateVertexLocation(Vertex vertex) {
    if (!identical(vertex.shape, this._shape))
      throw new Exception("To update a vertex, it must be part of the shape already.");
    Path newPath = Path.fromPoint(vertex.location, this._shape.maxCube);
    Path oldPath = vertex.leafNode.path;

    /// TODO: Need to update the passing nodes even if the leaf didn't change.

    if (newPath == oldPath) return;
    this._removeVertex(vertex);
    this._addVertex(vertex);
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
        int index = path.childIndexAt(depth+1);
        Node child = branch.getChild(index);
        if (child == null) return new _FindNodeResult(branch, path, depth);
        depth++;
        node = child;
      } else return new _FindNodeResult(node, path, depth); // pass, leaf, or empty
    }
  }

  /// This inserts a leaf or finds an existing leaf in the quad-tree.
  /// [path] is the location to insert into the tree.
  /// Returns a pair containing the leaf node in the tree, and true if the
  /// leaf is new or false if the leaf already existed in the tree.
  _InsertLeafResult _insertLeaf(Path path) {
    if (this._shape._iteratorLock)
      throw new Exception("May not add new leaf nodes into the octree during an iteration.");

    _FindNodeResult findResult = this._findNode(path);
    if (findResult != null) {
      // A node containing the leaf has been found.
      Node node = findResult.node;
      if ((node is LeafNode) && (node.path == path)) {
        return new _InsertLeafResult(node, true);
      }
    }

    // Creates a new leaf to insert.
    LeafNode leaf = new LeafNode._(this._shape, path);
    
    if (findResult != null) {
      // Node leaf did not exist but is within the root.
      Node node = findResult.node;
      int depth = findResult.depth;
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
      this._setRoot(leaf, path, Path.maxDepth);
      this._reduceFootprint();
      return new _InsertLeafResult(leaf, false);
    }

    // Point outside of tree, expand the tree.
    this._expandFootprint(path);
    Node newRoot = this._shape._root._insertLeaf(leaf, this._shape._rootPathDepth);
    this._setRoot(newRoot, this._shape._rootPath, this._shape._rootPathDepth);
    this._reduceFootprint();
    return new _InsertLeafResult(leaf, false);
  }

  /// Remove the given leaf node.
  void _removeLeaf(LeafNode node) {    
    if (this._shape._iteratorLock)
      throw new Exception("May not remove a leaf node from the octree during an iteration.");

    if (identical(this._shape._root, node)) {
      this._setRoot(null, null, 0);
      return;
    }

    // Determine if the leaf will become a passing node.
    BranchNode parent = node.parent;
    Node replacement = null;
    if (node._lines.isNotEmpty || node._faces.isNotEmpty) {
      PassNode pass = new PassNode._();
      pass._lines = node._lines;
      pass._faces = node._faces;
      replacement = pass;
    }

    // Replace node and reduce tree.
    Path path = node.path;
    int depth = this._nodeDepth(node);
    int index = parent.getChildIndex(node);
    parent._setChild(index, replacement);
    replacement = parent._reduce();
    this._reduceBranch(parent, replacement, path, depth);
    this._reduceFootprint();
  }

  /// Gets the depth of the node in the octree.
  int _nodeDepth(Node node) {
    int depth = this._shape._rootPathDepth - 1;
    while (node != null) {
      depth++;
      node = node.parent;
    }
    return depth;
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
  void _setRoot(Node node, Path path, int depth) {
    if ((depth < -1) || (depth > Path.maxDepth))
      throw new Exception("Must have the root depth between [-1 and ${Path.maxDepth}]. It was $depth.");
    this._shape._root = node;
    this._shape._rootPath = path;
    this._shape._rootPathDepth = depth;
    this._shape._root?._parent = null;
  }
  
  /// This expands the foot print of the tree to include the given point.
  /// [root] is the original root to expand.
  /// Returns the new expanded root.
  void _expandFootprint(Path path) {
    Node root = this._shape._root;
    Path rootPath = this._shape._rootPath;
    int depth = this._shape._rootPathDepth;
    while (!rootPath.sameUpto(path, depth)) {
      depth--;
      BranchNode newRoot = new BranchNode._();
      int index = rootPath.childIndexAt(depth+1);
      newRoot._setChild(index, root);
      Node replacement = newRoot._reduce();
      this._setRoot(replacement, rootPath, depth);
      root = replacement;
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
    Debug.StringTree tree = new Debug.StringTree("Octree");
    if (this._shape._vertexCount > 0)
      tree.add("vertex count: ${this._shape._vertexCount}");
    if (this._shape._pointCount > 0)
      tree.add("point count: ${this._shape._pointCount}");
    if (this._shape._lineCount > 0)
      tree.add("line count: ${this._shape._lineCount}");
    if (this._shape._faceCount > 0)
      tree.add("face count: ${this._shape._faceCount}");
    if (this._shape._rootPath != null) {
      tree.add("depth: ${this._shape._rootPathDepth}");
      tree.add("path: ${this._shape._rootPath.toString(this._shape._rootPathDepth)}");
    }
    if (this._shape._root != null) {
      Debug.StringTree root = this._shape._root._stringTree();
      root.text = "root: "+root.text;
      tree.append(root);
    }
    return tree.toString();
  }
}
