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
  /// Returns the node that should be the new root of the
  /// subtree that was defined by this node.
  Node _addVertex(Node root, Path path, Vertex vertex) {

    // TODO: Implement

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
    _FindNodeResult findResult = this._findNode(path);
    LeafNode leaf;
    if (findResult != null) {
      Node node = findResult.node;
      int depth = findResult.depth;

      // A node containing the leaf has been found.
      if (node is LeafNode) {
        if (node.path == path) {
          return new _InsertLeafResult(node, true);
        }
      }

      leaf = new LeafNode._(path, this._shape);
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

    } else if (this._shape._root == null) {
      // Tree is empty so create a new tree.
      leaf = new LeafNode._(path, this._shape);
      this._setRoot(leaf, path, Path.maxDepth-1);
    } else {
      // Point outside of tree, expand the tree.
      this._expandFootprint(path);
      leaf = new LeafNode._(path, this._shape);
      Node newRoot = this._shape._root._insertLeaf(leaf, this._shape._rootPathDepth);
      this._setRoot(newRoot, this._shape._rootPath, this._shape._rootPathDepth);
    }

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
    while (!root.containsPoint(point)) {
      Quadrant quad;
      if (point.y > oldCenterY) {
        if (point.x > oldCenterX) {
          // New node is in the 'NorthEast'.
          quad = Quadrant.SouthWest;
        } else {
          // New node is in the 'NorthWest'.
          newXMin = xmin - width;
          quad = Quadrant.SouthEast;
        }
      } else {
        if (point.x > oldCenterX) {
          // New node is in the 'SouthEast'.
          newYMin = ymin - width;
          quad = Quadrant.NorthWest;
        } else {
          // New node is in the 'SouthWest'.
          newXMin = xmin - width;
          newYMin = ymin - width;
          quad = Quadrant.NorthEast;
        }
      }

      BranchNode newRoot = new BranchNode();
      newRoot.setLocation(newXMin, newYMin, width * 2);
      newRoot.setChild(quad, root);

      INode replacement = newRoot.reduce();
      assert(replacement is! EmptyNode);
      root = replacement as BaseNode;
    }
    return root;
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
}
