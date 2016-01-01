part of ThreeDart.Shapes;

class VertexFaceCollection {
  Vertex _vertex;
  List<Face> _faces1;
  List<Face> _faces2;
  List<Face> _faces3;

  VertexFaceCollection._(Vertex this._vertex) {
    this._faces1 = new List<Face>();
    this._faces2 = new List<Face>();
    this._faces3 = new List<Face>();
  }

  Shape get shape => this._vertex._shape;

  bool get isEmpty => this._faces1.isEmpty && this._faces2.isEmpty && this._faces3.isEmpty;
  int get length => this._faces1.length + this._faces2.length + this._faces3.length;
  int get length1 => this._faces1.length;
  int get length2 => this._faces2.length;
  int get length3 => this._faces3.length;

  Face operator[](int index) {
    final int len1 = this._faces1.length;
    if (index < len1) return this._faces1[index];
    index -= len1;
    final int len2 = this._faces2.length;
    if (index < len2) return this._faces2[index];
    index -= len2;
    return this._faces3[index];
  }

  Face at1(int index) => this._faces1[index];
  Face at2(int index) => this._faces2[index];
  Face at3(int index) => this._faces3[index];

  int indexOf(Face face) {
    int index = this._faces1.indexOf(face);
    if (index >= 0) return index;
    index = this._faces2.indexOf(face);
    if (index >= 0) return index + this._faces1.length;
    index = this._faces3.indexOf(face);
    if (index >= 0) return index + this._faces1.length + this._faces2.length;
    return -1;
  }

  int indexOf1(Face face) => this._faces1.indexOf(face);
  int indexOf2(Face face) => this._faces2.indexOf(face);
  int indexOf3(Face face) => this._faces3.indexOf(face);

  void forEach(void funcHndl(Face face)) {
    this._faces1.forEach(funcHndl);
    this._faces2.forEach(funcHndl);
    this._faces3.forEach(funcHndl);
  }
  void forEach1(void funcHndl(Face face)) => this._faces1.forEach(funcHndl);
  void forEach2(void funcHndl(Face face)) => this._faces2.forEach(funcHndl);
  void forEach3(void funcHndl(Face face)) => this._faces3.forEach(funcHndl);

  Face removeAt(int index) {
    Face face = this[index];
    if (face != null) face.dispose();
    return face;
  }

  Face removeAt1(int index) {
    Face face = this._faces1[index];
    if (face != null) face.dispose();
    return face;
  }

  Face removeAt2(int index) {
    Face face = this._faces2[index];
    if (face != null) face.dispose();
    return face;
  }

  Face removeAt3(int index) {
    Face face = this._faces3[index];
    if (face != null) face.dispose();
    return face;
  }

  bool remove(Face face) {
    if (face == null) return false;
    if (face._ver1._shape != this.shape) return false;
    face.dispose();
    return true;
  }

  void removeRepeats(FaceMatcher matcher) {
    for (int i = this._faces1.length-1; i >= 0; --i) {
      Face faceA = this._faces1[i];
      if (faceA != null) {
        for (int j = i - 1; j >= 0; --j) {
          Face faceB = this._faces1[j];
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

  void removeCollapsed() {
    for (int i = this._faces1.length-1; i >= 0; --i) {
      Face face = this._faces1[i];
      if ((face == null) || face.collapsed) face.dispose();
    }
    for (int i = this._faces2.length-1; i >= 0; --i) {
      Face face = this._faces2[i];
      if ((face == null) || face.collapsed) face.dispose();
    }
    // No need to do [_faces3] because two be collapsed
    // it must have more than one point in the same vertex.
  }

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

  String toString([String indent = ""]) {
    List<String> parts = new List<String>();
    for (Face face in this._faces1) {
      parts.add(face.toString(indent));
    }
    for (Face face in this._faces2) {
      parts.add(face.toString(indent));
    }
    for (Face face in this._faces3) {
      parts.add(face.toString(indent));
    }
    return parts.join('\n');
  }
}
