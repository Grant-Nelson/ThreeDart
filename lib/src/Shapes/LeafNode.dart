part of ThreeDart.Shapes;

/// A leaf node to contain all vertices which are near
/// and equal to this node's coordinates.
class LeafNode extends Node {
  Path _path;
  Shape _shape;
  List<Vertex> _vertices;
  List<Line> _lines;
  List<Face> _faces;

  /// Creates a new leaf node.
  LeafNode._(Path path, Shape shape): super._() {
    if (path == null)
      throw new Exception("Must have a non-nil path for a leaf node.");
    this._path = path;
    this._shape = shape;
    this._vertices = new List<Vertex>();
    this._lines = new List<Line>();
    this._faces = new List<Face>();
  }

  /// Gets the path to this leaf.
  Path get path => this._path;

  /// All the vertices which map tho this leaf node's path.
  LeafNodeVertexCollection get vertices => new LeafNodeVertexCollection._(this);

  /// Gets an iterable which steps through all of the leaves in this node.
  Iterable<LeafNode> get leafIterable sync* {
     yield this;
  }

  /// Adds a leaf to this node. Returns the node that should
  /// be the new root of the subtree that was defined by this node.
  Node _insertLeaf(LeafNode leaf, int depth) {
    Path path = leaf.path;
    if (path == this._path) return this;

    // Make this node and set is as a child of the new branch.
    int oldIndex = this._path.childIndexAt(depth);
    BranchNode branch = new BranchNode._();
    branch._setChild(oldIndex, this);

    // Copy lines to new siblings, keep any non-empty sibling.
    int childIndex = path.childIndexAt(depth);
    for (int i = 0; i < branch._children.length; i++) {
      if (i != childIndex) {
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
    root.add("path: "+this._path.toString());
    if (this._vertices.isNotEmpty) {
      Debug.StringTree subroot = root.add("vertices");
      for (Vertex ver in this._vertices) subroot.add(ver.toString());
    }
    if (this._lines.isNotEmpty) {
      Debug.StringTree subroot = root.add("passing lines");
      for (Line line in this._lines) subroot.add(line.toString());
    }
    if (this._faces.isNotEmpty) {
      Debug.StringTree subroot = root.add("passing faces");
      for (Face face in this._faces) subroot.add(face.toString());
    }
    return root;
  }
}
