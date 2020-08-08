part of ThreeDart.Shapes;

/// An interface for the data for a shape.
/// The data is either stored in a list or octree. 
abstract class ShapeData {

  /// Prevents this from being contructed outside of Shapes.
  ShapeData._();

  /// Adds a vertex to the shape's data.
  void _addVertex(Vertex ver);
  
  /// Adds a point to the shape's data.
  void _addPoint(Point pnt);
  
  /// Adds a line to the shape's data.
  void _addLine(Line line);
  
  /// Adds a face to the shape's data.
  void _addFace(Face face);

  /// Removes a vertex from the shape's data.
  void _removeVertex(Vertex ver);

  /// Removes a point from the shape's data.
  void _removePoint(Point pnt);

  /// Removes a line from the shape's data.
  void _removeLine(Line line);

  /// Removes a face from the shape's data.
  void _removeFace(Face face);

  /// Gets the number of vertices in the data.
  int get _vertexCount;

  /// Gets the number of points in the data.
  int get _pointCount;

  /// Gets the number of lines in the data.
  int get _lineCount;

  /// Gets the number of faces in the data.
  int get _faceCount;

  /// Iterates through all the vertices in the shape.
  Iterable<Vertex> get _vertexIteratable;

  /// Iterates through all the points in the shape.
  Iterable<Point> get _pointIteratable;

  /// Iterates through all the lines in the shape.
  Iterable<Line> get _lineIteratable;

  /// Iterates through all the faces in the shape.
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
}
