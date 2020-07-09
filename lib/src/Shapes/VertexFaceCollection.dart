part of ThreeDart.Shapes;

/// A collection of faces for a vertex.
class VertexFaceCollection {
  final Vertex _vertex;

  /// Creates a new vertex's face collection for the given vertex.
  VertexFaceCollection._(Vertex this._vertex);

  /// The vertex which owns this collection.
  Vertex get vertex => this._vertex;

  /// The shape which owns the vertex which owns this collection.
  Shape get shape => this._vertex._shape;

  /// Determines if the vertex contains any faces or not.
  bool get isEmpty => this.length <= 0;

  /// The number of faces in the vertex.
  int get length => this.length1 + this.length2 + this.length3;

  /// The number of faces which use this vertex as the faces' first vertex.
  int get length1 => this._vertex._faces1.length;

    /// The number of faces which use this vertex as the faces' second vertex.
  int get length2 => this._vertex._faces2.length;

    /// The number of faces which use this vertex as the faces' third vertex.
  int get length3 => this._vertex._faces3.length;

  /// Runs the given function handler for every face in the vertex.
  void forEach(void funcHndl(Face face)) {
    this._vertex._faces1.forEach(funcHndl);
    this._vertex._faces2.forEach((Face face) {
      if (face.vertex1 != this) funcHndl(face);
    });
    this._vertex._faces3.forEach((Face face) {
      if ((face.vertex1 != this) && (face.vertex2 != this)) funcHndl(face);
    });
  }

  /// Runs the given function handler for every face in the vertex
  /// which has this vertex as their first vertex.
  void forEach1(void funcHndl(Face face)) => this._vertex._faces1.forEach(funcHndl);

  /// Runs the given function handler for every face in the vertex
  /// which has this vertex as their second vertex.
  void forEach2(void funcHndl(Face face)) => this._vertex._faces2.forEach(funcHndl);

  /// Runs the given function handler for every face in the vertex
  /// which has this vertex as their third vertex.
  void forEach3(void funcHndl(Face face)) => this._vertex._faces3.forEach(funcHndl);

  /// Removes the given [face].
  /// Returns true if face was removed, false otherwise.
  bool remove(Face face) {
    if (face == null) return false;
    if (face._ver1._shape != this.shape) return false;
    face.dispose();
    return true;
  }

  /// Removes all faces which match each other based on the given matcher.
  void removeRepeats(FaceMatcher matcher) {
    for (int i = this._vertex._faces1.length-1; i >= 0; --i) {
      Face faceA = this._vertex._faces1[i];
      if (faceA != null) {
        for (int j = i - 1; j >= 0; --j) {
          Face faceB = this._vertex._faces1[j];
          if (faceB != null) {
            if (matcher.matches(faceA, faceB)) {
              faceA.dispose();
              break;
            }
          }
        }
      }
    }
  }

  /// Removes all the collapsed faces.
  void removeCollapsed() {
    for (int i = this._vertex._faces1.length-1; i >= 0; --i) {
      Face face = this._vertex._faces1[i];
      if ((face == null) || face.collapsed) face.dispose();
    }
    for (int i = this._vertex._faces2.length-1; i >= 0; --i) {
      Face face = this._vertex._faces2[i];
      if ((face == null) || face.collapsed) face.dispose();
    }
    // No need to do [_faces3] because two be collapsed
    // it must have more than one point in the same vertex.
  }

  /// Removes all faces using this vertex.
  void removeAll() {
    for (int i = this._vertex._faces1.length-1; i >= 0; --i) {
      this._vertex._faces1[i]?.dispose();
    }
    this._vertex._faces1.clear();
    for (int i = this._vertex._faces2.length-1; i >= 0; --i) {
      this._vertex._faces2[i]?.dispose();
    }
    this._vertex._faces2.clear();
    for (int i = this._vertex._faces3.length-1; i >= 0; --i) {
      this._vertex._faces3[i]?.dispose();
    }
    this._vertex._faces3.clear();
  }

  /// Calculates the normals for all the faces in the vertex.
  /// Returns true if faces' normals are calculated, false on error.
  bool calculateNormals() {
    bool success = true;
    for (Face face in this._vertex._faces1) {
      if (!face.calculateNormal()) success = false;
    }
    for (Face face in this._vertex._faces2) {
      if (!face.calculateNormal()) success = false;
    }
    for (Face face in this._vertex._faces3) {
      if (!face.calculateNormal()) success = false;
    }
    return success;
  }

  /// Calculates the binormals for all the faces in the vertex.
  /// Returns true if faces' binormals are calculated, false on error.
  bool calculateBinormals() {
    bool success = true;
    for (Face face in this._vertex._faces1) {
      if (!face.calculateBinormal()) success = false;
    }
    for (Face face in this._vertex._faces2) {
      if (!face.calculateBinormal()) success = false;
    }
    for (Face face in this._vertex._faces3) {
      if (!face.calculateBinormal()) success = false;
    }
    return success;
  }

  /// Flips all the faces in the vertex.
  void flip() {
    this.forEach((Face face) {
      face.flip();
    });
  }

  /// Gets to string for all the faces.
  String toString() => this.format();

  /// Gets the formatted string for all the faces with and optional [indent].
  String format([String indent = ""]) {
    List<String> parts = new List<String>();
    for (Face face in this._vertex._faces1) {
      parts.add(face.format(indent));
    }
    for (Face face in this._vertex._faces2) {
      parts.add(face.format(indent));
    }
    for (Face face in this._vertex._faces3) {
      parts.add(face.format(indent));
    }
    return parts.join('\n');
  }
}
