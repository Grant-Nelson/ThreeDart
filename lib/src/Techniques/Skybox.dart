part of ThreeDart.Techniques;

/// A technique for a cover pass with a sky box.
class Skybox extends Technique {
  Shaders.Skybox _shader;
  double _fov;
  Textures.TextureCube _boxTxt;
  Math.Color3 _boxClr;
  Core.Event _changed;

  /// Creates a new sky box technique with the given initial values.
  Skybox({double fov: math.PI/3.0, Textures.TextureCube boxTexture: null,
          Math.Color3 boxColor: null}) {
    this._shader    = null;
    this._fov       = fov;
    this.boxTexture = boxTexture;
    this.boxColor   = boxColor;
    this._changed   = null;
  }

  /// Indicates that this technique has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Handles a change in this technique.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Feild of view vertically in radians of the camera.
  double get fov => this._fov;
  void set fov(double fov) {
    if (!Math.Comparer.equals(this._fov, fov)) {
      double prev = this._fov;
      this._fov = fov;
      this._onChanged(new Core.ValueChangedEventArgs(this, "fov", prev, this._fov));
    }
  }

  /// The sky box texture.
  Textures.TextureCube get boxTexture => this._boxTxt;
  void set boxTexture(Textures.TextureCube boxTxt) {
    if (this._boxTxt != boxTxt) {
      if (this._boxTxt != null) this._boxTxt.loadFinished.remove(this._onChanged);
      Textures.TextureCube prev = this._boxTxt;
      this._boxTxt = boxTxt;
      if (this._boxTxt != null) this._boxTxt.loadFinished.add(this._onChanged);
      this._onChanged(new Core.ValueChangedEventArgs(this, "boxTexture", prev, this._boxTxt));
    }
  }

  /// The sky box color scalar.
  Math.Color3 get boxColor => this._boxClr;
  void set boxColor(Math.Color3 color) {
    color = color ?? new Math.Color3.white();
    if (this._boxClr != color) {
      Math.Color3 prev = this._boxClr;
      this._boxClr = color;
      this._onChanged(new Core.ValueChangedEventArgs(this, "boxColor", prev, this._boxClr));
    }
  }

  /// Updates this technique for the given state.
  void update(Core.RenderState state) {
    // Do Nothing
  }

  /// Renders this technique for the given state and entity.
  void render(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.Skybox.cached(state);

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shapeBuilder.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos)
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
