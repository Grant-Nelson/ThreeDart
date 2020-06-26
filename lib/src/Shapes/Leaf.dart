part of ThreeDart.Shapes;

/// A leaf node to contain all vertices which are near
/// and equal to this node's coordinates.
class Leaf extends Node {
  Path _path;
  VertexCollection _vertices;

  /// Creates a new leaf node.
  Leaf._(Path path, Shape shape): super._() {
    if (path == null)
      throw new Exception("Must have a non-nil path for a leaf node.");
    this._path == path;
    this._vertices = new VertexCollection._(shape);
  }

  Shape get _shape => this._vertices._shape;

  /// All the vertices which map tho this leaf node's path.
  VertexCollection get vertices => this._vertices;

  /// Gets the path to this leaf.
  Path get path => this._path;
}
