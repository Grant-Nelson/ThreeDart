part of ThreeDart.Shapes;

/// A validator used to validate a shape's data has been built correctly.
class Validator {
  Debug.Logger _log;
  Shape _shape;
  
  ShapeLists _lists;
  List<Point> _unreachedPoints;
  List<Line> _unreachedLines;
  List<Face> _unreachedFaces;

  /// Creates a new validator for a shape.
  Validator._(Debug.Logger log, Shape shape) {
    this._log ??= new Debug.DefaultLogger();
    this._shape = shape;
  }

  /// Logs an error with an implicet newline.
  void _error(String text) => this._log.error(text+"\n");

  /// Validates the shape to make sure the octree and pointers have been setup correctly.
  bool validate() {
    if (this._shape._data == null) this._error("Null shape data.");
    else if (this._shape._data is ShapeLists) this._checkShapeList();
    else if (this._shape._data is Octree) this._checkOctree();
    else this._error("Unknown shape data kind.");

    return !this._log.failed;
  }

  /// Validates the shape list data.
  void _checkShapeList() {
    this._lists = this._shape._data as ShapeLists;
    if (!identical(this._lists._shape, this._shape))
      this._error("Shape of the list data does not match expected shape.");

    if (!identical(this._shape._octree, null))
      this._error("Octree of the shape is not null for a shape list data.");

    this._checkCounts();

    this._unreachedPoints = this._lists._points.toList();
    this._unreachedLines = this._lists._lines.toList();
    this._unreachedFaces = this._lists._faces.toList();

    this._checkVertexList(this._lists._vertices, null);

    if (this._unreachedPoints.length > 0)
      this._error("Unreachable point(s) found in the data list: ${this._unreachedPoints.join(", ")}");

    if (this._unreachedLines.length > 0)
      this._error("Unreachable line(s) found in the data list: ${this._unreachedLines.join(", ")}");

    if (this._unreachedFaces.length > 0)
      this._error("Unreachable face(s) found in the data list: ${this._unreachedFaces.join(", ")}");
  }

  /// Validates the octree data.
  void _checkOctree() {
    Octree octree = this._shape._octree;
    if (!identical(this._shape._data, octree))
      this._error("Shape data of the shape is not the octree.");

    if (!identical(octree._shape, this._shape))
      this._error("Shape of the octree does not match expected shape.");

    this._checkCounts();
    if (octree._root == null) {
      if (octree._rootPath != null)
        this._error("Root path was not null when the root node was null.");
    } else {
      if (octree._rootPath == null) {
        this._error("Root path was null when the root node was not null.");
        return;
      }
      this._checkNode(octree._root, null, octree._rootPath, octree._rootPathDepth);
    }
  }

  /// Checks that the vertex count matches the iterator count.
  void _checkCounts() {
    int vertex1 = this._shape.vertices.iterable.length;
    int vertex2 = this._shape._data._vertexCount;
    if (vertex1 != vertex2)
      this._error("Vertex count was found as $vertex1 but was stored as $vertex2.");

    int point1 = this._shape.points.iterable.length;
    int point2 = this._shape._data._pointCount;
    if (point1 != point2)
      this._error("Point count was found as $point1 but was stored as $point2.");

    int line1 = this._shape.lines.iterable.length;
    int line2 = this._shape._data._lineCount;
    if (line1 != line2)
      this._error("Line count was found as $line1 but was stored as $line2.");

    int face1 = this._shape.faces.iterable.length;
    int face2 = this._shape._data._faceCount;
    if (face1 != face2)
      this._error("Face count was found as $face1 but was stored as $face2.");
  }

