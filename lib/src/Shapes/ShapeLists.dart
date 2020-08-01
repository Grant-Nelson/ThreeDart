part of ThreeDart.Shapes;

/// An interface for the data for a shape.
/// The data is either stored in a list or octree. 
class ShapeLists extends ShapeData {
  final Shape _shape;

  List<Vertex> _vertices;
  List<Point> _points;
  List<Line> _lines;
  List<Face> _faces;

  ShapeLists._(Shape this._shape): super._() {
    this._vertices = List<Vertex>();
    this._points   = List<Point>();
    this._lines    = List<Line>();
    this._faces    = List<Face>();
    this._populate();
  }

  void _populate() {
    ShapeData data = this._shape._data;
    if (data == null) return;

    this._vertices = data._toVertexList(false);
    this._points   = data._toPointList(false);
    this._lines    = data._toLineList(false);
    this._faces    = data._toFaceList(false);

    this._shape._vertexIndicesNeedUpdate = true;
  }

  void _addVertex(Vertex vertex) {
    vertex._index = this._vertexCount;
    vertex._leaf  = null;
    vertex._shape = this._shape;
    this._vertices.add(vertex);
  }
  
  void _addPoint(Point pnt) => this._points.add(pnt);
  
  void _addLine(Line line) => this._lines.add(line);
  
  void _addFace(Face face) => this._faces.add(face);

  void _removeVertex(Vertex vertex) {
    this._vertices.remove(vertex);
    vertex._leaf  = null;
    vertex._shape = null;
    vertex._index = -1;
  }

  void _removePoint(Point pnt) => this._points.remove(pnt);

  void _removeLine(Line line) => this._lines.remove(line);

  void _removeFace(Face face) => this._faces.remove(face);

  int get _vertexCount => this._vertices.length;

  int get _pointCount => this._points.length;

  int get _lineCount => this._lines.length;

  int get _faceCount => this._faces.length;

  Iterable<Vertex> get _vertexIteratable sync* {
    for (Vertex vertex in this._vertices) {
      if (vertex.shape == this._shape) yield vertex;
    }
  }

  Iterable<Point> get _pointIteratable sync* {
    for (Point point in this._points) {
      if (!point.disposed) yield point;
    }
  }

  Iterable<Line> get _lineIteratable sync* {
    for (Line line in this._lines) {
      if (!line.disposed) yield line;
    }
  }

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

  void _validate(Debug.Logger log, Shape shape) {
    // TODO: Implement
  }
}
