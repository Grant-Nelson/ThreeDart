part of ThreeDart.Shapes;

class VertexCollection {
  Shape _shape;
  bool _indicesNeedUpdate;
  List<Vertex> _vertices;

  VertexCollection._(Shape this._shape) {
    this._indicesNeedUpdate = false;
    this._vertices = new List<Vertex>();
  }

  void _updateIndices() {
    if (this._indicesNeedUpdate) {
      int index = 0;
      int count = this._vertices.length;
      for(int i = 0; i < count; ++i) {
        Vertex ver = this._vertices[i];
        if (ver == null) {
          this._vertices.removeAt(i);
          --count;
        } else {
          ver._index = index;
          ++index;
        }
      }
      this._indicesNeedUpdate = false;
    }
  }

  bool add(Vertex vertex) {
    if (vertex.shape != null) {
      if (vertex.shape == this._shape) return false;
      throw new Exception("May not add a vertex already attached to another shape to this shape.");
    }
    vertex._index = this._vertices.length;
    vertex._shape = this._shape;
    this._vertices.add(vertex);
    this._shape.onVertexAdded(vertex);
    return true;
  }

  Vertex addNew({Math.Point3 loc: null, Math.Vector3 norm: null, Math.Vector3 binm: null,
                 Math.Point2 txt: null, Math.Color4 clr: null, double weight: 0.0}) {
    Vertex ver = new Vertex(loc: loc, norm: norm, binm: binm, txt: txt, clr: clr, weight: weight);
    this.add(ver);
    return ver;
  }

  Vertex addPoint(double locX, double locY, double locZ) {
    Vertex ver = new Vertex(loc: new Math.Point3(locX, locY, locZ));
    this.add(ver);
    return ver;
  }

  void addList(List<Vertex> verList) {
    for (Vertex ver in verList) {
      this.add(ver);
    }
  }

  bool get isEmpty => this._vertices.isEmpty;
  int get length => this._vertices.length;
  Vertex operator[](int index) => this._vertices[index];
  int indexOf(Vertex vertex) => this._vertices.indexOf(vertex);
  void forEach(void funcHndl(Vertex vertex)) => this._vertices.forEach(funcHndl);

  Vertex removeAt(int index) {
    Vertex vertex = this._vertices[index];
    if (vertex != null) {
      if (!vertex.isEmpty)
        throw new Exception("May not remove a vertex without first making it empty.");
      vertex._shape = null;
    }
    this._vertices.removeAt(index);
    this._shape.onVertexRemoved(vertex);
    this._indicesNeedUpdate = true;
    return vertex;
  }

  bool remove(Vertex vertex) {
    if (vertex == null) return false;
    if (vertex._shape != this._shape) return false;
    if (!vertex.isEmpty)
      throw new Exception("May not remove a vertex without first making it empty.");
    vertex._shape = null;
    this._vertices.remove(vertex);
    this._shape.onVertexRemoved(vertex);
    this._indicesNeedUpdate = true;
    return true;
  }

  bool calculateNormals() {
    bool success = true;
    for (Vertex vertex in this._vertices) {
      if (!vertex.calculateNormal()) success = false;
    }
    return success;
  }

  bool calculateBinormals() {
    bool success = true;
    for (Vertex vertex in this._vertices) {
      if (!vertex.calculateBinormal()) success = false;
    }
    return success;
  }

  String toString([String indent = ""]) {
    this._updateIndices();
    List<String> parts = new List<String>();
    for (Vertex vertex in this._vertices) {
      parts.add(vertex.toString(indent));
    }
    return parts.join('\n');
  }
}
