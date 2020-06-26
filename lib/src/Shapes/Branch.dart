part of ThreeDart.Shapes;

/// A branch is a node in the tree which contains one or more children.
class Branch extends Node {
  List<Node> _children;

  /// Creates the new branch node.
  Branch(): super._() {
    this._children = new List<Node>.filled(8, null, growable: false);
  }

  /// Gets a child at the given index.
  /// The index must be between 0 and 7 inclusively.
  /// Use a Path object to determine the index.
  Node getChild(int index) => this._children[index];

  /// This handles each node in order.
  /// This will call the handle with any null children.
  void forEach(bool hndl(Node)) => this._children.forEach(hndl);
}
