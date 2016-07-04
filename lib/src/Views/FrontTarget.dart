part of ThreeDart.Views;

/// The front target to write the result of a render to the HTML canvas.
class FrontTarget extends Target {
  Math.Color4 _color;
  bool _clearColor;
  double _depth;
  bool _clearDepth;
  int _stencil;
  bool _clearStencil;
  Math.Region2 _region;

  /// Constructs a new front target.
  FrontTarget() {
    this._color = new Math.Color4.black();
    this._clearColor = true;
    this._depth = 2000.0;
    this._clearDepth = true;
    this._stencil = 0;
    this._clearStencil = false;
    this._region = new Math.Region2(0.0, 0.0, 1.0, 1.0);
  }

  /// The clear color to clear the target to before rendering.
  Math.Color4 get color => this._color;
  set color(Math.Color4 color) => this._color = color;

  /// Indicates if the color target should be cleared with the clear color.
  bool get clearColor => this._clearColor;
  set clearColor(bool clearColor) => this._clearColor = clearColor;

  /// The clear depth to clear the target to before rendering.
  double get depth => this._depth;
  set depth(double depth) => this._depth = depth;

  /// Indicates if the depth target should be cleared with the clear depth.
  bool get clearDepth => this._clearDepth;
  set clearDepth(bool clearDepth) => this._clearDepth = clearDepth;

  /// The clear stencil value to clear the stencil target to before rendering.
  int get stencil => this._stencil;
  set stencil(int stencil) => this._stencil = stencil;

  /// Indicates if the stencil target should be cleared with the clear stencil.
  bool get clearStencil => this._clearStencil;
  set clearStencil(bool clearStencil) => this._clearStencil = clearStencil;

  /// The region of the front target to render to.
  /// <0, 0> is top left corner and <1, 1> is botton right.
  Math.Region2 get region => this._region;
  set region(Math.Region2 region) => this._region = region;

  /// Binds this target to the given state so that the following render
  /// will target the front target.
  void bind(Core.RenderState state) {
    state.gl.bindFramebuffer(WebGL.FRAMEBUFFER, null);
    state.gl.enable(WebGL.CULL_FACE);
    state.gl.enable(WebGL.DEPTH_TEST);
    state.gl.depthFunc(WebGL.LESS);

    int width  = state.gl.drawingBufferWidth;
    int height = state.gl.drawingBufferHeight;
    int xOffset  = (this._region.x *width ).round();
    int yOffset  = (this._region.y *height).round();
    state.width  = (this._region.dx*width ).round();
    state.height = (this._region.dy*height).round();
    state.gl.viewport(xOffset, yOffset, state.width, state.height);

    int clearMask = 0;
    if (this._clearStencil) {
      state.gl.clearStencil(this._stencil);
      clearMask |= WebGL.STENCIL_BUFFER_BIT;
    }
    if (this._clearDepth) {
      state.gl.clearDepth(this._depth);
      clearMask |= WebGL.DEPTH_BUFFER_BIT;
    }
    if (this._clearColor) {
      state.gl.clearColor(this._color.red, this._color.green, this._color.blue, this._color.alpha);
      clearMask |= WebGL.COLOR_BUFFER_BIT;
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
