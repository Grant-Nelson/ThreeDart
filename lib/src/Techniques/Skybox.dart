part of ThreeDart.Techniques;

/// A technique for a cover pass with a sky box.
class Skybox extends Technique {
  Shaders.Skybox? _shader = null;
  double _fov = Math.PI_3;
  Textures.TextureCube? _boxTxt = null;
  Math.Color3 _boxClr = new Math.Color3.white();
  Events.Event? _changed = null;

  /// Creates a new sky box technique with the given initial values.
  Skybox({double fov: Math.PI_3,
          Textures.TextureCube? boxTexture: null,
          Math.Color3? boxColor: null}) {
    this._fov     = fov;
    this._boxClr  = boxColor ?? new Math.Color3.white();
    this.boxTexture = boxTexture;
  }

  /// Indicates that this technique has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles a change in this technique.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// Field of view vertically in radians of the camera.
  double get fov => this._fov;
  set fov(double fov) {
    if (!Math.Comparer.equals(this._fov, fov)) {
      double prev = this._fov;
      this._fov = fov;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'fov', prev, this._fov));
    }
  }

  /// The sky box texture.
  Textures.TextureCube? get boxTexture => this._boxTxt;
  set boxTexture(Textures.TextureCube? boxTxt) {
    if (this._boxTxt != boxTxt) {
      this._boxTxt?.changed.remove(this._onChanged);
      Textures.TextureCube? prev = this._boxTxt;
      this._boxTxt = boxTxt;
      this._boxTxt?.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, 'boxTexture', prev, this._boxTxt));
    }
  }

  /// The sky box color scalar.
  Math.Color3 get boxColor => this._boxClr;
  set boxColor(Math.Color3 color) {
    if (this._boxClr != color) {
      Math.Color3 prev = this._boxClr;
      this._boxClr = color;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'boxColor', prev, this._boxClr));
    }
  }

  /// Gets the vertex source code used for the shader used by this technique.
  String get vertexSourceCode => this._shader?.vertexSourceCode ?? '';

  /// Gets the fragment source code used for the shader used by this technique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode ?? '';

  /// Updates this technique for the given state.
  void update(Core.RenderState state) {
    // Do Nothing
  }

  /// Renders this technique for the given state and entity.
  void render(Core.RenderState state, Core.Entity obj) {
    this._shader ??= new Shaders.Skybox.cached(state);

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shapeBuilder?.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos)
        ?..findAttribute(Data.VertexType.Pos)?.attr = this._shader?.posAttr?.loc ?? 0;
    }

    var boxTxt = this._boxTxt;
    if (boxTxt == null) return;
    boxTxt.index = 1;
    boxTxt.bind(state);

    double aspect = state.height.toDouble() / state.width.toDouble();
    this._shader
      ?..bind(state)
      ..fov = fov
      ..ratio = aspect
      ..boxTexture = boxTxt
      ..boxColor = this._boxClr
      ..viewMatrix = state.view.matrix.inverse();

    if (obj.cache is Data.BufferStore) {
      (obj.cache as Data.BufferStore)
        ..bind(state)
        ..render(state)
        ..unbind(state);
    } else obj.clearCache();
    this._shader?.unbind(state);

    boxTxt.unbind(state);
  }
}
