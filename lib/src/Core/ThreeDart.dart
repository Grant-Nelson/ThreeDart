part of ThreeDart.Core;

class ThreeDart {

  html.Element _elem;
  html.CanvasElement _canvas;
  WebGL.RenderingContext _gl;
  Scenes.Scene _scene;
  RenderState _state;

  factory ThreeDart.fromId(String elementId, {bool alpha: true, bool depth: true, stencil: false, antialias: true}) {
    html.Element elem = html.document.getElementById(elementId);
    if (elem == null) {
      throw new Exception("Failed to find an element with the identifier, ${elementId}.");
    }
    return new ThreeDart.fromElem(elem,
        alpha: alpha, depth: depth, stencil: stencil, antialias: antialias);
  }

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

    this._canvas.onResize.listen(this._resize);
    this._justifySize();
  }

  int get width => this._canvas.width;

  int get height => this._canvas.height;

  Scenes.Scene get scene => this._scene;

  set scene(Scenes.Scene scene) {
    this._scene = scene;
    this.render();
  }

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

  void _resize(html.Event event) {
    this._justifySize();
    this.render();
  }

  void render() {
    if (this._scene != null) {
      this._state.reset();
      this._scene.render(this._state);
    }
  }
}
