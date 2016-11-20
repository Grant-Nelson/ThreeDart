part of ThreeDart.Movers;

/// A zoom mover which zooms on an object in response to user input.
class UserZoom implements Mover, Core.UserInteractable {

  /// The user input this zoomer is attached to.
  Core.UserInput _input;

  /// Indicates if the control/meta key must be pressed or released.
  bool _ctrlPressed;

  /// Indicates if the alt key must be pressed or released.
  bool _altPressed;

  /// Indicates if the shift key must be pressed or released.
  bool _shiftPressed;

  /// The scalar to change how fast the zoom occures.
  double _zoomScalar;

  /// The current zoom value.
  double _zoom;

  /// The last frame the mover was updated for.
  int _frameNum;

  /// The matrix describing the zoom.
  Math.Matrix4 _mat;

  /// Event for handling changes to this mover.
  Core.Event _changed;

  /// Creates an instance of [UserZoom].
  UserZoom({
    bool ctrl: false,
    bool alt: false,
    bool shift: false,
    Core.UserInput input: null}) {
    this._input = null;
    this._ctrlPressed = ctrl;
    this._altPressed = alt;
    this._shiftPressed = shift;
    this._zoomScalar = 0.01;
    this._zoom = 0.0;
    this._frameNum = 0;
    this._mat = null;
    this._changed = new Core.Event();
    this.attach(input);
  }

  /// Attaches this mover to the user input.
  bool attach(Core.UserInput input) {
    if (input == null) return false;
    if (this._input != null) return false;
    this._input = input;
    this._input.mouseWheel.add(this._mouseWheelHandle);
    return true;
  }

  /// Detaches this mover from the user input.
  void detach() {
    if (this._input != null) {
      this._input.mouseWheel.remove(this._mouseWheelHandle);
      this._input = null;
    }
  }

  /// Handles the mouse wheel changing.
  void _mouseWheelHandle(Core.MouseWheelEventArgs args) {
    if (this._ctrlPressed != this._input.ctrlPressed) return;
    if (this._altPressed != this._input.altPressed) return;
    if (this._shiftPressed != this._input.shiftPressed) return;
    this.zoom += args.wheel.dy*this._zoomScalar;
  }

  /// Indicates if the control/meta key must be pressed or released.
  bool get ctrlPressed => this._ctrlPressed;
  void set ctrlPressed(bool enable) { this._ctrlPressed = enable; }

  /// Indicates if the alt key must be pressed or released.
  bool get altPressed => this._altPressed;
  void set altPressed(bool enable) { this._altPressed = enable; }

  /// Indicates if the shift key must be pressed or released.
  bool get shiftPressed => this._shiftPressed;
  void set shiftPressed(bool enable) { this._shiftPressed = enable; }

  /// The scalar to change how fast the zoom occurs.
  double get zoomScalar => this._zoomScalar;
  void set zoomScalar(double value) { this._zoomScalar = value; }

  /// The current zoom value, the exponent on the scalar.
  double get zoom => this._zoom;
  void set zoom(double value) {
    if (this._zoom != value) {
      this._zoom = value;
      this._changed.emit();
    }
  }

  /// Emits when the mover has changed.
  Core.Event get changed => this._changed;

  /// Updates this mover and returns the matrix for the given object.
  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    if (this._frameNum < state.frameNumber) {
      this._frameNum = state.frameNumber;
      double pow = math.pow(10.0, this._zoom);
      this._mat = new Math.Matrix4.scale(pow, pow, pow);
    }
    return this._mat;
  }
}
