part of ThreeDart.Techniques;

class Inspection extends Technique {

  Shaders.Inspection _shader;
  Math.Vector3 _lightVec;
  Math.Color3 _diffuse1;
  Math.Color3 _ambient1;
  Math.Color3 _diffuse2;
  Math.Color3 _ambient2;
  Math.Color3 _diffuse3;
  Math.Color3 _ambient3;

  bool _showFilled;
  bool _showWireFrame;
  bool _showVertices;
  bool _showNormals;
  bool _showBinormals;
  bool _showFaceNormals;
  bool _showFaceBinormals;

  Inspection() {
    this._shader = null;
    this._lightVec = new Math.Vector3(0.0, 0.0, -1.0);
    this._diffuse1 = new Math.Color3(0.1, 0.2, 0.3);
    this._ambient1 = new Math.Color3(0.1, 0.2, 0.3);
    this._diffuse2 = new Math.Color3(0.5, 0.5, 0.5);
    this._ambient2 = new Math.Color3(0.5, 0.5, 0.5);
    this._diffuse3 = new Math.Color3(0.3, 0.3, 0.3);
    this._ambient3 = new Math.Color3(0.7, 0.7, 0.7);

    this._showFilled = true;
    this._showWireFrame = true;
    this._showVertices = true;
    this._showNormals = false;
    this._showBinormals = false;
    this._showFaceNormals = false;
    this._showFaceBinormals = true;
  }

  Data.BufferStore _buildShape(Core.RenderState state, Shapes.Shape shape) {
    Data.BufferStore store = shape.build(state.gl,
      Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Clr3);
    return store
      ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc
      ..findAttribute(Data.VertexType.Norm).attr = this._shader.normAttr.loc
      ..findAttribute(Data.VertexType.Clr3).attr = this._shader.clrAttr.loc;
  }

  void render(Core.RenderState state, Core.Object obj) {
    if (this._shader == null)
      this._shader = new Shaders.Inspection.cached(state);

    if (obj.cacheNeedsUpdate) {
      obj.shape.calculateNormals();
      obj.shape.calculateBinormals();
      Data.BufferStore shapeFill = this._buildShape(state, obj.shape);
      Data.BufferStore wireFrame = this._buildShape(state, this._wireFrame(obj.shape));
      Data.BufferStore vertices = this._buildShape(state, this._vertices(obj.shape));
      Data.BufferStore normals = this._buildShape(state, this._normals(obj.shape));
      Data.BufferStore binormals = this._buildShape(state, this._binormals(obj.shape));
      Data.BufferStore faceNormals = this._buildShape(state, this._faceNormals(obj.shape));
      Data.BufferStore faceBinormals = this._buildShape(state, this._faceBinormals(obj.shape));

      obj.cache =  new Data.BufferStoreList()
        ..list.add(shapeFill) // 0
        ..list.add(wireFrame) // 1
        ..list.add(vertices) // 2
        ..list.add(normals) // 3
        ..list.add(binormals) // 4
        ..list.add(faceNormals) // 5
        ..list.add(faceBinormals); // 6
    }

    this._shader
      ..bind(state)
      ..lightVector = this._lightVec
      ..projectMatrix = state.projection.matrix
      ..viewMatrix = state.view.matrix
      ..objectMatrix = state.object.matrix;

    if (obj.cache is Data.BufferStoreList) {
      Data.BufferStoreList store = obj.cache as Data.BufferStoreList;
      if (this._showFilled) {
        this._shader.setColors(this._ambient1, this._diffuse1);
        store.list[0].oneRender(state); // shapeFill
      }
      state.gl.disable(WebGL.DEPTH_TEST);
      state.gl.enable(WebGL.BLEND);
      if (this._showWireFrame) {
        this._shader.setColors(this._ambient2, this._diffuse2);
        store.list[1].oneRender(state); // wireFrame
      }
      if (this._showVertices) {
        this._shader.setColors(this._ambient2, this._diffuse2);
        store.list[2].oneRender(state); // vertices
      }
      if (this._showNormals) {
        this._shader.setColors(this._ambient2, this._diffuse2);
        store.list[3].oneRender(state); // normals
      }
      if (this._showBinormals) {
        this._shader.setColors(this._ambient2, this._diffuse2);
        store.list[4].oneRender(state); // binormals
      }
      if (this._showFaceNormals) {
        this._shader.setColors(this._ambient2, this._diffuse2);
        store.list[5].oneRender(state); // faceNormals
      }
      if (this._showFaceBinormals) {
        this._shader.setColors(this._ambient3, this._diffuse3);
        store.list[6].oneRender(state); // faceBinormals
      }




      state.gl.enable(WebGL.DEPTH_TEST);
      state.gl.disable(WebGL.BLEND);
    } else obj.clearCache();

    this._shader.unbind(state);
  }

