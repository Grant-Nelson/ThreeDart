part of ThreeDart.Techniques;

/// The inspection rendering technique for checking shape components.
class Inspection extends Technique {
  Shaders.Inspection? _shader;
  Math.Vector3 _lightVec;
  Math.Color4 _diffuse1;
  Math.Color4 _ambient1;
  Math.Color4 _diffuse2;
  Math.Color4 _ambient2;
  Math.Color4 _diffuse3;
  Math.Color4 _ambient3;
  Math.Color4 _diffuse4;
  Math.Color4 _ambient4;

  bool _showFilled;
  bool _showWireFrame;
  bool _showVertices;
  bool _showNormals;
  bool _showBinormals;
  bool _showTangentals;
  bool _showTxtCube;
  bool _showFaceCenters;
  bool _showFaceNormals;
  bool _showFaceBinormals;
  bool _showFaceTangentals;
  bool _showColorFill;
  bool _showTxt2DColor;
  bool _showWeight;
  bool _showAxis;
  bool _showAABB;
  bool _showBend;
  double _vectorScale;
  Events.Event? _changed;

  /// Creates a new inspection technique.
  Inspection({
    bool showFilled:         false,
    bool showWireFrame:      false,
    bool showVertices:       false,
    bool showNormals:        false,
    bool showBinormals:      false,
    bool showTangentals:     false,
    bool showTxtCube:        false,
    bool showFaceCenters:    false,
    bool showFaceNormals:    false,
    bool showFaceBinormals:  false,
    bool showFaceTangentals: false,
    bool showColorFill:      false,
    bool showTxt2DColor:     false,
    bool showWeight:         false,
    bool showAxis:           false,
    bool showAABB:           false,
    bool showBend:           false,
    double vectorScale:      1.0}):
    this._shader   = null,
    this._lightVec = Math.Vector3.negZ,
    this._diffuse1 = new Math.Color4(0.2, 0.3, 0.4),
    this._ambient1 = new Math.Color4(0.1, 0.2, 0.3),
    this._diffuse2 = new Math.Color4.gray(0.7),
    this._ambient2 = new Math.Color4.gray(0.3),
    this._diffuse3 = new Math.Color4.gray(0.5),
    this._ambient3 = new Math.Color4.gray(0.5),
    this._diffuse4 = new Math.Color4.white(),
    this._ambient4 = new Math.Color4.gray(0.8),
    this._showFilled         = showFilled,
    this._showWireFrame      = showWireFrame,
    this._showVertices       = showVertices,
    this._showNormals        = showNormals,
    this._showBinormals      = showBinormals,
    this._showTangentals     = showTangentals,
    this._showTxtCube        = showTxtCube,
    this._showFaceCenters    = showFaceCenters,
    this._showFaceNormals    = showFaceNormals,
    this._showFaceBinormals  = showFaceBinormals,
    this._showFaceTangentals = showFaceTangentals,
    this._showColorFill      = showColorFill,
    this._showTxt2DColor     = showTxt2DColor,
    this._showWeight         = showWeight,
    this._showAxis           = showAxis,
    this._showAABB           = showAABB,
    this._showBend           = showBend,
    this._vectorScale        = vectorScale,
    this._changed            = null;

  /// Indicates that this technique has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles a change in this technique.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// Handles a change to a boolean value.
  void _onBoolChanged(String name, bool value) =>
    this._onChanged(new Events.ValueChangedEventArgs(this, name, !value, value));

  /// Indicates if the filled shape should be showed.
  bool get showFilled => this._showFilled;
  set showFilled(bool show) {
    if (this._showFilled != show) {
      this._showFilled = show;
      this._onBoolChanged('showFilled', show);
    }
  }

  /// Indicates if the wire frame of the shape should be showed.
  bool get showWireFrame => this._showWireFrame;
  set showWireFrame(bool show) {
    if (this._showWireFrame != show) {
      this._showWireFrame = show;
      this._onBoolChanged('showWireFrame', show);
    }
  }

  /// Indicates if the vertices of the shape should be showed.
  bool get showVertices => this._showVertices;
  set showVertices(bool show) {
    if (this._showVertices != show) {
      this._showVertices = show;
      this._onBoolChanged('showVertices', show);
    }
  }

