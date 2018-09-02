part of ThreeDart.Views;

/// A rendering target which renders to a texture instead of the screen.
class BackTarget extends Target {
  int _width;
  int _height;
  int _actualWidth;
  int _actualHeight;
  bool _hasDepth;
  bool _autoResize;
  double _autoResizeScalar;
  WebGL.Framebuffer _framebuffer;
  WebGL.Texture _colorBuffer;
  WebGL.Renderbuffer _depthBuffer;
  Textures.Texture2D _colorTxt;
  Math.Color4 _color;
  bool _clearColor;
  double _depth;
  bool _clearDepth;
  Math.Region2 _region;
  Events.Event _changed;

  /// Creates a new back target.
  BackTarget(int width, int height, {bool hasDepth: true, bool autoResize: false, double autoResizeScalar: 1.0}) {
    this._width        = 512;
    this._height       = 512;
    this._actualWidth  = 512;
    this._actualHeight = 512;
    this._hasDepth     = hasDepth ?? true;
    this._autoResize   = autoResize ?? false;
    this._autoResizeScalar = autoResizeScalar ?? 1.0;
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
    
    this.width  = width ?? 512;
    this.height = height ?? 512;
  }

  /// Indicates that this target has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles a change in this target.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Handles a change of a boolean value.
  void _onBoolChanged(String name, bool value) {
    this._onChanged(new Events.ValueChangedEventArgs(this, name, !value, value));
  }

  /// The requested width in pixels of the back buffer.
  int get width => this._width;
  void set width(int width) {
    width ??= 512;
    if (width < 1) width = 1;
    if (this._width != width) {
      int old = this._width;
      this._framebuffer = null;
      this._width       = width;
      this._actualWidth = width;
      this._onChanged(new Events.ValueChangedEventArgs(this, "width", old, width));
    }
  }

  /// The requested height in pixels of the back buffer.
  int get height => this._height;
  void set height(int height) {
    height ??= 512;
    if (height < 1) height = 1;
    if (this._height != height) {
      int old = this._height;
      this._framebuffer  = null;
      this._height       = height;
      this._actualHeight = height;
      this._onChanged(new Events.ValueChangedEventArgs(this, "height", old, height));
    }
  }

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
      Math.Color4 prev = this._color;
      this._color = color;
      this._onChanged(new Events.ValueChangedEventArgs(this, "color", prev, this._color));
    }
  }

  /// Indicates if the color target should be cleared with the clear color.
  bool get clearColor => this._clearColor;
  void set clearColor(bool clearColor) {
    if (this._clearColor != clearColor) {
      this._clearColor = clearColor;
      this._onBoolChanged("clearColor", this._clearColor);
    }
  }

  /// The clear depth to clear the target to before rendering.
  double get depth => this._depth;
  void set depth(double depth) {
    if (!Math.Comparer.equals(this._depth, depth)) {
      double prev = this._depth;
      this._depth = depth;
      this._onChanged(new Events.ValueChangedEventArgs(this, "depth", prev, this._depth));
    }
  }

  /// Indicates if the depth target should be cleared with the clear depth.
  bool get clearDepth => this._clearDepth;
  void set clearDepth(bool clearDepth) {
    if (this._clearDepth != clearDepth) {
      this._clearDepth = clearDepth;
      this._onBoolChanged("clearDepth", this._clearDepth);
    }
  }

  /// Indicates if the target buffer should automatically resize to the size of the canvas.
  bool get autoResize => this._autoResize;
  void set autoResize(bool autoResize) {
    if (this._autoResize != autoResize) {
      this._autoResize = autoResize;
      this._onBoolChanged("autoResize", this._autoResize);
    }
  }

  /// The scalar to apply to the width and height when an automatic resize occurs.
  double get autoResizeScalar => this._autoResizeScalar;
  void set autoResizeScalar(double scalar) {
    if (!Math.Comparer.equals(this._autoResizeScalar, scalar)) {
      double prev = this._autoResizeScalar;
      this._autoResizeScalar = scalar;
      this._onChanged(new Events.ValueChangedEventArgs(this, "autoResizeScalar", prev, this._autoResizeScalar));
    }
  }

  /// The region of the front target to render to.
  /// <0, 0> is top left corner and <1, 1> is botton right.
  Math.Region2 get region => this._region;
  void set region(Math.Region2 region) {
    if (this._region != region) {
      Math.Region2 prev = this._region;
      this._region = region;
      this._onChanged(new Events.ValueChangedEventArgs(this, "region", prev, this._region));
    }
  }

  /// Initializes the back target.
  void _initialize(WebGL.RenderingContext gl) {
    // Setup color buffer
    this._colorTxt.replace(new Textures.Texture2D.fromSize(gl, this._width, this._height));
    this._colorBuffer  = this._colorTxt.texture;
    this._actualWidth  = this._colorTxt.actualWidth;
    this._actualHeight = this._colorTxt.actualHeight;
    gl.bindTexture(WebGL.WebGL.TEXTURE_2D, this._colorBuffer);

    // Setup depth buffer.
    if (this._hasDepth) {
      this._depthBuffer = gl.createRenderbuffer();
      gl.bindRenderbuffer(WebGL.WebGL.RENDERBUFFER, this._depthBuffer);
      gl.renderbufferStorage(WebGL.WebGL.RENDERBUFFER, WebGL.WebGL.DEPTH_COMPONENT16, this._actualWidth, this._actualHeight);
    }

    // Bind render buffers to a render target frame buffer.
    this._framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(WebGL.WebGL.FRAMEBUFFER, this._framebuffer);
    gl.framebufferTexture2D(WebGL.WebGL.FRAMEBUFFER, WebGL.WebGL.COLOR_ATTACHMENT0, WebGL.WebGL.TEXTURE_2D, this._colorBuffer, 0);
    if (this._hasDepth)
      gl.framebufferRenderbuffer(WebGL.WebGL.FRAMEBUFFER, WebGL.WebGL.DEPTH_ATTACHMENT, WebGL.WebGL.RENDERBUFFER, this._depthBuffer);

    // Clean up and release buffers.
    gl.bindTexture(WebGL.WebGL.TEXTURE_2D, null);
    if (this._hasDepth) gl.bindRenderbuffer(WebGL.WebGL.RENDERBUFFER, null);
    gl.bindFramebuffer(WebGL.WebGL.FRAMEBUFFER, null);
  }

  /// Binds this target to the [state].
  void bind(Core.RenderState state) {
    if (this._autoResize) {
      this.width  = (state.gl.drawingBufferWidth * this._autoResizeScalar).round();
      this.height = (state.gl.drawingBufferHeight * this._autoResizeScalar).round();
    }

    if (this._framebuffer == null) {
      this._initialize(state.gl);
    }

    state.gl.bindFramebuffer(WebGL.WebGL.FRAMEBUFFER, this._framebuffer);
    state.gl.enable(WebGL.WebGL.CULL_FACE);
    if (this._hasDepth) state.gl.enable(WebGL.WebGL.DEPTH_TEST);
    state.gl.depthFunc(WebGL.WebGL.LESS);

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

  /// Unbinds this target from the [state].
  void unbind(Core.RenderState state) {
    state.gl.bindFramebuffer(WebGL.WebGL.FRAMEBUFFER, null);
  }
}
