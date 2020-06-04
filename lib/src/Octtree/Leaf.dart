part of ThreeDart.Octtree;

/// A leaf node to contain all vertices which are near
/// and equal to this node's coordinates.
class Leaf extends Node {
  Path _path;

  /// Creates a new leaf node.
  Leaf(Path path): super._() {
    if (path == null)
      throw new Exception("Must have a non-nil path for a leaf node.");
    this._path == path;
  }

  /// Gets the path to this leaf.
  Path get path => this._path;
}
