part of ThreeDart.Techniques;

/// A technique for rendering entities with a depth fog.
class Depth extends Technique {
  Shaders.Depth _shader;
  double _start;
  double _stop;
  bool _grey;
  bool _invert;
  bool _focus;
  Events.Event _changed;

  /// Creates a new depth technique with the given initial values.
  Depth({double start:  1.0,
         double stop:   10.0,
         bool   grey:   false,
         bool   invert: false,
         bool   focus:  false}) {
    this._shader  = null;
    this._start   = 1.0;
    this._stop    = 10.0;
    this._grey    = false;
    this._invert  = false;
    this._focus   = false;
    this._changed = null;

    this.start  = start;
    this.stop   = stop;
    this.grey   = grey;
    this.invert = invert;
    this.focus  = focus;
  }

  /// Indicates that this technique has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles a change in this technique.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The value of the depth labelled 1. Closer than this will all be 1.
  double get start => this._start;
  void set start(double start) {
    start ??= 1.0;
    if (!Math.Comparer.equals(this._start, start)) {
      double prev = this._start;
      this._start = start;
      this._onChanged(new Events.ValueChangedEventArgs(this, "start", prev, this._start));
    }
  }

  /// The value of the depth labelled 0. Farther than this will all be 0.
  double get stop => this._stop;
  void set stop(double stop) {
    stop ??= 10.0;
    if (!Math.Comparer.equals(this._stop, stop)) {
      double prev = this._stop;
      this._stop = stop;
      this._onChanged(new Events.ValueChangedEventArgs(this, "stop", prev, this._stop));
    }
  }

  /// Indicates that grey scale should be outputted,
  /// otherwise high quality depth using RGB values.
  bool get grey => this._grey;
  void set grey(bool grey) {
    grey ??= false;
    if (this._grey != grey) {
      bool prev = this._grey;
      this._grey = grey;
      this._shader = null;
      this._onChanged(new Events.ValueChangedEventArgs(this, "grey", prev, this._grey));
    }
  }

  /// Indicates that the backside of the shape should be used
  /// instead of the front. This is used when getting shadow depth textures.
  bool get invert => this._invert;
  void set invert(bool invert) {
    invert ??= false;
    if (this._invert != invert) {
      bool prev = this._invert;
      this._invert = invert;
      this._onChanged(new Events.ValueChangedEventArgs(this, "invert", prev, this._invert));
    }
  }

  /// Indicates that the depth should be based off of the camera's focal point instead of the camera's view.
  bool get focus => this._focus;
  void set focus(bool focus) {
    if (this._focus != focus) {
      bool prev = this._focus;
      this._focus = focus;
      this._onChanged(new Events.ValueChangedEventArgs(this, "focus", prev, this._focus));
    }
  }

  /// Gets the vertex source code used for the shader used by this techinique.
  String get vertexSourceCode => this._shader?.vertexSourceCode;

  /// Gets the fragment source code used for the shader used by this techinique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode;

  /// Updates this technique for the given state.
  void update(Core.RenderState state) {
    // Do Nothing
  }

  /// Renders this technique for the given state and entity.
  void render(Core.RenderState state, Core.Entity obj) {
    this._shader ??= new Shaders.Depth.cached(this._grey, this._focus, state);

    if (obj.cache is! Data.BufferStore) obj.clearCache();
    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shapeBuilder.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc;
    }

    this._shader
      ..bind(state)
      ..width = this._start - this._stop
      ..stop  = this._stop
      ..projectMatrix = state.projection.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;

    if (this._invert)
      state.gl.frontFace(WebGL.WebGL.CW);

    (obj.cache as Data.BufferStore)
      ..bind(state)
      ..render(state)
      ..unbind(state);

    if (this._invert)
      state.gl.frontFace(WebGL.WebGL.CCW);

    this._shader.unbind(state);
  }
}
