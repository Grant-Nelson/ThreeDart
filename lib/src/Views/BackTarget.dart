part of ThreeDart.Views;

/// A rendering target which renders to a texture instead of the screen.
class BackTarget extends Target {
  int _width;
  int _height;
  int _actualWidth;
  int _actualHeight;
  bool _hasDepth;
  WebGL.Framebuffer _framebuffer;
  WebGL.Texture _colorBuffer;
  WebGL.Renderbuffer _depthBuffer;
  Textures.Texture2D _colorTxt;
  Math.Color4 _color;
  bool _clearColor;
  double _depth;
  bool _clearDepth;
  Math.Region2 _region;
  Core.Event _changed;

  /// Creates a new back target.
  BackTarget(int this._width, int this._height, {bool hasDepth: true}) {
    this._actualWidth  = this._height;
    this._actualHeight = this._height;
    this._hasDepth     = hasDepth;
    this._framebuffer  = null;
    this._colorBuffer  = null;
    this._depthBuffer  = null;
    this._colorTxt     = new Textures.Texture2D();
    this._color        = new Math.Color4.black();
    this._clearColor   = true;
    this._depth        = 2000.0;
    this._clearDepth   = true;
    this._region       = new Math.Region2(0.0, 0.0, 1.0, 1.0);
    this._changed      = null;
  }

  /// Indicates that this target has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Handles a change in this target.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The requested width in pixels of the back buffer.
  int get width => this._width;

  /// The requested height in pixels of the back buffer.
  int get height => this._height;

  /// The actual width in pixel of the back buffer.
  int get actualWidth => this._actualWidth;

  /// The actual height in pixel of the back buffer.
  int get actualHeight => this._actualHeight;

  /// Indicates is a back buffer has ben attached to this back target.
  /// True indicates depth is enabled.
  bool get hasDepth => this._hasDepth;

  /// The color texture which is being rendered to.
  Textures.Texture2D get colorTexture => this._colorTxt;

  /// The clear color to clear the target to before rendering.
  Math.Color4 get color => this._color;
  void set color(Math.Color4 color) {
    if (this._color != color) {
      this._color = color;
      this._onChanged();
    }
  }

  /// Indicates if the color target should be cleared with the clear color.
  bool get clearColor => this._clearColor;
  void set clearColor(bool clearColor) {
    if (this._clearColor != clearColor) {
      this._clearColor = clearColor;
      this._onChanged();
    }
  }

  /// The clear depth to clear the target to before rendering.
  double get depth => this._depth;
  void set depth(double depth) {
    if (!Math.Comparer.equals(this._depth, depth)) {
      this._depth = depth;
      this._onChanged();
    }
  }

  /// Indicates if the depth target should be cleared with the clear depth.
  bool get clearDepth => this._clearDepth;
  void set clearDepth(bool clearDepth) {
    if (this._clearDepth != clearDepth) {
      this._clearDepth = clearDepth;
      this._onChanged();
    }
  }

  /// The region of the front target to render to.
  /// <0, 0> is top left corner and <1, 1> is botton right.
  Math.Region2 get region => this._region;
  void set region(Math.Region2 region) {
    if (this._region != region) {
      this._region = region;
      this._onChanged();
    }
  }

  /// Initializes the back target.
  void _initialize(WebGL.RenderingContext gl) {
    // Setup color buffer
    this._colorTxt.replace(new Textures.Texture2D.fromSize(gl, this._width, this._height));
    this._colorBuffer  = this._colorTxt.texture;
    this._actualWidth  = this._colorTxt.actualWidth;
    this._actualHeight = this._colorTxt.actualHeight;
    gl.bindTexture(WebGL.TEXTURE_2D, this._colorBuffer);

    // Setup depth buffer.
    if (this._hasDepth) {
      this._depthBuffer = gl.createRenderbuffer();
      gl.bindRenderbuffer(WebGL.RENDERBUFFER, this._depthBuffer);
      gl.renderbufferStorage(WebGL.RENDERBUFFER, WebGL.DEPTH_COMPONENT16, this._actualWidth, this._actualHeight);
    }

    // Bind render buffers to a render target frame buffer.
    this._framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(WebGL.FRAMEBUFFER, this._framebuffer);
    gl.framebufferTexture2D(WebGL.FRAMEBUFFER, WebGL.COLOR_ATTACHMENT0, WebGL.TEXTURE_2D, this._colorBuffer, 0);
    if (this._hasDepth)
      gl.framebufferRenderbuffer(WebGL.FRAMEBUFFER, WebGL.DEPTH_ATTACHMENT, WebGL.RENDERBUFFER, this._depthBuffer);

    // Clean up and release buffers.
    gl.bindTexture(WebGL.TEXTURE_2D, null);
    if (this._hasDepth) gl.bindRenderbuffer(WebGL.RENDERBUFFER, null);
    gl.bindFramebuffer(WebGL.FRAMEBUFFER, null);
  }

  /// Binds this target to the [state].
  void bind(Core.RenderState state) {
    if (this._framebuffer == null) {
      this._initialize(state.gl);
    }

    state.gl.bindFramebuffer(WebGL.FRAMEBUFFER, this._framebuffer);
    state.gl.enable(WebGL.CULL_FACE);
    if (this._hasDepth) state.gl.enable(WebGL.DEPTH_TEST);
    state.gl.depthFunc(WebGL.LESS);

    state.width  = (this._region.dx*this._width ).round();
    state.height = (this._region.dy*this._height).round();
    int xOffset  = (this._region.x *this._actualWidth ).round();
    int yOffset  = (this._region.y *this._actualHeight).round();
    int width    = (this._region.dx*this._actualWidth ).round();
    int height   = (this._region.dy*this._actualHeight).round();
    state.gl.viewport(xOffset, yOffset, width, height);

    int clearMask = 0;
    if (this._clearDepth && this._hasDepth) {
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

  /// Unbinds this target from the [state].
  void unbind(Core.RenderState state) {
    state.gl.bindFramebuffer(WebGL.FRAMEBUFFER, null);
  }
}
