part of ThreeDart.Shapes;

/// An interface for the data for a shape.
/// The data is either stored in a list or octree. 
abstract class ShapeData {

  ShapeData._();

  void _addVertex(Vertex ver);
  
  void _addPoint(Point pnt);
  
  void _addLine(Line line);
  
  void _addFace(Face face);

  void _removeVertex(Vertex ver);

  void _removePoint(Point pnt);

  void _removeLine(Line line);

  void _removeFace(Face face);

  int get _vertexCount;

  int get _pointCount;

  int get _lineCount;

  int get _faceCount;

  Iterable<Vertex> get _vertexIteratable;

  Iterable<Point> get _pointIteratable;

  Iterable<Line> get _lineIteratable;

  Iterable<Face> get _faceIteratable;

  /// Gets all the vertices into a list.
  List<Vertex> _toVertexList(bool growable);

  /// Gets all the points into a list.
  List<Point> _toPointList(bool growable);

  /// Gets all the lines into a list.
  List<Line> _toLineList(bool growable);

  /// Gets all the faces into a list.
  List<Face> _toFaceList(bool growable);
  
  /// Gets an iterable which steps through all of the vertices in the given region.
  Iterable<Vertex> _vertexIterableInRegion(Math.Region3 region);

  void _validate(Debug.Logger log, Shape shape);
}
