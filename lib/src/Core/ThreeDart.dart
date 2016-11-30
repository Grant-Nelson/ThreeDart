part of ThreeDart.Core;

/// [TreeDart] (3Dart) is the a tool for rendering WebGL with Dart.
class ThreeDart implements Changable {

  /// The element the canvas was added to or the canvas being drawn to.
  html.Element _elem;

  /// The given or added canvas being drawn to.
  html.CanvasElement _canvas;

  /// The rendering context to draw with.
  WebGL.RenderingContext _gl;

  /// The current scene to draw.
  Scenes.Scene _scene;

  /// The rendering state.
  RenderState _state;

  /// The loader for creating textures.
  Textures.TextureLoader _txtLoader;

  /// The user input listener.
  UserInput _input;

  /// Event to indicate something attached to this instance has changed.
  Event _changed;

  /// Indicates the refresh should be automatically
  bool _autoRefresh;

  /// Indicates that a refresh is pending.
  bool _pendingRender;

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
    WebGL.RenderingContext gl = canvas.getContext3d(
        alpha: alpha, depth: depth, stencil: stencil, antialias: antialias);
    if (gl == null) {
      throw new Exception("Failed to get the rendering context for WebGL.");
    }
    this._canvas = canvas;
    this._elem   = canvas;
    this._gl     = gl;
    this._scene  = null;
    this._state     = new RenderState(this._gl, this._canvas);
    this._txtLoader = new Textures.TextureLoader(this._gl);
    this._input     = new UserInput(this._canvas);
    this._changed       = null;
    this._autoRefresh   = true;
    this._pendingRender = false;
    this._resize();
  }

  /// The width of the canvas in pixels.
  int get width => this._canvas.width;

  /// The height of the canvas in pixels.
  int get height => this._canvas.height;

  /// The canvas being written to.
  html.CanvasElement get canvas => this._canvas;

  /// The user input listener.
  UserInput get userInput => this._input;

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
  Event get changed {
    if (this._changed == null) this._changed = new Event();
    return this._changed;
  }

  /// Handles a change in this instance..
  void _onChanged([EventArgs args = null]) {
    this._changed?.emit(args);
    if (this._autoRefresh) this.requestRender();
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
    }
  }

  /// Requests a render to start the next time the main message loop
  /// is retured to. This is debunced so that it can be called many times
  /// but will
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
  void render() {
    try {
      this._pendingRender = false;
      this._resize();
      if (this._scene != null) {
        this._state.reset();
        this._scene.render(this._state);
      }
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
