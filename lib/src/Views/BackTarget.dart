part of ThreeDart.Views;

// TODO: Comment All

/// A rendering target which renders to a texture instead of the screen.
class BackTarget extends Target {

  int _width;
  int _height;
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

  /// Creates a new back target.
  BackTarget(int this._width, int this._height, {bool hasDepth: true}) {
    this._hasDepth = hasDepth;
    this._framebuffer = null;
    this._colorBuffer = null;
    this._depthBuffer = null;
    this._colorTxt = new Textures.Texture2D();
    this._color = new Math.Color4.black();
    this._clearColor = true;
    this._depth = 2000.0;
    this._clearDepth = true;
    this._region = new Math.Region2(0.0, 0.0, 1.0, 1.0);
  }

  /// The width of the back buffer.
  int get width => this._width;

  /// The height of the back buffer.
  int get height => this._height;

  /// Indicates is a back buffer has ben attached to this back target.
  /// True indicates depth is enabled.
  bool get hasDepth => this._hasDepth;

  /// The color texture which is being rendered to.
  Textures.Texture2D get colorTexture => this._colorTxt;

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

  /// The region of the front target to render to.
  /// <0, 0> is top left corner and <1, 1> is botton right.
  Math.Region2 get region => this._region;
  set region(Math.Region2 region) => this._region = region;

  /// Initializes the back target.
  void _initialize(WebGL.RenderingContext gl) {
    int maxSize = gl.getParameter(WebGL.MAX_TEXTURE_SIZE);
    if (this._width > maxSize) this._width = maxSize;
    if (this._height > maxSize) this._height = maxSize;

    // Setup color buffer
    this._colorBuffer = gl.createTexture();
    gl.bindTexture(WebGL.TEXTURE_2D, this._colorBuffer);
    gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_WRAP_S, WebGL.MIRRORED_REPEAT);
    gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_WRAP_T, WebGL.MIRRORED_REPEAT);
    gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_MIN_FILTER, WebGL.LINEAR);
    gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_MAG_FILTER, WebGL.LINEAR);
    gl.texImage2D(WebGL.TEXTURE_2D, 0, WebGL.RGBA, this._width, this._height, 0, WebGL.RGBA, WebGL.UNSIGNED_BYTE, null);

    // Setup depth buffer.
    if (this._hasDepth) {
      this._depthBuffer = gl.createRenderbuffer();
      gl.bindRenderbuffer(WebGL.RENDERBUFFER, this._depthBuffer);
      gl.renderbufferStorage(WebGL.RENDERBUFFER, WebGL.DEPTH_COMPONENT16, this._width, this._height);
    }

    // Bind render buffers to a render target frame buffer.
    this._framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(WebGL.FRAMEBUFFER, this._framebuffer);
    gl.framebufferTexture2D(WebGL.FRAMEBUFFER, WebGL.COLOR_ATTACHMENT0, WebGL.TEXTURE_2D, this._colorBuffer, 0);
    if (this._hasDepth)
      gl.framebufferRenderbuffer(WebGL.FRAMEBUFFER, WebGL.DEPTH_ATTACHMENT, WebGL.RENDERBUFFER, this._depthBuffer);

    // Clean up and release buffers.
    this._colorTxt.setInternal(this._colorBuffer);
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

    state.width = this._width;
    state.height = this._height;
    state.gl.viewport(0, 0, this._width, this._height);

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
