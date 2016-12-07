part of ThreeDart.Core;

/// The state of a render in progress.
class RenderState {

  /// The rendering context for this render.
  WebGL.RenderingContext _gl;

  /// The canvas being rendered to.
  html.CanvasElement _canvas;

  /// The width of the render viewport in pixels.
  int _width;

    /// The height of the render viewport in pixels.
  int _height;

  /// The number of this frame.
  int _frameNum;

  /// The time that the graphics were created.
  DateTime _startTime;

  /// The time the last render was started at.
  DateTime _lastTime;

  /// The time the current render was started at.
  DateTime _curTime;

  /// The seconds which have passed since the previous render.
  double _dt;

  /// The projection matrix multiplied by the view matrix.
  /// This is the cache, it is reset to null when either component is changed.
  /// Null indicated the value must be recalculated.
  Math.Matrix4 _projViewMat;

  /// The inverse of the view matrix.
  /// This is the cache, it is reset to null when the view is changed.
  /// Null indicated the value must be recalculated.
  Math.Matrix4 _invViewMat;

  /// The product of the projection matrix, the view matrix, and the object matrix.
  /// This is the cache, it is reset to null when either component is changed.
  /// Null indicated the value must be recalculated.
  Math.Matrix4 _projViewObjMat;

  /// The view matrix multiplied by the object matrix.
  /// This is the cache, it is reset to null when either component is changed.
  /// Null indicated the value must be recalculated.
  Math.Matrix4 _viewObjMat;

  /// The stack of projection matrices.
  Matrix4Stack _projStack;

  /// The stack of the view matrices.
  Matrix4Stack _viewStack;

  /// The stack of Entity matrices.
  Matrix4Stack _objStack;

  /// The stack of techniques.
  List<Techniques.Technique> _tech;

  /// The cashe of compiled shaders.
  Map<String, Shaders.Shader> _shaderCache;

  /// Constructs a new render state with the given context and canvas.
  RenderState(this._gl, this._canvas) {
    this._width = 512;
    this._height = 512;
    this._frameNum = 0;
    this._startTime = new DateTime.now();
    this._lastTime = this._startTime;
    this._curTime = this._startTime;
    this._dt = 0.0;
    this._projViewMat = null;
    this._invViewMat = null;
    this._projViewObjMat = null;
    this._viewObjMat = null;
    this._projStack = new Matrix4Stack()
      ..changed.add((EventArgs e) {
        this._projViewMat = null;
        this._projViewObjMat = null;
      });
    this._viewStack = new Matrix4Stack()
      ..changed.add((EventArgs e) {
        this._projViewMat = null;
        this._invViewMat = null;
        this._projViewObjMat = null;
        this._viewObjMat = null;
      });
    this._objStack = new Matrix4Stack()
      ..changed.add((EventArgs e) {
        this._projViewObjMat = null;
        this._viewObjMat = null;
      });
    this._tech = new List<Techniques.Technique>();
    this._tech.add(null);
    this._shaderCache = new Map<String, Shaders.Shader>();
  }

  /// Resets the state to start another render.
  /// This should only be called by [ThreeDart] before starting a new render.
  void reset() {
    this._frameNum++;
    this._lastTime = this._curTime;
    this._curTime = new DateTime.now();
    this._dt = Math.diffInSecs(this._curTime, this._lastTime);
    this._projStack.clear();
    this._viewStack.clear();
    this._objStack.clear();
    this._tech.clear();
    this._tech.add(null);
  }

  /// The rendering context for the render.
  WebGL.RenderingContext get gl => this._gl;

  /// The canvas being rendered onto.
  html.CanvasElement get canvas => this._canvas;

  /// The width of the viewport in pixels.
  int get width => this._width;
  set width(int width) => this._width = width;

    /// The height of the viewport in pixels.
  int get height => this._height;
  set height(int height) => this._height = height;

  /// The number of this frame.
  int get frameNumber => this._frameNum;

  /// The time that the graphics were created.
  DateTime get startTime => this._startTime;

  /// The time the last render was started at.
  DateTime get lastTime => this._lastTime;

  /// The time the current render was started at.
  DateTime get currentTime => this._curTime;

  /// The seconds which have passed since the previous render.
  double get dt => this._dt;

  /// The projection matrix multiplied by the view matrix.
  Math.Matrix4 get projectionViewMatrix {
    if (this._projViewMat == null) {
      this._projViewMat = this.projection.matrix * this.view.matrix;
    }
    return this._projViewMat;
  }

  /// The inverse of the view matrix.
  Math.Matrix4 get inverseViewMatrix {
    if (this._invViewMat == null) {
      this._invViewMat = this.view.matrix.inverse();
    }
    return this._invViewMat;
  }

  /// The product of the projection matrix, the view matrix, and the object matrix.
  Math.Matrix4 get projectionViewObjectMatrix {
    if (this._projViewObjMat == null) {
      this._projViewObjMat = this.projectionViewMatrix * this.object.matrix;
    }
    return this._projViewObjMat;
  }

  /// The view matrix multiplied by the object matrix.
  Math.Matrix4 get viewObjectMatrix {
    if (this._viewObjMat == null) {
      this._viewObjMat = this.view.matrix * this.object.matrix;
    }
    return this._viewObjMat;
  }

  /// The stack of projection matrices.
  Matrix4Stack get projection => this._projStack;

  /// The stack of the view matrices.
  Matrix4Stack get view => this._viewStack;

  /// The stack of object matrices.
  Matrix4Stack get object => this._objStack;

  /// The current technique to render with.
  /// May return null if the technique stack is empty.
  Techniques.Technique get technique => this._tech.last;

  /// Pushes a new technique onto the stack of techniques.
  /// Pushing null will put the current technique onto the top of the stack.
  void pushTechnique(Techniques.Technique tech) {
    this._tech.add(tech ?? this.technique);
  }

  /// Pops the current technique off of the top of the stack.
  void popTechnique() {
    if (this._tech.length > 1) {
      this._tech.removeLast();
    }
  }

  /// Gets the cached shader by the given [name].
  Shaders.Shader shader(String name) => this._shaderCache[name];

  /// Adds the given [shader] to the shader cache.
  void addShader(Shaders.Shader shader) {
    if (shader == null)
      throw new Exception("May not cache a null shader.");
    String name = shader.name;
    if (name.isEmpty)
      throw new Exception("May not cache a shader with no name.");
    if (this._shaderCache.containsKey(name))
      throw new Exception("Shader cache already contains a shader by the name \"${name}\".");
    this._shaderCache[name] = shader;
  }
}
