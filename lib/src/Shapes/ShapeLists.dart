part of ThreeDart.Shapes;

/// An interface for the data for a shape.
/// The data is either stored in a list or octree. 
class ShapeLists extends ShapeData {
  final Shape _shape;

  List<Vertex> _vertices;
  List<Point> _points;
  List<Line> _lines;
  List<Face> _faces;

  /// Creates a new shape list for the given shape.
  ShapeLists._(Shape this._shape): super._() {
    this._vertices = List<Vertex>();
    this._points   = List<Point>();
    this._lines    = List<Line>();
    this._faces    = List<Face>();
    this._populate();
  }

  /// Populates these lists with any existing data in the shape.
  void _populate() {
    ShapeData data = this._shape._data;
    if (data == null) return;

    this._vertices = data._toVertexList(false);
    this._points   = data._toPointList(false);
    this._lines    = data._toLineList(false);
    this._faces    = data._toFaceList(false);

    this._shape._vertexIndicesNeedUpdate = true;
  }

  /// Adds a vertex to the shape's data.
  void _addVertex(Vertex vertex) {
    vertex._index = this._vertexCount;
    vertex._leaf  = null;
    vertex._shape = this._shape;
    this._vertices.add(vertex);
  }
  
  /// Adds a point to the shape's data.
  void _addPoint(Point pnt) => this._points.add(pnt);
  
  /// Adds a line to the shape's data.
  void _addLine(Line line) => this._lines.add(line);
  
  /// Adds a face to the shape's data.
  void _addFace(Face face) => this._faces.add(face);

  /// Removes a vertex from the shape's data.
  void _removeVertex(Vertex vertex) {
    this._vertices.remove(vertex);
    vertex._leaf  = null;
    vertex._shape = null;
    vertex._index = -1;
  }

  /// Removes a point from the shape's data.
  void _removePoint(Point pnt) => this._points.remove(pnt);

  /// Removes a line from the shape's data.
  void _removeLine(Line line) => this._lines.remove(line);

  /// Removes a face from the shape's data.
  void _removeFace(Face face) => this._faces.remove(face);

  /// Gets the number of vertices in the data.
  int get _vertexCount => this._vertices.length;

  /// Gets the number of points in the data.
  int get _pointCount => this._points.length;

  /// Gets the number of lines in the data.
  int get _lineCount => this._lines.length;

  /// Gets the number of faces in the data.
  int get _faceCount => this._faces.length;

  /// Iterates through all the vertices in the shape.
  Iterable<Vertex> get _vertexIteratable sync* {
    for (Vertex vertex in this._vertices) {
      if (vertex.shape == this._shape) yield vertex;
    }
  }

  /// Iterates through all the points in the shape.
  Iterable<Point> get _pointIteratable sync* {
    for (Point point in this._points) {
      if (!point.disposed) yield point;
    }
  }

  /// Iterates through all the lines in the shape.
  Iterable<Line> get _lineIteratable sync* {
    for (Line line in this._lines) {
      if (!line.disposed) yield line;
    }
  }

  /// Iterates through all the faces in the shape.
  Iterable<Face> get _faceIteratable sync* {
    for (Face face in this._faces) {
      if (!face.disposed) yield face;
    }
  }

  /// Gets all the vertices into a list.
  List<Vertex> _toVertexList(bool growable) => this._vertices.toList(growable: growable);

  /// Gets all the points into a list.
  List<Point> _toPointList(bool growable) => this._points.toList(growable: growable);

  /// Gets all the lines into a list.
  List<Line> _toLineList(bool growable) => this._lines.toList(growable: growable);

  /// Gets all the faces into a list.
  List<Face> _toFaceList(bool growable) => this._faces.toList(growable: growable);
  
  /// Gets an iterable which steps through all of the vertices in the given region.
  Iterable<Vertex> _vertexIterableInRegion(Math.Region3 region) sync* {
    for (Vertex vertex in this._vertices) {
      if ((vertex.shape == this._shape) && (region.contains(vertex.location))) yield vertex;
    }
  }

  /// Validates the data.
  void _validate(Debug.Logger log, Shape shape) {
    if (!identical(shape, this._shape))
      log.error("Shape of the list data does not match expected shape.\n");
    if (!identical(shape._data, this))
      log.error("Shape data of the shape is not this list data.\n");
    if (!identical(shape._octree, null))
      log.error("Octree of the shape is not null for a list data.\n");

    for (int i = 0; i < this._vertices.length; i++) {
      Vertex vertex = this._vertices[i];
      if (vertex == null) log.error("Vertex $i in leaf node in null.\n");
      else vertex._validate(log, this._shape, null);
      for (int j = 0; j < i; j++) {
        if (identical(this._vertices[j], vertex))
          log.error("The vertices $i and $j in leaf node are the same.\n");
      }
    }

    // TODO: Need to check the lines and faces.
  }
}