  /// Validates the node to make sure the nodes' have been setup correctly.
  void _checkNode(Node node, BranchNode parent, Path expPath, int expDepth) {
    if (node == null) {
      this._error("The node being validated was null.");
      return;
    }

    if ((expDepth < 0) || (expDepth > Path.maxDepth)) {
      this._error("Node's depth was not in [0 to ${Path.maxDepth}], it was $expDepth.");
      return;
    }

    if (!identical(node.parent, parent))
      this._error("Parent of node at ${expPath.toString(expDepth)} does not match expected parent.");

    if (node is BranchNode) this._checkBranchNode(node, parent, expPath, expDepth);
    else if (node is LeafNode) this._checkLeafNode(node, parent, expPath, expDepth);
    else if (node is PassNode) this._checkPassNode(node, parent, expPath, expDepth);
    else this._error("Unknown node kind at ${expPath.toString(expDepth)}");
  }

  /// Validates the node to make sure the nodes' have been setup correctly.
  void _checkBranchNode(BranchNode node, BranchNode parent, Path expPath, int expDepth) {
    bool hasChild = false;
    for (int i = 0; i < node._children.length; i++) {
      Node child = node._children[i];
      if (child != null) {
        hasChild = true;
        Path subPath = expPath.redirect(i, expDepth+1);
        this._checkNode(child, node, subPath, expDepth+1);
      }
    }
    if (!hasChild) this._error("Branch at ${expPath.toString(expDepth)} had no non-nil children.");
  }
  
  /// Validates the node to make sure the nodes' have been setup correctly.
  void _checkLeafNode(LeafNode node, BranchNode parent, Path expPath, int expDepth) {
    if (node.path == null) {
      this._error("Node's path was null.\n");
      return;
    }
    if (!expPath.sameUpto(node.path, expDepth))
      this._error("Node path, ${node.path.toString(expDepth)}, doesn't match "+
        "expected path, ${expPath.toString(expDepth)}, upto depth $expDepth.");

    if (!identical(this._shape._octree, node._octree))
      this._error("Octree of leaf node at ${expPath.toString(expDepth)} does not match expected octree.");

    if (node._vertices.isEmpty)
      this._error("Leaf node at ${expPath.toString(expDepth)} has no vertices.");

    this._checkVertexList(node._vertices, node);

    Math.Cube cube = expPath.cube(this._shape._octree.maxCube, expDepth);
    this._checkContainedVertices(node._vertices, cube);
    this._checkPassingLines(node._lines, cube);
    this._checkPassingFaces(node._faces, cube);
  }

  /// Validates the node to make sure the nodes' have been setup correctly.
  void _checkPassNode(PassNode node, BranchNode parent, Path expPath, int expDepth) {
    if ((node._lines.length <= 0) && (node._faces.length <= 0))
      this._error("Pass node at ${expPath.toString(expDepth)} has no passing lines and no passing faces.");

    Math.Cube cube = expPath.cube(this._shape._octree.maxCube, expDepth);
    this._checkPassingLines(node._lines, cube);
    this._checkPassingFaces(node._faces, cube);
  }

  /// Check that the given vertices are contained by the given vertices.
  void _checkContainedVertices(List<Vertex> vertices, Math.Cube cube) {
    for (int i = 0; i < vertices.length; i++) {
      Vertex vertex = vertices[i];
      if (!cube.contains(vertex.location))
        this._error("Vertex $i at ${vertex.location} was expected to be inside $cube.");
    }
  }

  /// Checks that the given lines and the given cube at least partially intersect.
  void _checkPassingLines(List<Line> lines, Math.Cube cube) {
    // TODO: Implement
  }

  /// Checks that the given faces and the given cube at least partially intersect.
  void _checkPassingFaces(List<Face> faces, Math.Cube cube) {
    // TODO: Implement
  }

  /// Checks that the vertex list in the leaf node or shape is valid.
  void _checkVertexList(List<Vertex> vertices, LeafNode node) {
    for (int i = 0; i < vertices.length; i++) {
      Vertex vertex = vertices[i];
      if (vertex == null) {
        if (node == null) this._error("Vertex $i in shape in null.");
        else this._error("Vertex $i in leaf node at ${node.path} in null.");
      }
      else this._checkVertex(vertex, node);

      for (int j = 0; j < i; j++) {
        if (identical(vertices[j], vertex)) {
          if (node != null) this._error("The vertices $i and $j in shape are the same.");
          else this._error("The vertices $i and $j in leaf node at ${node.path} are the same.");
        }
      }
    }
  }

