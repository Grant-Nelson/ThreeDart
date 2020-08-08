part of ThreeDart.Shapes;

/// A node which contains all the lines and
/// faces which pass through the cube.
class PassNode extends Node {
  List<Line> _lines;
  List<Face> _faces;

  /// Creates a new pass node.
  PassNode._(): super._() {
    this._lines = new List<Line>();
    this._faces = new List<Face>();
  }

  /// Adds a leaf to this node. Returns the node that should
  /// be the new root of the subtree that was defined by this node.
  /// The depth is the depth of this node which the leaf is being added into.
  Node _insertLeaf(LeafNode leaf, int depth) {
    leaf._copyOver(this);
    return leaf;
  }

  /// Determines if there are any lines or faces.
  bool get isEmpty => this._lines.isEmpty && this._faces.isEmpty;
  
  /// Gets an iterable which steps through all of the leaves in this node.
  Iterable<LeafNode> get _leafIterable sync* {}
  
  /// Gets an iterable which steps through all of the leaves between these two paths.
  Iterable<LeafNode> _leafIterablePaths(Path min, Path max, int depth) sync* {}

  /// Gets an iterable which steps through all of the nodes in the octree.
  Iterable<NodeDescriptor> _nodeIterable(Path path, int depth) sync* {
    yield new NodeDescriptor(this, path, depth);
  }

  /// Copies over all the passing lines and faces from the give pass.
  void _copyOver(PassNode pass) {
   // TODO: Implement 
  }
  
  /// Gets the string for the whole pass node.
  @override
  String toString() => this._stringTree().toString();
  
  /// Gets a string tree for debugging, testing, and printing this node.
  Debug.StringTree _stringTree() {
    Debug.StringTree root = new Debug.StringTree("pass");
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
}
