part of ThreeDart.Shapes;

/// A leaf node to contain all vertices which are near
/// and equal to this node's coordinates.
class LeafNode extends Node {
  Math.Point3 _point;
  Shape _shape;
  List<Vertex> _vertices;
  List<Line> _lines;
  List<Face> _faces;

  /// Creates a new leaf node.
  LeafNode._(Shape shape, Path path, int depth): super._(path, depth) {
    if (shape == null) throw new Exception("May not set a null shape to a leaf node.");
    this._point = path.location(shape.maxCube);
    this._shape = shape;
    this._vertices = new List<Vertex>();
    this._lines = new List<Line>();
    this._faces = new List<Face>();
  }
  
  /// Gets the corner point to this leaf.
  Math.Point3 get point => this._point;

  /// All the vertices which map tho this leaf node's path.
  LeafNodeVertexCollection get vertices => new LeafNodeVertexCollection._(this);

  /// Gets an iterable which steps through all of the leaves in this node.
  Iterable<LeafNode> get leafIterable sync* {
     yield this;
  }

  /// Adds a leaf to this node. Returns the node that should
  /// be the new root of the subtree that was defined by this node.
  Node _insertLeaf(LeafNode leaf) {
    // Make this node and set is as a child of the new branch.
    int oldIndex = this.path.childIndexAt(this.depth+1);
    BranchNode branch = new BranchNode._(this.path, this.depth);
    this._setDepth(this.depth+1);
    branch._setChild(oldIndex, this);

    // Copy lines to new siblings, keep any non-empty sibling.
    for (int i = 0; i < branch._children.length; i++) {
      if (i != oldIndex) {
        PassNode pass = new PassNode._(this.path.redirect(i, this.depth+1), this.depth+1);

        // TODO: Add passing lines and faces to pass.

        if (!pass.isEmpty) branch._setChild(i, pass);
      }
    }

    // Remove any edges which no longer pass through this vertex.
    // TODO: Remove passing lines and faces whicn no longer pass in the point.

    // Add the vertex to the new branch node, return new node.
    // This allows the branch to grow as needed.
    return branch._insertLeaf(leaf);
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
    root.add("path: (${this.depth}) ${this.path.toString()}");
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
  bool _validate(Debug.Logger log, Shape shape, Node parent, Path path, int depth) {
    if (!super._validate(log, shape, parent, path, depth)) return false;

    if (!identical(shape, this._shape))
      log.error("Shape of leaf node at ${path.toString(depth)} does not match expected shape.\n");
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
    return true;
  }
}
