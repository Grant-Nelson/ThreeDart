part of ThreeDart.Views;

/// The front target to write the result of a render to the HTML canvas.
class FrontTarget extends Target {
  Math.Color4 _color = Math.Color4.black();
  bool _clearColor = true;
  double _depth = 2000.0;
  bool _clearDepth = true;
  int _stencil = 0;
  bool _clearStencil = false;
  Math.Region2 _region = Math.Region2.unit;
  Events.Event? _changed = null;

  /// Constructs a new front target.
  FrontTarget({Math.Color4?  color:        null,
               bool          clearColor:   true,
               double        depth:        2000.0,
               bool          clearDepth:   true,
               int           stencil:      0,
               bool          clearStencil: false,
               Math.Region2? region:       null}) {
    this._color        = color ?? Math.Color4.black();
    this._clearColor   = clearColor;
    this._depth        = depth;
    this._clearDepth   = clearDepth;
    this._stencil      = stencil;
    this._clearStencil = clearStencil;
    this._region       = region ?? Math.Region2.unit;
  }

  /// Indicates that this target has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles a change in this target.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// Handles a change of a boolean value.
  void _onBoolChanged(String name, bool value) =>
    this._onChanged(new Events.ValueChangedEventArgs(this, name, !value, value));

  /// The clear color to clear the target to before rendering.
  Math.Color4 get color => this._color;
  set color(Math.Color4 color) {
    if (this._color != color) {
      Math.Color4 prev = this._color;
      this._color = color;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'color', prev, this._color));
    }
  }

  /// Indicates if the color target should be cleared with the clear color.
  bool get clearColor => this._clearColor;
  set clearColor(bool clearColor) {
    if (this._clearColor != clearColor) {
      this._clearColor = clearColor;
      this._onBoolChanged('clearColor', this._clearColor);
    }
  }

  /// The clear depth to clear the target to before rendering.
  double get depth => this._depth;
  set depth(double depth) {
    if (!Math.Comparer.equals(this._depth, depth)) {
      double prev = this._depth;
      this._depth = depth;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'depth', prev, this._depth));
    }
  }

  /// Indicates if the depth target should be cleared with the clear depth.
  bool get clearDepth => this._clearDepth;
  set clearDepth(bool clearDepth) {
    if (this._clearDepth = clearDepth) {
      this._clearDepth = clearDepth;
      this._onBoolChanged('clearDepth', this._clearDepth);
    }
  }

  /// The clear stencil value to clear the stencil target to before rendering.
  int get stencil => this._stencil;
  set stencil(int stencil) {
    if (this._stencil != stencil) {
      int prev = this._stencil;
      this._stencil = stencil;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'stencil', prev, this._stencil));
    }
  }

  /// Indicates if the stencil target should be cleared with the clear stencil.
  bool get clearStencil => this._clearStencil;
  set clearStencil(bool clearStencil) {
    if (this._clearStencil != clearStencil) {
      this._clearStencil = clearStencil;
      this._onBoolChanged('clearStencil', this._clearStencil);
    }
  }

  /// The region of the front target to render to.
  /// <0, 0> is top left corner and <1, 1> is bottom right.
  Math.Region2? get region => this._region;
  set region(Math.Region2? region) {
    region ??= Math.Region2.unit;
    if (this._region != region) {
      Math.Region2 prev = this._region;
      this._region = region;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'region', prev, this._region));
    }
  }

  /// Binds this target to the given state so that the following render
  /// will target the front target.
  void bind(Core.RenderState state) {
    state.gl.bindFramebuffer(WebGL.WebGL.FRAMEBUFFER, null);
    state.gl.enable(WebGL.WebGL.CULL_FACE);
    state.gl.enable(WebGL.WebGL.DEPTH_TEST);
    state.gl.depthFunc(WebGL.WebGL.LESS);

    int width    = state.gl.drawingBufferWidth  ?? 512;
    int height   = state.gl.drawingBufferHeight ?? 512;
    int xOffset  = (this._region.x *width ).round();
    int yOffset  = (this._region.y *height).round();
    state.width  = (this._region.dx*width ).round();
    state.height = (this._region.dy*height).round();
    state.gl.viewport(xOffset, yOffset, state.width, state.height);

    int clearMask = 0;
    if (this._clearStencil) {
      state.gl.clearStencil(this._stencil);
      clearMask |= WebGL.WebGL.STENCIL_BUFFER_BIT;
    }
    if (this._clearDepth) {
      state.gl.clearDepth(this._depth);
      clearMask |= WebGL.WebGL.DEPTH_BUFFER_BIT;
    }
    if (this._clearColor) {
      state.gl.clearColor(this._color.red, this._color.green, this._color.blue, this._color.alpha);
      clearMask |= WebGL.WebGL.COLOR_BUFFER_BIT;
    }
    if (clearMask > 0) {
      state.gl.clear(clearMask);
    }
  }

  /// Unbinds the front target.
  /// Actually has no effect because the front target is the default target.
  void unbind(Core.RenderState state) {
    // Empty
  }
}
