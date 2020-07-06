part of ThreeDart.Shapes;

/// An octree for storing a shape. It uses more memory than other shape storage
/// but provides significantly faster shape mathematics such as collision, union, and intersection.
class Octree {
  //static const int _maxDepth = 52;

  Shape _shape;
  Node _root;
  Path _rootPath;
  int _rootPathDepth;
  int _vertexCount;

  /// The maximum cube that the shape can occupy.
  final Math.Cube maxCube;
  
  /// Creates a new octree.
  Octree._(Shape this._shape, Math.Cube this.maxCube) {
    this._root = null;
    this._rootPath = null;
    this._rootPathDepth = 0;
    this._vertexCount = 0;
  }

  /// Creates a new octree with an optional maximum cube for a shape.
  factory Octree(Shape shape, {Math.Cube maxCube = null}) =>
    new Octree._(shape, maxCube ?? new Math.Cube(-5000.0, -5000.0, -5000.0, 10000.0));

  /// Adds a new [vertex] to this collection.
  /// True if it was added, false otherwise.
  bool add(Vertex vertex) {
        if (vertex.shape != null) {
      if (vertex.shape == this._shape) return false;
      throw new Exception("May not add a vertex already attached to another shape to this shape.");
    }
    vertex._index = this._vertexCount;
    vertex._shape = this._shape;

    Path path = new Path.fromPoint(vertex.location, this.maxCube);
    this._root = this._addVertex(this._root, path, vertex);

    this._vertexCount++;
    this._shape.onVertexAdded(vertex);
    return true;
  }

  /// Creates and adds a new vertex to this collection with the default values.
  /// If vertex already existed then null is returned, otherwise the new vertex is returned.
  Vertex addNew({Data.VertexType type: null,
                 Math.Point3 loc: null, Math.Vector3 norm: null, Math.Vector3 binm: null,
                 Math.Point2 txt2D: null, Math.Vector3 txtCube: null, Math.Color4 clr: null,
                 double weight: 0.0, Math.Point4 bending: null}) {
    Vertex ver = new Vertex(type: type, loc: loc, norm: norm, binm: binm, txt2D: txt2D,
      txtCube: txtCube, clr: clr, weight: weight, bending: bending);
    if (this.add(ver)) return ver;
    return null;
  }

  /// Creates and adds a new vertex with the given location values.
  /// If vertex already existed then null is returned, otherwise the new vertex is returned.
  Vertex addNewLoc(double locX, double locY, double locZ) {
    Vertex ver = new Vertex(loc: new Math.Point3(locX, locY, locZ));
    if (this.add(ver)) return ver;
    return null;
  }
  
  /// Adds a list of vertices to the collection.
  void addList(List<Vertex> verList) {
    for (Vertex ver in verList) this.add(ver);
  }
  
  /// Determines if the collection has any vertices in it.
  bool get isEmpty => this._vertexCount <= 0;

  /// Determines the number of vertices in the collection.
  int get length => this._vertexCount;


  Node _addVertex(Node node, Path path, Vertex vertex) {




    return node;
  }
}
