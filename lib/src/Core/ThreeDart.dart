part of ThreeDart.Core;

/// [TreeDart] (3Dart) is the a tool for rendering WebGL with Dart.
class ThreeDart {

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

  /// The user input listener.
  UserInput _input;

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
      ..width = "100%"
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
    this._elem = canvas;
    this._gl = gl;
    this._scene = null;
    this._state = new RenderState(this._gl, this._canvas);
    this._input = new UserInput(this._canvas);

    this._canvas.onResize.listen(this._resize);
    this._justifySize();
  }

  /// The width of the canvas in pixels.
  int get width => this._canvas.width;

  /// The height of the canvas in pixels.
  int get height => this._canvas.height;

  /// The canvas being written to.
  html.CanvasElement get canvas => this._canvas;

  /// The user input listener.
  UserInput get userInput => this._input;

  /// The scene to render to the canvas.
  Scenes.Scene get scene => this._scene;
  set scene(Scenes.Scene scene) {
    this._scene = scene;
    this.render();
  }

  // TODO: Add JSON load methods.

  /// Makes sure the size of the canvas is correctly set.
  void _justifySize() {
    // Lookup the size the browser is displaying the canvas.
    var displayWidth  = this._canvas.clientWidth;
    var displayHeight = this._canvas.clientHeight;
    // Check if the canvas is not the same size.
    if ((this._canvas.width  != displayWidth) ||
        (this._canvas.height != displayHeight)) {
      // Make the canvas the same size
      this._canvas.width  = displayWidth;
      this._canvas.height = displayHeight;
    }
  }

  /// The event handler for the canvas changing size.
  void _resize(html.Event _) {
    this._justifySize();
    this.render();
  }

  /// Renders the screne to the canvas.
  void render() {
    try {
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

  /// Disposes this instands of 3Dart.
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
