part of ThreeDart.Views;

class FrontTarget extends Target {

  Math.Color4 _color;
  bool _clearColor;

  double _depth;
  bool _clearDepth;

  int _stencil;
  bool _clearStencil;

  FrontTarget() {
    this._color = new Math.Color4.black();
    this._clearColor = true;
    this._depth = 1.0;
    this._clearDepth = true;
    this._stencil = 0;
    this._clearStencil = false;
  }

  Math.Color4 get color => this._color;
  set color(Math.Color4 color) => this._color = color;

  bool get clearColor => this._clearColor;
  set clearColor(bool clearColor) => this._clearColor = clearColor;

  double get depth => this._depth;
  set depth(double depth) => this._depth = depth;

  bool get clearDepth => this._clearDepth;
  set clearDepth(bool clearDepth) => this._clearDepth = clearDepth;

  int get stencil => this._stencil;
  set stencil(int stencil) => this._stencil = stencil;

  bool get clearStencil => this._clearStencil;
  set clearStencil(bool clearStencil) => this._clearStencil = clearStencil;

  void bind(Core.RenderState state) {
    state.gl.bindFramebuffer(WebGL.FRAMEBUFFER, null);

    state.width = state.gl.drawingBufferWidth;
    state.height = state.gl.drawingBufferHeight;
    state.gl.viewport(0, 0, state.width, state.height);
    state.gl.enable(WebGL.CULL_FACE);
    state.gl.enable(WebGL.DEPTH_TEST);

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

  void unbind(Core.RenderState state) {
    // Empty
  }
}
