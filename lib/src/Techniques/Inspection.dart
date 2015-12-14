part of ThreeDart.Techniques;

class Inspection extends Technique {

  Shaders.SolidDirectional _shader;
  Lights.Light _light;
  Materials.Material _material1;
  Materials.Material _material2;

  bool _showFilled;
  bool _showWireFrame;
  bool _showVertices;

  Inspection() {
    this._shader = null;
    this._light = new Lights.Directional(
      color: new Math.Color3.white(),
      direction: new Math.Vector3(0.0, 0.0, -1.0));
    this._material1 = new Materials.Solid(
      diffuse: new Math.Color3(0.1, 0.2, 0.3),
      ambient: new Math.Color3(0.1, 0.2, 0.3));
    this._material2 = new Materials.Solid(
      diffuse: new Math.Color3(0.3, 0.3, 0.3),
      ambient: new Math.Color3(0.7, 0.7, 0.7));
    this._showFilled = true;
    this._showWireFrame = false;
    this._showVertices = true;
  }

  void render(Core.RenderState state, Core.Object obj) {
    if (this._shader == null)
      this._shader = new Shaders.SolidDirectional.cached(state);

    if (obj.cacheNeedsUpdate) {
      Data.BufferStore shapeFill = obj.shape.build(state.gl, Data.VertexType.Pos|Data.VertexType.Norm)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = this._shader.normAttr.loc;

      Data.BufferStore wireFrame = this._wireFrame(obj.shape).build(state.gl, Data.VertexType.Pos|Data.VertexType.Norm)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = this._shader.normAttr.loc;

      Data.BufferStore vertices = this._vertices(obj.shape).build(state.gl, Data.VertexType.Pos|Data.VertexType.Norm)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = this._shader.normAttr.loc;

      obj.cache =  new Data.BufferStoreList()
        ..list.add(shapeFill) // 0
        ..list.add(wireFrame) // 1
        ..list.add(vertices); // 2
    }

    this._shader
      ..bind(state)
      ..setLight(this._light)
      ..projectMatrix = state.projection.matrix
      ..viewMatrix = state.view.matrix
      ..objectMatrix = state.object.matrix;

    if (obj.cache is Data.BufferStoreList) {
      Data.BufferStoreList store = obj.cache as Data.BufferStoreList;
      if (this._showFilled) {
        this._shader.setMaterial(this._material1);
        store.list[0] // shapeFill
          ..bind(state)
          ..render(state)
          ..unbind(state);
      }
      state.gl.disable(WebGL.DEPTH_TEST);
      state.gl.enable(WebGL.BLEND);
      if (this._showWireFrame) {
        this._shader.setMaterial(this._material2);
        store.list[1] // wireFrame
          ..bind(state)
          ..render(state)
          ..unbind(state);
      }
      if (this._showVertices) {
        this._shader.setMaterial(this._material2);
        store.list[2] // vertices
          ..bind(state)
          ..render(state)
          ..unbind(state);
      }




      state.gl.enable(WebGL.DEPTH_TEST);
      state.gl.disable(WebGL.BLEND);
    } else obj.clearCache();

    this._shader.unbind(state);
  }

  Shapes.Shape _wireFrame(Shapes.Shape shape) {
    shape.updateIndices();
    Shapes.Shape wireFrame = new Shapes.Shape();
    for (Shapes.Vertex vertex in shape.vertices) {
      wireFrame.vertices.add(vertex.copy());
    }
    wireFrame.updateIndices();
    for (Shapes.Line line in shape.lines) {
      Shapes.Vertex ver1 = wireFrame.vertices[line.vertex1.index];
      Shapes.Vertex ver2 = wireFrame.vertices[line.vertex2.index];
      wireFrame.lines.add(new Shapes.Line(ver1, ver2));
    }
    for (Shapes.Face face in shape.faces) {
      Shapes.Vertex ver1 = wireFrame.vertices[face.vertex1.index];
      Shapes.Vertex ver2 = wireFrame.vertices[face.vertex2.index];
      Shapes.Vertex ver3 = wireFrame.vertices[face.vertex3.index];
      wireFrame.lines.add(new Shapes.Line(ver1, ver2));
      wireFrame.lines.add(new Shapes.Line(ver2, ver3));
      wireFrame.lines.add(new Shapes.Line(ver3, ver1));
    }
    wireFrame.joinSeams();
    return wireFrame;
  }

  Shapes.Shape _vertices(Shapes.Shape shape) {
    shape.updateIndices();
    Shapes.Shape vertices = new Shapes.Shape();
    for (Shapes.Vertex vertex in shape.vertices) {
      vertices.vertices.add(vertex.copy());
    }
    vertices.updateIndices();
    for (Shapes.Vertex point in shape.points) {
      Shapes.Vertex ver = vertices.vertices[point.index];
      vertices.points.add(ver);
    }
    for (Shapes.Line line in shape.lines) {
      Shapes.Vertex ver1 = vertices.vertices[line.vertex1.index];
      Shapes.Vertex ver2 = vertices.vertices[line.vertex2.index];
      vertices.points.add(ver1);
      vertices.points.add(ver2);
    }
    for (Shapes.Face face in shape.faces) {
      Shapes.Vertex ver1 = vertices.vertices[face.vertex1.index];
      Shapes.Vertex ver2 = vertices.vertices[face.vertex2.index];
      Shapes.Vertex ver3 = vertices.vertices[face.vertex3.index];
      vertices.points.add(ver1);
      vertices.points.add(ver2);
      vertices.points.add(ver3);
    }
    vertices.joinSeams();
    return vertices;
  }
}
