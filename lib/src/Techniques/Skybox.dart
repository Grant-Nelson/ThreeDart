part of ThreeDart.Techniques;

/// A technique for a cover pass with a sky box.
class Skybox extends Technique {
  Shaders.Skybox _shader;
  double _fov;
  Textures.TextureCube _boxTxt;
  Math.Color3 _boxClr;

  /// Creates a new sky box technique with the given initial values.
  Skybox({double fov: math.PI/3.0, Textures.TextureCube boxTexture: null,
          Math.Color3 boxColor: null}) {
    this._shader = null;
    this._fov = fov;
    this.boxTexture = boxTexture;
    this.boxColor = boxColor;
  }

  /// Feild of view vertically in radians of the camara.
  double get fov => this._fov;
  set fov(double fov) => this._fov = fov;

  /// The sky box texture.
  Textures.TextureCube get boxTexture => this._boxTxt;
  set boxTexture(Textures.TextureCube boxTxt) => this._boxTxt = boxTxt;

  /// The sky box color scalar.
  Math.Color3 get boxColor => this._boxClr;
  set boxColor(Math.Color3 color) => this._boxClr = color ?? new Math.Color3.white();

  /// Updates this technique for the given state.
  void update(Core.RenderState state) {
    // Do Nothing
  }

  /// Renders this technique for the given state and entity.
  void render(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.Skybox.cached(state);

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc;
    }

    if (this._boxTxt != null) {
      this._boxTxt.index = 1;
      this._boxTxt.bind(state);
    }

    double aspect = state.height.toDouble() / state.width.toDouble();
    this._shader
      ..bind(state)
      ..fov = fov
      ..ratio = aspect
      ..boxTexture = this._boxTxt
      ..boxColor = this._boxClr
      ..viewMatrix = state.view.matrix.inverse();

    if (obj.cache is Data.BufferStore) {
      (obj.cache as Data.BufferStore)
        ..bind(state)
        ..render(state)
        ..unbind(state);
    } else obj.clearCache();
    this._shader.unbind(state);

    if (this._boxTxt != null) {
      this._boxTxt.unbind(state);
    }
  }
}
