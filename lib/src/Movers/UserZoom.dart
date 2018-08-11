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
      bool ctrl:  false,
      bool alt:   false,
      bool shift: false,
      Core.UserInput input: null}) {
    this._input = null;
    this._ctrlPressed  = false;
    this._altPressed   = false;
    this._shiftPressed = false;
    this._zoomScalar   = 0.01;
    this._zoom         = 0.0;
    this._frameNum     = 0;
    this._mat          = null;
    this._changed      = null;

    this.ctrlPressed  = ctrl;
    this.altPressed   = alt;
    this.shiftPressed = shift;
    this.attach(input);
  }

  /// Emits when the mover has changed.
  Core.Event get changed {
    this._changed ??= new Core.Event();
    return this._changed;
  }

  /// Handles a child mover being changed.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
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
  void _mouseWheelHandle(Core.EventArgs args) {
    if (this._ctrlPressed != this._input.ctrlPressed) return;
    if (this._altPressed != this._input.altPressed) return;
    if (this._shiftPressed != this._input.shiftPressed) return;
    Core.MouseWheelEventArgs margs = (args as Core.MouseWheelEventArgs);
    this.zoom += margs.wheel.dy*this._zoomScalar;
  }

  /// Indicates if the control/meta key must be pressed or released.
  bool get ctrlPressed => this._ctrlPressed;
  void set ctrlPressed(bool enable) {
    enable = enable ?? false;
    if (this._ctrlPressed != enable) {
      bool prev = this._ctrlPressed;
      this._ctrlPressed = enable;
      this._onChanged(new Core.ValueChangedEventArgs(this, "ctrlPressed", prev, this._ctrlPressed));
    }
  }

  /// Indicates if the alt key must be pressed or released.
  bool get altPressed => this._altPressed;
  void set altPressed(bool enable) {
    enable = enable ?? false;
    if (this._altPressed != enable) {
      bool prev = this._altPressed;
      this._altPressed = enable;
      this._onChanged(new Core.ValueChangedEventArgs(this, "altPressed", prev, this._altPressed));
    }
  }

  /// Indicates if the shift key must be pressed or released.
  bool get shiftPressed => this._shiftPressed;
  void set shiftPressed(bool enable) {
    enable = enable ?? false;
    if (this._shiftPressed != enable) {
      bool prev = this._shiftPressed;
      this._shiftPressed = enable;
      this._onChanged(new Core.ValueChangedEventArgs(this, "shiftPressed", prev, this._shiftPressed));
    }
  }

  /// The scalar to change how fast the zoom occurs.
  double get zoomScalar => this._zoomScalar;
  void set zoomScalar(double value) {
    value = value ?? 0.0;
    if (!Math.Comparer.equals(this._zoomScalar, value)) {
      double prev = this._zoomScalar;
      this._zoomScalar = value;
      this._onChanged(new Core.ValueChangedEventArgs(this, "zoomScalar", prev, this._zoomScalar));
    }
  }

  /// The current zoom value, the exponent on the scalar.
  double get zoom => this._zoom;
  void set zoom(double value) {
    value = value ?? 1.0;
    if (this._zoom != value) {
      double prev = this._zoom;
      this._zoom = value;
      this._onChanged(new Core.ValueChangedEventArgs(this, "zoom", prev, this._zoom));
    }
  }

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
