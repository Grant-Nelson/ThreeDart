part of ThreeDart.Shapes;

/// A collection of faces for a shape.
class ShapeFaceCollection {
  final Shape _shape;

  /// Creates a new shape's face collection for the given shape.
  ShapeFaceCollection._(Shape this._shape);

  /// The shape which owns this collection.
  Shape get shape => this._shape;

  /// Adds a single new face with the given vertices to the shape.
  Face add(Vertex ver1, Vertex ver2, Vertex ver3) {
    ShapeVertexCollection vcol = this._shape.vertices;
    vcol.add(ver1);
    vcol.add(ver2);
    vcol.add(ver3);
    Face face = new Face(ver1, ver2, ver3);
    return face;
  }

  /// Adds a fan of faces with the given vertices to the shape.
  List<Face> addFan(List<Vertex> vertices) {
    List<Face> faces = new List<Face>();
    final int count = vertices.length;
    if (count > 0) {
      Vertex ver0 = vertices[0];
      for (int i = 2; i < count; i++)
        faces.add(this.add(ver0, vertices[i-1], vertices[i]));
    }
    return faces;
  }

  /// Adds a strip of faces with the given vertices to the shape.
  List<Face> addStrip(List<Vertex> vertices) {
    List<Face> faces = new List<Face>();
    final int count = vertices.length;
    bool flip = false;
    for (int i = 2; i < count; i++) {
      if (flip) {
        faces.add(this.add(vertices[i-2], vertices[i-1], vertices[i]));
        flip = false;
      } else {
        faces.add(this.add(vertices[i-1], vertices[i-2], vertices[i]));
        flip = true;
      }
    }
    return faces;
  }

  /// Adds a looped strip of faces with the given vertices to the shape.
  List<Face> addLoop(List<Vertex> vertices) {
    List<Face> faces = new List<Face>();
    final int count = vertices.length;
    bool flip = false;
    for (int i = 2; i < count+2; i++) {
      int j = i % count;
      if (flip) {
        faces.add(this.add(vertices[j-2], vertices[j-1], vertices[j]));
        flip = false;
      } else {
        faces.add(this.add(vertices[j-1], vertices[j-2], vertices[j]));
        flip = true;
      }
    }
    return faces;
  }

  /// Adds a set of separate faces with the given vertices to the shape.
  List<Face> addTriangles(List<Vertex> vertices) {
    List<Face> faces = new List<Face>();
    final int count = vertices.length;
    for (int i = 2; i < count; i += 3)
      faces.add(this.add(vertices[i-2], vertices[i-1], vertices[i]));
    return faces;
  }

  /// Adds a grid to the of faces with the given rows and columns of vertices to the shape.
  List<Face> addGrid(int rows, int columns, List<Vertex> vertices) {
    List<Face> faces = new List<Face>();
    int k0 = 0, k1 = columns;
    bool flipA = false;
    for (int i = 1; i < rows; ++i, ++k0, ++k1) {
      bool flipB = flipA;
      for (int j = 1; j < columns; ++j, ++k0, ++k1) {
        Vertex ver0 = vertices[k0];
        Vertex ver1 = vertices[k0+1];
        Vertex ver2 = vertices[k1+1];
        Vertex ver3 = vertices[k1];
        if (flipB) {
          faces.add(this.add(ver0, ver1, ver2));
          faces.add(this.add(ver0, ver2, ver3));
        } else {
          faces.add(this.add(ver1, ver2, ver3));
          faces.add(this.add(ver1, ver3, ver0));
        }
        flipB = !flipB;
      }
      flipA = !flipA;
    }
    return faces;
  }

  /// Determines if the shape contains any faces or not.
  bool get isEmpty => this.length <= 0;

  /// The number of faces in the shape.
  int get length => this._shape._data._faceCount;

  /// Gets an iterable which steps through all of the faces in the collection.
  Iterable<Face> get iterable =>
    this._shape._data._faceIteratable;

  /// Removes the given [face].
  /// Returns true if face was removed, false otherwise.
  bool remove(Face face) {
    if (face == null) return false;
    if (face._ver1.shape != this.shape) return false;
    face.dispose();
    return true;
  }

  /// Removes all faces which match each other based on the given matcher.
  void removeRepeats([FaceMatcher matcher = null]) {
    matcher ??= new ExactFaceMatcher();
    Iterator<Face> facesA = this.iterable.iterator;
    while (facesA.moveNext()) {
      Face faceA = facesA.current;
      if (!faceA.disposed) {
        Iterator<Face> facesB = this.iterable.skipWhile((Face faceB) => faceB != faceA).iterator;
        facesB.moveNext(); // step over faceA
        while (facesB.moveNext()) {
          Face faceB = facesB.current;
          if (!faceB.disposed) {
            if (matcher.matches(faceA, faceB)) {
              faceA.dispose();
              break;
            }
          }
        }
      }
    }
  }

  /// Removes all faces which match each other based
  /// on the given matcher and share a vertex.
  void removeVertexRepeats([FaceMatcher matcher = null]) {
    matcher ??= new ExactFaceMatcher();
    for (Vertex ver in this._shape.vertices.iterable) {
      ver.faces.removeRepeats(matcher);
    }
  }

  /// Removes all the collapsed faces.
  void removeCollapsed() {
    for (Vertex ver in this._shape.vertices.iterable)
      ver.faces.removeCollapsed();
  }

  /// Removes all faces.
  void removeAll() {
    for (Vertex ver in this._shape.vertices.iterable)
      ver.faces.removeAll();
  }

  /// Calculates the normals for all the faces in the shape.
  /// Returns true if faces' normals are calculated, false on error.
  bool calculateNormals() {
    bool success = true;
    for (Face face in this.iterable) {
      if (!face.calculateNormal()) success = false;
    }
    return success;
  }

  /// Calculates the binormals for all the faces in the shape.
  /// Returns true if faces' binormals are calculated, false on error.
  bool calculateBinormals() {
    bool success = true;
    for (Face face in this.iterable) {
      if (!face.calculateBinormal()) success = false;
    }
    return success;
  }

  /// Flips all the faces in the shape.
  void flip() {
    for (Face face in this.iterable) face.flip();
  }
  
  /// Gets all the faces into a list. This is slightly faster than
  /// using the iterator because we already know the number of faces.
  List<Face> toList({bool growable: true}) =>
    this._shape._data._toFaceList(growable);

  /// Gets to string for all the faces.
  String toString() => this.format();

  /// Gets the formatted string for this faces with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = new List<String>();
    int index = 0;
    for (Face face in this.iterable) {
      parts.add(face.format(indent+"$index. "));
      ++index;
    }
    return parts.join('\n');
  }
}
