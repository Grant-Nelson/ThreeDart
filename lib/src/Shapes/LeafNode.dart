part of ThreeDart.Shapes;

/// A leaf node to contain all vertices which are near
/// and equal to this node's coordinates.
class LeafNode extends Node {
  final Octree _octree;
  final Path _path;

  List<Vertex> _vertices;
  List<Line> _lines;
  List<Face> _faces;

  /// Creates a new leaf node.
  LeafNode._(Octree this._octree, Path this._path): super._() {
    if (this._octree == null) throw new Exception("May not set a null shape to a leaf node.");
    if (this._path == null) throw new Exception("May not set a null path to a leaf node.");
    this._vertices = new List<Vertex>();
    this._lines = new List<Line>();
    this._faces = new List<Face>();
  }
  
  /// Gets the path to this node.
  Path get path => this._path;
  
  /// Gets the corner point to this leaf.
  Math.Point3 get point => path.location(this._octree.maxCube);

  /// All the vertices which map tho this leaf node's path.
  LeafNodeVertexCollection get vertices => new LeafNodeVertexCollection._(this);

  /// Gets an iterable which steps through all of the leaves in this node.
  Iterable<LeafNode> get _leafIterable sync* {
     yield this;
  }
  
  /// Gets an iterable which steps through all of the leaves between these two paths.
  Iterable<LeafNode> _leafIterablePaths(Path min, Path max, int depth) sync* {
    yield this;
  }

  /// Adds a leaf to this node. Returns the node that should
  /// be the new root of the subtree that was defined by this node.
  /// The depth is the depth of this node which the leaf is being added into.
  Node _insertLeaf(LeafNode leaf, int depth) {
    // Make this node and set is as a child of the new branch.
    int oldIndex = this.path.childIndexAt(depth+1);
    BranchNode branch = new BranchNode._();
    branch._setChild(oldIndex, this);

    // Copy lines to new siblings, keep any non-empty sibling.
    for (int i = 0; i < branch._children.length; i++) {
      if (i != oldIndex) {
        PassNode pass = new PassNode._();

        // TODO: Add passing lines and faces to pass.

        if (!pass.isEmpty) branch._setChild(i, pass);
      }
    }

    // Remove any edges which no longer pass through this vertex.
    // TODO: Remove passing lines and faces whicn no longer pass in the point.

    // Add the vertex to the new branch node, return new node.
    // This allows the branch to grow as needed.
    return branch._insertLeaf(leaf, depth);
  }

  void _copyOver(PassNode pass) {
    // TODO: Implement 
    // Add all passing lines to point node unless the line starts or ends
    // on the point node, since the line will already be in the start or end line lists.
    // for (EdgeNode edge in node.passEdges) {
    //   if ((edge.startNode != point) && (edge.endNode != point)) point.passEdges.add(edge);
    // }
  }

  /// Gets the string for the whole leaf node.
  @override
  String toString() => this._stringTree().toString();
  
  /// Gets a string tree for debugging, testing, and printing this node.
  Debug.StringTree _stringTree() {
    Debug.StringTree root = new Debug.StringTree("leaf");
    root.add("path: ${this.path.toString()}");
    if (this._vertices.isNotEmpty) {
      Debug.StringTree subroot = root.add("vertices (${this._vertices.length})");
      for (Vertex ver in this._vertices) subroot.add(ver.toString());
    }
    if (this._lines.isNotEmpty) {
      Debug.StringTree subroot = root.add("passing lines (${this._lines.length})");
      for (Line line in this._lines) subroot.add(line.toString());
    }
    if (this._faces.isNotEmpty) {
      Debug.StringTree subroot = root.add("passing faces (${this._faces.length})");
      for (Face face in this._faces) subroot.add(face.toString());
    }
    return root;
  }

  /// Validates the node to make sure the nodes' have been setup correctly.
  void _validate(Debug.Logger log, Octree octree, Node parent, Path expPath, int depth) {
    if (this.path == null) {
      log.error("Node's path was null.\n");
      return;
    }
    if ((depth < 0) || (depth > Path.maxDepth)) {
      log.error("Node's depth was not in [0 to ${Path.maxDepth}], it was $depth.\n");
      return;
    }

    if (!expPath.sameUpto(this.path, depth))
      log.error("Node path, ${this.path.toString(depth)}, doesn't match expected path, ${expPath.toString(depth)}, upto depth $depth.\n");
    if (!identical(parent, this._parent))
      log.error("Parent of node at ${this.path.toString(depth)} does not match expected parent.\n");

    if (!identical(octree, this._octree))
      log.error("Octree of leaf node at ${path.toString(depth)} does not match expected octree.\n");
    if (this._vertices.isEmpty)
      log.error("Leaf node at ${path.toString(depth)} has no vertices.\n");

    for (int i = 0; i < this._vertices.length; i++) {
      Vertex vertex = this._vertices[i];
      if (vertex == null) log.error("Vertex $i in leaf node at ${path.toString(depth)} in null.\n");
      else vertex._validate(log, this);
      for (int j = 0; j < i; j++) {
        if (identical(this._vertices[j], vertex))
          log.error("The vertices $i and $j in leaf node at ${path.toString(depth)} are the same.\n");
      }
    }
    
    // TODO: Implement
    // Check that all the passing lines and faces pass through this node.
    // Check that all the passing lines and faces are part of this shape.
  }
}
