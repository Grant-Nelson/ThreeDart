part of ThreeDart.Core;

/// [TreeDart] (3Dart) is the a tool for rendering WebGL with Dart.
class ThreeDart implements Events.Changable {

  /// The element the canvas was added to or the canvas being drawn to.
  html.Element _elem;

  /// The given or added canvas being drawn to.
  html.CanvasElement _canvas;

  /// The rendering context to draw with.
  WebGL.RenderingContext2 _gl;

  /// The current scene to draw.
  Scenes.Scene _scene;

  /// The rendering state.
  RenderState _state;

  /// The loader for creating textures.
  Textures.TextureLoader _txtLoader;

  /// The user input listener.
  Input.UserInput _input;

  /// Event to indicate something attached to this instance has changed.
  Events.Event _changed;

  /// Event to indicate a render is about to occur.
  Events.Event _prerender;

  /// Event to indicate a render has just finished.
  Events.Event _postrender;

  /// Indicates the refresh should be automatically
  bool _autoRefresh;

  /// Indicates that a refresh is pending.
  bool _pendingRender;

  /// The last time that a frames per second were updated.
  DateTime _frameTime;

  /// The number of times render has been called in the last sec or more.
  int _frameCount;

  /// Creates a new 3Dart rendering on an element with the given [id].
  ///
  /// [alpha] indicates if the back color target will have an alpha channel or not.
  /// [depth] indicates if the target will have a back buffer or not.
  /// [stencil] indicates if the target will have a stencil buffer or not.
  /// [antialias] indicates if the target is antialised or not.
  factory ThreeDart.fromId(String elementId, {bool alpha: true, bool depth: true, stencil: false, antialias: true}) {
    html.Element elem = html.document.getElementById(elementId);
    if (elem == null) {
      throw new Exception("Failed to find an element with the identifier, ${elementId}.");
    }
    return new ThreeDart.fromElem(elem,
        alpha: alpha, depth: depth, stencil: stencil, antialias: antialias);
  }

  /// Creates a new 3Dart rendering on the given element.
  ///
  /// [alpha] indicates if the back color target will have an alpha channel or not.
  /// [depth] indicates if the target will have a back buffer or not.
  /// [stencil] indicates if the target will have a stencil buffer or not.
  /// [antialias] indicates if the target is antialised or not.
  factory ThreeDart.fromElem(html.Element elem, {bool alpha: true, bool depth: true, stencil: false, antialias: true}) {
    if (elem == null) {
      throw new Exception("May not create a manager from a null element.");
    }
    if (elem is html.CanvasElement) {
      return new ThreeDart.fromCanvas(elem,
          alpha: alpha, depth: depth, stencil: stencil, antialias: antialias);
    }

    html.CanvasElement canvas = new html.CanvasElement();
    canvas.style
      ..width  = "100%"
      ..height = "100%";
    elem.children.add(canvas);
    ThreeDart td = new ThreeDart.fromCanvas(canvas,
        alpha: alpha, depth: depth, stencil: stencil, antialias: antialias);
    td._elem = elem;
    return td;
  }

  /// Creates a new 3Dart rendering on the given canvas.
  ///
  /// [alpha] indicates if the back color target will have an alpha channel or not.
  /// [depth] indicates if the target will have a back buffer or not.
  /// [stencil] indicates if the target will have a stencil buffer or not.
  /// [antialias] indicates if the target is antialised or not.
  ThreeDart.fromCanvas(html.CanvasElement canvas, {bool alpha: true, bool depth: true, stencil: false, antialias: true}) {
    if (canvas == null) {
      throw new Exception("May not create a manager from a null canvas.");
    }

    // Create a WebGL 2.0 render target
    // https://www.khronos.org/registry/webgl/specs/latest/2.0/
    WebGL.RenderingContext2 gl = canvas.getContext("webgl2",
        {"alpha": alpha, "depth": depth, "stencil": stencil, "antialias": antialias});
    if (gl == null) {
      throw new Exception("Failed to get the rendering context for WebGL.");
    }
    this._canvas = canvas;
    this._elem   = canvas;
    this._gl     = gl;
    this._scene  = null;
    this._state     = new RenderState(this._gl, this._canvas);
    this._txtLoader = new Textures.TextureLoader(this._gl);
    this._input     = new Input.UserInput(this._canvas);
    this._changed       = null;
    this._prerender     = null;
    this._postrender    = null;
    this._autoRefresh   = true;
    this._pendingRender = false;
    this._frameTime     = new DateTime.now();
    this._frameCount    = 0;
    this._resize();
  }

