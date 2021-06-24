part of ThreeDart.Views;

/// A rendering target which renders to a texture instead of the screen.
class BackTarget extends Target {
  int _width  = 512;
  int _height = 512;
  int _actualWidth  = 512;
  int _actualHeight = 512;
  bool _hasDepth   = true;
  bool _autoResize = false;
  double _autoResizeScalarX = 1.0;
  double _autoResizeScalarY = 1.0;
  WebGL.Framebuffer? _framebuffer = null;
  WebGL.Texture? _colorBuffer = null;
  WebGL.Renderbuffer? _depthBuffer = null;
  Textures.Texture2DSolid _colorTxt = new Textures.Texture2DSolid();
  Math.Color4? _color = Math.Color4.black();
  bool _clearColor = true;
  double _depth = 2000.0;
  bool _clearDepth = true;
  Math.Region2? _region = Math.Region2.unit;
  Events.Event? _changed = null;

  /// Creates a new back target.
  BackTarget({int           width:             512,
              int           height:            512,
              bool          hasDepth:          true,
              bool          autoResize:        false,
              double        autoResizeScalarX: 1.0,
              double        autoResizeScalarY: 1.0,
              Math.Color4?  color:             null,
              bool          clearColor:        true,
              double        depth:             2000.0,
              bool          clearDepth:        true,
              Math.Region2? region:            null}) {
    this.width             = width;
    this.height            = height;
    this.color             = color;
    this.clearColor        = clearColor;
    this.depth             = depth;
    this.clearDepth        = clearDepth;
    this.autoResize        = autoResize;
    this.autoResizeScalarX = autoResizeScalarX;
    this.autoResizeScalarY = autoResizeScalarY;
    this.region            = region;
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

  /// The requested width in pixels of the back buffer.
  int get width => this._width;
  set width(int width) {
    if (width < 1) width = 1;
    if (this._width != width) {
      int old = this._width;
      this._framebuffer = null;
      this._width       = width;
      this._actualWidth = width;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'width', old, width));
    }
  }

  /// The requested height in pixels of the back buffer.
  int get height => this._height;
  set height(int height) {
    if (height < 1) height = 1;
    if (this._height != height) {
      int old = this._height;
      this._framebuffer  = null;
      this._height       = height;
      this._actualHeight = height;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'height', old, height));
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
  Math.Color4? get color => this._color;
  set color(Math.Color4? color) {
    color ??= Math.Color4.black();
    if (this._color != color) {
      Math.Color4? prev = this._color;
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
    if (this._clearDepth != clearDepth) {
      this._clearDepth = clearDepth;
      this._onBoolChanged('clearDepth', this._clearDepth);
    }
  }

  /// Indicates if the target buffer should automatically resize to the size of the canvas.
  bool get autoResize => this._autoResize;
  set autoResize(bool autoResize) {
    if (this._autoResize != autoResize) {
      this._autoResize = autoResize;
      this._onBoolChanged('autoResize', this._autoResize);
    }
  }

  /// The scalar to apply to the width when an automatic resize occurs.
  double get autoResizeScalarX => this._autoResizeScalarX;
  set autoResizeScalarX(double scalar) {
    if (!Math.Comparer.equals(this._autoResizeScalarX, scalar)) {
      double prev = this._autoResizeScalarX;
      this._autoResizeScalarX = scalar;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'autoResizeScalarX', prev, this._autoResizeScalarX));
    }
  }

  /// The scalar to apply to the height when an automatic resize occurs.
  double get autoResizeScalarY => this._autoResizeScalarY;
  set autoResizeScalarY(double scalar) {
    if (!Math.Comparer.equals(this._autoResizeScalarY, scalar)) {
      double prev = this._autoResizeScalarY;
      this._autoResizeScalarY = scalar;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'autoResizeScalarY', prev, this._autoResizeScalarY));
    }
  }

  /// The region of the front target to render to.
  /// <0, 0> is top left corner and <1, 1> is bottom right.
  Math.Region2? get region => this._region;
  set region(Math.Region2? region) {
    region ??= Math.Region2.unit;
    if (this._region != region) {
      Math.Region2? prev = this._region;
      this._region = region;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'region', prev, this._region));
    }
  }

  /// Initializes the back target.
  void _initialize(WebGL.RenderingContext2 gl) {
    // Setup color buffer
    this._colorTxt.replace(new Textures.Texture2DSolid.fromSize(gl, this._width, this._height));
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
      this.width  = ((state.gl.drawingBufferWidth  ?? 512) * this._autoResizeScalarX).round();
      this.height = ((state.gl.drawingBufferHeight ?? 512) * this._autoResizeScalarY).round();
    }

    if (this._framebuffer == null) {
      this._initialize(state.gl);
    }

    state.gl.bindFramebuffer(WebGL.WebGL.FRAMEBUFFER, this._framebuffer);
    state.gl.enable(WebGL.WebGL.CULL_FACE);
    if (this._hasDepth) state.gl.enable(WebGL.WebGL.DEPTH_TEST);
    state.gl.depthFunc(WebGL.WebGL.LESS);

    Math.Region2 region = this._region ?? Math.Region2.unit;
    state.width  = (region.dx*this._width ).round();
    state.height = (region.dy*this._height).round();
    int xOffset  = (region.x *this._actualWidth ).round();
    int yOffset  = (region.y *this._actualHeight).round();
    int width    = (region.dx*this._actualWidth ).round();
    int height   = (region.dy*this._actualHeight).round();
    state.gl.viewport(xOffset, yOffset, width, height);

    int clearMask = 0;
    if (this._clearDepth && this._hasDepth) {
      state.gl.clearDepth(this._depth);
      clearMask |= WebGL.WebGL.DEPTH_BUFFER_BIT;
    }
    if (this._clearColor) {
      state.gl.clearColor(this._color?.red ?? 0.0, this._color?.green ?? 0.0, this._color?.blue ?? 0.0, this._color?.alpha ?? 1.0);
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
