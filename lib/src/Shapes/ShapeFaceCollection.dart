part of ThreeDart.Shapes;

class ShapeFaceCollection {
  Shape _shape;
  List<Face> _faces;

  ShapeFaceCollection._(Shape this._shape) {
    this._faces = new List<Face>();
  }

  Shape get shape => this._shape;

  Face add(Vertex ver1, Vertex ver2, Vertex ver3) {
    this._shape._vertices.add(ver1);
    this._shape._vertices.add(ver2);
    this._shape._vertices.add(ver3);
    return new Face(ver1, ver2, ver3);
  }

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

  List<Face> addTriangles(List<Vertex> vertices) {
    List<Face> faces = new List<Face>();
    final int count = vertices.length;
    for (int i = 2; i < count; i += 3)
      faces.add(this.add(vertices[i-2], vertices[i-1], vertices[i]));
    return faces;
  }

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

  bool get isEmpty => this._faces.isEmpty;
  int get length => this._faces.length;
  Face operator[](int index) => this._faces[index];
  int indexOf(Face face) => this._faces.indexOf(face);
  void forEach(void funcHndl(Face face)) => this._faces.forEach(funcHndl);

  Face removeAt(int index) {
    Face face = this[index];
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
    for (int i = this._faces.length-1; i >= 0; --i) {
      Face faceA = this._faces[i];
      if (faceA != null) {
        for (int j = i - 1; j >= 0; --j) {
          Face faceB = this._faces[j];
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
    for (int i = this._faces.length-1; i >= 0; --i) {
      Face face = this._faces[i];
      if ((face == null) || face.collapsed) face.dispose();
    }
  }

  bool calculateNormals() {
    bool success = true;
    for (Face face in this._faces) {
      if (!face.calculateNormal()) success = false;
    }
    return success;
  }

  bool calculateBinormals() {
    bool success = true;
    for (Face face in this._faces) {
      if (!face.calculateBinormal()) success = false;
    }
    return success;
  }

  String toString([String indent = ""]) {
    List<String> parts = new List<String>();
    for (Face face in this._faces) {
      parts.add(face.toString(indent));
    }
    return parts.join('\n');
  }
}
