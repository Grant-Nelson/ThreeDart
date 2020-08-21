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

  /// Inserts a line into this passing node if it passes through this node.
  Node _insertLine(Line line, Math.Ray3 ray, Math.Cube maxCube, Path path, int depth) {
    Math.Region3 region = new Math.Region3.fromCube(path.cube(maxCube, depth));
    Math.IntersectionRayRegion3 inter = region.rayIntersection(ray);
    if (inter != null) this._lines.add(line);
    return this;
  }

  /// Inserts a face into this passing node if it passes through this node.
  Node _insertFace(Face face, Math.Triangle3 tri, Math.Cube maxCube, Path path, int depth) {
    Math.Cube cube = path.cube(maxCube, depth);
    if (cube.intersectsTriangle(tri)) this._faces.add(face);
    return this;
  }

  /// Iterates through all the lines which pass through this location in the octree.
  Iterable<Line> get passLines => this._lines;

  /// Iterates through all the faces which pass through this location in the octree.
  Iterable<Face> get passFaces => this._faces;

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
    this._lines = pass._lines.toList();
    this._faces = pass._faces.toList();
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
