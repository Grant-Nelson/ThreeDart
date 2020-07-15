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
  Node _insertLeaf(LeafNode leaf, int depth) {
    leaf._copyOver(this);
    return leaf;
  }

  /// Determines if there are any lines or faces.
  bool get isEmpty => this._lines.isEmpty && this._faces.isEmpty;
  
  /// Gets an iterable which steps through all of the leaves in this node.
  Iterable<LeafNode> get leafIterable sync* {}

  void _copyOver(PassNode pass) {
   // TODO: Implement 
  }
  
  /// Gets the string for the whole pass node.
  @override
  String toString() => this._stringTree().toString();
  
  /// Gets a string tree for debugging, testing, and printing this node.
  Collections.StringTree _stringTree() {
    Collections.StringTree root = new Collections.StringTree("pass");
    if (this._lines.isNotEmpty) {
      Collections.StringTree subroot = root.add("passing lines");
      for (Line line in this._lines) subroot.add(line.toString());
    }
    if (this._faces.isNotEmpty) {
      Collections.StringTree subroot = root.add("passing faces");
      for (Face face in this._faces) subroot.add(face.toString());
    }
    return root;
  }
}
