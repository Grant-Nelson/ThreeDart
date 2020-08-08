part of ThreeDart.Shapes;

/// An octree for storing a shape.
class Octree extends ShapeData {
  
  /// The maximum cube that the shape should occupy.
  final Math.Cube maxCube;

  final Shape _shape;
  
  Node _root;
  Path _rootPath;
  int _rootPathDepth;

  int _vertexCount;
  int _pointCount;
  int _lineCount;
  int _faceCount;

  bool _iteratorLock;

  /// Creates a new octree for accessing a shape.
  Octree._(Math.Cube this.maxCube, Shape this._shape): super._() {
    this._root = null;
    this._rootPath = null;
    this._rootPathDepth = 0;

    this._vertexCount = 0;
    this._pointCount = 0;
    this._lineCount = 0;
    this._faceCount = 0;
    
    this._iteratorLock = false;

    this._populate();
  }

  /// Populates this octree with any existing data in the shape.
  void _populate() {
    ShapeData data = this._shape._data;
    if (data == null) return;

    this._vertexCount = data._vertexCount;
    this._pointCount  = data._pointCount;
    this._lineCount   = data._lineCount;
    this._faceCount   = data._faceCount;

    for (Vertex vertex in data._vertexIteratable) {
      Path path = new Path.fromPoint(vertex.location, this.maxCube);
      _InsertLeafResult result = this._insertLeaf(path);
      vertex._leaf = result.leaf;
      result.leaf._vertices.add(vertex);
    }

    // TODO: Setup lines and faces.

    this._shape._vertexIndicesNeedUpdate = true;
  }

  /// Gets an iterable which steps through all of the leaves in the octree.
  Iterable<LeafNode> get leafIterable sync* {
    if (this._root != null) {
      final bool lock = this._iteratorLock;
      try {
        this._iteratorLock = true;
        yield* this._root._leafIterable;
      } finally {
        this._iteratorLock = lock;
      }
    }
  }

  /// Iterates all the leafs found to at least partially overlap the region.
  Iterable<LeafNode> leafIterableInRegion(Math.Region3 region) sync* {
    if (this._root != null) {
      final bool lock = this._iteratorLock;
      try {
        Path min = Path.fromPoint(region.minCorner, this.maxCube);
        Path max = Path.fromPoint(region.maxCorner, this.maxCube);
        this._iteratorLock = true;
        yield* this._root._leafIterablePaths(min, max, this._rootPathDepth);
      } finally {
        this._iteratorLock = lock;
      }
    }
  }

  /// Iterates all the leafs found to fall between the region created by the given paths.
  Iterable<LeafNode> leafIterablePaths(Path path1, Path path2) sync* {
    if (this._root != null) {
      final bool lock = this._iteratorLock;
      try {
        Path min = Path.min(path1, path2);
        Path max = Path.max(path1, path2);
        this._iteratorLock = true;
        yield* this._root._leafIterablePaths(min, max, this._rootPathDepth);
      } finally {
        this._iteratorLock = lock;
      }
    }
  }
  
  /// Gets an iterable which steps through all of the nodes in the octree.
  Iterable<NodeDescriptor> get nodeIterable sync* {
    if (this._root != null) {
      final bool lock = this._iteratorLock;
      try {
        this._iteratorLock = true;
        yield* this._root._nodeIterable(this._rootPath, this._rootPathDepth);
      } finally {
        this._iteratorLock = lock;
      }
    }
  }

  /// Adds a vertex to this octree.
  void _addVertex(Vertex vertex) {
    Path path = new Path.fromPoint(vertex.location, this.maxCube);
    _InsertLeafResult result = this._insertLeaf(path);

    if (result.leaf._vertices.contains(vertex))
      throw new Exception("Vertex already existed in the leaf node.");

    vertex._index = this._vertexCount;
    vertex._leaf  = result.leaf;
    vertex._shape = this._shape;
    result.leaf._vertices.add(vertex);

    this._vertexCount++;
    this._shape._vertexIndicesNeedUpdate = true;
    this._shape.onVertexAdded(vertex);
  }

  /// Removes a vertex from the shape's data.
  /// This assumes it has already been checked to be part of this octree.
  /// Will not update the passing nodes for the lines and faces, but will
  /// not remove the lines and faces. Make sure they are updated and/or removed.
  void _removeVertex(Vertex vertex) {
    LeafNode leaf = vertex.leafNode;
    if (!leaf._vertices.remove(vertex))
      throw new Exception("Vertex was not in the expected leaf node.");

    vertex._leaf  = null;
    vertex._shape = null;
    vertex._index = -1;

    if (leaf._vertices.isEmpty)
      this._removeLeaf(leaf);

    this._vertexCount--;
    this._shape._vertexIndicesNeedUpdate = true;
    this._shape.onVertexRemoved(vertex);
  }

  /// Adds a point to the shape's data.
  void _addPoint(Point pnt) {
    this._pointCount++;
  }

  /// Removes a point from the shape's data.
  void _removePoint(Point pnt) {
    this._pointCount--;
  }

  /// Adds a line to the shape's data.
  void _addLine(Line line) {
    this._lineCount++;
    // TODO: Add to passing
  }

  /// Removes a line from the shape's data.
  void _removeLine(Line line) {
    this._lineCount--;
    // TODO: Remove from passing
  }

  /// Adds a face to the shape's data.
  void _addFace(Face face) {
    this._faceCount++;
    // TODO: Add to passing
  }

  /// Removes a face from the shape's data.
  void _removeFace(Face face) {
    this._faceCount--;
    // TODO: Remove from passing
  }
  
  /// Iterates through all the vertices in the shape.
  Iterable<Vertex> get _vertexIteratable sync* {
    for (LeafNode leaf in this._shape.octree.leafIterable) {
      yield* leaf.vertices.iterable;
    }
  }
  