  /// Indicates if the normals of the shape should be showed.
  bool get showNormals => this._showNormals;
  set showNormals(bool show) {
    if (this._showNormals != show) {
      this._showNormals = show;
      this._onBoolChanged('showNormals', show);
    }
  }

  /// Indicates if the binormals of the shape should be showed.
  bool get showBinormals => this._showBinormals;
  set showBinormals(bool show) {
    if (this._showBinormals != show) {
      this._showBinormals = show;
      this._onBoolChanged('showBinormals', show);
    }
  }

  /// Indicates if the tangentals of the shape should be showed.
  bool get showTangentals => this._showTangentals;
  set showTangentals(bool show) {
    if (this._showTangentals != show) {
      this._showTangentals = show;
      this._onBoolChanged('showTangentals', show);
    }
  }

  /// Indicates if the texture cube vectors of the shape should be showed.
  bool get showTxtCube => this._showTxtCube;
  set showTxtCube(bool show) {
    if (this._showTxtCube != show) {
      this._showTxtCube = show;
      this._onBoolChanged('showTxtCube', show);
    }
  }

  /// Indicates if the face center points of the shape should be showed.
  bool get showFaceCenters => this._showFaceCenters;
  set showFaceCenters(bool show) {
    if (this._showFaceCenters != show) {
      this._showFaceCenters = show;
      this._onBoolChanged('showFaceCenters', show);
    }
  }

  /// Indicates if the face normals of the shape should be showed.
  bool get showFaceNormals => this._showFaceNormals;
  set showFaceNormals(bool show) {
    if (this._showFaceNormals != show) {
      this._showFaceNormals = show;
      this._onBoolChanged('showFaceNormals', show);
    }
  }

  /// Indicates if the face binormals of the shape should be showed.
  bool get showFaceBinormals => this._showFaceBinormals;
  set showFaceBinormals(bool show) {
    if (this._showFaceBinormals != show) {
      this._showFaceBinormals = show;
      this._onBoolChanged('showFaceBinormals', show);
    }
  }

  /// Indicates if the face tangentals of the shape should be showed.
  bool get showFaceTangentals => this._showFaceTangentals;
  set showFaceTangentals(bool show) {
    if (this._showFaceTangentals != show) {
      this._showFaceTangentals = show;
      this._onBoolChanged('showFaceTangentals', show);
    }
  }

  /// Indicates if the colors of the shape should be showed.
  bool get showColorFill => this._showColorFill;
  set showColorFill(bool show) {
    if (this._showColorFill != show) {
      this._showColorFill = show;
      this._onBoolChanged('showColorFill', show);
    }
  }

  /// Indicates if the texture 2D colors of the shape should be showed.
  bool get showTxt2DColor => this._showTxt2DColor;
  set showTxt2DColor(bool show) {
    if (this._showTxt2DColor != show) {
      this._showTxt2DColor = show;
      this._onBoolChanged('showTxt2DColor', show);
    }
  }

  /// Indicates if the weights of the shape should be showed.
  bool get showWeight => this._showWeight;
  set showWeight(bool show) {
    if (this._showWeight != show) {
      this._showWeight = show;
      this._onBoolChanged('showWeight', show);
    }
  }

  /// Indicates if the axis should be showed.
  bool get showAxis => this._showAxis;
  set showAxis(bool show) {
    if (this._showAxis != show) {
      this._showAxis = show;
      this._onBoolChanged('showAxis', show);
    }
  }

  /// Indicates if the axlal aligned bounding box of the shape should be showed.
  bool get showAABB => this._showAABB;
  set showAABB(bool show) {
    if (this._showAABB != show) {
      this._showAABB = show;
      this._onBoolChanged('showAABB', show);
    }
  }

  /// Indicates if the first bend should be showed.
  bool get showBend => this._showBend;
  set showBend(bool show) {
    if (this._showBend != show) {
      this._showBend = show;
      this._onBoolChanged('showBend', show);
    }
  }

