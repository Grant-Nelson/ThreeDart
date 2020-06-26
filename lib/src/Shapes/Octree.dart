part of ThreeDart.Shapes;

/// An octree for storing a shape. It uses more memory than other shape storage
/// but provides significantly faster shape mathematics such as collision, union, and intersection.
class Octree {
  //static const int _maxDepth = 52;

  Node _root;
  Path _rootPath;

  /// The maximum cube that the shape can occupy.
  final Math.Cube maxCube;
  
  /// Creates a new octree.
  Octree._(this.maxCube) {
    this._root = null;
    this._rootPath = null;
  }

  /// Creates a new octree with an optional maximum cube for a shape.
  factory Octree({Math.Cube maxCube = null}) =>
    new Octree._(new Math.Cube(-5000.0, -5000.0, -5000.0, 10000.0));

  bool insertVertex(Vertex v) {
    

  }
}