  /// Validates the vertex to make sure the vertex has been setup correctly.
  void _checkVertex(Vertex vertex, LeafNode leaf) {
    if (!identical(this._shape, vertex._shape))
      this._error("Vertex has a different shape than expected: $this");

    if (!identical(leaf, vertex._leaf))
      this._error("Vertex has a different leaf node than expected: $this");

    if (vertex._leaf?._octree != null) {
      Path path = Path.fromPoint(vertex._loc, vertex._leaf._octree.maxCube);
      if (vertex._leaf.path != path)
        this._error("Vertex path, $path, does not match the leaf's path, ${vertex._leaf.path}.");
    }

    this._checkPointList(vertex);

    this._checkLineList(vertex, 1);
    this._checkLineList(vertex, 2);

    this._checkFaceList(vertex, 1);
    this._checkFaceList(vertex, 2);
    this._checkFaceList(vertex, 3);
  }

  /// Checks that the point list in the vertex is valid.
  void _checkPointList(Vertex vertex) {
    List<Point> points = vertex._points;
    for (int i = 0; i < points.length; i++) {
      Point pnt = points[i];
      if (pnt == null)
        this._error("Point $i in vertex is null in $vertex.");
      else if (!identical(vertex, pnt.vertex))
        this._error("Point $i on vertex does not match expected vertex: $vertex.");

      for (int j = 0; j < i; j++) {
        if (identical(points[j], pnt))
          this._error("The points $i and $j in vertex are the same: $vertex.");
      }

      if (this._lists != null) {
        if (!this._lists._points.contains(pnt))
          this._error("Point $i on vertex does exist in full point list: $vertex.");
        this._unreachedPoints.remove(pnt);
      }
    }
  }

  /// Checks that the line list in the vertex is valid.
  void _checkLineList(Vertex vertex, int index) {
    List<Line> lines = [vertex._lines1, vertex._lines2][index-1];
    for (int i = 0; i < lines.length; i++) {
      Line line = lines[i];
      if (line == null)
        this._error("Line $i in line set $index of vertex in null: $vertex.");
      else if (!identical(vertex, [line.vertex1, line.vertex2][index-1]))
        this._error("Line $i in line set $index of vertex does not have expected vertex $index: $vertex.");

      for (int j = 0; j < i; j++) {
        if (identical(lines[j], line))
          this._error("The lines $i and $j in line set $index of vertex are the same: $vertex.");
      }

      if (this._lists != null) {
        if (!this._lists._lines.contains(line))
          this._error("Line $i on vertex does exist in full line list: $vertex.");
        this._unreachedLines.remove(line);
      }
    }
  }

  /// Checks that the face list in the vertex is valid.
  void _checkFaceList(Vertex vertex, int index) {
    List<Face> faces = [vertex._faces1, vertex._faces2, vertex._faces3][index-1];
    for (int i = 0; i < faces.length; i++) {
      Face face = faces[i];
      if (face == null)
        this._error("Face $i in face set $index of vertex in null: $vertex.");
      else if (!identical(vertex, [face.vertex1, face.vertex2, face.vertex3][index-1]))
        this._error("Face $i in face set $index of vertex does not have expected vertex $index: $vertex.");

      for (int j = 0; j < i; j++) {
        if (identical(faces[j], face))
          this._error("The faces $i and $j in face set $index of vertex are the same: $vertex.");
      }
      
      if (this._lists != null) {
        if (!this._lists._faces.contains(face))
          this._error("Face $i on vertex does exist in full face list: $vertex.");
        this._unreachedFaces.remove(face);
      }
    }
  }
}