  /// The width of the canvas in pixels.
  int get width => this._canvas.width;

  /// The height of the canvas in pixels.
  int get height => this._canvas.height;

  /// The canvas being written to.
  html.CanvasElement get canvas => this._canvas;

  /// The user input listener.
  Input.UserInput get userInput => this._input;

  /// The state used for rendering.
  RenderState get state => this._state;

  /// The loader to create textures with.
  Textures.TextureLoader get textureLoader => this._txtLoader;

  /// Indicates if a refresh is automatically called
  /// when something internally is changed.
  bool get autoRefresh => this._autoRefresh;
  void set autoRefresh(bool autoRefresh) {
    if (this._autoRefresh == autoRefresh) {
      this._autoRefresh = autoRefresh;
      this._onChanged();
    }
  }

  /// Indicates a rendering will be started on the next render frame.
  bool get pendingRender => this._pendingRender;

  /// Indicates that this instance or something attached to is has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles a change in this instance.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
    if (this._autoRefresh) this.requestRender();
  }

  /// Indicates that a render is about to occur.
  Events.Event get prerender {
    this._prerender ??= new Events.Event();
    return this._prerender;
  }

  /// Handles an event to fire prior to rendering.
  void _onPrerender([Events.EventArgs args = null]) {
    this._prerender?.emit(args);
  }

  /// Indicates that a render has just occurred.
  Events.Event get postrender {
    this._postrender ??= new Events.Event();
    return this._postrender;
  }

  /// Handles an event to fire after a render.
  void _onPostrender([Events.EventArgs args = null]) {
    this._postrender?.emit(args);
  }

  /// The scene to render to the canvas.
  Scenes.Scene get scene => this._scene;
  set scene(Scenes.Scene scene) {
    if (this._scene != scene) {
      if (this._scene != null) this._scene.changed.remove(this._onChanged);
      this._scene = scene;
      if (this._scene != null) this._scene.changed.add(this._onChanged);
      this._onChanged();
    }
  }

  /// The frames per second since the last time this getter is called.
  double get fps {
    DateTime time = new DateTime.now();
    double secs = time.difference(this._frameTime).inMilliseconds/1000.0;
    if (secs <= 0.0) return 0.0;
    double fps = this._frameCount/secs;
    this._frameCount = 0;
    this._frameTime = time;
    return fps;
  }

  /// Makes sure the size of the canvas is correctly set.
  void _resize() {
    // Lookup the size the browser is displaying the canvas in CSS pixels and
    // compute a size needed to make our drawingbuffer match it in device pixels.
    num ratio = html.window.devicePixelRatio;
    int displayWidth  = (this._canvas.clientWidth  * ratio).floor();
    int displayHeight = (this._canvas.clientHeight * ratio).floor();
    // Check if the canvas is not the same size.
    if ((this._canvas.width  != displayWidth) ||
        (this._canvas.height != displayHeight)) {
      // Make the canvas the same size
      this._canvas.width  = displayWidth;
      this._canvas.height = displayHeight;
      Timer.run(this.requestRender);
    }
  }

  /// Requests the render to be full screen.
  void fullscreen() {
    this._canvas.requestFullscreen();
  }

  /// Requests a render to start the next time the main message loop
  /// is retured to. This is debunced so that it can be called many times
  /// but will only be run once
  void requestRender() {
    if (!this._pendingRender) {
      this._pendingRender = true;
      html.window.requestAnimationFrame((num t) {
        if (this._pendingRender) {
          this._pendingRender = false;
          this.render();
        }
      });
    }
  }

  /// Renders the scene to the canvas.
  /// An optional diffent scene can be provided but
  /// typically the scene attached to this object should be used.
  /// If the scene parameter isn't set, the attached scene is used.
  void render([Scenes.Scene scene = null]) {
    try {
      this._frameCount++;
      this._pendingRender = false;
      this._resize();
      this._onPrerender();
      scene ??= this._scene;
      if (scene != null) {
        this._state.reset();
        scene.render(this._state);
      }
      this._onPostrender();
    } catch(exception, stackTrace) {
      print("Error: $exception");
      print("Stack: $stackTrace");
      throw exception;
    }
  }

  /// Disposes this instance of 3Dart.
  void dispose() {
    if (this._elem != this._canvas) {
      this._elem.children.remove(this._canvas);
    }
    this._input.dispose();
    this._elem = null;
    this._canvas = null;
    this._gl = null;
    this._scene = null;
    this._state = null;
  }
}