  /// The scalar to apply to vectors lengths.
  /// To make the vectors change length the cache also has to be cleared.
  double get vectorScale => this._vectorScale;
  set vectorScale(double scale) {
    if (!Math.Comparer.equals(this._vectorScale, scale)) {
      double prevScale = this._vectorScale;
      this._vectorScale = scale;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'vectorScale', prevScale, scale));
    }
  }

  /// The light vector to highlight the shape with.
  Math.Vector3 get lightVector => this._lightVec;
  set lightVector(Math.Vector3 vec) {
    if (this._lightVec != vec) {
      Math.Vector3 prevVec = this._lightVec;
      this._lightVec = vec;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'lightVector', prevVec, vec));
    }
  }

  /// The first diffuse color, used for the fill color.
  Math.Color4 get diffuse1 => this._diffuse1;
  set diffuse1(Math.Color4 clr) {
    if (this._diffuse1 != clr) {
      Math.Color4 prevClr = this._diffuse1;
      this._diffuse1 = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'diffuse1', prevClr, clr));
    }
  }

  /// The first ambient color, used for the fill color.
  Math.Color4 get ambient1 => this._ambient1;
  set ambient1(Math.Color4 clr) {
    if (this._ambient1 != clr) {
      Math.Color4 prevClr = this._ambient1;
      this._ambient1 = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'ambient1', prevClr, clr));
    }
  }

  /// The second diffuse color, used for the wireframe color.
  Math.Color4 get diffuse2 => this._diffuse2;
  set diffuse2(Math.Color4 clr) {
    if (this._diffuse2 != clr) {
      Math.Color4 prevClr = this._diffuse2;
      this._diffuse2 = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'diffuse2', prevClr, clr));
    }
  }

  /// The second ambient color, used for the wireframe color.
  Math.Color4 get ambient2 => this._ambient2;
  set ambient2(Math.Color4 clr) {
    if (this._ambient2 != clr) {
      Math.Color4 prevClr = this._ambient2;
      this._ambient2 = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'ambient2', prevClr, clr));
    }
  }

  /// The third diffuse color.
  Math.Color4 get diffuse3 => this._diffuse3;
  set diffuse3(Math.Color4 clr) {
    if (this._diffuse3 != clr) {
      Math.Color4 prevClr = this._diffuse3;
      this._diffuse3 = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'diffuse3', prevClr, clr));
    }
  }

  /// The third ambient color.
  Math.Color4 get ambient3 => this._ambient3;
  set ambient3(Math.Color4 clr) {
    if (this._ambient3 != clr) {
      Math.Color4 prevClr = this._ambient3;
      this._ambient3 = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'ambient3', prevClr, clr));
    }
  }

  /// The fourth diffuse color.
  Math.Color4 get diffuse4 => this._diffuse4;
  set diffuse4(Math.Color4 clr) {
    if (this._diffuse4 != clr) {
      Math.Color4 prevClr = this._diffuse4;
      this._diffuse4 = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'diffuse4', prevClr, clr));
    }
  }

  /// The fourth ambient color.
  Math.Color4 get ambient4 => this._ambient4;
  set ambient4(Math.Color4 clr) {
    if (this._ambient4 != clr) {
      Math.Color4 prevClr = this._ambient4;
      this._ambient4 = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'ambient4', prevClr, clr));
    }
  }

  /// Updates this technique for the given state.
  void update(Core.RenderState state) {
    // Do Nothing
  }

  /// Renders the current [obj] with the current [state].
  void render(Core.RenderState state, Core.Entity obj) {
    this._shader ??= new Shaders.Inspection.cached(state);

    if (obj.cacheNeedsUpdate) {
      obj.shapeBuilder?.calculateNormals();
      obj.shapeBuilder?.calculateBinormals();
      obj.shapeBuilder?.calculateCubeTextures();
      obj.cache = new Data.BufferStoreSet();
    }

    this._shader
      ?..bind(state)
      ..weightScalar = this._vectorScale
      ..lightVector = this._lightVec
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix;

    if (obj.cache is Data.BufferStoreSet) {
      Data.BufferStoreSet store = obj.cache as Data.BufferStoreSet;
      state.gl.blendFunc(WebGL.WebGL.ONE, WebGL.WebGL.ONE);

      if (obj.shape == null) this._renderAllBuilderParts(store, state, obj);
      else                   this._renderAllShapeParts(store, state, obj);

    } else obj.clearCache();

    this._shader?.unbind(state);
  }

  /// Renders the current [obj] with the current [state].
  /// Must have a shape, not just a shape builder, to do a full inspection.
  void _renderAllBuilderParts(Data.BufferStoreSet store, Core.RenderState state, Core.Entity obj) {
    var builder = obj.shapeBuilder;
    if (builder == null) return;

    state.gl.disable(WebGL.WebGL.DEPTH_TEST);
    state.gl.enable(WebGL.WebGL.BLEND);
    state.gl.blendFunc(WebGL.WebGL.ONE, WebGL.WebGL.ONE);

    if (this._showAxis)
      this._renderBuilder(state, store, builder, 'Axis', this._axisBuilder, this._ambient4, this._diffuse4);
    if (this._showAABB)
      this._renderBuilder(state, store, builder, 'AABB', this._aabbBuilder, this._ambient4, this._diffuse4);

    state.gl.enable(WebGL.WebGL.DEPTH_TEST);
    state.gl.blendFunc(WebGL.WebGL.SRC_ALPHA, WebGL.WebGL.ONE_MINUS_SRC_ALPHA);
  }

  /// Renders the current [obj] with the current [state].
  void _renderAllShapeParts(Data.BufferStoreSet store, Core.RenderState state, Core.Entity obj) {
    var shape = obj.shape;
    if (shape == null) return;

    state.gl.enable(WebGL.WebGL.DEPTH_TEST);
    state.gl.enable(WebGL.WebGL.BLEND);
    state.gl.blendFunc(WebGL.WebGL.SRC_ALPHA, WebGL.WebGL.ONE_MINUS_SRC_ALPHA);

    if (this._showFilled)
      this._render(state, store, shape, 'shapeFill', this._shapeFill, this._ambient1, this._diffuse1);
    if (this._showColorFill)
      this._render(state, store, shape, 'colorFill', this._colorFill, this._ambient3, this._diffuse3);
    if (this._showTxt2DColor)
      this._render(state, store, shape, 'txt2DColor', this._txt2DColor, this._ambient3, this._diffuse3);
    if (this._showWeight)
      this._render(state, store, shape, 'weight', this._weight, this._ambient3, this._diffuse3);
    if (this._showBend)
      this._render(state, store, shape, 'bend1', this._bendFill, this._ambient3, this._diffuse3);

    state.gl.disable(WebGL.WebGL.DEPTH_TEST);
    state.gl.blendFunc(WebGL.WebGL.ONE, WebGL.WebGL.ONE);
    
    if (this._showVertices)
      this._render(state, store, shape, 'vertices', this._vertices, this._ambient2, this._diffuse2);
    if (this._showFaceCenters)
      this._render(state, store, shape, 'faceCenters', this._faceCenters, this._ambient2, this._diffuse2);
    
    if (this._showWireFrame)
      this._render(state, store, shape, 'wireFrame', this._wireFrame, this._ambient2, this._diffuse2);
    if (this._showNormals)
      this._render(state, store, shape, 'normals', this._normals, this._ambient2, this._diffuse2);
    if (this._showBinormals)
      this._render(state, store, shape, 'binormals', this._binormals, this._ambient2, this._diffuse2);
    if (this._showTangentals)
      this._render(state, store, shape, 'tangentals', this._tangentals, this._ambient2, this._diffuse2);
    if (this._showTxtCube)
      this._render(state, store, shape, 'textureCube', this._txtCube, this._ambient2, this._diffuse2);
    if (this._showFaceNormals)
      this._render(state, store, shape, 'faceNormals', this._faceNormals, this._ambient2, this._diffuse2);
    if (this._showFaceBinormals)
      this._render(state, store, shape, 'faceBinormals', this._faceBinormals, this._ambient3, this._diffuse3);
    if (this._showFaceTangentals)
      this._render(state, store, shape, 'faceTangentals', this._faceTangentals, this._ambient3, this._diffuse3);
    if (this._showAxis)
      this._render(state, store, shape, 'Axis', this._axis, this._ambient4, this._diffuse4);
    if (this._showAABB)
      this._render(state, store, shape, 'AABB', this._aabb, this._ambient4, this._diffuse4);

    state.gl.enable(WebGL.WebGL.DEPTH_TEST);
    state.gl.blendFunc(WebGL.WebGL.SRC_ALPHA, WebGL.WebGL.ONE_MINUS_SRC_ALPHA);
  }

  /// Renders one of the shape components to inspect.
  /// If the component of the shape isn't cached it will be created and cached.
  void _render(Core.RenderState state, Data.BufferStoreSet storeSet, Shapes.Shape shape,
      String name, Shapes.Shape shapeModHndl(Shapes.Shape shape), Math.Color4 ambient, Math.Color4 diffuse) {
    Data.BufferStore? store = storeSet.map[name];
    if (store == null) {
      store = this._buildShape(state, shapeModHndl(shape));
      storeSet.map[name] = store;
    }
    this._shader?.setColors(ambient, diffuse);
    store.oneRender(state);
  }

  /// Renders one of the shape builder components to inspect.
  /// If the component of the shape isn't cached it will be created and cached.
  void _renderBuilder(Core.RenderState state, Data.BufferStoreSet storeSet, Shapes.ShapeBuilder builder,
      String name, Shapes.Shape shapeBuilderModHndl(Shapes.ShapeBuilder builder), Math.Color4 ambient, Math.Color4 diffuse) {
    Data.BufferStore? store = storeSet.map[name];
    if (store == null) {
      store = this._buildShape(state, shapeBuilderModHndl(builder));
      storeSet.map[name] = store;
    }
    this._shader?.setColors(ambient, diffuse);
    store.oneRender(state);
  }

  /// Builds and sets up the shape for a component.
  Data.BufferStore _buildShape(Core.RenderState state, Shapes.Shape shape) {
    Data.BufferStore store = shape.build(new Data.WebGLBufferBuilder(state.gl),
      Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.Clr3);
    return store
      ..findAttribute(Data.VertexType.Pos)?.attr  = this._shader?.posAttr?.loc ?? 0
      ..findAttribute(Data.VertexType.Norm)?.attr = this._shader?.normAttr?.loc ?? 1
      ..findAttribute(Data.VertexType.Clr3)?.attr = this._shader?.clrAttr?.loc ?? 2
      ..findAttribute(Data.VertexType.Binm)?.attr = this._shader?.binmAttr?.loc ?? 3;
  }

  /// Convertes the given [shape] into the filled shape.
  Shapes.Shape _shapeFill(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4.white();
    shape.vertices.forEach((Shapes.Vertex vertex) {
      result.vertices.add(vertex.copy()
        ..color = color
        ..binormal = Math.Vector3.zero);
    });
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex ver1 = result.vertices[face.vertex1?.index ?? 0];
      Shapes.Vertex ver2 = result.vertices[face.vertex2?.index ?? 0];
      Shapes.Vertex ver3 = result.vertices[face.vertex3?.index ?? 0];
      result.faces.add(ver1, ver2, ver3);
    });
    return result;
  }

  /// Convertes the given [shape] into the wire frame shape.
  Shapes.Shape _wireFrame(Shapes.Shape shape, {Math.Color4? color: null}) {
    Shapes.Shape result = new Shapes.Shape();
    color ??= new Math.Color4(0.0, 0.7, 1.0);
    shape.vertices.forEach((Shapes.Vertex vertex) {
      result.vertices.add(vertex.copy()
        ..color = color
        ..binormal = Math.Vector3.zero);
    });
    void addLine(Shapes.Vertex ver1, Shapes.Vertex ver2) {
      if (ver1.firstLineBetween(ver2) == null) {
        result.lines.add(ver1, ver2);
      }
    }
    shape.lines.forEach((Shapes.Line line) {
      Shapes.Vertex ver1 = result.vertices[line.vertex1?.index ?? 0];
      Shapes.Vertex ver2 = result.vertices[line.vertex2?.index ?? 0];
      addLine(ver1, ver2);
    });
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex ver1 = result.vertices[face.vertex1?.index ?? 0];
      Shapes.Vertex ver2 = result.vertices[face.vertex2?.index ?? 0];
      Shapes.Vertex ver3 = result.vertices[face.vertex3?.index ?? 0];
      addLine(ver1, ver2);
      addLine(ver2, ver3);
      addLine(ver3, ver1);
    });
    return result;
  }

  /// Convertes the given [shape] into the vertices shape.
  Shapes.Shape _vertices(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4.white();
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Shapes.Vertex ver = vertex.copy()
        ..color = color
        ..binormal = Math.Vector3.zero;
      result.vertices.add(ver);
      result.points.add(ver);
    });
    return result;
  }

  /// Convertes the given [shape] into the normals shape.
  Shapes.Shape _normals(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 1.0, 0.3);
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Shapes.Vertex ver1 = vertex.copy()
        ..color = color
        ..binormal = Math.Vector3.zero;
      Shapes.Vertex ver2 = ver1.copy()
        ..binormal = ver1.normal;
      result.vertices.add(ver1);
      result.vertices.add(ver2);
      result.lines.add(ver1, ver2);
    });
    return result;
  }

  /// Convertes the given [shape] into the binormals shape.
  Shapes.Shape _binormals(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 0.3, 0.3);
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Shapes.Vertex ver1 = vertex.copy()
        ..color = color
        ..binormal = Math.Vector3.zero;
      Shapes.Vertex ver2 = ver1.copy()
        ..binormal = vertex.binormal;
      result.vertices.add(ver1);
      result.vertices.add(ver2);
      result.lines.add(ver1, ver2);
    });
    return result;
  }

  /// Convertes the given [shape] into the tangentals shape.
  Shapes.Shape _tangentals(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 0.3, 1.0);
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Math.Vector3? norm = vertex.normal;
      Math.Vector3? binm = vertex.binormal;
      if (norm == null || binm == null) return;

      Shapes.Vertex ver1 = vertex.copy()
        ..color = color
        ..binormal = Math.Vector3.zero;
      Shapes.Vertex ver2 = ver1.copy()
        ..binormal = -binm.cross(norm);
      result.vertices.add(ver1);
      result.vertices.add(ver2);
      result.lines.add(ver1, ver2);
    });
    return result;
  }

  /// Convertes the given [shape] into the texture cube color shape.
  Shapes.Shape _txtCube(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 0.3, 0.3);
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Shapes.Vertex ver1 = vertex.copy()
        ..color = color
        ..binormal = Math.Vector3.zero;
      Shapes.Vertex ver2 = ver1.copy()
        ..binormal = vertex.textureCube;
      result.vertices.add(ver1);
      result.vertices.add(ver2);
      result.lines.add(ver1, ver2);
    });
    return result;
  }

  /// Convertes the given [shape] into the face center point shape.
  Shapes.Shape _faceCenters(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 1.0, 0.3);
    shape.faces.forEach((Shapes.Face face) {
      Math.Point3? loc1 = face.vertex1?.location;
      Math.Point3? loc2 = face.vertex2?.location;
      Math.Point3? loc3 = face.vertex3?.location;
      if (loc1 == null || loc2 == null || loc3 == null) return;

      Shapes.Vertex ver = new Shapes.Vertex(
        loc: (loc1 + loc2 + loc3)/3.0,
        norm: face.normal,
        binm: Math.Vector3.zero,
        clr: color);
      result.vertices.add(ver);
      result.points.add(ver);
    });
    return result;
  }

  /// Convertes the given [shape] into the face normal shape.
  Shapes.Shape _faceNormals(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 1.0, 0.3);
    shape.faces.forEach((Shapes.Face face) {
      Math.Point3? loc1 = face.vertex1?.location;
      Math.Point3? loc2 = face.vertex2?.location;
      Math.Point3? loc3 = face.vertex3?.location;
      if (loc1 == null || loc2 == null || loc3 == null) return;

      Shapes.Vertex cen1 = new Shapes.Vertex(
        loc: (loc1 + loc2 + loc3)/3.0,
        norm: face.normal,
        binm: Math.Vector3.zero,
        clr: color);
      Shapes.Vertex cen2 = cen1.copy()
        ..binormal = face.normal;
      result.vertices.add(cen1);
      result.vertices.add(cen2);
      result.lines.add(cen1, cen2);
    });
    return result;
  }

  /// Convertes the given [shape] into the face binormal shape.
  Shapes.Shape _faceBinormals(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 0.3, 0.3);
    shape.faces.forEach((Shapes.Face face) {
      Math.Point3? loc1 = face.vertex1?.location;
      Math.Point3? loc2 = face.vertex2?.location;
      Math.Point3? loc3 = face.vertex3?.location;
      if (loc1 == null || loc2 == null || loc3 == null) return;

      Shapes.Vertex cen1 = new Shapes.Vertex(
        loc: (loc1 + loc2 + loc3)/3.0,
        norm: face.normal,
        binm: Math.Vector3.zero,
        clr: color);
      Shapes.Vertex cen2 = cen1.copy()
        ..binormal = face.binormal;
      result.vertices.add(cen1);
      result.vertices.add(cen2);
      result.lines.add(cen1, cen2);
    });
    return result;
  }

  /// Convertes the given [shape] into the face tangental shape.
  Shapes.Shape _faceTangentals(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    Math.Color4 color = new Math.Color4(1.0, 0.3, 1.0);
    shape.faces.forEach((Shapes.Face face) {
      Math.Point3? loc1 = face.vertex1?.location;
      Math.Point3? loc2 = face.vertex2?.location;
      Math.Point3? loc3 = face.vertex3?.location;
      Math.Vector3? norm = face.normal;
      Math.Vector3? binm = face.binormal;
      if (loc1 == null || loc2 == null || loc3 == null || norm == null || binm == null) return;

      Shapes.Vertex cen1 = new Shapes.Vertex(
        loc: (loc1 + loc2 + loc3)/3.0,
        norm: face.normal,
        binm: Math.Vector3.zero,
        clr: color);
      Shapes.Vertex cen2 = cen1.copy()
        ..binormal = -binm.cross(norm);
      result.vertices.add(cen1);
      result.vertices.add(cen2);
      result.lines.add(cen1, cen2);
    });
    return result;
  }

  /// Convertes the given [shape] into the color shape.
  Shapes.Shape _colorFill(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    shape.vertices.forEach((Shapes.Vertex vertex) {
      result.vertices.add(vertex.copy()
        ..binormal = Math.Vector3.zero);
    });
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex ver1 = result.vertices[face.vertex1?.index ?? 0];
      Shapes.Vertex ver2 = result.vertices[face.vertex2?.index ?? 0];
      Shapes.Vertex ver3 = result.vertices[face.vertex3?.index ?? 0];
      result.faces.add(ver1, ver2, ver3);
    });
    return result;
  }

  /// Convertes the given [shape] into the texture 2D color shape.
  Shapes.Shape _txt2DColor(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Math.Point2 txt = vertex.texture2D ?? Math.Point2.zero;
      result.vertices.add(vertex.copy()
        ..color = new Math.Color4(txt.x, txt.y, txt.y)
        ..binormal = Math.Vector3.zero);
    });
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex ver1 = result.vertices[face.vertex1?.index ?? 0];
      Shapes.Vertex ver2 = result.vertices[face.vertex2?.index ?? 0];
      Shapes.Vertex ver3 = result.vertices[face.vertex3?.index ?? 0];
      result.faces.add(ver1, ver2, ver3);
    });
    return result;
  }

  /// Convertes the given [shape] into the weight color shape.
  Shapes.Shape _weight(Shapes.Shape shape) {
    Shapes.Shape result = new Shapes.Shape();
    if (shape.vertices.length < 1) return result;
    double min = shape.vertices[0].weight;
    double max = min;
    shape.vertices.forEach((Shapes.Vertex vertex) {
      if (min > vertex.weight) min = vertex.weight;
      if (max < vertex.weight) max = vertex.weight;
    });
    double div = max-min;
    if (div <= 0.0) div = 1.0;
    shape.vertices.forEach((Shapes.Vertex vertex) {
      double spectrum = (vertex.weight-min)/div;
      Math.Color3 clr = new Math.Color3.fromHVS(spectrum*5.0/6.0, 1.0, 1.0);
      result.vertices.add(vertex.copy()
        ..binormal = Math.Vector3.zero
        ..color = new Math.Color4.fromColor3(clr));
    });
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex ver1 = result.vertices[face.vertex1?.index ?? 0];
      Shapes.Vertex ver2 = result.vertices[face.vertex2?.index ?? 0];
      Shapes.Vertex ver3 = result.vertices[face.vertex3?.index ?? 0];
      result.faces.add(ver1, ver2, ver3);
    });
    return result;
  }

  /// Gets the maximum bend index of the given [shape].
  int _maxIndex(Shapes.Shape shape) {
    double maxBend = 0.0;
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Math.Point4 bend = vertex.bending ?? Math.Point4.zero;
      maxBend = math.max(maxBend, bend.x);
      maxBend = math.max(maxBend, bend.y);
      maxBend = math.max(maxBend, bend.z);
      maxBend = math.max(maxBend, bend.w);
    });
    return ((maxBend + 1.5)*0.5).floor();
  }

  /// Gets the spectrum color for the [bendVal] in the [maxIndex] range.
  Math.Color3 _bendColor(double bendVal, int maxIndex) {
    if (bendVal < 0.0 || maxIndex <= 0) {
      return new Math.Color3(0.0, 0.0, 1.0);
    } else {
      double index = ((bendVal + 0.5)*0.5).floorToDouble();
      double value = (bendVal - index*2.0);
      return new Math.Color3.fromHVS(index/maxIndex, value, 1.0);
    }
  }

  /// Convertes the given [shape] into the bend color shape.
  Shapes.Shape _bendFill(Shapes.Shape shape) {
    int maxIndex = this._maxIndex(shape);
    Shapes.Shape result = new Shapes.Shape();
    shape.vertices.forEach((Shapes.Vertex vertex) {
      Math.Point4 bend = vertex.bending ?? Math.Point4.zero;
      Math.Color3 clr = new Math.Color3.black();
      clr = clr + this._bendColor(bend.x, maxIndex);
      clr = clr + this._bendColor(bend.y, maxIndex);
      clr = clr + this._bendColor(bend.z, maxIndex);
      clr = clr + this._bendColor(bend.w, maxIndex);
      result.vertices.add(vertex.copy()
        ..binormal = Math.Vector3.zero
        ..color = new Math.Color4.fromColor3(clr));
    });
    shape.faces.forEach((Shapes.Face face) {
      Shapes.Vertex ver1 = result.vertices[face.vertex1?.index ?? 0];
      Shapes.Vertex ver2 = result.vertices[face.vertex2?.index ?? 0];
      Shapes.Vertex ver3 = result.vertices[face.vertex3?.index ?? 0];
      result.faces.add(ver1, ver2, ver3);
    });
    return result;
  }

  /// Creates the axii shape.
  Shapes.Shape _axis(Shapes.Shape shape) =>
    this._axisBuilder(shape);

  /// Creates the axii shape for a shape builder.
  Shapes.Shape _axisBuilder(Shapes.ShapeBuilder builder) {
    Shapes.Shape result = new Shapes.Shape();
    var add = (double dx, double dy, double dz) {
      Math.Color4 clr = new Math.Color4(dx, dy, dz);
      Shapes.Vertex ver1 = result.vertices.addNewLoc(0.0, 0.0, 0.0)
        ..binormal = Math.Vector3.zero
        ..normal = Math.Vector3.posX
        ..color = clr;
      Shapes.Vertex ver2 = result.vertices.addNewLoc(dx, dy, dz)
        ..binormal = Math.Vector3.zero
        ..normal = Math.Vector3.posX
        ..color = clr;
      result.lines.add(ver1, ver2);
    };
    add(1.0, 0.0, 0.0);
    add(0.0, 1.0, 0.0);
    add(0.0, 0.0, 1.0);
    return result;
  }

  /// Convertes the given [shape] into the axial aligned bounding box shape.
  Shapes.Shape _aabb(Shapes.Shape shape) =>
    this._aabbBuilder(shape);

  /// Convertes the given [shape] into the axial aligned bounding box
  /// shape for a shape builder.
  Shapes.Shape _aabbBuilder(Shapes.ShapeBuilder builder) {
    Math.Region3 aabb = builder.calculateAABB();
    Shapes.Shape result = new Shapes.Shape();
    var add = (double dx, double dy, double dz) {
      return result.vertices.addNewLoc(dx, dy, dz)
        ..binormal = Math.Vector3.zero
        ..normal = new Math.Vector3(dx, dy, dz);
    };
    Shapes.Vertex ver1 = add(aabb.x,         aabb.y,         aabb.z);
    Shapes.Vertex ver2 = add(aabb.x+aabb.dx, aabb.y,         aabb.z);
    Shapes.Vertex ver3 = add(aabb.x+aabb.dx, aabb.y+aabb.dy, aabb.z);
    Shapes.Vertex ver4 = add(aabb.x,         aabb.y+aabb.dy, aabb.z);
    Shapes.Vertex ver5 = add(aabb.x,         aabb.y,         aabb.z+aabb.dz);
    Shapes.Vertex ver6 = add(aabb.x+aabb.dx, aabb.y,         aabb.z+aabb.dz);
    Shapes.Vertex ver7 = add(aabb.x+aabb.dx, aabb.y+aabb.dy, aabb.z+aabb.dz);
    Shapes.Vertex ver8 = add(aabb.x,         aabb.y+aabb.dy, aabb.z+aabb.dz);
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
    return result;
  }
}
