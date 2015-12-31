part of ThreeDart.Shapes;

class ShapeFaceCollection extends FaceCollection {
  Shape _shape;

  ShapeFaceCollection._(Shape this._shape): super._();

  Shape get shape => this._shape;

  Face add(Vertex ver1, Vertex ver2, Vertex ver3) {
    this._shape._vertices.add(ver1);
    this._shape._vertices.add(ver2);
    this._shape._vertices.add(ver3);
    return new Face(ver1, ver2, ver3);
  }

  List<Face> addFan(List<Vertex> vertices) {
    final int count = vertices.length;
    List<Face> faces = new List<Face>(count-2);
    if (count > 0) {
      Vertex ver0 = vertices[0];
      for (int i = 2; i < count; i++)
        faces.add(this.add(ver0, vertices[i-1], vertices[i]));
    }
    return faces;
  }

  List<Face> addStrip(List<Vertex> vertices) {
    final int count = vertices.length;
    List<Face> faces = new List<Face>(count-2);
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
    final int count = vertices.length;
    List<Face> faces = new List<Face>(count);
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
    final int count = vertices.length;
    List<Face> faces = new List<Face>((count/3).floor());
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
}

class VertexFaceCollection extends FaceCollection {
  Vertex _vertex;

  VertexFaceCollection._(Vertex this._vertex): super._();

  Shape get shape => this._vertex._shape;
}

abstract class FaceCollection {
  List<Face> _faces1;
  List<Face> _faces2;
  List<Face> _faces3;

  FaceCollection._() {
    this._faces1 = new List<Face>();
    this._faces2 = new List<Face>();
    this._faces3 = new List<Face>();
  }

  Shape get shape;

  bool get empty => this.length <= 0;
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
    List<String> parts = new List<String>(this.length);
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