  Shapes.Shape _wireFrame(Shapes.Shape shape) {
    shape.updateIndices();
    Shapes.Shape result = new Shapes.Shape();
    for (Shapes.Vertex vertex in shape.vertices) {
      result.vertices.add(vertex.copy()
        ..color = new Math.Color4.white());
    }
    result.updateIndices();
    for (Shapes.Line line in shape.lines) {
      Shapes.Vertex ver1 = result.vertices[line.vertex1.index];
      Shapes.Vertex ver2 = result.vertices[line.vertex2.index];
      result.lines.add(new Shapes.Line(ver1, ver2));
    }
    for (Shapes.Face face in shape.faces) {
      Shapes.Vertex ver1 = result.vertices[face.vertex1.index];
      Shapes.Vertex ver2 = result.vertices[face.vertex2.index];
      Shapes.Vertex ver3 = result.vertices[face.vertex3.index];
      result.lines.add(new Shapes.Line(ver1, ver2));
      result.lines.add(new Shapes.Line(ver2, ver3));
      result.lines.add(new Shapes.Line(ver3, ver1));
    }
    result.joinSeams();
    return result;
  }

  Shapes.Shape _vertices(Shapes.Shape shape) {
    shape.updateIndices();
    Shapes.Shape result = new Shapes.Shape();
    for (Shapes.Vertex vertex in shape.vertices) {
      Shapes.Vertex ver = vertex.copy()
        ..color = new Math.Color4.white();
      result.vertices.add(ver);
      result.points.add(ver);
    }
    result.updateIndices();
    result.joinSeams();
    return result;
  }

  Shapes.Shape _normals(Shapes.Shape shape) {
    shape.updateIndices();
    Shapes.Shape result = new Shapes.Shape();
    for (Shapes.Vertex vertex in shape.vertices) {
      Shapes.Vertex ver1 = vertex.copy()
        ..color = new Math.Color4.white();
      Shapes.Vertex ver2 = ver1.copy();
      ver2.location = ver2.location + new Math.Point3.fromVector3(ver2.normal);
      result.vertices.add(ver1);
      result.vertices.add(ver2);
      result.lines.add(new Shapes.Line(ver1, ver2));
    }
    result.updateIndices();
    return result;
  }

  Shapes.Shape _binormals(Shapes.Shape shape) {
    shape.updateIndices();
    Shapes.Shape result = new Shapes.Shape();
    for (Shapes.Vertex vertex in shape.vertices) {
      Shapes.Vertex ver1 = vertex.copy()
        ..color = new Math.Color4.white();
      Shapes.Vertex ver2 = ver1.copy();
      ver2.location = ver2.location + new Math.Point3.fromVector3(ver2.binormal);
      result.vertices.add(ver1);
      result.vertices.add(ver2);
      result.lines.add(new Shapes.Line(ver1, ver2));
    }
    result.updateIndices();
    return result;
  }

  Shapes.Shape _faceNormals(Shapes.Shape shape) {
    shape.updateIndices();
    Shapes.Shape result = new Shapes.Shape();
    for (Shapes.Face face in shape.faces) {
      Shapes.Vertex cen1 = new Shapes.Vertex(
        loc: (face.vertex1.location + face.vertex2.location + face.vertex3.location)/3.0,
        norm: face.normal,
        clr: new Math.Color4.white());

      Shapes.Vertex cen2 = cen1.copy();
      cen2.location = cen2.location + new Math.Point3.fromVector3(cen2.normal);
      result.vertices.add(cen1);
      result.vertices.add(cen2);
      result.lines.add(new Shapes.Line(cen1, cen2));
    }
    result.updateIndices();
    return result;
  }

  Shapes.Shape _faceBinormals(Shapes.Shape shape) {
    shape.updateIndices();
    Shapes.Shape result = new Shapes.Shape();
    for (Shapes.Face face in shape.faces) {
      Shapes.Vertex cen1 = new Shapes.Vertex(
        loc: (face.vertex1.location + face.vertex2.location + face.vertex3.location)/3.0,
        norm: face.binormal,
        clr: new Math.Color4.white());

      Shapes.Vertex cen2 = cen1.copy();
      cen2.location = cen2.location + new Math.Point3.fromVector3(cen2.normal);
      result.vertices.add(cen1);
      result.vertices.add(cen2);
      result.lines.add(new Shapes.Line(cen1, cen2));
    }
    result.updateIndices();
    return result;
  }
}
