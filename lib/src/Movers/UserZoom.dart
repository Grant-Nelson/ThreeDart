part of ThreeDart.Movers;

class UserZoom implements Mover, Core.UserInteractable {

  Core.UserInput _input;
  bool _ctrlPressed;
  bool _altPressed;
  bool _shiftPressed;
  double _zoomScalar;
  double _zoom;

  int _frameNum;
  /// The matrix describing the mover's position.
  Math.Matrix4 _mat;

  UserZoom() {
    this._input = null;
    this._ctrlPressed = false;
    this._altPressed = false;
    this._shiftPressed = false;
    this._zoomScalar = 0.01;
    this._zoom = 0.0;
    this._frameNum = 0;
    this._mat = null;
  }

  bool attach(Core.UserInput input) {
    if (input == null) return false;
    if (this._input != null) return false;
    this._input = input;
    this._input.mouseWheel.add(this._mouseWheelHandle);
    return true;
  }

  void detach() {
    if (this._input != null) {
      this._input.mouseWheel.remove(this._mouseWheelHandle);
      this._input = null;
    }
  }

  void _mouseWheelHandle(Core.MouseWheelEventArgs args) {
    if (this._ctrlPressed != this._input.ctrlPressed) return;
    if (this._altPressed != this._input.altPressed) return;
    if (this._shiftPressed != this._input.shiftPressed) return;
    this._zoom += args.wheel.dy*this._zoomScalar;
  }

  bool get ctrlPressed => this._ctrlPressed;
  void set ctrlPressed(bool enable) { this._ctrlPressed = enable; }
  bool get altPressed => this._altPressed;
  void set altPressed(bool enable) { this._altPressed = enable; }
  bool get shiftPressed => this._shiftPressed;
  void set shiftPressed(bool enable) { this._shiftPressed = enable; }

  double get zoomScalar => this._zoomScalar;
  void set zoomScalar(double value) { this._zoomScalar = value; }
  double get zoom => this._zoom;
  void set zoom(double value) { this._zoom = value; }

  void _update(Core.RenderState state) {
    this._frameNum = state.frameNumber;
    double pow = math.pow(10.0, this._zoom);
    this._mat = new Math.Matrix4.scale(pow, pow, pow);
  }

  Math.Matrix4 update(Core.RenderState state, Core.Entity obj) {
    if (this._frameNum < state.frameNumber) this._update(state);
    return this._mat;
  }
}
