part of ThreeDart.Shapes;

/// A collection of faces for a vertex.
class VertexFaceCollection {
  Vertex _vertex;
  List<Face> _faces1 = [];
  List<Face> _faces2 = [];
  List<Face> _faces3 = [];

  /// Creates a new vertex's face collection for the given vertex.
  VertexFaceCollection._(this._vertex);

  /// The vertex which owns this collection.
  Vertex get vertex => this._vertex;

  /// The shape which owns the vertex which owns this collection.
  Shape? get shape => this._vertex.shape;

  /// Determines if the vertex contains any faces or not.
  bool get isEmpty => this._faces1.isEmpty && this._faces2.isEmpty && this._faces3.isEmpty;

  /// The number of faces in the vertex.
  int get length => this._faces1.length + this._faces2.length + this._faces3.length;

  /// The number of faces which use this vertex as the faces' first vertex.
  int get length1 => this._faces1.length;

    /// The number of faces which use this vertex as the faces' second vertex.
  int get length2 => this._faces2.length;

    /// The number of faces which use this vertex as the faces' third vertex.
  int get length3 => this._faces3.length;

  /// Gets the face at the given [index].
  Face operator[](int index) {
    final int len1 = this._faces1.length;
    if (index < len1) return this._faces1[index];
    index -= len1;
    final int len2 = this._faces2.length;
    if (index < len2) return this._faces2[index];
    index -= len2;
    return this._faces3[index];
  }

  /// Gets face with the given [index] from list
  /// of the faces with this vertex as their first vertex.
  Face at1(int index) => this._faces1[index];

  /// Gets face with the given [index] from list
  /// of the faces with this vertex as their second vertex.
  Face at2(int index) => this._faces2[index];

  /// Gets face with the given [index] from list
  /// of the faces with this vertex as their third vertex.
  Face at3(int index) => this._faces3[index];

  /// Gets the index of the given [face].
  int indexOf(Face face) {
    int index = this._faces1.indexOf(face);
    if (index >= 0) return index;
    index = this._faces2.indexOf(face);
    if (index >= 0) return index + this._faces1.length;
    index = this._faces3.indexOf(face);
    if (index >= 0) return index + this._faces1.length + this._faces2.length;
    return -1;
  }

  /// Gets the index of the given [face] in the list
  /// of the faces with this vertex as their first vertex.
  /// -1 is returned if the face isn't found.
  int indexOf1(Face face) => this._faces1.indexOf(face);

  /// Gets the index of the given [face] in the list
  /// of the faces with this vertex as their second vertex.
  /// -1 is returned if the face isn't found.
  int indexOf2(Face face) => this._faces2.indexOf(face);

  /// Gets the index of the given [face] in the list
  /// of the faces with this vertex as their third vertex.
  /// -1 is returned if the face isn't found.
  int indexOf3(Face face) => this._faces3.indexOf(face);

  /// Runs the given function handler for every face in the vertex.
  void forEach(void funcHndl(Face face)) {
    this._faces1.forEach(funcHndl);
    this._faces2.forEach((Face face) {
      if (face.vertex1 != this) funcHndl(face);
    });
    this._faces3.forEach((Face face) {
      if ((face.vertex1 != this) && (face.vertex2 != this)) funcHndl(face);
    });
  }

  /// Runs the given function handler for every face in the vertex
  /// which has this vertex as their first vertex.
  void forEach1(void funcHndl(Face face)) => this._faces1.forEach(funcHndl);

  /// Runs the given function handler for every face in the vertex
  /// which has this vertex as their second vertex.
  void forEach2(void funcHndl(Face face)) => this._faces2.forEach(funcHndl);

  /// Runs the given function handler for every face in the vertex
  /// which has this vertex as their third vertex.
  void forEach3(void funcHndl(Face face)) => this._faces3.forEach(funcHndl);

  /// Removes the face with at the given index.
  /// The removed face is disposed and returned or null if none removed.
  Face removeAt(int index) {
    Face face = this[index];
    face.dispose();
    return face;
  }

  /// Removes the face with at the given index of the face from
  /// the list of the faces with this vertex as their first vertex.
  /// The removed face is disposed and returned or null if none removed.
  Face removeAt1(int index) {
    Face face = this._faces1[index];
    face.dispose();
    return face;
  }

  /// Removes the face with at the given index of the face from
  /// the list of the faces with this vertex as their second vertex.
  /// The removed face is disposed and returned or null if none removed.
  Face removeAt2(int index) {
    Face face = this._faces2[index];
    face.dispose();
    return face;
  }

  /// Removes the face with at the given index of the face from
  /// the list of the faces with this vertex as their third vertex.
  /// The removed face is disposed and returned or null if none removed.
  Face removeAt3(int index) {
    Face face = this._faces3[index];
    face.dispose();
    return face;
  }

  /// Removes the given [face].
  /// Returns true if face was removed, false otherwise.
  bool remove(Face? face) {
    if (face == null) return false;
    if (face._ver1?.shape != this.shape) return false;
    face.dispose();
    return true;
  }

  /// Removes all faces which match each other based on the given matcher.
  void removeRepeats(FaceMatcher matcher) {
    for (int i = this._faces1.length-1; i >= 0; --i) {
      Face faceA = this._faces1[i];
      for (int j = i - 1; j >= 0; --j) {
        Face faceB = this._faces1[j];
        if (matcher.matches(faceA, faceB)) {
          faceA.dispose();
          break;
        }
      }
    }
  }

  /// Removes all the collapsed faces.
  void removeCollapsed() {
    for (int i = this._faces1.length-1; i >= 0; --i) {
      Face face = this._faces1[i];
      if (face.collapsed) face.dispose();
    }
    for (int i = this._faces2.length-1; i >= 0; --i) {
      Face face = this._faces2[i];
      if (face.collapsed) face.dispose();
    }
    // No need to do [_faces3] because two be collapsed
    // it must have more than one point in the same vertex.
  }

  /// Removes all faces using this vertex.
  void removeAll() {
    for (int i = this._faces1.length-1; i >= 0; --i) {
      this._faces1[i].dispose();
    }
    this._faces1.clear();
    for (int i = this._faces2.length-1; i >= 0; --i) {
      this._faces2[i].dispose();
    }
    this._faces2.clear();
    for (int i = this._faces3.length-1; i >= 0; --i) {
      this._faces3[i].dispose();
    }
    this._faces3.clear();
  }

  /// Calculates the normals for all the faces in the vertex.
  /// Returns true if faces' normals are calculated, false on error.
  bool calculateNormals() {
    bool success = true;
    for (Face face in this._faces1) {
      if (!face.calculateNormal()) success = false;
    }
    for (Face face in this._faces2) {
      if (!face.calculateNormal()) success = false;
    }
    for (Face face in this._faces3) {
      if (!face.calculateNormal()) success = false;
    }
    return success;
  }

  /// Calculates the binormals for all the faces in the vertex.
  /// Returns true if faces' binormals are calculated, false on error.
  bool calculateBinormals() {
    bool success = true;
    for (Face face in this._faces1) {
      if (!face.calculateBinormal()) success = false;
    }
    for (Face face in this._faces2) {
      if (!face.calculateBinormal()) success = false;
    }
    for (Face face in this._faces3) {
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
    List<String> parts = [];
    for (Face face in this._faces1) {
      parts.add(face.format(indent));
    }
    for (Face face in this._faces2) {
      parts.add(face.format(indent));
    }
    for (Face face in this._faces3) {
      parts.add(face.format(indent));
    }
    return parts.join('\n');
  }
}
