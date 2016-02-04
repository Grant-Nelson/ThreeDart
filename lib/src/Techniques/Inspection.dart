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
  bool _showFaceCenters;
  bool _showFaceNormals;
  bool _showFaceBinormals;
  bool _showColorFill;
  bool _showTxtColor;
  bool _showAABB;
  double _vectorScale;

  Inspection() {
    this._shader = null;
    this._lightVec = new Math.Vector3(0.0, 0.0, -1.0);
    this._diffuse1 = new Math.Color3(0.1, 0.2, 0.3);
    this._ambient1 = new Math.Color3(0.1, 0.2, 0.3);
    this._diffuse2 = new Math.Color3(0.5, 0.5, 0.5);
    this._ambient2 = new Math.Color3(0.5, 0.5, 0.5);
    this._diffuse3 = new Math.Color3(0.3, 0.3, 0.3);
    this._ambient3 = new Math.Color3(0.7, 0.7, 0.7);

    this._showFilled        = true;
    this._showWireFrame     = true;
    this._showVertices      = false;
    this._showNormals       = false;
    this._showBinormals     = false;
    this._showFaceCenters   = false;
    this._showFaceNormals   = false;
    this._showFaceBinormals = false;
    this._showColorFill     = false;
    this._showTxtColor      = false;
    this._showAABB          = false;
    this._vectorScale       = 1.0;
  }

  set showFilled(bool show) => this._showFilled = show;
  bool get showFilled => this._showFilled;

  set showWireFrame(bool show) => this._showWireFrame = show;
  bool get showWireFrame => this._showWireFrame;

  set showVertices(bool show) => this._showVertices = show;
  bool get showVertices => this._showVertices;

  set showNormals(bool show) => this._showNormals = show;
  bool get showNormals => this._showNormals;

  set showBinormals(bool show) => this._showBinormals = show;
  bool get showBinormals => this._showBinormals;

  set showFaceCenters(bool show) => this._showFaceCenters = show;
  bool get showFaceCenters => this._showFaceCenters;

  set showFaceNormals(bool show) => this._showFaceNormals = show;
  bool get showFaceNormals => this._showFaceNormals;

  set showFaceBinormals(bool show) => this._showFaceBinormals = show;
  bool get showFaceBinormals => this._showFaceBinormals;

  set showColorFill(bool show) => this._showColorFill = show;
  bool get showColorFill => this._showColorFill;

  set showTxtColor(bool show) => this._showTxtColor = show;
  bool get showTxtColor => this._showTxtColor;

  set showAABB(bool show) => this._showAABB = show;
  bool get showAABB => this._showAABB;

  set vectorScale(double scale) => this._vectorScale = scale;
  double get vectorScale => this._vectorScale;

  void render(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.Inspection.cached(state);

    if (obj.cacheNeedsUpdate) {
      obj.shape.calculateNormals();
      obj.shape.calculateBinormals();
      Data.BufferStore shapeFill     = this._buildShape(state, this._shapeFill(obj.shape));
      Data.BufferStore wireFrame     = this._buildShape(state, this._wireFrame(obj.shape));
      Data.BufferStore vertices      = this._buildShape(state, this._vertices(obj.shape));
      Data.BufferStore normals       = this._buildShape(state, this._normals(obj.shape));
      Data.BufferStore binormals     = this._buildShape(state, this._binormals(obj.shape));
      Data.BufferStore faceCenters   = this._buildShape(state, this._faceCenters(obj.shape));
      Data.BufferStore faceNormals   = this._buildShape(state, this._faceNormals(obj.shape));
      Data.BufferStore faceBinormals = this._buildShape(state, this._faceBinormals(obj.shape));
      Data.BufferStore colorFill     = this._buildShape(state, this._colorFill(obj.shape));
      Data.BufferStore txtColor      = this._buildShape(state, this._txtColor(obj.shape));
      Data.BufferStore aabb          = this._buildShape(state, this._aabb(obj.shape));

      obj.cache =  new Data.BufferStoreList()
        ..list.add(shapeFill) // 0
        ..list.add(wireFrame) // 1
        ..list.add(vertices) // 2
        ..list.add(normals) // 3
        ..list.add(binormals) // 4
        ..list.add(faceCenters) // 5
        ..list.add(faceNormals) // 6
        ..list.add(faceBinormals) // 7
        ..list.add(colorFill) // 8
        ..list.add(txtColor) // 9
        ..list.add(aabb); // 10
    }

    this._shader
      ..bind(state)
      ..lightVector = this._lightVec
      ..projectMatrix = state.projection.matrix
      ..viewMatrix = state.view.matrix
      ..objectMatrix = state.object.matrix;

    if (obj.cache is Data.BufferStoreList) {
      Data.BufferStoreList store = obj.cache as Data.BufferStoreList;
      state.gl.blendFunc(WebGL.ONE, WebGL.ONE);
      state.gl.enable(WebGL.DEPTH_TEST);
      state.gl.disable(WebGL.BLEND);

      if (this._showVertices) {
        this._shader.setColors(this._ambient2, this._diffuse2);
        store.list[2].oneRender(state); // vertices
        // TODO: Why does POINTS not respect depth tests?
        // Once they do move these two below the DEPTH_TEST disabled.
      }
      if (this._showFaceCenters) {
        this._shader.setColors(this._ambient2, this._diffuse2);
        store.list[5].oneRender(state); // faceCenters
        // TODO: See above TODO.
      }

      if (this._showFilled) {
        this._shader.setColors(this._ambient1, this._diffuse1);
        store.list[0].oneRender(state); // shapeFill
      }
      if (this._showColorFill) {
        this._shader.setColors(this._ambient3, this._diffuse3);
        store.list[8].oneRender(state); // colorFill
      }
      if (this._showTxtColor) {
        this._shader.setColors(this._ambient3, this._diffuse3);
        store.list[9].oneRender(state); // txtColor
      }

      state.gl.disable(WebGL.DEPTH_TEST);
      state.gl.enable(WebGL.BLEND);

      if (this._showWireFrame) {
        this._shader.setColors(this._ambient2, this._diffuse2);
        store.list[1].oneRender(state); // wireFrame
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
        store.list[6].oneRender(state); // faceNormals
      }
      if (this._showFaceBinormals) {
        this._shader.setColors(this._ambient3, this._diffuse3);
        store.list[7].oneRender(state); // faceBinormals
      }
      if (this._showAABB) {
        this._shader.setColors(this._ambient2, this._diffuse2);
        store.list[10].oneRender(state); // AABB
      }

      state.gl.enable(WebGL.DEPTH_TEST);
      state.gl.disable(WebGL.BLEND);
    } else obj.clearCache();

    this._shader.unbind(state);
  }

  Data.BufferStore _buildShape(Core.RenderState state, Shapes.Shape shape) {
    Data.BufferStore store = shape.build(new Data.WebGLBufferBuilder(state.gl),
      Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Clr3);
    return store
      ..findAttribute(Data.VertexType.Pos).attr  = this._shader.posAttr.loc
      ..findAttribute(Data.VertexType.Norm).attr = this._shader.normAttr.loc
      ..findAttribute(Data.VertexType.Clr3).attr = this._shader.clrAttr.loc;
  }

  Shapes.Shape _shapeFill(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color =  new Math.Color4.white();
    shape.vertices.forEach((Shapes.Vertex vertex) {
      result.vertices.add(vertex.copy()
        ..color = color);
    });
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex ver1 = result.vertices[face.vertex1.index];
      Shapes.Vertex ver2 = result.vertices[face.vertex2.index];
      Shapes.Vertex ver3 = result.vertices[face.vertex3.index];
      result.faces.add(ver1, ver2, ver3);
    });
    return result;
  }

  Shapes.Shape _wireFrame(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(0.0, 0.7, 1.0);
    shape.vertices.forEach((Shapes.Vertex vertex) {
      result.vertices.add(vertex.copy()
        ..color = color);
    });
    shape.lines.forEach((Shapes.Line line) {
      Shapes.Vertex ver1 = result.vertices[line.vertex1.index];
      Shapes.Vertex ver2 = result.vertices[line.vertex2.index];
      result.lines.add(ver1, ver2);
    });
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex ver1 = result.vertices[face.vertex1.index];
      Shapes.Vertex ver2 = result.vertices[face.vertex2.index];
      Shapes.Vertex ver3 = result.vertices[face.vertex3.index];
      result.lines.add(ver1, ver2);
      result.lines.add(ver2, ver3);
      result.lines.add(ver3, ver1);
    });
    result.joinSeams();
    return result;
  }

  Shapes.Shape _vertices(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4.white();
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Shapes.Vertex ver = vertex.copy()
        ..color = color;
      result.vertices.add(ver);
      result.points.add(ver);
    });
    return result;
  }

  Shapes.Shape _normals(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 1.0, 0.3);
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Shapes.Vertex ver1 = vertex.copy()
        ..color = color;
      Shapes.Vertex ver2 = ver1.copy();
      ver2.location = ver2.location + new Math.Point3.fromVector3(ver2.normal)*this._vectorScale;
      result.vertices.add(ver1);
      result.vertices.add(ver2);
      result.lines.add(ver1, ver2);
    });
    return result;
  }

  Shapes.Shape _binormals(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 0.3, 0.3);
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Shapes.Vertex ver1 = vertex.copy()
        ..color = color;
      Shapes.Vertex ver2 = ver1.copy();
      ver2.location = ver2.location + new Math.Point3.fromVector3(ver2.binormal)*this._vectorScale;
      result.vertices.add(ver1);
      result.vertices.add(ver2);
      result.lines.add(ver1, ver2);
    });
    return result;
  }

  Shapes.Shape _faceCenters(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 1.0, 0.3);
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex ver = new Shapes.Vertex(
        loc: (face.vertex1.location + face.vertex2.location + face.vertex3.location)/3.0,
        norm: face.normal,
        clr: color);
      result.vertices.add(ver);
      result.points.add(ver);
    });
    return result;
  }

  Shapes.Shape _faceNormals(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 1.0, 0.3);
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex cen1 = new Shapes.Vertex(
        loc: (face.vertex1.location + face.vertex2.location + face.vertex3.location)/3.0,
        norm: face.normal,
        clr: color);

      Shapes.Vertex cen2 = cen1.copy();
      cen2.location += new Math.Point3.fromVector3(cen2.normal)*this._vectorScale;
      result.vertices.add(cen1);
      result.vertices.add(cen2);
      result.lines.add(cen1, cen2);
    });
    return result;
  }

  Shapes.Shape _faceBinormals(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 0.3, 0.3);
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex cen1 = new Shapes.Vertex(
        loc: (face.vertex1.location + face.vertex2.location + face.vertex3.location)/3.0,
        norm: face.normal,
        clr: color);

      Shapes.Vertex cen2 = cen1.copy();
      cen2.location += new Math.Point3.fromVector3(face.binormal)*this._vectorScale;
      result.vertices.add(cen1);
      result.vertices.add(cen2);
      result.lines.add(cen1, cen2);
    });
    return result;
  }

  Shapes.Shape _colorFill(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    shape.vertices.forEach((Shapes.Vertex vertex) {
      result.vertices.add(vertex.copy());
    });
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex ver1 = result.vertices[face.vertex1.index];
      Shapes.Vertex ver2 = result.vertices[face.vertex2.index];
      Shapes.Vertex ver3 = result.vertices[face.vertex3.index];
      result.faces.add(ver1, ver2, ver3);
    });
    return result;
  }

  Shapes.Shape _txtColor(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Math.Point2 txt = vertex.texture;
      result.vertices.add(vertex.copy()
        ..color =  new Math.Color4(txt.x, txt.y, txt.y));
    });
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex ver1 = result.vertices[face.vertex1.index];
      Shapes.Vertex ver2 = result.vertices[face.vertex2.index];
      Shapes.Vertex ver3 = result.vertices[face.vertex3.index];
      result.faces.add(ver1, ver2, ver3);
    });
    return result;
  }

  Shapes.Shape _aabb(Shapes.Shape shape) {
    Math.Region3 aabb = shape.calculateAABB();
    Shapes.Shape result = new Shapes.Shape();
    Shapes.Vertex ver1 = result.vertices.addPoint(aabb.x,         aabb.y,         aabb.z);
    Shapes.Vertex ver2 = result.vertices.addPoint(aabb.x+aabb.dx, aabb.y,         aabb.z);
    Shapes.Vertex ver3 = result.vertices.addPoint(aabb.x+aabb.dx, aabb.y+aabb.dy, aabb.z);
    Shapes.Vertex ver4 = result.vertices.addPoint(aabb.x,         aabb.y+aabb.dy, aabb.z);
    Shapes.Vertex ver5 = result.vertices.addPoint(aabb.x,         aabb.y,         aabb.z+aabb.dz);
    Shapes.Vertex ver6 = result.vertices.addPoint(aabb.x+aabb.dx, aabb.y,         aabb.z+aabb.dz);
    Shapes.Vertex ver7 = result.vertices.addPoint(aabb.x+aabb.dx, aabb.y+aabb.dy, aabb.z+aabb.dz);
    Shapes.Vertex ver8 = result.vertices.addPoint(aabb.x,         aabb.y+aabb.dy, aabb.z+aabb.dz);
    result.lines.add(ver1, ver2);
    result.lines.add(ver2, ver3);
    result.lines.add(ver3, ver4);
    result.lines.add(ver4, ver1);
    result.lines.add(ver5, ver6);
    result.lines.add(ver6, ver7);
    result.lines.add(ver7, ver8);
    result.lines.add(ver8, ver5);
    result.lines.add(ver1, ver5);
    result.lines.add(ver2, ver6);
    result.lines.add(ver3, ver7);
    result.lines.add(ver4, ver8);
    result.calculateNormals();
    return result;
  }
}
