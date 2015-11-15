part of ThreeDart.Core;

class RenderState {

  WebGL.RenderingContext _gl;
  html.CanvasElement _canvas;
  int _width;
  int _height;

  int _frameNum;
  DateTime _startTime;
  DateTime _lastTime;
  DateTime _curTime;
  double _dt;

  Math.Matrix4 _projMat;
  Math.Matrix4 _viewMat;
  List<Math.Matrix4> _objMat;

  List<Techniques.Technique> _tech;

  RenderState(this._gl, this._canvas) {
    this._width = 512;
    this._height = 512;
    this._dt = 0.0;
    this._startTime = new DateTime.now();
    this._lastTime = this._startTime;
    this._curTime = this._startTime;
    this._frameNum = 0;
    this._objMat = new List<Math.Matrix4>();
    this._objMat.add(new Math.Matrix4.identity());
    this._tech = new List<Techniques.Technique>();
    this._tech.add(null);
  }

  void reset() {
    this._frameNum++;
    this._lastTime = this._curTime;
    this._curTime = new DateTime.now();
    int uSec = this._curTime.difference(this._lastTime).inMicroseconds;
    this._dt = uSec*1.0e-6;
    this._objMat.clear();
    this._objMat.add(new Math.Matrix4.identity());
    this._tech.clear();
    this._tech.add(null);
  }

  WebGL.RenderingContext get gl => this._gl;

  html.CanvasElement get canvas => this._canvas;

  int get width => this._width;
  set width(int width) => this._width = width;

  int get height => this._height;
  set height(int height) => this._height = height;

  int get frameNumber => this._frameNum;
  DateTime get startTime => this._startTime;
  DateTime get lastTime => this._lastTime;
  DateTime get currentTime => this._curTime;
  double get dt => this._dt;

  Math.Matrix4 get projectionMatrix => this._projMat;
  set projectionMatrix(Math.Matrix4 projMat) => this._projMat = projMat;

  Math.Matrix4 get viewMatrix => this._viewMat;
  set viewMatrix(Math.Matrix4 viewMat) => this._viewMat = viewMat;

  Math.Matrix4 get objectMatrix => this._objMat.last;

  Techniques.Technique get technique => this._tech.last;

  void pushMatrix(Math.Matrix4 mat, [bool multiplyMat = true]) {
    if (multiplyMat) {
      if (mat == null) {
        this._objMat.add(this.objectMatrix);
      } else {
        this._objMat.add(this.objectMatrix*mat);
      }
    } else {
      if (mat == null) {
        this._objMat.add(new Math.Matrix4.identity());
      } else {
        this._objMat.add(mat);
      }
    }
  }

  void popMatrix() {
    if (this._objMat.length > 1) {
      this._objMat.removeLast();
    }
  }

  void pushTechnique(Techniques.Technique tech) {
    this._tech.add((tech == null)?this.technique:tech);
  }

  void popTechnique() {
    if (this._tech.length > 1) {
      this._tech.removeLast();
    }
  }
}