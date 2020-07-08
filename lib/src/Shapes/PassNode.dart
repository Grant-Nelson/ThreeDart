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

  /// Adds a vertex to this node.
  /// Returns the node that should be the new root of the
  /// subtree that was defined by this node.
  Node _insertVertex(Shape shape, Vertex vertex, Path path, int depth) {
    LeafNode leaf = new LeafNode._(path, shape, vertex);
    leaf._copyOver(this);
    return leaf;
  }

  void _copyOver(PassNode pass) {
   // TODO: Implement 
  }

  /// Determines if there are any lines or faces.
  bool get isEmpty => this._lines.isEmpty && this._faces.isEmpty;
}