  /// Gets an iterable which steps through all of the vertices in the given region.
  Iterable<Vertex> _vertexIterableInRegion(Math.Region3 region) sync* {
    for (LeafNode leaf in this._shape.octree.leafIterableInRegion(region)) {
      for (Vertex vertex in leaf._vertices) {
        if ((vertex.shape == this._shape) && (region.contains(vertex.location))) yield vertex;
      }
    }
  }

  /// Iterates through all the points in the shape.
  Iterable<Point> get _pointIteratable sync* {
    for (Vertex vertex in this._shape.vertices.iterable) {
      yield* vertex.points.iterable;
    }
  }

  /// Iterates through all the lines in the shape.
  Iterable<Line> get _lineIteratable sync* {
    for (Vertex vertex in this._shape.vertices.iterable) {
      yield* vertex.lines.iterable1;
    }
  }

  /// Iterates through all the faces in the shape.
  Iterable<Face> get _faceIteratable sync* {
    for (Vertex vertex in this._shape.vertices.iterable) {
      yield* vertex.faces.iterable1;
    }
  }
  
  /// Gets all the vertices into a list.
  List<Vertex> _toVertexList(bool growable) {
    List<Vertex> result = new List<Vertex>.filled(this._vertexCount, null, growable: growable);
    int index = 0;
    for (Vertex ver in this._vertexIteratable) {
      result[index] = ver;
      index++;
    }
    return result;
  }

  /// Gets all the points into a list.
  List<Point> _toPointList(bool growable) {
    List<Point> result = new List<Point>.filled(this._pointCount, null, growable: growable);
    int index = 0;
    for (Point pnt in this._pointIteratable) {
      result[index] = pnt;
      index++;
    }
    return result;
  }

  /// Gets all the lines into a list.
  List<Line> _toLineList(bool growable) {
    List<Line> result = new List<Line>.filled(this._lineCount, null, growable: growable);
    int index = 0;
    for (Line line in this._lineIteratable) {
      result[index] = line;
      index++;
    }
    return result;
  }

  /// Gets all the faces into a list.
  List<Face> _toFaceList(bool growable) {
    List<Face> result = new List<Face>.filled(this._faceCount, null, growable: growable);
    int index = 0;
    for (Face face in this._faceIteratable) {
      result[index] = face;
      index++;
    }
    return result;
  }

  /// Updates the location of the current vertex. It checks if the location has
  /// changed enough to cause the leaf node to need to be changed.
  void _updateVertexLocation(Vertex vertex) {
    if (!identical(vertex.shape, this._shape))
      throw new Exception("To update a vertex, it must be part of the shape already.");
    Path newPath = Path.fromPoint(vertex.location, this.maxCube);
    Path oldPath = vertex.leafNode.path;

    /// TODO: Need to update the passing nodes even if the leaf didn't change.

    if (newPath == oldPath) return;
    this._removeVertex(vertex);
    this._addVertex(vertex);
  }

  /// This will locate the smallest non-empty node containing the given path.
  /// If no non-empty node could be found from this node then null is returned.
  _FindNodeResult _findNode(Path path) {
    if (this._rootPath == null) return null;

    int depth = this._rootPathDepth;
    if (!this._rootPath.sameUpto(path, depth)) return null;

    Node node = this._root;
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
    if (this._iteratorLock)
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
    LeafNode leaf = new LeafNode._(this, path);
    
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
        this._setRoot(replacement, path, this._rootPathDepth);
      }

      this._reduceFootprint();
      return new _InsertLeafResult(leaf, false);
    }
    
    // Check if a tree is empty, then create a new tree.
    if (this._root == null) {
      this._setRoot(leaf, path, Path.maxDepth);
      this._reduceFootprint();
      return new _InsertLeafResult(leaf, false);
    }

    // Point outside of tree, expand the tree.
    this._expandFootprint(path);
    Node newRoot = this._root._insertLeaf(leaf, this._rootPathDepth);
    this._setRoot(newRoot, this._rootPath, this._rootPathDepth);
    this._reduceFootprint();
    return new _InsertLeafResult(leaf, false);
  }

  /// Remove the given leaf node.
  void _removeLeaf(LeafNode node) {    
    if (this._iteratorLock)
      throw new Exception("May not remove a leaf node from the octree during an iteration.");

    if (identical(this._root, node)) {
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
    int depth = this._rootPathDepth - 1;
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
    this._root = node;
    this._rootPath = path;
    this._rootPathDepth = depth;
    this._root?._parent = null;
  }
  
  /// This expands the foot print of the tree to include the given point.
  /// [root] is the original root to expand.
  /// Returns the new expanded root.
  void _expandFootprint(Path path) {
    Node root = this._root;
    Path rootPath = this._rootPath;
    int depth = this._rootPathDepth;
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
      Node root = this._root;
      if ((root == null) || (root is! BranchNode)) return;
      BranchNode broot = root as BranchNode;
      Path path = this._rootPath;
      int depth = this._rootPathDepth;

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
    if (this._vertexCount > 0)
      tree.add("vertex count: ${this._vertexCount}");
    if (this._pointCount > 0)
      tree.add("point count: ${this._pointCount}");
    if (this._lineCount > 0)
      tree.add("line count: ${this._lineCount}");
    if (this._faceCount > 0)
      tree.add("face count: ${this._faceCount}");
    if (this._rootPath != null) {
      tree.add("depth: ${this._rootPathDepth}");
      tree.add("path: ${this._rootPath.toString(this._rootPathDepth)}");
    }
    if (this._root != null) {
      Debug.StringTree root = this._root._stringTree();
      root.text = "root: "+root.text;
      tree.append(root);
    }
    return tree.toString();
  }
}
